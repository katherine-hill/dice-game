const rollTheDice = {
    dice: {
        dieOne: document.querySelector('.die-one'),
        dieTwo: document.querySelector('.die-two')
    },
    startDate: new Date(),
    dateYMD: moment().format('MMMM Do YYYY'),
    dateLTS: moment().format('LTS'),
    countArray: [],
    resultScript: document.querySelector('.win-or-lose'),
    endTime: document.querySelector('.seconds'),
    counter: 0,
    startSeconds: 0,
    startTime: document.querySelector('.start-time'),
    entryNumber: document.querySelector('.entries'),
    button: document.querySelector('.roll-button'),
    generateRandomNumber() {
        return Math.floor(Math.random() * 6) + 1;
    },
    getValue() {
        const num1 = this.generateRandomNumber();
        const num2 = this.generateRandomNumber();
        this.numbersOnDice(num1, num2);
        this.addNumbers(num1, num2);
    },
    numbersOnDice(num1, num2) {
        this.dice.dieOne.innerHTML = `${num1}`;
        this.dice.dieTwo.innerHTML = num2;
    },
    initDate() {
        this.startTime.innerHTML = `You started this game on:${this.dateYMD} at ${this.dateLTS}`;
    },

    addNumbers(number1, number2) {
        if (number1 + number2 === 7 || number1 + number2 === 11) {
            const now = new Date();
            const seconds = Math.ceil((now.getTime() - this.startDate.getTime()) / 1000);

            this.resultScript.innerHTML = `Congrats, bro.`;
            this.entryNumber.innerHTML = `It only took you ${this.counter} times...time...whichever.`;
            console.log('entryNumber');
            console.log(seconds);
            this.endTime.innerHTML = `Took you ${seconds} seconds to win.`;
            this.resetAll();
            return;
        } else {
            this.resultScript.innerHTML = `Better luck next time, nerd.`;
            this.entryNumber.innerHTML = '';
            this.endTime.innerHTML = '';
        }
    },
    resetAll() {
        this.startDate = new Date();
        this.counter = 0;
        this.countArray = [];

    },
    getTime() {

    },

    init() {
        this.initDate();
        this.button.addEventListener('click', () => {

            this.getValue();
            this.counter++;
            this.countArray.push(this.counter);
            this.countArray.push(this.numbersOnDice);

        });
    },
};
rollTheDice.init();
