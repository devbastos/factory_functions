//objeto
const Tv = {
    marcaTv: 'LG',
    tamanhoTela: {
        vertica: 200,
        horizontal: 400
    },
    ligar: function() {
        console.log("ligando...")
    }
}

//factory

function criarTv(marcaTv, tamanhoTela) {
    return {
        marcaTv,
        tamanhoTela,
        ligar() {
            console.log("ligando...")
        }
    }
}

const tv1 = criarTv('LG', 5.5);
const tv2 = criarTv('sansung', 12.6);

console.log(tv1, tv2);