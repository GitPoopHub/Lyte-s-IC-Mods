{
  ingredients.monosodium_glutamate = {
    "type": "powder",
    "shape": "powder",
    "color": [
        "#e3e3e3"
    ],
    "dissolve": true,
    "adj": "savory",
    "dishWeight": -75,
    "keywords": "msg,e621",
    "h": 0,
    "s": 0,
    "l": 89.01960784313725
};

  ingredients.sus = {
    "type": "powder",
    "shape": "sus",
    "color": [
        "#cf3f4f"
    ],
    "dissolve": true,
    "adj": "suspicious",
    "dishWeight": -75,
    "keywords": "amogus,baka,among us",
    "h": 352,
    "s": 79,
    "l": 48
};

  ingredients.steel_cube = {
    "color": [ "#7e7f80" ],
    "shape": "cube",
    "adj": "steeled",
    "dishName": "steel",
    "dishWeight": -35,
    "meltPoint": 1456, //sandboxels reference
    "meltInto": "molten_steel",
    "broken": "steel_shavings",
    "h": 210,
    "s": 1,
    "l": 64,
    "group": "other",
    "keywords": "metal,iron,steel"
};

  ingredients.steel_shavings = {
    "color": [
        "#7e7f80"
    ],
    "type": "powder",
    "adj": "steel-dusted",
    "meltPoint": 1456,
    "meltInto": "molten_steel",
    "parts": [
        "steel_cube"
    ],
    "h": 210,
    "s": 1,
    "l": 64,
    "shape": "powder",
    "group": "other",
    "keywords": "metal,iron,steel,scrap"
}

  ingredients.molten_steel = {
    "type": "liquid",
    "color": [
        "#ff7a00"
    ],
	glow: "#ffb16e",
    /*"reactions": {
        "meat": {
            "set1": "broth"
        },
        "vegetable": {
            "set1": "broth",
            "tempMin": 60
        },
        "bone": {
            "set1": "broth",
            "tempMin": 60
        }
    },*/
    "adj": "steel-dipped",
    "boilPoint": 2750,
    "boilInto": "steel_vapor",
    "freezePoint": 1456,
    "freezeInto": "steel_cube",
    "keywords": "metal,molten,liquid,iron",
    "h": 29,
    "s": 100,
    "l": 50,
    "shape": "liquid",
    "group": "other",
    "tempReact": true
};

  ingredients.steel_vapor = {
    "type": "gas",
    "color": [
        "#ffb16e"
    ],
	"a": 0.8,
	glow: "#ffb16e",
    "keywords": "gas,boiled,vapor,vapour,metal,iron",
    "h": 28,
    "s": 100,
    "l": 72,
    "shape": "gas",
    "group": "other"
};
