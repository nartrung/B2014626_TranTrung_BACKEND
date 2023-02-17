const app = require("./app");
const config = require("./app/config");

const port = config.app.port;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
