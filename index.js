var todosArray = [];

function saveTodas() {
    var title = document.getElementById("title").value ;
    if(title == ""){
        alert("please fill title")
        return;
    }
    todosArray.push(title);
    document.getElementById("title").value = "";
    localStorage.setItem("my-todas", todosArray.toString());
    fetchTodas();
}

function fetchTodas() {
    var str = localStorage.getItem("my-todas");
    todosArray = str.split(",")    
    var htmlString = `
                <tr>
                     <th> sr. no. </th>
                     <th> title </th>
                     <th> action </th>
                     </tr>
                     `
    var counter = 0;

    todosArray.forEach((ele) => {
        counter++ ;
        htmlString += `      
            <tr>
            <td> ${counter}</td>
            <td> ${ele} </td>
            <td> 
            <button class= "btn btn-warning" onclick="editText(${counter-1})">edit</button>
            <button class= "btn btn-danger" onclick="deleteText(${counter-1})">delete</button> 
            </td>
            </tr>`
        
    })
    var todoTable = document.getElementById("todoTable").innerHTML = htmlString;

}

function editText(index) {
    var newValue = prompt("do you want to change", todosArray[index])
    if(newValue !="" && newValue != null){
        todosArray[index] = newValue;
        localStorage.setItem("my-todas", todosArray.toString());
    fetchTodas();
    }
    

}

function deleteText(index) {
    if(confirm("do you really want to delete")){
        todosArray.splice(index,1);
        localStorage.setItem("my-todas", todosArray.toString());
    fetchTodas();
    }
}

function resetTodas(){
    localStorage.removeItem("my-todas")
    document.getElementById("todoTable").innerHTML = ""
    var todoArray = [];        
}

function clearAll() {
    document.getElementById("title").value = ""
}