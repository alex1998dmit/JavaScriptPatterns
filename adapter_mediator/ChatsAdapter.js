class ChatsAdapter {
  generateBuisnessChatMessage = (telegrammChat, additionalInfo) => ({
      client: `${telegrammChat.user}`,
      contract: additionalInfo.contract || 'Неизвестная сделка',
      budget: additionalInfo.budget || 0,
      date: telegrammChat.created_at || new Date(),
      content: telegrammChat.message
  })
}

module.exports = ChatsAdapter
