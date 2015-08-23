var tape = require("tape"),
    domClass = require("..");


tape("#add(node, class) should add class to node if it will change the current className", function(assert) {
    var node = document.createElement("div");

    domClass.add(node, "class");

    assert.equal(node.className, "class");

    assert.end();
});

tape("#remove(node, class) should remove class from node if it will change the current className", function(assert) {
    var node = document.createElement("div");

    node.className = "class other";
    domClass.remove(node, "other");

    assert.equal(node.className, "class");

    assert.end();
});

tape("#has(node, class) should return true if node has class in className", function(assert) {
    var node = document.createElement("div");

    node.className = "class other";

    assert.equal(domClass.has(node, "other"), true);
    assert.equal(domClass.has(node, "others"), false);

    assert.end();
});
