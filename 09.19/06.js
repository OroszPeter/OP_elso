function f(a, b, g) {
    var c = a + b
    g(a+b)
}
f(3, 4, v =>{
    f(v, 3, console.log)
})