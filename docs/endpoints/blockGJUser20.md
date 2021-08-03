# blockGJUser20.php

Blocks a user.

## Parameters

| Parameter | Description | Type | Required |
|:----------|:------------|:-----|:---------|
| **gameVersion** | The Game Version `(21)` | **Integer** | False |
| **binaryVersion** | The Binary Version `(34/35)` | **Integer** | False |
| **gdw** | If the game is played on GD world | **Bool** | False |
| **accountID** | The user's accountID | **Integer** | True |
| **gjp** | The players password encrypted with [xor-base64](/topics/encryption/xor?id=xor-keys) | **String** | True |
| **targetAccountID** | The accountID of the player who sent the initial friend request | **Integer** | True |
| **secret** | [Common Secret](reference?id=secrets) `Wmfd2893gb7` | **String** | True |

### Request Data

| Name | Value |
|:-----|:------|
| Tag | `blockUser_<TargetAccountID>` |
| httpType | `0x22` |

## Response

Returns `1` regardless if the account exists or not

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is blocking RobTop

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp": "********", # This would be DevExit's password encoded with GJP encryption
        "targetAccountID": 71, # Robtop's account ID
        "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/blockGJUser20.php", data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->