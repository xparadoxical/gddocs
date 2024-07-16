# getAccountURL.php

Gets the URL for the data server.

## Parameters

### Required Parameters

**accountID** - Anyone's account ID

**type** - used to decide which endpoint is used after the data server is found - 1 = backup data/ 2 = sync data

**secret** - Wmfd2893gb7

## Response

[https://www.robtopgames.org](https://www.robtopgames.org) for type 1, [https://www.robtopgames.net](https://www.robtopgames.net) for type 2

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
        "accountID": 173831,
        "type": 2,
        "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/getAccountURL.php", data=data)
print(req.text)
```

**Response**
```py
https://www.robtopgames.net
```

<!-- tabs:end -->
