"use strict";
// index.ts
// Authors: [hidden as per CollegeBoard instructions]
// Date: 5/12/2021
// Sources: StackOverflow, TypeScript Documentation, Wikipedia ANSI Codes
// Known Bugs: No Currently known bugs
// Description: A choose your own game/adventure. You pick a game from a list, and are prompted to make
// it through a list of "situations," if you get the answers right, you continue, otherwise the game ends
// with the current score.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// Import the Readline module, built into Node.js 
var readline = require("readline");
// Game essentials setup -- using this to setup the readline module and allow for user input in the terminal
// TERMINAL SETUP ------------------------------
var rlInterface = readline.createInterface({
    input: process.stdin
});
// functional component for the program, isn't meant to run games, but is meant to allow inputs from users
var situationQuestion = function (question) {
    return new Promise(function (res, rej) {
        process.stdout.write("" + white + question + " ");
        rlInterface.question("", function (answer) {
            res(answer);
        });
    });
};
// ATTRIBUTION: these ANSI color codes for terminal were found on https://en.wikipedia.org/wiki/ANSI_escape_code#Colors 
// and https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color. These color codes are 
// not my own work
var magenta = "\x1b[35m";
var red = "\x1b[31m";
var green = "\x1b[32m";
var yellow = "\x1b[33m";
var blue = "\x1b[34m";
var cyan = "\x1b[36m";
var white = "\x1b[37m";
// array to make the colors easier to use later down the line
var colorsArray = [red, green, yellow, blue, magenta, cyan, white];
// ---------------------------------------------
// used to calculate the amount of correct guesses the user has, conditionally. 
var objectLength = function (object) {
    var size = 0;
    for (var key in object) {
        size++;
    }
    ;
    return size;
};
;
;
;
// GAME DEFINITIONS ---------------------------
// Define the game "Forest Adventure" so it can be used in other places if ever needed, also makes the array look cleaner
var forestAdventure = {
    gameName: "Forest Adventure",
    welcomeMessage: "Welcome to the Forest Adventure, you have to make the right decisions to survive being lost in the forest!",
    situationsObject: {
        start: {
            conditional: "You are in a Forest at night, you hear growling, its a bear! What do you do?",
            deathMessage: "You ran the wrong way! You got eaten by the bear :(",
            survivalMessage: "You successfully avoided the bear! 🐻",
            correctAnswer: "b",
            options: {
                a: "Run into a nearby den for the rest of the night",
                b: "Run away from the noise until it is faint"
            }
        },
        situations: {
            1: {
                conditional: "Once you've made it far away from the bear, you see moss growing on the trees! What's your next move?",
                deathMessage: "You ran the wrong way! The moss lead you deeper into the forest 🌿",
                survivalMessage: "You made it further outwards of the forest! 🌿🌿",
                correctAnswer: "a",
                options: {
                    a: "Run towards the direction the moss grows",
                    b: "Run in the opposite direction of the moss"
                }
            },
            2: {
                conditional: "You see a wrecked airplane on the right side of you, what do you plan on doing?",
                deathMessage: "You lit the highly flammable jet fuel on fire and it exploded!",
                survivalMessage: "You successfully scavenged more supplies to survive!",
                correctAnswer: "c",
                options: {
                    a: "Try to start a fire with the fuel from the plane",
                    b: "Run towards the airplane to look for people",
                    c: "Go near the airplane carefully and look for supplies for survival"
                }
            }
        }
    }
};
var subwayFun = {
    gameName: "Subway Fun",
    welcomeMessage: "It's time for some Subway Fun! Make the right decisions and make it to your destination.",
    lives: 2,
    situationsObject: {
        start: {
            conditional: "You're making your way down to the New York Subway, it is extremely crowded, and you see someone fall over in front of you, what do you do?",
            deathMessage: "You tripped and fell and also got hurt",
            survivalMessage: "You helped the person up and also successfully made it down the stairs.. Nice Job!",
            correctAnswer: "b",
            options: {
                a: "Keep going forward",
                b: "Stop and help the person up, and then continue down the stairs"
            }
        },
        situations: {
            1: {
                conditional: "You're waiting for your train to approach the station, and premilinarily step in front of the danger line, what do you do?",
                deathMessage: "You tripped and fell in front of the train",
                survivalMessage: "You safely waited for the train to arrive and go in safely!",
                correctAnswer: "b",
                options: {
                    a: "Keep going forward towards the train",
                    b: "Go backwards and wait for the train to safely approach the station, then board it."
                }
            },
            2: {
                conditional: "The train starts moving and you're not holding onto anything",
                deathMessage: "You tripped in the middle of the train",
                survivalMessage: "You safely reached your destination!",
                correctAnswer: "a",
                options: {
                    a: "Find a seat or handle quickly",
                    b: "Hold on to your luggage"
                }
            }
        }
    }
};
// an array of games, each requiring the necessary gameObject interfaces
var gamesArray = [forestAdventure, subwayFun];
// ---------------------------------------------
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var x, gameSelection, _a, gameResults;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log(cyan + "Welcome to Choose Your Own Game(Adventure)!"); // Welcome the player to the game in the console/terminal
                    console.log(white + "It's time for you to pick a game!"); // Send a new message in terminal for player to choose a game
                    // runs for every item in the games array and prints out each game as an option
                    for (x = 0; x < gamesArray.length; x++) {
                        console.log("" + colorsArray[x] + x + ":", gamesArray[x].gameName);
                    }
                    _a = parseInt;
                    return [4 /*yield*/, situationQuestion("Which game would you like to play? (Enter the number):")];
                case 1:
                    gameSelection = _a.apply(void 0, [_b.sent()]);
                    if (!gamesArray[gameSelection]) { // Checks if the selected number by the user is valid
                        console.log(red + "Error loading, or the selection was invalid. Please try again."); // if invalid, a new terminal message is printed and 
                        return [2 /*return*/, main()]; // the program restarts
                    }
                    ;
                    console.log(green + "Loading game \"" + gamesArray[gameSelection].gameName + "\""); // show user that a game is being loaded
                    return [4 /*yield*/, runGame(gamesArray[gameSelection])];
                case 2:
                    gameResults = _b.sent();
                    if (gameResults == objectLength(gamesArray[gameSelection].situationsObject.situations) + 1 /* +1 is to account for the starting situation */)
                        console.log("Congratulations! You Passed all the Situations \uD83E\uDD73 (" + gameResults + ")"); // if the user passes all of the situations congratulate them
                    console.log("GAME OVER! You scored " + gameResults); // show the user their results and score
                    return [4 /*yield*/, situationQuestion("Would you like to play again? Y/N")];
                case 3:
                    if ((_b.sent()).toLowerCase() == "y")
                        return [2 /*return*/, runGame(gamesArray[gameSelection], 2)]; // await a user response to see if they would like to play again or not, if so, restart the main function to start the game again
                    rlInterface.close(); // close the opened terminal input session if the user doesn't want to play again
                    process.exit(); // end the program if the user doesn't want to play again
                    return [2 /*return*/];
            }
        });
    });
}
;
function runGame(game, lives) {
    return __awaiter(this, void 0, void 0, function () {
        var gameScore, livesRemaining, startSituation, _a, _b, _i, situation, situationResult;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    gameScore = 0;
                    livesRemaining = 1;
                    if (lives)
                        livesRemaining = lives; // if lives are given give the user them
                    console.log(game.welcomeMessage); // welcome the player to the game
                    return [4 /*yield*/, runSituation(game.situationsObject.start)];
                case 1:
                    startSituation = _c.sent();
                    if (startSituation != true)
                        livesRemaining -= 1;
                    if (livesRemaining == 0)
                        return [2 /*return*/, gameScore];
                    gameScore++; // increase the score by an increment of 1
                    _a = [];
                    for (_b in game.situationsObject.situations)
                        _a.push(_b);
                    _i = 0;
                    _c.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    situation = _a[_i];
                    if (lives)
                        console.log("You have " + livesRemaining + " lives left");
                    return [4 /*yield*/, runSituation(game.situationsObject.situations[situation])];
                case 3:
                    situationResult = _c.sent();
                    if (situationResult != true)
                        livesRemaining -= 1; // if the user gets an answer wrong, it will take a life away
                    if (livesRemaining == 0)
                        return [3 /*break*/, 5]; // if the user has no lives left, end the for loop, exiting the functions cycle
                    gameScore++; // if they get the answer right, it will update the score and continue with the rest of the loop
                    return [3 /*break*/, 4]; // continues the loop
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    ;
                    return [2 /*return*/, gameScore]; // return value of the runGame function, returns the number of correct answers from the user
            }
        });
    });
}
;
// this function is abstracted code, it runs the specified situation and returns a value of true or false depending on if the user is correct or not
function runSituation(situation) {
    return __awaiter(this, void 0, void 0, function () {
        var option, userResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(blue + situation.conditional); // print out the conditional statement that the user has to answer
                    for (option in situation.options) { // run a loop to show all of the available options to the user
                        console.log("" + magenta + option + ": " + situation.options[option]); // print out all the available options to the user
                    }
                    return [4 /*yield*/, situationQuestion("Which option would you like to choose?")];
                case 1:
                    userResponse = _a.sent();
                    if (userResponse.toLowerCase() == situation.correctAnswer) { // if the user's input is the correct answer, run
                        console.log(green + situation.survivalMessage); // print the message congratulating the user for the right message
                        return [2 /*return*/, true]; // if the user's response is equal to the correctAnswer, end the function and return true
                    }
                    console.log(red + situation.deathMessage); // show the death message by default if the user inputs the wrong answer
                    return [2 /*return*/, false]; // return false by default if the true case is not met
            }
        });
    });
}
;
// start the program
main();
