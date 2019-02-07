import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  @Input() url;
  request;
  message;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  deleteTrack(id,name){
    this.message = name +" Deleted from wish list"; 
    this.request= 'http://localhost:8080/api/v1/muzix/'+id;
    this.http.delete(this.request)
    .subscribe(
      data  => {
      console.log("Delete Request is successful ", data);
      },
      error  => {
      
      console.log("Error", error);
      
      }
      );
      
  }
  getMessage(){
    return this.message;
  }

}
