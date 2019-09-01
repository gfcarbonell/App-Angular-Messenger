import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.styl']
})
export class ConversationComponent implements OnInit {


  constructor(private activeRoute: ActivatedRoute) { 
    console.log("Parameter:", activeRoute.snapshot.params["id"]);
  }

  ngOnInit() {
  }

}
