# Music Download Manager

**Music Download Manager is in charge of handling downloaded songs. Unless the `No Song Limit` setting is enabled, the manager will automatically remove low priority songs once there are `50` songs downloaded.**

_For information regarding how song objects are structured, please refer to the [song section][SONG_OBJECT]_

| Key        | Description                                                     |
| :--------- | :-------------------------------------------------------------- |
| `MDLM_001` | This is an array containing various [Song Objects][SONG_OBJECT] |
| `MDLM_002` | A global Song Priority counter                                  |

> Song priority is a system in place used to order songs in the user's song list. Every time a level is played, the global counter increments and then sets the song's local priority to the current priority. When a songlist is loaded, it will start displaying songs with a higher priority first

[SONG_OBJECT]: #
