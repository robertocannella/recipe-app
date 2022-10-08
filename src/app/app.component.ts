import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';
  selectedFeature = 'recipe';

  onNavigate(selectedFeature: any){
    this.selectedFeature = selectedFeature;
  }
}

