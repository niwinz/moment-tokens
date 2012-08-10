var moment = require("../moment-tokens.js")

exports.phpformat = {
    "test escape": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("\\Y"), "Y");
        test.done();
    },
    "test format n":  function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("n"), "M");
        test.done();
    },
    "test format Y and o": function(test) {
        test.expect(2);
        test.equal(moment().__translatePhpFormat("Y"), "YYYY");
        test.equal(moment().__translatePhpFormat("o"), "YYYY");
        test.done();
    },
    "test format y": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("y"), "YY");
        test.done();
    },
    "test format m":  function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("m"), "MM");
        test.done();
    },
    "test format M":  function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("M"), "MMM");
        test.done();
    },
    "test format d":  function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("d"), "DD");
        test.done();
    },
    "test format z":  function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("z"), "DDD");
        test.done();
    },
    "test format F":  function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("F"), "MMMM");
        test.done();
    },
    "test format W": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("W"), "ww");
        test.done();
    },
    "test format G": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("G"), "H");
        test.done();
    },
    "test format j": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("j"), "D");
        test.done();
    },
    "test format e": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("e"), "zz");
        test.done();
    },
    "test format a": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("a"), "a");
        test.done();
    },
    "test format A": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("A"), "A");
        test.done();
    },
    "test format w": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("w"), "d");
        test.done();
    },
    "test format l": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("l"), "dddd");
        test.done();
    },
    "test format D": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("D"), "ddd");
        test.done();
    },
    "test format H": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("H"), "HH");
        test.done();
    },
    "test format g": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("g"), "h");
        test.done();
    },
    "test format h": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("h"), "hh");
        test.done();
    },
    "test format i": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("i"), "mm");
        test.done();
    },
    "test format s": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("s"), "ss");
        test.done();
    },
    "test format O": function(test) {
        test.expect(1);
        test.equal(moment().__translatePhpFormat("O"), "ZZ");
        test.done();
    }
}
