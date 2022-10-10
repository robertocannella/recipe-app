import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;
  constructor(private route: ActivatedRoute,private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((p:Params)=>{
      this.id = +p['id'];
      this.editMode = p['id'] != null;
      this.initForm();
    })
  }
  onSubmit(){
    console.log(this.recipeForm)
  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'quantity': new FormControl()
      })
    )
  }
  private initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([])

    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImageUrl = recipe.imageUrl;
      recipeDesc = recipe.description;
      if(recipe['ingredients']){
        for (let ingredient of recipe.ingredients)
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'quantity': new FormControl(ingredient.quantity)
          }))
      }
      
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imgUrl': new FormControl(recipeImageUrl),
      'description': new FormControl(recipeDesc),
      'ingredients': recipeIngredients
    })
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  
}
