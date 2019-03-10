import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CheckpointCriteria } from '../models/checkpoint-criteria.model';

@Injectable({
  providedIn: 'root'
})
export class CheckpointCriteriaService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'ocalhost:8080/niche/checkpointcriterias';
  }

  get$ = (): Observable<CheckpointCriteria[]> => this.http.get<CheckpointCriteria[]>(this.url);

  post$ = (checkPointCritera: CheckpointCriteria): Observable<CheckpointCriteria> => this.http.post<CheckpointCriteria>(this.url, {checkPointCritera});

  patch$ = (checkpointId: number, checkPointCritera: CheckpointCriteria): Observable<CheckpointCriteria> => this.http.patch<CheckpointCriteria>(`${this.url}/${checkpointId}`, { checkPointCritera});

  delete$ = (checkpointId: number): Observable<CheckpointCriteria> => this.http.delete<CheckpointCriteria>(`${this.url}/${checkpointId}`);
}
