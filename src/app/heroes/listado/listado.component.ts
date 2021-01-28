import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[]=['Spiderman','IronMan','Hulk','Thor','Capitán América'];
  borrado: string='';
  borrarHeroe():void{
    this.borrado=this.heroes.shift() || '';
  }

}
