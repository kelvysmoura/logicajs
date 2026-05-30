// ============================================================
// MÓDULO 02 — Desafios Práticos: A Estação Meteorológica
// ============================================================
//
//  A HISTÓRIA
//  ----------
//  Você vai programar o cérebro de uma ESTAÇÃO METEOROLÓGICA.
//  Ela tem sensores espalhados que medem temperatura — mas
//  sensores do mundo real NÃO respondem na hora: levam um tempo
//  pra devolver a leitura. É o cenário perfeito pra treinar
//  código assíncrono.
//
//  A gente vai evoluir exatamente como a tecnologia evoluiu:
//        callback  ->  Promise (.then)  ->  async/await
//  Cada desafio reaproveita os anteriores. No fim, você terá um
//  painel completo lendo vários sensores e tratando erros.
//
//  COMO USAR
//  ---------
//  Resolva um desafio por vez. Cada um tem um teste comentado
//  com o RESULTADO ESPERADO. Descomente, rode com
//  `node async-desafios.js` e confira.
//
//  ATENÇÃO: como é assíncrono, se você descomentar VÁRIOS testes
//  ao mesmo tempo as saídas vão se misturar (cada sensor tem seu
//  tempo). Teste UM desafio de cada vez pra enxergar limpo.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 — O primeiro sensor (callback + setTimeout)
// ------------------------------------------------------------
// Um sensor leva 100ms pra responder. Quando responder, ele
// devolve a temperatura 23.
//
// Escreva `lerSensor(callback)` que:
//   - espera 100ms (use setTimeout)
//   - depois chama o `callback` passando o valor 23
//
// Lembra do módulo passado? Quem decide o que fazer com a
// leitura é quem passou o callback. A função só "avisa quando
// estiver pronto".

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 01 ----------');
// lerSensor(temp => console.log('Temperatura:', temp));
// // depois de 100ms: Temperatura: 23


// ------------------------------------------------------------
// DESAFIO 2 — Sensor configurável (tempo e valor como parâmetro)
// ------------------------------------------------------------
// Generalize: agora o sensor recebe QUAL valor devolver e QUANTO
// tempo demorar.
//
// Escreva `lerSensorComTempo(valor, ms, callback)` que espera
// `ms` milissegundos e então chama o callback passando `valor`.
//
// Prove pra você mesmo que o programa NÃO trava esperando:
// coloque um console.log logo depois da chamada e veja ele
// aparecer ANTES da leitura.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 02 ----------');
// lerSensorComTempo(18, 50, t => console.log('Sensor leu:', t));
// console.log('Essa linha aparece ANTES da leitura!');
// // "Essa linha aparece ANTES da leitura!"
// // depois de 50ms: "Sensor leu: 18"


// ------------------------------------------------------------
// DESAFIO 3 — Monitoramento contínuo (setInterval + clearInterval)
// ------------------------------------------------------------
// A estação precisa monitorar em ciclos. Faça uma rotina que
// imprime uma leitura a cada 20ms, MAS para sozinha depois de 3
// leituras.
//
// Escreva o código que:
//   - usa setInterval pra contar "Leitura 1", "Leitura 2"...
//   - quando chegar na 3ª leitura, usa clearInterval pra parar
//     e imprime "Monitoramento encerrado"
//
// Regra de ouro: todo setInterval precisa de um plano de parada.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 03 ----------');
// (cole/rode sua solução; saída esperada:)
// // Leitura 1
// // Leitura 2
// // Leitura 3
// // Monitoramento encerrado


// ------------------------------------------------------------
// DESAFIO 4 — De callback pra Promise
// ------------------------------------------------------------
// Callbacks funcionam, mas vamos modernizar. Em vez de receber
// um callback, o sensor vai DEVOLVER uma Promise.
//
// Escreva `lerSensorPromise(valor)` que devolve uma Promise.
// Dentro dela, use setTimeout de 30ms e, ao final, chame
// `resolve(valor)`.
//
// `resolve` é o "deu certo, aqui está o valor". É o mesmo
// callback de sucesso de antes — só que agora com nome oficial.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 04 ----------');
// lerSensorPromise(25).then(t => console.log('Promise leu:', t));
// // depois de 30ms: "Promise leu: 25"


// ------------------------------------------------------------
// DESAFIO 5 — Sensor que pode falhar (resolve e reject)
// ------------------------------------------------------------
// Sensores quebram. Uma leitura fora da faixa física
// (-50°C a 60°C) deve ser tratada como ERRO.
//
// Escreva `lerSensorSeguro(valor)` que devolve uma Promise:
//   - após 30ms, se `valor` for menor que -50 OU maior que 60:
//       reject('Leitura inválida: ' + valor)
//   - caso contrário:
//       resolve(valor)
//
// `reject` é o "deu errado" — o par do `resolve`. Quem consome
// trata com .catch.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 05 ----------');
// lerSensorSeguro(25).then(t => console.log('OK:', t)).catch(e => console.log('Erro:', e));
// lerSensorSeguro(999).then(t => console.log('OK:', t)).catch(e => console.log('Erro:', e));
// // "OK: 25"
// // "Erro: Leitura inválida: 999"


