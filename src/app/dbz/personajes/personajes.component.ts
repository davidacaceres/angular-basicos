import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {
  //@Input() personajes:Personaje[] =[];


  constructor(private dbzService: DbzService) { }

  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }

}
