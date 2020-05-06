// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import wasmInit from "./pkg/js_jedis.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const helloWorld = await wasmInit("./pkg/js_jedis_bg.wasm");

  // Call the Add function export from wasm, save the result
  const addResult = helloWorld.add(24, 24);  

  // Set the result onto the body
  document.body.textContent = `Hello World! addResult: ${addResult}`;
};
runWasm();
