import { RepositoryService } from '../../services/repository.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-repository',
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
    public repository$: Observable<any>;
    public loadingError$ = new Subject<boolean>();

    constructor(
        private route: ActivatedRoute,
        private repositoryService: RepositoryService
    ) {}

    ngOnInit(): void {
        this.getRepository();
    }

    private getRepository(): void {
        this.repository$ = this.repositoryService.getRepository(this.route.snapshot.params.id)
    }

}
