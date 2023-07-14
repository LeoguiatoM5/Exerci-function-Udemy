function Fruta(frutas){
    switch(frutas){
        case  "maça": 
        return console.log('Não vendemos esta fruta aqui');
        case "kiwis":
            return console.log("Estamos comescassez de kiwis")
        case "melancia":
            return console.log("Aqui está, são 3 reais o quilo")
        default: 
        return console.log('invalido');
}
}


Fruta("maça");
Fruta("kiwis");
Fruta("melancia");
Fruta("invalido");