// ------------------------------------------------------------
// DESAFIO 6 — Linha de montagem (encadeando .then)
// ------------------------------------------------------------
// Agora vamos transformar a leitura em etapas: ler -> converter
// pra Fahrenheit -> formatar pra texto.
//
// Primeiro, escreva DUAS funções auxiliares:
//   - `paraFahrenheit(celsius)`: devolve uma Promise que, após
//      20ms, resolve com  celsius * 9/5 + 32
//   - `formatarTemp(f)`: função normal que devolve `${f.toFixed(1)}°F`
//
// Depois, ENCADEIE com .then, reaproveitando o lerSensorPromise
// do Desafio 4:
//   lerSensorPromise(20) -> paraFahrenheit -> formatarTemp -> imprimir
//
// Cada .then entrega seu resultado pro próximo. (É o mesmo
// "return de uma função vira entrada da outra" do módulo 01,
// agora no mundo assíncrono.)

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 06 ----------');
// lerSensorPromise(20)
//   .then(c => paraFahrenheit(c))
//   .then(f => formatarTemp(f))
//   .then(texto => console.log('Resultado:', texto));
// // "Resultado: 68.0°F"


// ------------------------------------------------------------
// DESAFIO 7 — A mesma coisa, mas com async/await
// ------------------------------------------------------------
// Pegue a linha de montagem do Desafio 6 e reescreva usando
// async/await — sem nenhum .then.
//
// Escreva `relatorioTemp(celsius)` como uma função `async` que:
//   - usa await pra ler (lerSensorPromise)
//   - usa await pra converter (paraFahrenheit)
//   - usa formatarTemp e RETORNA o texto final
//
// Repare como o código fica parecido com algo síncrono, lido de
// cima pra baixo. Essa é a mágica do await.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 07 ----------');
// relatorioTemp(30).then(r => console.log('Relatório:', r));
// // "Relatório: 86.0°F"


// ------------------------------------------------------------
// DESAFIO 8 — Tratando erro com try/catch
// ------------------------------------------------------------
// Com async/await, o erro de uma Promise rejeitada é capturado
// com try/catch (no lugar do .catch).
//
// Escreva `lerComTratamento(valor)` como função `async` que:
//   - dentro de um try: faz await em lerSensorSeguro(valor) e
//     RETORNA 'Sucesso: ' + a leitura
//   - dentro de um catch: RETORNA 'Falha tratada: ' + o erro
//
// Reaproveite o lerSensorSeguro do Desafio 5.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 08 ----------');
// lerComTratamento(25).then(r => console.log(r));
// lerComTratamento(200).then(r => console.log(r));
// // "Sucesso: 25"
// // "Falha tratada: Leitura inválida: 200"


// ------------------------------------------------------------
// DESAFIO 9 — Várias estações ao mesmo tempo (Promise.all)
// ------------------------------------------------------------
// A central tem várias estações. Você quer ler TODAS e tirar a
// média — esperando todas terminarem.
//
// Escreva `lerVariasEstacoes(valores)` como função `async` que:
//   - transforma cada valor numa Promise com lerSensorPromise
//     (dica: array de promises)
//   - usa `await Promise.all(...)` pra esperar todas
//   - calcula e RETORNA a média das leituras
//
// Promise.all é o "espere todo mundo ficar pronto e me dê os
// resultados juntos, em ordem".

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 09 ----------');
// lerVariasEstacoes([20, 22, 24]).then(media => console.log('Média:', media));
// // "Média: 22"


// ------------------------------------------------------------
// DESAFIO 10 — O painel completo (integrador)
// ------------------------------------------------------------
// Hora de montar o painel da estação inteira, juntando tudo.
//
// Escreva `painelDaEstacao(valores)` como função `async` que,
// para CADA valor da lista (use um for...of com await):
//   - tenta ler com lerSensorSeguro (Desafio 5)
//   - se der certo: converte pra Fahrenheit (Desafio 6) e guarda
//       um objeto { celsius, texto, status: 'ok' }
//   - se der erro (try/catch): guarda
//       { celsius: valor, texto: null, status: 'erro' }
//
// No fim, a função deve:
//   - contar quantas leituras foram válidas (status 'ok')
//   - calcular a média em Celsius SÓ das válidas
//   - RETORNAR um objeto:
//       { relatorio, totalValidas, mediaCelsius }
//
// Olha quantas peças trabalham juntas aqui: setTimeout (lá no
// fundo das Promises), resolve/reject, await, try/catch e a
// lógica de filtrar e somar. Se as anteriores estiverem certas,
// o painel liga.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 10 ----------');
// painelDaEstacao([20, 999, 25, 30]).then(resultado => {
//   resultado.relatorio.forEach(r => console.log(' ', r.status, r.texto ?? '(inválida)'));
//   console.log('Válidas:', resultado.totalValidas);
//   console.log('Média°C:', resultado.mediaCelsius);
// });
// // Saída esperada:
// //   ok 68.0°F
// //   erro (inválida)
// //   ok 77.0°F
// //   ok 86.0°F
// // Válidas: 3
// // Média°C: 25


