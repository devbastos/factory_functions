// objeto
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

//contructor functions 

function Celular(marcaCelular, tamanhoTela) {
    this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.ligar = function() {
            console.log("ligando...");
        }
}

const celular = new Celular('asus', 5.5);
const celular1 = new Celular('xaiome', 12.5);
console.log(celular, celular1);