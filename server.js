const app = require("./src/app");

const port = process.env.PORT || 3001; // Define port number or default to 3001 if not provided

const server = app.listen(port, () => {
  console.log(`WSV Ecommerce start with: ${port}`); // Server started successfully
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log(`Exit Server Express`);
  });
});
