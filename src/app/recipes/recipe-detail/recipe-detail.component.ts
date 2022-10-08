import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() currentRecipe!: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

  }
  addToShoppingList(){
    this.recipeService.addIngredients(this.currentRecipe.ingredients)
  }
}
