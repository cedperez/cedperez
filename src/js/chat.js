import { initializeFirebase } from './firebase-config.js';

class ChatSystem {
    constructor() {
        this.db = firebase.database();
        this.messaging = firebase.messaging();
        this.setupListeners();
        this.requestNotificationPermission();
    }

    async requestNotificationPermission() {
        try {
            await Notification.requestPermission();
            const token = await this.messaging.getToken();
            console.log('Notification token:', token);
        } catch (err) {
            console.error('Notification permission denied:', err);
        }
    }

    setupListeners() {
        const sendButton = document.getElementById('send-message');
        const messageInput = document.getElementById('message-input');

        sendButton.addEventListener('click', () => {
            this.sendMessage(messageInput.value);
            messageInput.value = '';
        });

        this.db.ref('messages').on('child_added', (snapshot) => {
            this.displayMessage(snapshot.val());
        });
    }

    sendMessage(text) {
        if (!text.trim()) return;
        
        this.db.ref('messages').push({
            text,
            timestamp: Date.now(),
            sender: 'visitor',
        });
    }

    displayMessage(message) {
        const messagesDiv = document.getElementById('chat-messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', message.sender);
        messageElement.textContent = message.text;
        messagesDiv.appendChild(messageElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}

initializeFirebase();
const chat = new ChatSystem();