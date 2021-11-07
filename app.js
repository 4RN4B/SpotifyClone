console.log("Welcome to music player");

// Initialization of the variables
let songIndex = 0;
let mainPlay = document.getElementById("mainPlay");
let audioElement = new Audio("songs/1.mp3");
let songProgress = document.getElementById("songProgress");
let songs = [
    {
        songName: "Love me like you do",
        filepath: "songs/1.mp3",
        coverpath: "covers/1.mp3",
    },
    {
        songName: "Love me like you do",
        filepath: "songs/1.mp3",
        coverpath: "covers/1.mp3",
    },
    {
        songName: "Love me like you do",
        filepath: "songs/1.mp3",
        coverpath: "covers/1.mp3",
    },
    {
        songName: "Love me like you do",
        filepath: "songs/1.mp3",
        coverpath: "covers/1.mp3",
    },
    {
        songName: "Love me like you do",
        filepath: "songs/1.mp3",
        coverpath: "covers/1.mp3",
    },
    {
        songName: "Love me like you do",
        filepath: "songs/1.mp3",
        coverpath: "covers/1.mp3",
    },
];

//

// Handle play/pause click
mainPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play(); // For playing Audio
        mainPlay.classList.remove("fa-play-circle"); //For removing the play button
        mainPlay.classList.add("fa-pause-circle"); //For changing it to pause button
    } else {
        audioElement.pause(); // To pause Audio
        mainPlay.classList.remove("fa-pause-circle"); //For removing the play button
        mainPlay.classList.add("fa-play-circle"); //For changing it to pause button
    }
});

//Listen to Events
songProgress.addEventListener("timeupdate", () => {
    console.log("Time Updated");
});
