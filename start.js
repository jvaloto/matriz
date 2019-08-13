function start(){
    let input = [1, 2];

    console.table(input);

    let pesos = new Matriz(2, 2);

    pesos.print();

    let hidden = pesos.calc(input);

    console.log(hidden);
}