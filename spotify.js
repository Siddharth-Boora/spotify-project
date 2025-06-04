import {playlistInfo} from "../data/playlist-data.js";
let playlistHTML = '';
playlistInfo.forEach((playlistInfo) => {
  playlistHTML += `<div class="playlist-interface">
  <img class="playlist-img" src="images/${playlistInfo.img}">
  <p class="playlist-text">${playlistInfo.name}</p>
</div>`
})
document.querySelector('.playlist-generator').innerHTML = playlistHTML;