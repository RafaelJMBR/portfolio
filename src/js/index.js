// Variáveis para selecionar o Botão Mostrar Mais e os Projetos Inativos
// usando o 'const' para as variáveis que não serão modificadas

const buttonMostrarProjetos = document.querySelector('.btn-mostrar-projetos')
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

// Código para ativar os projetos escondidos ao apertar o Botão Mostrar Mais, e esconder o botão
buttonMostrarProjetos.addEventListener('click', () => {
  mostrarMaisProjetos()
  esconderBotao()
})

// Fatoração da Função para colocar a Classe 'Ativo' nos projetos escondidos
function mostrarMaisProjetos() {
  projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo')
  })
}

// Fatoração da Função para esconder o Botão adicionando a Classe 'Remover'
function esconderBotao() {
  buttonMostrarProjetos.classList.add('remover')
}
