var Ordem = [];

function Start(){

    console.log("start");

CreateList(document.getElementById('A').value, document.getElementById('B').value,
            document.getElementById('C').value, document.getElementById('D').value,
            document.getElementById('E').value, document.getElementById('F').value,
            document.getElementById('G').value, document.getElementById('H').value,
            document.getElementById('I').value, document.getElementById('J').value);
           
            removeElement('st');

            addElement('nd', 'label', 'op', 'New Player: ');
            addElement('nd', 'input', 'PLAYER', '');
            addElement('nd', 'label', 'ap', '  ');
            addElement('nd', 'button', 'ep', ' Add New Player ', 'NewPlayer()');

            addElement('rd', 'br', '', '');
            addElement('rd', 'br', '', '');
            addElement('rd', 'button', 'BatA', 'Venceu', 'Battle("A")');
            addElement('rd', 'label', '', '    .    ');
            addElement('rd', 'button', 'BatB', 'Venceu', 'Battle("B")');


            event.preventDefault();

}

function CreateList(a,b,c,d,e,f,g,h,i,j){

    var Lista = [];
    var Vars = [a,b,c,d,e,f,g,h,i,j];
    var i; 

    for(i = 0; i < 10; i++){

        if(Vars[i] != ''){

            Lista.push(Vars[i]);

        }

    }

    CreateOrder(Lista);

}

function CreateOrder(arr){

    shuffle(arr);
    Ordem = arr;
    console.log(Ordem);
    StartGame();

}

function NewPlayer(){

    var player = document.getElementById("PLAYER").value;
    Ordem.push(player);
    document.getElementById("fourd").innerHTML = Ordem;
    
}

function StartGame(){

    document.getElementById("Jogador1").innerHTML = Ordem[0];
    document.getElementById("Jogador2").innerHTML = Ordem[1];

}

function Battle(letra){

    if(letra == 'A'){

        DeletarA(Ordem);

        document.getElementById("Jogador2").innerHTML = Find(Ordem, document.getElementById('Jogador1').innerHTML);

    }

    if(letra == 'B'){

        DeletarB(Ordem);

        document.getElementById("Jogador1").innerHTML = Find(Ordem, document.getElementById('Jogador2').innerHTML);

    }

    document.getElementById("fourd").innerHTML = Ordem;

}

function DeletarA(arr){


    console.log(arr);
    var d = document.getElementById("Jogador2").innerHTML;

    var num;

    for(num = 0; num < arr.length; num++){

        if(arr[num] == d){

            arr.push(arr[num]);
            delete arr[num];
            num = arr.length;

        }

    }

    return arr;

}

function DeletarB(arr){


    console.log(arr);
    var d = document.getElementById("Jogador1").innerHTML;

    var num;

    for(num = 0; num < arr.length; num++){

        if(arr[num] == d){

            arr.push(arr[num]);
            delete arr[num];
            num = arr.length;

        }

    }

    return arr;

}


function Find(arr, Jogador){

    var num;
    var Next = "";

    for(num = 0; num < arr.length; num++){

        if(Next == ""){

            if(arr[num] != undefined && arr[num] != Jogador){

                Next = arr[num];

            }

        }

    }

    return Next;
    
}

function removeElement(elementId) {
    
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);

}

function addElement(parentId, elementTag, elementId, html, onclick) {

    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    newElement.setAttribute('onclick', onclick);
    p.appendChild(newElement);

}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }