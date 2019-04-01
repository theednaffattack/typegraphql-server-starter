import { testConn } from "../../../test-utils/testConn";
import { Connection } from "typeorm";
import casual from "casual";

import { gCall } from "../../../test-utils/gCall";

let conn: Connection;

beforeAll(async done => {
  conn = await testConn();
  done();
});

afterAll(async done => {
  await conn.close();
  done();
});

const mockUser = {
  firstName: casual.first_name,
  lastName: casual.last_name,
  email: casual.email,
  password: "123456" // casual.password
};

// const mockUser2 = {
//   firstName: "bob",
//   lastName: "bob",
//   email: "bob@bob.com",
//   password: "skdjfksajfdksajfkjaskdfj"
// };

const registerMutation = `
mutation Register($data: RegisterInput!) {
  register(
    data: $data
  ) {
    id
    firstName
    lastName
    email
    name
  }
}
`;

describe("Register", () => {
  it("create user", async done => {
    // call resolver
    console.log(
      JSON.stringify(
        await gCall({
          source: registerMutation,
          variableValues: {
            data: mockUser
          }
        })
      )
    );

    done();
  });
});
