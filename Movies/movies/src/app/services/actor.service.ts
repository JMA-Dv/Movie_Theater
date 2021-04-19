import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actor, ActorDTO } from '../models/actor.model';
import { formatDateFromData } from '../utilities/utils';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiUrl = environment.apiURL + '/actor';

  constructor(private http: HttpClient) { }

  getAllActors(page: number, recordsPerPage: number):Observable<any>{
    let params = new HttpParams();
    params = params.append('page',page.toString());
    params = params.append('recordsPerPage',recordsPerPage.toString());

    return this.http.get<ActorDTO[]>(this.apiUrl,{observe:'response',params});
  }

  getActorById(actorId: number):Observable<ActorDTO>{
    return this.http.get<ActorDTO>(`${this.apiUrl}/${actorId}`)
  }

  createActor(actor: Actor){
    const formData = this.buildFormData(actor);
    return this.http.post(this.apiUrl,formData);
  }

  updateActor(actorId: number, actor: Actor){
    const formData = this.buildFormData(actor);
    return this.http.put(`${this.apiUrl}/${actorId}`,formData);
  }
  deleteActor(actorId:number){
    return this.http.delete(`${this.apiUrl}/${actorId}`);
  }

  private buildFormData (actor: Actor):FormData{
    const formData = new FormData();
    formData.append('name',actor.name);

    if(actor.biography)
      formData.append('biography',actor.biography)

    if(actor.dateOfBirth)
      formData.append('dateOfBirth', formatDateFromData(actor.dateOfBirth));

    if(actor.picture)
      formData.append('picture',actor.picture);

    return formData;
  }
}
