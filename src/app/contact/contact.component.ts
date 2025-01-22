import { Component, ElementRef, ViewChild } from '@angular/core';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 inputValueName:string="";
 inpuValueEmail:string="";
 inputValueAge:string="";
 inpuValuePassword:string="";
  
}
