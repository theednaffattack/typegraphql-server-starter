import { createConnection } from "typeorm";

export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "eddie",
    password: "eddie",
    database: "typegrahpql_testing-TEST",
    dropSchema: drop,
    synchronize: true,
    entities: [__dirname + "/../entity/*.*"]
  });
};
