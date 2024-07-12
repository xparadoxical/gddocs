# getTop1000.php

**Note: as of July 12th 2024, this endpoint does not work anymore. It now requires an empty user-agent and the generic secret just like 99% of other endpoints. But it only returns some empty HTML, which can be found here:**

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="shortcut icon" href="#">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Top 1000</title>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #b5b3b3;
}

</style>

</head>
<body bgcolor="#999999">
```

The old getTop1000 behavior can be found below.


[getTop1000.php](http://boomlings.com/database/getTop1000.php) is one of the very few endpoints found on the servers that can be accessed via a [GET request](https://www.w3schools.com/tags/ref_httpmethods.asp). The purpose of this endpoint is to gather the top 1000 star grinders to be used on the star leaderboards.

## Parameters

This endpoint does not require any parameters

## Example

```py
import requests

req = requests.get("http://boomlings.com/database/getTop1000.php")
print(req.text)

```

## Response Structure

The structure for this endpoint is fairly simple - Using only a single key with 3 pieces of data assigned to the key with a `,` to seperate them. Each player is seperated by a newline `(<br>)` making it easy to parse.

Below is a small snippet of the response

    1: Smiffy777, 167677, 1413859
    2: Gormuck, 161467, 1775477
    3: Steekmen, 158704, 4310927
    4: Superchat, 157872, 1098021
    5: Cool, 157561, 4825

The Values for each segment are:

| Structure |
|:----------|
|`<Leaderboard Position>: <Player UserName>, <Player Star Count>, <Player AccountID>`|
