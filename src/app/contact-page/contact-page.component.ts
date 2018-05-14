import { Component, OnInit } from '@angular/core';
import { Icontact } from 'src/app/Interface/Icontact';
import { ContactServicService } from 'src/app/service/contact-servic.service';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
public contact:Icontact[];
public contactA:Icontact[];
public contactB:Icontact[]
  constructor(private c:ContactServicService) { }

  ngOnInit() {
    this.contact =  this.c.getContact();
    this.contactA = this.c.getContactA();
    this.contactB = this.c.getContactB();
  }

}
