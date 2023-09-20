console.log("Hello via Bun!");
// Creating a server
const server = Bun.serve({
  port: process.env.PORT,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page");
    if (url.pathname === "/blog") return new Response("List of Blogs");
    return new Response("404!")
  },
});

console.log(`Listening on port ${server.port}`);
