const body = document.querySelector('body');
const input = document.createElement('input');
input.id = 'carta-texto';
input.type = 'text';
const paragraph = document.createElement('p');
const paragraphContador = document.createElement('p');
paragraphContador.id = 'carta-contador';
const button = document.createElement('button');
button.id = 'criar-carta';
button.innerText = 'Sou o botão!';
paragraph.id = 'carta-gerada';
body.appendChild(input);
body.appendChild(button);
body.appendChild(paragraph);
body.appendChild(paragraphContador);

const arrayEstilo = ['newspaper', 'magazine1', 'magazine2'];
const arrayTamanho = ['medium', 'big', 'reallybig'];
const arrayRotacao = ['rotateleft', 'rotateright'];
const arrayInclinacao = ['skewleft', 'skewright'];

const funcao2 = () => {
  paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
};

const funcao1 = () => {
  const texto = input.value;
  if (texto.length === 0 || texto[0] === ' ') {
    funcao2();
  } else {
    const arrayDePalavras = texto.split(' ');
    paragraph.innerHTML = '';
    paragraphContador.innerText = arrayDePalavras.length;
    for (let index = 0; index < arrayDePalavras.length; index += 1) {
      const createdSpan = document.createElement('span');
      const estilo = arrayEstilo[Math.floor(Math.random() * 3)];
      const tamanho = arrayTamanho[Math.floor(Math.random() * 3)];
      const rotacao = arrayRotacao[Math.floor(Math.random() * 2)];
      const inclinacao = arrayInclinacao[Math.floor(Math.random() * 2)];
      createdSpan.className = `${estilo} ${tamanho} ${rotacao} ${inclinacao}`;
      createdSpan.innerText = arrayDePalavras[index];
      paragraph.appendChild(createdSpan);
    }
  }
};

button.addEventListener('click', funcao1);

const funcao3 = (event) => {
  const alvo = event.target;
  const estilo = arrayEstilo[Math.floor(Math.random() * 3)];
  const tamanho = arrayTamanho[Math.floor(Math.random() * 3)];
  const rotacao = arrayRotacao[Math.floor(Math.random() * 2)];
  const inclinacao = arrayInclinacao[Math.floor(Math.random() * 2)];
  alvo.className = `${estilo} ${tamanho} ${rotacao} ${inclinacao}`;
};

paragraph.addEventListener('click', funcao3);
