function solution(my_string) {
    var answer = '';
    
    // let idx = 0;
    // for(let i=0;i<my_string.length;i++){
    //     idx = 0;
    //     for(let j=i;j>=0;j--){
    //         if(my_string[i]==my_string[j])idx++;
    //     }
    //     if(idx==1)answer += my_string[i];
    // }
    // return answer;
    
    let a = new Set(my_string);
    let b = Array.from(a);
    let c = b.join("");

    return answer = c
}