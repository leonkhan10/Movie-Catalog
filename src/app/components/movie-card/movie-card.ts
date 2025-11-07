import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
  standalone: true,
  selector: 'app-movie-card',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="card h-100 shadow-sm border-0" tabindex="0">
      <figure class="m-0">
        <div class="bg-secondary-subtle rounded-top w-100" style="aspect-ratio: 2/3;"></div>
        <figcaption class="p-3">
          <h3 class="h5 mb-1">{{ movie.title }}</h3>
          <span class="text-muted">{{ movie.year }}</span>
        </figcaption>
      </figure>
    </article>
  `,
})
export class MovieCard {
  @Input({ required: true }) movie!: Movie;
}
