let getId = x => document.getElementById(x);
let getEl = x => document.getElementsByClassName(x);

// Зони редагування !!!!!!!!!!
let zoneText = getId('zone');
let editText = getId('text-edit');

// Оновлення даних з зони редагування в основну зону !!!!!!!!!!!!
zoneText.innerHTML = editText.value;

// Зміна зон !!!!!!!!!!!!!!!!!!!!!!!
let saveBtn = getId('save-btn');
let firstPlace = getId('firstPlace');
let secondPlace = getId('secondPlace');
let changes = getId('changes');

saveBtn.onclick = function() {
    firstPlace.style.display = 'none';
    zoneText.style.display = 'none';
    secondPlace.style.display = 'block';
};

console.log(changes);
changes.addEventListener('click', function() {
        secondPlace.style.display = 'none';
        firstPlace.style.display = 'flex';
        zoneText.style.display = 'block';
        zoneText.innerHTML = editText.value;
    })
    // ------------------------------------------------------------




// Font Edit -----------------------------------------
let bold = getId('bold');
bold.addEventListener('click', function() {

    if (zoneText.style.fontWeight === '700') {
        zoneText.style.fontWeight = 'normal';
    } else {
        zoneText.style.fontWeight = '700';
    }

})

let italic = getId('italic');

italic.addEventListener('click', function() {
    if (zoneText.style.fontStyle === 'italic') {
        zoneText.style.fontStyle = 'normal';
    } else {
        zoneText.style.fontStyle = 'italic';
    }

})
let underline = getId('underline');
underline.addEventListener('click', function() {
    if (zoneText.style.textDecoration === 'underline') {
        zoneText.style.textDecoration = 'none';
    } else {
        zoneText.style.textDecoration = 'underline';
    }

})
let strike = getId('strike');
strike.addEventListener('click', function() {
    if (zoneText.style.textDecoration === 'line-through') {
        zoneText.style.textDecoration = 'none';
    } else {
        zoneText.style.textDecoration = 'line-through';
    }

})

// Font Edit -----------------------------------------



// -----Text Align----- Вирівнюємо текст
let alignRight = getId('align-right');
let alignCenter = getId('align-center');
let alignLeft = getId('align-left');

alignRight.addEventListener('click', function() {
    zoneText.style.textAlign = 'right';
})
alignCenter.addEventListener('click', function() {
    zoneText.style.textAlign = 'center';
})
alignLeft.addEventListener('click', function() {
        zoneText.style.textAlign = 'left';
    })
    // -------------------------------------------------------------


// Колір тексту,колір фону ------------------------------------------------
let colorBtn = getId('color');
let popUp = getId('popup-container');
let popupClose = getId('close-popup');
let colorChose = getEl('square');
console.dir(colorChose);

colorBtn.addEventListener('click', function() {
    popUp.style.display = 'block';
})

for (let i = 0; i < colorChose.length; i++) {
    colorChose[i].onclick = (e) => {
        zone.style.color = e.target.classList[1]
    }
}

popupClose.onclick = function() {
    popUp.style.display = 'none';
}

let fFamily = getId('font-family');
let ffList = getId('ff-list');

fFamily.addEventListener('click', function() {
    if (ffList.style.display == 'none') {
        ffList.style.display = 'block';
    } else {
        ffList.style.display = 'none';
    }
    fsList.style.display = 'none'
})

let Arial = getId('Arial')
let Georgia = getId('Georgia')
let Impact = getId('Impact')
let Tahoma = getId('Tahoma')
let TimesNewRoman = getId('TimesNewRoman')
let Verdana = getId('Verdana')

Arial.onclick = function(e) {
    e.preventDefault();
    zoneText.style.fontFamily = 'arial'
    ffList.style.display = 'none'
}
Georgia.onclick = function() {

    zoneText.style.fontFamily = 'Georgia'
    ffList.style.display = 'none'
}
Impact.onclick = function() {

    zoneText.style.fontFamily = 'Impact'
    ffList.style.display = 'none'
}
Tahoma.onclick = function() {

    zoneText.style.fontFamily = 'Tahoma'
    ffList.style.display = 'none'
}
TimesNewRoman.onclick = function() {

    zoneText.style.fontFamily = 'TimesNewRoman'
    ffList.style.display = 'none'
}
Verdana.onclick = function() {

    zoneText.style.fontFamily = 'Verdana'
    ffList.style.display = 'none'
}

let fsList = getId('fs-list');
let fSize = getId('font-size')

fSize.addEventListener('click', function() {
    if (fsList.style.display == 'none') {
        fsList.style.display = 'block';
    } else {
        fsList.style.display = 'none';
    }
    ffList.style.display = 'none'
})

let s1 = getId('12px');
let s2 = getId('14px');
let s3 = getId('16px');
let s4 = getId('18px');
let s5 = getId('20px');
let s6 = getId('22px');
let s7 = getId('25px');
let s8 = getId('30px');

