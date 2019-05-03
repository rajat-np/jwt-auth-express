import chai from "chai";
import chatHTTP from "chai-http";

import server from "../server";

let should = chai.should();

chai.use(chatHTTP);

describe("/user/authenticate", () => {
  it("should take a email/password and return a token", done => {
    let payload = {
      email: "test@test.com",
      password: "1234"
    };
    chai
      .request(server)
      .post("/user/authenticate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send(payload)
      .end((err, res) => {
        should.exist(res);
        res.should.have.status(200);
        done();
      });
  });
});
