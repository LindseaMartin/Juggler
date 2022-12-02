async function getToDos() {
  const url = "/.netlify/functions/todos";
  const res = await fetch(url);
  const data = await res.json();
  document.querySelector("p").textContent = data.path;
}

getToDos();
