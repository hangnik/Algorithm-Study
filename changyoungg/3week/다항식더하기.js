function solution(polynomial) {
    var answer = '';
    let a = 0; // x가 있는 값
    let b = 0; // 상수
    let str = "";
    let polynomialSplit = polynomial.split(" + ");
    for(let i=0; i<polynomialSplit.length; i++) { 4x 
        if(polynomialSplit[i].includes('x')) { 4x
            str = polynomialSplit[i].replace('x', ""); 4 
            if(str == "") {
                a += 1;
            } else {
                a += Number(str);
            }
        } else {
            b += Number(polynomialSplit[i]);
        }
    }

    // a === 0   => b
    // a === 1 
    // a > 1
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
    return answer;
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