import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})

export class CountryListComponent implements OnInit {
  Countrys: any = [];
  filtro:string="";

  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    this.loadCountry();
  }

  // Get country list
  loadCountry() {
    return this.restApi.getCountrys().subscribe((data: {}) => {
      this.Countrys = data;
    });
  }


}
