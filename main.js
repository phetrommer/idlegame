// population
var currentpop = {
  total: 0,
};
var child = {
  total: 0,
  available: 0,
  rate: 0.10,
  job: {
    gatherer: 0,
    woodcutter: 0,
    miner: 0,
  }
};
var students = {
  total: 0,
};
var adults = {
  total: 0,
  available: 0,
  rate: 0.25,
  job: {
    gatherer: 0,
    woodcutter: 0,
    miner: 0,
  }
};
var engineer = {
  total: 0,
  available: 0,
  rate: 0.45,
  job: {
    gatherer: 0,
    woodcutter: 0,
    miner: 0,
    smelter: 0,
  }
};
var maxpop = {
  total: 0,
};
var workers = {
  total: 0
};
var operator = {
  decrease: 'decrease',
  increase: 'increase',
};

// var discoveredResources = {
//   food: 1500,
//   wood: 1500,
//   stone: 1500,
// };

var smeltIngot = 0;
var researchUpgrade = 0;
// ages
var bronzeAge = {
  name: 'Bronze Age',
  total: 0,
  require: {
    food: 500,
    stone: 0,
    wood: 50,
    skin: 0,
    coal: 0,
    copperore: 0,
    copperingot: 0,
    silverore: 0,
    silveringot: 0,
    tent: 5,
    hut: 0,
    house: 0,
    furnace: 0,
    livestockpen: 1,
    mill: 0,
  }
};
// resources
var food = {
  name: 'Food',
  total: 0,
  multiplier: 1,
  specialchance: 10,
  seeds: 0,
};
var skin = {
  name: 'Skin',
  total: 0,
};
var wood = {
  name: 'Wood',
  total: 0,
  multiplier: 1,
  specialchance: 10,
};
var sap = {
  name: 'Sap',
  total: 0,
};
var stone = {
  name: 'Stone',
  total: 0,
  multiplier: 1,
  specialchance: 10,
};
var coal = {
  name: 'Coal',
  total: 0,
};
var copperore = {
  name: 'Copper Ore',
  total: 0,
};
var copperingot = {
  name: 'Copper Ingot',
  total: 0,
  time: 10,
  require: {
    copperore: 1,
    silverore: 0,
    coal: 1,
  }
};
var silverore = {
  name: 'Silver Ore',
  total: 0,
  multiplier: 1,
};
var silveringot = {
  name: 'Silver Ingot',
  total: 0,
  time: 15,
  require: {
    copperore: 0,
    silverore: 1,
    coal: 2,
  }
};
var goldore = {
  name: 'Gold Ore',
  total: 0,
  multiplier: 1,
};
var goldingot = {
  name: 'Gold Ingot',
  total: 0,
  multiplier: 1,
};
// upgrades
var pickaxe1 = {
  name: 'Improved Pickaxes I',
  total: 0,
  population: 0,
  time: 600,
  researched: 'no',
  require: {
    food: 0,
    stone: 0,
    wood: 50,
    skin: 0,
    coal: 0,
    copperore: 0,
    copperingot: 12,
    silverore: 0,
    silveringot: 0,
    goldore: 0,
    goldingot: 0,
  }
};
var axe1 = {
  name: 'Improved Axes I',
  total: 0,
  population: 0,
  time: 600,
  researched: 'no',
  require: {
    food: 0,
    stone: 0,
    wood: 50,
    skin: 0,
    coal: 0,
    copperore: 0,
    copperingot: 12,
    silverore: 0,
    silveringot: 0,
    goldore: 0,
    goldingot: 0,
  }
};
var farming1 = {
  name: 'Improved Farming I',
  total: 0,
  population: 0,
  time: 600,
  researched: 'no',
  require: {
    food: 0,
    stone: 0,
    wood: 50,
    skin: 0,
    coal: 0,
    copperore: 0,
    copperingot: 12,
    silverore: 0,
    silveringot: 0,
    goldore: 0,
    goldingot: 0,
  }
};
var clear1 = {
  name: 'Improved Clear I',
  total: 0,
  population: 0,
  time: 600,
  researched: 'no',
  require: {
    food: 0,
    stone: 0,
    wood: 50,
    skin: 0,
    coal: 0,
    copperore: 0,
    copperingot: 12,
    silverore: 0,
    silveringot: 0,
    goldore: 0,
    goldingot: 0,
  }
};
var clear2 = {
  name: 'Improved Clear II',
  total: 0,
  population: 0,
  time: 600,
  researched: 'no',
  require: {
    food: 0,
    stone: 0,
    wood: 50,
    skin: 0,
    coal: 0,
    copperore: 0,
    copperingot: 12,
    silverore: 0,
    silveringot: 0,
    goldore: 0,
    goldingot: 0,
  }
};
// buildings
var tent = {
  name: 'Tent',
  total: 0,
  building: true,
  population: 2,
  enabled: 0,
  require: {
    food: 0,
    stone: 0,
    wood: 2,
    skin: 2,
    coal: 0,
    copperore: 0,
    copperingot: 0,
    silverore: 0,
    silveringot: 0,
    goldore: 0,
    goldingot: 0,
  }
};
var hut = {
  name: 'Hut',
  total: 0,
  building: true,
  population: 5,
  enabled: 0,
  require: {
    food: 0,
    stone: 10,
    wood: 20,
    skin: 0,
    coal: 0,
    copperore: 0,
    copperingot: 0,
    silverore: 0,
    silveringot: 0,
    goldore: 0,
    goldingot: 0,
  }
};
var furnace = {
  name: 'Furnace',
  total: 0,
  building: true,
  population: 0,
  enabled: 0,
  storage: 0,
  limit: 10,
  fuel: {
    coal: 0,
  },
  require: {
    food: 0,
    stone: 50,
    wood: 10,
    skin: 0,
    coal: 0,
    copperore: 0,
    copperingot: 0,
    silverore: 0,
    silveringot: 0,
    goldore: 0,
    goldingot: 0,
  }
};
var livestockpen = {
  name: 'Livestock Pen',
  total: 0,
  building: true,
  population: 0,
  enabled: 0,
  require: {
    food: 0,
    stone: 50,
    wood: 150,
    skin: 0,
    coal: 0,
    copperore: 0,
    copperingot: 0,
    silverore: 0,
    silveringot: 0,
    goldore: 0,
    goldingot: 0,
  }
};
var mill = {
  name: 'Mill',
  total: 0,
  building: true,
  population: 0,
  enabled: 0,
  require: {
    food: 0,
    stone: 30,
    wood: 200,
    skin: 0,
    coal: 0,
    copperore: 0,
    copperingot: 0,
    silverore: 0,
    silveringot: 0,
    goldore: 0,
    goldingot: 0,
  }
};
var house = {
  name: 'House',
  total: 0,
  building: true,
  population: 10,
  enabled: 0,
  require: {
    food: 0,
    stone: 100,
    wood: 100,
    skin: 0,
    coal: 0,
    copperore: 0,
    copperingot: 0,
    silverore: 0,
    silveringot: 0,
    goldore: 0,
    goldingot: 0,
  }
};
// jobs
var woodcutters = {
  name: 'Woodcutters',
  total: 0,
  child: 0,
  adults: 0,
  engineer: 0,
};
var gatherers = {
  name: 'Gatherers',
  total: 0,
  child: 0,
  adults: 0,
  engineer: 0,
};
var miners = {
  name: 'Miners',
  total: 0,
  child: 0,
  adults: 0,
  engineer: 0,
};
var smelter = {
  name: 'Smelters',
  total: 0,
  engineer: 0,
};
// misc
var spawned = {
  total: 0,
  stone: 0,
  wood: 0,
  food: 0,
  silverore: 0,
  goldore: 0,
};
var powerUp = {
  spawned: 0,
  clear: {
    stone: 30,
    wood: 30,
    food: 30,
    silverore: 30,
    goldore: 30,    
  }
};
//---------------------------- CLICK EVENTS ----------------------------------
// function clickresource(material, number) {
//   material.total += number * material.multiplier;
//   var a = Math.floor(Math.random() * material.specialchance);
//   var b = Math.floor(Math.random() * material.specialchance * 3);
//   var c = Math.floor(Math.random() * material.specialchance * 4);
//   if (material == food) {
//     if (a == 0) {
//       skin.total += 1;
//     }
//   }

