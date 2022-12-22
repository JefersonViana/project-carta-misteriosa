const body = document.querySelector('body');
const input = document.createElement('input');
input.id = 'carta-texto';
input.type = 'text';
const paragraph = document.createElement('p');
const button = document.createElement('button');
button.id = 'criar-carta';
button.innerText = 'Sou o botão!';
paragraph.id = 'carta-gerada';
// paragraph.innerText = 'Estou aqui!'
body.appendChild(input);
body.appendChild(button);
body.appendChild(paragraph);

const funcao2 = () => {
  paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
}

const funcao1 = () => {
  const texto = input.value;
  console.log(texto.length);
  if (texto.length === 0 || texto[0] === ' ') {
    funcao2();
  } else {
    let arrayDePalavras = texto.split(' ');
    paragraph.innerHTML = '';
    for (let index = 0; index < arrayDePalavras.length; index += 1) {
      const createdSpan = document.createElement('span');
      createdSpan.innerText = arrayDePalavras[index];
      paragraph.appendChild(createdSpan);
    }
  }
};

button.addEventListener('click', funcao1)
