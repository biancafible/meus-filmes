import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  listaFilmes: Filme[];

  constructor(
    private filmeService: FilmeService
  ) { }

  ngOnInit() {
    this.filmeService.getFilmes().subscribe(data => {
      data['Search'].map(filme => {
        let film = {
          'id': filme.imdbID,
          'titulo': filme.Title,
          'ano': filme.Year,
          'tipo': filme.Type,
          'poster': filme.poster
        }
        console.log(film)
      });
    });
  }
  apagarFilme(filme: Filme): void {
    this.listaFilmes = this.listaFilmes.filter(item => item.id != filme.id);

  }

}
