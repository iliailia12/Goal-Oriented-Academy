let exportedData = {};

export function readInputs() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;

  exportedData = { input1, input2 };
  return exportedData;
}


export { exportedData };
