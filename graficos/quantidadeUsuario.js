import { getComputedStyle, tickconfig} from "./common.js"

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
            type: 'bar',
            market:{
            color: getComputedStyle(document.body).getPropertyValue('#CDC1FF')
            }
                   
        }
    ]
    const layout = {
        plot_bgcolor: getComputedStyle('--bg-color')
        paper_bgcolor: getComputedStyle('--bg-color')
        title: {
            text: 'Redes sociais com mais usuários do mundo'
            x:0
            font: {
                color:getComputedStyle('--primary-color'),
                family: getComputedStyle('--font'),
                size: 30
            }
        },
        xaxis: {
            tickconfig: {
                text:'nome das redes sociais',
                font: {
                    color: getComputedStyle('--secundary-color')

                }
            }

        },
        title: {

        }
        yaxis:{
            tickconfig: {
                text: 'bilhões de usuários ativos',
                font: {
                    color: getcss('--secundary-color')
                }
            }

        }
    }
    const graficos = document.createElement('div')
    graficos.className = 'grafico'
    document.getElementById('graficos-container').appendChild(graficos)
    Plotly.newPlot(grafico, data, layout)
}