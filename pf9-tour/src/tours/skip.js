import { short_wait, add_spotlight_overlay  } from './globals';

export function skip(){
  $(".popover.tourist-popover").remove();

  var STEPS = [{
    content: '<p>You can come back and take the tour anytime from here</p>',
    target: $('#pf9-tour'),
    setup: function(tour, options, view) {
      var self = this;
      setTimeout(function(){
          add_spotlight_overlay();
      }, short_wait);
    },
    my: 'top center',
    at: 'top center',
    okButton: true,
  }]

  var TOUR = new Tourist.Tour({
    steps: STEPS,
    tipOptions:{
      showEffect: 'slidein'
    }
  });
  TOUR.start();
}
