const bcrypt = require('bcrypt')
const hashPassword = async (password) => {
  const saltRound = 10
  const hashedPassword = bcrypt.hash(password, saltRound)
  return hashedPassword
}

const comparePassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}

module.exports = {hashPassword, comparePassword}