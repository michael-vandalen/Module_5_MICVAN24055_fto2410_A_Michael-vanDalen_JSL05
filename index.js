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
return Object.entries(guardians).map(([guardian, genre]) => ({
  guardian,
  playlist: songs.filter((song) => song.genre === genre), // Filter songs by genre
}));

function displayPlaylists(playlists) {
  const playlistsDiv = document.getElementById("playlists");
  playlistsDiv.innerHTML = "";

  playlists.forEach(({ guardian, playlist }) => {
    //Create playlist container
    const playlistContainer = document.createElement("div");
    playlistContainer.classList.add("playlist");

    // Create Guardian Name Header
    const guardianName = document.createElement("h2");
    guardianName.classList.add("guardian-name");
    guardianName.textContent = `${guardianName}'s Playlist`;
    playlistContainer.appendChild(guardianName);
  });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
