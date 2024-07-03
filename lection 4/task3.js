/* Вам необхідно написати програму, яка приймає на вхід число, що буде висотою вершини вашої ялинки.
 Уся ялинка має бути реалізована одним рядком:*/

 let result = '';
 let tringleHeight = +prompt('please enter a number');

    for ( let i=1; i<tringleHeight; i++){
        for (let j=0; j<i; j++) {
            result += '*';
        }
        result += '\n';
    }

console.log(result);