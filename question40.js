function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// different albums
var album1 = make_album("Artist1", "Album1", 10);
var album2 = make_album("Artist2", "Album2");
var album3 = make_album("Artist3", "Album3", 15);
console.log(album1);
console.log(album2);
console.log(album3);
