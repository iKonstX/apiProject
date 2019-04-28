module.exports = (knex) => {
    return async (data) => {
        return knex("users")
            .insert(data)
            .then((result) => {
                return knex("users")
                    .select('name', 'session')
                    .where(data)
            })
    }
}