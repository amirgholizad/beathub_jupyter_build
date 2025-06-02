// import fs from "fs";

export function test() {
  console.log("Helooooooo");
}

async function getBars(symbol, from, to, resolution) {
  const response = await fetch("https://localhost:3000/api/history", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    params: {
      symbol: symbol,
      from: from,
      to: to,
      resolution: resolution,
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function testOnRealBars(symbol, from, to, resolution, args) {
  try {
    const bars = await getBars(symbol, from, to, resolution);
    const tool = new Tool(...args);
    return tool.indicator(bars);
  } catch (error) {
    console.error("Error fetching or processing bars:", error);
    throw error;
  }
}

export async function saveTool({ symbol, from, to, resolution, args }) {
  const code = fs.readFileSync("./content/tool.js", "utf8");
  try {
    const result = await testOnRealBars(symbol, from, to, resolution, args);
    const response = await fetch("https://localhost:3000/api/indicator-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        code: code,
        result: result,
      }),
    }).then();
    if (!response.ok) {
      throw new Error("Failed to save tool");
    }
    return await response.json();
  } catch (error) {
    console.error("Error saving tool:", error);
    throw error;
  }
}
