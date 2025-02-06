import {startGameBtn, nextQuestionBtn, restartGameBtn } from './domElements.js';

import {startGame, goToNextQuestion,  restartGame, LoadSavesGame} from './logica.js';


//обработчики
startGameBtn.addEventListener('click', startGame);
nextQuestionBtn.addEventListener('click', goToNextQuestion);
restartGameBtn.addEventListener('click', restartGame);
window.addEventListener('load', LoadSavesGame);
