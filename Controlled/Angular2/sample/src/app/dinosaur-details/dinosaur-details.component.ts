import { Component, OnInit } from '@angular/core';
import {Router,Params, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

import {DataAccessService} from '../services/data-access.service';

@Component({
  selector: 'app-dinosaur-details',
  templateUrl: './dinosaur-details.component.html',
  styleUrls: ['./dinosaur-details.component.css']
})
export class DinosaurDetailsComponent implements OnInit {

  
  constructor(private activeRoute: ActivatedRoute, private dataAccess: DataAccessService) { }
  
  dinosaur: any;

  ngOnInit() {
    let dinosaurName;
    this.activeRoute.params
      .map((params: Params) => params["name"] )
      .subscribe(
        (data) => {
          this.dataAccess.getDinosaursFromApiByName(data).then((response ) => this.dinosaur = response);
        },
        (error) => console.log(error),
        () => console.log("done")
      );
      
      ;
    
  }

}
