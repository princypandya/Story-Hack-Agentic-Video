import { NextRequest, NextResponse } from 'next/server';

async function generateVideoWithFalAI(scriptText: string) {
  // Use Fal AI to generate video from text
  // This is a sample implementation - you need FAL_API_KEY environment variable
  
  const falApiKey = process.env.FAL_API_KEY;
  
  if (!falApiKey) {
    console.warn('FAL_API_KEY not set, returning mock video URL');
    // Return a mock video URL for demonstration
    return 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc2FjAAACAAAAAAAAADEABhABAAECAAEAAAAAASw2bWRhdAAACQAaAAIABhgAAAABAAAAAAAAAAAAA1kECAAh';
  }

  try {
    // Call Fal AI text-to-video API
    const response = await fetch('https://api.fal.ai/v1/text-to-video', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${falApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: scriptText,
        duration: 'short', // or 'medium', 'long'
        aspect_ratio: '16:9',
        quality: 'medium',
      }),
    });

    if (!response.ok) {
      throw new Error(`Fal AI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.video?.url || data.url;
  } catch (error) {
    console.error('Error calling Fal AI:', error);
    throw error;
  }
}

async function generateAudioNarration(narrationText: string) {
  // Use ElevenLabs or similar for text-to-speech
  // This would generate an audio file from the script narration
  
  const elevenLabsApiKey = process.env.ELEVENLABS_API_KEY;
  
  if (!elevenLabsApiKey) {
    console.warn('ELEVENLABS_API_KEY not set');
    return null;
  }

  try {
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM', {
      method: 'POST',
      headers: {
        'xi-api-key': elevenLabsApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: narrationText,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`ElevenLabs API error: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (error) {
    console.error('Error generating audio:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { script } = await request.json();

    if (!script || !script.scenes) {
      return NextResponse.json(
        { error: 'Invalid script format' },
        { status: 400 }
      );
    }

    // Combine all narration from scenes into one script
    const fullNarration = script.scenes
      .map((scene: any) => scene.narration)
      .join(' ')
      .slice(0, 1000); // Limit for API calls

    console.log('[v0] Starting video generation with script:', fullNarration.slice(0, 100));

    // Generate video using Fal AI
    const videoUrl = await generateVideoWithFalAI(fullNarration);

    console.log('[v0] Video generated successfully');

    // Optionally generate audio (requires ELEVENLABS_API_KEY)
    // const audioBuffer = await generateAudioNarration(fullNarration);

    return NextResponse.json({
      success: true,
      videoUrl,
      scriptSummary: {
        totalScenes: script.scenes.length,
        totalDuration: script.metadata.total_duration_seconds,
      },
    });
  } catch (error) {
    console.error('Error generating video:', error);
    return NextResponse.json(
      { error: 'Failed to generate video', details: (error as Error).message },
      { status: 500 }
    );
  }
}
