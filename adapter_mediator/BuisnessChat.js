class BuisnessChat {
  showMessage(user, message) {
      const sender = user.getName()
      console.log('|-----Сделка--------------------------------------------|')
      console.log(`|${message.contract}, бюджет ${message.budget}`)
      console.log(`|Cоздано: ${message.date.toISOString()}`)
      console.log(`|Отправитель: ${sender}`)
      console.log(`|Контент: ${message.content}`)
      console.log('|-------------------------------------------------------|')
  }
}

module.exports = BuisnessChat