var hard = {
    "stop": [
        {
            "name": "Pallet Town",
            "space": 0
        }, {
            "name": "Pewter Gym",
            "space": 6
        }, {
            "name": "Cerulean Gym",
            "space": 13
        }, {
            "name": "Vermilion Gym",
            "space": 19
        }, {
            "name": "Celadon Gym",
            "space": 32
        }, {
            "name": "Saffron Gym",
            "space": 43
        }, {
            "name": "Fuchsia Gym",
            "space": 52
        }, {
            "name": "Cinnabar Gym",
            "space": 58
        }, {
            "name": "Viridian Gym",
            "space": 63
        }, {
            "name": "Legendary Birds",
            "space": 68
        }, {
            "name": "The Elite Four",
            "space": 69
        }, {
            "name": "Champion Gary",
            "space": 70
        }, {
            "name": "POKEMON MASTER!",
            "space": 71
        }],
    "strong": {
        "squirtle": "charmander",
        "charmander": "bulbasaur",
        "bulbasaur": "squirtle",
        "pikachu": "squirtle"
    },
    "token": {
        "squirtle": "#00BFFF",
        "charmander": "#FF8C00",
        "bulbasaur": "#32CD32",
        "pikachu": "#FFD700"
    },
    "maxPlayers": 9,
    "gameStart": false
};


//Startup
for (i = 0; i < hard.maxPlayers; i++) {
    let row = document.getElementById('formTable').appendChild(document.createElement("tr"))
    let playerInput = row.appendChild(document.createElement("td"))
    let innerInput = playerInput.appendChild(document.createElement("input"))
    innerInput.type = "text"
    innerInput.classList.add("pname")
    innerInput.id = 'player_' + i
    innerInput.name = 'player_' + i

    let starterChoice = row.appendChild(document.createElement("select"))
    starterChoice.classList.add("pstarter")
    starterChoice.id = 'starter_' + i
    starterChoice.name = 'starter_' + i
    starterChoice.appendChild(document.createElement("option"))

    let squirtle = starterChoice.appendChild(document.createElement("option"))
    squirtle.value = "squirtle"
    squirtle.textContent = "Squirtle"

    let charmander = starterChoice.appendChild(document.createElement("option"))
    charmander.value = "charmander"
    charmander.textContent = "Charmander"

    let bulbasaur = starterChoice.appendChild(document.createElement("option"))
    bulbasaur.value = "bulbasaur"
    bulbasaur.textContent = "Bulbasaur"

    /*        '<tr>'+
                '<td><input type="text" class="pname" id="player_'+i+'" name="player_'+i+'"></input></td>'+
                '<td><select class="pstarter" id="starter_'+i+'" name="starter_'+i+'">'+
                    '<option></option>'+
                    '<option value="squirtle">Squirtle</option>'+
                    '<option value="charmander">Charmander</option>'+
                    '<option value="bulbasaur">Bulbasaur</option>'+
                '</select></td>'+
            '</tr>'*/
}
impress().goto(0);
var json = {
    players: [],
    selectedPlayer: 0
};
var spaceCount = document.getElementsByClassName('.space').length;
var preSpaceCount = 3;
document.getElementById('menu').style.display = 'none';

function onPlay(event) {
    var count = 0;
    for (i = 0; i < hard.maxPlayers; i++) {
        let currentPlayer, currentStarter;
        if ((currentPlayer = document.getElementById('player_' + i).value.trim()) !== "") {
            if ((currentStarter = document.getElementById('starter_' + i).value.trim()) !== "") {
                json.players[count] = {};
                json.players[count].name = currentPlayer;
                json.players[count].token = currentStarter;
                json.players[count].space = 0;
                count++;
            } else {
                alert("You must select a starter Pokemon for " + currentPlayer);
                return false;
            }
        }
    }
    document.getElementById('start').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
    playerName(0);
    impress().goto(2);
    for (i = 0; i < json.players.length; i++) {
        placeToken(i, i);
    }
    hard.gameStart = true;
    return false;
}


//Functions
function nextHardStop(num) {
    var cspace = parseInt(json.players[num].space, 10);
    for (i = 0; i < hard.stop.length; i++) {
        var hardStop = parseInt(hard.stop[i].space, 10);
        if (cspace >= hardStop && cspace < parseInt(hard.stop[i + 1].space, 10)) {
            console.log(parseInt(hard.stop[i + 1].space, 10));
            return parseInt(hard.stop[i + 1].space, 10);
        }
    }
    return 71;
}

