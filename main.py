import os
from dotenv import load_dotenv
from llama_parse import LlamaParse
import json
import re
import fitz

# Load the API key from your .env file
load_dotenv()

def ingest_research_paper(file_path):
    """
    Converts the PDF into structured Markdown text.
    Markdown helps the AI understand the difference between 
    Abstract, Methodology, and Results.
    """
    # 1. Initialize the parser with specific instructions for research papers
    parser = LlamaParse(
        result_type="markdown", 
        verbose=True,
        language="en",
        parsing_instruction="This is a technical research paper. Carefully preserve tables, mathematical formulas, and the logical flow of sections."
    )

    # 2. Load and parse the data from your data/ folder
    print(f"--- Starting parsing for: {file_path} ---")
    documents = parser.load_data(file_path)
    
    # 3. Combine all parsed pages into one string
    full_text = "\n\n".join([doc.text for doc in documents])
    return full_text

def extract_document_elements(content):
    """
    Extracts document elements like code blocks, tables, and formulas from content.
    """
    elements = []
    
    # Extract code blocks
    code_blocks = re.findall(r'```[\w]*\n(.*?)\n```', content, re.DOTALL)
    for i, code in enumerate(code_blocks):
        elements.append({
            "type": "code_block",
            "content": code.strip()[:200],  # First 200 chars
            "id": f"code_{i}"
        })
    
    # Extract mathematical formulas or special formatting
    if "formula" in content.lower() or "$" in content:
        elements.append({
            "type": "formula",
            "content": "Mathematical concepts discussed",
            "id": "formula_1"
        })
    
    # Extract tables (simple detection)
    if "table" in content.lower() or "|" in content:
        elements.append({
            "type": "table",
            "content": "Data table from research",
            "id": "table_1"
        })
    
    return elements

def generate_video_script_json(full_text):
    """
    Generates a video script in JSON format from the parsed research text.
    Takes video duration from user and structures the script accordingly.
    """
    # Ask for video duration
    try:
        duration_minutes = int(input("Enter the desired video duration in minutes: "))
    except ValueError:
        print("Invalid input. Using default 10 minutes.")
        duration_minutes = 10
    
    # Split the text into sections based on markdown headers
    sections = full_text.split('\n# ')
    
    scenes = []
    total_duration_seconds = duration_minutes * 60
    
    # Scene 1: Opening
    intro_duration = int(total_duration_seconds * 0.2)
    scenes.append({
        "scene_id": 1,
        "title": "Opening Scene",
        "narration": f"Welcome to this comprehensive video on data privacy! Today, we're exploring encryption techniques from a research paper. This video is approximately {duration_minutes} minutes long. Let's dive in!",
        "visuals": ["title_screen.png", "lock_key_animation.gif"],
        "on_screen_text": "Data Privacy Lab: Mastering Encryption Techniques",
        "document_elements": [],
        "duration_seconds": intro_duration,
        "animation": "fade_in",
        "transition": "dissolve"
    })
    
    # Process content sections
    num_sections = len(sections) - 1
    section_duration = int(total_duration_seconds * 0.7 / num_sections) if num_sections > 0 else 0
    
    scene_id = 2
    for i, section in enumerate(sections[1:], 1):
        lines = section.split('\n')
        header = lines[0].strip()
        content = '\n'.join(lines[1:]).strip()
        
        # Extract first 2-3 sentences as narration
        sentences = content.split('. ')
        summary_sentences = sentences[:2]
        narration = '. '.join(summary_sentences) + '.' if summary_sentences else content[:300]
        
        # Determine section type and visual
        if "Symmetric" in header:
            section_title = "Symmetric Encryption"
            visuals = ["symmetric_key.png", "lock_unlock_box.gif"]
            animation = "slide_in_left"
        elif "Asymmetric" in header or "Public-Key" in header:
            section_title = "Asymmetric Encryption"
            visuals = ["public_private_keys.png", "key_pair_animation.gif"]
            animation = "slide_in_right"
        elif "Signature" in header:
            section_title = "Digital Signatures"
            visuals = ["digital_signature.png", "verification_process.gif"]
            animation = "zoom_in"
        else:
            section_title = header
            visuals = ["diagram.png", "demo.gif"]
            animation = "fade_in"
        
        # Extract document elements
        doc_elements = extract_document_elements(content)
        
        scenes.append({
            "scene_id": scene_id,
            "title": section_title,
            "narration": narration,
            "visuals": visuals,
            "on_screen_text": f"Section {i}: {section_title}",
            "document_elements": doc_elements,
            "duration_seconds": section_duration,
            "animation": animation,
            "transition": "cut" if i % 2 == 0 else "dissolve"
        })
        
        scene_id += 1
    
    # Scene: Conclusion
    conclusion_duration = int(total_duration_seconds * 0.1)
    scenes.append({
        "scene_id": scene_id,
        "title": "Conclusion",
        "narration": "In conclusion, mastering encryption is key to data privacy. Practice these concepts regularly to strengthen your cybersecurity knowledge!",
        "visuals": ["conclusion_screen.png", "call_to_action.gif"],
        "on_screen_text": "Subscribe • Like • Comment | Resources: OpenSSL Documentation",
        "document_elements": [],
        "duration_seconds": conclusion_duration,
        "animation": "fade_out",
        "transition": "fade_to_black"
    })
    
    # Create the complete JSON structure
    video_script = {
        "project_metadata": {
            "title": "Data Privacy Lab: Mastering Encryption Techniques",
            "duration_minutes": duration_minutes,
            "total_duration_seconds": total_duration_seconds,
            "total_scenes": len(scenes),
            "course": "3CS12D103 - Data Privacy",
            "topic": "Encrypting/Decrypting Files Using Symmetric and Asymmetric Encryption"
        },
        "scenes": scenes
    }
    
    # Save to JSON file
    with open("video_script.json", "w", encoding="utf-8") as f:
        json.dump(video_script, f, indent=2, ensure_ascii=False)
    
    print(f"\nSuccess! JSON video script saved to 'video_script.json'")
    print(f"Total scenes: {len(scenes)}")
    print(f"Total duration: {duration_minutes} minutes ({total_duration_seconds} seconds)")

def extract_images_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)

    os.makedirs("assets", exist_ok=True)

    images = []

    for page_index in range(len(doc)):
        page = doc[page_index]

        for img_index, img in enumerate(page.get_images()):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]

            image_filename = f"assets/image_{page_index}_{img_index}.png"

            with open(image_filename, "wb") as img_file:
                img_file.write(image_bytes)

            images.append(image_filename)

    return images

if __name__ == "__main__":
    # Path to your file as shown in your folder structure
    paper_path = "./data/paper.pdf"
    # Extract images from the research paper
    images = extract_images_from_pdf(paper_path)
    print("Extracted images:", images)
    
    if os.path.exists(paper_path):
        # Run the conversion
        research_text = ingest_research_paper(paper_path)
        
        # Display the result
        print("\n" + "="*30)
        print("EXTRACTED RESEARCH TEXT")
        print("="*30 + "\n")
        print(research_text)
        
        # Optional: Save it to a file so you can use it for Step 2 (The Script Agent)
        with open("parsed_output.md", "w", encoding="utf-8") as f:
            f.write(research_text)
            print("\nSuccess! Text also saved to 'parsed_output.md'")
        
        # Generate the video script in JSON format
        generate_video_script_json(research_text)
    else:
        print(f"Error: Could not find {paper_path}. Please check your folder structure.")
