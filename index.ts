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
    const matricula = "1339767"
    const numerosMatricula = "(1|3|9|7|6)"
    const alfabeto = "(y|a|z|m|n|b|j|h|i|e|l|g|u|r|o|c|1|3|9|7|6)"
    let regex = new RegExp(`^${numerosMatricula}+${alfabeto}*\.?${alfabeto}*(yjgc)${alfabeto}*\.?${alfabeto}*.${matricula}$`, "g")
    const val = regex.test(word)
    return val
}

main()