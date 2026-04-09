function CalcularDesconto(p,d){

    const t = d/100;
    const descontototal = t*p;
    const valorFinal = p-descontototal;

    console.log("O valor do produto: " + p);
    console.log("O desconto recebido foi de: " + descontototal);
    console.log("O valor a ser pago é de: " + valorFinal);
    

}

CalcularDesconto(50,50);