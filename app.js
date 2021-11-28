console.log("Welcome to music player");

// Initialization of the variables
let songIndex = 0;
let mainPlay = document.getElementById("mainPlay");
let audioElement = new Audio("songs/1.mp3");
let songProgress = document.getElementById("songProgress");
let songPlayinGif = document.getElementsByClassName("songPlayinGif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
// console.log(songItem);
let songs = [
    {
        songName: "Warriyo - Mortals",
        filepath: "songs/1.mp3",
        coverpath: "covers/1.jpg",
    },
    {
        songName: "Cielo - Huma-Huma",
        filepath: "songs/2.mp3",
        coverpath: "covers/2.jpg",
    },
    {
        songName: "DEAF KEV - Invincible",
        filepath: "songs/3.mp3",
        coverpath: "covers/3.jpg",
    },
    {
        songName: "My Heart",
        filepath: "songs/4.mp3",
        coverpath: "covers/4.jpg",
    },
    {
        songName: "Janji-Heroes-Tonight",
        filepath: "songs/5.mp3",
        coverpath: "covers/5.jpg",
    },
    {
        songName: "Sakhiyaan - Salam-e-Ishq",
        filepath: "songs/6.mp3",
        coverpath: "covers/6.jpg",
    },
    {
        songName: "Bhula Dena - Salam-e-Ishq",
        filepath: "songs/7.mp3",
        coverpath: "covers/7.jpg",
    },
    {
        songName: "Tumhari Kasam",
        filepath: "songs/8.mp3",
        coverpath: "covers/8.jpg",
    },
    {
        songName: "Na Jaana - Salam-e-Ishq",
        filepath: "songs/9.mp3",
        coverpath: "covers/9.jpg",
    },
    {
        songName: "Na Jaana - Salam-e-Ishq",
        filepath: "songs/10.mp3",
        coverpath: "covers/10.jpg",
    },
];

//to make all the pause buttons before the song list change to play button
const makeallPlay = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(
        (element) => {
            element.classList.remove("fa-pause-circle");
            element.classList.add("fa-play-circle");
        }
    );
};

// Changing the name and covers of the songlist
songItem.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByTagName("span")[1].innerText = songs[i].songName;
});
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
        let iconChange = document.getElementById(songIndex);
        // console.log(document.getElementById(songIndex));
        // console.log(iconChange.classList);
        iconChange.classList.remove("fa-play-circle");
        iconChange.classList.add("fa-pause-circle");
    } else {
        makeallPlay();
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

// If the play button berfore the song name is pressed the song will play and the button will change to pause button
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
        element.addEventListener("click", (e) => {
            makeallPlay(); //when a play button is clicked then the previous pause button will change to play
            // console.log(e); // e is to get the element which is clicked from the whole array of element
            // here we have used e because we want to change that specific element only not all the elements.
            songIndex = parseInt(e.target.id); // Given id 0 to 9 in html gives us the value of which song's play button is pressed.
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement.src = `songs/${songIndex + 1}.mp3`; // Clicked song will be played
            document.getElementById("mainSongPlaying").innerText =
                songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            songPlayinGif[0].style.opacity = 1;
            mainPlay.classList.remove("fa-play-circle");
            mainPlay.classList.add("fa-pause-circle");
        });
    }
);

//If someone clicked the next button
document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`; // Clicked song will be played
    document.getElementById("mainSongPlaying").innerText =
        songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    songPlayinGif[0].style.opacity = 1;
    mainPlay.classList.remove("fa-play-circle");
    mainPlay.classList.add("fa-pause-circle");
    makeallPlay();
    let iconChange = document.getElementById(songIndex);
    // console.log(document.getElementById(songIndex));
    // console.log(iconChange.classList);
    iconChange.classList.remove("fa-play-circle");
    iconChange.classList.add("fa-pause-circle");
});

//If someone clicked the previous button
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`; // Clicked song will be played
    document.getElementById("mainSongPlaying").innerText =
        songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    songPlayinGif[0].style.opacity = 1;
    mainPlay.classList.remove("fa-play-circle");
    mainPlay.classList.add("fa-pause-circle");
    makeallPlay();
    let iconChange = document.getElementById(songIndex);
    // console.log(document.getElementById(songIndex));
    // console.log(iconChange.classList);
    iconChange.classList.remove("fa-play-circle");
    iconChange.classList.add("fa-pause-circle");
});
