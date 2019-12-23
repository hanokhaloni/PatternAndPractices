function statement(player, monsters) {
  let totalExperience = 0;
  let newMonsterKills = 0;
  let result = `Kills Record for ${player.name}\n`;
  for (let r of player.kills) {
    let monster = monsters[r.id];
    let thisExpirience = 0;

    // determine points gained
    switch (monster.type) {
      case "regular":
        thisExpirience = 2;
        if (r.count > 2) {
          thisExpirience += (r.count - 2) * 1.5;
        }
        break;
      case "critter":
        thisExpirience = r.count * 0.5;
        if (r.count > 3) {
          thisExpirience += (r.count - 3) * 1.5;
        }
        break;
      case "boss":
        thisExpirience = 50;
        break;
    }

    if (monster.type === "new") newMonsterKills++;

    //Print row per monster
    result += `\t${r.count} ${monster.name}s\t\t${thisExpirience} exp\n`;
    totalExperience += thisExpirience;
  }
  // add footer lines
  result += `Total experience gained is ${totalExperience}\n`;
  result += `You earned ${newMonsterKills} new monster kill points\n`;

  return result;
}

var player = {
  name: "LeeroyJenkins",
  kills: [
    { id: "M001", count: 3 },
    { id: "M002", count: 1 },
    { id: "M003", count: 1 }
  ]
};

var monsters = {
  M001: { name: "Frog",    type: "critter" },
  M002: { name: "Orc",     type: "regular" },
  M003: { name: "Lizzard", type: "new" }
  // etc
};

console.log(statement(player, monsters));
