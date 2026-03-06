import json
import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("CREATOMATE_API_KEY")

url = "https://api.creatomate.com/v1/renders"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Load script generated from main.py
with open("video_script.json", "r") as f:
    script = json.load(f)

scenes = script["scenes"]

videos = []

for scene in scenes:

    payload = {
        "template_id": "YOUR_TEMPLATE_ID",
        "modifications": {
            "title": scene["title"],
            "narration": scene["narration"],
            "text": scene["on_screen_text"]
        }
    }

    response = requests.post(url, headers=headers, json=payload)

    videos.append(response.json())

print(videos)