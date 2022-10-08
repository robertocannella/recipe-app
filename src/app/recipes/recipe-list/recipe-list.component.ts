import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  recipes: Recipe[] = [
    new Recipe('Pizza', 'Tasty Italian cuisine!', 'https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222'),
    new Recipe('Tacos', 'Scrumptious Mexican cuisine!', 'https://st2.depositphotos.com/1006753/8665/i/450/depositphotos_86659340-stock-photo-delicious-tacos.jpg')
  ];
  ngOnInit(): void {
  }

}
