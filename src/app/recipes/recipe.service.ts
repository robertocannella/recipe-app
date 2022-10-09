import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [
        new Recipe(
            'Bruschetta', 
            'Tasty Italian cuisine!', 
            'https://cardamommagazine.com/wp-content/uploads/2021/03/italian-bruschetta.jpg',
            [new Ingredient('Bread',1),new Ingredient('Tomato',2)]),
        new Recipe(
            'Tacos', 
            'Scrumptious Mexican cuisine!', 
            'https://st2.depositphotos.com/1006753/8665/i/450/depositphotos_86659340-stock-photo-delicious-tacos.jpg',
            [new Ingredient('Taco Shells',12),new Ingredient('Tomato',1)]),
        new Recipe(
            'Gyoza',
            'Delicious Asian cuisine!', 
            'https://cardamommagazine.com/wp-content/uploads/2021/04/japanese-chicken-gyoza.jpg',
            [new Ingredient('Rice Paper',1),new Ingredient('Beef',1)]),
      ];
    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        // return a copy
        return this.recipes.slice();
    }
    getRecipe(id: number){
        // return a the exact object for editing
        return this.recipes[id];
    }
    addIngredients(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients)
    }
}