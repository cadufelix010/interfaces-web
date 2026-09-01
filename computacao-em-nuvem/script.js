const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
const resultado = document.querySelector('#resultado');

menu.addEventListener('click', () => {
  links.classList.toggle('aberto');
});

document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => links.classList.remove('aberto'));
});

document.querySelectorAll('.answers button').forEach(botao => {
  botao.addEventListener('click', () => {
    if (botao.dataset.answer === 'certa') {
      resultado.textContent = '✅ Correto! SaaS significa Software como Serviço.';
    } else {
      resultado.textContent = '❌ Quase! Tente novamente. Dica: é o modelo de software pronto para o usuário.';
    }
  });
});