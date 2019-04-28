module.exports = (knex) => {
    return async (data) => {
        return knex("users")
            .select('name', 'session')
            .where(data)
    }
}