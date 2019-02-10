import { NavbarComponent } from './../navbar/navbar.component';
import { HttpClient} from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  @Input() url;
  request="";
  message;
  constructor(private http: HttpClient,private navbar:NavbarComponent) { }

  addScenario(comment) {
    this.request = "http://localhost:8080/api/v1/muzix/"+this.url;
    this.http.put(this.request,
      {
        "comment": comment
      })
      .subscribe(
        data => {
          console.log("PUT Request is successful ", data);
        }
      );
      this.message = "aritst updated to "+ comment;
      this.navbar.loadWishList(); 
  }
  getMessage(){
    return this.message;
  }


}
