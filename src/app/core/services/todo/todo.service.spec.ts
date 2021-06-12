import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
    let service: TodoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ TodoService ],
        });
        service = TestBed.inject(TodoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
