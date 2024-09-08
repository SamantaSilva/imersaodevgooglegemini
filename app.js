function pesquisar() {
  // Obtém a seção HTML onde os resultados serão inseridos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa= document.getElementById("campo-pesquisa").value.toLowerCase();

    if(!campoPesquisa){
      section.innerHTML= "<p>Nada foi encontrado</p>";
      return
    }
   

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";  
  let titulo = "";
  let descricao = "";

  // Itera sobre cada elemento (dado) no array de dados
  for (let dado of dados) {
    // Concatena a string 'resultados' com o HTML formatado para cada resultado
      titulo = dado.titulo.toLocaleLowerCase();
      descricao  = dado.descricao.toLocaleLowerCase();

      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2> <a href="https://www.youtube.com/watch?v=nJBgOdEL3x0" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link}>Clique aqui para saber mais</a>
        </div>
      `;
      
    }
  }
    if(!resultados){
        resultados="<p>Busca não encontrada</p>"

  }    
  // Atribui a string completa de resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;

}

