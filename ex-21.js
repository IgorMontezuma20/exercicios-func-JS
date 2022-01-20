function convenio(idade) {
  let valorFixo = 100;
  let valorFinal = 0;
  if (idade < 10) {
    valorFinal = valorFixo + 80;
  } else if (idade < 30) {
    valorFinal = valorFixo + 50;
  } else if (idade > 30 && idade < 60) {
    valorFinal = valorFixo + 95;
  } else if (idade > 60) {
    valorFinal = valorFixo + 130;
  }
  return `O valor a ser pago será de R$ ${valorFinal}.`;
}

console.log(convenio(2));
