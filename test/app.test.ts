import request from "supertest";
import appServer from "../src/svc/app";

describe("GET /random-url", () => {
    it("should return 404", (done) => {
        request(appServer.app).get("/reset")
            .expect(404, done);
    });
});