//   if (material == wood) {
//     if (a == 0) {
//       sap.total += 1;
//     }
//   }

//   if (material == stone) {
//     if (a == 0) {
//       coal.total += 1;
//     }
//     if (b == 0) {
//       copperore.total += 1;
//     }
//     if (c == 0) {
//       silverore.total += 1;
//     }
//   }
//   updateResourceTotals();
// }

//TODO: make you have to change tool to gather different resources, like pickaxe for ore and only ore. button or images for selections?
function clickResource(material, number) {
  material.total += number * material.multiplier;

  if (material == powerUp.clear) {
    for (i = 0; i < powerUp.clear.stone; i++) {
      jQuery(".stoneSpawn").eq(i).animate({width: "0px",height: "0px"}, 300, function () {
        $(this).remove();
        stone.total += (number * stone.multiplier);
        spawned.stone -= number;
      });
    }
    if (clear2.researched == 'yes') {
      for (i = 0; i < powerUp.clear.silverore; i++) {
        jQuery(".silveroreSpawn").eq(i).animate({width: "0px",height: "0px"}, 300, function () {
          $(this).remove();
          silverore.total += (number * silverore.multiplier);
          spawned.silverore -= number;
        });
      }
    }
    updateResourceTotals();
  }
}

// var workerCost = Math.floor(10 * Math.pow(1.1, currentpop.total));

