import chai from "chai";
import chatHTTP from "chai-http";

import server from "../server";

let should = chai.should();

chai.use(chatHTTP);

describe("/image/getImage", () => {
  it("should take a signed token and a url of public image and return a 50x50 thumbnail of that image", done => {
    let payload = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZC5jb20iLCJwYXNzd29yZCI6IjEyMyIsImlhdCI6MTU1Njg4OTkzNiwiZXhwIjoxNTU2ODkzNTM2fQ.rDCjjNB7jn_x67LEpUlJD_y2yQPxXYLdHFRQ4C3IRRY",
      url: "https://wiztute.com/assets/banner1_36.jpg"
    };
    chai
      .request(server)
      .post("/image/getImage")
      .set("content-type", "application/x-www-form-urlencoded")
      .send(payload)
      .end((err, res) => {
        should.exist(res);
        res.should.have.status(200);
        done();
      });
  });
});
