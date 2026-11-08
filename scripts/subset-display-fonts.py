"""Rebuild the OFL Inter Display web subsets; never modifies Switzer.
Optional regeneration tooling: fonttools[woff]==4.60.2 (Python 3.9+).
Original Inter files and their OFL remain alongside these generated derivatives.
"""
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

root = Path(__file__).resolve().parents[1]
font_dir = root / "src/assets/fonts/inter"
# Latin-1 and common web punctuation; full original fonts remain a glyph fallback.
ranges = [(0x20, 0xFF), (0x2000, 0x206F), (0x2190, 0x21FF)]
unicodes = {n for lo, hi in ranges for n in range(lo, hi + 1)} | {
    0x131, 0x152, 0x153, 0x2BB, 0x2BC, 0x2C6, 0x2DA, 0x2DC,
    0x2074, 0x20AC, 0x2122, 0x2212, 0x25B6, 0xFEFF, 0xFFFD,
}
for weight in ["SemiBold", "Bold"]:
    source = font_dir / f"InterDisplay-{weight}.woff2"
    font = TTFont(source, recalcTimestamp=False)
    options = subset.Options()
    options.layout_features = ["*"]
    options.name_IDs = ["*"]
    options.recalc_timestamp = False
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=unicodes)
    subsetter.subset(font)
    target = font_dir / f"InterDisplay-{weight}-latin.woff2"
    font.save(target)
    print(f"{source.name}: {source.stat().st_size} -> {target.stat().st_size} bytes")
    if weight == "Bold":
        # ImageResponse accepts TTF, not WOFF2; use the same licensed glyphs.
        font.flavor = None
        font.save(font_dir / "InterDisplay-Bold-latin.ttf")
