const TelegrammChat = require('./TelegrammChat')
const ChatsAdapter = require('./ChatsAdapter')

class User {
    constructor(name, mediators) {
        this.name = name
        this.mediators = mediators
    }

    getName() {
        return this.name
    }

    sendMessage(message) {
        const { TelegrammChat, BuisnessChat } = this.mediators
        const telegrammChat = new TelegrammChat()
        const buisnessChat = new BuisnessChat()
        const chatsAdapter = new ChatsAdapter()

        const telegrammMessage = telegrammChat.createMessage(this, message)
        
        const formatedForBuisnessChatMessage = chatsAdapter.generateBuisnessChatMessage(telegrammMessage, { budget: 0, contract: 'Новый контракт ' + this.name })

        buisnessChat.showMessage(this, formatedForBuisnessChatMessage)
        telegrammChat.showMessage(telegrammMessage)
    }
}

module.exports = User
