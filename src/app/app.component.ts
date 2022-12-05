import { Component } from '@angular/core';
import { NgModule  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam';
  arr: persondetails[]=[
    // { rollnumber:'REG101', name:'Ajith',place:'Kannur',contact:9598321589},
    // { rollnumber:'REG102', name:'Mariya',place:'Kozhikkode',contact:8751348712},
  ]
  registerClicked(e:any){
    e.preventDefault();
    this.lastRollNumber++;
    this.arr.push({rollnumber:'REG'+this.lastRollNumber, name:this.name, place:this.place, contact:this.contact});
  }
  clearClicked()
  {
   this.arr=[];
  }
  removeClicked(rollnumber:any){
     this.arr.findIndex(x=>x.rollnumber==rollnumber);
      this.arr.splice(index, 1);
  }

  submitUser(userFrm:any){
     console.log(userFrm);

  }
  
  lastRollNumber:number=100;

  name:string="";
  place:string="";
  contact:number=0;


  
}
export interface persondetails {
  rollnumber:string,
  name:string,
  place:string,
  contact:number,
 
}


