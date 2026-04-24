"""Gera 3 samples comparativos com vozes diferentes pra escolha do usuario."""
import asyncio
from pathlib import Path
import edge_tts

BASE = Path(__file__).parent
SCRIPT = (BASE / "scripts" / "sample-comparativo.txt").read_text(encoding="utf-8")
OUT = BASE / "output"
OUT.mkdir(exist_ok=True)

VOICES = [
    ("pt-BR-FranciscaNeural", "sample-1-francisca.mp3"),
    ("pt-BR-AntonioNeural",   "sample-2-antonio.mp3"),
    ("pt-BR-ThalitaMultilingualNeural", "sample-3-thalita.mp3"),
]

async def main():
    for voice, filename in VOICES:
        comm = edge_tts.Communicate(SCRIPT, voice=voice, rate="-3%")
        await comm.save(str(OUT / filename))
        print(f"  OK  {filename}  ({voice})")

asyncio.run(main())
print("Pronto.")
