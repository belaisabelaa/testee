const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarinformacoesglobais() {
 const res = await fetch(url);
 const dados = res.json();
 console.log(dados.tempo_medio);
 const paragrafo = document.createElement('p')
 paragrafo.classList.add('grafico-container_texto')
 paragrafo.innerHTML = `você sabia que o mundo tem ${dados.total_pessoas_mundo } de pessoas e aproximadamente &{dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio}  horas conectadas.`

 const container = document.getElementById(`graficos-container`)
 container.appendChild(paragrafo)
}
