let spaces = {
    palletTown: 0,
    rattata: 1,
    pidgey: 2,
    caterpie: 3,
    pikachu: 4,
    beedrill: 5,
    pewterGym: 6,
    geodude: 6,
    onix: 6,
    nidoran: 7,
    zubat: 8,
    clefairy: 9,
    jigglypuff: 10,
    abra1: 11,
    gary1: 12,
    squirtle: 12,
    charmander: 12,
    bulbasaur: 12,
    ceruleanGym: 13,
    staryu: 13,
    starmie: 13,
    slowpoke: 14,
    bellsprout: 15,
    meowth: 16,
    diglett: 17,
    sSAnne: 18,
    vermillionGym: 19,
    raichu: 19,
    bicycle: 20,
    magikarp: 21,
    sandshrew: 22,
    pokemonTower: 23,
    channeler: 24,
    haunter: 25,
    cubone: 26,
    silphScope: 27,
    abra2: 28,
    snorlax: 29,
    gary2: 30,
    ivysaur: 30,
    charmeleon: 30,
    wartortle: 30,
    eevee: 31,
    jolteon: 31,
    vaporeon: 31,
    flareon: 31,
    caledonGym: 32,
    weepinbell: 32,
    gloom: 32,
    tangela: 32,
    psyduck: 33,
    evolution: 34,
    porygon: 35,
    silphCo: 36,
    scientist: 37,
    manemite: 37,
    magneton: 37,
    lapras: 38,
    teamRocket: 39,
    giovanni: 40,
    rareCandy: 41,
    gary3: 42,
    saffronGym: 43,
    alakazam: 43,
    hitmon: 44,
    hitmonlee: 44,
    hitmonchamp: 44,
    krabby: 45,
    ditto: 46,
    doduo: 47,
    safariZone: 48,
    dratini: 49,
    tauros: 50,
    chansey: 51,
    fuchsiaGym: 52,
    venonat: 52,
    venomoth: 52,
    electrode: 53,
    electabuzz: 54,
    poliwag: 55,
    seaking: 56,
    missingno: 57,
    cinnabarGym: 58,
    koffing: 59,
    fossilPokemon: 60,
    kabuto: 60,
    kabutops: 60,
    omanyte: 60,
    omastar: 60,
    aerodactyl: 60,
    pokeball: 61,
    persian: 62,
    viridianGym: 63,
    nidoqueen: 63,
    nidoking: 63,
    fearow: 64,
    graveler: 65,
    gyrados: 66,
    dragonite: 67,
    articuno: 68,
    zapdos: 68,
    moltres: 68,
    eliteFour: 69,
    gary4: 70,
    blastoise: 70,
    charizard: 70,
    venusaur: 70,
    mewtwo: 71,
    pokemonMaster: 71
}

