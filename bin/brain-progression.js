#!/usr/bin/env node

import brainProgression from '../src/index.js';
import { rules, gameLogic } from '../games/brain-progression-game.js';

brainProgression(rules, gameLogic);
