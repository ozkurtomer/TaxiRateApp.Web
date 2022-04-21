import { Component, OnInit } from '@angular/core';
import { Cities } from '../city.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-list-group',
  templateUrl: './city-list-group.component.html',
  styleUrls: ['./city-list-group.component.css'],
})
export class CityListGroupComponent implements OnInit {
  cities: Cities[] = [];
  currentCity: Cities;

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.getCities();
  }

  setCurrentCity(City: Cities) {
    this.currentCity = City;
  }

  getCities() {
    this.cityService.getCities().subscribe((response) => {
      console.log(response);
      this.cities = response.data;
    });
  }

  getCurrentCityClass(City: Cities) {
    if (City == this.currentCity) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
