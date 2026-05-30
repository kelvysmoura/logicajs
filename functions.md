## Funções

Uma função é uma máquina: você coloca coisas dentro (os **parâmetros**), ela trabalha, e devolve um resultado (o **return**).

```js
function calcularSubtotal(preco, quantidade) {
  return preco * quantidade;
}

const total = calcularSubtotal(25, 3); // total agora vale 75
```

Três coisas pra ter clareza absoluta aqui:

- `preco` e `quantidade` são **parâmetros** — os nomes que a função usa pra se referir ao que recebe.
- `25` e `3` são **argumentos** — os valores reais que você passou na hora de chamar.
- `return` é o que a função **devolve** pra quem a chamou. Sem ele, a função não entrega nada útil de volta.

---
### `return` encerra a função na hora

Assim que o JavaScript bate num `return`, a função para. Qualquer linha depois dele é ignorada.

```js
function verificarEstoque(quantidade) {
  if (quantidade === 0) {
    return 'Esgotado'; // se entrar aqui, a função para AQUI
  }
  return 'Disponível'; // só chega aqui se quantidade não for 0
}

verificarEstoque(0); // 'Esgotado'
verificarEstoque(5); // 'Disponível'
```

Esse comportamento é útil: dá pra "sair cedo" da função quando já se sabe a resposta.

### Função sem `return` devolve `undefined`

Não é erro — é só o padrão. Se você não devolve nada, o JavaScript devolve `undefined` por você.

```js
function saudacao(nome) {
  const falarOi = `Oi, ${nome}`
  // sem return aqui
}

const x = saudacao('Fernanda'); 
console.log(x);  // undefined
```

---

## 3. As formas de declarar uma função

### Forma 1: Function Declaration
```js
function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2)}`;
}
```
### Forma 2: Function Expression — função guardada numa variável
```js
const formatarPreco = function(valor) {
  return `R$ ${valor.toFixed(2)}`;
};
```

### Forma 3: Arrow Function — a versão enxuta
```js
const formatarPreco = valor => `R$ ${valor.toFixed(2)}`;
```

>O detalhe de comportamento é o **hoisting**: a `function declaration` (forma 1) é "içada" pro topo do escopo pelo JavaScript antes do código rodar, então você consegue chamá-la numa linha *acima* de onde ela aparece. As formas 2 e 3 não têm isso — chamar antes de declarar dá erro. Na dúvida, declare antes de usar e você nunca vai esbarrar nisso.
---

## 4. Arrow function: a sintaxe inteira

Arrow function é só uma forma mais curta de escrever função. Você vai vê-la o tempo todo — principalmente quando chegar no código assíncrono.

### Um parâmetro — os parênteses são opcionais
```js
const dobrar = numero => numero * 2;
```

### Vários parâmetros — parênteses obrigatórios
```js
const calcularSubtotal = (preco, quantidade) => preco * quantidade;
```

### Nenhum parâmetro — parênteses vazios obrigatórios
```js
const saudacao = () => 'Bem-vindo!';
```

### return implícito vs. explícito

**Quando o corpo é uma expressão só, o `return` é implícito** — você não escreve `return` nem usa chaves:

```js
const dobrar = numero => numero * 2; // devolve n * 2 automaticamente
```

**Quando você abre chaves, o `return` volta a ser obrigatório.** As chaves dizem "aqui vem um bloco de código", e dentro de um bloco o JavaScript não devolve nada sozinho:

```js
const dobrar = numero => {
  const resultado = numero * 2;
  return resultado;
};
```

> Resumindo: **sem chaves, devolve sozinho; com chaves, você precisa escrever `return`.**

---

## 5. Funções chamando funções

Funções viram peças que se encaixam. Uma usa o `return` da outra. É assim que se constrói qualquer coisa grande — em pedacinhos.

```js
function calcularSubtotal(preco, quantidade) {
  return preco * quantidade;
}

function aplicarFrete(subtotal) {
  // Frete grátis quando o subtotal é maior 200
  return subtotal > 200 ? subtotal : subtotal + 19.9;
}

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2)}`;
}

```

**Cada função entrega seu return pra próxima usar:**
```js
const subtotal = calcularSubtotal(80, 2);   // 160
const comFrete = aplicarFrete(subtotal);    // 179.9 (não passou de 200)
const texto    = formatarPreco(comFrete);   // "R$ 179.90"
```
Repara que o `return` de uma vira o argumento da seguinte. Funções pequenas e bem definidas são fáceis de entender e de reaproveitar.

---

## 6. Função que recebe função (callback)

Em JavaScript, **função é um valor** — igual número ou texto. E se é um valor, você pode passar uma função como argumento pra outra função. A função que você passa pra ser chamada lá dentro tem um nome: **callback**.

```js
function processarPedido(pedido, callback) {
  console.log(`Processando pedido ${pedido.id}...`);
  const resultado = `Pedido ${pedido.id} confirmado!`;
  callback(resultado); // chama o callback, passando o resultado
}

// O segundo argumento é uma FUNÇÃO — esse é o callback
processarPedido("#1234", function(mensagem) {
  console.log(mensagem); // "Pedido #1234 confirmado!"
});

// Mesma coisa com arrow function — mais comum de ver:
processarPedido({ id: 8 }, mensagem => console.log(mensagem));
```

A `processarPedido` não sabe o que fazer no final — ela só sabe que, quando terminar, vai chamar `callback` e entregar o resultado. **Quem decide o que acontece no final é quem passou o callback.**

> **Por que isso é importante?** É exatamente assim que o JavaScript lida com coisas que demoram: esperar um cronômetro, baixar dados de um servidor, ler um arquivo. Você diz "faça isso e, *quando terminar*, chame essa função aqui". Esse "quando terminar, chame essa função" é exatamente o funcionamento do `setTimeout`, das `Promises` e, e do `async/await`. Tudo começa aqui, com callback.
