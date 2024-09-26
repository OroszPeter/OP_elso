
myfetch = new Promise((a, b) =>{
    if (Math.random() > .1) {
        setTimeout(a, 1000, a(Math.round(Math.random()*100))) // válasz
            } else {
        b("Hiba") //hiba
    }
})
myfetch.then(console.log).catch(console.error)

