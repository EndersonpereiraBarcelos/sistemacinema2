async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(
    "mysql://Bep:2002@194.163.44.92:3306/cac"
  );
  console.log("Conectou no MySQL!");
  global.connection = connection;
  return connection;
}
