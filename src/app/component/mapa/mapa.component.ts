import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from 'src/app/components/mapa/mapa-editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = -34.634;
  lng = -58.352;

  constructor( private _snackBar: MatSnackBar,
                       public dialog: MatDialog ) {

    if(localStorage.getItem('marcadores'){
      this.marcadores = JSON.parse(localStorage.getItem(this.marcadores));
    })
  

  }

  ngOnInit() {
  }

  agregarMarcador( evento ) {

    const coords: { lat: number, lng: number } = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    this.marcadores.push( nuevoMarcador );
    this.guardarStorage();
    this._snackBar.open('Marcador agregado', 'cerrar', {duration: 2000});
  }


  borrarMarcador( i:number){
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this._snackBar.open('Marcador borrado', 'cerrar', {duration: 2000});
  }

  editarMarcador( marcador: Marcador ) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {name: marcador.nombre, : direction: marcador.direction}
  });

    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if ( !result ) {
      return;
      marcador.nombre = result.titulo;
      marcador.direction = result.descripcion;
      this.guardarStorage();
      this._snackBar.open('Marcador Actualizado', 'cerrar', {duration: 2000});
    }
  });

  this.guardarStorage( {
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ));
  });

}  guardarStorage() {
    throw new Error('Method not implemented.');
  }

