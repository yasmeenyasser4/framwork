import { NgFor } from '@angular/common';
import { Component, ViewChild, ElementRef,ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  srsImg: string = '';
  isTrue: boolean = false

  @ViewChild('targetImage') targetImage!: ElementRef;
  @ViewChild('targetDiv') targetDiv!: ElementRef;
  src: string = ""


  images = [
    'poert1.png',
    'port2.png',
    'port3.png',
    'poert1.png',
    'port2.png',
    'port3.png'
  ];

  showImage(index:number){

    for(let i=0 ;i< this.images.length;i++ ){
      this.src= this.images[index];
    }
      this.targetImage.nativeElement.src = this.src;
     this.targetDiv.nativeElement.classList.remove('d-none');
     this.targetDiv.nativeElement.classList.add('d-flex');



  }


  test(event:any){
    console.log(event);
  }

  hideDiv(event: MouseEvent) {
   

    const clickedElement = event.target as HTMLElement;
    console.log(clickedElement.tagName)
    if (clickedElement.tagName == 'IMG') {
      this.targetDiv.nativeElement.classList.remove('d-none');
      this.targetDiv.nativeElement.classList.add('d-flex');

    }
    else {
       this.targetDiv.nativeElement.classList.remove('d-flex');
     this.targetDiv.nativeElement.classList.add('d-none');
      
    }
  }
}









