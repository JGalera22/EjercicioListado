import {Component} from '@angular/core';

export interface Alumno {
  nombre: string;
  apellido: string;
  edad: number;
  foto: string;
}

const ELEMENT_DATA: Alumno[] = [
  {nombre: 'Paco', apellido: "De Lucia", edad: 25, foto:"https://randomuser.me/api/portraits/men/32.jpg"},
  {nombre: 'Oscar', apellido: "Ramos", edad: 23, foto:"https://randomuser.me/api/portraits/men/46.jpg"},
  {nombre: 'Miguel', apellido: "Cabaneri", edad: 21, foto:"https://randomuser.me/api/portraits/men/97.jpg"},
  {nombre: 'Daneri', apellido: "Ruiz", edad: 18, foto:"https://randomuser.me/api/portraits/men/86.jpg"},
  {nombre: 'Luis', apellido: "Sosa", edad: 19, foto:"https://randomuser.me/api/portraits/men/1.jpg"},
  {nombre: 'Sergio', apellido: "Mateos", edad: 25, foto:"https://randomuser.me/api/portraits/men/22.jpg"},
];

/**
 * @title Listado de alumnos
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})

export class TableBasicExample {
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'foto'];
  dataSource = ELEMENT_DATA;
}



/**
 * @title Basic toolbar
 */
@Component({
  selector: 'toolbar-basic-example',
  templateUrl: 'toolbar-basic-example.html',
  styleUrls: ['toolbar-basic-example.css'],
})
export class ToolbarBasicExample {}