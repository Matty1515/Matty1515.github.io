$(document).ready(() => {

$('.card').on('mouseenter', event => {
  $(event.currentTarget).addClass('card-zoom')
}).on('mouseleave', event => {
  $(event.currentTarget).removeClass('card-zoom')
})

});