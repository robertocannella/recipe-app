import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  currentSelectedRecipe = new Recipe('Pizza', 'Tasty Italian cuisine!', 'https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222')
  constructor() { }
  onSelect(recipe: Recipe){
    this.currentSelectedRecipe=recipe;
  }
  ngOnInit(): void {
  }

}
