  console.log('Helo script')

async function store_image(){
  
  const request = new Request('https://i.imgur.com/fHyEMsl.jpg', {method: 'GET', mode:'no-cors'})

  var response = await fetch(request)
  var cache = await caches.open('dynamic-v1');    	
  await cache.put(request, response)
  
  if ('serviceWorker' in navigator) {              
      navigator.serviceWorker.register('sw.js');

  }
}
  
