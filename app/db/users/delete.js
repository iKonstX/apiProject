module.exports = (knex) => {
    return async (selector) => {
        console.log(selector)
        return knex("users")
            .where(selector)
            .del()
    }
}