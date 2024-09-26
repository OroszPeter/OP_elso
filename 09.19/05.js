async function f() {
    
        text = "cica",
        await fetch('https://127.0.0.1.5500/x.txt').then( v => v.text())
        console.log(text);
}

f()