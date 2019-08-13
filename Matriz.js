class Matriz{

    constructor(lines, columns){
        this.lines = lines;
        this.columns = columns;
        this.data = [];

        for(let j = 0; j < this.lines; j ++){
            let arrayLine = new Array();

            for(let k = 0; k < this.columns; k ++){
                arrayLine.push(Math.floor(Math.random() * 100));
            }

            this.data.push(arrayLine);
        }
    }

    print = function(){
        console.table(this.data);
    }

    calc = function(input){
        let newData = [];

        for(let j = 0; j < this.lines; j ++){
            let value = 0;

            for(let k = 0; k < this.columns; k ++){
                    value += this.data[j][k] * input[k];
            }

            newData.push(value);
        }

        return newData;
    }

}