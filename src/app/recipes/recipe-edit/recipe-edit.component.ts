import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  recipeFrom!: FormGroup;
  constructor(private route: ActivatedRoute,private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((p:Params)=>{
      this.id = +p['id'];
      this.editMode = p['id'] != null;
      this.initForm();
    })
  }
  private initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeDesc = '';

    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImageUrl = recipe.imageUrl;
      recipeDesc = recipe.description;
    }

    this.recipeFrom = new FormGroup({
      'name': new FormControl(recipeName),
      'imgUrl': new FormControl(recipeImageUrl),
      'description': new FormControl(recipeDesc)
    })
  }
}
