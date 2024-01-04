function scoping() {
    var v = "Hello";
    const C = "Function";
    function blockLet() {
        let C = "Block";
        console.log(v, C);
    }
    blockLet();
    console.log(v, C);
    }
scoping();
