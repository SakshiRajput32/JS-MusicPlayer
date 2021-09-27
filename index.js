const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
{
  name:"I_Can't_Get_Enough",
  title : "I Can't Get Enough",
  artist:"Selena Gomez"
},
{name:"Happier",
title : "Happier",
artist:"Marshmello"
},
{
  name:"On_My_Way",
  title : "On My Way",
  artist:"Alan Walker"
},
];

let isPlaying = "false";
//for play
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};
//for pause function
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener('click' ,() => {
   if(isPlaying){
     pauseMusic();
   }else{
     playMusic();
   }
});
//changing music data
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "./audio/" + songs.name+".mp3";
    img.src = "./images/" +  songs.name +".png";
};
//loadSong(songs[2]);
songIndex = 0;

//next song
const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length ;
  loadSong(songs[songIndex]);
};
//prev song
const prevSong = () =>{
  songIndex = (songIndex - 1 + songs.length)  % songs.length ;
  loadSong(songs[songIndex]);
};
next.addEventListener('click' , nextSong);
prev.addEventListener('click', prevSong);