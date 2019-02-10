import { Component, OnInit } from '@angular/core';
import { GettrackService } from '../gettrack.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchdata
  searchData
  constructor(private getTracks:GettrackService,private http:HttpClient) { }

  ngOnInit() {
  }
  addScenario(newScenario: string) {
    console.log(newScenario);

    this.getTracks.getMuzixs(newScenario).subscribe((data) => {
      // console.log("incoming data is ", data['results']['trackmatches']['track']);
      this.searchdata=data['results']['trackmatches']['track'];
    });
}
getSearchData(){
  return this.searchdata;
}
getimage(search){
      return search['image'][3]['#text'];
}
getList() {

  return this.http.get('http://localhost:8080/api/v1/muzix');
}
loadWishList(){
 console.log("wishlist");
 this.getList().subscribe((data) => {
   // console.log("incoming data is ", data['results']['trackmatches']['track']);
   this.searchData=data;
 });
}

}
