async function loadPage(el) {
  const href = el.getAttribute('href');

  fetch(href)
    .then(response => {
      if(response.status !== 200) throw new Error('ERRO 404');
      return response.text();
    })
    .then(html => loadResult(html))
    .catch(err => console.log(err));
}

function loadResult(response) {
  const result = document.querySelector('.result');
  result.innerHTML = response;
}

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if(tag === 'a'){
    e.preventDefault();
    loadPage(el)
  }
});
