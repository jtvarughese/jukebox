// targets the play button from the page and
// stores a reference to it in the playButton variable
// this play button has global scope
var playButton=document.querySelector("#play")
var stopButton=document.querySelector("#stop")
var pauseButton=document.querySelector("#pause")
var forwardButton=document.querySelector("#forward")
var prevButton=document.querySelector("#prev")
var music=document.querySelector("#music")
var altPlayButton=document.querySelector("#alt-play")
var altStopButton=document.querySelector("#alt-stop")
var i=0


// creates a new Jukebox object
// this variable has global scope after this point


// defines the Jukebox object
function Jukebox() {
// the code for what happens when you create a Jukebox object
// goes here
  this.list = []
  // this.nameList = number;
}

Jukebox.prototype.addSong = function(track,artist,name){
  this.list.push(track);
  // this.artistList.push(artist);
  // this.nameList.push(name);
}

var jukebox = new Jukebox()
  jukebox.addSong("pursuit-of-happiness.mp3", "Kid Cudi feat. Steve Aoki", "Pursuit of Happiness (Remix)")
  jukebox.addSong("drake-started-from-the-bottom.mp3", "Drake", "Started From The Bottom")
  jukebox.addSong("imagine-dragons-radioactive.mp3", "Imagine Dragons", "Radioactive")

// defines the Jukebox prototype object
Jukebox.prototype.play = function(){
  music.play()
}
music.src = jukebox.list[i];

Jukebox.prototype.stop = function(){
  music.src = jukebox.list[i];
  music.stop()
}

Jukebox.prototype.pause = function(){
  music.pause()
}

Jukebox.prototype.forward = function(){
  i++;
  if(i < jukebox.list.length){
    music.pause();
    music.src= jukebox.list[i];
    music.play()
  } else {
    i = 0;
    music.pause();
    music.src= jukebox.list[i];
    music.play()
  }
}

Jukebox.prototype.prev = function(){
  i--;
  if(i >= 0){
    music.pause();
    music.src= jukebox.list[i]
    music.play()
  } else {
    i = jukebox.list.length -1;
    music.pause()
    music.src= jukebox.list[i]
    music.play()
  }
}

// adds an event listener for when you click the play button
// preventDefault prevents anchor tag going to next page
playButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.play()
})

altPlayButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.play()
})

stopButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.stop()
})

altStopButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.stop()
})

pauseButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.pause()
})

prevButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.prev()
})

forwardButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.forward()
})


// the rest of the code
//  for what happens when you click the play button goes here

// uses the jukebox object to play the music file

// the rest of your event listeners would go here
