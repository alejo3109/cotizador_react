const formatearDinero = (valor) =>{
    const formatter = new Intl.NumberFormat('es-co',{
        style: 'currency',
        currency: 'COP'
    });
    return formatter.format(valor);
}

const calcularTotalPagar = (cantidad, plazo) =>{
    let total;

    //mientras mayor es la cantidad, menor es el interes
    if(cantidad < 500000){
        total = cantidad * 1.5;
    }else if(cantidad >= 500000 && cantidad < 1000000){
        total = cantidad * 1.4;
    }else if(cantidad >= 1000000 && cantidad < 1500000){
        total = cantidad * 1.3;
    }else{
        total = cantidad * 1.2;
    }

    //Plazo - mas plazo, mayor interes
    if(plazo === 6){
        total *= 1.1;
    }else if(plazo === 12){
        total *= 1.2;
    }else{
        total *= 1.3;
    }

    return total;
}

export{
    formatearDinero,
    calcularTotalPagar
}

console.log('Me falto este console');
