import { Component,EventEmitter,Input,Output,output } from '@angular/core';



@Component({
  selector: 'app-temah',
  standalone: true,
  imports: [],
  templateUrl: './temah.component.html',
  styles: ``
})
export class TemahComponent {
@Input() mensaje!: string;
@Output ()mensaje2 =new EventEmitter<string>();
enviarMensaje(){
this.mensaje2.emit('Hola mundo desde hijo ')
}

}
