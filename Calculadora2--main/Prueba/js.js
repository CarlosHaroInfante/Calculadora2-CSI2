function resultado(){

    var num1 = parseFloat(document.getElementById('numero1').value);

    var num2 = parseFloat(document.getElementById('numero2').value);

    var op = document.getElementById('simbolos').value;

    let result;

    switch(op){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':

            if(num2 === 0){
                result = "Dividido entre 0, ERROR"
            }
            else{
            result = num1 / num2;
            
        }
            break;
        default:
            result = "Operador no válido";
            
    }

    document.getElementById('result').innerHTML = result;

}