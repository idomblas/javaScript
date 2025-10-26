// script.js

// 1. Referencias a los elementos del DOM
const output = document.getElementById("output");
const btnArticle1 = document.getElementById("btn-article-1");
const btnArticleN = document.getElementById("btn-article-n");
const btnAllArticles = document.getElementById("btn-all-articles");
const inputArticleNumber = document.getElementById("article-number");

/**
 * Función de utilidad para mostrar el contenido en el área de resultados.
 * @param {string} htmlContent - El contenido HTML a mostrar.
 */
function displayData(htmlContent) {
  output.innerHTML = htmlContent;
}

// ----------------------------------------------------------------------
// PARTE 1: Artículo 1
// ----------------------------------------------------------------------

async function fetchArticle1() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  displayData("Cargando Artículo 1...");

  try {
    // Realizar la petición
    const response = await fetch(url);

    // **Requisito: Loguear el status**
    console.log(
      `Status de la Petición para Artículo 1: ${response.status} (${response.statusText})`
    );

    // Mostrar el status en el navegador temporalmente
    displayData(
      `<p class="status-log">Status de la Petición: ${response.status}</p>`
    );

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    // Convertir la respuesta a JSON
    const data = await response.json();

    // Mostrar los datos en el navegador
    const html = `
            <div class="article">
                <h3>Artículo 1 (ID: ${data.id})</h3>
                <h4>${data.title}</h4>
                <p><strong>Contenido:</strong> ${data.body}</p>
            </div>
            <p class="status-log">Status de la Petición: ${response.status}</p>
        `;
    displayData(html);
  } catch (error) {
    console.error("Error al obtener Artículo 1:", error);
    displayData(
      `<p class="error">Error al cargar el Artículo 1: ${error.message}</p>`
    );
  }
}

// ----------------------------------------------------------------------
// PARTE 2: Artículo 2 (con Selector Web)
// ----------------------------------------------------------------------

async function fetchArticleN() {
  const articleId = inputArticleNumber.value;

  if (!articleId || isNaN(articleId) || articleId < 1) {
    displayData(
      '<p class="error">Por favor, introduce un número de artículo válido (1-100).</p>'
    );
    return;
  }

  const url = `https://jsonplaceholder.typicode.com/posts/${articleId}`;
  displayData(`Cargando Artículo ${articleId}...`);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    // La API devuelve un objeto vacío si el post no existe
    if (Object.keys(data).length === 0) {
      displayData(`<p class="error">Artículo ${articleId} no encontrado.</p>`);
      return;
    }

    // Mostrar los datos
    const html = `
            <div class="article">
                <h3>Artículo ${articleId} (ID: ${data.id})</h3>
                <h4>${data.title}</h4>
                <p><strong>Contenido:</strong> ${data.body}</p>
            </div>
        `;
    displayData(html);
  } catch (error) {
    console.error(`Error al obtener Artículo ${articleId}:`, error);
    displayData(
      `<p class="error">Error al cargar el Artículo ${articleId}: ${error.message}</p>`
    );
  }
}

// ----------------------------------------------------------------------
// PARTE 3: Todos los Artículos
// ----------------------------------------------------------------------

async function fetchAllArticles() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  displayData("Cargando todos los artículos...");

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    // Mapear los datos para crear el HTML del listado
    const articlesHtml = data
      .map(
        (post) => `
            <div class="article">
                <h3>${post.title} (ID: ${post.id})</h3>
                <p>Contenido: ${post.body}</p>
            </div>
        `
      )
      .join(""); // El .join('') une todos los elementos del array en un solo string

    const finalHtml = `
            <h2>Listado de Todos los Artículos (${data.length} encontrados)</h2>
            <div class="list-container">${articlesHtml}</div>
        `;

    displayData(finalHtml);
  } catch (error) {
    console.error("Error al obtener todos los artículos:", error);
    displayData(
      `<p class="error">Error al cargar todos los artículos: ${error.message}</p>`
    );
  }
}

// ----------------------------------------------------------------------
// 3. Asignar los manejadores de eventos (al final del script)
// ----------------------------------------------------------------------

btnArticle1.addEventListener("click", fetchArticle1);
btnArticleN.addEventListener("click", fetchArticleN);
btnAllArticles.addEventListener("click", fetchAllArticles);
