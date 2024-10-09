export default linkedList;
import nodeFactory from "./node-factory.mjs";

function linkedList() {
  let list = [];
  let outputString = "";

  function append(value) {
    let newNode = nodeFactory();
    newNode.value = value;
    if (list[list.length - 1]) {
      list[list.length - 1].nextNode = newNode.value;
    }
    list.push(newNode);
  }

  function toString(index = 0) {
    if (index === 0) {
      outputString = "";
    }

    if (index === list.length) {
      outputString += "null";
      return outputString;
    }

    outputString += `(${list[index].value}) -> `;
    return toString(index + 1);
  }
  return { append, toString };
}
