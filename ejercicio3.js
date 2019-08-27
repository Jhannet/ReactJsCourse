
//Class Auto
// Class Toyota
// toString() todos los atributos

class Auto {
    constructor(info) {
        this.tipo = info.tipo;
        this.anio = info.anio;
        this.hasSoat = info.hasSoat;
    }

    getTipo() { return this.tipo };
    getAnio() { return this.anio };
    getHasSoat() { return this.hasSoat };

    setTipo = (tipo) => this.tipo = tipo;
    setAnio = (anio) => this.anio = anio;
    setHasSoat = (hasSoat) => this.hasSoat = hasSoat;
}

class Toyota extends Auto {
    constructor(info) {
        super({tipo: info.tipo, anio:  info.anio, hasSoat: info.hasSoat});
        this.modelo = info.modelo;
    }

    getModelo = () => this.modelo;
    setModelo = (modelo) => this.modelo = modelo;
    toString = () => `tipo: ${super.getTipo()} anio: ${super.getAnio()} hasSoat: ${super.getHasSoat()} modelo: ${this.getModelo()}`;
}

const auto = new Auto({tipo: "tipo", anio: 2222, hasSoat: true})
const autoToyota = new Toyota({tipo: "tipoToyota", anio: 1999, hasSoat: false, modelo: "Toyota praus"});

console.log(autoToyota.toString());