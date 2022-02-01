self.addEventListener('fetch', event => {
 
  if (event.request.method != 'GET') return;

  event.respondWith(async function() {
    
    const cache = await caches.open('dynamic-v1');
    const cachedResponse = await cache.match(event.request);

    if (cachedResponse) {     
      return cachedResponse;
    }
    
    // If we didn't find a match in the cache, use the network.
    response = await fetch(event.request)
    cache.put(event.request, response)
    return response;
  }());
});
