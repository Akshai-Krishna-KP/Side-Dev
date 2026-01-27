function ChatHeader({ activeUser }) {
    if (!activeUser) {
        return (
            <header className="chat-header">
                <div className="chat-header-info">
                    <div className="chat-header-details">
                        <h2>Chat App</h2>
                        <p>Select a user to start chatting</p>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className="chat-header">
            <div className="chat-header-info">
                <div className="chat-header-avatar">
                    {activeUser.name.charAt(0).toUpperCase()}
                </div>
                <div className="chat-header-details">
                    <h2>{activeUser.name}</h2>
                    <p>
                        <span className="status-dot" style={{ display: 'inline-block', marginRight: '6px' }}></span>
                        Online
                    </p>
                </div>
            </div>

            <div className="chat-header-actions">
                <button className="header-btn" title="Voice Call">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                </button>
                <button className="header-btn" title="Video Call">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                </button>
                <button className="header-btn" title="More Options">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default ChatHeader;
