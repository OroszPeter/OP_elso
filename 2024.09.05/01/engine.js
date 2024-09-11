const állatok = ['Cica', 'Kutya', 'Malac', 'Csacsi', 'Ló', 'Szamár']
function init() {
    document.getElementById("body").innerHTML = állatok.map( v=>
        `<div onclick="f('${v}')">${v}</div>`
    ).join("")
}

function f(a) {
    console.log(a);   
}

