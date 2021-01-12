class TelegrammChat {
  createMessage = (user, message) => {
      const messageObj = {
          user: user.name,
          message,
          date: new Date(),
          checked: false
      }
      return messageObj
  }

  showMessage = (message) => {
      console.log(`|-------------------------------------------------------|`)
      console.log(`|${message.user}`)
      console.log(`|${message.message} ${message.checked ? '✔✔' : '✔'}`)
      console.log(`|${message.date.toISOString()}`)
      console.log(`|-------------------------------------------------------|`)
  }
}

module.exports = TelegrammChat
