const newsSources = document.querySelectorAll('.sources li');
const headlinesList = document.querySelector('.headlines ul');
const newsDetails = document.querySelector('.details');

newsSources.forEach(source => {
  source.addEventListener('click', async () => {
    const newsSource = source.dataset.source;
    const url = `http://localhost:3000/news?source=${newsSource}`;

    const response = await fetch(url);
    const data = await response.json();

    headlinesList.innerHTML = '';
    data.articles.forEach(article => {
      const li = document.createElement('li');
      li.textContent = article.title;
      headlinesList.appendChild(li);
    });
  });
});