// ============================================================
//  PARTE 2 — 100% async/await: A Biblioteca Digital
// ============================================================
//
//  NOVO CENÁRIO
//  ------------
//  Agora você cuida do sistema de uma BIBLIOTECA DIGITAL. As
//  buscas batem num "banco de dados" que sempre demora um
//  pouquinho — então TUDO aqui é async/await. Esqueça .then:
//  destes 10 desafios em diante, só usamos async, await e
//  try/catch.
//
//  Função auxiliar que SIMULA o banco demorando pra responder.
//  Use ela à vontade nos desafios (ela já está pronta):

function consultarBanco(valor, ms) {
  return new Promise(resolve => setTimeout(() => resolve(valor), ms));
}


// ------------------------------------------------------------
// DESAFIO 11 — Sua primeira função async
// ------------------------------------------------------------
// Escreva `buscarTitulo(id)` como uma função `async` que
// simplesmente RETORNA a string 'Livro #' + id.
//
// Detalhe importante: mesmo retornando uma string simples, por
// ser async ela devolve uma Promise — então quem chama precisa
// usar await ou .then pra pegar o valor.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 11 ----------');
// buscarTitulo(7).then(t => console.log(t));
// // "Livro #7"


// ------------------------------------------------------------
// DESAFIO 12 — Esperando o banco (await)
// ------------------------------------------------------------
// Escreva `buscarAutor(id)` como função `async` que:
//   - usa await em consultarBanco('Autor do livro ' + id, 30)
//   - RETORNA o que veio do banco
//
// Aqui o await mostra seu valor: você escreve como se fosse
// código normal, mas por baixo está esperando o banco responder.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 12 ----------');
// buscarAutor(3).then(a => console.log(a));
// // "Autor do livro 3"


// ------------------------------------------------------------
// DESAFIO 13 — Empréstimo com try/catch
// ------------------------------------------------------------
// Escreva `emprestar(disponivel)` como função `async` que:
//   - dentro de um try: se `disponivel` for false, dê
//       throw 'Livro indisponível'
//     senão, faça await em consultarBanco('Empréstimo confirmado', 20)
//     e RETORNE esse valor
//   - dentro de um catch: RETORNE 'Recusado: ' + o erro

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 13 ----------');
// emprestar(true).then(r => console.log(r));
// emprestar(false).then(r => console.log(r));
// // "Empréstimo confirmado"
// // "Recusado: Livro indisponível"


// ------------------------------------------------------------
// DESAFIO 14 — Duas esperas em sequência
// ------------------------------------------------------------
// Escreva `fichaCompleta()` como função `async` que:
//   - faz await em consultarBanco('Dom Casmurro', 20)   -> título
//   - faz await em consultarBanco('Machado de Assis', 20) -> autor
//   - RETORNA a string `${titulo} — ${autor}`
//
// Os dois await acontecem um depois do outro. Repare como o
// código se lê de cima pra baixo, igual receita.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 14 ----------');
// fichaCompleta().then(f => console.log(f));
// // "Dom Casmurro — Machado de Assis"


// ------------------------------------------------------------
// DESAFIO 15 — Buscar vários ao mesmo tempo (Promise.all)
// ------------------------------------------------------------
// Escreva `buscarVarios(ids)` como função `async` que:
//   - transforma cada id numa busca: consultarBanco('Livro ' + id, 20)
//     (dica: use .map pra montar um array de Promises)
//   - usa `await Promise.all(...)` pra esperar todas
//   - RETORNA o array com os resultados
//
// Diferente do Desafio 14 (um await após o outro), aqui as
// buscas disparam JUNTAS e você espera todas de uma vez.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 15 ----------');
// buscarVarios([1, 2, 3]).then(l => console.log(l));
// // [ 'Livro 1', 'Livro 2', 'Livro 3' ]


// ------------------------------------------------------------
// DESAFIO 16 — Somando em sequência (await dentro do for)
// ------------------------------------------------------------
// Escreva `contarPaginas(livros)` como função `async` que recebe
// um array de números (páginas) e:
//   - percorre com for...of
//   - para cada item, faz await em consultarBanco(paginas, 10)
//   - acumula num total
//   - RETORNA o total
//
// Aqui o await está DENTRO do loop: cada volta espera a anterior.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 16 ----------');
// contarPaginas([100, 200, 50]).then(t => console.log('total páginas:', t));
// // "total páginas: 350"


