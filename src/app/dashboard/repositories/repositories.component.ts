import { RepositoryService } from '../../services/repository.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-repositories',
    templateUrl: './repositories.component.html',
    styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit, OnDestroy {
    public repositories$: Observable<any>;
    public control = new FormControl()

    private destroy$ = new Subject();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private headerService: HeaderService,
        private repositoryService: RepositoryService,
    ) {
    }

    ngOnInit(): void {
        this.subscribeToControlValueChange();
    }

    private subscribeToControlValueChange(): void {
        this.control
            .valueChanges
            .pipe(
                debounceTime(300),
                takeUntil(this.destroy$)
            )
            .subscribe(value => {
                this.getRepositories({q: value});
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: {q: value},
                });
            });

        this.patchValueToControl();
    }

    private patchValueToControl(): void {
        this.control.patchValue(this.route.snapshot.queryParams.q);
    }

    private getRepositories(params: Params): void {
        this.repositories$ = this.repositoryService.getRepositories(params)
    }

    public navigateToRepository(repository): void {
        this.router.navigate([`/repository/${repository.id}`])
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
