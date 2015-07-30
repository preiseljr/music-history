var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Filler > by Minor Threat on the album Red");
songs.push("Bernadette > by The Four Tops on the album Reach Out");


//Replace > by with -

var songAdj = []
for(i=0; i<songs.length; i++) {
  songAdj[i] = songs[i].replace(/> by/g,  "-");
}

console.log(songAdj);


// Delete all random characters

var songAdj2 = [];
for(i=0; i<songAdj.length; i++) {
  songAdj2[i] = songAdj[i].replace(/@|!|\*|\(/g,  "");
}
console.log(songAdj2);


// div class is songinfo in html

var currentSong = "";
var songElement = document.getElementById("songinfo");

for (i = 0; i < songAdj2.length; i++) {
  currentSong="<div>" + songAdj2[i] + "</div>";
  songElement.innerHTML += "<h1>" + currentSong +"</h1>";
}

