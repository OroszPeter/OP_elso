const gyümölcsök = ['Alma', 'Banán', 'Barack', 'Dinnye', 'Körte']
function init() {
    document.getElementById("body").innerHTML = '<h1>Gyümölcsök</h1>'+ gyümölcsök.map( v=>
        `<div id='${v}' onclick="f('${v}')">${v}</div>`
    ).join("")
}

const f = console.log   