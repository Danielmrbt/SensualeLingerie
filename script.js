
async function carregarPagina(pagina) {
  const resposta = await fetch(`paginas/${pagina}.html`);
  if (resposta.ok) {
    const html = await resposta.text();
    document.getElementById('conteudo').innerHTML = html;
  } else {
    document.getElementById('conteudo').innerHTML = '<p>Página não encontrada.</p>';
  }
}

// Carrega a home ao abrir o site
carregarPagina('home');
