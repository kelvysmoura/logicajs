## JavaScript Assíncrono

Até agora todo código que você escreveu rodava **de cima pra baixo, uma linha de cada vez**, esperando cada uma terminar antes de ir pra próxima. Isso se chama código **síncrono**.

Mas tem coisas que **demoram**: esperar 3 segundos, baixar dados de um servidor, ler um arquivo. Se o JavaScript ficasse *parado* esperando, a página inteira congelava. A solução é o código **assíncrono**: você diz "comece isso e, *quando terminar*, faça aquilo" — e a vida continua enquanto a tarefa demorada acontece em segundo plano.

> Lembra do **callback** do módulo anterior? "Faça isso e, quando terminar, chame essa função." É exatamente essa ideia que sustenta tudo aqui. Você já tem a base.

---

## 1. `setTimeout` — faça isso depois de um tempo

`setTimeout` executa uma função **uma vez**, depois de esperar um número de milissegundos (1000 ms = 1 segundo).

```js
setTimeout(function() {
  console.log('Isso aparece depois de 2 segundos');
}, 2000);
```

Ele recebe dois argumentos: **um callback** (a função a executar) e **o tempo de espera** em milissegundos. Com arrow function fica mais enxuto:

```js
setTimeout(() => {
  console.log('Passaram 2 segundos!');
}, 2000);
```

### A pegadinha number 1 do assíncrono

Olha esse código e tente adivinhar a ordem:

```js
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

console.log('C');
```

Mesmo com o tempo `0`, a saída é **A, C, B** — não A, B, C.

Por quê? Porque `setTimeout` **não trava** o programa. Ele agenda o callback pra rodar "depois" e segue em frente imediatamente. O resto do código síncrono (`'C'`) roda primeiro; o callback só entra quando a fila síncrona esvazia. Esse é o coração de entender assíncrono: **o que você agenda não roda na hora, roda depois.**

---

## 2. `setInterval` — faça isso repetidamente

`setInterval` é igual ao `setTimeout`, mas em vez de rodar uma vez, **repete** a cada X milissegundos, pra sempre — até você mandar parar.

```js
setInterval(() => {
  console.log('Tic');
}, 1000); // imprime "Tic" a cada 1 segundo, sem fim
```

### Parando o intervalo com `clearInterval`

`setInterval` **devolve um id** (um número que identifica aquele intervalo). Você guarda esse id e usa `clearInterval(id)` pra parar.

```js
let contador = 0;

const id = setInterval(() => {
  contador++;
  console.log('Contagem:', contador);

  if (contador === 3) {
    clearInterval(id); // para quando chega em 3
    console.log('Parou!');
  }
}, 1000);
```

Sem o `clearInterval`, o intervalo roda eternamente. **Sempre que usar `setInterval`, planeje como vai pará-lo.**

> `setTimeout` também devolve um id, e dá pra cancelar com `clearTimeout(id)` antes dele disparar.

---


### Criando uma Promise

Você cria com `new Promise`, recebendo `resolve` (chamar quando der certo) e `reject` (quando der errado):

```js
function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Esperei ${ms}ms`);
    }, ms);
  });
}

esperar(1000).then(mensagem => console.log(mensagem)); // depois de 1s: "Esperei 1000ms"
```

`resolve` é literalmente o callback de sucesso, e `setTimeout` é quem segura o tempo. Tudo que você aprendeu se conecta aqui.

---

## 5. `async` / `await` — Promise com cara de código normal

`.then()` é bom, mas o JavaScript moderno tem algo ainda mais legível: `async`/`await`. Ele deixa o código assíncrono **parecer** síncrono, lido de cima pra baixo.

Duas regras:

- a palavra **`async`** antes de uma função faz ela trabalhar com Promises (e sempre devolver uma).
- a palavra **`await`** antes de uma Promise **espera** ela resolver e te entrega o valor direto — sem `.then`.

```js
async function mostrarUsuario() {
  const usuario = await buscarUsuario(42);   // espera resolver e pega o valor
  const pedidos = await buscarPedidos(usuario);
  console.log(pedidos);
}
```

Compare com a versão `.then`: faz a mesma coisa, mas se lê como uma receita, linha após linha. O `await` só pode ser usado **dentro de uma função `async`**.

### Tratando erro: `try` / `catch`

Onde o `.catch()` pegava o erro, aqui você usa o velho `try/catch`:

```js
async function mostrarUsuario() {
  try {
    const usuario = await buscarUsuario(42);
    const pedidos = await buscarPedidos(usuario);
    console.log(pedidos);
  } catch (erro) {
    console.log('Algo falhou:', erro);
  }
}
```

> **A grande sacada:** `async/await` **não substitui** Promises — ele é uma forma mais bonita de usá-las. Por baixo, continua tudo sendo Promise, que por baixo é callback, que é a ideia de "quando terminar, chame essa função" que você aprendeu lá no começo. É a mesma coisa, vestida cada vez melhor.

---

## Resumindo a evolução

| Ferramenta                   | O que faz                                      | Como trata o "depois" |
| ---------------------------- | ---------------------------------------------- | --------------------- |
| `setTimeout` / `setInterval` | agenda código pra rodar depois / repetidamente | callback              |
| Promise (`.then`/`.catch`)   | representa um valor futuro, encadeável         | callback organizado   |
| `async`/`await`              | Promise com aparência de código síncrono       | `try`/`catch`         |

Tudo é a mesma ideia ficando mais legível. No arquivo de quiz você vai treinar a **ler** esse código (a ordem de execução engana muito), e nos desafios vai **construir** seu próprio motor assíncrono.
