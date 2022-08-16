"use strict";

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
    await queryInterface.bulkInsert("Posts", [
      {
        title: "title post 1",
        image: "http://imagepost1.com",
        body: "this body for post 1",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "title post 2",
        image: "http://imagepost2.com",
        body: "this body for post 2",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "title post 3",
        image: "http://imagepost3.com",
        body: "this body for post 3",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "title post 4",
        image: "http://imagepost4.com",
        body: "this body for post 4",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "title post 5",
        image: "http://imagepost5.com",
        body: "this body for post 5",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "title post 6",
        image: "http://imagepost6.com",
        body: "this body for post 6",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "title post 7",
        image: "http://imagepost7.com",
        body: "this body for post 7",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "title post 8",
        image: "http://imagepost8.com",
        body: "this body for post 8",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "title post 9",
        image: "http://imagepost9.com",
        body: "this body for post 9",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "title post 10",
        image: "http://imagepost10.com",
        body: "this body for post 10",
        user_id: 1,
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
