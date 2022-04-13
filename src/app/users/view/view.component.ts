import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';

import { UserDetail } from 'src/app/UserDetail';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
 users!:UserDetail[]
  constructor(private userdataservice:UserdataService) {
    this.users=this.userdataservice.userdetail;
    //this.createTable()
    }
   
  ngOnInit(): void {
    
  }
  // table = document.createElement("table");
  
//   createTable() {
  
//     const abcd = document.getElementById("abcd");
//     abcd!.append(this.table);
//     this.table.style.border = "1px solid";
//     this.table.style.width = "80%";
//     const rows = ['Name', 'Email', 'PhoneNo.'];
//     for (let row in rows) {
//         var th = document.createElement("th");
//         var thText = document.createTextNode(rows[row]);
//         th.appendChild(thText);
//         this.table.appendChild(th);
//         th.style.border = "1px solid";
//         th.style.fontWeight = "bold";
//     }
// }
  show(){
    console.log("data:"+this.userdataservice.userdetail);
  }
}
