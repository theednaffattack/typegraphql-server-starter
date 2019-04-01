import { testConn } from "../../../test-utils/testConn";
import { Connection } from "typeorm";
import casual from "casual";

import { gCall } from "../../../test-utils/gCall";
import { User } from "../../../entity/User";

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
  password: casual.password
};

// const mockUser2 = {
//   firstName: "bob",
//   lastName: "bob",
//   email: "bob@bob.com",
//   password: "skdjfksajfdksajfkjaskdfj"
// };

const meQuery = `
{
    me{
       firstName
      lastName
      email
      name
      id
    }
  }
`;

describe("Me", () => {
  it("get user info", async done => {
    // call resolver

    const user = await User.create({
      firstName: mockUser.firstName,
      lastName: mockUser.lastName,
      email: mockUser.email,
      password: mockUser.password
    }).save();

    const response = await gCall({
      source: meQuery,
      userId: user.id
    });
    console.log(user);
    console.log(JSON.stringify(response));

    done();
  });
});
