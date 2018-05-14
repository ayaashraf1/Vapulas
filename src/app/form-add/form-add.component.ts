import { Component, OnInit } from '@angular/core';
import { Icontact } from 'src/app/Interface/Icontact';
import { ContactServicService } from 'src/app/service/contact-servic.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
 public fname:string;
 public lname:string;
 public email:string;
 public img:string;
 public code:number;
 public phone:string;
 
 item:Icontact;
  constructor(private c:ContactServicService) { }

  ngOnInit() {
  }
//   readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             //document.getElementById('blah').setAttribute('src',e.target);
//         };

//         reader.readAsDataURL(input.files[0]);
//     }

add()
{
  this.item={
    img:this.img,
    name:this.fname,
    contact:this.email

  }
    this.c.postContact(this.item);
}


}

