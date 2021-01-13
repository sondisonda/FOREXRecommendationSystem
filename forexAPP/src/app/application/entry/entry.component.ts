import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock} from 'src/app/application/model/stock';
import { Predictions} from 'src/app/application/model/predictions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {

  title = 'FOREX Recommendation System ';
  stockimg = '';
  lstmimg = '';
  condition = 0;

  constructor(private _http: HttpClient) {
    this.s1.todayDate = '____-__-__';
    this.s1.previousDate =  '____-__-__';
    this.s1.stockID = '____';
    this.p1.candleName = '';
    this.p1.trendVal = '';
    this.p1.spotDate = '';
    this.p1.trend = '';
    this.p1.taRecommendation = 'czekaj';

  }

  s1: Stock = new Stock();
  p1: Predictions = new Predictions();



  getStockImage(): void
  {
  this.stockimg = '/getimg';
  }

  getLSTMImage(): void
  {
  this.lstmimg = '/getlstmplot';
  }


  loadStockData(): void
  {
    this.getStockInfo().subscribe(a => this.s1 = a);
    this.getStockImage();
  }

  getStockInfo()
  {
    return this._http
      .get<Stock>('/getstockdata') ;
  }

  getPatternInfo()
  {
    return this._http
      .get<Predictions>('/getpatterns') ;
  }

  loadPredictedInfo(): void
  {
    this.condition = 1;
    this.getPatternInfo().subscribe(a => this.p1 = a);
    this.getLSTMImage();
  }

}







