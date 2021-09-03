import { LastUpdateDatePipe } from './last-update-date-pipe.pipe';

describe('LastUpdateDatePipe', () => {
    let pipe: LastUpdateDatePipe;

    beforeEach(() => {
        pipe = new LastUpdateDatePipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return "Today"', () => {
        const now = new Date();
        expect(pipe.transform(now)).toBe('Today');
    });

    it('should return "Yesterday"', () => {
        const now = new Date();
        const date = new Date();
        date.setDate(now.getDate() - 1);

        expect(pipe.transform(date)).toBe('Yesterday');
    });

    it('should return "This week"', () => {
        const now = new Date();
        const date = new Date();
        date.setDate(now.getDate() - 5);

        expect(pipe.transform(date)).toBe('This week');
    });

    it('should return "Last week"', () => {
        const now = new Date();
        const date = new Date();
        date.setDate(now.getDate() - 10);

        expect(pipe.transform(date)).toBe('Last week');
    });

    it('should return "Long time ago"', () => {
        const now = new Date();
        const date = new Date();
        date.setDate(now.getDate() - 21);

        expect(pipe.transform(date)).toBe('Long time ago');
    });
});
