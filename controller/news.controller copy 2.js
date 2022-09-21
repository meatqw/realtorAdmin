const db = require("../db");

class userController {
  async create(req, res) {
    const { id, login, fullname, phone, expirience, job, region, key, datetime  } = req.body;
    const newUser = await db.query(
      "INSERT INTO users (id, login, fullname, phone, expirience, job, region, key, datetime) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [id, login, fullname, phone, expirience, job, region, key, datetime]
    );
    res.json(newUser.rows[0]);
  }

  async all(req, res) {
    const users = await db.query("SELECT * FROM users");
    res.json(users.rows);
  }

  async get(req, res) {
    const id = req.params.id;
    const user = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    res.json(users.rows[0]);
  }

  async update(req, res) {
    const { id, login, fullname, phone, expirience, job, region, key, datetime } = req.body;
    const user = await db.query(
      "UPDATE users set login = $1, fullname = $2, phone = $3, expirience = $4, job = $5, region = $6, key = $7, datetime = $8 where id = $9 RETURNING *",
      [login, fullname, phone, expirience, job, region, key, datetime, id]
    );

    res.json(user.rows[0]);
  }

  async delete(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE FROM users WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new userController();