//---------------------------- BUY EVENTS ----------------------------------

function createBuilding(building) {
  if (food.total >= building.require.food && stone.total >= building.require.stone && wood.total >= building.require.wood && skin.total >= building.require.skin && coal.total >= building.require.coal && copperore.total >= building.require.copperore && copperingot.total >= building.require.copperingot && silverore.total >= building.require.silverore && silveringot.total >= building.require.silveringot && goldore.total >= building.require.goldore && goldingot.total >= building.require.goldingot) {
    food.total -= building.require.food;
    stone.total -= building.require.stone;
    wood.total -= building.require.wood;
    coal.total -= building.require.coal;
    skin.total -= building.require.skin;
    copperore.total -= building.require.copperore;
    copperingot.total -= building.require.copperingot;
    silverore.total -= building.require.silverore;
    silveringot.total -= building.require.silveringot;
    goldore.total -= building.require.goldore;
    goldingot.total -= building.require.goldingot;
    building.total += 1;
    maxpop.total += building.population;
    gameLog('CONSTRUCT: ' + building.name + ' constructed!');
    updateResourceTotals();
    updateBuildingTotals();
    updateStatTotals();
    if (building == livestockpen) {

    }
    if (building == mill) {
      mill();
    }
  } else {
    gameLog('CONSTRUCT: Insufficient materials!');
  }
}
// ---------------------------- BUILDINGS -------------------------------------

function mill() {
  
}

//------------------------------ SMELTING -------------------------------------
function smelt(ingot, number) {
  if (engineer.job.smelter >= 1 && copperore.total >= ingot.require.copperore && silverore.total >= ingot.require.silverore && furnace.storage >= ingot.require.coal) {
    copperore.total -= ingot.require.copperore;
    silverore.total -= ingot.require.silverore;
    furnace.storage -= ingot.require.coal;
    furnace.fuel.coal -= ingot.require.coal;
    smeltIngot = ingot;
    updateResourceTotals();
    updateBuildingTotals();
    updateStatTotals();
    startSmeltBar();
  } else if (engineer.job.smelter == 0) {
    gameLog('FURNACE: No smelters!')
    return;
  }
  gameLog('FURNACE: Not enough materials!');
}

function furnaceMaterials(material, number) {
  if (material = coal) {
    if (coal.total > 0 && furnace.storage < furnace.limit) {
      coal.total -= number;
      furnace.fuel.coal += 1;
      furnace.storage += 1;
      updateResourceTotals();
      return;
    }
  }
  if (furnace.storage == furnace.limit) {
    gameLog('FURNACE: Not enough fuel storage! Upgrade storage.')
  }
  gameLog('FURNACE: Not enough ' + material.name + ('!'))
}

//TODO: fix the reduction of time for engineers / smelt time
function startSmeltBar() {
  disableSmeltButtons();
  var elem = document.getElementById('smeltBar');
  var width = 0;
  time = 0 + (smeltIngot.time / engineer.job.smelter);
  console.log(time);
  var id = setInterval(frame, time);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
      enableSmeltButtons();
      smeltIngot.total += 1;
      gameLog('FURNACE: ' + smeltIngot.name + ' smelted!');
      updateResourceTotals();
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}
//------------------------------ UPGRADES -------------------------------------
function upgrade(upgrade) {
  if (food.total >= upgrade.require.food && stone.total >= upgrade.require.stone && wood.total >= upgrade.require.wood && skin.total >= upgrade.require.skin && coal.total >= upgrade.require.coal && copperore.total >= upgrade.require.copperore && copperingot.total >= upgrade.require.copperingot && silverore.total >= upgrade.require.silverore && silveringot.total >= upgrade.require.silveringot && goldore.total >= upgrade.require.goldore && goldingot.total >= upgrade.require.goldingot) {
    researchUpgrade = upgrade;
    food.total -= upgrade.require.food;
    stone.total -= upgrade.require.stone;
    wood.total -= upgrade.require.wood;
    coal.total -= upgrade.require.coal;
    skin.total -= upgrade.require.skin;
    copperore.total -= upgrade.require.copperore;
    copperingot.total -= upgrade.require.copperingot;
    silverore.total -= upgrade.require.silverore;
    silveringot.total -= upgrade.require.silveringot;
    goldore.total -= upgrade.require.goldore;
    goldingot.total -= upgrade.require.goldingot
    upgrade.total += 1;
    maxpop.total += upgrade.population;
    startUpgradeBar();
    gameLog('UPGRADE: Starting research...');
    updateResourceTotals();
    updateBuildingTotals();
    updateStatTotals();
  } else {
    gameLog('UPGRADE: Insufficient materials!');
  }
}

