// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {db} from '../../lib/db'
import {comparePassword} from '../../lib/ValidatePassword'

export default function handler(req, res) {
  if (req.method === "POST") {
    let username = req.body.username
    let password = req.body.password
    db.query(`SELECT username, password FROM user WHERE username = '${username}'`)
      .then(data => {
        if (data[0]) {
          comparePassword(password, data[0].password)
            .then(success => {
              res.status(200).json(success)
            })
            .catch(err => console.log(err))
        }
      })
      .catch(err => res.status(400).json(err))
  }
}
