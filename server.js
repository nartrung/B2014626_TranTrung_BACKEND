const app = require("./app");
const config = require("./app/config");
const  MongoDB = require("./app/utils/mongodb.util");

async function startServer(){
  try {
    await MongoDB.connect(config.db.uri);
    console.log("Connected to the Database!");

    const port = config.app.port;
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  }catch (error){
    console.log("Can not connect to the Database!", error);
    process.exit();
  }
}

startServer();



