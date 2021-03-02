# Client Gamesave Resource

## CCGameManager.dat

Your CCGameManager.dat file contains a lot of information regarding your account. It is encrypted using [Xor](/topics/encryption/xor.md) with a key of `11/0xB`, [url-Safe Base64](/topics/encryption/base64.md) and [Gzip](/topics/encryption/zip.md). After decoding save data, it is returned as a [plist](#) which is typically formatted as [XML](https://en.wikipedia.org/wiki/XML)

<!--
tags
k - key
s - string
i - int
r - float
t - true
d - dict
-->

> Inside of your gamesave there are `7` types of tags, in which `4` are used to identify the types of the values.
> - `<k>` - Keys -> used to map specific values to in-game features.
> - `<d>` - Dictionaries -> contains data for keys that contain more than 1 piece of data.
> - `<s>` - String -> values found paired with `keys` which are typed as `string`
> - `<i>` - Integer -> values found paired with `keys` which are typed as `Integer`
> - `<r>` - Float -> values found paired with `keys` which are typed as `Float`
> - `<t \>` - true -> only appears if a specific `key` is set to `true`
> - `<d \>` - Empty Dictionary -> denotes that there should be a dictionary however it is empty

#### Examples

| Key | Example |
|:----|:--------|
|`<k>`|`<k>bgVolume</k>`|
|`<d>`|`<k>valueKeeper</k><d><k>gv_0001</k><s>1</s><k>i_23</k><s>1</s></d>`|
|`<s>`|`<k>GJA_002</k><s>password123</s>`|
|`<i>`|`<k>bootups</k><i>9842</i>`|
|`<r>`|`<k>sfxVolume</k><r>0.243452</r>`|
|`<t \>`|`<k>k47</k><t \>`|
|`<d \>`|`<k>GS_8</k><d \>`|

## Gamesave Key structure

Throughout save data, there are `85` different keys that contain values. Below are tables which showcase the save structure and explain what data each key contains.

| Key     | Type | description |
| :-------| :--- | :-----------|
| bgVolume| **Float**| any value between 0 - 1 |
| sfxVolume| **Float**| any value between 0 - 1 |
| playerUDID| **[UDID](/topics/encryption/id?id=udid)**| The UDID of the user |
| playerName| **String**| The In-game Name of the player|
| playerUserID| **Integer**| The userID of the player|
| playerFrame| **[Icon](enumerations.md)**| The ID of the player Cube |
| playerShip| **[Icon](enumerations.md)**| The ID of the player Ship |
| playerBall| **[Icon](enumerations.md)**| The ID of the player Ball |
| playerBird| **[Icon](enumerations.md)**| The ID of the player UFO |
| playerDart| **[Icon](enumerations.md)**| The ID of the player Wave |
| playerRobot| **[Icon](enumerations.md)**| The ID of the player Robot |
| playerSpider| **[Icon](enumerations.md)**| The ID of the player Spider |
| playerColor| **[Icon](enumerations.md)**| The ID of the player Color |
| playerColor2| **[Icon](enumerations.md)**| The ID of the player Color2 |
| playerStreak| **[Icon](enumerations.md)**| The ID of the player Trail |
| playerDeathEffect| **[Icon](enumerations.md)**| The ID of the player Death Effect |
| playerIconType| **[Icon](enumerations.md)**| The Index of the player's IconType |
| playerGlow| **Bool** | if Glow is enabled or not |
| secretNumber| **Integer**| the answer to `cod3breaker` in the vault of secrets |
| hasRP | **Integer** | `hasRatePower` - > The mod rank a user has |
| [valueKeeper](/resources/client/gamesave/valueKeeper.md)| **Dictionary** | Dictionary filled with GV values you have enabled and unlockables |
| unlockValueKeeper | **Dictionary** | Dictionary of Unlockable GV values|
| customObjectDict| **Dictionary** | Dictionary of object data of custom objects saved|
| reportedAchievements| **Dictionary** | contains a dictonary of all reported achievements on your account|
| showSongMarkers| **Bool** | if showSongMarkers is enabled |
| showProgressBar| **Bool** | if showProgressBar is enabled |
| clickedGarage| **Bool** | if Garage has been clicked |
| clickedEditor| **Bool** | if Editor has been clicked |
| clickedPractice| **Bool** | if Practice mode button has been clicked |
| showedEditorGuide| **Bool** | if EditorGuide has been clicked |
| showedLowDetailDialog| **Bool** | if low detail mode has been has been clicked |
| bootups| **Integer** | The ammount of times you have opened Geometry Dash |
| hasRatedGame| **Bool** | if you have rated the game |
| binaryVersion| **Integer** | The Games Binary Version |
| resolution| **Integer** | The games resolution?  |
| texQuality| **Integer** | how high the text quality is  |

### GLM 

`GLM` stands for `GameLevelManager` and it contains all information about levels in geometry dash

| Key     | Type | description |
| :-------| :--- | :-----------|
| [GLM_01](/resources/client/gamesave/GLM.md#GLM_01) | **[GJGameLevel](/resources/server/level.md)**| A dictionary which contains the `GJGameLevel` structure of all the official levels you have progress on |
| [GLM_02](/resources/client/gamesave/GLM.md#GLM_02) | **[GJGameLevel](/resources/server/level.md)** | A dictionary which contains the `GJGameLevel` structure of all of your uploaded levels -> was removed when the [account system](/topics/accounts.md) was changed |
| [GLM_03](/resources/client/gamesave/GLM.md#GLM_03) | **[GJGameLevel](/resources/server/level.md)**| A dictionary which contains the `GJGameLevel` structure of all the online levels you have played |
| [GLM_04](/resources/client/gamesave/GLM.md#GLM_04) | **Ratings** | A dictionary of ratings that you have submitted on levels -> was removed in `Update 2.0` |
| [GLM_06](/resources/client/gamesave/GLM.md#GLM_06) | **AccountIDs** | A dictionary containing the accountID's of creators you follow -> used in the `followed` parameter on [getGJLevels21](/endpoints/getGJLevels21.md) endpoint   |
| [GLM_07](/resources/client/gamesave/GLM.md#GLM_07) | **levelID**| A dictionary of levelID's from the players last playing session |
| [GLM_08](/resources/client/gamesave/GLM.md#GLM_08) | **filters** | A dictionary of Search filter states |
| [GLM_09](/resources/client/gamesave/GLM.md#GLM_09) | **filters** | A dictionary of Search filters for Online Levels |
| [GLM_10](/resources/client/gamesave/GLM.md#GLM_10) | **[GJGameLevel](/resources/server/level.md)**| A dictionary which contains the `GJGameLevel` structure of all the completed Timely levels the player has played |
| [GLM_11](/resources/client/gamesave/GLM.md#GLM_11) | **Integer** | Current Daily ID |
| [GLM_12](/resources/client/gamesave/GLM.md#GLM_12) | **likes** | A dictionary of all the likes the player has given to levels/comments |
| [GLM_13](/resources/client/gamesave/GLM.md#GLM_13) | **levelID** | A dictionary of levelIDs that the player has submitted a rating on |
| [GLM_14](/resources/client/gamesave/GLM.md#GLM_14) | **reportedLevels**| A dictionary of levelIDs the player has reported|
| [GLM_15](/resources/client/gamesave/GLM.md#GLM_15) | **levelID** | A dictionary of levels IDs of all demons the player has submitted a rating on |
| [GLM_16](/resources/client/gamesave/GLM.md#GLM_16) | **[GJGameLevel](/resources/server/level.md)**| A dictionary which contains the `GJGameLevel` structure of all the gauntlet levels the player has progress on |
| [GLM_17](/resources/client/gamesave/GLM.md#GLM_17) | **integer**| Current Weekly ID |
| [GLM_18](/resources/client/gamesave/GLM.md#GLM_18) | **Folder** | A dictionary containing a list of folders for saved levels |
| [GLM_19](/resources/client/gamesave/GLM.md#GLM_19) | **Folder** | A dictionary containing a list of folders for Local Levels |

### GS

`GS` stands for `GameStatsManager` which contains all the information about the players stats

| Key     | Type |
| :-------| :--- |
| [GS_value](/resources/client/gamesave/GS_Value?id=gs-value-structure)| A dictionary of player stats  |
| [GS_completed](/resources/client/gamesave/GS_Value?id=gs_completed)| A dictionary of all completed level information  |
| [GS_3](/resources/client/gamesave/GS_Value?id=gs_3)| Completed levels with coins `{levelID}_{number of coins aquired from level}` |
| [GS_4](/resources/client/gamesave/GS_Value?id=gs_4)| Completed levels with coins `{levelID}_{number of coins aquired from level}` |
| [GS_5](/resources/client/gamesave/GS_Value?id=gs_5)| Completed Mappacks + rewarded stars `<k>pack_{MappackID}</k><s>{Stars rewarded}</s>` |
| [GS_6](/resources/client/gamesave/GS_Value?id=gs_6)| all Purchased Icons/Colours in the shops `<k>{ListingID}</k><s>{Price}</s>` |
| [GS_7](/resources/client/gamesave/GS_Value?id=gs_7)| level progress `<k>{levelID}</k><s>{percentage}</s>` |
| [GS_8](/resources/client/gamesave/GS_Value?id=gs_8)| [UNUSED] |
| [GS_9](/resources/client/gamesave/GS_Value?id=gs_9)| How many stars downloaded levels give `<k>{levelID}</k><s>{rewardedStars}</s>` |
| [GS_10](/resources/client/gamesave/GS_Value?id=gs_10)| Offical level progress `<k>{ID}</k><s>{percentage}</s>` |
| [GS_11](/resources/client/gamesave/GS_Value?id=gs_11)| All rewards gained from Daily Chests |
| [GS_12](/resources/client/gamesave/GS_Value?id=gs_12)| Contains [Quests](resources/client/gamesave/quests.md)|
| [GS_14](/resources/client/gamesave/GS_Value#GS_14)| Daily/Challenges rewards |
| [GS_15](/resources/client/gamesave/GS_Value?id=gs_15)| Contains Upcoming [Quests](resources/client/gamesave/quests.md)|
| [GS_16](/resources/client/gamesave/GS_Value?id=gs_16)| Daily/Weekly level progress `<k>{Daily/WeeklyID}</k><s>{percentage}</s>` |
| [GS_17](/resources/client/gamesave/GS_Value?id=gs_17)| Daily/Weekly Stars `<k>{Daily/WeeklyID}</k><s>{Stars}</s>` |
| [GS_18](/resources/client/gamesave/GS_Value?id=gs_18)| Gauntlet Level Progress `<k>{levelID}</k><s>{percentage}</s>` |
| [GS_19](/resources/client/gamesave/GS_Value#GS_19)| All the Rewards from unlocked chests in the treasure room |
| [GS_20](/resources/client/gamesave/GS_Value?id=gs_20)| Demon Keys |
| [GS_21](/resources/client/gamesave/GS_Value#GS_21)| All rewards for Completed Gauntlets + rewards for Demon quest/social medias   |
| [GS_22](/resources/client/gamesave/GS_Value?id=gs_22)| Rewards from Geometry Dash world |
| [GS_23](/resources/client/gamesave/GS_Value?id=gs_23)| Gauntlet Level Progress `<k>{levelID}</k><s>{percentage}</s>` |
| [GS_24](/resources/client/gamesave/GS_Value?id=gs_24)| Daily/Weekly Percentage |
| [GS_25](/resources/client/gamesave/GS_Value#GS_25)| All the rewards from completed weekly Demons |

### GJA

`GJA` stands for `GeometryJumpAccount` and it contains important information about a players account

| Key | Value|
| :-- |:-----------|
| GJA_001 | Username|
| GJA_002 | Password (in plaintext)|
| GJA_003 | AccountID |

#### GDL22 GJA
| Key | Value|
| :-- |:-----------|
| GJA_004 | SessionID |

### LLM

`LLM` stands for `LocalLevelsManager` and it contains all information about levels saved locally

| Key | Value|
| :-- |:-----------|
| LLM_01 | Local Levels |
| LLM_02 | Hardcoded to `binaryVersion`|

### MDLM

`MDLM` stands for `MusicDownloadManager` and it contains important information about the songs you have downloaded

| Key | Value |
|:----|:------|
| MDLM_001 | Dictionary of SongInfoObject |
| MDLM_002 | Song Priority of a song |

### KBM

`KBM` stands for `KeyBindingsManager` and they contain info about keybindings

| Key | Value |
|:----|:------|
| KBM_001 | Keybindings |
| KBM_002 | Keybindings |