import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../lab-recipe.service';

@Component({
  selector: 'app-result-recipe',
  templateUrl: './result-recipe.component.html',
  styleUrls: ['./result-recipe.component.css']
})
export class ResultRecipeComponent implements OnInit {
  recipes: any[] = [];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['q'];
      if (query) {
        this.recipeService.searchRecipes('https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=7d9176648c0546dab6c6971fefe56352').subscribe(
          (data) => {
            this.recipes = data.results;
          },
          (error) => {
            // Handle error
          }
        );
      }
    });
  
  }

}
