import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {


  constructor(private messageService: MessageService) { }
  data :any;

  ngOnInit(): void {
     this.data = "";
     this.messageService.getMsg().subscribe((message: any) => {
       this.data = message;
       console.log(message);
    });
  }
}
