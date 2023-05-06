import { Component } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';


@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {
  data:any;

  constructor(private messageService: MessageService) {
    this.data = "";
   }


  ngOnInit(): void {
     this.data = "";
     //Este componente se subscribe a los eventos emitidos por el servicio MessageService
     this.messageService.getMsg().subscribe((message:any) => {
       this.data = message;
       console.log(message);
    });
  }

}
