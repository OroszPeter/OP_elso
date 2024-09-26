async function myfetch() {
    return new Promise((a, b) =>{
        if (Math.random() > .4) {
            setTimeout(a, 1000, a(Math.round(Math.random()*100))) // válasz
                } else {
            setTimeout(b, 500, "Hiba") //hiba
        }
    })
}

async function f() {
    a = 5, b = "Még nincs hiba."
    try {
        a = await myfetch()
        console.log(a)
    } catch(e) {
        console.error(e)   
    }
}

f()
