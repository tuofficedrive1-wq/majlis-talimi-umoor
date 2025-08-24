function loadPage(page) {
  fetch(page)
    .then(res => {
      if (!res.ok) throw new Error(`Page not found: ${page}`);
      return res.text();
    })
    .then(html => {
      document.getElementById("content").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("content").innerHTML = `<p style="color:red;">${err.message}</p>`;
    });
}