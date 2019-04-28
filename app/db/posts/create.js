module.exports = (knex) => {
    return async (data) => {
        return knex("users")
            .select('id')
            .where({ session: data.session })
            .then((result) => {
                return knex("posts")
                    .insert({ userid: result[0].id, message: data.message })
            })
    }
}