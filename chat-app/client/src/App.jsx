import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import ChatHeader from './components/ChatHeader.jsx';
import ChatArea from './components/ChatArea.jsx';
import InputBox from './components/InputBox.jsx';

// Mock current user ID (in real app, this would come from auth)
const CURRENT_USER_ID = 'current-user';

// Mock data for demonstration
const MOCK_USERS = [
  { id: '1', name: 'Alice Johnson', status: 'online' },
  { id: '2', name: 'Bob Smith', status: 'online' },
  { id: '3', name: 'Charlie Brown', status: 'online' },
  { id: '4', name: 'Diana Ross', status: 'online' },
  { id: '5', name: 'Edward King', status: 'online' },
];

const MOCK_MESSAGES = {
  '1': [
    { id: 'm1', senderId: '1', content: 'Hey! How are you doing?', timestamp: Date.now() - 3600000 },
    { id: 'm2', senderId: CURRENT_USER_ID, content: 'I\'m doing great! Just working on a new project.', timestamp: Date.now() - 3500000 },
    { id: 'm3', senderId: '1', content: 'That sounds exciting! What kind of project?', timestamp: Date.now() - 3400000 },
    { id: 'm4', senderId: CURRENT_USER_ID, content: 'It\'s a real-time chat application with a modern UI!', timestamp: Date.now() - 3300000 },
    { id: 'm5', senderId: '1', content: 'Wow, that\'s amazing! I\'d love to see it when it\'s ready 🎉', timestamp: Date.now() - 3200000 },
  ],
  '2': [
    { id: 'm6', senderId: '2', content: 'Did you see the new design specs?', timestamp: Date.now() - 7200000 },
    { id: 'm7', senderId: CURRENT_USER_ID, content: 'Yes, they look fantastic!', timestamp: Date.now() - 7100000 },
  ],
  '3': [
    { id: 'm8', senderId: CURRENT_USER_ID, content: 'Meeting at 3pm today?', timestamp: Date.now() - 86400000 },
    { id: 'm9', senderId: '3', content: 'Sure, I\'ll be there!', timestamp: Date.now() - 86300000 },
  ],
};

function App() {
  const [users, setUsers] = useState(MOCK_USERS);
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch users from API (uncomment when API is ready)
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch('http://localhost:8000/users');
  //       if (response.ok) {
  //         const data = await response.json();
  //         setUsers(data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  const handleUserSelect = (user) => {
    setActiveUser(user);
  };

  const handleSendMessage = (content) => {
    if (!activeUser) return;

    const newMessage = {
      id: `m${Date.now()}`,
      senderId: CURRENT_USER_ID,
      content,
      timestamp: Date.now(),
    };

    setMessages((prev) => ({
      ...prev,
      [activeUser.id]: [...(prev[activeUser.id] || []), newMessage],
    }));
  };

  const currentMessages = activeUser ? (messages[activeUser.id] || []) : [];

  return (
    <div className="chat-container">
      <Sidebar
        users={users}
        activeUser={activeUser}
        onUserSelect={handleUserSelect}
      />

      <main className="chat-main">
        <ChatHeader activeUser={activeUser} />

        <ChatArea
          activeUser={activeUser}
          messages={currentMessages}
          currentUserId={CURRENT_USER_ID}
        />

        <InputBox
          onSendMessage={handleSendMessage}
          disabled={!activeUser}
        />
      </main>
    </div>
  );
}

export default App;
