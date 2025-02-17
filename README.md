# Multi-Agent LLM App with LangGraph and NestJS

This project is a multi-agent Large Language Model (LLM) application built using the LangGraph library and NestJS framework. It simulates a customer support system with different agents handling various tasks such as initial support, billing support, technical support, and refund authorization.

## Features

- **Multi-Agent System**: Different agents handle specific tasks:
    - **Initial Support Agent**: Handles initial customer queries and routes them to the appropriate department.
    - **Billing Support Agent**: Manages billing-related issues and can initiate refunds.
    - **Technical Support Agent**: Provides technical assistance for computer-related issues.
    - **Refund Agent**: Processes refunds after authorization.

- **State Management**: Uses LangGraph's state management to handle conversation flows and state transitions.

- **API Endpoints**: Exposes RESTful API endpoints for handling chat interactions and refund authorizations.

## Getting Started

### Prerequisites

- Node.js
- NestJS CLI
- Google Generative AI API Key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/multi-agent-llm-app.git
   cd multi-agent-llm-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add your Google Generative AI API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
4. Run the application:
   ```bash
   npm run start
   ```

## API Endpoints

### `POST /customer-support/chat`
Handles customer chat messages.

**Request Body:**
```json
{
  "message": "string",
  "threadId": "string (optional)"
}
```
**Response:**
```json
{
  "responses": "array",
  "threadId": "string"
}
```

### `POST /customer-support/authorize-refund`
Authorizes a refund for a given thread.

**Request Body:**
```json
{
  "threadId": "string"
}
```
**Response:**
```json
{
  "responses": "array",
  "threadId": "string"
}
```

## Graph Representation
The application uses a state graph to manage the flow of conversations between different agents. Below is a representation of the state graph:
```
+-----------------+
|  Initial Support|
|     Agent       |
+--------+--------+
         |
  +------+------+
  |             |
  v             v
+--------+      +--------+
| Billing|      |Technical|
| Support|      | Support |
|  Agent |      |  Agent  |
+--------+      +--------+
         |
         v
+--------+--------+
|  Refund Agent   |
+-----------------+
```

### Conditional Edges

- **Initial Support Agent:**
    - If the next representative is BILLING, route to Billing Support Agent.
    - If the next representative is TECHNICAL, route to Technical Support Agent.
    - Otherwise, end the conversation.
- **Billing Support Agent:**
    - If the next representative is REFUND, route to Refund Agent.
    - Otherwise, end the conversation.
- **Technical Support Agent:**
    - Always ends the conversation.
- **Refund Agent:**
    - Always ends the conversation.

## Further Work

- **Connect to a Chat UI**: Implement a chat interface using WebSocket for real-time communication.
- **Enhance State Management**: Add more sophisticated state management for handling complex conversation flows.
- **Improve Error Handling**: Add more robust error handling and logging mechanisms.

## .env Required Argument
The `.env` file must include the following environment variable:
```
GEMINI_API_KEY=your_api_key_here
```
Replace `your_api_key_here` with your actual Google Generative AI API key.

