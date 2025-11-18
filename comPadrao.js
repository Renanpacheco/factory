class Admin {
  constructor(name, email) {
    this.role = "admin";
    this.name = name;
    this.email = email;
    this.permissions = ["create", "read", "update", "delete"];
  }
}

class Student {
  constructor(name, email) {
    this.role = "student";
    this.name = name;
    this.email = email;
    this.permissions = ["read"];
  }
}

class Teacher {
  constructor(name, email) {
    this.role = "teacher";
    this.name = name;
    this.email = email;
    this.permissions = ["read", "update"];
  }
}

// FACTORY
class UserFactory {
  static createUser(type, name, email) {
    const types = {
      admin: Admin,
      student: Student,
      teacher: Teacher,
    };

    const UserClass = types[type.toLowerCase()];

    if (!UserClass) {
      throw new Error(`Tipo de usuário não suportado: ${type}`);
    }

    return new UserClass(name, email);
  }
}

// Criando usuários COM factory
const user1 = UserFactory.createUser("admin", "Carlos", "carlos@example.com");
const user2 = UserFactory.createUser("student", "Ana", "ana@example.com");
const user3 = UserFactory.createUser("teacher", "Marcos", "marcos@example.com");

console.log(user1, user2, user3);
