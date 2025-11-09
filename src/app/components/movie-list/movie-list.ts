import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

import { MovieCard } from '../movie-card/movie-card';
import { Modal } from '../modal/modal';
import { MovieDetailModel } from '../movie-detail-model/movie-detail-model';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie';

@Component({
  standalone: true,
  selector: 'app-movie-list',
  imports: [CommonModule, ReactiveFormsModule, MovieCard, Modal, MovieDetailModel],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="container py-4">
      <header
        class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4"
      >
        <h1 class="mb-3 mb-md-0">Movies Catolog</h1>
        <input
          type="search"
          class="form-control w-100 w-md-50"
          placeholder="search Movies.."
          [formControl]="searchControl"
        />
      </header>

      <section class="row g-4">
        @for (movie of filteredMovies(); track movie.id) {
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <app-movie-card [movie]="movie" (click)="onSelectMovie(movie)"></app-movie-card>
        </div>
        }
      </section>

      <app-modal [isOpen]="selectedMovieExists()" (closed)="onCloseModal()">
        @if (selectedMovie()) {
        <app-movie-detail-model [movie]="selectedMovie()!" />
        }
      </app-modal>
    </main>
  `,
})
export class MovieList implements OnInit {
  private movieService = inject(MovieService);

  // Signals
  private allMovies = signal<Movie[]>([]);
  public selectedMovie = signal<Movie | null>(null);

  // Search
  public searchControl = new FormControl('');
  private searchTerm = toSignal(this.searchControl.valueChanges, {
    initialValue: '',
  });

  // Computed filtered list
  public filteredMovies = computed(() => {
    const term = this.searchTerm()?.toLowerCase() || '';
    return this.allMovies().filter((movie) => movie.title.toLowerCase().includes(term));
  });

  public selectedMovieExists = computed(() => !!this.selectedMovie());

  ngOnInit() {
    this.movieService.getMovies().subscribe({
      next: (movies) => this.allMovies.set(movies),
      error: (err) => console.error('Error : ', err),
    });
  }

  onSelectMovie(movie: Movie) {
    this.selectedMovie.set(movie);
  }

  onCloseModal() {
    this.selectedMovie.set(null);
  }

  trackByMovieId(movie: Movie): number {
    return movie.id;
  }
}
