  console.log('Helo script')

  const request = new Request('https://i.imgur.com/fHyEMsl.jpg', {method: 'GET', mode:'no-cors'})

  fetch(request)
    .then(async function(response) {	
      var cache = await caches.open('dynamic-v1');    	
      await cache.put(request, response)
  })

  if ('serviceWorker' in navigator) {              
      navigator.serviceWorker.register('sw.js');

  }
