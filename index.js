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
    var matricula = "1844441";
    var numerosMatricula = "(1|8|4)";
    var alfabeto = "(j|e|s|u|a|l|x|n|d|r|o|h|z|i|v|1|8|4)";
    var regex = new RegExp("^" + numerosMatricula + "+" + alfabeto + "*.?" + alfabeto + "*(jahr)" + alfabeto + "*.?" + alfabeto + "*." + matricula + "$", "g");
    var val = regex.test(word);
    return val;
}
main();
