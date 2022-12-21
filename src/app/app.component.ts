import { Component, OnInit } from '@angular/core';
import { Result } from './interfaces/character.interface';
import { RickAndMortyService } from './service/rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material';
  personajes: Result[] = [];
  showFiller = false;
  listaMenu: string[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {
  }

  ngOnInit(): void {
    this.loadMenu();
    this.rickAndMortyService.obtenerTodoPersonajes().subscribe((data) => {
      this.personajes = data.results;
    });
  }

  loadMenu() {
    this.listaMenu = ['Personajes', 'Catalogo', 'Episodio', 'Reclamos', 'Chat', 'Ver']
  }

}
