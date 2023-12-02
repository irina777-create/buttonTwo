const btnGetLink = document.querySelector('button1');
const btnGoToLink = document.querySelector('button2');

let link;
let linkArr;
let stringLink;

btnGetLink.onclick = function() {
    linkArr = link.split("");
    let arrText = [];
    const checkHttps = ['h', 't', 't', 'p', 's'];

    for (let i = 0; i < 5; i++) {
        arrText.push(linkArr[i]);
    }

    for (let i = 0; i < arrText.length; i++) {
        if (arrText[i] === checkHttps[i] || arrText[i] === checkHttp[i]) {
            linkArr.unshift('h', 't', 't', 'p', 's', ':', '/', '/');
        } else {
            alert('Це не htpps протокол')
        }
    }
}

    btnGoToLink .onclick=function () {
        linkArr = link.split("");
        let arrText = [];
        const checkHttp = ['h', 't', 't', 'p'];

        for (let i = 0; i < 5; i++) {
            arrText.push(linkArr[i]);
        }

        for (let i = 0; i < arrText.length; i++) {
            if (arrText[i] === checkHttp[i] || arrText[i] === checkHttps[i]) {
                linkArr.unshift('h', 't', 't', 'p', ':', '/', '/');
            } else {
                alert('Це не htpp протокол')
            }

        }

    }

