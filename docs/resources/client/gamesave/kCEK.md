# kCEK Encoder Keys

As of Geometry Dash 2.11, there are `5` different encoder keys that can be found within the save strucure. Below is a small table which explains what each encoder key does

| Key | Name/Value                     | description |
| :-- | :----------------------------- | :-----------|
| 4   | [GJGameLevel](resources/client/level.md) | Contains Keys for levels you played in the past |
| 6   | [SongInfoObject](resources/server/song) | Contains Keys for songs downloaded |
| 7   | [GJChallengeItem](resources/client/gamesave/quests.md) | Contains Keys that the game uses to show quests when offline |
| 8   | [GJRewardItem](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) | object that holds `GJRewardObject` |
| 9   | [GJRewardObject](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) | contains reward data for `GJRewardItem` |

## kCEK 8 and 9 Structure

`GJRewardItem` is a dictionary which contains `GJRewardObject` and these encoder keys hold all the reward data for a players account

| key | encoder Key | use/description |
|:----|:------------|:------------|
| 1 | 8 | Depends on the [GS_Value](/resources/client/gamesave/GS_Value) it is inside of | <!--ToDo-->
| 2 | 8 | Depends on the [GS_Value](/resources/client/gamesave/GS_Value) it is inside of |
| 3 | 8 | GJRewardObject |
| 1 | 9 | itemType |
| 2 | 9 | customItemID |
| 3 | 9 | rewardAmount |
| 4 | 9 | itemUnlockValue -> [presumedly contains data that unlocks an item in the garage?](https://media.discordapp.net/attachments/801840133355470888/806137688905875496/unknown.png) <!--TODO -> invesitgate GameStatsManager::createSpecialChestItems()--> |

### itemType

| key | value |
|:----|:------|
| 1 | Fire Shard |
| 2 | Ice Shard |
| 3 | Poison Shard |
| 4 | Shadow Shard |
| 5 | Lava Shard |
| 6 | Demon Key |
| 7 | Orbs |
| 8 | Diamonds |
| 9 | customItem |

### GJRewardItem GS Keys

#### GS_11

| key | value |
|:----|:------------|
| 1 | ChestID | 
| 2 | ChestType | 

##### Chest Types

| ID | type |
|:---|:-----|
| 1 | 4 hour chest |
| 2 | 24 hour chest |