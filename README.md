# arkai - more than just a chatbot

## Overview

The **Virtual Psychology Assistant** is a chatbot-based software designed to serve as a virtual psychological support tool. It aims to provide Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT), and Compassion-Focused Therapy (CFT) resources to users based on their current mental state and personal needs. Additionally, for known clients, the assistant will be able to provide tailored recommendations and support by leveraging stored session notes and individualized learning through an integrated database system. The assistant will be trained to emulate the therapeutic style of its creator, ensuring consistency in the approach for current clients.

## Key Features

1. **Chatbot Interface**:
   - User-friendly chatbot interface for easy interaction with users.
   - Provides a conversational experience designed to emulate an empathetic, professional psychological assistant.

2. **Personalized Resource Matching**:
   - Gathers user information about their current state and needs through conversation.
   - Matches user needs with appropriate CBT, ACT, and CFT resources from a connected database.

3. **Client Account Management**:
   - Users who are known clients can create accounts.
   - Stores session notes securely for each client to enable personalized responses and recommendations.
   - Allows users to access their historical session notes and resources as needed.

4. **Integrated Resource Database**:
   - Maintains a rich database of therapeutic resources.
   - Resources are categorized by modality (CBT, ACT, CFT) and personalized to user needs.

5. **LLM-based Virtual Assistant**:
   - Trains a Language Learning Model (LLM) using clinical audios and transcripts of therapy sessions.
   - Fine-tunes the model through supervised learning to ensure it remains within the boundaries of the specified therapeutic modalities.

6. **Data Privacy and Security**:
   - Follows best practices for securing sensitive user information.
   - Stores all client data in a secure, encrypted manner to ensure privacy.

## Project Structure

- **Backend**:
  - Implements a server that handles user interactions, connects to the resource database, and stores client information.
  - Integrates LLM model training components.

- **Frontend**:
  - Provides a chatbot-style interface to interact with users.
  - Login and user account features for clients.

- **Database**:
  - Stores therapeutic resources, session notes, and user accounts.
  - Manages user state to provide personalized therapeutic assistance.

## Development Roadmap

### [Phase 1](docs/phase-one.md): Core Functionality
1. **Requirements Gathering**: Identify the specific requirements for the chatbot, resource database, and user management system.
2. **Chatbot Interface Design**: Develop a user-friendly conversational interface.
3. **Database Setup**: Design and set up the database for resources, session notes, and client accounts.

### Phase 2: Personalized Matching and User Accounts
1. **Resource Matching Logic**: Develop logic for matching user needs to appropriate therapeutic resources.
2. **Client Account Management**: Implement secure user accounts with encrypted storage for session notes.
3. **Integration Testing**: Test integration between chatbot, database, and user management features.

### Phase 3: LLM Model Integration
1. **Model Training**: Train the LLM on clinical audios and transcripts.
2. **Model Supervision**: Test the LLM's responses to ensure adherence to therapeutic modalities.
3. **Deployment**: Deploy the LLM into the backend system to support the virtual assistant.

### Phase 4: Security and Compliance
1. **Data Privacy**: Ensure compliance with data privacy regulations (e.g., GDPR, HIPAA).
2. **Encryption and Security**: Implement encryption for all sensitive user data.
3. **Security Testing**: Conduct rigorous testing to identify and address vulnerabilities.

### Phase 5: Deployment and Evaluation
1. **User Testing**: Allow selected users to test the assistant and provide feedback.
2. **Bug Fixes and Improvements**: Address any issues identified during user testing.
3. **Deployment**: Deploy the final version for public use.

## Future Enhancements
- **Multi-language Support**: Extend the model to support multiple languages.
- **Expanded Modality Coverage**: Add support for additional therapeutic modalities such as DBT (Dialectical Behaviour Therapy).
- **Mobile Application**: Develop a mobile app version for better accessibility.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
Special thanks to the open-source community and contributors who made this project possible.