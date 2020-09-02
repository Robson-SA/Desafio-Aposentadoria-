// Desafio launchBase bootCamp
// Calculo da Aposentadoria

// Declarando as Variáveis 
//------------------------
const nome = 'Fernanda';
const sexo = 'F';
const idade = 62;
const contribuicao = 29;
//------------------------
//Cálculo da Aposentadoria
const calcontribuicao = idade + contribuicao;

// Condicionais 
//-----------------------------------------------------------//
if (sexo == 'F') {
    if (sexo == 'F' && contribuicao >= 30 && calcontribuicao >= 85) {
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você não pode se aposentar!`);
    }
  } else {
    if(sexo == 'M' && contribuicao >=35 && calcontribuicao >=95){ // É possivel colocar um if dentro de um else
        console.log(`${nome}, você pode se aposentar!`);
    }else{
        console.log(`${nome}, você não pode se aposentar!`);
    }
  }

//------------------------------------------------------------//
// Alterações fuutura virão...
// Temos que aplica cálculos diferentes dependendo so sexo da pessoa.
