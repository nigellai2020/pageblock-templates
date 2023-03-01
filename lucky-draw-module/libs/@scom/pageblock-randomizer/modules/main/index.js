var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@pageblock-randomizer/main/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_1.Styles.Theme.ThemeVars;
    components_1.Styles.cssRule('#pnlRandomizerMain', {
        margin: '0 auto',
        maxWidth: '1400px',
        border: '3px solid rgba(189, 189, 189, 0.4)',
        $nest: {
            '.random-number': {
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(180deg, #FFEAA4 0%, #CB9B00 100%)',
                fontFamily: Theme.typography.fontFamily,
                $nest: {
                    '> span': {
                        display: 'contents'
                    }
                }
            },
            '.no-wrap': {
                whiteSpace: 'nowrap'
            }
        }
    });
});
define("@pageblock-randomizer/main/utils.ts", ["require", "exports", "@ijstech/eth-wallet"], function (require, exports, eth_wallet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRoundByReleaseTime = exports.getRandomizerResult = void 0;
    const DRandAPI = 'https://drand.cloudflare.com/public/';
    async function hash(value) {
        const encoder = new TextEncoder();
        const data = encoder.encode(value);
        return await window.crypto.subtle.digest("SHA-256", data);
    }
    async function mapRandomNumberToNumbers(hexString, numberOfValues, from, to) {
        const parts = [];
        const range = new eth_wallet_1.BigNumber(to).minus(new eth_wallet_1.BigNumber(from)).plus(1);
        if (range.lt(numberOfValues)) {
            return [];
        }
        const maxRandomValue = new eth_wallet_1.BigNumber(2).pow(256).minus(1);
        const rejectionThreshold = maxRandomValue.idiv(range).times(range);
        let count = 0;
        while (parts.length < numberOfValues) {
            const seed = `${count},${hexString}`;
            const hashedValue = await hash(seed);
            let randNum = new eth_wallet_1.BigNumber('0x' + [...new Uint8Array(hashedValue)].map(x => x.toString(16).padStart(2, '0')).join(''));
            if (randNum.lt(rejectionThreshold)) {
                randNum = randNum.mod(range);
                const value = new eth_wallet_1.BigNumber(from).plus(randNum).toFixed();
                if (!parts.includes(value)) {
                    parts.push(value);
                }
            }
            count++;
        }
        return parts.sort((a, b) => new eth_wallet_1.BigNumber(a).minus(b).toNumber());
    }
    async function getLatestRound() {
        const drandResponse = await fetch(`${DRandAPI}latest`);
        const drandResult = await drandResponse.json();
        return drandResult.round;
    }
    async function getRandomizerResult(round, numberOfValues, from, to) {
        const drandResponse = await fetch(`${DRandAPI}${round}`);
        const drandResult = await drandResponse.json();
        const hexString = drandResult.randomness;
        const randomNumbers = await mapRandomNumberToNumbers(hexString, numberOfValues, from, to);
        console.log('randomNumbers', randomNumbers);
        return randomNumbers;
    }
    exports.getRandomizerResult = getRandomizerResult;
    async function getRoundByReleaseTime(releaseTime) {
        const latestRound = await getLatestRound();
        const secondsFromNow = (releaseTime - new Date().getTime()) / 1000;
        const roundsFromNow = Math.ceil(secondsFromNow / 30);
        return latestRound + roundsFromNow;
    }
    exports.getRoundByReleaseTime = getRoundByReleaseTime;
});
define("@pageblock-randomizer/main", ["require", "exports", "@ijstech/components", "@pageblock-randomizer/main/utils.ts", "@pageblock-randomizer/main/index.css.ts"], function (require, exports, components_2, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RandomizerBlock = void 0;
    const Theme = components_2.Styles.Theme.ThemeVars;
    let RandomizerBlock = class RandomizerBlock extends components_2.Module {
        constructor() {
            super(...arguments);
            this._oldData = {};
            this._data = {};
        }
        async init() {
            super.init();
        }
        async getData() {
            return this._data;
        }
        async setData(value) {
            console.log("set data");
            this._data = value;
            if (this._data.releaseTime) {
                this._data.releaseUTCTime = components_2.moment(Number(this._data.releaseTime)).utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
            }
            if (!this._data.round && this._data.releaseTime) {
                this._data.round = await utils_1.getRoundByReleaseTime(Number(this._data.releaseTime));
            }
            await this.refreshApp();
        }
        async refreshApp() {
            var _a;
            this.lbRound.caption = ((_a = this._data.round) === null || _a === void 0 ? void 0 : _a.toString()) || '';
            this.lbDrawTime.caption = this._data.releaseTime ?
                components_2.moment(Number(this._data.releaseTime)).format('MMM DD, YYYY, h:mm A') : '';
            this.gridResults.clearInnerHTML();
            if (this._data.releaseTime && Number(this._data.releaseTime) > new Date().getTime()) {
                this.hstackResult.visible = false;
                this.lbRound.font = { size: '2rem', weight: 500, color: Theme.colors.primary.main };
                this.lbRound.lineHeight = '2.637rem';
                this.lbDrawTime.font = { size: '1.75rem', weight: 500, color: Theme.text.secondary };
                this.lbDrawTime.lineHeight = '2.637rem';
                // this.hstackReleaseTime.visible = true;
                this.hstackCountdown.visible = true;
                this.lbReleaseTime.caption = components_2.moment(Number(this._data.releaseTime)).format('YYYY-MM-DD HH:mm');
                if (this.timer) {
                    clearInterval(this.timer);
                }
                const refreshCountdown = () => {
                    const days = components_2.moment(Number(this._data.releaseTime)).diff(components_2.moment(), 'days');
                    const hours = components_2.moment(Number(this._data.releaseTime)).diff(components_2.moment(), 'hours') - days * 24;
                    const mins = components_2.moment(Number(this._data.releaseTime)).diff(components_2.moment(), 'minutes') - days * 24 * 60 - hours * 60;
                    this.lbReleasedDays.caption = days.toString();
                    this.lbReleasedHours.caption = hours.toString();
                    this.lbReleasedMins.caption = mins.toString();
                };
                refreshCountdown();
                this.timer = setInterval(refreshCountdown, 60000);
            }
            else {
                this.hstackResult.visible = true;
                this.hstackReleaseTime.visible = false;
                this.hstackCountdown.visible = false;
                this.lbRound.font = { size: '1.5rem', weight: 500, color: Theme.colors.primary.main };
                this.lbRound.lineHeight = '1.758rem';
                this.lbDrawTime.font = { size: '1.5rem', weight: 500, color: Theme.colors.primary.main };
                this.lbDrawTime.lineHeight = '1.758rem';
                if (this._data.round && this._data.numberOfValues) {
                    const result = await utils_1.getRandomizerResult(this._data.round, this._data.numberOfValues, this._data.from, this._data.to);
                    this.gridResults.clearInnerHTML();
                    for (let value of result) {
                        let label = await components_2.Label.create({
                            class: 'random-number',
                            display: 'inline-flex',
                            font: { size: '2rem', bold: true, color: Theme.colors.warning.contrastText },
                            border: { radius: '5px' },
                            background: { color: Theme.colors.warning.main },
                            width: 54.8,
                            height: 54.8,
                            caption: value
                        });
                        this.gridResults.append(label);
                    }
                }
            }
        }
        getTag() {
            return this.tag;
        }
        async setTag(value) {
            this.tag = value;
            this.updateTheme();
        }
        updateTheme() {
            var _a, _b, _c, _d, _e, _f;
            if ((_a = this.tag) === null || _a === void 0 ? void 0 : _a.fontColor)
                this.style.setProperty('--text-primary', this.tag.fontColor);
            if ((_b = this.tag) === null || _b === void 0 ? void 0 : _b.backgroundColor)
                this.style.setProperty('--background-main', this.tag.backgroundColor);
            if ((_c = this.tag) === null || _c === void 0 ? void 0 : _c.roundNumberFontColor)
                this.style.setProperty('--colors-primary-main', this.tag.roundNumberFontColor);
            if ((_d = this.tag) === null || _d === void 0 ? void 0 : _d.winningNumberFontColor)
                this.style.setProperty('--colors-warning-contrast_text', this.tag.winningNumberFontColor);
            if ((_e = this.tag) === null || _e === void 0 ? void 0 : _e.winningNumberBackgroundColor)
                this.style.setProperty('--colors-warning-main', this.tag.winningNumberBackgroundColor);
            if ((_f = this.tag) === null || _f === void 0 ? void 0 : _f.nextDrawFontColor)
                this.style.setProperty('--text-secondary', this.tag.nextDrawFontColor);
        }
        getActions() {
            const actions = [
                {
                    name: 'Settings',
                    icon: 'cog',
                    command: (builder, userInputData) => {
                        return {
                            execute: async () => {
                                this._oldData = this._data;
                                if (userInputData.releaseUTCTime != undefined) {
                                    this._data.releaseUTCTime = userInputData.releaseUTCTime;
                                    this._data.releaseTime = components_2.moment.utc(this._data.releaseUTCTime).valueOf().toString();
                                }
                                if (userInputData.releaseTime != undefined) {
                                    this._data.releaseTime = userInputData.releaseTime;
                                    this._data.releaseUTCTime = components_2.moment(Number(this._data.releaseTime)).utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
                                }
                                if (userInputData.numberOfValues != undefined)
                                    this._data.numberOfValues = userInputData.numberOfValues;
                                if (userInputData.from != undefined)
                                    this._data.from = userInputData.from;
                                if (userInputData.to != undefined)
                                    this._data.to = userInputData.to;
                                this._data.round = await utils_1.getRoundByReleaseTime(Number(this._data.releaseTime));
                                await this.refreshApp();
                            },
                            undo: () => {
                                this._data = this._oldData;
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: {
                        type: 'object',
                        properties: {
                            "releaseUTCTime": {
                                type: "string",
                                format: "date-time"
                            },
                            // "releaseTime": {
                            //   type: "string",
                            //   format: "date-time"
                            // },
                            "numberOfValues": {
                                type: 'number'
                            },
                            "from": {
                                type: 'number'
                            },
                            "to": {
                                type: 'number'
                            }
                        }
                    }
                },
                {
                    name: 'Theme Settings',
                    icon: 'palette',
                    command: (builder, userInputData) => {
                        return {
                            execute: async () => {
                                if (userInputData) {
                                    this.oldTag = this.tag;
                                    this.setTag(userInputData);
                                    if (builder)
                                        builder.setTag(userInputData);
                                }
                            },
                            undo: () => {
                                if (userInputData) {
                                    this.setTag(this.oldTag);
                                    if (builder)
                                        builder.setTag(this.oldTag);
                                }
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: {
                        type: 'object',
                        properties: {
                            backgroundColor: {
                                type: 'string',
                                format: 'color'
                            },
                            fontColor: {
                                type: 'string',
                                format: 'color'
                            },
                            winningNumberBackgroundColor: {
                                type: 'string',
                                format: 'color'
                            },
                            winningNumberFontColor: {
                                type: 'string',
                                format: 'color'
                            },
                            roundNumberFontColor: {
                                type: 'string',
                                format: 'color'
                            },
                            nextDrawFontColor: {
                                type: 'string',
                                format: 'color'
                            }
                        }
                    }
                }
            ];
            return actions;
        }
        render() {
            const paddingTimeUnit = { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' };
            return (this.$render("i-panel", null,
                this.$render("i-vstack", { id: "pnlRandomizerMain", background: { color: Theme.background.main }, padding: { top: '1.5rem', bottom: '4.75rem', left: '1rem', right: '1rem' } },
                    this.$render("i-hstack", { gap: '0.25rem', visible: false, id: "hstackReleaseTime" },
                        this.$render("i-label", { caption: "Result will be released on ", font: { size: '1.2rem' } }),
                        this.$render("i-label", { id: "lbReleaseTime", font: { size: '1.2rem', weight: 'bold' } })),
                    this.$render("i-stack", { direction: "horizontal", gap: "4.938rem" },
                        this.$render("i-hstack", { gap: '0.25rem', visible: false, id: "hstackCountdown" },
                            this.$render("i-vstack", null,
                                this.$render("i-label", { caption: "Time until result:", font: { size: '1rem', weight: 500 }, opacity: 0.5, class: "no-wrap" }),
                                this.$render("i-hstack", { margin: { top: 4 }, gap: '0.5rem', verticalAlignment: "center" },
                                    this.$render("i-label", { id: "lbReleasedDays", border: { radius: '5px' }, padding: paddingTimeUnit, background: { color: Theme.colors.warning.main }, font: { size: '1.5rem', bold: true, color: Theme.colors.warning.contrastText }, width: 38, height: 38, class: 'random-number', display: 'inline-flex' }),
                                    this.$render("i-label", { caption: "D", font: { size: '1.2rem', weight: 'bold' } }),
                                    this.$render("i-label", { id: "lbReleasedHours", border: { radius: '5px' }, padding: paddingTimeUnit, background: { color: Theme.colors.warning.main }, font: { size: '1.5rem', bold: true, color: Theme.colors.warning.contrastText }, width: 38, height: 38, class: 'random-number', display: 'inline-flex' }),
                                    this.$render("i-label", { caption: "H", font: { size: '1.2rem', weight: 'bold' } }),
                                    this.$render("i-label", { id: "lbReleasedMins", border: { radius: '5px' }, padding: paddingTimeUnit, background: { color: Theme.colors.warning.main }, font: { size: '1.5rem', bold: true, color: Theme.colors.warning.contrastText }, width: 38, height: 38, class: 'random-number', display: 'inline-flex' }),
                                    this.$render("i-label", { caption: "M", font: { size: '1.2rem', weight: 'bold' } })))),
                        this.$render("i-vstack", { gap: '0.25rem' },
                            this.$render("i-label", { caption: "Reference Round Number:", font: { size: '1rem', weight: 500 }, opacity: 0.5, class: "no-wrap" }),
                            this.$render("i-label", { id: "lbRound", font: { size: '1.5rem', weight: 500, color: Theme.colors.primary.main } })),
                        this.$render("i-vstack", { gap: '0.25rem' },
                            this.$render("i-label", { caption: "Draw Time:", font: { size: '1rem', weight: 500 }, opacity: 0.5, class: "no-wrap" }),
                            this.$render("i-label", { id: "lbDrawTime", font: { size: '1.5rem', weight: 500, color: Theme.text.secondary } }))),
                    this.$render("i-hstack", { gap: '0.75rem', visible: false, id: "hstackResult", margin: { top: '2.5rem' }, verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Winning Number:", font: { size: '1rem', weight: 500 }, opacity: 0.5, class: "no-wrap" }),
                        this.$render("i-grid-layout", { id: "gridResults", gap: { row: '0.688rem', column: '0.688rem' }, templateColumns: ['repeat(auto-fill, 54.8px)'], width: "100%" })))));
        }
    };
    RandomizerBlock = __decorate([
        components_2.customModule
    ], RandomizerBlock);
    exports.RandomizerBlock = RandomizerBlock;
});
