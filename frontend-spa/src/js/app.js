import {
    fetchAlbums, fetchSongs, fetchArtists
} from "./apiHelper.js";

import {
    clearElementChildren
} from "./utils.js";

import {
    renderAllArtists
} from "./allArtistsView.js";


// ALL ALBUMS
const renderAllAlbums = (element, albums) => {
    clearElementChildren(element);

    element.innerHTML = `
         <h2>Please select from Albums below:</h2>
      `;
    for (let i = 0; i < albums.length; i++) {
        const section = document.createElement('section');
        section.classList.add('album');
        section.innerHTML = `
          <h4 class="album__name">${albums[i].albumName}</h4> 
          <h4 class="album__imageurl">${albums[i].imageUrl}</h4>  
          <h4 class="album__record-label">${albums[i].recordLabel}</h4>    
          <br>     
      `;
        console.log(albums)

        section.addEventListener('click', () => {
            renderAlbum(element, albums[i]);
        });
        element.append(section);

    }
    ;
}


// ONE ALBUM
const renderAlbum = (element, album) => {
    clearElementChildren(element);
    element.innerHTML = `
    <section class="album">
      <h2 class="album__name">${album.albumName}</h2>
      <h4 class="album__imageurl">${album.imageUrl}</h4>  
      <h4 class="album__record-label">${album.recordLabel}</h4> 
                
    </section>
`
    const songs = document.createElement('ul');

    album.songs.forEach((song) => {
        const li = document.createElement('li');
        li.innerHTML = `<a class = "song__name">${song.songName}</a>`

        songs.append(li);
        li.addEventListener('click', () => {
            renderSong(element, song)
        })
    })
    const backHomeLink = document.createElement('a');
    backHomeLink.innerText = "View All Albums in Playlist"
    backHomeLink.addEventListener('click', () => {
        fetchAlbums()
            .then(albums => {
                renderAllAlbums(library, albums)
            });
    })
    element.append(songs);
    element.append(backHomeLink);
}


//ALL SONGS
const renderAllSongs = (element, songs) => {
    clearElementChildren(element);


    element.innerHTML = `
         <h2>Please select from Albums below:</h2>
      `;
    for (let i = 0; i < songs.length; i++) {
        const section = document.createElement('section');
        section.classList.add('song');
        section.innerHTML = `
          <br>
          <h4 class="song__name">${songs[i].songName}</h4> 
          <h4 class="song__imageurl">${songs[i].imageUrl}</h4>  
          <h4 class="song__duration">${songs[i].duration}</h4>    
          <br>     
      `;

        section.addEventListener('click', () => {
            renderSong(element, songs[i]);
        });
        element.append(section);

    }
    ;
}

// ONE SONG
const renderSong = (element, song) => {
    clearElementChildren(element);
    element.innerHTML = `
        
      <section class="song">
        <br>
        <h2 class="song__name">${song.songName}</h2>
        <h4 class="song__imageurl">${song.imageUrl}</h4>  
        <h4 class="song__duration">${song.duration}</h4>    
        <br>      
      </section>
  `
    const backHomeLink = document.createElement('a');
    backHomeLink.innerText = "View All Songs in playlist"
    backHomeLink.addEventListener('click', () => {
        fetchSongs()
            .then(songs => {
                renderAllSongs(library, songs)
            });
    })

    element.append(backHomeLink);
}


const library = document.querySelector(".library")
fetchArtists()
    .then(artists => {
        renderAllArtists(library, artists)
    })

export {renderAlbum, library}
