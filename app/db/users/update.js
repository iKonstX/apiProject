module.exports = (knex) => {
    return async (selector, data) => {
        console.log(selector, data)
        return knex("users")
            .update(data)
            .where(selector)
            .then(() => {
                return knex("users")
                    .select()
                    .where(selector)
            })
    }
}