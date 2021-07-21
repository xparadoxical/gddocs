# accounts/syncGJAccountNew.php

Fetches save data from the Geometry Dash data server

## Parameters

| Parameter | Description | Required | 
|:-----------|:------------|:---------|
| userName | The user's username | True |
| password | The user's password in plaintext | True |
| secret | `Wmfv3899gc9` | True
| gameVersion* | The GameVersion `21` | True |
| binaryVersion | The BinaryVersion `34` or `35` | False |
| gdw | If the user is playing [Geometry Dash World](#) | False |

* The gameVersion parameter has some unique behaviour compared to the rest of the parameters. if omitted or set to an earlier gameVersion, only the final index will appear in the response

## Response

The user's Save Data split into **6** components, the splitter being a `;`

## Request

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "userName": "GDDocsTestAcc",
    "password": "********",
    "secret": "Wmfv3899gc9",
    "gameVersion": 21,
    "binaryVersion": 35,
    "gdw": 0
}

req = requests.post("http://boomlings.com/database/accounts/syncGJAccountNew.php", data=data)

# due to the size of the response, we will being using a name to represent the piece of data returned from the server
print(req.text)
```

**Response**
```py
GameManager;LocalLevels;GameVersion;BinaryVersion;CompletedLevels;CompletedMappacks
```

<!-- tabs:end -->