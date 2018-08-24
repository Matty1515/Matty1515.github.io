$(document).ready(() => {

$('.card').on('mouseenter', event => {
  $(event.currentTarget).addClass('card-zoom')
}).on('mouseleave', event => {
  $(event.currentTarget).removeClass('card-zoom')
})

});

// Add an animated position banner (#1 Saracens, #2 Exeter etc.) to the top of the page? Use getElementById to link
// the table results to the animated banner.