function d6() {
    return 1 + Math.floor(Math.random() * 6);
}

function roll() {
    for (i = 1; i < 10; i++) {
        setTimeout(function () {
            document.getElementById('move').value = d6();
        }, (i * 50));
    }
    echo("");
}

function checkSpecial(num) {
    switch (json.players[num].space) {
        case 4:
            json.players[num].token = "pikachu";
            setTimeout(function () {
                placeToken(num, battle(json.selectedPlayer, json.players[json.selectedPlayer].space).length);
            }, 1500);
            break;
        case 11: // Abra 1
            go(28)
            break;
        case 28:
            go(11)
            break;
        case 71:
            alert("Game Over!\n" + json.players[num].name + " wins!");
            break;
    }
}

function battle(pl, sp) {
    var count = 0;
    var trainers = [];
    for (i = 0; i < json.players.length; i++) {
        if (json.players[i].space === sp && sp !== 0 && pl !== i) {
            trainers[count] = i;
            count++;
        }
    }
    if (count > 0) {
        return trainers;
    } else {
        return [];
    }
}

function go(space) {
    if (document.getElementById("move").value.trim() !== "") {
        if (!space) {
            let move = parseInt(document.getElementById("move").value, 10);
            let currentSpace = parseInt(json.players[json.selectedPlayer].space, 10);
            let thisHardStop = nextHardStop(json.selectedPlayer);
            if ((currentSpace + move) >= thisHardStop) {
                json.players[json.selectedPlayer].space = thisHardStop;
            } else {
                if ((currentSpace + move) < 0) {
                    json.players[json.selectedPlayer].space = 0;
                } else {
                    json.players[json.selectedPlayer].space = currentSpace + move;
                }

            }
        } else
            json.players[json.selectedPlayer].space = space
        placeToken(json.selectedPlayer, battle(json.selectedPlayer, json.players[json.selectedPlayer].space).length);
        playerName(json.selectedPlayer);
        if (!space) // Don't infinite loop on abra
            checkSpecial(json.selectedPlayer);
        playerName(json.selectedPlayer);
        if (battle(json.selectedPlayer, json.players[json.selectedPlayer].space).length > 0) {
            echo('Battle!');
            setTimeout(function() {echo('')}, 3000)
        }
        document.getElementById('move').textContent = '';
    }
}

function echo(out) {
    document.getElementById('console').innerHTML = out;
}

function playerName(num) {
    document.getElementById('selectedPlayerName').innerHTML = json.players[num].name;
    impress().goto(parseInt(json.players[num].space, 10) + preSpaceCount);
}

function placeToken(num, pos) {
    let previousToken = document.getElementById('token_' + num)
    if (previousToken)
        previousToken.remove()

    if (pos === 3 || pos === 6) {
        let space = document.getElementById('s' + json.players[num].space)
        if (space)
            space.appendChild(document.createElement('br'));
    }
    let tokenDiv = document.getElementById('s' + json.players[num].space).appendChild(
        document.createElement('div'))
    tokenDiv.id = 'token_' + num
    tokenDiv.classList.add("token")
    tokenDiv.appendChild(document.createElement('span')).textContent = json.players[num].name
    tokenDiv.style.background = hard.token[json.players[num].token];
}

function selectNextPlayer(shift) {
    let playerNum = ((json.selectedPlayer + shift) % json.players.length);
    if (playerNum < 0) {
        playerNum = json.players.length + playerNum;
    }
    playerName(playerNum);
    json.selectedPlayer = playerNum;
}

document.addEventListener('keydown', function (e) {
    //81=q 87=w e=69 r=82 a=65 s=83 d=68
    if (hard.gameStart === true) {
        switch (e.keyCode) {
            case 65: //a=left
                selectNextPlayer(-1);
                break;
            case 68: //d=right
                selectNextPlayer(1);
                break;
            case 81: //q=overview
                impress().goto(0);
                break;
            case 69: //e=Roll
                roll();
                break;
            case 83: //s=Show Current Player
                playerName(json.selectedPlayer)
                break;
            case 87: //w=go
                go();
                break;
            default:
        }
    }
});

