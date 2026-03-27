async function increment() {
  const res = await fetch('/api/increment');
  const data = await res.json();
  document.getElementById('count').innerText = data.count;
}