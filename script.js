var save = document.getElementById("savebtn");

save.addEventListener("click", () => {
  var lists = document.getElementById("lists");
  var list = document.createElement("div");
  var horizontalLine = document.createElement("hr");
  if(document.getElementById("question").value != "" && document.getElementById("answer").value != ""){
    lists.appendChild(list);
    list.style.width = "350px";
    list.style.height = "250px";
    
    var paragraph = document.createElement("p");
    var answer = document.createElement("p");

    list.appendChild(horizontalLine);
    list.appendChild(paragraph);
    list.appendChild(answer);
    
    
    paragraph.innerHTML = document.getElementById("question").value;
    document.getElementById("question").value = "";
    answer.innerHTML = document.getElementById("answer").value;
    document.getElementById("answer").value = "";

    answer.style.display = "none";
    answer.style.color = "red";

    list.addEventListener("click", () => {
      if(answer.style.display == "none")
        answer.style.display = "block";
      else
        answer.style.display = "none";
    })
  }
    
  else {
    alert("Inputs Cannot Be Empty")
  }

  
})