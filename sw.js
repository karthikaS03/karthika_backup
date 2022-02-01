self.addEventListener('activate', function(event) {
  console.log('Claiming control');
  event.waitUntil(self.clients.claim());
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
       console.log('error')
    }
    else{     
     var response = await fetch(event.request)
     var res = response.clone()
     cache.put(event.request, response)
      return res;
     }  
  }());
});
