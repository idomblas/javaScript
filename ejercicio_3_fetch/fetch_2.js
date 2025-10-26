const output = document.getElementById("output");

function mostrarError(error) {
  console.error("Error:", error);
  output.innerHTML = `<p style="color:red;">Ocurrió un error: ${error.message}</p>`;
}

document.getElementById("btn1").addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("Status:", response.status);

    if (!response.ok)
      throw new Error("Error en la petición (status " + response.status + ")");

    const data = await response.json();
    output.innerHTML = `
      <h2>Artículo 1</h2>
      <p><strong>Título:</strong> ${data.title}</p>
      <p><strong>Contenido:</strong> ${data.body}</p>
    `;
  } catch (error) {
    mostrarError(error);
  }
});

document.getElementById("btn2").addEventListener("click", async () => {
  const num = document.getElementById("numArticulo").value;
  if (num < 1 || num > 100) {
    output.innerHTML = "<p>Por favor, introduce un número entre 1 y 100.</p>";
    return;
  }

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${num}`
    );
    console.log("Status:", response.status);

    if (!response.ok)
      throw new Error("Error en la petición (status " + response.status + ")");

    const data = await response.json();
    output.innerHTML = `
      <h2>Artículo ${num}</h2>
      <p><strong>Título:</strong> ${data.title}</p>
      <p><strong>Contenido:</strong> ${data.body}</p>
    `;
  } catch (error) {
    mostrarError(error);
  }
});

document.getElementById("btnTodos").addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("Status:", response.status);

    if (!response.ok)
      throw new Error("Error en la petición (status " + response.status + ")");

    const data = await response.json();
    let html =
      "<h2>Todos los artículos</h2><table><tr><th>Título</th><th>Contenido</th></tr>";
    data.forEach((post) => {
      html += `<tr><td>${post.title}</td><td>${post.body}</td></tr>`;
    });
    html += "</table>";
    output.innerHTML = html;
  } catch (error) {
    mostrarError(error);
  }
});
