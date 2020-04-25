// btnNew.onclick = function(){
//     var inputText = document.getElementById('inputText');
//     var itemText = inputText.nodeValue;

//     if(!itemText || itemText === "" || itemText === " " ) return false;

//     addNewItem(document.getElementById('todolist'), itemText);
// };
const btnNew = document.getElementById('btnAdd');
const todolist = document.getElementById('todolist');


function addNewItem(list, itemText){
    var listitem = document.createElement('li');
    listitem.innerText = itemText;
    list.appendchild(listitem);
};

var inputText = document.getElementById('inputText');
inputText.focus();

inputText.onkeyup = function(event) {
    if(event.which === 13){

        var itemText = inputText.nodeValue;

        if(!itemText || itemText === "" || itemText === " ") return false;
        addNewItem(todolist, itemText);
        inputText.focus();
        inputText.querySelector();
    }
}