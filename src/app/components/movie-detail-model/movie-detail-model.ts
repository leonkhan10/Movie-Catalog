import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../interfaces/movie';

@Component({
  standalone: true,
  selector: 'app-movie-detail-model',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card shadow-sm p-4">
      <div class="row g-4">
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <div class="bg-secondary-subtle rounded w-100" style="aspect-ratio: 2/3;"></div>
        </div>

        <div class="col-md-8">
          <header class="d-flex justify-content-between align-items-center mb-3">
            <h2 class="mb-0">{{ movie.title }}</h2>
            <span class="badge bg-info text-dark">{{ movie.year }}</span>
          </header>

          <div class="mb-2">
            @for (genre of movie.genres; track movie) {
            <span class="badge bg-secondary me-1">{{ genre }}</span>
            }
          </div>

          <p class="text-muted">{{ movie.description }}</p>

          <div class="mt-3">
            <span class="fw-bold">Rating:</span>
            <span class="badge bg-success">{{ movie.rating }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class MovieDetailModel {
  @Input({ required: true }) movie!: Movie;
}
