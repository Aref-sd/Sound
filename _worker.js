export default {
  async fetch(request) {
    return new Response("Sound-CBV Worker is faal", {
      headers: {
        "content-type": "text/plain"
      }
    });
  }
};
