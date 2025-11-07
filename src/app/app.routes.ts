import { Routes } from '@angular/router';
import { MovieDetailModel } from './components/movie-detail-model/movie-detail-model';
import { MovieList } from './components/movie-list/movie-list';

export const routes: Routes = [
    {
        path:'',
        component:MovieList
    },
    {
        path:'detail',
        component:MovieDetailModel
    }
];
