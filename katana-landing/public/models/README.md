# Using your own 3D model

1. Drop your `katana.glb` (or any `.glb` / `.gltf`) file into this folder.
2. Open `src/config.js` and set `useModel: true`.
3. Adjust `modelPath` and `modelScale` in `src/config.js` to taste.

If the model fails to load (or the file is missing), the site automatically
falls back to the built-in procedural katana — nothing breaks.