// ------------------------------------------------------------
// DESAFIO 17 — Cache: às vezes nem precisa esperar
// ------------------------------------------------------------
// Escreva `buscarComCache(id, cache)` como função `async` que:
//   - se `cache[id]` já existir: RETORNA 'cache: ' + cache[id]
//     (repare: nesse caso nem chega a esperar o banco!)
//   - senão: faz await em consultarBanco('buscado-' + id, 20),
//     salva o resultado em cache[id], e RETORNA 'banco: ' + valor
//
// Mostra que uma função async pode ter um caminho rápido (sem
// await nenhum) e um caminho lento (com await).

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 17 ----------');
// const cache = {};
// buscarComCache(5, cache)
//   .then(r => { console.log(r); return buscarComCache(5, cache); })
//   .then(r => console.log(r));
// // "banco: buscado-5"   (primeira vez, foi ao banco)
// // "cache: buscado-5"   (segunda vez, veio do cache)


// ------------------------------------------------------------
// DESAFIO 18 — Multa por atraso (try/catch dentro do loop)
// ------------------------------------------------------------
// Escreva `validarDevolucoes(diasAtraso)` como função `async`
// que recebe um array de números (dias de atraso de cada livro):
//   - percorre com for...of
//   - para cada `dias`, dentro de um try: se `dias > 0`, dê
//       throw dias
//     senão, adicione 'ok' ao array de resultados
//   - no catch (recebe o valor lançado em `atraso`): adicione
//       'multa:' + (atraso * 2) ao array
//   - RETORNA o array de resultados
//
// Lição: um erro tratado DENTRO do loop não interrompe os
// demais itens — cada um segue seu caminho.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 18 ----------');
// validarDevolucoes([0, 3, 0, 5]).then(r => console.log(r));
// // [ 'ok', 'multa:6', 'ok', 'multa:10' ]


// ------------------------------------------------------------
// DESAFIO 19 — Média das avaliações (Promise.all + cálculo)
// ------------------------------------------------------------
// Escreva `avaliacaoMedia(notas)` como função `async` que:
//   - busca cada nota com consultarBanco(n, 15) — todas juntas,
//     via Promise.all (use .map pra montar o array de Promises)
//   - soma os resultados
//   - RETORNA a média (soma dividida pela quantidade)

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 19 ----------');
// avaliacaoMedia([4, 5, 3]).then(m => console.log('média:', m));
// // "média: 4"


// ------------------------------------------------------------
// DESAFIO 20 — O relatório da biblioteca (integrador)
// ------------------------------------------------------------
// Junte tudo. Escreva `relatorioBiblioteca(pedidos)` como função
// `async`. Cada `pedido` é um objeto { titulo, disponivel }.
//
// Para CADA pedido (use for...of com await):
//   - dentro de um try: se `pedido.disponivel` for false, dê
//       throw 'indisponível'
//     senão, faça await em consultarBanco(pedido.titulo, 10) e
//     guarde um objeto { titulo, status: 'emprestado' }
//   - no catch: guarde { titulo: pedido.titulo, status: 'recusado' }
//
// No fim, a função deve RETORNAR um objeto:
//   {
//     processados,        // o array de objetos montado acima
//     totalEmprestados,   // quantos ficaram com status 'emprestado'
//     totalRecusados,     // quantos ficaram com status 'recusado'
//   }
//
// Esse desafio usa quase tudo da Parte 2: async, await, try/catch
// dentro de loop, e a lógica de filtrar/contar do módulo 01.

// SUA SOLUÇÃO:


// Para testar, descomente:
// console.log('---------- Desafio 20 ----------');
// const pedidos = [
//   { titulo: 'O Cortiço', disponivel: true },
//   { titulo: 'Iracema', disponivel: false },
//   { titulo: 'Memórias Póstumas', disponivel: true },
// ];
// relatorioBiblioteca(pedidos).then(res => {
//   res.processados.forEach(p => console.log(' ', p.status, '-', p.titulo));
//   console.log('Emprestados:', res.totalEmprestados);
//   console.log('Recusados:', res.totalRecusados);
// });
// // Saída esperada:
// //   emprestado - O Cortiço
// //   recusado - Iracema
// //   emprestado - Memórias Póstumas
// // Emprestados: 2
// // Recusados: 1


// ============================================================
//  FIM. Você partiu de um callback com setTimeout e chegou num
//  painel completo com async/await, Promise.all e tratamento de
//  erro. É exatamente o caminho que o JavaScript percorreu — e
//  agora ele mora na sua cabeça. 🌦️📚
// ============================================================
