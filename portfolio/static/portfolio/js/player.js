let listSong = [
    "https://s3.envato.com/files/275010122/preview.mp3",
    "https://s3.envato.com/files/273649855/preview.mp3",
    "https://www.bensound.com/bensound-music/bensound-summer.mp3",
    "https://www.bensound.com/bensound-music/bensound-dreams.mp3",
    "https://www.bensound.com/bensound-music/bensound-dubstep.mp3",
];

let song = new Audio
let muted = false
let vol = 1

song.type = 'audio/mp3'


let song_title = document.getElementById('song-title')
let fill_bar = document.getElementById("fill-bar")
let current_time = document.getElementById('current-time')
let play = document.getElementById("play") 
let stop = document.getElementById("stop")

window.y = undefined


function playSong(url_song, title, id) {
    
    let trek = document.getElementsByClassName(id)[0]
    song_title.textContent = title;
    song.src = url_song;
    song.play();

    if (window.y){
        let old_trek = document.getElementsByClassName(y)[0]
        old_trek.classList.remove("highlight")
    }
    
    trek.classList.add("highlight")
    play.className = "fa fa-pause";
    play.classList.toggle("active")
    if (stop.classList.contains("active")){
        stop.classList.remove("active")
    }
    y = id
}

function pauseSong() {
    if (song.paused) {
        song.play();
        play.className = "fa fa-pause";
        play.classList.toggle("active")
        if (stop.classList.contains("active")){
            stop.classList.remove("active")
        }
    } else {
        song.pause();
        play.className = "fa fa-play";
        play.classList.toggle("active")
    }
}

function stopSong() {
    song.pause();
    song.currentTime = 0;
    document.getElementById("play").classList.toggle("active")
    document.getElementById("stop").classList.toggle("active")
    document.getElementById("play").className = "fa fa-play";

    let old_trek = document.getElementsByClassName(y)[0]
    old_trek.classList.remove("highlight")
    
}

song.addEventListener('timeupdate', function(){
    let position = song.currentTime / song.duration
    fill_bar.style.width = position * 100 + '%'

    convertTime(Math.round(song.currentTime))
})

function convertTime(seconds){

    let min = Math.floor(seconds / 60)
    let sec = seconds % 60

    min = (min < 10) ? '0' + min : min
    sec = (sec < 10) ? '0' + sec : sec

    current_time.textContent = `${min} : ${sec} `

    totalTime(Math.round(song.duration))
}

function totalTime(seconds){

    let min = Math.floor(seconds / 60)
    let sec = seconds % 60

    min = (min < 10) ? '0' + min : min
    sec = (sec < 10) ? '0' + sec : sec


    current_time.textContent += `/ ${min} : ${sec}`
}

function next(){
    
}

function pre(){
    
}

function increaseVol(){
    song.volume += 0.20
}

function decreaseVol(){
    song.volume -= 0.20
}

