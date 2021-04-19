# Client Color String Resource

## Color String
The color string contains the information for the initial state of the colors being used in the level. Its raw representation is formatted as follows:

`{color}|{color}|...`, where `color` is formatted as:

`{property_key}_{property_value}_{property_key}_{property_value}_...`.

## Color Properties
The color entries have the following properties:

| Key | Name                | Type                                | Description                                |
|:----|:--------------------|:------------------------------------|:-------------------------------------------|
| 1   | Red                 | **Integer**                         | The Red component of the color             |
| 2   | Green               | **Integer**                         | The Green component of the color           |
| 3   | Blue                | **Integer**                         | The Blue component of the color            |
| 4   | PlayerColor        | **[Player Color](enumerations.md)** | The Player Color that the color is copying |
| 5   | Blending            | **Bool**                            | The Blending property of the color         |
| 6   | ColorChannelID    | **Integer**                         | The Color Channel ID of the color          |
| 7   | Opacity             | **Float**                           | The Opacity property of the color          |
| 8   | OpacityEnabled      | **Integer**                         | Enables opacity of higher than `0`         |
| 9   | CopiedColorID     | **Integer**                         | The Color Channel ID of the copied color   |
| 10  | CopiedColorIDHSV | **[HSV](/resources/client/level-components/HSV.md)**                         | The HSV of the copied color                |
| 11  | CopyRed          | **Integer**                          | The Red component of the color |
| 12  | CopyGreen          | **Integer**                          | The Green component of the color |
| 13  | CopyBlue           | **Integer**                          | The Blue component of the color |
| 17  | CopyOpacity        | **Bool**                            | The Copy Opacity property of the color     |

***Undiscovered properties***

| Key | Type        | Proven Existence | Common Value | notes |
|:----|:------------|:-----------------|:-------------|:------|
| 14  | **Float** | Yes               | N/A          |
| 15  | **Float** | yes              | 1            | copy opacity?
| 16  | **Float** | yes               | N/A          |
| 18  | **Bool**(?) | yes              | 0            |
