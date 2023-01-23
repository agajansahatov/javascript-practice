let picture = {
    width: 300,
    height: 600
}

let type = isLandscape(picture) ? "Landscape" : "Portrait";
console.log(type);

function isLandscape(picture){
    return picture.width > picture.height;
}
