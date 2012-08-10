var moment = require("../moment-tokens.js")

exports.strftime = {
    "test escape": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%%a"), "%a");
        test.done();
    },
    "test format %a":  function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%a"), "ddd");
        test.done();
    },
    "test format %Y and %G": function(test) {
        test.expect(2);
        test.equal(moment().__translateStrftimeToMoment("%Y"), "YYYY");
        test.equal(moment().__translateStrftimeToMoment("%G"), "YYYY");
        test.done();
    },
    "test format %y and %g": function(test) {
        test.expect(2);
        test.equal(moment().__translateStrftimeToMoment("%y"), "YY");
        test.equal(moment().__translateStrftimeToMoment("%g"), "YY");
        test.done();
    },
    "test format %m":  function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%m"), "MM");
        test.done();
    },
    "test format %b":  function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%b"), "MMM");
        test.done();
    },
    "test format %h":  function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%h"), "MMM");
        test.done();
    },
    "test format %B":  function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%B"), "MMMM");
        test.done();
    },
    "test format %U": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%U"), "ww");
        test.done();
    },
    "test format %W": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%W"), "ww");
        test.done();
    },
    "test format % d": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%d"), "D");
        test.done();
    },
    "test format %e": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%e"), "Do");
        test.done();
    },
    "test format % j": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%j"), "DDDD");
        test.done();
    },
    "test format %A": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%A"), "dddd");
        test.done();
    },
    "test format %w": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%w"), "d");
        test.done();
    },
    "test format %p": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%p"), "A");
        test.done();
    },
    "test format %P": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%P"), "a");
        test.done();
    },
    "test format %H": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%H"), "HH");
        test.done();
    },
    "test format %I": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%I"), "hh");
        test.done();
    },
    "test format %M": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%M"), "mm");
        test.done();
    },
    "test format %S": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%S"), "ss");
        test.done();
    },
    "test format %x": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%x"), "LL");
        test.done();
    },
    "test format %X": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%X"), "LT");
        test.done();
    },
    "test format %z": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%z"), "ZZ");
        test.done();
    },
    "test format %Z": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%Z"), "z");
        test.done();
    },
    "test format %c": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%c"), "LLLL");
        test.done();
    },
    "test translate %f": function(test) {
        test.expect(1);
        test.equal(moment().__translateStrftimeToMoment("%f"), "SSS");
        test.done();
    }
}
