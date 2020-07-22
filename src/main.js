import { createElement } from "./createElement";
import { MyComponent } from "./MyComponent.view";

let component = <MyComponent id="idx" name="SFC and JSX" />;

component.mountTo(document.body);
console.log(component);
