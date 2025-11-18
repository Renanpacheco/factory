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

// Criando usuários SEM factory
const user1 = new Admin("Carlos", "carlos@example.com");
const user2 = new Student("Ana", "ana@example.com");
const user3 = new Teacher("Marcos", "marcos@example.com");

console.log(user1, user2, user3);
