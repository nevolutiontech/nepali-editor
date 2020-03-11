function chooseColor() {
  var mycolor = document.getElementById("myColor").value;
  document.execCommand("foreColor", false, mycolor);

}

function changeSize() {
  var mysize = document.getElementById("fontSize").value;
  document.execCommand("fontSize", false, mysize);
}

function checkDiv() {
  var editorText = document.getElementById("editor").innerHTML;
  if (editorText === "") {
    document.getElementById("editor").style.border = "5px solid red";
  }
}

function removeBorder() {
  document.getElementById("editor").style.border = "1px solid transparent";
}

function changeStyle() {
  const editor = document.getElementById("editor")
  if (editor.style.fontStyle === "normal") {
    editor.style.fontStyle = "italic";
  } else {
    editor.style.fontStyle = "normal";
  }
}

function changeBold() {
  const editor = document.getElementById("editor")
  if (editor.style.fontWeight == "bolder" ) {
    editor.style.fontWeight = "normal";
  } else {
    editor.style.fontWeight = "bolder";
  }
  
}

function underlineText() {
  const editor = document.getElementById("editor")
  if (editor.style.textDecoration == "underline" ) {
    editor.style.textDecoration = "none";
  } else {
    editor.style.textDecoration = "underline";
  }
  
}
