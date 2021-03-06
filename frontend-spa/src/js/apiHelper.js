const fetchArtists = async () => {
    return fetch("http://localhost:8080/api/artists/").then((response) =>
        response.json()
    );
};

const fetchAlbums = async () => {
    return fetch("http://localhost:8080/api/albums/").then((response) =>
        response.json()
    );
};

const fetchSongs = async () => {
    return fetch("http://localhost:8080/api/songs/").then((response) =>
        response.json()
    );
};

const postNewArtist = async (artist) => {
    return fetch('http://localhost:8080/api/artist/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(artist)
    }).then(response => response.json())
}

const patchNewAlbumToArtist = async (album, artistId) => {
    return fetch('http://localhost:8080/api/artists/' + artistId + '/Album/', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(album)
    }).then(response => response.json())
}

const patchNewSongToAlbum = async (song, albumId) => {
    return fetch('http://localhost:8080/api/albums/' + albumId + '/song/', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
    }).then(response => response.json())
}

const fetchAlbumById = async (albumId) => {
    return fetch("http://localhost:8080/api/albums/" + albumId).then((response) =>
        response.json()
    );
};

const fetchArtistById = async (artistId) => {
    return fetch("http://localhost:8080/api/artists/" + artistId).then((response) =>
        response.json()
    );
};

const deleteSong = async (songId, albumId) => {

    return fetch('http://localhost:8080/api/songs/delete/' + songId + '/' + albumId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(songId)
    }).then(response => response.json())
}

const deleteAlbum = async (albumId, artistId) => {

    return fetch('http://localhost:8080/api/albums/delete/' + albumId + '/' + artistId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(albumId)
    }).then(response => response.json())
}

const deleteArtist = async (artistId) => {

    return fetch('http://localhost:8080/api/artists/delete/' + artistId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(artistId)
    }).then(response => response.json())
}

const addNewCommentToSong = async (song, songId) => {
    return fetch('http://localhost:8080/api/songs/' + songId +'/comment/' , {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
    }).then(response => response.json())

}

const addNewCommentToAlbum = async (album, albumId) => {
    return fetch('http://localhost:8080/api/albums/' + albumId +'/comment/' , {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(album)
    }).then(response => response.json())

}

const addNewCommentToArtist = async (artist, artistId) => {
    return fetch('http://localhost:8080/api/artists/' + artistId +'/comment/' , {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(artist)
    }).then(response => response.json())

}

export {
    fetchArtists,
    fetchSongs,
    fetchAlbums,
    postNewArtist,
    patchNewAlbumToArtist,
    patchNewSongToAlbum,
    fetchAlbumById,
    fetchArtistById,
    deleteSong,
    deleteAlbum,
    deleteArtist,
    addNewCommentToSong,
    addNewCommentToAlbum,
    addNewCommentToArtist
}
