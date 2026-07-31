
export default {
  async fetch(request) {
    return new Response("WORKER IS ACTIVE", {
      headers: {
        "content-type": "text/plain"
      }
    });
  }
};
