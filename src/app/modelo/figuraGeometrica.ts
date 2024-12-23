export abstract class FiguraGeometrica {
    nombre: string

    constructor(nombre: string) {
        this.nombre = nombre
    }

    abstract calcularPerimetro(): number
}

export class Circulo extends FiguraGeometrica{
    radio: number

    constructor(nombre: string, radio:number){
        super(nombre)
        this.radio = radio
    }

    override calcularPerimetro(): number {
        return Math.PI * (this.radio * 2) 
    }
}

export class TrianguloEscaleno extends FiguraGeometrica {
    ladoA:number
    ladoB:number
    ladoC:number

    constructor(nombre:string, ladoA:number, ladoB:number , ladoC:number) {
        super(nombre)
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }

    override calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC
    }
}
export class TrianguloEquilatero extends FiguraGeometrica {
    ladoA:number

    constructor(nombre:string, ladoA:number){
        super(nombre)
        this.ladoA = ladoA
    }
    override calcularPerimetro(): number {
        return this.ladoA * 3
    }

}
