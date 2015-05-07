var assert = require("assert"),
    Browser = require("zombie"),
    domClass = require("../src/index");


describe("domClass", function() {
    before(function(done) {
        var _this = this;

        Browser.visit("http://localhost", function(e, browser) {
            _this.document = browser.window.document;
            done();
        });
    });

    describe("#add(node, class)", function() {
        it("should add class to node if it will change the current className", function() {
            var node = this.document.createElement("div");

            domClass.add(node, "class");

            assert.equal(node.className, "class");
        });
    });

    describe("#remove(node, class)", function() {
        it("should remove class from node if it will change the current className", function() {
            var node = this.document.createElement("div");

            node.className = "class other";
            domClass.remove(node, "other");

            assert.equal(node.className, "class");
        });
    });

    describe("#has(node, class)", function() {
        it("should return true if node has class in className", function() {
            var node = this.document.createElement("div");

            node.className = "class other";

            assert.equal(domClass.has(node, "other"), true);
            assert.equal(domClass.has(node, "others"), false);
        });
    });
});
