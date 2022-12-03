async function getToDos() {
  const res = await fetch('/.netlify/functions/todos');
  const data = await res.json();
  console.log(data);
}

getToDos();
