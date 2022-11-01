// Compare match results string of "x:y"
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// games[i][0] = x
// games[i][1] = y


function points(games){
    let win = 0
    let lose = 0
    let tie = 0
    for (let i = 0; i < games.length; i++) {
        if (games[i][0] > games[i][games[i].length-1]){
            console.log("X Wins");
            win = win + 3;
        }
        else if(games[i][0] < games[i][games[i].length-1]){
            console.log("Y Wins");
        }
        else if (games[i][0] = games[i][games[i].length-1]){
            console.log("it's a tie");
            tie++;
        }
    }
    console.log("Win", win, "Lose", lose, "Tie", tie);
    let total = win + lose + tie;
    return total;
}

results = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
// points(results)


/// better result for(let game of games) loop

function points(games){
    let ourPoints;
    let theirPoints;
    let res = 0;

    for(let game of games){
        ourPoints = game[0]
        theirPoints = game[game.length-1]

        if(ourPoints > theirPoints){
            res+=3
        }
        else if(ourPoints == theirPoints){
            res+-1
        }
    }
    return res;
}
