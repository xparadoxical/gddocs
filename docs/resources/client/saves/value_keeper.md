# ValueKeeper

> Value keeper is responsible for keeping track of unlockables and game variables

**Each item inside of the Value Keeper dictionary follows a certain structure - A prefix added onto an ID**

_For example: `i_43` or `dart_12` would be used to tell the game that `cube 43` and `wave 12` are unlocked_

| Prefix     | Description                                                |
| :--------- | :--------------------------------------------------------- |
| `gv_`      | The global state of an internal [Game Variable][GAME_VARS] |
| `i_`       | A cube which has been unlocked                             |
| `ship_`    | A ship which has been unlocked                             |
| `ball_`    | A ball which has been unlocked                             |
| `bird_`    | A ufo which has been unlocked                              |
| `dart_`    | A wave which as been unlocked                              |
| `robot_`   | A robot which has been unlocked                            |
| `special_` | A trail which has been unlocked                            |
| `c0_`      | A primary colour which has been unlocked                   |
| `c1_`      | A secondary colour which has been unlocked                 |
| `death_`   | A death effect which has been unlocked                     |

> For information regarding **Game Variables**, please refer to the [Game Variables][GAME_VARS] section

[GAME_VARS]: #
