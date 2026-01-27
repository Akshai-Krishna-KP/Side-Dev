function ChatArea({ activeUser, messages, currentUserId }) {
    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    if (!activeUser) {
        return (
            <div className="messages-area">
                <div className="empty-state">
                    <div className="empty-state-icon">💬</div>
                    <h3>Select a conversation</h3>
                    <p>Choose a user from the sidebar to start chatting</p>
                </div>
            </div>
        );
    }

    return (
        <div className="messages-area">
            {messages.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-state-icon">👋</div>
                    <h3>Start the conversation</h3>
                    <p>Send a message to {activeUser.name} to get started</p>
                </div>
            ) : (
                <>
                    <div className="date-divider">
                        <span>Today</span>
                    </div>

                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`message ${message.senderId === currentUserId ? 'sent' : 'received'}`}
                        >
                            <div className="message-avatar">
                                {message.senderId === currentUserId
                                    ? 'Me'
                                    : activeUser.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="message-content">
                                <div className="message-bubble">
                                    {message.content}
                                </div>
                                <span className="message-time">{formatTime(message.timestamp)}</span>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default ChatArea;
