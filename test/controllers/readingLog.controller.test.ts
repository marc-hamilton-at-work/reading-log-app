import request from "supertest";
import appServer from "../../src/svc/app";

// tests for a non-existant reading log

describe("GET a reading log from /api/readinglogs", () => {
    it("should return 404", (done) => {
        request(appServer.app).get("/api/readinglogs/nope")
            .expect(404, done);
    });
});
