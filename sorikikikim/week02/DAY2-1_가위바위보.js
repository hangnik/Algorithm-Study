const solution = rsp => {
    let tempArr = rsp.split('');
    for (i = 0; i < tempArr.length; i++) {
        if (tempArr[i] == "2") {
            tempArr[i] = "0";
        } else if (tempArr[i] == "0") {
            tempArr[i] = "5";
        } else if (tempArr[i] == "5") {
            tempArr[i] = "2";
        }
    }
    return tempArr.join('');
};
