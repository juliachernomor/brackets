// 1
// module.exports = function check(str, bracketsConfig) {
//     const getPairs = []
//     bracketsConfig.forEach((bracket) => getPairs.push(bracket[0] + bracket[1]))
//     while (getPairs.some((pair) =>  str.includes(pair) )) {
//         getPairs.map((pair) => 
//             str = str.replace(pair, '')
//         )
//     }
//     return str? false:true 
// }
// 2
module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let char of str) {
        for (let mass of bracketsConfig) {
            console.log(stack)
            //символ строки равен открывающим скобкам
            if (mass[0] === char && mass[1] !==char) {
                stack.push(char);
            }   //символ строки равен  скобкам одинаковым у откр и закр
            else if(mass[1] === char && mass[0] === char){ 
                if (stack.length ==0 || stack[stack.length - 1] !== char) 
                { stack.push(char);}
                else if (stack.length !==0 && stack[stack.length - 1] == char) {
                stack.pop(char);
                }
            }//символ строки равен закрывающим скобкам
            else if (mass[1] === char && mass[0] !== char) {
                //если stack не пустой и  stack[stack.length - 1] !== mass[0] или stack пустой
                if(!stack.length ||  stack[stack.length - 1] !== mass[0]) return false;
                stack.pop(char);
            } 
        };
    }
    return !stack.length;
}  
