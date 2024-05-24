import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?query=${searchText}&number=5&apiKey=7d9176648c0546dab6c6971fefe56352';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?q=${query}`).pipe(
      catchError((error) => {
        console.error('Error fetching recipes:', error);
        throw error;
      })
    );
  }

  getRecipeDetails(recipeId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${recipeId}`).pipe(
      catchError((error) => {
        console.error('Error fetching recipe details:', error);
        throw error;
      })
    );
  }
}