module.exports = (knex) => {
    return async (data) => {
        return knex("users")
            .where(data)
            .select()
    }
}