window.prompt('Qual fruta você deseja?');
var fruta = opc

function escolheFruta(fruta) {
  switch (fruta) {
    case "maça":
      return "Não vendemos esta fruta aqui.";
      break;
    case "kiwi":
      return "Estamos com escassez de kiwis.";
      break;
    case "melância":
      return "Aqui está, são 3 reais o quilo.";
      break;
    default:
      return "Erro.";
  }
}

console.log(escolheFruta("melância"));
