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

// Constructor function for rugby players by appearances
function Appearances(rank, name, club, year, apps, active) {
    this.rank = rank;
    this.playerName = name;
    this.club = club;
    this.yearsActive = year;
	this.apps = apps;
	this.currentlyActive = active;
}
// Rugby players by appearances as new objects
const richardWigglesworth = new Appearances("1st", "Richard Wigglesworth", "Sale, Saracens", "2002-", 266, true);
const steveBorthwick = new Appearances("2nd", "Steve Borthwick", "Bath, Saracens", "1998-2014", 265, false);
const georgeChuter = new Appearances("3rd", "George Chuter", "Saracens, Leicester", "1997-2014", 262, false);
const philDawson = new Appearances("3rd", "Phil Dawson", "Newcastle, Northampton, Worcester", "2001-2017", 262, false);
// Use this to complete - https://en.wikipedia.org/wiki/Premiership_Rugby#Player_records

});

// Save all team data into javascript objects and use it to create a league table, an animated banner (#1 Saracens, #2 Exeter etc.) and
// fill in other pieces of text (the current leader is ###).

