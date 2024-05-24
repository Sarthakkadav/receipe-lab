import { Component } from '@angular/core';
import { RecipeService } from '../lab-recipe.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';

  constructor(private recipeService: RecipeService) {}

  searchRecipes() {
    this.recipeService.searchRecipes(this.searchQuery).subscribe(
      (data) => {
        // Handle search results
      },
      (error) => {
        // Handle error
      }
    );
  }
}
