function evalInput(str) {
    if (Number.isInteger(parseInt(str))) {
        var num = parseInt(str);
        var rev = 0, rem = 0;
        while (num > 0) {
            rem = parseInt(num % 10);
            rev = rev * 10 + rem;
            num = parseInt(num/10);
        }

        document.getElementById("result").innerHTML = `<h3>Reverse of ${str} is ${rev} </h3>`;
    } else {
        var text = `<h3>The entered string is : ${str}<br/>`;
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) === 'a' || 
                str.charAt(i) === 'e' || 
                str.charAt(i) === 'i' ||
                str.charAt(i) === 'o' ||
                str.charAt(i) === 'u' ||
                str.charAt(i) === 'A' ||
                str.charAt(i) === 'E' ||
                str.charAt(i) === 'I' ||
                str.charAt(i) === 'O' ||
                str.charAt(i) === 'U' 
            ) {
                text += `the left most vowel is: ${str.charAt(i)} <br/>`;
                var pos = i + 1;
                text += `the position of the left most vowel ${str.charAt(i)} is : ${pos} </h3><br/>`;
                document.getElementById("result").innerHTML = text;
                exit();
            }
        }

        text += `The entered string has no vowels </h3>`;
        document.getElementById("result").innerHTML = text;
    }
}