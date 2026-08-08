self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
    })
  );
});
