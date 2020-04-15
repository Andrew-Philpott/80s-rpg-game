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

$(document).ready(function () {});
