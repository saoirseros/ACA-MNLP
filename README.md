<div align="center">

# Adaptive Context-Aware Multi-Module NLP System for Real-Time Conversational Intelligence

### Real-time conversational intelligence powered by modular NLP analysis

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=22&pause=1000&color=4F8EF7&center=true&vCenter=true&width=800&lines=Real-Time+Conversational+Intelligence;Multi-Module+Natural+Language+Processing;Sentiment+%7C+Emotion+%7C+Toxicity+Analysis;Adaptive+Context+Activation;AI-Powered+Conversation+Insights" alt="Animated project highlights" />

<br />

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)

</div>

A modular chat application that combines real-time messaging with
machine-learning analysis of conversational text. The project explores how
sentiment, emotion, toxicity, summaries, topics, and selected conversation
context can be processed alongside a live conversation.

## Overview

Most chat applications focus on delivering and storing messages. This project
adds a conversational intelligence layer that analyzes messages as they move
through the chat pipeline.

The main research idea is **Adaptive Context Activation (ACA)**. Instead of
always sending the same number of previous messages to an NLP model, ACA
estimates how much context the current message needs. It uses interpretable
signals such as:

- References to earlier messages
- Message brevity
- Semantic similarity to recent conversation history
- Classifier uncertainty

Relevant history is then selected using semantic relevance and recency. A
standalone message can be analyzed without unnecessary context, while a
follow-up such as "I meant the other results" can include the messages needed
to interpret it.

## Features

- Real-time one-to-one chat with Socket.io
- User authentication and persisted conversations
- Per-message sentiment, emotion, and toxicity analysis
- Conversation summaries and topic extraction
- Adaptive Context Activation for context-aware analysis
- Conversation analytics, including sentiment, emotion, toxicity, and context
  usage statistics
- Reproducible experiments comparing classical baselines, Transformer models,
  and context-selection strategies

## Architecture

```text
React + Vite client
          |
          v
Node.js + Express + Socket.io server ---- MongoDB
          |
          v
Python + FastAPI NLP service
  ├── sentiment analysis
  ├── emotion detection
  ├── toxicity detection
  ├── summarization
  ├── topic extraction
  └── Adaptive Context Activation
```

The NLP service is separated from the chat backend so that the analysis
modules can be developed, evaluated, and replaced independently.

## Technology Stack

- **Frontend:** React, Vite, Tailwind CSS, Socket.io Client
- **Backend:** Node.js, Express, Socket.io, JWT, Mongoose
- **Database:** MongoDB
- **NLP service:** Python, FastAPI, PyTorch, Hugging Face Transformers,
  sentence-transformers, scikit-learn
- **Evaluation:** Public datasets, accuracy/precision/recall/F1, confusion
  matrices, and inference latency

## Repository Structure

```text
client/          React chat application
server/          Express API, authentication, messaging, and NLP integration
nlp-service/     FastAPI analysis service and ACA implementation
experiments/     Reproducible model and context-selection evaluations
training/        Fine-tuning pipeline scaffold for selected tasks
paper_figures/   Scripts and figures used for project documentation
RUNNING.md       Detailed setup, troubleshooting, and testing guide
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- Python 3.10-3.12
- MongoDB Community Server or MongoDB Atlas
- Git

### 1. Start MongoDB

Run MongoDB locally, or prepare a MongoDB Atlas connection string.

### 2. Start the backend

```powershell
cd server
npm install
copy .env.example .env
npm run server
```

Set `MONGODB_URI` and `JWT_SECRET` in `server/.env`. To enable live NLP
analysis, set `NLP_SERVICE_URL=http://localhost:8000`.

### 3. Start the NLP service

Open a second terminal:

```powershell
cd nlp-service
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env
.venv\Scripts\python.exe -m uvicorn app.main:app --reload --port 8000
```

The first startup downloads the pretrained models used by the service and may
take a few minutes. The NLP service can be omitted if you only need the basic
chat application.

### 4. Start the client

Open a third terminal:

```powershell
cd client
npm install
copy .env.example .env
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

For environment-variable details, health checks, testing, and Windows
troubleshooting, see [RUNNING.md](RUNNING.md).

## NLP API

The FastAPI service exposes endpoints for:

- `GET /health`
- `POST /analyze/message`
- `POST /analyze/sentiment`
- `POST /analyze/emotion`
- `POST /analyze/toxicity`
- `POST /analyze/summarize`
- `POST /analyze/topics`
- `POST /context/select`

See [nlp-service/README.md](nlp-service/README.md) for request formats,
model details, and ACA implementation notes.

## Research and Evaluation

The `experiments/` module evaluates:

1. TF-IDF and Logistic Regression baselines against the pretrained models used
   by the live service.
2. Full/recent conversation context against Adaptive Context Activation.

The evaluation uses public datasets including SST-2, dair-ai/emotion,
tweet_eval, and DailyDialog. To reproduce the experiments, follow
[experiments/README.md](experiments/README.md). Results and their
interpretation are available in [experiments/FINDINGS.md](experiments/FINDINGS.md).

## Project Status

This repository contains a working prototype and research implementation.
The real-time chat flow, modular NLP service, ACA context selection, and
conversation analytics are implemented. The training directory provides a
fine-tuning scaffold for future experiments.

## License

No license has been specified for this repository yet.
