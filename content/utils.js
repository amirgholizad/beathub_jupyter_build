async function getBars() {
  const response = await fetch("https://localhost:3000/api/history");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
