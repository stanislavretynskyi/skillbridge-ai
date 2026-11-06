# SkillBridge AI

**AI-powered career guidance for the Swiss job market.**

SkillBridge AI helps people understand the skills they already have,
explore possible career directions, and identify skills they may need to
develop.

> **Hackathon MVP:** Career matches currently use a small set of
> demonstration job profiles. They are not live job vacancies and are
> not yet based on a comprehensive Swiss labour-market database.

## Features

-   **CV analysis:** Upload a PDF CV (up to 5 MB) or describe your
    experience manually.
-   **AI-powered profile summary:** Generate a concise professional
    profile from the supplied information.
-   **Skill identification:** Extract relevant skills from the
    experience or CV.
-   **Career matching:** Compare identified skills with demonstration
    job profiles and view a match score.
-   **Skill-gap overview:** See which skills match a role and which
    additional skills may be useful to develop.
-   **Recommendations:** Receive suggestions for possible next steps.
-   **Multilingual experience:** Interface and analysis language options
    include English, French, German, and Ukrainian.

## Tech stack

-   **Frontend:** React, Vite
-   **Backend:** Python, FastAPI
-   **AI:** Google Gemini API (`google-genai`)
-   **PDF processing:** `pypdf`

## Project structure

``` text
skillbridge-ai/
├── backend/
│   ├── main.py
│   └── ...
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md
```

## Getting started

### Prerequisites

-   Python
-   Node.js and npm
-   A Google Gemini API key

### 1. Clone the repository

``` bash
git clone https://github.com/stanislavretynskyi/skillbridge-ai.git
cd skillbridge-ai
```

### 2. Configure the backend

Open a terminal in the `backend` directory:

``` bash
cd backend
python -m venv venv
```

Activate the virtual environment.

**Windows PowerShell:**

``` powershell
.\venv\Scripts\Activate.ps1
```

Install the backend dependencies:

``` bash
pip install fastapi uvicorn google-genai python-dotenv pypdf python-multipart
```

Create a `.env` file in the `backend` directory:

``` env
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3.5-flash-lite
```

Replace `your_gemini_api_key` with your own API key. Keep `.env`
private; it must not be committed to Git.

Start the backend:

``` bash
uvicorn main:app --reload --port 8001
```

The API will be available at `http://127.0.0.1:8001`.

Interactive API documentation:

`http://127.0.0.1:8001/docs`

### 3. Configure the frontend

Open a second terminal:

``` bash
cd frontend
npm install
npm run dev
```

Vite will print the local development URL, usually:

`http://localhost:5173`

## API endpoints

  ------------------------------------------------------------------------
  Method                  Endpoint                 Purpose
  ----------------------- ------------------------ -----------------------
  `GET`                   `/api/health`            Check whether the
                                                   backend is running

  `POST`                  `/api/analyze-profile`   Analyze manually
                                                   entered professional
                                                   experience

  `POST`                  `/api/analyze-cv`        Extract and analyze
                                                   information from a PDF
                                                   CV
  ------------------------------------------------------------------------

## Current limitations

-   Career matching is based on a limited set of demonstration roles
    defined in the backend.
-   Match scores indicate overlap with the skills in those demonstration
    profiles; they are not a guarantee of employability.
-   The application does not currently search live job listings.
-   Scanned/image-only PDFs may not contain extractable text and may not
    be supported by the current PDF processing flow.
-   AI-generated summaries and recommendations should be reviewed by the
    user.

## Roadmap

-   Expand and validate job profiles against Swiss occupational
    requirements.
-   Add a richer career comparison experience and target-role selection.
-   Generate role-specific learning plans based on skill gaps.
-   Explore integrations with relevant Swiss job-market data sources.
-   Improve accessibility, usability, and multilingual support.

## Security

-   Never commit API keys, `.env` files, or other secrets.
-   Keep local virtual environments and dependency folders out of
    version control.
-   Review AI-generated results before using them for important career
    decisions.

## License

No license has been specified yet. All rights remain with the repository
owner unless a license is added.
