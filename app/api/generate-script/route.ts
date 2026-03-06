import { NextRequest, NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Simulated script generation - in production, you'd call your Python script
async function generateScriptFromPDF(filePath: string, duration: number) {
  // This is a mock response. In production, call your main.py script
  // For now, we'll return a structured script based on the duration
  
  const totalSeconds = duration * 60;
  
  return {
    metadata: {
      title: 'Extracted Research Video Script',
      duration_minutes: duration,
      total_duration_seconds: totalSeconds,
      generated_at: new Date().toISOString(),
    },
    scenes: [
      {
        scene_id: 1,
        title: 'Opening Scene',
        narration: `Welcome to this comprehensive ${duration}-minute video exploring the latest research insights. In this presentation, we will dive deep into cutting-edge findings and their practical applications.`,
        visuals: ['title_screen.png', 'animated_background.gif'],
        on_screen_text: 'Research Deep Dive: Exploring Innovation',
        document_elements: [],
        duration_seconds: Math.floor(totalSeconds * 0.2),
        animation: 'fade_in',
        transition: 'dissolve',
      },
      {
        scene_id: 2,
        title: 'Main Content',
        narration: 'Let us examine the key findings from the research paper. The methodology employed in this study provides us with valuable insights that challenge conventional thinking.',
        visuals: ['content_visuals.png'],
        on_screen_text: 'Key Findings & Methodology',
        document_elements: [
          { type: 'code_block', content: 'Sample code from research', id: 'code_1' },
          { type: 'table', content: 'Data analysis results', id: 'table_1' },
        ],
        duration_seconds: Math.floor(totalSeconds * 0.6),
        animation: 'slide_in',
        transition: 'fade',
      },
      {
        scene_id: 3,
        title: 'Conclusion',
        narration: 'These findings have significant implications for future research and practical applications. We encourage further exploration and experimentation in this domain.',
        visuals: ['conclusion_screen.png'],
        on_screen_text: 'Implications & Future Work',
        document_elements: [],
        duration_seconds: Math.floor(totalSeconds * 0.2),
        animation: 'fade_out',
        transition: 'dissolve',
      },
    ],
  };
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const duration = parseInt(formData.get('duration') as string) || 10;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Save the uploaded file temporarily
    const uploadDir = join(process.cwd(), 'tmp');
    if (!existsSync(uploadDir)) {
      await writeFile(join(uploadDir, '.gitkeep'), '');
    }

    const filePath = join(uploadDir, file.name);
    const buffer = await file.arrayBuffer();
    await writeFile(filePath, Buffer.from(buffer));

    // Generate script (mock for now - replace with actual PDF parsing)
    const script = await generateScriptFromPDF(filePath, duration);

    // Clean up temp file
    try {
      await unlink(filePath);
    } catch (e) {
      console.log('Could not delete temp file');
    }

    return NextResponse.json({ script });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate script' },
      { status: 500 }
    );
  }
}
