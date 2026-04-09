function mensagem (a,b){


    if (b>=0 && b<12){
        console.log("Bom dia " + a);
        
    }else if (b>=12 && b<18){
        console.log("Boa Tarde " + a);
    } else if (b>=18 && b<23){
        console.log("Boa Noite " + a);
    }else {
        console.log("Digite algum horario valido " + a);
    }
}
mensagem("Rafinha",18);
