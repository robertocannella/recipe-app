import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //@Input() currentRecipe!: Recipe;
  currentRecipe!: Recipe;
  recipeId!: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((p:Params)=>{
      this.recipeId = +p['id'] 
      this.currentRecipe = this.recipeService.getRecipe(p['id'])
    })
  }
  addToShoppingList(){
    this.recipeService.addIngredients(this.currentRecipe.ingredients)
  }
}