s1.onclick = function() {
    zoneText.style.fontSize = '12px'
    fsList.style.display = 'none'
}
s2.onclick = function() {
    zoneText.style.fontSize = '14px'
    fsList.style.display = 'none'
}
s3.onclick = function() {
    zoneText.style.fontSize = '16px'
    fsList.style.display = 'none'
}
s4.onclick = function() {
    zoneText.style.fontSize = '18px'
    fsList.style.display = 'none'
}
s5.onclick = function() {
    zoneText.style.fontSize = '20px'
    fsList.style.display = 'none'
}
s6.onclick = function() {
    zoneText.style.fontSize = '22px'
    fsList.style.display = 'none'
}
s7.onclick = function() {
    zoneText.style.fontSize = '25px'
    fsList.style.display = 'none'
}
s8.onclick = function() {
    zoneText.style.fontSize = '30px'
    fsList.style.display = 'none'
}

let BgButton = getId('BgButton');
let popUpBG = getId('popup-containerBG');
let popupBGClose = getId('close-popupBG');
let colorBGChose = getEl('BG');
let body = document.querySelector('body');

BgButton.addEventListener('click', function() {
    popUpBG.style.display = 'block';
})

for (let i = 0; i < colorBGChose.length; i++) {
    colorBGChose[i].onclick = (e) => {
        body.style.background = e.target.classList[2]
    }
}

popupBGClose.onclick = function() {
    popUpBG.style.display = 'none';
    choseFile.style.display = 'none'
    imgBg.style.display = 'none'
    squaresBG.style.display = 'none'

}

let colorBGbutton = getId('colors')
let choseBGbutton = getId('chose')
let imageBGbutton = getId('images')
let squaresBG = getId('squaresBG')
let imgBg = getId('imgBg')
let imgBGChose = getEl('.img');

colorBGbutton.onclick = function() {
    squaresBG.style.display = 'flex'
    imgBg.style.display = 'none'
    choseFile.style.display = 'none'
}

imageBGbutton.onclick = function() {
    imgBg.style.display = 'flex'
    squaresBG.style.display = 'none'
    choseFile.style.display = 'none'
}


getId('i1').onclick = function() {
    body.style.background = 'url(https://static.educalingo.com/img/en/800/nature.jpg)'
}
getId('i2').onclick = function() {

    body.style.background = 'url(https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752)'
}
getId('i3').onclick = function() {

    body.style.background = 'url(https://images.ctfassets.net/hrltx12pl8hq/6TOyJZTDnuutGpSMYcFlfZ/4dfab047c1d94bbefb0f9325c54e08a2/01-nature_668593321.jpg?fit=fill&w=480&h=270)'
}
getId('i4').onclick = function() {

    body.style.background = 'url(https://theculturetrip.com/wp-content/uploads/2017/10/_-_-2.jpg)'
}
getId('i5').onclick = function() {

    body.style.background = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVuVNbITv0bh5tNWnHDAn45NFTwRnydPUfg&usqp=CAU)'
}
getId('i6').onclick = function() {

    body.style.background = 'url(https://www.iss.europa.eu/sites/default/files/styles/large_banner_image/public/city-5000648_1920%20banner.jpg?itok=2VD5CQf5?%3E)'
}
getId('i7').onclick = function() {

    body.style.background = 'url(https://images.ctfassets.net/hrltx12pl8hq/66wfzNxDrBTl3mIiCiVbsl/23ce3a5b8d3bfc3bdb75402705d4e654/02-animals-wildlife_1407316988.jpg?fit=fill&w=480&h=270)'
}
getId('i8').onclick = function() {

    body.style.background = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3TcXkewZLHgGYq9U0wQS9ohbXR67mr_RmA&usqp=CAU)'
}
getId('i9').onclick = function() {

    body.style.background = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfG418zd89ips6amEE-DKF5H44r5kOzIgjvw&usqp=CAU)'
}

let choseFile = getId('choseFile')

choseBGbutton.onclick = function() {
    choseFile.style.display = 'block'
    imgBg.style.display = 'none'
    squaresBG.style.display = 'none'
}

document.getElementById('chosen').addEventListener('change', readURL, true);

function readURL() {
    let file = document.getElementById("chosen").files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
        body.style.backgroundImage = "url(" + reader.result + ")";
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {}
}


let tableList = document.forms.tableList;
let countTR = getId('countTR');
let widthTD = getId('widthTD');
let widthBorder = getId('widthBorder');
let countTD = getId('countTD');
let heightTD = getId('heightTD');
let styleBorder = getId('styleBorder');
let colorBorder = getId('colorBorder');
let reset = getId('reset');
let create = getId('create');
let closeCreate = getId('closeCreate');
let tableButton = getId('tableButton')
let backgr = getId('fff')
let headContMain = getId('headContMain')
let chooseCol = getId('chooseCol')
let chooseStyle = getId('chooseStyle')
let validation = getId('validation')

