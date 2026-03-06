# Story Hack: Agentic Video Generator

A full-stack application that transforms research papers into engaging videos with AI-powered generation.

## Architecture

### Frontend
- **Next.js 16** - React framework with App Router
- **Tailwind CSS** - Styling
- **Components**:
  - `VideoGenerator` - Upload PDF and generate script
  - `ScriptDisplay` - Show generated video script
  - `VideoPreview` - Display and generate videos

### Backend
- **Next.js API Routes** (`/api`)
  - `POST /api/generate-script` - Parse PDF and generate video script
  - `POST /api/generate-video` - Generate video from script using Fal AI

### Integrations
- **Fal AI** - Text-to-video generation
- **ElevenLabs** (optional) - Text-to-speech audio generation
- **LlamaParse** (Python) - PDF parsing and structured extraction

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file:

```env
# Fal AI Integration (required for video generation)
FAL_API_KEY=your_fal_api_key_here

# ElevenLabs (optional, for audio generation)
ELEVENLABS_API_KEY=your_elevenlabs_key_here
```

### 3. Get API Keys

**Fal AI:**
1. Visit https://fal.ai
2. Sign up for an account
3. Navigate to API keys section
4. Copy your API key

**ElevenLabs (optional):**
1. Visit https://elevenlabs.io
2. Create account
3. Get your API key from settings

### 4. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## How It Works

### Step 1: Upload PDF
- User uploads a research paper (PDF format)
- Select desired video duration (1-60 minutes)

### Step 2: Generate Script
- PDF is parsed using LlamaParse
- AI generates structured video script with:
  - Multiple scenes with narration
  - Visual descriptions
  - On-screen text
  - Duration for each scene
  - Animation and transition effects

### Step 3: Generate Video
- Script is sent to Fal AI
- AI generates video based on narration and scene descriptions
- Video is compiled with timing and transitions
- Result is displayed in browser with download option

## Script JSON Format

```json
{
  "metadata": {
    "title": "Video Title",
    "duration_minutes": 10,
    "total_duration_seconds": 600
  },
  "scenes": [
    {
      "scene_id": 1,
      "title": "Opening",
      "narration": "Welcome to...",
      "visuals": ["image1.png"],
      "on_screen_text": "Title Text",
      "duration_seconds": 120,
      "animation": "fade_in",
      "transition": "dissolve"
    }
  ]
}
```

## API Endpoints

### POST /api/generate-script
**Request:**
```
Content-Type: multipart/form-data
file: [PDF file]
duration: 10
```

**Response:**
```json
{
  "script": {
    "metadata": {...},
    "scenes": [...]
  }
}
```

### POST /api/generate-video
**Request:**
```json
{
  "script": {
    "metadata": {...},
    "scenes": [...]
  }
}
```

**Response:**
```json
{
  "success": true,
  "videoUrl": "https://...",
  "scriptSummary": {
    "totalScenes": 3,
    "totalDuration": 600
  }
}
```

## Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Video AI**: Fal AI (text-to-video)
- **Audio AI**: ElevenLabs (text-to-speech)
- **PDF Parsing**: LlamaParse (Python integration)

## Features

✅ PDF upload and parsing
✅ AI-powered script generation
✅ Video generation from text
✅ Audio narration generation
✅ Real-time progress tracking
✅ Video preview and download
✅ Responsive UI design
✅ Error handling and validation

## Deployment

### Deploy to Vercel
```bash
npm run build
vercel deploy
```

Add environment variables in Vercel dashboard:
- `FAL_API_KEY`
- `ELEVENLABS_API_KEY` (optional)

## Troubleshooting

**Video not generating:**
- Check if `FAL_API_KEY` is set correctly
- Verify your Fal AI account has credits

**Script not generating:**
- Ensure PDF file is valid and readable
- Check file size (max recommended 50MB)
- Verify PDF is not password protected

**CORS errors:**
- If testing locally, ensure all API endpoints are accessible
- Check browser console for specific error messages
