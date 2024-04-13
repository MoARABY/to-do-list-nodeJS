const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "VALIDATION_ERROR",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "NOT_FOUND",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UN_AUTHORIZED:
      res.json({
        title: "UN_AUTHORIZED",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "SERVER_ERROR",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      res.json({
        title: "CANNOT DEFINED",
        msg: err.message,
        stackTrace: err.stack,
      });
      break;
  }
};

module.exports = errorHandler;
