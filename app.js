console.log("Welcome to music player");

// Initialization of the variables
let songIndex = 0;
let mainPlay = document.getElementById("mainPlay");
let audioElement = new Audio("songs/1.mp3");
let songProgress = document.getElementById("songProgress");
let songPlayinGif = document.getElementsByClassName("songPlayinGif");
let songs = [
    {
        songName: "Warriyo - Mortals [NCS Release]",
        filepath: "songs/1.mp3",
        coverpath: "covers/1.mp3",
    },
    {
        songName: "Cielo - Huma-Huma",
        filepath: "songs/2.mp3",
        coverpath: "covers/2.mp3",
    },
    {
        songName: "DEAF KEV - Invincible [NCS Release]-320k",
        filepath: "songs/3.mp3",
        coverpath: "covers/3.mp3",
    },
    {
        songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
        filepath: "songs/4.mp3",
        coverpath: "covers/4.mp3",
    },
    {
        songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
        filepath: "songs/5.mp3",
        coverpath: "covers/5.mp3",
    },
    {
        songName: "Sakhiyaan - Salam-e-Ishq",
        filepath: "songs/6.mp3",
        coverpath: "covers/6.mp3",
    },
    {
        songName: "Bhula Dena - Salam-e-Ishq",
        filepath: "songs/7.mp3",
        coverpath: "covers/7.mp3",
    },
    {
        songName: "Tumhari Kasam - Salam-e-Ishq",
        filepath: "songs/8.mp3",
        coverpath: "covers/8.mp3",
    },
    {
        songName: "Na Jaana - Salam-e-Ishq",
        filepath: "songs/9.mp3",
        coverpath: "covers/9.mp3",
    },
    {
        songName: "Na Jaana - Salam-e-Ishq",
        filepath: "songs/10.mp3",
        coverpath: "covers/10.mp3",
    },
];

//

// Handle play/pause click
mainPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play(); // For playing Audio
        mainPlay.classList.remove("fa-play-circle"); //For removing the play button
        mainPlay.classList.add("fa-pause-circle"); //For changing it to pause button
        //The for loop can be used to set the opacity 1 as element access by class name always returns an array.
        // for (let i = 0; i < gifplaying.length; i++) {
        //     gifplaying[i].style.opacity = 1;
        // }
        //Here we know the array is of 1 length as only one place this class name is used so
        songPlayinGif[0].style.opacity = 1;
    } else {
        audioElement.pause(); // To pause Audio
        mainPlay.classList.remove("fa-pause-circle"); //For removing the play button
        mainPlay.classList.add("fa-play-circle"); //For changing it to pause button
        songPlayinGif[0].style.opacity = 0;
    }
});

//Listen to audioElement to update time
audioElement.addEventListener("timeupdate", () => {
    // console.log("Time Updated");
    // So here we want to change the time to percent
    progress = parseInt(
        (audioElement.currentTime / audioElement.duration) * 100
    );
    // console.log(progress);
    songProgress.value = progress;
});

//When we change the progress bar the audio will change to
songProgress.addEventListener("change", () => {
    //songProgress.value is now in percentage so changing it to duration
    audioElement.currentTime =
        (songProgress.value * audioElement.duration) / 100;
});
