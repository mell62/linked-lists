export default linkedList;
import nodeFactory from "./node-factory.mjs";

function linkedList() {
  let head = null;
  let outputString = "";

  function append(value) {
    let newNode = nodeFactory();
    newNode.value = value;
    if (!head) {
      head = newNode;
      return;
    }
    let currentNode = head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  }

  function toString(currentNode = head) {
    if (head === null) {
      return null;
    }
    if (currentNode === head) {
      //reset string if toString is called again after appending elements
      outputString = "";
    }
    if (currentNode === null) {
      outputString += `null`;
      return outputString;
    }
    outputString += `(${currentNode.value}) -> `;
    return toString(currentNode.nextNode);
  }
  return { append, toString };
}
