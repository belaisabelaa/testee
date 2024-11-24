const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarinformacoesglobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas) /1e9
    const pessoasNoMundo = (dados.total_pessoas_mundo) /1e9

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML = `você sabia que o mundo tem <span>${pessoasNoMundo}</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões </span> estão conectadas em alguma rede social e passam em media <span>${dados.tempo_medio}</span> horas conectadas.`
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

{
    "total_pessoas_conectadas"; 5.04e9,
    "tempo_medio";2.38,
    "total_pessoas_mundo"; 7.888e9
}
