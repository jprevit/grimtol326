// let goblinName = 'Gilbert'
// let goblinHP = 11
// let goblinAP = 3
// let goblinReward = 2

let monsterImgElm = document.getElementById('monster-picture')
let monsterStatsElm = document.getElementById('monster-stats')

let monster = {
    name: 'Gilbert',
    hitPoints: 4,
    attackPower: 3,
    reward: 2,
    picture: 'assets/Monsters/Goblin.png'
}

// let sillyList = [
//     12,
//     'banana',
//     { name: 'Sir Jelly', hitPoints: 15, attackPower: 8, reward: 32, }

// ]

let monsterList = [
    {
        name: 'Roger',
        hitPoints: 8,
        attackPower: 5,
        reward: 12,
        picture: 'assets/Monsters/Orc.png',
    },
    {
        name: 'Sir Jelly',
        hitPoints: 15,
        attackPower: 8,
        reward: 32,
        picture: 'assets/Monsters/Slime.png'
    },
]

function squashMonster() {
    monster.hitPoints -= 1
    console.log(`${monster.name} has ${monster.hitPoints} remaining`);
    if (monster.hitPoints < 1) {
        swapMonster()

    }
    drawMonster()
}

function swapMonster() {
    let nextMonster = monsterList.shift()

    if (!nextMonster) {
        window.alert('You win, the dungeon is empty! You have devastated an entire ecosystem!')
    } else {
        monster = nextMonster
    }

}

function drawMonster() {
    monsterImgElm.setAttribute('src', `${monster.picture}`)
    monsterStatsElm.innerText = `${monster.name} | ${monster.hitPoints}`
}

drawMonster()