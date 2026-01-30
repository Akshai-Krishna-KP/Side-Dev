function ChatArea({ activeUser, messages, currentUserId }) {
  /**
   * @brief Formats the timestamp into a readable en_IN time format.
   *
   * @param {*} timestamp
   * @returns
   */
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  /**
   * @brief
   * If no user is selected, shoes the default prompt.
   */
  if (!activeUser) {
    return (
      <div>
        <div>
          <div>💬</div>
          <h3>Select a conversation</h3>
          <p>Choose a user from the sidebar to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {messages.length === 0 ? (
        <div>
          <h3>Start the conversation</h3>
          <p>Send a message to {activeUser.name} to get started</p>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <div key={message.id}>
              <div>
                <div>{message.content}</div>
                <span className="text-xs">{formatTime(message.timestamp)}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ChatArea;
