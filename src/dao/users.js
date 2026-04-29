const pool = require('../../db');

const userDAO = {
  async findByUsername(username) {
    const result = await pool.query(
      'SELECT id, username, password_hash, created_at FROM users WHERE username = $1',
      [username]
    );
    return result.rows[0];
  },

  async findById(id) {
    const result = await pool.query(
      'SELECT id, username, created_at FROM users WHERE id = $1',
      [id]
    );
    return result.rows[0];
  },

  async createUser(username, passwordHash) {
    const result = await pool.query(
      'INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING id, username, created_at',
      [username, passwordHash]
    );
    return result.rows[0];
  }
};

module.exports = userDAO;