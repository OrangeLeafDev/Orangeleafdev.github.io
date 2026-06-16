(This was sourced from a private repository (`OrangeLeafDev/fromtheroots`) to be viewed for the public)
(Updated as of May 19, 2026)
# From The Roots
A story-driven turn-based RPG all about a world where anything (literally) can become alive and emerge sentient just like any other person. From something as dead as a rock, to things filled with life like fauna and flora.

This is the source code for From The Roots and any prior releases.

## Credits
### Main Team
#### orangeleaf36🍊 
- Everything (lmao)
#### Klueshie🐏
- Co-Artist
- Co-Writer
### Quality Assessors

#### Happypig375🐽 (QA)
- Writing
#### Kanj (QA)
- Writing
#### DizzyAwe😺 (Advice)
- Writing
- Art & Animations
#### Ukn (Advice)
- Art
- Writing


## Semantic Versioning
From The Roots follows [semantic versioning](https://semver.org/) in some sense, but prioritizes architectural lineage over raw chronological history.
| Version | Architecture                                 |
| ------- | -------------------------------------------- |
| 0.x.x   | [Legacy](#legacy)                            |
| 1.x.x   | [Two/Thirds Framework](#twothirds-framework) |
| 2.x.x   | [Roots Engine](#roots-engine)                |

This may however, be inconsistent with internal versioning for projects and releases pre-Roots and will keep the trailing `x` sub-numbering.

Repository-wise, Roots Engine will use the new semantic versioning scheme under `2.x.x` and `x.x` project-wise.

### Legacy
This architecture has no proper architecture, and is driven by Godot's built-in root management code.

### Two/Thirds Framework
This architecture is the first proper internal structure for From The Roots and has seen its use in other projects like [ReBound](https://orangeleaf36.itch.io/rebound) and [LiteraTURO](https://orangeleaf36.itch.io/literaturo). However, because of its versatility over time, it became generalized and has lost its intended specialization as an RPG engine in some degree.

### Roots Engine
This architecture is based on the Two/Thirds Framework, and is restructured to better suit the game as an RPG.

## Licensing

This project is dual-licensed under the MIT License and a proprietary license depending on its usage.

| Usage              | License                                    | Scope
| ------------------ | ------------------------------------------ | -------
| Commercial         | [Proprietary](#proprietary-license)        | `Core` & `Game` code, assets (art, music, sounds, story) *only*
| Non-Commercial     | N/A [(See here)](#non-commercial-usage)    | All
| 3rd-party software | [Depends](#3rd-party-softwaredependencies) | 3rd-party software/dependencies *only*

### Proprietary License

For commercial use, this project is available under a proprietary license (All Rights Reserved). For more details, see the [LICENSE](./LICENSE) file or contact [contact@orangeleaf36.dev](mailto:contact@orangeleaf36.dev?subject=From%20The%20Roots%20%7C%20Proprietary%20License%20Inquiry)

### Non-Commercial Usage

Look, I'm too early in development to have a secondary license that allows modding/contribution *legally*, so do whatever the f### you want with it, as long as you don't:
- Claim the entire project (core arts, assets, audio, and story) as your own
- Sell the project as your own (this is non-commercial, after all)

You can:
- Reverse engineer the code
- Utilize templates for modding

### 3rd-party software/dependencies
This includes the following:
- SDKs e.g. Steamworks, FMod, etc.
- APIs e.g. Discord RPC, itch.io, (optional) Steam integration, etc.
- Godot `AssetLib`s including what's currently in use but especially not exclusive to:
  - BetterTerrain
  - Console
  - Mod Loader

Are treated separately because they follow prior licenses that may or may not include:
- Proprietary
  - Commercial
  - Valve SDK License
  - Developer platform terms
- Terms of Use
  - Partner terms
  - Platform terms
- MIT License
- Any Creative Commons variant
- Apache 2.0
- Unlicense
- Among others

And are therefore treated separately from core framework & pack contents.
