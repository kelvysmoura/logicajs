// ============================================================
// MÓDULO 01 — Desafios Práticos
// ============================================================
//
//  Você foi contratado pra construir o motor por trás de um 
//  app onde as pessoas aprendem programação
//  resolvendo desafios e sobem de faixa, igual artes marciais:
//
//        branca  ->  azul  ->  roxa  ->  preta
//
//  O segredo do projeto: a gente constrói o motor PEÇA POR PEÇA.
//  Cada função que você escrever vai ser REUTILIZADA na próxima.
//  No último desafio, todas as peças se encaixam e o motor roda
//  inteiro. Não pule etapas — se a peça 1 estiver torta, a 10
//  desaba.
//
//  COMO USAR
//  ---------
//  Resolva um desafio por vez. Em cada um há um bloco de teste
//  comentado com o RESULTADO ESPERADO. Descomente, rode com
//  `node desafios.js` e confira se bate.
//
//  Só avance quando o teste do desafio atual
//  passar. As peças seguintes contam com ele funcionando.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 — A moeda do Dojo: XP
// ------------------------------------------------------------
// Todo aluno ganha XP ao resolver desafios. A conta é simples:
//
//     XP = desafios resolvidos  ×  nível de dificuldade  ×  15
//
// Escreva a função `calcularXp(resolvido, nivel)`
// que recebe os dois números e DEVOLVE o total de XP.
//

// SUA SOLUÇÃO:


// Para testar descomente as pŕoximas 3 linhas
// console.log('---------- Desafio 01 ----------')
// console.log(calcularXp(4, 2));   // 120
// console.log(calcularXp(10, 3));  // 450


// ------------------------------------------------------------
// DESAFIO 2 — Mostrando o XP bonito na tela
// ------------------------------------------------------------
// O front quer exibir o XP sempre com o sufixo " XP".
// Em vez de 450, mostrar "450 XP".
//
// Escreva `formatarXp(xp)` como uma ARROW FUNCTION de uma linha,
// usando RETURN IMPLÍCITO (sem chaves, sem escrever return).
// Ela recebe um número e devolve a string formatada.

// SUA SOLUÇÃO:

// Para testar descomente as pŕoximas 3 linhas
// console.log('---------- Desafio 02 ----------')
// console.log(formatarXp(450));  // "450 XP"
// console.log(formatarXp(0));    // "0 XP"



// ------------------------------------------------------------
// DESAFIO 3 — A faixa por nível
// ------------------------------------------------------------
// O XP define a faixa. As regras, da mais alta pra mais baixa:
//
//     1000 XP ou mais ............ "preta"
//      500 a 999 XP .............. "roxa"
//      200 a 499 XP .............. "azul"
//      menos que 200 ............. "branca"
//
// Escreva `definirFaixa(xp)`. Use VÁRIOS `if` com `return`, na
// ordem certa, aproveitando que o return ENCERRA a função assim
// que acerta a faixa (assim você não precisa de "else").

// SUA SOLUÇÃO:

// Para testar descomente as pŕoximas 5 linhas
// console.log('---------- Desafio 03 ----------')
// console.log(definirFaixa(1200));  // "preta"
// console.log(definirFaixa(700));   // "roxa"
// console.log(definirFaixa(300));   // "azul"
// console.log(definirFaixa(50));    // "branca"

// ------------------------------------------------------------
// DESAFIO 4 — O perfil do aluno
// ------------------------------------------------------------
// Agora encaixe as três funções anteriores numa só.
//
// Escreva `perfilDoAluno(desafio, dificuldade)` que:
//   1. calcula o XP usando calcularXp
//   2. descobre a faixa usando definirFaixa
//   3. devolve uma frase montada com formatarXp, no formato:
//          "Faixa <faixa> — <xp> XP"

// SUA SOLUÇÃO:

// Para testar descomente as pŕoximas 3 linhas
// console.log('---------- Desafio 04 ----------')
// console.log(perfilDoNinja(10, 3));  // "Faixa azul — 450 XP"
// console.log(perfilDoNinja(20, 4));  // "Faixa preta — 1200 XP"


// ------------------------------------------------------------
// DESAFIO 5 — A turma inteira de uma vez (callback)
// ------------------------------------------------------------
// O curso tem uma turma. Você quer aplicar uma transformação a
// CADA aluno sem se prender a uma transformação específica.
//
// Escreva `aplicarEmTodos(alunos, callback)` que:
//   - recebe um array de alunos e uma função (o callback)
//   - aplica o callback a cada aluno
//   - DEVOLVE um novo array com os resultados
//
// (Faça o loop na mão, com for...of e push. Sem .map() aqui —
//  a ideia é entender o que o .map faz por baixo.)

const turma = [
    { nome: 'Aiko', desafios: 10, dificuldade: 3 },
    { nome: 'Bento', desafios: 4, dificuldade: 2 },
    { nome: 'Caio', desafios: 20, dificuldade: 4 },
];

// SUA SOLUÇÃO:

// Para testar descomente as pŕoximas 5 linhas
// console.log('---------- Desafio 05 ----------')
// console.log(aplicarEmTodos(turma, n => calcularXp(n.desafios, n.dificuldade))); 
// // [ 450, 120, 1200 ]
// console.log(aplicarEmTodos(turma, n => n.nome));
// // [ 'Aiko', 'Bento', 'Caio' ]


// ------------------------------------------------------------
// DESAFIO 6 — Só os fortes (callback que filtra)
// ------------------------------------------------------------
// O professor quer ver só os alunos que já passaram de 500 XP.
//
// Escreva `filtrarAlunos(alunos, callback)`
// callback recebe um aluno e devolve true ou false.
// A função devolve um novo array só com os alunos que passaram
// no callback.
//
// Depois, use ela com um callback que aproveita o calcularXp do
// Desafio 1 pra manter só quem tem 500 XP ou mais.

