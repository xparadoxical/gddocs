# Account Manager

The account manager contains information regardings a player's Geometry Dash account

| Key      | Description                     |
| :------- | :------------------------------ |
| `GJA_001` | The player's username           |
| `GJA_002` | The player's plaintext password |
| `GJA_003` | The player's account ID         |

## Update 2.2 Leaks

There have been many update 2.2 builds leaked over the years and the following values have been found inside of them

| Key      | Description                                                                   |
| :------- | :---------------------------------------------------------------------------- |
| `GJA_004` | An unknown value named `sessionID` which is assumed to be a session token     |
| `GJA_005` | A string refered to as `gjp2` which is a salted hash of the player's password |
