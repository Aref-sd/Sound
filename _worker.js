export default {
  async fetch(request) {
    return new Response("Sound-CBV Worker is ", {
      headers: {
        "content-type": "text/plain"
      }
    });
  }
};