let pokemonIds = {
    missingno: 0,
    bulbasaur: 1,
    ivysaur: 2,
    venusaur: 3,
    charmander: 4,
    charmeleon: 5,
    charizard: 6,
    squirtle: 7,
    wartortle: 8,
    blastoise: 9,
    caterpie: 10,
    metapod: 11,
    butterfree: 12,
    weedle: 13,
    kakuna: 14,
    beedrill: 15,
    pidgey: 16,
    pidgeotto: 17,
    pidgeot: 18,
    rattata: 19,
    raticate: 20,
    spearow: 21,
    fearow: 22,
    ekans: 23,
    arbok: 24,
    pikachu: 25,
    raichu: 26,
    sandshrew: 27,
    sandslash: 28,
    nidoranM: 29,
    nidorina: 30,
    nidoqueen: 31,
    nidoranF: 32,
    nidorino: 33,
    nidoking: 34,
    clefairy: 35,
    clefable: 36,
    vulpix: 37,
    ninetales: 38,
    jigglypuff: 39,
    wigglytuff: 40,
    zubat: 41,
    golbat: 42,
    oddish: 43,
    gloom: 44,
    vileplume: 45,
    paras: 46,
    parasect: 47,
    venonat: 48,
    venomoth: 49,
    diglett: 50,
    dugtrio: 51,
    meowth: 52,
    persian: 53,
    psyduck: 54,
    golduck: 55,
    mankey: 56,
    primeape: 57,
    growlithe: 58,
    arcanine: 59,
    poliwag: 60,
    poliwhirl: 61,
    poliwrath: 62,
    abra: 63,
    kadabra: 64,
    alakazam: 65,
    machop: 66,
    machoke: 67,
    machamp: 68,
    bellsprout: 69,
    weepinbell: 70,
    victreebel: 71,
    tentacool: 72,
    tentacruel: 73,
    geodude: 74,
    graveler: 75,
    golem: 76,
    ponyta: 77,
    rapidash: 78,
    slowpoke: 79,
    slowbro: 80,
    magnemite: 81,
    magneton: 82,
    farfetch: 83,
    doduo: 84,
    dodrio: 85,
    seel: 86,
    dewgong: 87,
    grimer: 88,
    muk: 89,
    shellder: 90,
    cloyster: 91,
    gastly: 92,
    haunter: 93,
    gengar: 94,
    onix: 95,
    drowzee: 96,
    hypno: 97,
    krabby: 98,
    kingler: 99,
    voltorb: 100,
    electrode: 101,
    exeggcute: 102,
    exeggutor: 103,
    cubone: 104,
    marowak: 105,
    hitmonlee: 106,
    hitmonchan: 107,
    lickitung: 108,
    koffing: 109,
    weezing: 110,
    rhyhorn: 111,
    rhydon: 112,
    chansey: 113,
    tangela: 114,
    kangaskhan: 115,
    horsea: 116,
    seadra: 117,
    goldeen: 118,
    seaking: 119,
    staryu: 120,
    starmie: 121,
    mr: 122,
    scyther: 123,
    jynx: 124,
    electabuzz: 125,
    magmar: 126,
    pinsir: 127,
    tauros: 128,
    magikarp: 129,
    gyarados: 130,
    lapras: 131,
    ditto: 132,
    eevee: 133,
    vaporeon: 134,
    jolteon: 135,
    flareon: 136,
    porygon: 137,
    omanyte: 138,
    omastar: 139,
    kabuto: 140,
    kabutops: 141,
    aerodactyl: 142,
    snorlax: 143,
    articuno: 144,
    zapdos: 145,
    moltres: 146,
    dratini: 147,
    dragonair: 148,
    dragonite: 149,
    mewtwo: 150,
    mew: 151
}


let spaceToId = {}
for (let k in spaces) {
    if (k in pokemonIds) {
        if (spaces[k] in spaceToId) {
            if (!Array.isArray(spaceToId[spaces[k]])) {
                spaceToId[spaces[k]] = [spaceToId[spaces[k]], pokemonIds[k]]
            } else {
                spaceToId[spaces[k]].push(pokemonIds[k])
            }
        } else {
            spaceToId[spaces[k]] = pokemonIds[k]
        }
    }
}
spaceToId[spaces.nidoran] = [pokemonIds.nidoranM, pokemonIds.nidoranF]
spaceToId[spaces.missingno] = pokemonIds.nidoranF // This isn't _quite_ right, but it's close enough.
spaceToId[spaces.abra1] = pokemonIds.abra
spaceToId[spaces.abra2] = pokemonIds.abra


