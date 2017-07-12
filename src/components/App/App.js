import React, { Component } from 'react';

import './App.css';

import correctSoundFile from '../../sounds/correct.wav';
import wrongSoundFile from '../../sounds/wrong.wav';

import { withDisabledLetters } from '../../helpers';

import Folk from '../Folk';
import MissedLetters from '../MissedLetters';
import GuessedLetters from '../GuessedLetters';
import GameOver from '../GameOver';

class App extends Component {
    constructor() {
        super();

        this.state = {
            randomWord: '',
            randomWordArray: [],
            guessedLetters: [],
            missedLetters: [],
            isGameOver: false
        };

        this.fetchRandomWord = this.fetchRandomWord.bind(this);

        this.addKeyboardHandler = this.addKeyboardHandler.bind(this);
        this.removeKeyboardHandler = this.removeKeyboardHandler.bind(this);
        this.keyboardHandler = this.keyboardHandler.bind(this);
        this.checkPressedLetter = this.checkPressedLetter.bind(this);

        this.onNewWordButtonClick = this.onNewWordButtonClick.bind(this);
        this.updateGameState = this.updateGameState.bind(this);
        this.startGame = this.startGame.bind(this);
        this.finishGame = this.finishGame.bind(this);
    }

    // LIFE CYCLE

    componentDidMount() {
        this.startGame();
    }

    render() {
        return (
            <div className='App flex-items flex-column flex-justify-between'>
                <div className='flex-items flex-justify-between' >
                    <Folk missedLetters={this.state.missedLetters} />
                    <MissedLetters missedLetters={this.state.missedLetters} />
                </div>
                <div>
                    <GuessedLetters randomWordArray={withDisabledLetters(this.state.randomWordArray)} guessedLetters={this.state.guessedLetters} />
                </div>
                {this.state.isGameOver && <GameOver onNewWordButtonClick={this.onNewWordButtonClick} />}
            </div>
        );
    }

    // HELPERS

    async fetchRandomWord() {
        const response = await fetch('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=11&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
        const json = await response.json();
        const word = json.word.toLowerCase();

        this.setState({
            randomWord: word,
            randomWordArray: word.split('')
        });
    }

    addKeyboardHandler() {
        window.addEventListener('keydown', this.keyboardHandler);
    }

    removeKeyboardHandler() {
        window.removeEventListener('keydown', this.keyboardHandler);
    }

    keyboardHandler(e) {
        if ((e.keyCode > 64 && e.keyCode < 91) || e.keyCode === 189) {
            this.checkPressedLetter(e.key);
        }
    }

    checkPressedLetter(key) {
        if (this.state.guessedLetters.includes(key)) { return; }
        if (this.state.missedLetters.includes(key)) { return; }

        const regexp = new RegExp(key);

        if (this.state.randomWord.match(regexp) !== null) {
            this.setState({ guessedLetters: [...this.state.guessedLetters, key] });
        } else {
            this.setState({ missedLetters: [...this.state.missedLetters, key] });
        }

        this.updateGameState();
    }

    onNewWordButtonClick() {
        this.startGame();
    }

    updateGameState() {
        const lettersToGuess = this.state.randomWordArray.filter(letter => !this.state.guessedLetters.includes(letter));

        if (lettersToGuess.length === 0) {
            new Audio(correctSoundFile).play();
            setTimeout(() => {
                this.startGame();
            }, 500);
        }

        if (this.state.missedLetters.length === 11) {
            new Audio(wrongSoundFile).play();
            this.finishGame();
        }
    }

    startGame() {
        this.fetchRandomWord();
        this.setState({
            isGameOver: false,
            missedLetters: [],
            guessedLetters: []
        });
        this.addKeyboardHandler();
    }

    finishGame() {
        this.setState({ isGameOver: true });
        this.removeKeyboardHandler();
    }
}

export default App;
