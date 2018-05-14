import { Component, OnInit,Input } from '@angular/core';
import { Icontact } from 'src/app/Interface/Icontact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   @Input() public arr:Icontact;
  constructor() { 

  }

  ngOnInit() {
  }

}
