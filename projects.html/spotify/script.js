console.log("Welcome to Spotify");

// Initialize variables
let audioElement = new Audio("song1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    { songName: "Night Changes", filePath: "song1.mp3",coverPath:'coverone.jpg'},
    { songName: "Perfect", filePath: "song2.mp3" },
    { songName: "Stereo Hearts", filePath: "song3.mp3" },
    { songName: "Pick Up the Phone", filePath: "song4.mp3" },
    { songName: "Scars to your Beautiful", filePath: "song5.mp3" },
    { songName: "You were there for me", filePath: "song6.mp3" },
    { songName: "Who says you are not perfect", filePath: "song7.mp3" },
    { songName: "Cheap Thrills-Sean Paul", filePath: "song8.mp3" },
];

// Optional: Dynamically populate song items (if needed)
songItems.forEach((element, i) => {
    //element.getElementsByTagName("img")[0].src = `cover${i + 1}.jpg`; // Update image dynamically
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; // Update song name
});

// Play/Pause functionality for master play button
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1; // Show gif
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0; // Hide gif
    }
});

// Update progress bar as the song plays
audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress; // Update progress bar
});

// Seek functionality for progress bar
progressBar.addEventListener("change", () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

// Reset all play buttons to the play state
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    });
};

// Song-specific play functionality
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, i) => {
    element.addEventListener("click", (e) => {
        makeAllPlays(); // Reset all buttons
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");

        // Set the audio source dynamically based on the song clicked
        audioElement.src = songs[i].filePath;
        audioElement.currentTime = 0; // Reset playback time
        audioElement.play();

        // Update master play button and gif
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1; // Show gif
    });
});



/*console.log("Welcome to Spotify");

let audioElement = new Audio("song1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));

// Array of songs (useful for future expansion)
let songs = [
    { songName: "Night Changes", filePath: "song1.mp3" },
    { songName: "Perfect", filePath: "song2.mp3" },
    { songName: "Stereo Hearts", filePath: "song3.mp3" },

];
songItems.forEach((element,i)=>{
    
    //element.getElementByTagName("img")[0].src = songs[i].filePath;
})

// Play/Pause functionality
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;

    }
});

// Update progress bar with audio time update
audioElement.addEventListener("timeupdate", () => {
    // Calculate progress as a percentage
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

// Seek functionality
progressBar.addEventListener("change", () => {
    audioElement.currentTime = (progressBar.value *audioElement.duration)*100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
    

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element,)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = 'song2.mp3';
        audioElement.currentTime=0;
        audioElement.play();
    })
})*/


    
    









//CODE-3

/*console.log("welcome to spotify");
let audioElement = new Audio("song1.mp3");
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');

let songs = [
    {songName:"Night changes",filePath:"song1.mp3"}
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
        audioElement.play();
    masterPlay.classList.remove('fa-solid fa-play');
    masterPlay.classList.add("fa-solid fa-pause");
})
progressBar.addEventListener('timeupdate' ,()=>{
    console.log('timeupdate');
})*/


//CODE--2
/*let songs = [
    {
        name: "Night Changes",
        filePath: "song1.mp3",
        coverPath: "https://tse2.mm.bing.net/th?id=OIP.RJRUTkPnvOeWaRxfLpsddQHaLH&pid=Api&P=0&h=180",
    },
    // Add more songs as needed
];

// Select HTML elements
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let audioElement = new Audio(songs[0].filePath); // Initialize with the first song

// Play/Pause Toggle
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
});

// Update Progress Bar
audioElement.addEventListener("timeupdate", () => {
    // Calculate progress percentage
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.value = progress;
});

// Seek to the position when progress bar is changed
progressBar.addEventListener("input", () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

// Song List Integration (Optional)
let songItems = Array.from(document.getElementsByClassName("songItem"));
songItems.forEach((element, i) => {
    element.querySelector("img").src = songs[i].coverPath;
    element.querySelector("span").innerText = songs[i].name;

    element.addEventListener("click", () => {
        audioElement.src = songs[i].filePath;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    });
});*/