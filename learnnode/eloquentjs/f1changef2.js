// function changing other function

function doSmtg(t){
  return function (arg){
    console.log(t(arg));
  }
}

function up(a) {return a.toUpperCase();}

doSmtg(Math.sqrt)(9);
doSmtg(up)('abc');

function smthg2(f1){
    return function(arg1){
        console.log(f1(arg1));
        return function(arg2){
            console.log(f1(arg2))
        }
    }
}

smthg2(Math.sqrt)(4)(16);

function largerThan(n){
    return function(m) { return m > n}
}

var l80 = largerThan(80);
console.log(l80(909));
