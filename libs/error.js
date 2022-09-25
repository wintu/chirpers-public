class BaseError extends Error {
  constructor(code, name, message, optional = {}) {
    super(message)
    this.name = name
    this.code = code
    this.optional = optional
    this.extendBaseError = true
  }

  toJSON() {
    const json = {
      code: this.code,
      name: this.name,
      message: this.message
    }

    return Object.assign(json, this.optional)
  }
}

class NotFoundError extends BaseError {
  constructor(message) {
    super('0000', 'NotFound', message || 'アクセス先が見つかりませんでした')
  }
}

class LogicalError extends BaseError {
  constructor(message) {
    super('0001', 'LogicalError', message)
  }
}

class InvalidParamsError extends BaseError {
  constructor(validationObject) {
    super('0002', 'InvalidParams', '入力された情報が正しくありません', {meta: validationObject.mapped()})
  }
}

class UnauthorizedAccessError extends BaseError {
  constructor(message) {
    super('0003', 'UnauthorizedAccess', message)
  }
}

module.exports = {BaseError, NotFoundError, LogicalError, InvalidParamsError, UnauthorizedAccessError}
