import { Component, OnInit } from '@angular/core';
import {DataAccessService}  from '../services/data-access.service';
import {Router} from '@angular/router';

@Component({
  selector: 'dinosaur-list',
  templateUrl: './dinosaur-list.component.html',
  styleUrls: ['./dinosaur-list.component.css']
})
export class DinosaurListComponent implements OnInit {

  dinosaurs: Array<any>;
  constructor(private dataAccess: DataAccessService,
  private route: Router) { }

  ngOnInit() {
    this.getDinosaurs();
  }

  getDinosaurs(){
      this.dataAccess.getDinosaursFromApi()
          .then((response) => {
              this.dinosaurs = response;
          }, (error) => alert(error));
          ;
      
  }

  nagigateToDetails(selectedValue){
    console.log(`navigating to ${selectedValue}`)
    this.route.navigate(["/details",selectedValue]);

  }
    

}
