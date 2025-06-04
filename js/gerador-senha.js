const btn = document.querySelector('.btn');

function gerarSenha() {
  const tamanho = document.querySelector('#quantidade').value;
  const incluirMaiuscula = document.querySelector('#maiuscula').checked;
  const incluirMinuscula = document.querySelector('#minuscula').checked;
  const incluirNumero = document.querySelector('#numero').checked;
  const incluirEspecial = document.querySelector('#especial').checked;

  const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
  const numeros = '0123456789';
  const especiais = '!@#$%^&*()_+';

  let caracteres = '';
  if (
    !incluirMaiuscula &&
    !incluirMinuscula &&
    !incluirNumero &&
    !incluirEspecial
  ) {
    alert('Selecione pelo menos uma opção de caractere.');
    return;
  } else {
    if (incluirMaiuscula) {
      caracteres += letrasMaiusculas;
    }
    if (incluirMinuscula) {
      caracteres += letrasMinusculas;
    }
    if (incluirNumero) {
      caracteres += numeros;
    }
    if (incluirEspecial) {
      caracteres += especiais;
    }
  }

  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[index];
  }

  document.querySelector('#senha').value = senha;
}

btn.addEventListener('click', gerarSenha);
