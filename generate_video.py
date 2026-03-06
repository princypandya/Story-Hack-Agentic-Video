import json
import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("CREATOMATE_API_KEY")

TEMPLATE_ID = "d16a8d5d-3166-40f5-9475-28ba75c3040f"

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
        "source": {
            "type": "template",
            "id": TEMPLATE_ID
        },
        "output_format": "mp4",
        "modifications": {
            "title.text": scene["title"],
            "Text.text": scene["on_screen_text"],
            "narration.text": scene["narration"]
        }
    }

    response = requests.post(url, headers=headers, json=payload)
    videos.append(response.json())

print(videos)