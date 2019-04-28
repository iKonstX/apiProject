const uniqid = require('uniqid');
exports.up = function (knex, Promise) {
    return Promise.all([knex.schema.createTable("users", (t) => {
        t
            .increments()
            .index();

        t
            .string("name", 30)
            .unique()
            .notNullable()
            .index();

        t
            .string("password", 30)
            .notNullable()
            .index();

        t
            .string("session", 30)
            .unique()
            .notNullable()
            .index();

    }).then(() => {
        return knex("users")
            .insert([{ name: "Konst", password: "1234", session: uniqid() },
            { name: "Ben", password: "1234", session: uniqid() },
            { name: "Ania", password: "1234", session: uniqid() },
            { name: "Ian", password: "1234", session: uniqid() },
            { name: "Melvin", password: "1234", session: uniqid() },
            { name: "Shruti", password: "1234", session: uniqid() },
            { name: "Florin", password: "1234", session: uniqid() },
            { name: "Johannes", password: "1234", session: uniqid() },
            { name: "Yan", password: "1234", session: uniqid() },
            { name: "Yasu", password: "1234", session: uniqid() },
            { name: "Dustin", password: "1234", session: uniqid() },
            { name: "Mary", password: "1234", session: uniqid() },
            { name: "Heather", password: "1234", session: uniqid() },
            { name: "Tommy", password: "1234", session: uniqid() },
            { name: "Min", password: "1234", session: uniqid() },
            { name: "Go", password: "1234", session: uniqid() },
            { name: "Felix", password: "1234", session: uniqid() },
            { name: "Rachel", password: "1234", session: uniqid() }])
    })]);


};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("users");
};
