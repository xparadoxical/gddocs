const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./shop.json', 'utf-8'));

let table = '| ID | itemID | Item Type | cost | Shop Type |\n';
table += '|:---|:-------|:----------|:-----|:----------|\n';

let itemType, shopType;

for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    switch (obj['itemType']) {
        case '1':
            itemType = 'Cube';
            break;
        case '2':
            itemType = 'Colour 1';
            break;
        case '3':
            itemType = 'Colour 2';
            break;
        case '4':
            itemType = 'Ship';
            break;
        case '5':
            itemType = 'Ball';
            break;
        case '6':
            itemType = 'UFO';
            break;
        case '7':
            itemType = 'Wave';
            break;
        case '8':
            itemType = 'Robot';
            break;
        case '9':
            itemType = 'Spider';
            break;
        case '10':
            itemType = 'Streak';
            break;
        case '11':
            itemType = 'Explosion';
            break;
        case '12':
            if (obj['itemID'] == 4) itemType = 'Master Emblem'; else itemType = 'GJItem';
            break;
        default:
            itemType = 'unknown';
            break;

    }

    switch (obj['shopType']) {
        case '0':
            shopType = 'Shopkeeper';
            break;
        case '1':
            shopType = 'Scratch';
            break;
        case '2':
            shopType = 'PotBor';
            break;
        default:
            shopType = 'Unknown';
            break;

    }

    table += `| ${obj['shopID']} | ${obj['itemID']} | ${itemType} | ${obj['orbs'] ? obj['orbs'] : 'Unknown'} | ${shopType} |\n`
}

fs.writeFileSync('shop.md', table)