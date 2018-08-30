let c = 0;
let t1, t2;
let text;

function startAnim() {
    t1 = window.setInterval("incr()", 100);
    text = document.getElementById("text");
}

function incr() {
    c+=1;
    text.innerHTML = `TEXT GROWING ${c} pt`;
    text.style.fontSize = c+'pt';
    text.style.color = 'red';
    window.status = c;
    if ( c > 50) {
        window.clearTimeout(t1);
       // alert("Font size reached 50! shrinking..");
        t2 = window.setInterval("decr()", 100);
    }
}

function decr() {
    c-=1;
    text.innerHTML = `TEXT SHRINKING ${c} pt`;
    text.style.fontSize = c+'pt';
    text.style.color = 'blue';
    window.status = c;
    if ( c < 0) {
        window.clearTimeout(t2);
        //alert("Font size reached 50! shrinking..");
        t1 = window.setInterval("incr()", 100);
    }
}