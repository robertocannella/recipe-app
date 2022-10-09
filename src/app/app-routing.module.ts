import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes) 
    ],
    exports: [
      RouterModule
    ]
  })

  export class AppRoutingModule{}