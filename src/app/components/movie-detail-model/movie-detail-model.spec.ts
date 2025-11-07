import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailModel } from './movie-detail-model';

describe('MovieDetailModel', () => {
  let component: MovieDetailModel;
  let fixture: ComponentFixture<MovieDetailModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
