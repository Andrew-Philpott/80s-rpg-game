import $ from "jquery";
import {
  Character,
  Nerd,
  Prep,
  Jock,
  fistFight,
  fight,
} from "../src/character.js";
import { Game } from "./situation.js";

var steven = new Nerd("Steven", "boy");
fistFight();

if ($("#playerType").val() === "Nerd") {
  var player1 = new Nerd($("#userName"), $("userGender"));
} else if ($("#playerType").val() === "Prep") {
  var player1 = new Prep($("#userName"), $("userGender"));
} else if ($("#playerType").val() === "Jock") {
  var player1 = new Jock($("#userName"), $("userGender"));
}

const fistFight = "fistFight";
const outsmart = "outsmart";
const cloutWar = "cloutWar";

let game = new Game(steven);
fight(game.player, game.getRandomSituation(0, 2), "fistFight");

$(document).ready(function () {
  createPlayerForm();
});

function createPlayerForm() {
  const main = $("#main-content");
  const nerd = {
    name: "Neil Nerdy Nerd",
    gender: "Male",
    brains: 100,
    sporty: 50,
    cool: 50,
    vitality: 100,
  };
  const jock = {
    name: "Jim Jock the Jockster",
    gender: "Male",
    brains: 50,
    sporty: 100,
    cool: 100,
    vitality: 100,
  };
  const prep = {
    name: "Perky perby",
    gender: "Female",
    brains: 50,
    sporty: 50,
    cool: 100,
  };
  const charcters = [nerd, jock, prep];
  let result = `<div class="row">`;
  for (let i = 0; i < 2; i++) {
    result += `${createPlayerContainer(2, charcters)}`;
  }
  result += `</div>`;
  main.html(result);
}

function createPlayerContainer(playerNum, characters) {
  let result = `<div class="col-6"><label for="name-${playerNum}">Character name:</label>
  <input type="text" id="name-input" /><select class="form-control" id="player-${playerNum}" required><option value="">Select player</option>`;
  for (let i = 0; i < characters.length; i++) {
    result += `<option value="${i}">${characters[i].name}</option>`;
  }
  result += `</select></div>`;

  return result;
}
