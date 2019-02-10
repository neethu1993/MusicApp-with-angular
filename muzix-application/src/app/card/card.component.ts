import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() url;
message;

  constructor(private httpClient:HttpClient) { 
    
  }
  getMessage(){
    return this.message;
  }
  ngOnInit() {
  }
  getimage(search){
    return search['image'][3]['#text'];
}

  addList(name,comment,id,image){
    this.httpClient.post("http://localhost:8080/api/v1/muzix",
  {
    "trackId": id,
    "trackName": name,
    "comment": comment,
    "imageurl":image
},
{
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
})
.subscribe(
data  => {
console.log("POST Request is successful ", data);
},
error  => {

console.log("Error", error);

}
);
this.message=name+" Added to wish list";
  }
  
}  
