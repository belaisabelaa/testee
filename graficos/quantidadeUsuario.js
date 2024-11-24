{
    "Facebook"; 3049,
    "Youtube"; 2491,
    "WhatsApp"; 2000,
    "Instagram"; 2000,
    "Tiktok"; 1562,
    "WeChat";1336
}

async function quantidadeusuario() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomedasredes = Object.keys(dados)
    const quantidadeusuario = Object.values(dados)
    const data = [
        {
            x: nomedasredes,
            y: quantidadeusuario,
            type: 'bar'
        }
    ]
    const graficos = document.createElement('div')
    graficos.className = 'grafico'
    document.getElementById('graficos-container').appendChild(graficos)
    Plotly.newPlot(grafico, data)
}