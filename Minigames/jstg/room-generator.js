function addRoom() {
    const roomName = document.getElementById("roomName").value;
    const roomDesc = document.getElementById("roomDesc").value;
    const roomData = [];
  
    // Add room description
    roomData.push(roomDesc);
  
    // Add exits
    const exits = document.getElementsByClassName("exit");
    for (let i = 0; i < exits.length; i++) {
      const exitData = {};
      const exitType = exits[i].querySelector(".exit-type").value;
      const exitText = exits[i].querySelector(".exit-text").value;
      const exitDest = exits[i].querySelector(".exit-dest").value;
      const exitCond = exits[i].querySelector(".exit-cond").value;
      const exitColor1 = exits[i].querySelector(".exit-color1").value;
      const exitColor2 = exits[i].querySelector(".exit-color2").value;
  
      exitData["type"] = exitType;
      exitData["text"] = exitText;
      exitData["destination"] = exitDest;
      exitData["conditions"] = [[exitCond, "==", "true"]];
      exitData["colors"] = [exitColor1, exitColor2];
  
      roomData.push(exitData);
    }
  
    // Add declarations
    const declares = document.getElementsByClassName("declare");
    for (let i = 0; i < declares.length; i++) {
      const declareData = {};
      const declareCond = declares[i].querySelector(".declare-cond").value;
      const declareFlag = declares[i].querySelector(".declare-flag").value;
      const declareValue = declares[i].querySelector(".declare-value").value;
  
      declareData["type"] = "declare";
      declareData["conditions"] = [[declareCond, "==", "true"]];
      declareData["setFlag"] = declareFlag;
      declareData["value"] = declareValue;
  
      roomData.push(declareData);
    }
  
    // Add room to dictionary
    rooms[roomName] = roomData;
  
    // Reset form
    document.getElementById("roomForm").reset();
    document.getElementById("exits").innerHTML = "";
    document.getElementById("declares").innerHTML = "";
  
    // Display dictionary
    document.getElementById("output").innerHTML = JSON.stringify(rooms, null, 2);
  }
  
  function addExit() {
    const exitDiv = document.createElement("div");
    exitDiv.classList.add("exit");
  
    const exitType = document.createElement("input");
    exitType.setAttribute("type", "text");
    exitType.classList.add("exit-type");
    exitType.setAttribute("placeholder", "Type");
    exitDiv.appendChild(exitType);
  
    const exitText = document.createElement("input");
    exitText.setAttribute("type", "text");
    exitText.classList.add("exit-text");
    exitText.setAttribute("placeholder", "Text");
    exitDiv.appendChild(exitText);
  
    const exitDest = document.createElement("input");
    exitDest.setAttribute("type", "text");
    exitDest.classList.add("exit-dest");
    exitDest.setAttribute("placeholder", "Destination");
    exitDiv.appendChild(exitDest);
  
    const exitCond = document.createElement("input");
    exitCond.setAttribute("type", "text");
    exitCond.classList.add("exit-cond");
    exitCond.setAttribute("placeholder", "Conditions");
    exitDiv.appendChild(exitCond);
  
    const exitColor1 = document.createElement("input");
    exitColor1.setAttribute("type", "color");
    exitColor1.classList.add("exit-color1");
    exitColor1.setAttribute("value", "#f6b629");
    exitDiv.appendChild(exitColor1);
  
    const exitColor2 = document.createElement("input");
    exitColor2.setAttribute("type", "color");
    exitColor2.setAttribute("value", "#111111");
    exitColor2.classList.add("exit-color2");
    exitDiv.appendChild(exitColor2);
    
    const exitRemove = document.createElement("button");
    exitRemove.textContent = "Remove Exit";
    exitRemove.addEventListener("click", function() {
    exitDiv.remove();
    });
    exitDiv.appendChild(exitRemove);
    
    document.getElementById("exits").appendChild(exitDiv);
    }
    
    function addDeclare() {
    const declareDiv = document.createElement("div");
    declareDiv.classList.add("declare");
    
    const declareCond = document.createElement("input");
    declareCond.setAttribute("type", "text");
    declareCond.classList.add("declare-cond");
    declareCond.setAttribute("placeholder", "Conditions");
    declareDiv.appendChild(declareCond);
    
    const declareFlag = document.createElement("input");
    declareFlag.setAttribute("type", "text");
    declareFlag.classList.add("declare-flag");
    declareFlag.setAttribute("placeholder", "Flag");
    declareDiv.appendChild(declareFlag);
    
    const declareValue = document.createElement("input");
    declareValue.setAttribute("type", "text");
    declareValue.classList.add("declare-value");
    declareValue.setAttribute("placeholder", "Value");
    declareDiv.appendChild(declareValue);
    
    const declareRemove = document.createElement("button");
    declareRemove.textContent = "Remove Declaration";
    declareRemove.addEventListener("click", function() {
    declareDiv.remove();
    });
    declareDiv.appendChild(declareRemove);
    
    document.getElementById("declares").appendChild(declareDiv);
    }
    
    document.getElementById("addExit").addEventListener("click", addExit);
    document.getElementById("addDeclare").addEventListener("click", addDeclare);
    document.getElementById("submitRoom").addEventListener("click", addRoom);
  