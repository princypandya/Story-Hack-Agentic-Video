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
    else:
        print(f"Error: Could not find {paper_path}. Please check your folder structure.")