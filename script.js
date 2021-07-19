
let fib = (nam, a = 1, b = 0, rez = 0) => {
    nam <= 0 ? 1 :
        document.write(`${rez} `)
    rez = a + b;
    a = b;
    b = rez;
    return rez + fib(nam - 1, a, b, rez);
}
fib(prompt('Введіть число'));