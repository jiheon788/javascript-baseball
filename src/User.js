class User {
  numbers;

  get numbers() {
    return this._numbers;
  }
  set numbers(value) {
    this._numbers = value
  }
}

module.exports = User;