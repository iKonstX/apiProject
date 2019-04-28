const knexConfig = require('./knexfile').development
const knex = require('knex')(knexConfig);

module.exports = () => {
    return {
        users: require('./users/')(knex),
        posts: require('./posts/')(knex),
    }
}