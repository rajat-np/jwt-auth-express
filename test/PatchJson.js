import chai from "chai";
import chatHTTP from "chai-http";

import server from "../server";

let should = chai.should();

chai.use(chatHTTP);

describe("/json/patchJson", () => {
  it("should take a signed token, a json object and a patch object and return a patched json object", done => {
    let payload = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZC5jb20iLCJwYXNzd29yZCI6IjEyMyIsImlhdCI6MTU1Njg4OTkzNiwiZXhwIjoxNTU2ODkzNTM2fQ.rDCjjNB7jn_x67LEpUlJD_y2yQPxXYLdHFRQ4C3IRRY",
      jsonData: '{ "baz":"qux", "foo": "bar" }',
      patchObject:
        '[{ "op": "replace", "path": "/baz", "value": "boo" },{ "op": "add", "path": "/hello", "value": ["world"] }, { "op": "remove", "path": "/foo" }]'
    };
    chai
      .request(server)
      .post("/json/patchJson")
      .set("content-type", "application/x-www-form-urlencoded")
      .send(payload)
      .end((err, res) => {
        should.exist(res.body);
        res.should.have.status(200);
        done();
      });
  });
});
