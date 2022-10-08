import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Tomato Sauce', 1),
        new Ingredient('Mozzarella Cheese', 1),
        new Ingredient('pizza dough', 2)

    ];

    getIngredients() {
        // return a copy
        return this.ingredients.slice()
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}