const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].passHash)
        if (users[i].username === username && existing) {
          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const { username, email, firstName, lastName, password } = req.body
        const salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(password, salt)
        
        let newUser = {
          username,
          email,
          firstName,
          lastName,
          passHash
        }

        console.log('Registering User')
        console.log(req.body)
        console.log(newUser)
        users.push(newUser)
        res.status(200).send(newUser)
    }
}