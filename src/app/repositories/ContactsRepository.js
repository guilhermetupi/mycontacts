const { v4: uuid } = require('uuid');

const contacts = [
  {
    id: uuid(),
    name: 'Pâmela',
    email: 'pamela@mail.com',
    phone: '11999999999',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Danilo',
    email: 'danilo@mail.com',
    phone: '11999999999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((res) => res(contacts));
  }

  findById(id) {
    return new Promise((res) => res(contacts.filter((contact) => contact.id === id)));
  }

  findByEmail() {

  }
}

module.exports = new ContactsRepository();
