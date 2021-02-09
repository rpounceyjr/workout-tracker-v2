const { Pool } = require("pg");

const pool = new Pool({
        user: "postgres",
        password: "All1Star36251!",
        host: "localhost",
        port: 5432,
        database: "workoutTrackerV2"
})

module.exports = pool;