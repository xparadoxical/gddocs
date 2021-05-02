# GameStatsManager

**The GS_Values within save data contains various pieces of information regarding the players statistics.**  

There are 24 components of the save which contain player stats and they are all handled by the `GSM` commonly known as the `GameStatsManager`. Below are various tables and explanations of each of the 24 components of the `GSM`

## GS\_Value

**GS_value is a dictionary within GameStatsManager which contains all of the key player statstics.**  

Most of the players stats can be found within GS_Value with a few exceptions and they are used for various tasks within the game. Although the stats are easy to access, they are a bit more difficult to manipulate as the game re-counts stats every time you launch the splash screen. A couple examples of the recount being utilised are:

- Stars recounting using [GameLevelManager](/resources/client/gamesave/GLM.md)

- Orbs recounting using [GameLevelManager](/resources/client/gamesave/GLM.md) and via chests

- Demon Keys recounting by calulating `<Total Orbs> / 500.0`

One key statistic that isn't present inside of GS_Value are bonus shards. The reason for this is that bonus shards are calculated on load by finding the `Lowest Common Denominator` of all of the shards

Secret coins behave quite differently than the other stats as they don't have any keys within the [GameLevelManager](/resources/client/gamesave/GLM.md). Due to this, secret coins use a special keyword within GS_Value and the game uses this to validate if the coins are legitimate.


## GS Value structure

| key | value |
|:----|:------|
| 1 | Total jumps |
| 2 | Total attempts |
| 3 | Total official levels completed |
| 4 | Total online levels completed |
| 5 | Total completed demons |
| 6 | Total earned stars |
| 7 | Total completed mappacks |
| 8 | Secret coins collected |
| 9 | Players destroyed on the main menu |
| 10 | Combined total of likes and dislikes |
| 11 | Total of all difficulty ratings you have given to levels |
| 12 | Total user coins collected |
| 13 | Total diamonds collected |
| 14 | Current Orbs |
| 15 | Total completed Daily Levels |
| 16 | Fire Shards |
| 17 | Ice Shards |
| 18 | Poison Shards |
| 19 | Shadow Shards |
| 20 | Lava Shards |
| 21 | Demon Keys |
| 22 | Total Orbs Collected |
| `Unique_<LevelID>_<Coins Collected>` | The Coins Collected on the Official Levels |

## GS_completed

**GS_completed contains a dictionary of all levels that the player has completed**

Although at first GS_completed looks complicated, it is fairly simple. Most levels added into GS_completed have usually have multiple instances of the ID and because of this, the system around completed levels can be quite flexible. Altogether there are 3 different types of prefixes

- Completion keys -> `[n, c, d, g]` which are used to tell the game you have completed the level of that type.

- Star keys -> the word `star` is appended onto the completion key and this tells the game to award the player stars.

- Demon keys -> the word `demon` is appended onto the completion key and this tells the game to award the player a demon.

| Key | Value |
|:----|:------|
| `n_<levelID>`| Official levels which have been completed |
| `c_<levelID>` | Online levels that have been completed |
| `d_<levelID>` | Timely levels that have been completed |
| `g_<levelID>` | Gauntlet levels that have been completed |
| `star_<levelID>` | If the completed level should give stars |
| `dstar_<levelID>` | If the timely level should give stars|
| `gstar_<levelID>` | If the gauntlet level should give stars |
| `demon_<levelID>` | If the level should give demons |
| `ddemon_<levelID>` | If the timely level should give demons|
| `gdemon_<levelID>` | If the gauntlet level should give demons|

## GS_3

**GS_3 contains a dictionary of levels with pending user coins.**   

Pending user coins are bronze and appear on levels without stars and on rare occasions, some levels with stars have them. Pending user coins do not contribute to the players total user coin count on their profile as they haven't been officially verified by RobTop. These coins are stored so the game can update your user coins in the event of a level you had beaten previously earning a star rating 

| Structure |
|:----------|
|`<levelID>_<coins collected>`|

## GS_4

**GS_4 contains a dictionary of levels with Verified user coins.** 

Verified user coins are silver coins that can be found on levels with a star rating. Although they can be found within levels without a star rate, it is something that doesn't happen as it would defeat the point of rated levels. Upon collecting a user coin, it will increment the statistic within `GS_Value` as well as update it on the players profile for people to see.

| Structure |
|:----------|
|`<levelID>_<coins collected>`|

## GS_5

**GS_5 contains a dictionary of MapPacks which the player has completed**

MapPacks are level packs within Geometry Dash which contain handpicked levels by RobTop. Usually mappacks contain 3 different levels however, there isn't a limit to how many levels they contain. Upon completion, a special button to claim the mappack rewards is prompted and doing so results in the mappack being inserted into your save data.

