// copy-blockly-media.js (ESM version)
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const blocklyMediaSrc = path.resolve(__dirname, 'node_modules/blockly/media');
const mediaDestination = path.resolve(__dirname, 'public/media');

fs.copySync(blocklyMediaSrc, mediaDestination, { overwrite: true });
console.log('✅ Médias Blockly copiés avec succès vers public/media');
