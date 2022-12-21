import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  baseUrl: string = "https://rickandmortyapi.com/api";
  constructor(private http: HttpClient) { }

  obtenerTodoPersonajes(): Observable<Character> {
    const url = this.baseUrl + "/character";
    return this.http.get<Character>(url);
  } 
}
