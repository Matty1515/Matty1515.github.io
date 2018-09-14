$(document).ready(() => {

$('.card').on('mouseenter', event => {
  $(event.currentTarget).addClass('card-zoom')
}).on('mouseleave', event => {
  $(event.currentTarget).removeClass('card-zoom')
})

const bristolStats = {
	position: "1st",
	name: "Bristol Rugby",
	played: "2",
	won: "1",
	drawn: "0",
	lost: "1",
	difference: "23",
	points: "5",
};

document.getElementById('bristolTablePosition').innerHTML = bristolStats.position;
document.getElementById('bristolTableName').innerHTML = bristolStats.name;
document.getElementById('bristolTablePlayed').innerHTML = bristolStats.played;
document.getElementById('bristolTableWon').innerHTML = bristolStats.won;
document.getElementById('bristolTableDrawn').innerHTML = bristolStats.drawn;
document.getElementById('bristolTableLost').innerHTML = bristolStats.lost;
document.getElementById('bristolTableDifference').innerHTML = bristolStats.difference;
document.getElementById('bristolTablePoints').innerHTML = bristolStats.points;

// Everything after this tag won't run
});

// Add an animated position banner (#1 Saracens, #2 Exeter etc.) to the top of the page? Use getElementById to link
// the table results to the animated banner.

