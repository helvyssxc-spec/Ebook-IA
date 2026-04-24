"""
Gera MP3 do audiobook a partir dos roteiros em scripts/.
Usa edge-tts (grátis, Microsoft Edge Neural voices, pt-BR).

Uso:
    python generate.py              # gera todos os capítulos
    python generate.py 00-prefacio  # gera só um

Voz padrão: Francisca (feminina, profissional).
Alternativas: pt-BR-AntonioNeural (masculino), pt-BR-ThalitaNeural (casual).
"""
import asyncio
import sys
from pathlib import Path

import edge_tts

VOICE = "pt-BR-FranciscaNeural"
RATE = "+0%"       # velocidade padrão; usar "-5%" pra mais lento, "+10%" pra mais rápido
VOLUME = "+0%"
PITCH = "+0Hz"

BASE = Path(__file__).parent
SCRIPTS_DIR = BASE / "scripts"
OUTPUT_DIR = BASE / "output"


async def generate_one(script_path: Path) -> Path:
    text = script_path.read_text(encoding="utf-8")
    output_path = OUTPUT_DIR / (script_path.stem + ".mp3")
    communicate = edge_tts.Communicate(
        text,
        voice=VOICE,
        rate=RATE,
        volume=VOLUME,
        pitch=PITCH,
    )
    await communicate.save(str(output_path))
    size_kb = output_path.stat().st_size / 1024
    print(f"  OK  {output_path.name}  ({size_kb:.0f} KB)")
    return output_path


async def main() -> None:
    OUTPUT_DIR.mkdir(exist_ok=True)

    if len(sys.argv) > 1:
        targets = [SCRIPTS_DIR / f"{sys.argv[1]}.txt"]
    else:
        targets = sorted(SCRIPTS_DIR.glob("*.txt"))

    if not targets or not targets[0].exists():
        print(f"ERRO: nenhum roteiro encontrado em {SCRIPTS_DIR}")
        sys.exit(1)

    print(f"Gerando {len(targets)} arquivo(s) com voz {VOICE}...")
    for script in targets:
        if script.exists():
            await generate_one(script)
        else:
            print(f"  AVISO  {script.name} nao existe — pulado")
    print("Pronto.")


if __name__ == "__main__":
    asyncio.run(main())
