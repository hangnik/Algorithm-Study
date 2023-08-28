function solution(polynomial) {
    var answer = '';
    let a = 0;
    let b = 0;
    let str = "";
    let polynomialSplit = polynomial.split(" + ");
    for(let i=0; i<polynomialSplit.length; i++) {
        if(polynomialSplit[i].includes('x')) {
            str = polynomialSplit[i].replace('x', "");
            if(str == "") {
                a += 1;
            } else {
                a += Number(str);
            }
        } else {
            b += Number(polynomialSplit[i]);
        }
    }
    if(a==0){
        answer += b;
    }
    else if( a==1 ){
        if(b==0){
            answer = 'x';
        }
        else{
            answer = 'x + '+b;
        }
    }
     else{
        if(b==0){
            answer = `${a}x`;
        }
        else{
            answer = `${a}x + ${b}`;
        }
    }
    // if(a==0){
    //     answer += b;
    // }
    // else if(a==1 && b==0){
    //     answer = "x";
    // }
    // else if(a==1 && b!=0){
    //     answer = "x + " + b;
    // }
    // else if(a!=0 && a!=1 && b==0){
    //     answer = a + "x";
    // }
    // else if(a!=0 && a!=1 && b!=0){
    //     answer = a + "x + " + b;
    // }
    return answer;
}