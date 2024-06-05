addTool("dyer", {
    func: function(placed) { placed.h = random(0-255); },
    func: function(placed) { placed.s = random(0-255); },
    func: function(placed) { placed.l = random(0-255); },
    onSelect: function() { alert("Use on an ingredient to dye it any color!"); },
    whileOn: function() { console.log("Dyer selected."); },
    onDeselect: function() { alert("Goodbye!"); },
    onClick: function(x,y) { console.log(x,y) },
    shape:"liquid",
    spin: true
})
