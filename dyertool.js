addTool("dyer", {
    func: function(placed) { placed.h = 0; },
    onSelect: function() { alert("Use on an ingredient to dye it any color!"); },
    whileOn: function() { console.log("Dyer selected."); },
    onDeselect: function() { alert("Goodbye!"); },
    onClick: function(x,y) { console.log(x,y) },
    shape:"liquid",
    color:"random",
    spin: true
})
