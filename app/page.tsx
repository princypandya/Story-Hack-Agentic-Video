'use client';

import { useState } from 'react';
import { VideoGenerator } from '@/components/VideoGenerator';
import { ScriptDisplay } from '@/components/ScriptDisplay';
import { VideoPreview } from '@/components/VideoPreview';

export default function Home() {
  const [script, setScript] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState('');

  const handleScriptGenerated = (generatedScript: any) => {
    setScript(generatedScript);
    setVideoUrl(null);
  };

  const handleVideoGenerated = (url: string) => {
    setVideoUrl(url);
    setIsGenerating(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Story Hack: Agentic Video Generator</h1>
          <p className="text-gray-300">Transform scripts into videos with AI-powered generation</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column: Generator and Script */}
          <div className="space-y-6">
            <VideoGenerator 
              onScriptGenerated={handleScriptGenerated}
              onGenerating={setIsGenerating}
              onProgress={setProgress}
            />
            {script && <ScriptDisplay script={script} />}
          </div>

          {/* Right column: Video Preview */}
          <div>
            <VideoPreview 
              script={script}
              videoUrl={videoUrl}
              isGenerating={isGenerating}
              progress={progress}
              onVideoGenerated={handleVideoGenerated}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
