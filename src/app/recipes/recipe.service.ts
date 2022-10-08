import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [
        new Recipe('Bruschetta', 'Tasty Italian cuisine!', 'https://cardamommagazine.com/wp-content/uploads/2021/03/italian-bruschetta.jpg'),
        new Recipe('Tacos', 'Scrumptious Mexican cuisine!', 'https://st2.depositphotos.com/1006753/8665/i/450/depositphotos_86659340-stock-photo-delicious-tacos.jpg'),
        new Recipe('Gyoza', 'Delicious Asian cuisine!', 'https://cardamommagazine.com/wp-content/uploads/2021/04/japanese-chicken-gyoza.jpg')
      ];

    getRecipes(){
        // return a copy
        return this.recipes.slice();
    }
}