function solution(angle) {
    let result = angle;

    if (result < 90) {
        return 1;
    } else if (result == 90) {
        return 2;
    } else if (90 < result <= 179) {
        return 3;
    } else if (result === 180) {
        return 4;
    }
}
