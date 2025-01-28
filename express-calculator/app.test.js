const request = require("supertest");
const app = require("./app");

describe("Express App Tests", () => {
  describe("GET /mean", () => {
    it("should return the mean of the given numbers", async () => {
      const response = await request(app).get("/mean?nums=2,4,6");

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ operation: "mean", value: 4 });
    });

    it("should return 400 if 'nums' is missing", async () => {
      const response = await request(app).get("/mean");

      expect(response.statusCode).toBe(400);
      expect(response.body).toEqual({ error: "nums are required" });
    });

    it("should return 400 if 'nums' has invalid number", async () => {
      const response = await request(app).get("/mean?nums=2,4,foo");

      expect(response.statusCode).toBe(400);
      expect(response.body).toEqual({ error: "foo is not a number" });
    });
  });

  describe("GET /median", () => {
    it("should return the median of the given odd-length numbers", async () => {
      const response = await request(app).get("/median?nums=2,10,4");

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ operation: "median", value: 4 });
    });

    it("should return the median of the given even-length numbers", async () => {
      const response = await request(app).get("/median?nums=2,10,4,6");

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ operation: "median", value: 5 });
    });
  });

  describe("GET /mode", () => {
    it("should return the mode of the given numbers", async () => {
      const response = await request(app).get("/mode?nums=1,2,2,3");

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ operation: "mode", value: 2 });
    });

    it("should return the mode if multiple same frequency (it should pick the first max found)", async () => {
      const response = await request(app).get("/mode?nums=1,2,2,3,3");

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ operation: "mode", value: 2 });
    });
  });

  describe("GET /all", () => {
    it("should return mean, median, and mode of the numbers", async () => {
      const response = await request(app).get("/all?nums=2,4,4,6,8");
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        operation: "all",
        mean: 4.8,
        median: 4,
        mode: 4,
      });
    });
  });
});
