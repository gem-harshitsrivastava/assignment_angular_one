import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
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
    this.users.photo = this.registerForm.value.photo;
    console.log(this.users);
  }
  
}
