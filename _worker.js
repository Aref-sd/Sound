export default {
  async fetch(request) {
    return new Response("Sound-CBV Worker is running", {
      headers: {
        "content-type": "text/plain"
      }
    });
  }
};
