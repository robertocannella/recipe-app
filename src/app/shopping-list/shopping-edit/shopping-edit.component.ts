import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef
  @ViewChild('quantityInput', { static: false }) quantityInputRef!: ElementRef

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const qty = this.quantityInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, qty);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
