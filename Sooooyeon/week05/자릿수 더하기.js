function solution(n)
{
    return n.toString().split('').reduce((a,c)=> parseInt(a)+parseInt(c) ,0 );
}