document.querySelector('.calcular').addEventListener('click', () => {
  var n1 = parseFloat(document.querySelector('.nota1').value)
  var n2 = parseFloat(document.querySelector('.nota2').value)
  var n3 = parseFloat(document.querySelector('.nota3').value)
  var n4 = parseFloat(document.querySelector('.nota4').value)

  var media = (n1 + n2 + n3 + n4) / 4
  var resposta = document.querySelector('.resultado')
  if (media < 5) {
    resposta.innerHTML = `A sua média é: ${media}. <br> E você foi Reprovado`
  } else if (media < 7) {
    resposta.innerHTML = `A sua média é: ${media}. <br> E você está de Recuperação`
  } else {
    resposta.innerHTML = `A sua média é: ${media}. <br> E você foi Aprovado`
  }
})