reset.onclick = function() {
    countTR.value = ''
    widthTD.value = ''
    widthBorder.value = ''
    countTD.value = ''
    heightTD.value = ''
    styleBorder.value = chooseStyle.value
    colorBorder.value = chooseCol.value

}

tableButton.onclick = function() {
    createTable.style.display = 'block'
    firstPlace.style.display = 'none';
    zoneText.style.display = 'none';
    backgr.style.display = 'block'
}

create.onclick = function() {

    let divTable = document.createElement('div');
    let table = document.createElement('table');
    let totalTr = tableList.countTR.value;
    let totalTd = tableList.countTD.value;

    // tableList.style.display = 'none'

    tableList.styleBorder.onchange = function() {
        for (let i = 0; i < tableList.styleBorder.length; i++) {}
    }

    tableList.colorBorder.onchange = function() {
        for (let i = 0; i < tableList.colorBorder.length; i++) {}
    }

    for (let i = 0; i < totalTr; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr)
        divTable.appendChild(table)
        for (let i = 0; i < totalTd; i++) {
            let td = document.createElement('td');
            tr.appendChild(td)
            td.innerHTML = TD;
            td.style.width = tableList.widthTD.value + 'px';
            td.style.height = tableList.heightTD.value + 'px';
            table.style.borderCollapse = 'collapse';
            td.style.borderWidth = tableList.widthBorder.value + 'px';
            td.style.borderColor = tableList.colorBorder.value;
            td.style.borderStyle = tableList.styleBorder.value;
        }

    }
    editText.innerHTML += divTable.innerHTML;
    // if(countTR.value = ''){
    //     validation.innerHTML = '<p>Invalid Form</p>'
    //     countTR.style.border = '2px solid red'
    // }
}


closeCreate.onclick = function() {

    createTable.style.display = 'none'
    firstPlace.style.display = 'none';
    zoneText.style.display = 'none';
    fff.style.display = 'none'
    secondPlace.style.display = 'block'
}



let resetOl = getId('resetOl')
let createList = getId('createList')
let olButton = getId('olButton');
let OLfff = getId('OLfff');
let createOl = getId('createOl');
let closeOl = getId('closeOl');
let olList = document.forms.olList;
let zero = getId('zero')

resetOl.onclick = function() {
    countLi.value = ''
    typeMark.value = zero.value

}


olButton.onclick = function() {
    createOl.style.display = 'block'
    firstPlace.style.display = 'none';
    zoneText.style.display = 'none';
    OLfff.style.display = 'block'
}

closeOl.onclick = function() {

    createOl.style.display = 'none'
    firstPlace.style.display = 'none';
    zoneText.style.display = 'none';
    OLfff.style.display = 'none'
    secondPlace.style.display = 'block'
}


createList.onclick = function() {


    let amount = olList.countLi.value;

    let ol = document.createElement('ol');



    for (let i = 0; i < amount; i++) {

        olList.typeMark.onchange = function() {
            for (let i = 0; i < olList.typeMark.length; i++) {}
        }

        let li = document.createElement('li');
        li.innerHTML = `item ${i+1}`;
        li.style.listStyle = olList.typeMark.value;
        ol.appendChild(li)

    }
    editText.innerHTML += ol.innerHTML;
}

let ulButton = getId('ulButton');
let resetUl = getId('resetUl');
let createUlList = getId('createUlList');
let ULfff = getId('ULfff');
let createUl = getId('createUl');
let closeUl = getId('closeUl');
let ulList = document.forms.ulList;
let zero2 = getId('zero2');
let typeMarkUl = getId('typeMarkUl');

resetUl.onclick = function() {
    countLiUl.value = ''
    typeMarkUl.value = zero2.value

}

ulButton.onclick = function() {
    createUl.style.display = 'block'
    firstPlace.style.display = 'none';
    zoneText.style.display = 'none';
    ULfff.style.display = 'block'
}
closeUl.onclick = function() {

    createUl.style.display = 'none';
    firstPlace.style.display = 'none';
    zoneText.style.display = 'none';
    ULfff.style.display = 'none';
    secondPlace.style.display = 'block';
}


createUlList.onclick = function() {


    let amount = ulList.countLiUl.value;

    let ul = document.createElement('ul');



    for (let i = 0; i < amount; i++) {

        ulList.typeMark.onchange = function() {
            for (let i = 0; i < ulList.typeMark.length; i++) {}
        }

        let li = document.createElement('li');
        li.innerHTML = `item ${i+1}`;
        li.style.listStyle = ulList.typeMark.value;
        ul.appendChild(li)

    }
    editText.innerHTML += ul.innerHTML;
}