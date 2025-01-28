class NotFound extends Error {
  constructor(message = "Not Found") {
    super();
    this.message = message;
    this.status = 404;
  }
}

module.exports = NotFound;
