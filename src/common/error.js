class customError extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
  }

  const catchError = fun => async (req, res, next) => {
    try {
      await fun(req, res, next);
    } catch (error) {
      return next(error);
    }
  };

  module.exports = {
    customError,
    catchError
  };
