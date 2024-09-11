
export async function reservation(data: any) {
  const apiEndpoint = '/api/billetAvion';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log('from utils', response)
      // alert(response.message);
    })
    .catch((err) => {
      console.log('from utils', err)
      // alert(err);
    });
};