function startUpgradeBar() {
  disableUpgradeButtons();
  var elem = document.getElementById('upgradeBar');
  var width = 0;
  var id = setInterval(frame, researchUpgrade.time);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
      enableUpgradeButtons();
      researchUpgrade.researched = 'yes';
      upgrades();
      gameLog('UPGRADE: ' + researchUpgrade.name + ' researched!');
      updateResourceTotals();
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

function upgrades() {
  if (researchUpgrade == pickaxe1) {
    stone.multiplier += 1;
    stone.specialchance -= 0.5;
  }
  if (researchUpgrade == axe1) {
    wood.multiplier += 1;
    wood.specialchance -= 0.5;
  }
  if (researchUpgrade == farming1) {
    food.multiplier += 1;
    food.specialchance -= 0.5;
  }
  if (researchUpgrade == clear1) {
    powerUp.clear.stone += 10;
  }
}

//--------------------------------- AGES -------------------------------------
// TODO: setup ages
function ageUp(age) {
  if (food.total >= age.require.food && stone.total >= age.require.stone && wood.total >= age.require.wood && skin.total >= age.require.skin && coal.total >= age.require.coal && copperore.total >= age.require.copperore && copperingot.total >= age.require.copperingot && silverore.total >= age.require.silverore && silveringot.total >= age.require.silveringot && tent.total >= age.require.tent && hut.total >= age.require.hut && house.total >= age.require.house && furnace.total >= age.require.furnace && livestockpen.total >= age.require.livestockpen && mill.total >= age.require.mill) {
    gameLog('Entering the ' + age.name + '...');
    updateStatTotals();
    if (age == bronzeAge) {
      food.total -= age.require.food;
      document.getElementById('hutBtn').disabled = false;
      document.getElementById('houseBtn').disabled = false;
      document.getElementById('furnaceBtn').disabled = false;
    }
  } else {
    gameLog('UPGRADE: Insufficient materials!');
  }
}

//---------------------------- WORKER EVENTS ----------------------------------
//FIXME: fix child > adults > engineer
// function graduation() {
//   if (students.total >= 1) {
//     var a = Math.floor(Math.random() * 30);
//     if (a == 0) {
//       students.total -= 1;
//       engineer.total += 1;
//       gameLog('EDUCATION: Student graduated!');
//       updateStatTotals();
//     }
//   }
// }

function populationControl() {
  if (child.total + students.total + adults.total + engineer.total > maxpop.total) {
    gameLog('WARNING: Not enough housing! Civilians will start to die if not enough housing is provided!');
  }
}

//TODO: display how many available workers, like not-working/currentpop
//TODO: REFACTOR ME - possibly need to re-write entire job system.
function incORdec(job, x, persontype) {
  if (job == gatherers) {
    if (persontype == child) {
      if (x == operator.increase && child.available >= 1 && child.total > 0) {
        child.job.gatherer += 1;
        job.child += 1;
        workers.total += 1;
        child.available -= 1;
      } else if (x == operator.decrease && child.job.gatherer > 0) {
        child.job.gatherer -= 1;
        job.child -= 1;
        workers.total -= 1;
        child.available += 1;
      }
    } else if (persontype == adults) {
      if (x == operator.increase && adults.available >= 1 && adults.total > 0) {
        adults.job.gatherer += 1;
        job.adults += 1;
        workers.total += 1;
        adults.available -= 1;
      } else if (x == operator.decrease && adults.job.gatherer > 0) {
        adults.job.gatherer -= 1;
        job.adults -= 1;
        workers.total -= 1;
        adults.available += 1;
      }
    } else if (persontype == engineer) {
      if (x == operator.increase && engineer.available >= 1 && engineer.total > 0) {
        engineer.job.gatherer += 1;
        job.engineer += 1;
        workers.total += 1;
        engineer.available -= 1;
      } else if (x == operator.decrease && engineer.job.gatherer > 0) {
        engineer.job.gatherer -= 1;
        job.engineer -= 1;
        workers.total -= 1;
        engineer.available += 1;
      }
    }
  }
  if (job == woodcutters) {
    if (persontype == child) {
      if (x == operator.increase && child.available >= 1 && child.total > 0) {
        child.job.woodcutter += 1;
        job.child += 1;
        workers.total += 1;
        child.available -= 1;
      } else if (x == operator.decrease && child.job.woodcutter > 0) {
        child.job.woodcutter -= 1;
        job.child -= 1;
        workers.total -= 1;
        child.available += 1;
      }
    } else if (persontype == adults) {
      if (x == operator.increase && adults.available >= 1 && adults.total > 0) {
        adults.job.woodcutter += 1;
        job.adults += 1;
        workers.total += 1;
        adults.available -= 1;
      } else if (x == operator.decrease && adults.job.woodcutter > 0) {
        adults.job.woodcutter -= 1;
        job.adults -= 1;
        workers.total -= 1;
        adults.available += 1;
      }
    } else if (persontype == engineer) {
      if (x == operator.increase && engineer.available >= 1 && engineer.total > 0) {
        engineer.job.woodcutter += 1;
        job.engineer += 1;
        workers.total += 1;
        engineer.available -= 1;
      } else if (x == operator.decrease && engineer.job.woodcutter > 0) {
        engineer.job.woodcutter -= 1;
        job.engineer -= 1;
        workers.total -= 1;
        engineer.available += 1;
      }
    }
  }
  if (job == miners) {
    if (persontype == child) {
      if (x == operator.increase && child.available >= 1 && child.total > 0) {
        child.job.miner += 1;
        job.child += 1;
        workers.total += 1;
        child.available -= 1;
      } else if (x == operator.decrease && child.job.miner > 0) {
        child.job.miner -= 1;
        job.child -= 1;
        workers.total -= 1;
        child.available += 1;
      }
    } else if (persontype == adults) {
      if (x == operator.increase && adults.available >= 1 && adults.total > 0) {
        adults.job.miner += 1;
        job.adults += 1;
        workers.total += 1;
        adults.available -= 1;
      } else if (x == operator.decrease && adults.job.miner > 0) {
        adults.job.miner -= 1;
        job.adults -= 1;
        workers.total -= 1;
        adults.available += 1;
      }
    } else if (persontype == engineer) {
      if (x == operator.increase && engineer.available >= 1 && engineer.total > 0) {
        engineer.job.miner += 1;
        job.engineer += 1;
        workers.total += 1;
        engineer.available -= 1;
      } else if (x == operator.decrease && engineer.job.miner > 0) {
        engineer.job.miner -= 1;
        job.engineer -= 1;
        workers.total -= 1;
        engineer.available += 1;
      }
    }
  }
  if (job == smelter) {
    if (persontype == engineer) {
      if (x == operator.increase && engineer.available >= 1 && engineer.total > 0) {
        engineer.job.smelter += 1;
        job.engineer += 1;
        workers.total += 1;
        engineer.available -= 1;
      } else if (x == operator.decrease && engineer.job.smelter > 0) {
        engineer.job.smelter -= 1;
        job.engineer -= 1;
        workers.total -= 1;
        engineer.available += 1;
      }
    }
  }
  updateStatTotals();
  updateWorkerTotals();
}

//----------------------- UPDATE FUNCTIONS ---------------------------

function updateTotals() {
  updateResourceTotals();
  updateBuildingTotals();
  updateStatTotals();
  updateWorkerTotals();
}

function refreshPopulation() {
  currentpop.total = child.total + adults.total + engineer.total + students.total;
}

function updateResourceTotals() {
  var gatherRounded = Number((gatherers.child * child.rate) + (gatherers.adults * adults.rate) + (gatherers.engineer * engineer.rate)).toFixed(2);
  var woodcutterRounded = Number((woodcutters.child * child.rate) + (woodcutters.adults * adults.rate) + (woodcutters.engineer * engineer.rate)).toFixed(2);
  var minerRounded = Number((miners.child * child.rate) + (miners.adults * adults.rate) + (miners.engineer * engineer.rate)).toFixed(2);
  document.getElementById('foodCount').innerHTML = Math.round(food.total) + " | " + gatherRounded + "/s";
  document.getElementById('skinCount').innerHTML = skin.total;
  document.getElementById('woodCount').innerHTML = Math.round(wood.total) + " | " + woodcutterRounded + "/s";
  document.getElementById('sapCount').innerHTML = sap.total;
  document.getElementById('stoneCount').innerHTML = Math.round(stone.total) + " | " + minerRounded + "/s";
  document.getElementById('coalCount').innerHTML = coal.total;
  document.getElementById('copperoreCount').innerHTML = copperore.total;
  document.getElementById('copperingotCount').innerHTML = copperingot.total;
  document.getElementById('silveroreCount').innerHTML = silverore.total;
  document.getElementById('silveringotCount').innerHTML = silveringot.total;
  document.getElementById('goldoreCount').innerHTML = goldore.total;  document.getElementById('goldingotCount').innerHTML = goldingot.total;
  document.getElementById('furanceCoalCount').innerHTML = furnace.fuel.coal;
}

function updateBuildingTotals() {
  document.getElementById('tentCount').innerHTML = tent.total;
  document.getElementById('hutCount').innerHTML = hut.total;
  document.getElementById('furnaceCount').innerHTML = furnace.total;
  document.getElementById('livestockpenCount').innerHTML = livestockpen.total;
  document.getElementById('millCount').innerHTML = mill.total;
  document.getElementById('houseCount').innerHTML = house.total;
}

function updateStatTotals() {
  document.getElementById('maxpop').innerHTML = maxpop.total;
  document.getElementById('currentpop').innerHTML = currentpop.total;
  document.getElementById('childrenpop').innerHTML = child.total;
  document.getElementById('adultspop').innerHTML = adults.total;
  document.getElementById('engineerpop').innerHTML = engineer.total;
  // document.getElementById('studentCount').innerHTML = students.total;
  // document.getElementById('students').innerHTML = students.total;
  refreshPopulation();
}

function updateWorkerTotals() {
  document.getElementById('gathererChildCount').innerHTML = gatherers.child;
  document.getElementById('woodcutterChildCount').innerHTML = woodcutters.child;
  document.getElementById('minerChildCount').innerHTML = miners.child;
  document.getElementById('gathererAdultCount').innerHTML = gatherers.adults;
  document.getElementById('woodcutterAdultCount').innerHTML = woodcutters.adults;
  document.getElementById('minerAdultCount').innerHTML = miners.adults;
  document.getElementById('gathererengineerCount').innerHTML = gatherers.engineer;
  document.getElementById('woodcutterengineerCount').innerHTML = woodcutters.engineer;
  document.getElementById('minerengineerCount').innerHTML = miners.engineer;
  document.getElementById('smelterengineerCount').innerHTML = smelter.engineer;
  document.getElementById('childAvailableCount').innerHTML = child.available + "/" + child.total;
  document.getElementById('adultAvailableCount').innerHTML = adults.available + "/" + adults.total;
  document.getElementById('engineerAvailableCount').innerHTML = engineer.available + "/" + engineer.total;
}

function disableSmeltButtons() {
  document.getElementById('copperBtn').disabled = true;
  document.getElementById('silverBtn').disabled = true;
}

function enableSmeltButtons() {
  document.getElementById('copperBtn').disabled = false;
  document.getElementById('silverBtn').disabled = false;
}

function disableUpgradeButtons() {
  document.getElementById('pickaxe1Btn').disabled = true;
  document.getElementById('axe1Btn').disabled = true;
  document.getElementById('farming1Btn').disabled = true;
  document.getElementById('clear1Btn').disabled = true;
}

function enableUpgradeButtons() {
  document.getElementById('pickaxe1Btn').disabled = false;
  document.getElementById('axe1Btn').disabled = false;
  document.getElementById('farming1Btn').disabled = false;
  document.getElementById('clear1Btn').disabled = false;
}

function beginning() {
  document.getElementById("defaultOpen").click();
  document.getElementById("defaultOpen1").click();
  maxpop.total += 30;
  currentpop.total += 30;
  adults.total += 10;
  adults.available = adults.total;
  engineer.total += 10;
  engineer.available = engineer.total;
  child.total += 10;
  child.available = child.total;
  updateTotals();
}

//TODO: refactor thissu
function workerSpecial() {
  for (var b = 0; gatherers.child > b; b++) {
    var c = Math.floor(Math.random() * food.specialchance * 3);
    if (c == 0) {
      skin.total += 1;
    }
  }
  for (var b = 0; gatherers.adults > b; b++) {
    var c = Math.floor(Math.random() * food.specialchance * 3);
    if (c == 0) {
      skin.total += 1;
    }
  }
  for (var b = 0; gatherers.engineer > b; b++) {
    var c = Math.floor(Math.random() * food.specialchance * 3);
    if (c == 0) {
      skin.total += 1;
    }
  }
  for (var b = 0; woodcutters.child > b; b++) {
    var c = Math.floor(Math.random() * wood.specialchance * 3);
    if (c == 0) {
      sap.total += 1;
    }
  }
  for (var b = 0; woodcutters.adults > b; b++) {
    var c = Math.floor(Math.random() * wood.specialchance * 3);
    if (c == 0) {
      sap.total += 1;
    }
  }
  for (var b = 0; woodcutters.engineer > b; b++) {
    var c = Math.floor(Math.random() * wood.specialchance * 3);
    if (c == 0) {
      sap.total += 1;
    }
  }
  for (var b = 0; miners.child > b; b++) {
    var c = Math.floor(Math.random() * stone.specialchance * 3);
    if (c == 0) {
      coal.total += 1;
    }
  }
  for (var b = 0; miners.adults > b; b++) {
    var c = Math.floor(Math.random() * stone.specialchance * 3);
    if (c == 0) {
      coal.total += 1;
    }
  }
  for (var b = 0; miners.engineer > b; b++) {
    var c = Math.floor(Math.random() * stone.specialchance * 3);
    if (c == 0) {
      coal.total += 1;
    }
  }
}
//---------------------------- MISC ----------------------------------

function gameLog(message) {
  var time = '0.00';
  d = new Date();
  ampm = d.getHours() >= 12 ? 'PM' : 'AM';
  if (d.getMinutes() < 10) {
    time = d.getHours() + ".0" + d.getMinutes() + ampm + ' ||';
  } else {
    time = d.getHours() + "." + d.getMinutes() + ampm + ' ||';
  }
  if (document.getElementById('logL').innerHTML == message) {
    logRepeat += 1;
    document.getElementById('log0').innerHTML = '<td id="logT">' + time + '</td><td id="logL">' + message + '</td><td id="logR">(x' + logRepeat + ')</td>';
  } else {
    logRepeat = 1;
    document.getElementById('log4').innerHTML = document.getElementById('log3').innerHTML;
    document.getElementById('log3').innerHTML = document.getElementById('log2').innerHTML;
    document.getElementById('log2').innerHTML = document.getElementById('log1').innerHTML;
    document.getElementById('log1').innerHTML = '<td>' + document.getElementById('logT').innerHTML + '</td><td>' + document.getElementById('logL').innerHTML + '</td><td>' + document.getElementById('logR').innerHTML + '</td>';
    document.getElementById('log0').innerHTML = '<td id="logT">' + time + '</td><td id="logL">' + message + '</td><td id="logR">(x' + logRepeat + ')</td>';
  }
}

function begingame() {
  document.getElementById('intro').style.display = "none";
  document.getElementById('main').style.visibility = "visible";
}

window.onload = function() {
  beginning();
};

window.setInterval(function() {
  populationControl();
}, 30000);

window.setInterval(function() {
  // TODO: refactor me - fix the workers gathering systems
  food.total += (gatherers.child * child.rate) + (gatherers.adults * adults.rate) + (gatherers.engineer * engineer.rate);
  wood.total += (woodcutters.child * child.rate) + (woodcutters.adults * adults.rate) + (woodcutters.engineer * engineer.rate);
  stone.total += (miners.child * child.rate) + (miners.adults * adults.rate) + (miners.engineer * engineer.rate);
  updateResourceTotals();
  workerSpecial();
  // graduation();
}, 1000);

var documentHeight = document.getElementById('spawnbox').clientHeight;
var documentWidth = document.getElementById('spawnbox').clientWidth;
var mineSpawn = document.createElement("img");
mineSpawn.setAttribute("src", "images/mine.svg");
mineSpawn.className = "environmentSpawn";
document.getElementById("spawnbox").appendChild(mineSpawn);
currentTop = Math.floor(Math.random() * documentHeight);
currentLeft = Math.floor(Math.random() * documentWidth);
mineSpawn.style.top = currentTop + "px";
mineSpawn.style.left = currentLeft + "px";

//TODO: refactor into jquery or something - messy. lots of work needed
window.setInterval(function() {
  var b = Math.floor(Math.random() * 3);
  var c = Math.floor(Math.random() * 10);
  var a = Math.floor(Math.random());
  var documentHeight = document.getElementById('spawnbox').clientHeight;
  var documentWidth = document.getElementById('spawnbox').clientWidth;

  if (spawned.stone + spawned.wood + spawned.food + spawned.silverore + spawned.goldore < 500) {

    // REACT

    // REACT
    var stoneSpawn = document.createElement("img");
    spawned.stone += 1;
    stoneSpawn.setAttribute("src", "images/rock.png");
    stoneSpawn.className = "stoneSpawn";
    rotation = (Math.random() * 360);
    stoneSpawn.style.transform = "rotate(" + rotation + "deg)"
    stoneSpawn.setAttribute("onmouseover", "clickResource(stone, 1, (spawned.stone -= 1), this.remove())");
    document.getElementById("spawnbox").appendChild(stoneSpawn);
    currentTop = Math.floor(Math.random() * documentHeight);
    currentLeft = Math.floor(Math.random() * documentWidth);
    stoneSpawn.style.top = currentTop + "px";
    stoneSpawn.style.left = currentLeft + "px";
  }
  
  if (spawned.stone + spawned.wood + spawned.food + spawned.silverore + spawned.goldore < 500) {
    var woodSpawn = document.createElement("img");
    spawned.wood += 1;
    woodSpawn.setAttribute("src", "images/wood.png");
    woodSpawn.className = "resourceSpawn";
    rotation = (Math.random() * 360);
    woodSpawn.style.transform = "rotate(" + rotation + "deg)"
    woodSpawn.setAttribute("onmouseover", "clickResource(wood, 1, (spawned.wood -= 1), this.remove())");
    document.getElementById("spawnbox").appendChild(woodSpawn);
    currentTop = Math.floor(Math.random() * documentHeight);
    currentLeft = Math.floor(Math.random() * documentWidth);
    woodSpawn.style.top = currentTop + "px";
    woodSpawn.style.left = currentLeft + "px";
  }
  
  if (b == 0 && spawned.stone + spawned.wood + spawned.food + spawned.silverore + spawned.goldore < 500) {
    var silveroreSpawn = document.createElement("img");
    spawned.silverore += 1;
    silveroreSpawn.setAttribute("src", "images/silverore.png");
    silveroreSpawn.className = "silveroreSpawn";
    rotation = (Math.random() * 360);
    silveroreSpawn.style.transform = "rotate(" + rotation + "deg)"
    silveroreSpawn.setAttribute("onmouseover", "clickResource(silverore, 1, (spawned.silverore -= 1), this.remove())");
    document.getElementById("spawnbox").appendChild(silveroreSpawn);
    currentTop = Math.floor(Math.random() * documentHeight);
    currentLeft = Math.floor(Math.random() * documentWidth);
    silveroreSpawn.style.top = currentTop + "px";
    silveroreSpawn.style.left = currentLeft + "px";
  }
  if (c == 0 && spawned.stone + spawned.wood + spawned.food + spawned.silverore + spawned.goldore < 500) {
    var goldoreSpawn = document.createElement("img");
    spawned.goldore += 1;
    goldoreSpawn.setAttribute("src", "images/goldore.png");
    goldoreSpawn.className = "goldoreSpawn";
    rotation = (Math.random() * 360);
    goldoreSpawn.style.transform = "rotate(" + rotation + "deg)"
    goldoreSpawn.setAttribute("onmouseover", "clickResource(goldore, 1, (spawned.goldore -= 1), this.remove())");
    document.getElementById("spawnbox").appendChild(goldoreSpawn);
    currentTop = Math.floor(Math.random() * documentHeight);
    currentLeft = Math.floor(Math.random() * documentWidth);
    goldoreSpawn.style.top = currentTop + "px";
    goldoreSpawn.style.left = currentLeft + "px";
  }
  if (a == 0 && powerUp.spawned < 1) {
    var powerupSpawn = document.createElement("img");
    powerUp.spawned += 1;
    powerupSpawn.setAttribute("src", "images/pick.png");
    powerupSpawn.className = "powerupSpawn";
    rotation = (Math.random() * 360);
    powerupSpawn.style.transform = "rotate(" + rotation + "deg)"
    powerupSpawn.setAttribute("onclick", "clickResource(powerUp.clear, 1, (powerUp.spawned -= 1), this.remove())");
    document.getElementById("spawnbox").appendChild(powerupSpawn);
    currentTop = Math.floor(Math.random() * documentHeight);
    currentLeft = Math.floor(Math.random() * documentWidth);
    powerupSpawn.style.top = currentTop + "px";
    powerupSpawn.style.left = currentLeft + "px";
  }

}, 1000);
//------------------------------- INTERFACE ---------------------------------
//TODO: refactor this into one function possibly
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTab1(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks1");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//-------------------------------- DEBUG -------------------------------------
function godmode() {
  food.total += 99990;
  wood.total += 99990;
  stone.total += 99990;
  skin.total += 99990;
  coal.total += 99990;
  sap.total += 99990;
  copperore.total += 99990;
  copperingot.total += 99990;
  silverore.total += 99990;
  silveringot.total += 99990;
  maxpop.total += 99999;
  updateResourceTotals();
  updateStatTotals();
  updateBuildingTotals();
  gameLog('god mode activated')
}

function run(word) {
  var total = 0;
  for (var i = 0; i < 1000; i++) {
    total += clickresource(word);
  }
  updateResourceTotals();
  console.log(total);
  total = total / 1000;
  console.log(total);
}