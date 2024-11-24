const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarinformacoesglobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML = `você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas que aproximadamente ${dados.total_pessoas_cpnectadas} estão conectadas em alguma rede social r pssam em media ${dados.tempo_medio} horas conectadas.`
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

{
    "total_pessoas_conectadas"; 5.04e9,
    "tempo_medio";2.38,
    "total_pessoas_mundo"; 7.888e9
}
