import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from '../models/repository';

@Injectable()
export class RepositoryService {

    constructor(private http: HttpClient) {
    }

    public getRepositories(params: Params): Observable<any> {
        return this.http.get(`${environment.REST_CLIENT}search/repositories`, {params})
            .pipe(map((res: any) => {
                res.items = Repository.transformCollection(res.items)
                return res;
            }));
    }

    public getRepository(id: number): Observable<any> {
        return this.http.get(`${environment.REST_CLIENT}repositories/${id}`)
            .pipe(map(res => Repository.transform(res)));
    }
}
