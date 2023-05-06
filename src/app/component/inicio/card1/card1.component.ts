import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  send(){
     console.log("OK")
     this.messageService.sendMsg("HOLA");//asincrono, mandó Hola a sus suscriptores
  }

}
