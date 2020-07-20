import {clearElementChildren} from "./utils.js";
import {fetchAlbumById} from "./apiHelper.js";
import {library} from "./app.js";
import {renderAlbum} from "./app.js";

const renderSong = (element, song, albumId) => {
    clearElementChildren(element);
    element.innerHTML = `
        
      <section class="song">
        <br>
        <h2 class="song__name">${song.songName}</h2>
        <iframe width="560" height="315" src="${song.imageUrl}"?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h4 class="song__duration">${song.duration}</h4>    
        <br>      
      </section>
  `
    const backHomeLink = document.createElement('a');
    backHomeLink.innerText = "Back to Album"
    backHomeLink.addEventListener('click', () => {
        fetchAlbumById(albumId)
            .then(album => {
                renderAlbum(library, album)
            });
    })

    // const backHomeLink = document.createElement('a');
    // backHomeLink.innerText = "View All Songs in playlist"
    // backHomeLink.addEventListener('click', () => {
    //     fetchSongs()
    //         .then(songs => {
    //             renderAllSongs(library, songs)
    //         });
    // })

    element.append(backHomeLink);
}

export {renderSong}