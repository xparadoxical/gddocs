# acceptGJFriendRequest20.php

Accepts an incoming friend request

## Parameters

### Required Parameters

| Parameter | Description | Type | Required |
|:----------|:------------|:-----|:---------|
| **gameVersion** | The Game Version `(21)` | **Integer** | False |
| **binaryVersion** | The Binary Version `(34/35)` | **Integer** | False |
| **gdw** | If the game is played on GD world | **Bool** | False |
| **accountID** | The user's accountID | **Integer** | True |
| **gjp** | The players password encrypted with [xor-base64](/topics/encryption/xor?id=xor-keys) | **String** | True |
| **targetAccountID** | The accountID of the player who sent the initial friend request | **Integer** | True |
| **requestID** | The friend request ID | **Integer** | True |
| **secret** | [Common Secret](reference?id=secrets) `Wmfd2893gb7` | **String** | True |

### Request Data

| Name | Value |
|:-----|:------|
| Tag | `accFriendReq_<TargetAccountID>_<RequestID>` |
| httpType | `0x1F` |


## Response

Returns `1` regardless if the account exists or not

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is accepted a friend request
# from PasswordFinders, whose account ID is 5317656

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "targetAccountID": 5317656,
    "requestID": 43248797,
    "secret": "Wmfd2893gb7",
}

req = requests.post('http://boomlings.com/database/acceptGJFriendRequest20.php', data=data)
print(req.text) # 1
```

**Response**
```py
1
```

<!-- tabs:end -->