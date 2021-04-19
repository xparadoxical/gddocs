# Client Color String Resource

## Color String
The color string contains the information for the initial state of the colors being used in the level. Its raw representation is formatted as follows:

`{color}|{color}|...`, where `color` is formatted as:

`{property_key}_{property_value}_{property_key}_{property_value}_...`.

## Color Properties
The color entries have the following properties:

| Key | Name                | Type                                | Description                                |
|:----|:--------------------|:------------------------------------|:-------------------------------------------|
| 1   | Red                 | **integer**                         | the Red component of the color             |
| 2   | Green               | **integer**                         | the Green component of the color           |
| 3   | Blue                | **integer**                         | the Blue component of the color            |
| 4   | Player Color        | **[Player Color](enumerations.md)** | the Player Color that the color is copying |
| 5   | Blending            | **bool**                            | the Blending property of the color         |
| 6   | Color Channel ID    | **integer**                         | the Color Channel ID of the color          |
| 7   | Opacity             | **float**                           | the Opacity property of the color          |
| 9   | Copied Color ID     | **integer**                         | the Color Channel ID of the copied color   |
| 10  | Copied Color ID HSV | **[HSV](/resources/client/level-components/HSV.md)**                         | the HSV of the copied color                |
| 17  | Copy Opacity        | **bool**                            | the Copy Opacity property of the color     |

***Undiscovered properties***

| Key | Type        | Proven Existence | Common Value | notes |
|:----|:------------|:-----------------|:-------------|:------|
| 8   | **Int** | yes              | 1            | opacity doesnt work without it |
| 11  | **integer** | yes              | 255          | rgb.r |
| 12  | **integer** | yes              | 255          | rgb.g |
| 13  | **integer** | yes              | 255          | rgb.b |
| 14  | **Float** | Yes               | N/A          |
| 15  | **Float** | yes              | 1            |
| 16  | **Float** | yes               | N/A          |
| 18  | **bool**(?) | yes              | 0            |
