# Music Library format

The Music Library is stored in your save directory as `musiclibrary.dat`. To learn how to retreive it from the servers, refer to [this page](/endpoints/songs/musiclibrary.md).

To decode musiclibrary.dat, you need to [Base64](/topics/encryption/base64.md) URL-Safe decode it and [Zlib](/topics/encryption/zip.md) inflate it.

The Music library is split into 4 parts:

```
{version}|{artists}|{songs}|{tags}
```

## Version

This is just the music library version. Not much more to say here.

## Artists

These are all of the artists, separated by `;` in the following format:

`{artistID},{name},{website},{youtubeChannel}`

The website is the full link, but it is URL encoded. The YouTube channel link is only the part that comes after `https://youtube.com/channel/`. If either of these are missing, there will be a space character in place of them.

Here is an example of an artist:

```
286,F-777,https%3A%2F%2Fjessevalentinemusic.bandcamp.com,UC6MNIegxWVDe6tOjL92QkUw
```

## Songs

This is where the old (2.205-) and new (2.206+) music libraries diverge. In both libraries, the songs are separated with `;`. However, the new music library has each song in this format:

`{id},{name},{artistID},{filesize},{duration},{tags},{musicPlatform},{extraArtists},{externalLink},{newButton},{priorityOrder},{songNumber}`

Meanwhile the old music library has each song in this format:

`{id},{name},{artistID},{filesize},{duration},{tags}`

Here's an explanation for each key:

| Name          | Type      | Description                                                                                                 |
| :------------ | :-------- | :---------------------------------------------------------------------------------------------------------- |
| id            | integer   | The song ID                                                                                                 |
| name          | string    | The song name                                                                                               |
| artistID      | integer   | The primary artist ID                                                                                       |
| filesize      | integer   | The file size of the song in bytes                                                                          |
| duration      | integer   | The song's duration in seconds                                                                              |
| tags          | string    | The song's tags, separated by dots. The string also has extra dots at the start and end for unknown reasons |
| musicPlatform | integer   | The platform this song comes from. 0 for None, 1 for NCS.                                                   |
| extraArtists  | string    | The IDs of the artists that contributed to the song, separated with `.`                                     |
| externalLink  | string    | The external link to the song (NOT the GD download link)                                                    |
| newButton     | boolean   | Whether there's a yellow `NEW` icon next to the song                                                        |
| priorityOrder | integer   | The priority order of the song. Usually, songs are ordered alphabetically, but if the song has this number set above 0, then it gets put above all the other songs. The song also receives a blue `NEW` icon. All of the songs with this property have the previous property set as 0. |
| songNumber    | integer   | The number of the song in the list. Starts at 1. Usage is unknown                                           |
