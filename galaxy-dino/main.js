const getForm = document.querySelector('#get-form');
const response = document.querySelector('#response');
const status = document.querySelector('#status');

getForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
  const formData = new FormData(getForm);
  const slug = formData.get('slug');
  const data = await fetch(`http://localhost:8000/${slug}`);
  const json = await data.json();
  if(data.ok) {
    status.innerHTML = "Success ✅";
    response.innerHTML = JSON.stringify(json, null, 2);
  }
 } catch(e) {
    console.log(e);
    status.innerHTML = "Error 🛑";
    response.innerHTML = JSON.stringify(json, null, 2);
  }
});