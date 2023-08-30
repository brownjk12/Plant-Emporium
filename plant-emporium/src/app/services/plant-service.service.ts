import { Injectable } from '@angular/core';
import { PlantDetails } from '../interfaces/plant-details';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlantApiResponse } from '../interfaces/plant-api-response';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  readonly plantApiUrl: string = 'https://perenual.com/api/species-list?page=1&key=sk-G6Bv64cbf57b863131756';
  
  constructor(private http: HttpClient) { }

  getAllPlants(pageNum: number): Observable<PlantDetails[]> {
    return this.http.get<PlantApiResponse>(this.plantApiUrl)
      .pipe(
        tap(_ => console.log('called')),
        map((x: PlantApiResponse) => x.data)
      );
  }
}
