let bibliotecaAberta = true;
let totalExemplares = 12;
let emprestados = 8;
const MAX_POR_PESSOA = 2;

function iniciarSistema() {
  let rodando = true;

  while (rodando) {
    let disponiveis = totalExemplares - emprestados;

    let entrada = prompt(
      `=== CONTROLE DE ESTOQUE ===\n\n` +
        `Status: ${bibliotecaAberta ? "ABERTA" : "FECHADA"}\n` +
        `Exemplates disponiveis: ${disponiveis}\n\n` +
        `Digite a QUANTIDADE de exemplates que deseja (Máx ${MAX_POR_PESSOA}):\n\n` +
        `(Digite 'sair' para encerrar ou 'fechar' para testar a biblioteca fechada)`,
    );

    if (entrada === null || entrada.toLowerCase() === "sair") {
      alert("Sistema encerrado.");
      rodando = false;
      break;
    }

    if (
      entrada.toLowerCase() === "fechar" ||
      entrada.toLowerCase() === "abrir"
    ) {
      bibliotecaAberta = !bibliotecaAberta;
      alert(BibliotecaAberta ? "Biblioteca aberta." : "Biblioteca fechada.");
      break;
    }

    if (!bibliotecaAberta) {
      alert("A biblioteca está fechada. Não é possível realizar empréstimos.");
      continue;
    }

    let quantidade = parseInt(entrada);

    if (isNaN(quantidade) || quantidade < 1) {
      alert(
        "Entrada inválida ou menor que 1. Por favor, digite um número válido.",
      );
    } else if (quantidade > MAX_POR_PESSOA) {
      Alert(`Você não pode pegar mais de ${MAX_POR_PESSOA} exemplares.`);
    } else if (quantidade > disponiveis) {
      alert(
        `Não há exemplares suficientes disponíveis. Apenas ${disponiveis} disponíveis.`,
      );
    } else if (quantidade === disponiveis) {
      emprestados += quantidade;
      alert(
        `Você pegou todos os exemplares disponíveis. Agora não há mais exemplares disponíveis.`,
      );
    } else {
      emprestados += quantidade;
      alert(
        `Você pegou ${quantidade} exemplares. Agora há ${totalExemplares - emprestados} exemplares disponíveis.`,
      );
    }
  }
}

iniciarSistema();
