import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../lab-recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeDetails('https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=7d9176648c0546dab6c6971fefe56352').subscribe(
      (data) => {
        this.recipe = data;
      },
      (error) => {
        // Handle error
      }
    );
  }
}
