import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'lastUpdateDate'
})
export class LastUpdateDatePipe implements PipeTransform {

    /* eslint-disable complexity */
    public transform(value: string | Date): string {
        let resultString: string = 'LastUpdateDatePipe_Error';

        try {
            const valueDate: Date = typeof value === 'string' ? new Date(value) : value;
            const nowDate: Date = new Date();

            const dateDiff: number = (nowDate?.getTime() - valueDate?.getTime()) / 1000;
            const daysDiff: number = Math.floor((dateDiff) / 86400);

            if (daysDiff === 0) {
                resultString = 'Today';
            }

            if (daysDiff === 1) {
                resultString = 'Yesterday';
            }

            if (daysDiff > 1 && daysDiff <= 6) {
                resultString = 'This week';
            }

            if (daysDiff > 6 && daysDiff <= 14) {
                resultString = 'Last week';
            }

            if (daysDiff > 14) {
                resultString = 'Long time ago';
            }
        } catch(error: any) {
            console.error(error);
        }

        return resultString;
    }
    /* eslint-enable */

}
