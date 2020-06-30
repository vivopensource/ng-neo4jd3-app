import { Component, OnInit } from '@angular/core';
import { NgNeo4jD3Options, NgNeo4jd3Service } from 'projects/ng-neo4jd3/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-neo4jd3-app';

  constructor(public ngNeo4jD3Service: NgNeo4jd3Service) { }

  ngOnInit(): void {
    let options: NgNeo4jD3Options = this.ngNeo4jD3Service.getOptionsPresentation();
    options.graphContainerHeight = '600px';
    this.ngNeo4jD3Service.setValues('#neo4jd3', options);
    this.ngNeo4jD3Service.init();
  }

}
