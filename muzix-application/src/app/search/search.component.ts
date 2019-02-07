import { Component, OnInit } from '@angular/core';
import { GettrackService } from '../gettrack.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchdata
  constructor(private getTracks:GettrackService) { }

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
}
