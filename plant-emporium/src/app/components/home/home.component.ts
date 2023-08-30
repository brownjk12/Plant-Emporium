import { Component } from '@angular/core';
import { PlantDetails } from '../../interfaces/plant-details';
import { PlantService } from '../../services/plant-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  plantDetails: PlantDetails[] = [];
  pageNum: number = 1;

  constructor(plantService: PlantService) {
    plantService.getAllPlants(this.pageNum)
      .subscribe(plantDetails => {
        this.plantDetails = plantDetails;
        this.pageNum++;
      });
  }
}