let hard = {
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
for (let i = 0; i < hard.maxPlayers; i++) {
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
}
impress().goto(0);
let json = {
    players: [],
    selectedPlayer: 0,
    caterpiePlayer: null
};
let preSpaceCount = 3;
document.getElementById('menu').style.display = 'none';

function onPlay() {
    let count = 0;
    for (let i = 0; i < hard.maxPlayers; i++) {
        let currentPlayer, currentStarter;
        if ((currentPlayer = document.getElementById('player_' + i).value.trim()) !== "") {
            if ((currentStarter = document.getElementById('starter_' + i).value.trim()) !== "") {
                json.players[count] = {};
                json.players[count].name = currentPlayer;
                json.players[count].token = currentStarter;
                json.players[count].space = 0;
                json.players[count].lostTurns = 0;
                json.players[count].doubleSpeed = false;
                json.players[count].tags = new Set();
                let tagLabel = document.getElementById("tags").appendChild(document.createElement("div"))
                tagLabel.textContent = currentPlayer + ":"
                let tags = json.players[count].tags
                json.players[count].tags.add = function (val) {
                    if (!tags.has(val)) {
                        let tag = tagLabel.appendChild(document.createElement("div"))
                        // noinspection JSValidateTypes
                        tag.textContent = val
                        // noinspection JSUnresolvedVariable
                        tags.__proto__.add.call(tags, val)
                    }
                }
                json.players[count].tags.delete = function (val) {
                    if (tags.has(val)) {
                        for (let children = tagLabel.childElementCount - 1; children >= 0; children--)
                            if (tagLabel.children[children].textContent === val) {
                                tagLabel.removeChild(tagLabel.children[children])
                                break
                            }
                        // noinspection JSUnresolvedVariable
                        tags.__proto__.delete.call(tags, val)
                    }
                }
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
    for (let i = 0; i < json.players.length; i++) {
        placeToken(i, i);
    }
    hard.gameStart = true;
    return false;
}


//Functions
function nextHardStop(num) {
    let cspace = parseInt(json.players[num].space, 10);
    for (let i = 0; i < hard.stop.length; i++) {
        let hardStop = parseInt(hard.stop[i].space, 10);
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

function roll(offsetTime) {
    if (!offsetTime)
        offsetTime = 0
    for (let i = 1; i < 10; i++) {
        setTimeout(function () {
            document.getElementById('move').value = d6();
        }, (offsetTime + i * 50));
    }
    echo("");
}

let cry = new Audio()
let criesCheckbox = document.getElementById("cries")

function checkSpecial(num) {
    // Play cries
    if (criesCheckbox.checked) {
        let space = json.players[json.selectedPlayer].space
        if (space === spaces.gary3) // Workaround since both spaces have the same exact pokemon on them
            space = spaces.gary2
        let pokemonOnSpace = spaceToId[space]
        if (typeof pokemonOnSpace === "number") {
            cry.src = 'https://pokemoncries.com/cries-old/' + pokemonOnSpace + '.mp3'
            cry.oncanplaythrough = function () {
                // noinspection JSIgnoredPromiseFromCall
                cry.play()
            }
        } else if (pokemonOnSpace !== undefined) {
            let playCurrent = function (index) {
                if (index < pokemonOnSpace.length) {
                    console.log("Playing cry for " + pokemonOnSpace)
                    cry.src = 'https://pokemoncries.com/cries-old/' + pokemonOnSpace[index] + '.mp3'
                    cry.oncanplaythrough = function () {
                        // noinspection JSIgnoredPromiseFromCall
                        cry.play()
                        cry.onended = function () {
                            playCurrent(index + 1)
                        }
                    }
                }
            }
            playCurrent(0)
        }
    }

    let currentPlayer = json.players[num]
    let modal = document.getElementById("modal")
    let removeAll = function () {
        echo("")
        for (let child = modal.childElementCount - 1; child >= 0; child--)
            if (modal.children[child].id !== "console")
                modal.removeChild(modal.children[child])
    }
    // noinspection FallThroughInSwitchStatementJS
    switch (json.players[num].space) {
        case spaces.pidgey:
        case spaces.jigglypuff:
        case spaces.rareCandy:
            for (let player = 0; player < json.players.length; player++)
                if (player !== json.selectedPlayer)
                    json.players[player].lostTurns++
            break;
        case spaces.sSAnne:
            roll()
            setTimeout(function () {
                let numTurns = document.getElementById('move').value
                echo('You lose ' + numTurns + ' turns.');
                currentPlayer.lostTurns += parseInt(numTurns, 10)
                currentPlayer.tags.add("Fucked")
            }, 3000);
            roll(3000)
            setTimeout(function () {
                let numTurns = document.getElementById('move').value
                echo('You drink ' + numTurns + ' drinks.');
            }, 6000);
            setTimeout(function () {
                echo("")
            }, 9000)
            break;
        case spaces.channeler:
            currentPlayer.tags.add("Beer Bitch")
        case spaces.pokemonTower:
        case spaces.haunter:
        case spaces.cubone:
        case spaces.silphScope:
            currentPlayer.tags.add("Silent")
            break;
        case spaces.bicycle:
            currentPlayer.doubleSpeed = true
            break;
        case spaces.magikarp:
            currentPlayer.tags.add("Karpal Tunnel")
            break;
        case spaces.sandshrew:
            currentPlayer.tags.add("Non-dominant")
            break;
        case spaces.zubat:
            currentPlayer.tags.add("Batty")
            break;
        case spaces.caterpie:
            json.caterpiePlayer = json.selectedPlayer
            for (let player = 0; player < json.players.length; player++)
                if (player !== json.caterpiePlayer)
                    json.players[player].tags.add("Slow")
            break;
        case spaces.psyduck:
        case spaces.slowpoke:
            if (currentPlayer.tags.has("Poser")) {
                currentPlayer.tags.delete("Poser")
                currentPlayer.tags.add("Double Poser")
            } else
                currentPlayer.tags.add("Poser")
            break;
        case spaces.caledonGym:
            roll()
            setTimeout(function () {
                let numTurns = document.getElementById('move').value
                if (parseInt(numTurns, 10) <= 3)
                    currentPlayer.lostTurns++
            }, 600);
            break;
        case spaces.evolution:
            let evolveBtn = modal.appendChild(document.createElement("button"))
            evolveBtn.textContent = "Evolve"
            evolveBtn.id = "modalbtn1"
            evolveBtn.onclick = function () {
                removeAll();
                json.players[json.selectedPlayer].tags.add("Evolving")
            }
            let extraTurnBtn = modal.appendChild(document.createElement("button"))
            extraTurnBtn.textContent = "Extra Turn"
            extraTurnBtn.id = "modalbtn2"
            extraTurnBtn.onclick = function () {
                removeAll()
                for (let player = 0; player < json.players.length; player++)
                    if (player !== json.selectedPlayer)
                        json.players[player].lostTurns++
            }

            break;
        case spaces.porygon:
            currentPlayer.tags.add("No u * 3")
            break;
        case spaces.lapras:
            echo("Who should be confused?")
            for (let player = 0; player < json.players.length; player++) {
                let currentButton = modal.appendChild(document.createElement("button"))
                currentButton.textContent = json.players[player].name
                currentButton.onclick = function () {
                    for (player = 0; player < json.players.length; player++)
                        if (currentButton.textContent === json.players[player].name) {
                            json.players[player].tags.add("Confused")
                            break
                        }
                    removeAll()
                }
            }
        case spaces.giovanni:
        case spaces.silphCo:
        case spaces.scientist:
        case spaces.teamRocket:
            currentPlayer.tags.add("Silph Co")
            break;
        case spaces.saffronGym: {
            let currentButton = modal.appendChild(document.createElement("button"))
            echo("Did you guess the right number?")
            currentButton.textContent = "Yes"
            currentButton.onclick = function () {
                removeAll()
                for (let player = 0; player < json.players.length; player++)
                    if (player !== json.selectedPlayer)
                        json.players[player].lostTurns++
            }
            currentButton = modal.appendChild(document.createElement("button"))
            currentButton.textContent = "No"
            currentButton.onclick = removeAll
        }
            break;
        case spaces.hitmon:
            echo("Who are you challenging?")
        {
            let chosenPlayer;
            for (let player = 0; player < json.players.length; player++) {
                let currentButton = modal.appendChild(document.createElement("button"))
                currentButton.textContent = json.players[player].name
                currentButton.onclick = function () {
                    for (player = 0; player < json.players.length; player++)
                        if (currentButton.textContent === json.players[player].name) {
                            chosenPlayer = currentButton.textContent
                            break
                        }
                    removeAll()
                    echo("Who won?")
                    let winBtn = modal.appendChild(document.createElement("button"))
                    winBtn.textContent = currentPlayer.name
                    winBtn.onclick = function () {
                        for (let player = 0; player < json.players.length; player++) {
                            if (player !== json.selectedPlayer) {
                                if (json.players[player].name === chosenPlayer)
                                    json.players[player].lostTurns++
                                json.players[player].lostTurns++
                            }
                        }
                        removeAll()
                    }
                    let loseBtn = modal.appendChild(document.createElement("button"))
                    loseBtn.textContent = chosenPlayer
                    loseBtn.onclick = function () {
                        for (let player = 0; player < json.players.length; player++) {
                            if (json.players[player].name !== chosenPlayer) {
                                if (player === json.selectedPlayer)
                                    json.players[player].lostTurns++
                                json.players[player].lostTurns++
                            }
                        }
                        removeAll()
                    }
                }
            }
        }
            break;
        case spaces.electabuzz:
            currentPlayer.lostTurns++
            break;
        case spaces.missingno:
            currentPlayer.tags.add("Glitched")
            roll()
            setTimeout(function () {
                let val = parseInt(document.getElementById('move').value, 10)
                if (val >= 5)
                    currentPlayer.tags.delete("Glitched")
            }, 3000);
            roll(3000)
            setTimeout(function () {
                let val = parseInt(document.getElementById('move').value, 10)
                if (val >= 5)
                    currentPlayer.tags.delete("Glitched")
            }, 6000);
            roll(6000)
            setTimeout(function () {
                let val = parseInt(document.getElementById('move').value, 10)
                if (val >= 5)
                    currentPlayer.tags.delete("Glitched")
                if (currentPlayer.tags.has("Glitched"))
                    go(spaces.palletTown)
            }, 9000);
            break;
        case spaces.dragonite:
            currentPlayer.lostTurns++
            break;
        case spaces.vermillionGym:
            roll();
            setTimeout(function () {
                let val = parseInt(document.getElementById('move').value, 10)
                if (val % 2 === 0)
                    currentPlayer.lostTurns++
            })
            break;
        case spaces.pikachu:
            currentPlayer.token = "pikachu";
            setTimeout(function () {
                placeToken(num, battle(json.selectedPlayer, currentPlayer.space).length);
            }, 1500);
            break;
        case spaces.graveler:
            currentPlayer.lostTurns += 2
            break;
        case spaces.abra1:
            go(spaces.abra2)
            break;
        case spaces.abra2:
            go(spaces.abra1)
            break;
        case spaces.pokemonMaster:
            alert("Game Over!\n" + json.players[num].name + " wins!");
            break;
    }
}

function battle(pl, sp) {
    let count = 0;
    let trainers = [];
    for (let i = 0; i < json.players.length; i++) {
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
        if (json.caterpiePlayer === json.selectedPlayer) {
            json.caterpiePlayer = null
            for (let player = 0; player < json.players.length; player++)
                json.players[player].tags.delete("Slow")
        }
        if (space === undefined) {
            let move = parseInt(document.getElementById("move").value, 10);
            // Special space logic that doesn't require the space number
            if (json.caterpiePlayer)
                move = Math.ceil(move / 2)
            else if (json.players[json.selectedPlayer].doubleSpeed) {
                json.players[json.selectedPlayer].doubleSpeed = false
                move *= 2
            } else if (json.players[json.selectedPlayer].tags.has("Confused")) {
                if (move <= 3)
                    json.players[json.selectedPlayer].tags.delete("Confused")
                else
                    return
            }

            let currentSpace = parseInt(json.players[json.selectedPlayer].space, 10);

            // Special space logic that requires the space number
            if (currentSpace === spaces.zubat && json.players[json.selectedPlayer].tags.has("Batty")) {
                json.players[json.selectedPlayer].tags.delete("Batty")
                if (move <= 2)
                    return
            }

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
        // Remove any region or space-specific tags
        [
            "Silent",
            "Beer Bitch",
            "No u * 3",
            "Silph Co"
        ].forEach(function (a) {
            json.players[json.selectedPlayer].tags.delete(a)
        })
        if (!space) // Don't infinite loop on abra
            checkSpecial(json.selectedPlayer);
        playerName(json.selectedPlayer);
        if (battle(json.selectedPlayer, json.players[json.selectedPlayer].space).length > 0) {
            echo('Battle!');
            setTimeout(function () {
                echo('')
            }, 3000)
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

function nextTurn() {
    selectNextPlayer(1)
    while (json.players[json.selectedPlayer].lostTurns > 0) {
        json.players[json.selectedPlayer].lostTurns--
        selectNextPlayer(1)
    }
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

