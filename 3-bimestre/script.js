function responder(correta) {
  const resultado = document.getElementById('resultado');

  if (correta) {
    resultado.textContent = 'Correto! SaaS significa Software como Serviço.';
  } else {
    resultado.textContent = 'Resposta incorreta. Tente novamente.';
  }
}
