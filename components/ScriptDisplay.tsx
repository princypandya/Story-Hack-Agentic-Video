'use client';

interface Scene {
  scene_id: number;
  title: string;
  narration: string;
  on_screen_text: string;
  duration_seconds: number;
  animation?: string;
  transition?: string;
}

interface ScriptDisplayProps {
  script: {
    metadata: any;
    scenes: Scene[];
  };
}

export function ScriptDisplay({ script }: ScriptDisplayProps) {
  if (!script || !script.scenes) return null;

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-2xl font-bold text-white mb-4">Video Script</h2>
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {script.scenes.map((scene: Scene) => (
          <div key={scene.scene_id} className="bg-slate-700 rounded p-4 border border-slate-600">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-white">{scene.title}</h3>
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                {scene.duration_seconds}s
              </span>
            </div>
            
            <p className="text-gray-300 text-sm mb-2">
              <span className="font-semibold">Narration:</span> {scene.narration}
            </p>
            
            {scene.on_screen_text && (
              <p className="text-gray-400 text-sm">
                <span className="font-semibold">Text:</span> {scene.on_screen_text}
              </p>
            )}

            {scene.animation && (
              <p className="text-gray-400 text-xs mt-1">
                Animation: {scene.animation} → {scene.transition}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
