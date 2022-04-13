import { Injectable } from '@angular/core';
import { UserDetail } from './UserDetail';

export class UserdataService {
  userdetail!:UserDetail[]
  constructor() {
    this.userdetail=[]
   }
}
