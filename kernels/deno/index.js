// Minimal kernel execution mock (runs JS only)
self.onmessage = async (event) => {
  const { code } = event.data;
  try {
    const result = await eval(code);
    self.postMessage({ result: result?.toString?.() ?? String(result) });
  } catch (err) {
    self.postMessage({ error: err.message });
  }
};
