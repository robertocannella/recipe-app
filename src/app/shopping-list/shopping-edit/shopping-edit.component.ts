import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', { static: false }) form!: NgForm
  editMode = false;
  editItemIndex!: number;
  editSubscription!: Subscription;
  editItem!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.editSubscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editItem = this.shoppingListService.getIngredient(index)
      this.form.setValue({
        name: this.editItem.name,
        quantity: this.editItem.quantity
      })
    })
  }

  onAddItem(form: NgForm) {

    const newIngredient = new Ingredient(form.value.name, form.value.quantity);
    if (this.editMode)
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient)
    else
      this.shoppingListService.addIngredient(newIngredient);
  }
}
