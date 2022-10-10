import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeId!: number;
  editMode = false;
  recipeForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((p:Params)=>{
      this.recipeId = +p['id'];
      this.editMode = p['id'] != null;
      this.initForm();
    })
  }
  onSubmit(){ 
    // Building the object is not necessary when using ReactiveForms
    // 
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imageUrlUrl'],
    //   this.recipeForm.value['ingredients']
    // );

    if (this.editMode){
      //this.recipeService.updateRecipe(this.id,newRecipe)
      this.recipeService.updateRecipe(this.recipeId,this.recipeForm.value)
    }else{
      this.recipeService.addRecipe(this.recipeForm.value)
      //this.recipeService.addRecipe(newRecipe)
    }
    this.onCancel();

  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'quantity': new FormControl(null,[
          Validators.required,
          Validators.pattern((/^[1-9]+[0-9]*$/))
        ])
      })
    )
  }
  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  private initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([])

    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.recipeId);
      recipeName = recipe.name;
      recipeImageUrl = recipe.imageUrl;
      recipeDesc = recipe.description;
      if(recipe['ingredients']){
        for (let ingredient of recipe.ingredients)
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'quantity': new FormControl(ingredient.quantity,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
      }
      
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imageUrl': new FormControl(recipeImageUrl, Validators.required),
      'description': new FormControl(recipeDesc, Validators.required),
      'ingredients': recipeIngredients
    })
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});
  }
}
