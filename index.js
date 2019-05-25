function level1() {
    level3();
}

function level2() {
    level3();
}

function level3() {
    throw 'Fail!!!';
}

level1();
