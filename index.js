class heroi{
	constructor(nome,idade,tipo){
    	this.nome = nome
        this.idade = idade
        this.tipo = tipo 
    }
    atacar(){
        	if (this.tipo == 'Gerreiro'){
            	console.log('O ' + this.tipo + ' usou espada')
            }
         	else if (this.tipo == 'Mago'){
            	console.log('O ' + this.tipo + ' usou magia')
            }
            else if (this.tipo == 'Monje'){
             	console.log('O ' + this.tipo + ' usou artes marciais')
            }
            else if (this.tipo == 'Ninja'){
            	console.log('O ' + this.tipo + ' usou shuriken')
            }
   }
}
let ficha = new heroi('Davi', 14, 'Ninja')
ficha.atacar()