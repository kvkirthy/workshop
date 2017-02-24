import { Component } from '@angular/core';
import {DataAccessService} from './providers/data-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Sample';

  status: string ="";
  statusList: Array<string> = [];

  constructor(private dataAccess: DataAccessService){
    this.getStatusList();
  }

  getStatusList(){
    this.dataAccess.getStatusList().then((result) => {
      this.statusList = result;
    });
  }

  updateStatus(){
    this.dataAccess.updateStatus(this.status).then(() => this.getStatusList());
    console.log(`Status ${this.status}. Number of items in the list ${this.statusList.length}`)
  }

}
