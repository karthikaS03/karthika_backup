self.addEventListener('activate', function(event) {
  console.log('Claiming control');
  return self.clients.claim();
});

self.addEventListener('fetch', event => { 
  if (event.request.method != 'GET') return;

  event.respondWith(async function() {    
    const cache = await caches.open('dynamic-v1');
    const cachedResponse = await cache.match(event.request);
    
    if (cachedResponse) {     
      return cachedResponse;
    }
    if (event.request.url.indexOf('imgur')>0){
        // If we didn't find a match in the cache, use the network.
      var response = await fetch(event.request.url, {method:'POST', mode:'no-cors'})
    }
    else{
      var response = await fetch(event.request)
    }
    cache.put(event.request, response)
    return response;
  }());
});
