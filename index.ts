import { question } from 'readline-sync'

function main() {

    const VERDE = "\x1b[32m"
    const ROJO = "\x1b[31m"
    const RESET = "\x1b[0m"



    while (true) {
        console.clear()
        const cadena = question("Bienvenido ingrese la cadena que quiera validar: ")
        const valid = match(cadena)

        if (valid)
            console.log(VERDE,"La cadena es valida")
        else
            console.log(ROJO,"La cadena es invalida")

            
        let res: string

        while (true) {
            res = question(RESET +"Quiere validar otra cadena? S/N ").toLowerCase()

            if (res == 's' || res == 'n')
                break
        }

        if (res == 'n')
            break

    }

}

function match(word: string): boolean {
    const matricula = "1844441"
    const numerosMatricula = "(1|8|4)"
    const alfabeto = "(j|e|s|u|a|l|x|n|d|r|o|h|z|i|v|1|8|4)"
    let regex = new RegExp(`^${numerosMatricula}+${alfabeto}*\.?${alfabeto}*(jahr)${alfabeto}*\.?${alfabeto}*.${matricula}$`, "g")
    const val = regex.test(word)
    return val
}

main()