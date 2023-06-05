# Keybindings

The keybindings Manager supposedly handles keybindings the player can use within the level editor. However, it appears that the functionality of this class is incomplete. In Geometry Dash 2.1, there are 2 dictionaries within KeybindingsManager

| Dictionary Name | Description              |
| :-------------- | :----------------------- |
| `KBM_001`       | Command lookup using key |
| `KBM_002`       | Key lookup using command |

> As it is unfinished, we can not know what RobTop was thinking when implementing this however, based on the unfinished code left within the executable, it is assumed that he intended to use bidirectional mapping with dictionaries to get instantanious keybinding lookups
