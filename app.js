// let goblinName = 'Gilbert'
// let goblinHP = 11
// let goblinAP = 3
// let goblinReward = 2

let heroImgElm = document.getElementById('hero-img')
let heroNameElm = document.getElementById('hero-name')
let heroStatsElm = document.getElementById('hero-stats')
let monsterImgElm = document.getElementById('monster-picture')
let monsterStatsElm = document.getElementById('monster-stats')

let hero = {
    name: 'Geophrey',
    hitPoints: 10,
    attackPower: 2,
    gold: 0,
    picture: 'assets/Players/HeroPortrait1.png',
    bootSize: 1
}

let monster = {
    name: 'Gilbert',
    hitPoints: 4,
    attackPower: 1,
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
        attackPower: 3,
        reward: 12,
        picture: 'assets/Monsters/Orc.png',
    },
    {
        name: 'Robert',
        hitPoints: 9,
        attackPower: 4,
        reward: 0,
        picture: 'assets/Monsters/AnimatedArmor.png',
    },
    {
        name: 'Xanathar',
        hitPoints: 12,
        attackPower: 10,
        reward: 50,
        picture: 'assets/Monsters/Beholder.png',
    },
    {
        name: 'Tim',
        hitPoints: 13,
        attackPower: 13,
        reward: 13,
        picture: 'assets/Monsters/DarkWizard.png',
    },
    {
        name: 'Sir Jelly',
        hitPoints: 15,
        attackPower: 5,
        reward: 32,
        picture: 'assets/Monsters/Slime.png'
    },
]

function squashMonster() {
    monster.hitPoints -= hero.attackPower
    console.log(`${monster.name} has ${monster.hitPoints} remaining`);
    if (monster.hitPoints < 1) {
        console.log(hero.gold);
        hero.gold += monster.reward
        console.log(hero.gold);
        swapMonster()
    } else {
        attackHero()
    }
    drawMonster()
    drawHero()
}

function attackHero() {
    hero.hitPoints -= Math.ceil(Math.random() * monster.attackPower)
}

function healHero() {
    if (hero.gold < 1) {
        window.alert('You broke homez!')
        return
    }
    hero.hitPoints += 5
    hero.gold -= 1
    drawHero()
}

function buyBoots() {
    let bootCost = hero.bootSize * 30

    if (hero.gold < bootCost) {
        window.alert('No boot for you!')
        return
    }
    hero.attackPower += 5
    hero.gold -= bootCost
    hero.bootSize++
    drawHero()
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

function drawBills() {

}

function drawHero() {
    heroImgElm.setAttribute('src', `${hero.picture}`)
    heroNameElm.innerText = hero.name
    heroStatsElm.innerText = `${hero.hitPoints}💗| ${hero.attackPower}🗡️| ${hero.gold}🪙`
}

drawHero()
drawMonster()