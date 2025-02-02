// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  // Add preferences for Drax, Rocket, and Groot
  Drax: "R&B",
  Rocket: "Rock",
  Groot: "Pop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  return Object.entries(guardians).map(([guardian, genre]) => ({
    guardian,
    playlist: songs.filter((song) => song.genre === genre), // Filter songs by genre
  }));
}

// Function to display the playlists dynamically (without innerHTML)
function displayPlaylists(playlists) {
  const playlistsDiv = document.getElementById("playlists");
  playlistsDiv.innerHTML = ""; // Clear previous content

  playlists.forEach(({ guardian, playlist }) => {
    // Create playlist container
    const playlistContainer = document.createElement("div");
    playlistContainer.classList.add("playlist");

    // Create and append Guardian's name
    const guradianName = document.createElement("h2");
    guradianName.classList.add("guardian-name");
    guradianName.textContent = `${guardian}'s Playlist`;
    playlistContainer.appendChild(guradianName);

    // Create song list
    const songList = document.createElement("ul");
    songList.style.listStyle = "none";

    // Add each song to the list
    playlist.forEach((song) => {
      const songItem = document.createElement("li");
      songItem.classList.add("song");

      const songTitle = document.createElement("span");
      songTitle.classList.add("song-title");
      songTitle.textContent = song.title;

      const songArtist = document.createElement("span");
      songArtist.textContent = ` by ${song.artist}`;

      songItem.appendChild(songTitle);
      songItem.appendChild(songArtist);
      songList.appendChild(songItem);
    });

    playlistContainer.appendChild(songList);
    playlistsDiv.appendChild(playlistContainer);
  });
}

// Generate playlists and display them when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const playlists = generatePlaylist(guardians, songs);
  displayPlaylists(playlists);
});
