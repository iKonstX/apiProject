module.exports = (knex) => {
    return {
        create: require('./create')(knex),
        list: require('./list')(knex),
        auth: require('./auth')(knex),
        update: require('./update')(knex),
        delete: require('./delete')(knex)
    }
}