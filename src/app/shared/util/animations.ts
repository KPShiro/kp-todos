import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export function listAnimation() {
    return trigger('listAnimation', [
        transition('* => *', [
            query(':enter', [
                style({
                    transform: 'scale(0.9)',
                    opacity: 0,
                }),
                stagger(100, [
                    animate('0.5s', style({
                        transform: 'scale(1)',
                        opacity: 1,
                    })),
                ]),
            ], { optional: true })
        ])
    ]);
}
