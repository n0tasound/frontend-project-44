#!/usr/bin/env node

import brainCalc from '../src/index.js';
import { rules, gameLogic } from '../games/brain-calc-game.js';

brainCalc(rules, gameLogic);
