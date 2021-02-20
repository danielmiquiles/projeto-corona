import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Region } from './region.interface';
import { RegionService } from './region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  region!: Region[];
  estaCarregando!: boolean;
  erroCarregamento!: boolean;

  constructor(
    private regionService: RegionService
  ) { }

  ngOnInit(): void {
  }

  getDataRegion() {
    this.estaCarregando = true;
    this.erroCarregamento = false;

    this.regionService.getRegion().pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
    )
  }

  onSuccess(response: Region[]) {
    this.region = response;
  }

  onError(error: any) {
    this.erroCarregamento = true; 
    console.error(error);
  }

}
