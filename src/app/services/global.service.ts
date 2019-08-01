import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GlobalVars {
  API_KEY = 'UjpeAobFC4aNpXTIO7FlY4Fe8o8vDB0J5DzoF1Nn';
  public apiUrl = 'https://0pktgh8m23.execute-api.us-west-1.amazonaws.com/prod/';
  public apiKeyOptions: any;

  constructor() {
    this.apiKeyOptions = {
      headers: new HttpHeaders({ 'X-API-KEY':  this.API_KEY })
    };
}
}