| Structure |
|:----------|
|`<k>pack_<packID></k><s><stars Rewarded></s>`|

## GS_6

**GS_6 contains a dictionary of items which the player has purchased from the various shops**

There are 3 shops as of 2.1 which contain items which you can buy. Although there are seperate shops, they all use the same table for listing IDs making the structure for GS_6 simple. A table of listing IDs can be found within the [shop](/topics/shop.md) section of the docs

| Structure |
|:----------|
|`<k><ListingID></k><s><Price></s>`|

## GS_7

GS_7 is the Highscore attempt of levels

| Structure |
|:----------|
|`<k>{levelID}</k><s>{percentage}</s>`|

## GS_8

`CurrencyAwardDict` -> Unused

## GS_9

GS_9 provides info about how many stars downloaded levels give to you

| Structure |
|:----------|
|`<k>{levelID}</k><s>{rewardedStars}</s>`|

## GS_10

GS_10 Contains the high score of All Official Levels you have played

| Structure |
|:----------|
|`<k>{ID}</k><s>{percentage}</s>`|

## GS_11

GS_11 Contains the reward data for the Timely Chests you have opened

| key | Description |
|:----|:------|
| `<k>{ChestType}_{ChestID}</k>` | reward Object |
| `k_{number}` | RewardItems -> the number corresponds to how many RewardItems the player will recieve |
| `kCEK` | The [encoder keys](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) |

### Chest Types

| ID | type |
|:---|:-----|
| 1 | 4 hour chest |
| 2 | 24 hour chest |

## GS_12

GS_12 Contains the currently active [Quests](/resources/client/gamesave/quests)

## GS_14

The Diamond Rewards Collected from Challenges and Daily levels

| structure | type |Description |
|:----------|:------|:-----------|
|`{TypeID}{challenge/dailyID}` | int | The Number of Diamonds Earned | 

### TypeID's

| Types | Description |
|:------|:------------|
| c | Challenges/quests |
| d | daily levels |

## GS_15

GS_15 Contains the upcoming [Quests](/resources/client/gamesave/quests)

## GS_16

GS_16 contains the High Scores for daily and weekly demons

| Structure |
|:----------|
|`<k>{TimelyID}</k><s>{percentage}</s>`|

## GS_17

GS_17 contains the Stars rewarded for daily and weekly demons

| Structure |
|:----------|
|`<k>{TimelyID}</k><s>{Stars}</s>`|

## GS_18

GS_18 contains the High Scores for Gauntlet Levels

| Structure |
|:----------|
|`<k>{levelID}</k><s>{percentage}</s>`|

## GS_19

GS_19 Contains the reward data for the Treasure room chests you have opened

| key | Description |
|:----|:------|
| `<k>{ChestID}</k>` | reward Object |
| `k_{number}` | RewardItems -> the number corresponds to how many RewardItems the player will recieve |
| `kCEK` | The [encoder keys](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) |

## GS_20

GS_20 seems to be the total amount of Demon Keys you have had over your accounts lifespan

## GS_21

GS_21 Contains the reward data for the gauntlets you have completed

| key | Description |
|:----|:------|
| `g_{GauntletID}` | the gauntlet number |
| `000{ChestID}` | ChestIDs for Reward Chests |
| `k_{number}` | RewardItems -> the number corresponds to how many RewardItems the player will recieve |
| `kCEK` | The [encoder keys](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) |

### Chest IDs

| ID | how to get |
|:----|:------|
| 0001 | Beat the Challenge |
| 0002 | Release the Demon Guardian |
| 0003 | Chamber of Time Chest|
| 0004 | Treasure Room 50 key Chest|
| 0005 | Treasure Room 100 Key Chest|
| 0006 | Treasure Room 200 Key Chest|
| 0007 | YouTube Chest |
| 0008 | Twitter Chest |
| 0009 | Facebook Chest |


## GS_22

GS_22 Contains reward data for all of the ad chests from Geometry Dash world

| Key | Value |
|:----|:------|
| `{unix Timestamp}` | orbs |

## GS_23

GS_23 contains the High Scores for daily and weekly demons

| Structure |
|:----------|
|`<k>{TimelyID}</k><s>{percentage}</s>`|

## GS_24

GS_24 contains the High Scores for Gauntlet Levels

| Structure |
|:----------|
|`<k>{levelID}</k><s>{percentage}</s>`|

## GS_25

GS_25 Contains the reward data for every weekly demon you have completed

| key | Description |
|:----|:------|
| `d100{number}` | The Timely ID of the weekly Demon you have beaten |
| `k_{number}` | RewardItems -> the number corresponds to how many RewardItems the player will recieve |
| `kCEK` | The [encoder keys](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) |