import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  standalone:true,
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.appService.getData(this.fetch).subscribe((result) => {
      this.data = result["results"];
      console.log(this.data)
    });
 
  }

  fetchNext(){
    this.fetch +=20;
    this.loadData()
  }
  fetchPrev(){
    if(this.fetch > 0){
      this.fetch -=20;
    }
    
    this.loadData();
  }

  data: any;
  limit:any = 20;
  fetch:number = 0;
  sampleurl:any;
  startIndex:number =20;
}


