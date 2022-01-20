//持ち物チェックシートテンプレ
//document.createElement('checkbox');

//画面切り替え（選択画面・機能画面）
function sub() {
    document.getElementById("allBody").style.display = "none";
    document.getElementById("newBody").style.display = "block";    
}
function main() {
    document.getElementById("newBody").style.display = "none";
    document.getElementById("allBody").style.display = "block";
    document.getElementById("container" + openPage).style.display = "none";
}

//チェックシート
function add(){  
    if (document.getElementById('test'+ openPage).value!='')  {
        i++
     console.log('clXD' + openPage);
     var title =document.getElementById('test' + openPage).value; 
     var node = document.createElement('div');   
     node.innerHTML = '<input type="checkbox" id="check' + i + 'a' + openPage + '" class="check' + openPage + '" name="check"><label for="check' + i + '">'+ title +'</label>';  
     document.getElementById('container' + openPage).appendChild(node);  
    } 
    document.getElementById('test' + openPage).value = "";
} 


let N = 0;
function  checks() {
    let ele = document.getElementsByClassName("check" + openPage);
    console.log(ele);
    console.log(ele.length);
for (let j = 0; j < ele.length; j++) {
    //let checking = document.getElementById('check' + i + 'a' + openPage);
    //console.log(checking);
    //if (checking.checked){
    if (ele[j].checked){
        //okなばあい

    } else {
        //outなばあい
        N = 1;
    }
}
    anc();
}

    //　忘れ物がないか答えを返す
    function anc() {
        if(N == 1) {
            alert('aut');
            N = 0;
        } else {
            alert('ok');
        }
    }

//　チェックリスト追加
function checkList() {
    //モーダルウィンドウ
    document.getElementById("modalWindow").style.display = "block";
    let x = document.getElementById("titleText");
    x.value = "";
    x.focus();
}

//チェックリスト作成
let cl = 0;
function modal() {
    document.getElementById("modalWindow").style.display = "none";

    cl++;
    let list = document.createElement('div');
    list.innerHTML = 
    '<div class="checkList" id="checkList' + cl + '" onclick="checkClick(this)"> <span class="checklistText" id="checklistText' + cl + '">テキストテスト</span> <span class="textListAlart" id="textListalart' + cl + '">2000/00/00/00:00</span></div>' ;
    document.getElementById('checkListBody').appendChild(list);

    let mains = document.createElement('div');
    mains.innerHTML =
    '<div class="container" id="container' + cl + '" style="display:none"> <input class="test" id="test' + cl +'" type="text" > <input value="追加" type="button" onClick="add()"> <input value="チェック" type="button" onClick="checks()"> </div></div>'
    document.getElementById('checkList_n').appendChild(mains);

    let checktitle = document.getElementById("titleText").value;
    if (checktitle == "") {
        checktitle = "タイトルなし"
    }
    document.getElementById("checklistText" + cl).innerHTML = checktitle;
    //checktitle = "";

/*
    //ゴミみたいなタイトル記憶
    let titleInput = document.createElement('div');
    titleInput.innerHTML =
    '<div id="titleInput" '+ cl +'></div>'
*/

    //時間設定
    let now = new Date();
    let ty = now.getFullYear();
    let tm = now.getMonth()+1;
    let td = now.getDate();
    let gh = now.getHours();
    if (gh < 10) gh = "0" + gh;
    let gmi = now.getMinutes();
    if (gh < 10) gmi = "0" + gmi;

    let times = ty + "/" + tm + "/" + td + "/" + gh + ":" + gmi;
    document.getElementById("textListalart" + cl).innerText = times;
}

//リストクリック時
let i = 0;
let openPage = 0;
function checkClick(ele) {

    let id_value = ele.id;
    let str = id_value;
    openPage = str.substr(9);
    console.log(openPage);

    //リストページに飛ぶ
    sub();
    document.getElementById("container" + openPage).style.display = "block";
    let x = document.getElementById("checklistText" + openPage);
    let y = document.getElementById('headerText_n');
    y.innerText = x.textContent;
}
//チェックリストの文字を変える


//メニュー
function many() {
    document.getElementById('modalWindowS').style.display = "block";
}

function manyOK() {
    let x = document.getElementById('titleTextS').value;
    if (x !== "") {
        document.getElementById('checklistText' + openPage).innerText = x;
        document.getElementById('headerText_n').innerText = x;
    }
    modalBack();
}

function modalBack() {
    document.getElementById('modalWindowS').style.display = "none";
    document.getElementById('titleTextS').value = "";
}

function delet() {
    let x = document.getElementById('checkList' + openPage);
    x.remove();
    let y = document.getElementById('container' + openPage);
    y.remove();
    modalBack();
    main();
}

function push(){
    Push.create("更新情報", 
     {
      body: "ブログの更新をお知らせします!",
      icon: 'casley_logo.png',
      timeout: 8000,
      onClick: function () {
      window.focus(); 
      this.close();
      }
    })
  }