'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    */

    let users = []
    faker.locale = 'id_ID';

    users.push({
      name: "Admin",
      profession: "Admin Web",
      role: "admin",
      email: "admin@gmail.com",
      password: await bcrypt.hash("tester123", 10),
      created_at: new Date(),
      updated_at: null
    },{
      name: "Student",
      profession: "Student Web",
      role: "student",
      email: "student@gmail.com",
      password: await bcrypt.hash("tester123", 10),
      created_at: new Date(),
      updated_at: null
    })

    // Other Users
    for (let i = 0; i < 10; i++) {
      let user = {
        name: faker.name.findName(),
        profession: faker.name.jobTitle(),
        role: faker.random.objectElement(["admin", "student"]),
        email: faker.internet.email(),
        password: await bcrypt.hash("tester123", 10),
        created_at: new Date(),
        updated_at: null
      }

      users.push(user)
    }

    await queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
