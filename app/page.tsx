'use client';

import { useState } from 'react';

interface ScriptData {
  metadata: {
    title: string;
    duration_minutes: number;
    total_duration_seconds: number;
    generated_at: string;
  };
  scenes: Array<{
    scene_id: number;
    title: string;
    narration: string;
    visuals: string[];
    on_screen_text: string;
    document_elements: any[];
    duration_seconds: number;
    animation: string;
    transition: string;
  }>;
}

export default function Home() {
  const [script, setScript] = useState<ScriptData | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGeneratingScript, setIsGeneratingScript] = useState(false);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [progress, setProgress] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [duration, setDuration] = useState('10');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleGenerateScript = async () => {
    if (!pdfFile) {
      setProgress('Please select a PDF file');
      return;
    }

    setIsGeneratingScript(true);
    setProgress('Generating script...');

    try {
      const formData = new FormData();
      formData.append('file', pdfFile);
      formData.append('duration', duration);

      const response = await fetch('/api/generate-script', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to generate script');

      const data = await response.json();
      setScript(data.script);
      setProgress('Script generated successfully!');
    } catch (error) {
      console.error('Error:', error);
      setProgress('Error generating script');
    } finally {
      setIsGeneratingScript(false);
    }
  };

  const handleGenerateVideo = async () => {
    if (!script) {
      setProgress('Please generate a script first');
      return;
    }

    setIsGeneratingVideo(true);
    setProgress('Generating video from script...');

    try {
      const response = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ script }),
      });

      if (!response.ok) throw new Error('Failed to generate video');

      const data = await response.json();
      setVideoUrl(data.videoUrl);
      setProgress('Video generated successfully!');
    } catch (error) {
      console.error('Error:', error);
      setProgress('Error generating video');
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Story Hack: Agentic Video Generator</h1>
          <p className="text-gray-300 text-lg">Transform research papers into engaging videos with AI-powered generation</p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Upload and Script Generation */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-4">Upload PDF</h2>
              
              <div className="space-y-4">
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="w-full cursor-pointer"
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    {pdfFile ? `Selected: ${pdfFile.name}` : 'Click to upload PDF or drag and drop'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Video Duration (minutes)</label>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-slate-700 text-white rounded px-3 py-2 border border-slate-600 focus:border-blue-500 outline-none"
                  />
                </div>

                <button
                  onClick={handleGenerateScript}
                  disabled={isGeneratingScript || !pdfFile}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition"
                >
                  {isGeneratingScript ? 'Generating...' : 'Generate Script'}
                </button>
              </div>
            </div>

            {/* Status */}
            {progress && (
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <p className="text-gray-300 text-sm">{progress}</p>
              </div>
            )}
          </div>

          {/* Middle Column: Script Display */}
          <div className="lg:col-span-1">
            {script && (
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 max-h-96 overflow-y-auto">
                <h2 className="text-xl font-semibold text-white mb-4">{script.metadata.title}</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-400">Duration: {script.metadata.duration_minutes} minutes</p>
                    <p className="text-gray-400">Generated: {new Date(script.metadata.generated_at).toLocaleDateString()}</p>
                  </div>
                  
                  <div className="border-t border-slate-700 pt-4">
                    <h3 className="font-semibold text-white mb-2">Scenes ({script.scenes.length})</h3>
                    <div className="space-y-2">
                      {script.scenes.map((scene) => (
                        <div key={scene.scene_id} className="bg-slate-700 rounded p-2">
                          <p className="font-medium text-blue-400">Scene {scene.scene_id}: {scene.title}</p>
                          <p className="text-gray-300 text-xs mt-1 line-clamp-2">{scene.narration}</p>
                          <p className="text-gray-500 text-xs mt-1">{scene.duration_seconds}s • {scene.animation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Video Generation */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-4">Generate Video</h2>
              
              <button
                onClick={handleGenerateVideo}
                disabled={isGeneratingVideo || !script}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition mb-4"
              >
                {isGeneratingVideo ? 'Generating...' : 'Generate Video'}
              </button>

              {videoUrl && (
                <div className="space-y-4">
                  <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden">
                    <video
                      src={videoUrl}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <a
                    href={videoUrl}
                    download
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center transition"
                  >
                    Download Video
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-700 text-center text-gray-400">
          <p className="text-sm">Story Hack Video Generator | Powered by AI</p>
        </footer>
      </div>
    </main>
  );
}
