function main() {
  const canvas = document.querySelector("#glCanvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }
  gl.clearColor(4.0, 2.0, 8.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}
