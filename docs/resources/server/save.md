# Saves Resource

When loading your save data, the server responds with 6 pieces of data, 4 of which are your save data

## Save Response

The response is split by a `;` and 2 algorithms are required to get the data

### structure

| Index | Type | Description |
|:------|:-----|:------------|
| 0 | **Gzipped String** | Contains the user's CCGameManager.dat |
| 1 | **Gzipped String** | Contains the user's CCLocalLevels.dat |
| 2 | **Integer** | The game version |
| 3 | **Integer** | The binary version |
| 4 | **Gzipped String** | Completed Levels |
| 5 | **Gzipped String** | Completed Mappacks |

### Decoding

The data can be decoded using the following functions
<!-- tabs:start -->

### **Indexes 0 and 1**

```js
const zlib = require('zlib');

function url_safe_base64_decode(string){
    return Buffer.from(string.replace(/\+/g, '-').replace(/\//g, '_'), 'base64');
}

function decode_save_data(save_data){
    return zlib.gunzipSync(url_safe_base64_decode(save_data)).toString();
}
```

### **Indexes 4 and 5**

```js
const zlib = require('zlib');

function url_safe_base64_decode(string){
    return Buffer.from(string.replace(/\+/g, '-').replace(/\//g, '_'), 'base64');
}

function decode_completed_save_data(save_data){
    let data = save_data.slice(0x14, save_data.length);
    return zlib.inflateSync(url_safe_base64_decode(data)).toString();
}
```

<!-- tabs:end -->

### After Decoding

After decoding each of the sections, you'll need to parse the data.

> - Indexes 0 and 1 can be parsed using the [save data](/resources/client/gamesave) section.  
> - Index 5 can be parsed using the [MapPacks](/resources/server/mappack) section

Section 4 doesn't use a parsing algorithm used by anything else. the format is `levelID,stars,levelID,stars` for every level you have completed.  
Below is a function that parses the data into a JavaScript Object

<!-- tabs:start -->
### **Parse Completed Levels**

```js
function parse_completed_levels(levels){
    let level_array = levels.split(',')
    let data = {};
    for (let i = 0; i < level_array.length; i++) {
        data[level_array[i]] = level_array[i + 1];
        i++;
    }
    return data // data returned in levelID:stars format
}
```
<!-- tabs:end -->