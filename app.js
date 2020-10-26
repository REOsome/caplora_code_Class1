var fNum = null;
class calculator {
    constructor() {
        this.number1 = 0
        this.number2 = 0
        this.sym = null
    }

    addNumbers(number) {
        if (this.sym !== null) {

            this.number2 = parseInt(this.number2.toString() + number)
        } else {
            this.number1 = parseInt(this.number1.toString() + number)
        }
    }
    execute() {
        switch (this.sym) {
            case 'ádd':
                return this.add()
                break;
            case 'mod':
                return this.mod()
                break;

            default:
                return 'érror'
                break;
        }
    }
    addsymbol(sym) {
        this.sym = sym
    }
    add() {
        return this.number1 + this.number2
    }
    mod() {
        return this.number1 % this.number2;
    }
}
let calc = new calculator();

function handlenumberPad(params) {
    calc.addNumbers(params)
    console.log(calc.number1, calc.number2);
}
function handlesym(params) {
    calc.addsymbol(params)
    console.log(calc.sym)
}
let execute = () => {
    console.log(calc.execute())
}

