const { createServer } = require("http");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => handle(req, res)).listen(port, () => {
      console.log(`Listo en puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error("No se pudo iniciar el servidor:", error);
    process.exit(1);
  });
