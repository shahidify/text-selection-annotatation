import "./styles.css";

let storyEle = document.querySelector("#story");
storyEle.addEventListener("select", selectionAnnotation);

function selectionAnnotation(event) {
  let fullStr = event.target.value;
  let startIndex = event.target.selectionStart;
  let endIndex = event.target.selectionEnd;
  let selectedStr = fullStr.substring(startIndex, endIndex);
  // debugger;
  const strArr = selectedStr
    .replace(/[-.]/gi, "")
    .split(" ")
    .filter(item => item);
  debugger;
  if (!strArr.length) return "";

  let selectedWord =
    fullStr[startIndex - 1] === " " || !fullStr[startIndex - 1]
      ? strArr[0]
      : strArr[1];
  console.log(selectedWord);
  return selectedWord;
}
