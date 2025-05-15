from __future__ import annotationsfrom 
from livekit.agents import (
    AutoSubscribe,
    JobContext,
    WorkerOptions,
    cli,
    llm
)
from livekit.agents.multimodal import MultimodalAgent
from livekit.plugins import openai
from dotenv import load_dotenv
import os

load_dotenv()

async def entrypoint(ctx: JobContext):
    await ctx.connect(auto_subscribe=AutoSubscribe.SUBSCRIBE_ALL) # Connect to a livekit room and subscribe to all tracks (audio, video, text)
    await ctx.wait_for_participant() # Wait for a participant to join the room

    model = openai.realtime.RealtimeModel(
        instructions = "",
        voice="ballad",
        temperature = 0.8,
        modalities = ["text", "audio"]
    )

    

