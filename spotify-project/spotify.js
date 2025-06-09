import {playlistInfo} from "../data/playlist-data.js";
import {libData} from "../data/library-data.js";
let playlistHTML = '';
playlistInfo.forEach((playlistInfo) => {
  playlistHTML += `<div class="playlist-interface">
  <img class="playlist-img" src="images/${playlistInfo.img}">
  <p class="playlist-text">${playlistInfo.name}</p>
  <button class="play-button" aria-label="Play ${playlistInfo.name}">
      <svg class="play-button-img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" fill="black"/>
      </svg>
    </button>
</div>`;
});
document.querySelector('.playlist-generator').innerHTML = playlistHTML;

let libraryHTML = '';

libData.forEach((libData) => {
  if (libData.type === "Artist") {
libraryHTML += `<button class="lib-playlist-button">
<img class="lib-playlist-img-circle" src="images/${libData.img}">
<svg data-encore-id="icon" role="img" aria-hidden="true" class="hover-play-lib" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
<div class="lib-text">
<p class="lib-playlist-name">${libData.name}</p>
<p class="lib-playlist-type">${libData.type}</p>
</div>
</button>`
} else {
  libraryHTML += `<button class="lib-playlist-button">
<img class="lib-playlist-img-square" src="images/${libData.img}">
<svg data-encore-id="icon" role="img" aria-hidden="true" class="hover-play-lib" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
<div class="lib-text">
<p class="lib-playlist-name">${libData.name}</p>
<p class="lib-playlist-type">${libData.type}</p>
</div>
</button>`
};
});
document.querySelector('.lib-playlist-gen').innerHTML = libraryHTML