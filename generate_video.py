import json
import requests
import os
import time
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("CREATOMATE_API_KEY")
TEMPLATE_ID = "d16a8d5d-3166-40f5-9475-28ba75c3040f"
url = "https://api.creatomate.com/v1/renders"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Load script
with open("video_script.json", "r") as f:
    script_data = json.load(f)

scenes = script_data["scenes"]
render_elements = []

for i, scene in enumerate(scenes):
    render_elements.append({
        "type": "template",
        "id": TEMPLATE_ID,
        "duration": 15, 
        "modifications": {
            "title.text": scene["title"],
            "Text.text": scene["on_screen_text"],
            "narration.text": scene["narration"],
            "Image.src": f"https://picsum.photos/seed/{i}/1200/800"
        }
    })

payload = {
    "source": {
        "type": "composition",
        "elements": render_elements
    },
    "output_format": "mp4"
}

print(f"🚀 Sending request for {len(scenes)} scenes...")
response = requests.post(url, headers=headers, json=payload)
data = response.json()

if response.status_code == 200:
    # Get the ID from the list response
    render_id = data[0]['id']
    final_url = data[0]['url']
    
    print(f"⏳ Video is rendering. (ID: {render_id})")
    print("This will take about 3-5 minutes for 40 scenes. Please wait...")

    # --- THE WAITING LOOP ---
    while True:
        status_check = requests.get(f"{url}/{render_id}", headers=headers)
        status_data = status_check.json()
        current_status = status_data.get("status")

        if current_status == "completed":
            print(f"\n✅ SUCCESS! Your video is ready!")
            print(f"🔗 Download here: {final_url}")
            break
        elif current_status == "failed":
            print("\n❌ Rendering failed. Please check your Creatomate dashboard.")
            break
        else:
            print(f"Status: {current_status}... still processing...", end="\r")
            time.sleep(10) # Checks every 10 seconds
else:
    print("❌ Actual API Error:", data)