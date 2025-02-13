class CustomError extends Error {
  statuscode: number;
  messageClient: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.messageClient = message;
    this.statuscode = statusCode;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
