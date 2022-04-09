function adicionarFilme(){
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("nomeFilme").value;
  if(filmeFavorito.endsWith(".jpg")){
    listarFilmesNaTela(filmeFavorito, nomeFilme);
  } 
  else {
    console.error("Filme inválido...") 
  }
  document.getElementById("filme").value = ""
  document.getElementById("nomeFilme").value = ""
}

function listarFilmesNaTela(filme, nome){
  var elementoFilmeFavorito = "<img src = " + filme + "><h2>" + nome + "</h2>";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}