import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CheckpointCriteria } from '../models/checkpoint-criteria.model';
import { Store } from './store';
import { Observable } from 'rxjs';
import { CheckpointCriteriaService } from '../services/checkpoint-criteria.service';

@Injectable({
    providedIn: 'root'
})
export class CheckpointCriteriaStore extends Store<CheckpointCriteria[]> {
    constructor(private checkpointCriteriaService: CheckpointCriteriaService) {
        super();
    }

    init = (): void => {
        if (this.getAll()) { return; }

        this.checkpointCriteriaService.get$().pipe(
            tap(this.store)
        ).subscribe();
    }

    create$ = (checkpointCriteria: CheckpointCriteria): Observable<CheckpointCriteria> => this.checkpointCriteriaService
        .post$(checkpointCriteria)
        .pipe(
            tap(resultCheckpointCriteria => {
                this.store([
                    ...this.getAll(), {
                        id: resultCheckpointCriteria.id,
                        ...checkpointCriteria
                    }
                ]);
            }
            )
        )

    update$ = (criteriaId: number, checkpointCriteria: CheckpointCriteria) => this.checkpointCriteriaService
        .patch$(criteriaId, checkpointCriteria)
        .pipe(
            tap(resultCheckpointCriteria => {
                const checkpointCriterias = this.getAll();
                const checkpointCriteriaIndex = this.getAll().findIndex(item => item.id == criteriaId);
                checkpointCriterias[checkpointCriteriaIndex] = { id: resultCheckpointCriteria.id, ...checkpointCriteria };
            }
            )
        )

    delete$ = (criteriaId: number) => this.checkpointCriteriaService
        .delete$(criteriaId)
        .pipe(
            tap(() => {
                const checkpointCriterias = this.getAll();
                const checkpointCriteriaIndex = this.getAll().findIndex(item => item.id === criteriaId);
                checkpointCriterias.splice(checkpointCriteriaIndex, 1);
                this.store(checkpointCriterias);
            })
        )
}