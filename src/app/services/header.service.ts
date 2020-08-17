import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HeaderService {
    private inputValue = new Subject<string>();
    public inputValue$ = this.inputValue.asObservable();

    constructor() {
    }

    public emitInputValue(value: string): void {
        this.inputValue.next(value);
    }
}
