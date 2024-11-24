{
    "total_pessoas_conectadas"; 5.04e9,
    "tempo_medio"; 2.38,
    "total_pessoas_mundo"; 7.888e9
  }


async function visualizarinformacoesglobais() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas) /1e9
    const pessoasNoMundo = (dados.total_pessoas_mundo) /1e9
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML = `você sabia que o mundo tem <span>${pessoasNoMundo}</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em media <span>${horas}</span> horas conectadas. Isso significa que aproximadamente ${porcentagemConectada} % e pessoas estão conectadas em alguma rede SpeechRecognitionAlternative.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
