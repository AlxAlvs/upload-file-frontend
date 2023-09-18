import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UploadService {

  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }

  uploadFile(file:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body = file.agentes;
    return this.http.post(this.baseURL + 'upload', body, {'headers':headers});
  }

}