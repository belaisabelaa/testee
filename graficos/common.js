const getComputedStyle = (variavel) => {
    return getComputedStyle (document.body). getPropertyValue(variavel)
}

const tickconfig = {
    color:getComputedStyle('--primary-color')
    size : 16,
    family: getComputedStyle('--font')
}
export {getComputedStyle, tickconfig}

