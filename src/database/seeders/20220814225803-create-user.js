"use strict";

const bcrypt = require("bcrypt");
const defaultPassword = "Password@123";
const saltRounds = 10;

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        fullName: "user satu",
        email: "email@gmail.com",
        password: bcrypt.hashSync(defaultPassword, saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "user dua",
        email: "emaildua@gmail.com",
        password: bcrypt.hashSync(defaultPassword, saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "user tiga",
        email: "emailtiga@gmail.com",
        password: bcrypt.hashSync(defaultPassword, saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
