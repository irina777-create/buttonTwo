const btnGetLink = document.getElementById('button1');
const btnGoToLink = document.getElementById('button2');
let link;
let linkArr;
let stringLink;

btnGetLink.onclick = function() {
    link = prompt("Введите сылку");
    linkArr = link.split("");
    let arrText = [];
    const checkHttp = ['h','t','t','p'];
    const checkHttps = ['h','t','t','p','s'];

    for(let i = 0; i < 5; i++) {
        arrText.push(linkArr[i]);
    }

    for(let i = 0; i < arrText.length; i++) {
        if(arrText[i] === checkHttps[i] || arrText[i] === checkHttp[i]) {
            continue
        } else {
            linkArr.unshift('h','t','t','p','s',':','/','/');
            break
        }
    }

    stringLink = linkArr.join("");
    console.log(stringLink);
}

btnGoToLink.onclick = function() {
    location.href = stringLink;