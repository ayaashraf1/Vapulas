import { Injectable } from '@angular/core';
import { Icontact } from 'src/app/Interface/Icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactServicService {
  arr:Icontact[]=[
  {img:'../assets/images/img1.jpg', name:'Nicole Style' ,contact:'00448901834'},
  {img:'../assets/images/img1.jpg', name:'Nicole Style' ,contact:'00448901834'},
  {img:'../assets/images/img1.jpg', name:'Nicole Style' ,contact:'00448901834'}
  ];
  arrA:Icontact[]=[
  {img:'../assets/images/img1.jpg', name:'Aya Ashraf',contact:'aya@gmail.com'},
  {img:'../assets/images/img1.jpg', name:'Asmaa Nour',contact:'asmaa@gmail.com'},
  {img:'../assets/images/img1.jpg', name:'Alaa mohamed',contact:'alaa@gmail.com'}
  ];
  arrB:Icontact[]=[
    {img:'../assets/images/img1.jpg', name:'basmaa ali',contact:'basmaa@gmail.com'},
    {img:'../assets/images/img1.jpg', name:'belal ahmed',contact:'belal@gmail.com'},
    {img:'../assets/images/img1.jpg', name:'basem mohamed',contact:'basem@gmail.com'}
    ];
  getContact()
{
 return this.arr;
}
postContact(c:Icontact)
{
  this.arr.push(c);
}
getContactA()
{
  return this.arrA;
}
getContactB()
{
   return this.arrB;
}
  constructor() { }
}