// SUA SOLUÇÃO:


// Para testar descomente as pŕoximas 4 linhas
// console.log('---------- Desafio 06 ----------')
// const fortes = filtrarAlunos(turma, n => calcularXp(n.desafios, n.dificuldade) >= 500);
// console.log(fortes.length);                 // 1
// console.log(fortes.map(n => n.nome));       // [ 'Caio' ]


// ------------------------------------------------------------
// DESAFIO 7 — Tentando subir de faixa (sucesso e erro)
// ------------------------------------------------------------
// Quando um ninja tenta avançar, dá certo (500 XP+) ou não.
// Em vez de a função decidir o que mostrar, ela vai AVISAR quem
// chamou, através de DOIS callbacks: um pro sucesso, um pra falha.
//
// Escreva `tentarSubirDeFaixa(xp, callbackSucesso, callbackFalha)`:
//   - se xp >= 500: chama callbackSucesso passando a faixa
//     (use o definirFaixa do Desafio 3!)
//   - senão: chama callbackFalha passando QUANTO falta pra chegar a 500
//
// Essa ideia de "sucesso e falha como callbacks" é exatamente o
// que você vai reencontrar nas Promises mais pra frente. 😉

// SUA SOLUÇÃO:


// Para testar descomente as pŕoximas 14 linhas
// console.log('---------- Desafio 07 ----------')
// tentarSubirDeFaixa(
//   700,
//   faixa => console.log('Parabéns! Agora você é faixa ' + faixa),
//   falta => console.log('Faltam ' + falta + ' XP')
// );
// // "Parabéns! Agora você é faixa roxa"
//
// tentarSubirDeFaixa(
//   450,
//   faixa => console.log('Parabéns! Agora você é faixa ' + faixa),
//   falta => console.log('Faltam ' + falta + ' XP')
// );
// // "Faltam 50 XP"


// ------------------------------------------------------------
// DESAFIO 8 — A soma da jornada (recursão)
// ------------------------------------------------------------
// No curso, completar o nível N rende N × 100 de XP.
// O "XP total da jornada" até o nível N é a soma do XP de TODOS
// os níveis, do 1 até o N.
//
//   Ex.: jornada até o nível 3 = (1×100) + (2×100) + (3×100)
//                              =   100   +   200   +   300  = 600
//
// Escreva `xpTotalDaJornada(nivel)` usando RECURSÃO (a função
// chama a si mesma). Pense no caso que faz a recursão PARAR:
// qual é o nível em que não há mais nada pra somar?

// SUA SOLUÇÃO:


// Para testar descomente as pŕoximas 3 linhas
// console.log('---------- Desafio 08 ----------')
// console.log(xpTotalDaJornada(3));  // 600
// console.log(xpTotalDaJornada(5));  // 1500


// ------------------------------------------------------------
// DESAFIO 9 — Evento especial (função que devolve função)
// ------------------------------------------------------------
// Nos fins de semana o Curso faz eventos: "XP em dobro!",
// "XP triplo!", etc. Em vez de criar uma função pra cada caso,
// você cria uma FÁBRICA: uma função que RECEBE o fator e
// DEVOLVE uma nova função pronta pra multiplicar XP.
//
// Escreva `criarMultiplicadorDeEvento(fator)` que devolve uma
// função. Essa função recebe um xp e devolve xp × fator.

// SUA SOLUÇÃO:


// Para testar descomente as pŕoximas 5 linhas
// console.log('---------- Desafio 09 ----------')
// const dobro  = criarMultiplicadorDeEvento(2);
// const triplo = criarMultiplicadorDeEvento(3);
// console.log(dobro(450));   // 900
// console.log(triplo(450));  // 1350


// ------------------------------------------------------------
// DESAFIO 10 — Todos os desafios (integrador)
// ------------------------------------------------------------
// Hora de juntar tudo. Você vai processar a semana do
// Curso de uma vez, REUTILIZANDO quase tudo que construiu.
//
// Escreva `processarSemanaDoCurso(alunos, multiplicador)` que:
//
//   1. Para cada aluno (use aplicarEmTodos, do Desafio 5):
//        - calcula o XP base (calcularXp, Desafio 1)
//        - aplica o multiplicador do evento (Desafio 9) sobre esse XP
//        - descobre a faixa com esse XP final (definirFaixa, Desafio 3)
//        - monta um objeto:
//            { nome, xp, faixa, resumo }
//          onde `resumo` é a string:
//            "<nome>: Faixa <faixa> — <xp> XP"   (use formatarXp!)
//
//   2. Conta quantos alunos terminaram a semana na faixa "preta"
//      (use filtrarAlunos, do Desafio 6).
//
//   3. Devolve um objeto:
//        { relatorio, totalFaixaPreta }
//      onde `relatorio` é o array de objetos do passo 1.
//

// SUA SOLUÇÃO:


// Para testar descomente as pŕoximas 11 linhas
// console.log('---------- Desafio 10 ----------')
// const eventoFimDeSemana = criarMultiplicadorDeEvento(2);
// const resultado = processarSemanaDoDojo(turma, eventoFimDeSemana);
//
// resultado.relatorio.forEach(r => console.log(r.resumo));
// // Aiko: Faixa roxa — 900 XP
// // Bento: Faixa azul — 240 XP
// // Caio: Faixa preta — 2400 XP
//
// console.log('Subiram pra preta:', resultado.totalFaixaPreta);
// // Subiram pra preta: 1
