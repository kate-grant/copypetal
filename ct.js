(function() {
  let petal = document.createElement("div");
  petal.id = "petal";
	petal.style.position = "absolute";
	petal.style.top = 0;
	petal.style.left = 0;
  petal.style.width = "auto";
  petal.style.color = "#063d22";
  petal.style.fontFamily = "Monaco";
  petal.style.backgroundImage = "linear-gradient(to bottom right, #d1684d, #e6d6bc)";
  petal.style.borderRadius = "10px";
  petal.style.margin = "8px";
  petal.style.display = "flex";
  petal.style.maxWidth = "300px";
  petal.style.minWidth = "15px";
  petal.style.flexWrap = "wrap";
  petal.style.padding = "10px";
  petal.style.visibility = "hidden";
  petal.style.pointerEvents = "none";
	petal.innerText = "petal";
	document.body.appendChild(petal);
    console.log("hello3");
})();

document.addEventListener('mousemove', function(e) {
    let petal = document.getElementById('petal');
      offsetX = e.pageX;
      offsetY = e.pageY;
      
  petal.style.top = offsetY + 'px';
  petal.style.left = offsetX + 'px';

  });

  async function getClipboardContents() {
    console.log("in CB");
    try {
      const text = await navigator.clipboard.readText();
      console.log('Pasted content: ', text);
      return text;
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
      return "oops";
    }
  }

  function togglePetal (result){
    console.log("hello4");
    console.log(result);
    let toggleUsage = document.getElementById('petal');
  
      console.log("hello5");
      if(toggleUsage.style.visibility == "hidden"){
        toggleUsage.innerText = result;
        toggleUsage.style.visibility = "visible";
        console.log("hello6");
      } else {
        toggleUsage.style.visibility = "hidden";
        console.log("hello7");
      }
    
  }

  
  getClipboardContents().then(result => togglePetal(result));

  

  


