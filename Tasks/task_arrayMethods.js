// Write the function camelize(str) that changes dash-separated words like “my-short-string” into
//  camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

//P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str){
    let arr = str.split('-');
    for(let i = 1; i < arr.length; i++){
        let arr2 = str[i].split('');
        arr2[1].toUpper();
        str[i] = arr2[i];
    }
    arr = str.join()
}