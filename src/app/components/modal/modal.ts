import { Component, EventEmitter, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-modal',
  imports: [CommonModule],
  template: `
    @if (isOpen()) {
    <div
      class="modal fade show d-block"
      tabindex="-1"
      style="background-color: rgba(0, 0, 0, 0.5);"
      (click)="onClose()"
    >
      <div class="modal-dialog modal-dialog-centered" (click)="$event.stopPropagation()">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" aria-label="Close" (click)="onClose()"></button>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
    }
  `,
})
export class Modal {
  isOpen = input(false);

  closed = output<void>();

  onClose() {
    this.closed.emit();
  }
}
