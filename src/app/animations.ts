import { animate, query, style, transition, trigger, stagger } from '@angular/animations';

const optional = {
  optional: true
}

export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      })
    ], optional),

    query('app-showcase', [
      style({
        opacity: 0
      })
    ], optional),

    query(':enter', [
      animate(
        '500ms ease',
        style({opacity: 1, transform: 'scale(1) translateY(0)'})
      )
    ], optional),

    query('app-showcase', [
      stagger(400, [
        animate(500, style({
          opacity: 1
        }))
      ])
    ], optional)
  ])
]);
