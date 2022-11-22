function EqualsOrNot(a , b) {
    if(typeof(a) != typeof(b)) {
        return 'შეიყვანეთ ერთნაირი ტიპის პარამეტრo';
    } else {
        if(a == b) {
            return 'ტოლია'
        } else {
            return 'არ არის ტოლი';
        }
    }
}



function ConvertToCelsius(f) {
    if(typeof(f) != Number) {
        return false;
    }
    return f*5/(9*32);
}



function ReturnNew(a,b,operation) {
    if(typeof(a) != Number || typeof(b) != Number || operation != '+' || operation != '-' || operation != '/' || operation != '*') {
        return false;
    }
    if(operation == '+') {
        return a+b;
    } 
    if(operation == '-') {
        return a-b;
    } 
    if(operation == '/') {
        return a/b;
    } 
    if (operation == '*') {
        return a*b;
    }
}



