"use strict";

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };

    this.calculate = function(str) {
        let split = str.split("");
        let a = +split[0];
        let op = split[1];
        let b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
    }
}