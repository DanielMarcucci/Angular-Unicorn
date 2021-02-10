import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apiRoutes } from '../global/api'
import { Unicorn } from '../models/Unicorn'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnicornService {

  constructor(private http: HttpClient) { }

  getUnicorns() {
    return this.http.get(apiRoutes.unicorns)
  }

  getUnicorn(id: number) {
    return this.http.get(`${apiRoutes.unicorns}/${id}`)
  }

  saveUnicorn(unicorn: Unicorn) {
    return this.http.post(apiRoutes.unicorns, unicorn)
  }

  deleteUnicorn(id: number) {
    return this.http.delete(`${apiRoutes.unicorns}/${id}`)
  }

  updateUnicorn(id: number, unicorn: Unicorn): Observable<Unicorn> {
    return this.http.put(`${apiRoutes.unicorns}/${id}`, unicorn)
  }
}
