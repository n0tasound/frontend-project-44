#!/usr/bin/env node

import brainGcd from '../src/index.js';
import { rules, gameLogic } from '../games/brain-gcd-game.js';

brainGcd(rules, gameLogic);
