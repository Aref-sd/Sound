export default {
  async fetch(request) {
    return new Response("WORKER IS RUNNING", {
      status: 200,
      headers: {
        "content-type": "text/plain;charset=UTF-8"
      }
    });
  }
};
