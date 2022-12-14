import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  currentRecipe!: Recipe;

  recipeId!: number;
  constructor(
    private recipeService: RecipeService,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((p:Params)=>{
      this.recipeId = +p['id'] 
      this.currentRecipe = this.recipeService.getRecipe(p['id'])
    })
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeId)
    this.router.navigate(['/recipes']);
  }

  addToShoppingList(){
    this.recipeService.addIngredients(this.currentRecipe.ingredients);
  }
}
