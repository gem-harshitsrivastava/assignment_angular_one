import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { UserdataService } from 'src/app/userdata.service';

import {UserDetail} from 'src/app/UserDetail'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent{
  username=""
  userphone=""
  showModal=false;
  technologies=[]
  photourl:any
  registerForm=new FormGroup({
    name:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30), Validators.minLength(2)]),
    gender:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required, Validators.email, Validators.pattern('^(.+)@(.+)$')]),
    phone:new FormControl('',[Validators.required, Validators.pattern('(0/91)?[6-9][0-9]{9}'), Validators.minLength(10)]),
    category:new FormControl('General',Validators.required),
    technologiesC:new FormControl(false),
    technologiesCpp:new FormControl(false),
    technologiesJ:new FormControl(false),
    technologiesP:new FormControl(false),
    technologiesJs:new FormControl(false),
    photo:new FormControl('')
  })
  subFinal(){
    this.userdataservice.userdetail.push(this.users)
    console.log(this.userdataservice.userdetail)
  }
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  
  constructor(private userdataservice:UserdataService){
    this.users = {
      name:"",
      email:"",
      gender:"",
      phone:"",
      category:"",
      technologies:[],  
      photo:""
    }
   }
  users: UserDetail
  registerUser(){
    this.users.technologies = [];
    if (this.registerForm.value.technologiesC) {
      this.users.technologies.push('c');
    }
    if (this.registerForm.value.technologiesCpp) {
      this.users.technologies.push('c++');
    }
    if (this.registerForm.value.technologiesJ) {
      this.users.technologies.push('java');
    }
    if (this.registerForm.value.technologiesP) {
      this.users.technologies.push('Python');
    }
    if (this.registerForm.value.technologiesJs) {
      this.users.technologies.push('JavaScript');
    }
    console.log(this.registerForm.value);
    this.users.name = this.registerForm.value.name;
    this.users.gender = this.registerForm.value.gender;
    this.users.email = this.registerForm.value.email;
    this.users.phone = this.registerForm.value.phone;
    this.users.category = this.registerForm.value.category;
    this.users.photo = this.photourl;
    console.log(this.users);
  }
  // $event:Event
  // onChange($event:Event){
  //   const file=($event.target as HTMLInputElement).files[0];
  //   console.log(file);
  // }
  onChange($event:Event){
    const file=($event.target as HTMLInputElement).files
    console.log("hello")
    console.log(file)
    if(file!=null){
    this.convertToBase64(file[0])
    }
  }
  convertToBase64(file:File){
    const observable=new Observable((subscriber:Subscriber<any>)=>{
      this.readFile(file,subscriber)
    })
    observable.subscribe((d)=>{
      this.photourl=d;
      console.log(d)
    })
  }
  readFile(file:File,subscriber:Subscriber<any>){
    const fileReader=new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload=()=>{
      subscriber.next(fileReader.result);
      subscriber.complete();
    }
    fileReader.onerror=(error)=>{
      subscriber.error(error)
      subscriber.complete()
    }
  }
}
