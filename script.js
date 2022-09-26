const tracks = [
  { 
    name: "As It Was",
    artist: "Harry Styles",
    imageAddress: "https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/master/pass/FINAL%20%20PFHH-notextwlogo.jpg",
    audio: "Songs/asItWas.mp3"
  },
  {
    name: "Let's Stay Together",
    artist: "Al Green",
    imageAddress: "https://upload.wikimedia.org/wikipedia/en/0/0e/Letsstaytogether_cover.jpg",
    audio: "Songs/letsstaytogether.mp3"
  },
  {
    name: "Me Porto Bonito",
    artist: "Bad Bunny",
    imageAddress: "https://media.pitchfork.com/photos/627425dbc85171592b8a6e6a/1:1/w_600/Bad-Bunny-Un-Verano-Sin-Ti.jpg",
    audio: "Songs/mePortoBonito.mp3"
  },
  {
    name: "Bad Habit",
    artist: "Steve Lacy",
    imageAddress: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/i5icyjxrapjnnavdep6w/gemini-rights?fimg-ssr-default",
    audio: "Songs/badHabit.mp3"
  },
  {
    name: "Pink Venom",
    artist: "Blackpink",
    imageAddress: "https://upload.wikimedia.org/wikipedia/en/c/cb/Pink_Venom_Cover.jpg",
    audio: "Songs/pinkVenom.mp3"
  },
  {
    name: "Hotel California",
    artist: "Eagles",
    imageAddress: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg",
    audio: "Songs/hotelCalifornia.mp3"
  },
  {
    name: "Glimpse of Us",
    artist: "Joji",
    imageAddress: "https://upload.wikimedia.org/wikipedia/en/4/4a/Joji_-_Glimpse_of_Us.png",
    audio: "Songs/glimpseOfUs.mp3"
  },
  {
    name: "I Ain't Worried",
    artist: "OneRepublic",
    imageAddress: "https://i.scdn.co/image/ab67616d0000b273ec96e006b8bdfc582610ec13",
    audio: "Songs/iAintWorred.mp3"
  },
  {
    name: "Provenza",
    artist: "Karol G",
    imageAddress: "https://i.scdn.co/image/ab67616d0000b273e70c454b8989f09d1e11ea92",
    audio: "Songs/provenza.mp3"
  },
  {
    name: "Despecha",
    artist: "Rosala",
    imageAddress: "https://static.stereogum.com/uploads/2022/07/Rosalia-Despecha-1659015613.jpg",
    audio: "Songs/despecha.mp3"
  }, 
  {
    name: "Everything Goes On",
    artist: "Porter Robinson",
    imageAddress: "https://upload.wikimedia.org/wikipedia/en/a/a7/Everything_Goes_On_single_cover.jpg",
    audio: "Songs/everythingGoesOn.mp3"
  }
];
let currentSong = tracks[0];
var songAud = new Audio(currentSong.audio);

function randSong(){
  var randIdx = Math.random() * tracks.length;
  randIdx = parseInt(randIdx, 10);
return tracks[randIdx];
};
function generateRandSongs(){
  var i1 = parseInt(Math.random() * tracks.length, 10);
  var i2 = parseInt(Math.random() * tracks.length, 10);
  var i3 = parseInt(Math.random() * tracks.length, 10);
  while (i2 == i1) {
    var i2 = parseInt(Math.random() * tracks.length, 10);
  }
  while (i3 == i1 || i3 == i2) {
    var i3 = parseInt(Math.random() * tracks.length, 10);
  }
  return [tracks[i1], tracks[i2], tracks[i3]];
};
function pickRandSong(lst){
  return lst[parseInt(Math.random() * lst.length, 10)];
};
function loadTrack(){
  songAud.pause();
  let songName = document.querySelector(".sName")
  let songArtist = document.querySelector(".sArtist")
  let songImg = document.querySelector(".sImg")
  var threeSongs = generateRandSongs();
  currentSong = pickRandSong(threeSongs);
  songName.innerHTML = "Take a guess";
  songAud = new Audio(currentSong.audio) 
  songAud.play();
  songArtist.innerHTML = " ";
  songImg.src = "https://seeklogo.com/images/A/apple-music-logo-4FBA5FADCC-seeklogo.com.png";
  for (let i = 1; i < threeSongs.length + 1; i ++) {
    let currButton = document.querySelector(".opt" + i);
    currButton.textContent = threeSongs[i - 1].name;
  };
};

function pauseAud(){
  songAud.pause();
};
function playAud(){
  songAud.pause();
  songAud.play();
};
function checker(num){
  let buttonClicked = document.querySelector(".opt" + num);
  if (buttonClicked.innerHTML == currentSong.name){
    document.querySelector(".sName").innerHTML = currentSong.name;
    document.querySelector(".sArtist").innerHTML = currentSong.artist;
    document.querySelector(".sImg").src = currentSong.imageAddress;
    buttonClicked.textContent = "Correct!";
  } else {
    buttonClicked.textContent = "Wrong!";
  }  
};
