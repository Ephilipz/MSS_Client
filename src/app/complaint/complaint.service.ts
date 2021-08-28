import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private readonly baseUrl = environment.baseUrl + "Complaint";
  
  constructor(private http: HttpClient) { }
}
