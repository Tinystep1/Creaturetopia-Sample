//Info to code into canvas

//Sats
var Magic
var Strength
var Endurance
var Speed
var Agility
var Intelligence
var Friendliness
//Automatically decrese hygine stat by 1 every 2 mins
var Hygine = {
    int max(100);
}

//How items affetc stats
var BodyWash = {
    "Hygine": (+20-35);
    OR
    "Agility": (+5-7);
}
var ShineSpray = {
    "Hygine": (+30-41);
    OR
    "Friendliness": (+14-15);
}

//Only one collar can be equipped at a time. Euipped collar's button reads "Uneqip". All other collars' buttons read "Equip".
var CollarOfMagic = {
    "Magic": (+56);
}
var CollarOfStrength = {
    "Strength": (+56);
}
var CollarOfEndurance = {
    "Endurance": (+56);
}
var CollarOfSpeed = {
    "Speed": (+56);
}
var CollarOfAgility = {
    "Agility": (+56);
}
var CollarOfIntellingence = {
    "Intelligence": (+56);
}

//Only one leash can be equipped at a time. Euipped leash's button reads "Uneqip". All other leashs' buttons read "Equip".
var LeashOfMagic = {
    "Magic": (+42);
}
var LeashOfStrength = {
    "Strength": (+42);
}
var LeashOfEndurance = {
    "Endurance": (+42);
}
var LeashOfSpeed = {
    "Speed": (+42);
}
var LeashOfAgility = {
    "Agility": (+42);
}
var LeashOfIntellingence = {
    "Intelligence": (+42);
}