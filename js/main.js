$(document).ready(() => {

$('.card').on('mouseenter', event => {
	$(event.currentTarget).addClass('card-zoom')
}).on('mouseleave', event => {
	$(event.currentTarget).removeClass('card-zoom')
})

const stats = {
	bristolStats: {
		rank: 1,
		name: "Bristol Rugby",
		points: "5",
	},
};

// Constructor function for rugby players by appearances
const Appearances = (rank, name, club, year, apps, active) => {
	return {
		rank,
		name,
		club,
		year,
		apps,
		active
	}
}
// Rugby players by appearances as new objects
const richardWigglesworth = Appearances("1st", "Richard Wigglesworth", "Sale, Saracens", "2002-", 266, true);
const steveBorthwick = Appearances("2nd", "Steve Borthwick", "Bath, Saracens", "1998-2014", 265, false);
const georgeChuter = Appearances("3rd", "George Chuter", "Saracens, Leicester", "1997-2014", 262, false);
const philDawson = Appearances("3rd", "Phil Dawson", "Newcastle, Northampton, Worcester", "2001-2017", 262, false);
const charlieHodgson = Appearances("5th", "Charlie Hodgson", "Sale, Saracens", "2000-2016", 254, false);
const tomMay = Appearances("6th", "Tom May", "Newcastle, Northampton, London Welsh", "1999-2015", 247, false);
const hughVyvyan = Appearances("7th", "Hugh Vyvyan", "Newcastle, Saracens", "1998-2012", 245, false);
const simonShaw = Appearances("8th", "Simon Shaw", "Bristol, Wasps", "1997-2011", 237, false);
const andyGoode = Appearances("9th", "Andy Goode", "Leicester, Saracens, Worcester, Wasps, Newcastle", "1998-2016", 236, false);
const stuartHooper = Appearances("10th", "Stuart Hooper", "Saracens, Leeds, Bath", "2000-2016", 232, false);
// Use this to complete - https://en.wikipedia.org/wiki/Premiership_Rugby#Player_records
// Use this to print - https://stackoverflow.com/questions/42563503/print-object-data-in-table-jquery

});

// Save all team data into javascript objects and use it to create a league table, an animated banner (#1 Saracens, #2 Exeter etc.) and
// fill in other pieces of text (the current leader is ###).

