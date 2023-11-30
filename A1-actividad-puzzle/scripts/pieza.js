class Pieza{
    constructor(contenedorPadre,x,y,numero){
        this.contenedorPadre=contenedorPadre;
        this.coordX=x;
        this.coordY=y;
        this.numero=numero;
        
        const pieza=document.createElement('div');
        pieza.textContent=numero;
        pieza.classList.add('pieza');
        contenedorPadre.append(pieza);
    }

    cambiarNumero(numeroNuevo){
        this.numero=numeroNuevo;
    }
}

columna0=document.getElementById('col0');
let p00=new Pieza(columna0,0,1,'1');
let p10=new Pieza(columna0,1,0,'2');
let p20=new Pieza(columna0,2,0,'3');
let p30=new Pieza(columna0,3,0,'4');

columna1=document.getElementById('col1')
let p01=new Pieza(columna1,0,1,'5');
let p11=new Pieza(columna1,1,1,'6');
let p21=new Pieza(columna1,2,1,'7');
let p31=new Pieza(columna1,3,1,'8');

p31.cambiarNumero('10');
console.log(p31.numero);