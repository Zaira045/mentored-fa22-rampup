function myFunction() {
  alert("This is the correct way to do js ☺️ 😊🥰👉👈");
}

function submit() {
    username = document.getElementById('username');
    email = document.getElementById('email');
    password = document.getElementById('password');
    alert('Username:', username.value, 'Email:', email.value, 'Password:', password.value);
    return false;
}
// var sites = [
//   'songs/Harry Styles - As It Was.mp3',
//   'https://www.youtube.com/watch?v=yjki-9Pthh0&list=PLDIoUOhQQPlXr63I_vwF9GD8sAKh77dWU&index=2',
//   'https://www.youtube.com/watch?v=l_b_X6n__pY&list=PLDIoUOhQQPlXr63I_vwF9GD8sAKh77dWU&index=3'
// ]
// let nnn = document.getElementById('namee');
// nnn.innerHTML = 'Yupiee';
// let songName = document.querySelector(".sName");
// songName.textContent  = "Hello";


// var songArtist = document.querySelector(".sArtist");
// var songImg = document.querySelector(".sImg");
// var currentSong = tracks[0];


// function changeText(){
//   let songName = document.querySelector(".sName");
//   songName.innerHTML = 'Yupiee';


// }
// changeText();

console.log("Hello 11");

const tracks = [
  { 
    name: "As It Was 1",
    artist: "Harry Styles",
    imageAddress: "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/pass/FINAL%20%20PFHH-notextwlogo.jpg",
    audio: "songs/Harry Styles - As It Was.mp3"
  },
  {
    name: "As It Was 2",
    artist: "Harry Styles",
    imageAddress: "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/pass/FINAL%20%20PFHH-notextwlogo.jpg",
    audio: "songs/Harry Styles - As It Was.mp3"
  },
  {
    name: "As It Was 3",
    artist: "Harry Styles",
    imageAddress: "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/pass/FINAL%20%20PFHH-notextwlogo.jpg",
    audio: "songs/Harry Styles - As It Was.mp3"
  },
  {
    name: "As It Was 4",
    artist: "Harry Styles",
    imageAddress: "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/pass/FINAL%20%20PFHH-notextwlogo.jpg",
    audio: "songs/Harry Styles - As It Was.mp3"
  },
  {
    name: "As It Was 5",
    artist: "Harry Styles",
    imageAddress: "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/pass/FINAL%20%20PFHH-notextwlogo.jpg",
    audio: "songs/Harry Styles - As It Was.mp3"
  },
  {
    name: "As It Was 6",
    artist: "Harry Styles",
    imageAddress: "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/pass/FINAL%20%20PFHH-notextwlogo.jpg",
    audio: "songs/Harry Styles - As It Was.mp3"
  },
  {
    name: "As It Was 7",
    artist: "Harry Styles",
    imageAddress: "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/pass/FINAL%20%20PFHH-notextwlogo.jpg",
    audio: "songs/Harry Styles - As It Was.mp3"
  },
  {
    name: "As It Was 8",
    artist: "Harry Styles",
    imageAddress: "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/pass/FINAL%20%20PFHH-notextwlogo.jpg",
    audio: "songs/Harry Styles - As It Was.mp3"
  },
  {
    name: "As It Was 9",
    artist: "Harry Styles",
    imageAddress: "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/pass/FINAL%20%20PFHH-notextwlogo.jpg",
    audio: "songs/Harry Styles - As It Was.mp3"
  },
  {
    name: "As It Was 10",
    artist: "Harry Styles",
    imageAddress: "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/pass/FINAL%20%20PFHH-notextwlogo.jpg",
    audio: "songs/Harry Styles - As It Was.mp3"
  }
];
let currentSong = tracks[0];
console.log("Hello");
console.log(tracks[0]);

// function getRandYou(){
//   var youtubeV = document.createElement('iframe');
//   youtubeV.width="560";
//   youtubeV.height="315";
//   youtubeV.src = "https://www.youtube.com/embed/H5v3kku4y6Q";
//   youtubeV.title = "Youtube video player";
//   youtubeV.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
//   youtubeV.allowFullscreen = true;
//   //youtubeV.setAttribute("src", "https://youtu.be/wffK2OIt8u0");
//   // var lStr = '<iframe width="560" height="315" src="' + sites[0] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>';
//   document.getElementById("video").appendChild(youtubeV);
// };

function randSong(){
  var randIdx = Math.random() * tracks.length;
  randIdx = parseInt(randIdx, 10);
return tracks[randIdx];
};
function generateRandSongs(){
  var i1 = parseInt(Math.random() * tracks.length, 10);
  var i2 = parseInt(Math.random() * tracks.length, 10);
  var i3 = parseInt(Math.random() * tracks.length, 10);
  return [tracks[i1], tracks[i2], tracks[i3]];
};
function pickRandSong(lst){
  return lst[parseInt(Math.random() * lst.length, 10)];
};
var songAud = new Audio(currentSong.audio)
function loadTrack(){
  songAud.pause();
  let songName = document.querySelector(".sName")
  let songArtist = document.querySelector(".sArtist")
  let songImg = document.querySelector(".sImg")
  var threeSongs = generateRandSongs();
  currentSong = pickRandSong(threeSongs);
  songName.innerHTML = "Take a guess (" + currentSong.name;
  songAud = new Audio(currentSong.audio) 
  songAud.play();
  songArtist.innerHTML = currentSong.artist;
  songImg.src = currentSong.imageAddress;
  for (let i = 1; i < threeSongs.length + 1; i ++) {
    let currButton = document.querySelector(".opt" + i);
    console.log(currButton.textContent);
    console.log(currButton.className);
    console.log(".opt" + i);
    currButton.textContent = threeSongs[i - 1].name;
    console.log(i - 1);
  }
  

  // let nnn = document.querySelector(".namee");
  // nnn.innerHTML = 'Yupiee';
  // console.log(currentSong)

};
function checker(num){
  let buttonClicked = document.querySelector(".opt" + num);
  if (buttonClicked.innerHTML == currentSong.name){
    document.querySelector(".sName").innerHTML = currentSong.name;
    buttonClicked.textContent = "Correct!";
  } else {
    buttonClicked = "Wrong!"
  }

  
};
//loadTrack();

// function randAud(){
//   var audio =  new Audio(sites[0]);
//   audio.play()
// };


// var randomLink = function() {
//   var randIdx = Math.random() * sites.length;
//   randIdx = parseInt(randIdx, 10);
// return sites[randIdx];
// };
