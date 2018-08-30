$(document).ready(() => {

$('.card').on('mouseenter', event => {
  $(event.currentTarget).addClass('card-zoom')
}).on('mouseleave', event => {
  $(event.currentTarget).removeClass('card-zoom')
})

var firstPlace = document.getElementById("first").innerHTML = "#1st " + one.innerHTML;
var secondPlace = document.getElementById("second").innerHTML = "#2nd " + two.innerHTML;
var thirdPlace = document.getElementById("third").innerHTML = "#3rd " + three.innerHTML;
var fourthPlace = document.getElementById("fourth").innerHTML = "#4th " + four.innerHTML;
var fifthPlace = document.getElementById("fifth").innerHTML = "#5th " + five.innerHTML;

var sixthPlace = document.getElementById("sixth").innerHTML = "#6th " + six.innerHTML;
var seventhPlace = document.getElementById("seventh").innerHTML = "#7th " + seven.innerHTML;
var eighthPlace = document.getElementById("eighth").innerHTML = "#8th " + eight.innerHTML;
var ninthPlace = document.getElementById("ninth").innerHTML = "#9th " + nine.innerHTML;
var tenthPlace = document.getElementById("tenth").innerHTML = "#10th " + ten.innerHTML;

var eleventhPlace = document.getElementById("eleventh").innerHTML = "#11th " + eleven.innerHTML;
var twelfthPlace = document.getElementById("twelfth").innerHTML = "#12th " + twelve.innerHTML;

});



// Add an animated position banner (#1 Saracens, #2 Exeter etc.) to the top of the page? Use getElementById to link
// the table results to the animated banner.