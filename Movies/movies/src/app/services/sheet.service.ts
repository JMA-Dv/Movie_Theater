import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sheet } from '../models/sheet.model';
@Injectable({
  providedIn: 'root'
})
export class SheetService {
  private apiURL = environment.apiURL+ '/sheet';
  constructor(private http: HttpClient) { }

  postSheet(sheet: Sheet){
    return this.http.post(this.apiURL,sheet);

  }
  get():Observable<string[]>{
    return this.http.get<string[]>(this.apiURL);
  }
}
