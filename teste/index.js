// TODO: Crie as variáveis titulo, descricao e dataVencimento para guardar as informações das tarefas:
let titulo;
let descricao;
let dataVencimento;

// Obtém o titulo e a descricao a partir da entrada do console  
titulo = gets();
descricao = gets();

// TODO: Crie uma estrutura condicional 'if/else' para verificar se a descrição da tarefa excede 50 caracteres.
const caracteres = descricao.length
if (caracteres > 50) {
  console.log("Descricao ultrapassa limite de caracteres.");
} else {

 // TODO: Imprima a descricao e a data de vencimento como nos exemplos da tabela:         
  print(`${descricao} ate ${dataVencimento}`);
}