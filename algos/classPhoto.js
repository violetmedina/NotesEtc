
let redShirtHeights = [5, 8, 1, 3, 4]
let blueShirtHeights = [6, 9, 2, 4, 5]


function classPhotos(redShirtHeights, blueShirtHeights) {

    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    console.log("Red", redShirtHeights);
    console.log("Blue", blueShirtHeights);

    const shirtColorFirst = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';

    console.log(shirtColorFirst)

    for (let i = 0; i < redShirtHeights.length; i++){
        const redShirtHeight = redShirtHeights[i];
        const blueShirtHeight = blueShirtHeights[i];

    if (shirtColorFirst === 'RED') {
        if (redShirtHeights >= blueShirtHeights) return false;
    } else if (blueShirtHeights >= redShirtHeights) return false;
    }
    return true;
}

classPhotos(redShirtHeights, blueShirtHeights)