import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  searchData;
  constructor(private http:HttpClient) { }

  ngOnInit() {
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
