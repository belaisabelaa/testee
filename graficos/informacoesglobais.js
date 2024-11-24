const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarinformacoesglobais() {
 const res = await fetch(url);
 const dados = res.json();
 console.log(dados.tempo_medio);
 const paragrafo = document.createElement('p')
 paragrafo.classList.add('grafico-container_texto')

 paragrafo.innerHTML = `você sabia que o mundo tem <span>${dados.total_pessoas_mundo }</span> de pessoas e aproximadamente <span>&{dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`

 const container = document.getElementById(`graficos-container`)
 container.appendChild(paragrafo)
}
