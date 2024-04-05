
const songs = [ {
    title : 'Mockingbird',
    artist : 'Eminem' ,
    duration : '5 mins',
    audio : 'mockingbird.mp3' //path to audio file
    }, {
    title : 'Perfect',
    artist : 'Ed Sheeran',
    duration : '6 mins',
    audio : 'perfect.mp3' //path to audio file
    },
     {
    title : 'Love yourself',
    artist : 'Justin Beiber',
    duration: '3 mins',
    audio : 'love_yourself.mp3 '//path to audio file
    },
   {
    title :  'Love the way you lie',
    artist : 'Eminem',
    duration : '4 mins',
    audio : 'ltwyl.mp3'
   },
  {
    title : 'Pillowtalk',
    artist : 'Zayn Malik',
    duration : '3mins',
    audio : 'pillowtalk.mp3'
  }];

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const resumeBtn = document.querySelector('#resume');
const skipBtn = document.querySelector('#skip');
const shuffleBtn = document.querySelector('#shuffle');
const audioPlayer = new Audio() ;//creates a new instance of the built-in audio object (creates a built-in audio object)


playBtn.addEventListener('click',()=>{
  const songNameInput = document.querySelector('#songName').value ;
  songs.forEach(song=>{
    if (songNameInput.toLowerCase() === song.title.toLowerCase()){
        audioPlayer.src = song.audio;
        audioPlayer.play();
        displaySongDetails();
    }
  });
});

let pausedTime = 0; //variable to store the time when music/audio was paused
pauseBtn.addEventListener('click',()=>{
    console.log('Pausing the song');
    audioPlayer.pause();
    pausedTime = audioPlayer.currentTime; // store the current playback position
    displaySongDetails();

})

resumeBtn.addEventListener('click',()=>{
    console.log('The song is resumed');
    audioPlayer.currentTime = pausedTime; // set the playback position to the stored value
    audioPlayer.play(); //resume playback
    displaySongDetails();
});

//to skip to the next song in the array you need to keep track of the current index song you are playing
let currentSongIndex = 0;
  
skipBtn.addEventListener('click',()=>{
  currentSongIndex = (currentSongIndex+1)%songs.length; // the modulus % ensures that the index wraps around 0 when it reaches the end of the array
  audioPlayer.src = songs[currentSongIndex].audio;
  audioPlayer.play();
  displaySongDetails();
});


// shuffleBtn.addEventListener('click',()=>{
  
//     let randomIndex = Math.floor(Math.random()*songs.length);
//     audioPlayer.src = songs[randomIndex].audio;
//     audioPlayer.play();
//     displaySongDetails();
//     currentSongIndex = randomIndex;
  
// });

shuffleBtn.addEventListener('click',()=>{
  const randomIndex = Math.floor(Math.random()*songs.length);
  const shuffledSong = songs[randomIndex];
  audioPlayer.src = shuffledSong.audio;
  audioPlayer.play();
  displaySongDetails();
  currentSongIndex=randomIndex;
});

function displaySongDetails(){
  const currentSong = songs[currentSongIndex];

  //clear any existing song details
  const existingDetailsDiv = document.querySelector('#songDetails');
    
    if (existingDetailsDiv){
      existingDetailsDiv.remove();
    }

  //create a new element for displaying song details

  const songDetailsDiv = document.createElement('div');
  songDetailsDiv.id = 'songDetails';
  songDetailsDiv.textContent = `Song : ${currentSong.title}, Artist: ${currentSong.artist}, Duration : ${currentSong.duration}`;

  document.body.appendChild(songDetailsDiv);

    
  }
