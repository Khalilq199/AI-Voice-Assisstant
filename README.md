#  AI Voice Assistant (Receptionist)

An AI-powered voice assistant designed to act as a **receptionist**, capable of handling user voice commands and responding with GPT-generated answers in real time.

##  Features

- **Live Voice Recognition & Response**  
  Converts user speech to text and responds with synthesized speech using GPT-generated replies.

- **Multi-Room Support**  
  Hosts distinct audio sessions for multiple users using LiveKit, allowing scalable voice interactions.

- **Natural Language Understanding**  
  Powered by OpenAI's GPT API to understand context and generate human-like responses.

- **Simple Web UI**  
  A lightweight React-based interface for users to initiate and interact with the assistant.

##  Tech Stack

- **Frontend:** React, JavaScript, CSS  
- **Backend:** Python, Flask  
- **AI Integration:** OpenAI GPT API  
- **Audio/Session Management:** LiveKit  

##  Getting Started

```bash
# Start the Frontend
cd frontend
npm run start

# Start the Flask Backend Server
cd backend
python server.py dev

# Launch the AI Voice Agent
cd backend
python agent.py dev

