class UserViewModel {
  constructor({ _id, email, firstName, lastName, createdAt, updatedAt }) {
    this.id = _id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
