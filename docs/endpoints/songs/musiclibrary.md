# musiclibrary.dat 

## Requests

In Geometry Dash 2.2, the Music library has been added, adding thousands of songs that were not on Newgrounds to the game. 

In 2.206, NCS was added to the music library, which forced RobTop to overhaul the file format.

The current library (as of 2.206) can be fetched via a GET request to `https://geometrydashfiles.b-cdn.net/music/musiclibrary_02.dat`.

The old music library can be fetched via a GET request to `https://geometrydashfiles.b-cdn.net/music/musiclibrary.dat`.

You can also fetch the latest version of the Music Library by sending a GET request to `https://geometrydashfiles.b-cdn.net/music/musiclibrary_version_02.txt` (for the old library, the link is `https://geometrydashfiles.b-cdn.net/music/musiclibrary_version.txt`. As of the writing, the latest version for the old library is `114` and this is unlikely to change in the future).

You can download a track by sending a GET request to `https://geometrydashfiles.b-cdn.net/music/{id}.mp3`. All Music Library song IDs have an offset of 10,000,000 to not interfere with the Newgrounds songs.

The Music library format is covered [here](/resources/client/musiclibrary.md).
