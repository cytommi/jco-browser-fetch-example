import { ping } from "./dist/transpiled/component.js";

console.log("ABOUT TO RUN PING!");
const result = ping("hi");
console.log("RAN:", { result });
