import { NgModule } from "@angular/core";
import { ContadorCompoment } from './contador/contador.component';


@NgModule({
  declarations: [
    ContadorCompoment,
  ],
  exports: [
    ContadorCompoment
  ],
  imports: [

  ]

})
export class ContadorModule {}
