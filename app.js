const colorBtn = document.getElementById('color-btn')

colorBtn.addEventListener('click', getColor)

function getColor(){
    const selectedColor = document.getElementById('color-selector').value
    let newSelectedColor = selectedColor.slice(1,selectedColor.length)
    let selectedScheme = document.getElementById('scheme-selector').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${newSelectedColor}&mode=${selectedScheme}&count=5`)
        .then(res => res.json())
        .then(data => extractColor(data))
}

function extractColor(data){
    const colors = data.colors
    let htmlText = ""
    colors.map(color => {
        htmlText += `<div style = "background-color: ${color.hex.value}"><p class='hexcode'>${color.hex.value}</p></div>`
    })
    renderColors(htmlText)
}

function renderColors(colors){
    document.getElementById('color-display').innerHTML  = colors
}