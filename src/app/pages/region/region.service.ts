import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Region } from './region.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  API_URL = environment.API_URL

  constructor(
    private http: HttpClient
  ) { }

  getRegion() {
    return this.http.get<Region[]>(this.API_URL);
  }
}
