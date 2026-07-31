export default {
  async fetch(request) {
    return new Response("WORKER TEST SUCCESS", {
      status: 200,
      headers: {
        "content-type": "text/plain"
      }
    });
  }
};
