function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function color() {
    var _COLORS = [
        "#9400D3",
        "#4B0082",
        "#0000FF",
        "#00FF00",
        "#FFFF00",
        "#FF7F00",
        "#FF0000",
        "#FF00FF",
        "#00FFFF",
        "#008080",
        "#008000",
        "#808000",
        "#800080",
    ];
    document.getElementById("name").style.color = _COLORS[getRandomInt(12)];
    for (; ;) {
        for (var i = 0; i < _COLORS.length; i++) {
            await sleep(1000);
            document.getElementById("name").style.color = _COLORS[i];
        }
    }
}