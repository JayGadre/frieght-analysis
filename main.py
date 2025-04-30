from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import google.generativeai as genai

# Initialize Gemini API
genai.configure(api_key="AIzaSyCUlZS6HMlJA_shKxPEdbw5xOsB8laaZZk")
model = genai.GenerativeModel("gemini-1.5-pro")

app = FastAPI()

# ✅ Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze-freight/")
async def analyze_freight(file: UploadFile = File(...)):
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Please upload a CSV file.")

    try:
        df = pd.read_csv(file.file)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error reading CSV file: {str(e)}")

    csv_content = df.head(20).to_string(index=False)

    prompt = f"""
You are a freight logistics data analyst.
I will provide you a dataset containing information about freight shipments in CSV format (shown as text).
Your task is to generate a detailed, professional analysis report covering the following points:
- Total number of shipments.
- Major routes and their shipment count.
- Most common modes of transportation.
- Highest and lowest freight costs, along with the respective shipment details.
- Any notable patterns, anomalies, or insights you can identify.
- Suggestions or recommendations based on the data for improving freight operations and reducing costs.

Here is the freight data (showing first 20 records):

{csv_content}

Now, generate a detailed report based on this data.
"""

    response = model.generate_content(prompt)

    return JSONResponse(content={"report": response.text})
