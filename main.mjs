import linkedListFactory from "./linked-list-factory.mjs";

const list = new linkedListFactory();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
