import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';
import { RaceCreateComponent } from './components/race-create/race-create.component';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceComponent } from './components/race/race.component';

const ROUTES: Routes = [
    {
        path: 'race-list',
        component: RaceListComponent
    },
    {
        path: 'race/:id',
        component: RaceComponent
    },
    {
        path: 'race-create',
        component: RaceCreateComponent
    },
    {
        path: 'poney-create',
        component: PoneyCreateComponent
    },
    {
        path: '**',
        redirectTo: 'race-list'
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}