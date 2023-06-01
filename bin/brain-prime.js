#!/usr/bin/env node

import brainPrime from '../src/index.js';
import { rules, gameLogic } from '../games/brain-prime-game.js';

brainPrime(rules, gameLogic);
