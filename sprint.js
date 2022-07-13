import prompt from "prompt-sync"

const ordem  = prompt();
const caminho = () => {
    let comandos = ordem("Digite um comando CSS:");
    let array = [];
    while (comandos.toLowerCase() != "sair") {
        array.push(comandos);
        comandos = ordem("Digete aqui uma propriedade CSS:")
    }
    return array.sort().join(" ");
}
console.log(caminho());