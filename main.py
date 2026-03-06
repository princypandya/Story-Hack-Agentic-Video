import os
from dotenv import load_dotenv
from llama_parse import LlamaParse

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

def generate_video_script(full_text):
    """
    Generates a video script from the parsed research text.
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
    
    script_parts = []
    
    # Introduction (allocate ~20% time)
    intro_time = duration_minutes * 0.2
    script_parts.append(f"[Opening Scene: Upbeat music plays. Title screen appears: 'Data Privacy Lab: Mastering Encryption Techniques' | Duration: ~{intro_time:.1f} min]\n\nNarrator: Welcome to this comprehensive video on data privacy! Today, we're exploring encryption techniques from a research paper. This video is approximately {duration_minutes} minutes long. Let's dive in!\n")
    
    # Process sections
    num_sections = len(sections) - 1  # Skip first if not header
    section_time = (duration_minutes * 0.7) / num_sections if num_sections > 0 else 0
    
    for i, section in enumerate(sections[1:], 1):  # Skip the first part
        lines = section.split('\n')
        header = lines[0].strip()
        content = '\n'.join(lines[1:]).strip()
        
        # Basic summarization: extract first 2-3 sentences
        sentences = content.split('. ')
        summary_sentences = sentences[:3]  # Take first 3 sentences
        summary = '. '.join(summary_sentences) + '.' if summary_sentences else content[:300] + '...'
        
        section_title = "Symmetric Encryption" if "Symmetric" in header else ("Asymmetric Encryption" if "Asymmetric" in header or "Public-Key" in header else ("Digital Signatures" if "Signature" in header else header))
        
        script_parts.append(f"[Section {i}: {section_title} | Duration: ~{section_time:.1f} min]\n\nNarrator: {summary}\n\n[Visual: Relevant animations and demos]\n")
    
    # Conclusion (allocate ~10% time)
    conclusion_time = duration_minutes * 0.1
    script_parts.append(f"[Conclusion | Duration: ~{conclusion_time:.1f} min]\n\nNarrator: In conclusion, mastering encryption is key to data privacy. Practice these concepts!\n\n[End screen: Call to action - Subscribe, like, and comment. Resources: OpenSSL docs]\n\n[Outro music fades out]\n")
    
    script = '\n'.join(script_parts)
    
    # Save to file
    with open("video_script.txt", "w", encoding="utf-8") as f:
        f.write(script)
    print(f"\nSuccess! Video script saved to 'video_script.txt' (Total duration: ~{duration_minutes} min)")

if __name__ == "__main__":
    # Path to your file as shown in your folder structure
    paper_path = "./data/paper.pdf"
    
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
        
        # Generate the video script
        generate_video_script(research_text)
    else:
        print(f"Error: Could not find {paper_path}. Please check your folder structure.")