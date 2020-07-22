export function createElement(Class, attrs, ...children) {
  let o;

  if (typeof Class === "string") {
    o = new Wrapper(Class);
  } else {
    o = new Class();
  }

  for (let name in attrs) {
    o.setAttribute(name, attrs[name]);
  }

  for (let child of children) {
    o.appendChild(child);
  }

  return o;
}

export class Wrapper {
  constructor(type) {
    this.root = document.createElement(type);
    this.children = [];
  }

  get style() {
    return this.root.style;
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }

  appendChild(child) {
    this.children.push(child);
  }

  addEventListener() {
    this.root.addEventListener(...arguments);
  }

  mountTo(parent) {
    parent.appendChild(this.root);

    let visit = (children) => {
      for (let child of children) {
        if (Array.isArray(child)) {
          visit(child);
          continue;
        }
        if (typeof child === "string") {
          child = new Text(child);
        }
        child.mountTo(this.root);
      }
    };
    visit(this.children);
  }
}

export class Text {
  constructor(type) {
    this.root = document.createTextNode(type);
  }

  mountTo(parent) {
    parent.appendChild(this.root);
  }
}
