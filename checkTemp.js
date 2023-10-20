function checkTemp (temperatuur) {
    if (temperatuur <= 20) return -1;
    if (temperatuur <= 40) return 0;
    if (temperatuur <= 60) return 1;
}

let temperatuur = 25;
let tulemus = checkTemp(temperatuur);
console.log(tulemus);