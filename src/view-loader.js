const parser = require("./parser");

module.exports = function (source, map) {
  const tree = parser.parseHTML(source);

  let template = null;
  let script = null;
  let style = null;
  for (let node of tree.children) {
    if (node.tagName === "template") {
      template = node.children.filter((e) => e.type !== "text")[0];
    }
    if (node.tagName === "script") {
      script = node.children[0].content;
    }
    if (node.tagName === "style") {
      style = node.children[0].content;
    }
  }

  let visit = (node) => {
    if (node.type === "text") {
      return JSON.stringify(node.content);
    }
    let attrs = {};
    for (let attr of node.attributes) {
      attrs[attr.name] = attr.value;
    }
    let children = node.children.map((node) => visit(node));
    return `createElement("${node.tagName}", ${JSON.stringify(
      attrs
    )}, ${children})`;
  };

  let result = `
import {createElement} from "./createElement"
export class MyComponent {
  render() {
    return ${visit(template)}
  }
  setAttribute(name, value) {
    this[name] = value;
  }
  mountTo(parent) {
    this.render().mountTo(parent);
  }
}
  `;
  console.log(result);
  return result;
};
