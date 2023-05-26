#!/usr/bin/env node

import brainEven from '../src/index.js';
import { rules, gameLogic } from '../games/brain-even-game.js';

brainEven(rules, gameLogic);
