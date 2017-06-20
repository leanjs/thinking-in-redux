export const fetchBeers = () => (
  fetch(`/beers.json`, {
    method: 'GET'
  })
  .then(response => response.json())
)
