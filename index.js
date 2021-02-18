"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var VERDE = "\x1b[32m";
    var ROJO = "\x1b[31m";
    var RESET = "\x1b[0m";
    while (true) {
        console.clear();
        var cadena = readline_sync_1.question("Bienvenido ingrese la cadena que quiera validar: ");
        var valid = match(cadena);
        if (valid)
            console.log(VERDE, "La cadena es valida");
        else
            console.log(ROJO, "La cadena es invalida");
        var res = void 0;
        while (true) {
            res = readline_sync_1.question(RESET + "Quiere validar otra cadena? S/N ").toLowerCase();
            if (res == 's' || res == 'n')
                break;
        }
        if (res == 'n')
            break;
    }
}
function match(word) {
    var matricula = "1339767";
    var numerosMatricula = "(1|3|9|7|6)";
    var alfabeto = "(y|a|z|m|n|b|j|h|i|e|l|g|u|r|o|c|1|3|9|7|6)";
    var regex = new RegExp("^" + numerosMatricula + "+" + alfabeto + "*.?" + alfabeto + "*(yjgc)" + alfabeto + "*.?" + alfabeto + "*." + matricula + "$", "g");
    var val = regex.test(word);
    return val;
}
main();
