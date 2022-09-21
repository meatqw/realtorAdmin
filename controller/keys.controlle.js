const db = require("../db");

class keysController {
  async create(req, res) {
    const { key, user, datetime  } = req.body;
    const newKey = await db.query(
      "INSERT INTO access_keys ( key, user, datetime) values ($1, $2, $3) RETURNING *",
      [key, user, datetime]
    );
    res.json(newKey.rows[0]);
  }

  async all(req, res) {
    const keys = await db.query("SELECT * FROM access_keys");
    res.json(keys.rows);
  }

  async get(req, res) {
    const id = req.params.id;
    const key = await db.query("SELECT * FROM access_keys WHERE id = $1", [id]);
    res.json(key.rows[0]);
  }

  async update(req, res) {
    const { key, user, datetime } = req.body;
    const Key = await db.query(
      "UPDATE access_keys set key = $1, user = $2, datetime = $3 where id = $4 RETURNING *",
      [key, user, datetime, id]
    );

    res.json(Key.rows[0]);
  }

  async delete(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE FROM access_keys WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new keysController();
