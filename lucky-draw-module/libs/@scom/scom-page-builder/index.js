var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-page-builder/assets.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        return `${moduleDir}/${path}`;
    }
    exports.default = {
        fonts: {
            roboto: {
                bold: fullPath('fonts/roboto/Roboto-Bold.ttf'),
                italic: fullPath('fonts/roboto/Roboto-Italic.ttf'),
                light: fullPath('fonts/roboto/Roboto-Light.ttf'),
                medium: fullPath('fonts/roboto/Roboto-Medium.ttf'),
                regular: fullPath('fonts/roboto/Roboto-Regular.ttf'),
                thin: fullPath('fonts/roboto/Roboto-Thin.ttf'),
            },
            notosans: {
                bold: fullPath('fonts/notosans/NotoSans-Bold.ttf'),
                italic: fullPath('fonts/notosans/NotoSans-Italic.ttf'),
                light: fullPath('fonts/notosans/NotoSans-Light.ttf'),
                medium: fullPath('fonts/notosans/NotoSans-Medium.ttf'),
                regular: fullPath('fonts/notosans/NotoSans-Regular.ttf'),
                thin: fullPath('fonts/notosans/NotoSans-Thin.ttf'),
            }
        },
        icons: {
            logo: fullPath('img/sc-logo.svg'),
            logoMobile: fullPath('img/sc-logo-mobile.svg'),
            validocs: fullPath('img/validocs.svg')
        },
        img: {
            network: {
                bsc: fullPath('img/network/bsc.svg'),
                eth: fullPath('img/network/eth.svg'),
                amio: fullPath('img/network/amio.svg'),
                avax: fullPath('img/network/avax.svg'),
                ftm: fullPath('img/network/ftm.svg'),
                polygon: fullPath('img/network/polygon.svg'),
            },
            wallet: {
                metamask: fullPath('img/wallet/metamask.png'),
                trustwallet: fullPath('img/wallet/trustwallet.svg'),
                binanceChainWallet: fullPath('img/wallet/binance-chain-wallet.svg'),
                walletconnect: fullPath('img/wallet/walletconnect.svg')
            }
        },
        fullPath
    };
});
define("@scom/scom-page-builder/const/textbox.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.textStyles = void 0;
    ///<amd-module name='@scom/scom-page-builder/const/textbox.ts'/> 
    exports.textStyles = [
        {
            title: 'Normal Text'
        },
        {
            title: 'Title'
        },
        {
            title: 'Heading'
        },
        {
            title: 'Subheading'
        },
        {
            title: 'Small Text'
        }
    ];
});
define("@scom/scom-page-builder/const/index.ts", ["require", "exports", "@scom/scom-page-builder/const/textbox.ts"], function (require, exports, textbox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IPFS_GATEWAY = exports.IPFS_GATEWAY_IJS = exports.IPFS_UPLOAD_END_POINT = exports.DEFAULT_FOOTER_HEIGHT = exports.DEFAULT_SIDEBAR_MENU_WIDTH = exports.DEFAULT_SCROLLBAR_WIDTH = exports.DEFAULT_BOXED_LAYOUT_WIDTH = exports.EVENT = void 0;
    ///<amd-module name='@scom/scom-page-builder/const/index.ts'/> 
    exports.EVENT = {
        ON_LOAD: 'ON_LOAD',
        ON_SAVE: 'ON_SAVE',
        ON_CONFIG_SAVE: 'ON_CONFIG_SAVE',
        ON_CONFIG_CHANGE: 'ON_CONFIG_CHANGE',
        ON_PAGING_UPDATE: 'ON_PAGING_UPDATE',
        ON_SWITCH_PAGE: 'ON_SWITCH_PAGE',
        ON_TOGGLE_PAGE_VISIBILITY: 'ON_TOGGLE_PAGE_VISIBILITY',
        ON_UPDATE_SECTIONS: 'ON_UPDATE_SECTIONS',
        ON_HASH_CHANGE: 'ON_HASH_CHANGE',
        ON_PREVIEW: 'ON_PREVIEW',
        ON_ADD_ELEMENT: 'ON_ADD_ELEMENT',
        ON_CLONE: 'ON_CLONE',
        ON_RESIZE: 'ON_RESIZE',
        ON_UPDATE_FOOTER: 'ON_UPDATE_FOOTER',
    };
    exports.DEFAULT_BOXED_LAYOUT_WIDTH = '1200px';
    exports.DEFAULT_SCROLLBAR_WIDTH = 17;
    exports.DEFAULT_SIDEBAR_MENU_WIDTH = 350;
    exports.DEFAULT_FOOTER_HEIGHT = 50;
    exports.IPFS_UPLOAD_END_POINT = 'https://ipfs-gateway.scom.dev/api/1.0/sync/data';
    exports.IPFS_GATEWAY_IJS = 'https://ipfs.scom.dev/ipfs/';
    exports.IPFS_GATEWAY = 'https://ipfs.io/ipfs/';
    __exportStar(textbox_1, exports);
});
define("@scom/scom-page-builder/store/index.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRootDir = exports.setRootDir = exports.getDappContainer = exports.getPageBlocks = exports.setPageBlocks = exports.state = exports.pageObject = exports.PageObject = void 0;
    class PageObject {
        constructor() {
            this._header = {
                headerType: 'banner',
                image: "",
                elements: []
            };
            this._sections = new Map();
            this._footer = {
                image: "",
                elements: []
            };
        }
        set header(value) {
            this._header = value;
        }
        get header() {
            return this._header;
        }
        set sections(value) {
            this._sections.clear();
            value.forEach(val => {
                this._sections.set(val.id, val);
            });
        }
        get sections() {
            return Array.from(this._sections.values());
        }
        set footer(value) {
            this._footer = value;
        }
        get footer() {
            return this._footer;
        }
        addSection(value) {
            this._sections.set(value.id, value);
        }
        removeSection(id) {
            this._sections.delete(id);
        }
        getSection(id) {
            return this._sections.get(id) || null;
        }
        getRow(rowId) {
            if (rowId === 'header')
                return this.header;
            if (rowId === 'footer')
                return this.footer;
            return rowId ? this.getSection(rowId) : null;
        }
        removeRow(id) {
            if (id === 'header')
                this._header.elements = [];
            else if (id === 'footer')
                this._footer.elements = [];
            else
                this.removeSection(id);
        }
        addRow(data, id) {
            if (id === 'header')
                this.header = data;
            else if (id === 'footer')
                this.footer = data;
            else
                this.addSection(data);
        }
        findElement(elements, elementId) {
            if (!elements || !elements.length)
                return null;
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element && element.id === elementId) {
                    return element;
                }
                else if (element && element.type === 'composite') {
                    const elm = this.findElement(element.elements, elementId);
                    if (elm)
                        return elm;
                }
            }
            return null;
        }
        getElement(sectionId, elementId) {
            var _a, _b;
            if (sectionId === 'header') {
                const elements = ((_a = exports.pageObject.header) === null || _a === void 0 ? void 0 : _a.elements) || [];
                return elements[0] || null;
            }
            if (sectionId === 'footer') {
                const elements = ((_b = exports.pageObject.footer) === null || _b === void 0 ? void 0 : _b.elements) || [];
                return elements[0] || null;
            }
            const section = this.getSection(sectionId);
            if (!section)
                return null;
            const elm = this.findElement(section.elements, elementId);
            return elm;
        }
        setElement(sectionId, elementId, value) {
            let elm = this.getElement(sectionId, elementId);
            console.log('set elm', sectionId, elementId, value);
            if (elm && value.properties)
                elm.properties = value.properties;
            if (elm && value.column)
                elm.column = value.column;
            if (elm && value.columnSpan)
                elm.columnSpan = value.columnSpan;
            if (elm && value.tag)
                elm.tag = value.tag;
        }
        removeElement(sectionId, elementId) {
            if (sectionId === 'header') {
                this._header.elements = [];
            }
            if (sectionId === 'footer') {
                this._footer.elements = [];
            }
            const section = this.getSection(sectionId);
            if (!section)
                return;
            // TODO: check with composite
            const elementIndex = section.elements.findIndex(elm => elm.id === elementId);
            if (elementIndex !== -1) {
                section.elements.splice(elementIndex, 1);
            }
        }
        addElement(sectionId, value) {
            if (sectionId === 'header') {
                this._header.elements = [value];
            }
            if (sectionId === 'footer') {
                this._footer.elements = [value];
            }
            const section = this.getSection(sectionId);
            if (!section)
                return;
            section.elements.push(value);
        }
    }
    exports.PageObject = PageObject;
    exports.pageObject = new PageObject();
    exports.state = {
        pageBlocks: [],
        rootDir: ''
    };
    const setPageBlocks = (value) => {
        exports.state.pageBlocks = value || [];
    };
    exports.setPageBlocks = setPageBlocks;
    const getPageBlocks = () => {
        return exports.state.pageBlocks || [];
    };
    exports.getPageBlocks = getPageBlocks;
    const getDappContainer = () => {
        return (exports.state.pageBlocks || []).find(pageblock => pageblock.name === '@PageBlock/Dapp Container');
    };
    exports.getDappContainer = getDappContainer;
    const setRootDir = (value) => {
        exports.state.rootDir = value || '';
    };
    exports.setRootDir = setRootDir;
    const getRootDir = () => {
        return exports.state.rootDir;
    };
    exports.getRootDir = getRootDir;
});
///<amd-module name='@scom/scom-page-builder/utility/pathToRegexp.ts'/> 
/*---------------------------------------------------------------------------------------------
  *  Copyright (c) 2014 Blake Embrey (hello@blakeembrey.com)
  *  Licensed under the MIT License.
  *  https://github.com/pillarjs/path-to-regexp/blob/1cbb9f3d9c3bff97298ec45b1bb2b0beb879babf/LICENSE
  *--------------------------------------------------------------------------------------------*/
define("@scom/scom-page-builder/utility/pathToRegexp.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pathToRegexp = exports.tokensToRegexp = exports.regexpToFunction = exports.match = exports.tokensToFunction = exports.compile = exports.parse = void 0;
    /**
     * Tokenize input string.
     */
    function lexer(str) {
        const tokens = [];
        let i = 0;
        while (i < str.length) {
            const char = str[i];
            if (char === "*" || char === "+" || char === "?") {
                tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
                continue;
            }
            if (char === "\\") {
                tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
                continue;
            }
            if (char === "{") {
                tokens.push({ type: "OPEN", index: i, value: str[i++] });
                continue;
            }
            if (char === "}") {
                tokens.push({ type: "CLOSE", index: i, value: str[i++] });
                continue;
            }
            if (char === ":") {
                let name = "";
                let j = i + 1;
                while (j < str.length) {
                    const code = str.charCodeAt(j);
                    if (
                    // `0-9`
                    (code >= 48 && code <= 57) ||
                        // `A-Z`
                        (code >= 65 && code <= 90) ||
                        // `a-z`
                        (code >= 97 && code <= 122) ||
                        // `_`
                        code === 95) {
                        name += str[j++];
                        continue;
                    }
                    break;
                }
                if (!name)
                    throw new TypeError(`Missing parameter name at ${i}`);
                tokens.push({ type: "NAME", index: i, value: name });
                i = j;
                continue;
            }
            if (char === "(") {
                let count = 1;
                let pattern = "";
                let j = i + 1;
                if (str[j] === "?") {
                    throw new TypeError(`Pattern cannot start with "?" at ${j}`);
                }
                while (j < str.length) {
                    if (str[j] === "\\") {
                        pattern += str[j++] + str[j++];
                        continue;
                    }
                    if (str[j] === ")") {
                        count--;
                        if (count === 0) {
                            j++;
                            break;
                        }
                    }
                    else if (str[j] === "(") {
                        count++;
                        if (str[j + 1] !== "?") {
                            throw new TypeError(`Capturing groups are not allowed at ${j}`);
                        }
                    }
                    pattern += str[j++];
                }
                if (count)
                    throw new TypeError(`Unbalanced pattern at ${i}`);
                if (!pattern)
                    throw new TypeError(`Missing pattern at ${i}`);
                tokens.push({ type: "PATTERN", index: i, value: pattern });
                i = j;
                continue;
            }
            tokens.push({ type: "CHAR", index: i, value: str[i++] });
        }
        tokens.push({ type: "END", index: i, value: "" });
        return tokens;
    }
    /**
     * Parse a string for the raw tokens.
     */
    function parse(str, options = {}) {
        const tokens = lexer(str);
        const { prefixes = "./" } = options;
        const defaultPattern = `[^${escapeString(options.delimiter || "/#?")}]+?`;
        const result = [];
        let key = 0;
        let i = 0;
        let path = "";
        const tryConsume = (type) => {
            if (i < tokens.length && tokens[i].type === type)
                return tokens[i++].value;
        };
        const mustConsume = (type) => {
            const value = tryConsume(type);
            if (value !== undefined)
                return value;
            const { type: nextType, index } = tokens[i];
            throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
        };
        const consumeText = () => {
            let result = "";
            let value;
            while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
                result += value;
            }
            return result;
        };
        while (i < tokens.length) {
            const char = tryConsume("CHAR");
            const name = tryConsume("NAME");
            const pattern = tryConsume("PATTERN");
            if (name || pattern) {
                let prefix = char || "";
                if (prefixes.indexOf(prefix) === -1) {
                    path += prefix;
                    prefix = "";
                }
                if (path) {
                    result.push(path);
                    path = "";
                }
                result.push({
                    name: name || key++,
                    prefix,
                    suffix: "",
                    pattern: pattern || defaultPattern,
                    modifier: tryConsume("MODIFIER") || "",
                });
                continue;
            }
            const value = char || tryConsume("ESCAPED_CHAR");
            if (value) {
                path += value;
                continue;
            }
            if (path) {
                result.push(path);
                path = "";
            }
            const open = tryConsume("OPEN");
            if (open) {
                const prefix = consumeText();
                const name = tryConsume("NAME") || "";
                const pattern = tryConsume("PATTERN") || "";
                const suffix = consumeText();
                mustConsume("CLOSE");
                result.push({
                    name: name || (pattern ? key++ : ""),
                    pattern: name && !pattern ? defaultPattern : pattern,
                    prefix,
                    suffix,
                    modifier: tryConsume("MODIFIER") || "",
                });
                continue;
            }
            mustConsume("END");
        }
        return result;
    }
    exports.parse = parse;
    /**
     * Compile a string to a template function for the path.
     */
    function compile(str, options) {
        return tokensToFunction(parse(str, options), options);
    }
    exports.compile = compile;
    /**
     * Expose a method for transforming tokens into the path function.
     */
    function tokensToFunction(tokens, options = {}) {
        const reFlags = flags(options);
        const { encode = (x) => x, validate = true } = options;
        // Compile all the tokens into regexps.
        const matches = tokens.map((token) => {
            if (typeof token === "object") {
                return new RegExp(`^(?:${token.pattern})$`, reFlags);
            }
        });
        return (data) => {
            let path = "";
            for (let i = 0; i < tokens.length; i++) {
                const token = tokens[i];
                if (typeof token === "string") {
                    path += token;
                    continue;
                }
                const value = data ? data[token.name] : undefined;
                const optional = token.modifier === "?" || token.modifier === "*";
                const repeat = token.modifier === "*" || token.modifier === "+";
                if (Array.isArray(value)) {
                    if (!repeat) {
                        throw new TypeError(`Expected "${token.name}" to not repeat, but got an array`);
                    }
                    if (value.length === 0) {
                        if (optional)
                            continue;
                        throw new TypeError(`Expected "${token.name}" to not be empty`);
                    }
                    for (let j = 0; j < value.length; j++) {
                        const segment = encode(value[j], token);
                        if (validate && !matches[i].test(segment)) {
                            throw new TypeError(`Expected all "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                        }
                        path += token.prefix + segment + token.suffix;
                    }
                    continue;
                }
                if (typeof value === "string" || typeof value === "number") {
                    const segment = encode(String(value), token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError(`Expected "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                    }
                    path += token.prefix + segment + token.suffix;
                    continue;
                }
                if (optional)
                    continue;
                const typeOfMessage = repeat ? "an array" : "a string";
                throw new TypeError(`Expected "${token.name}" to be ${typeOfMessage}`);
            }
            return path;
        };
    }
    exports.tokensToFunction = tokensToFunction;
    /**
     * Create path match function from `path-to-regexp` spec.
     */
    function match(str, options) {
        const keys = [];
        const re = pathToRegexp(str, keys, options);
        return regexpToFunction(re, keys, options);
    }
    exports.match = match;
    /**
     * Create a path match function from `path-to-regexp` output.
     */
    function regexpToFunction(re, keys, options = {}) {
        const { decode = (x) => x } = options;
        return function (pathname) {
            const m = re.exec(pathname);
            if (!m)
                return false;
            const { 0: path, index } = m;
            const params = Object.create(null);
            for (let i = 1; i < m.length; i++) {
                if (m[i] === undefined)
                    continue;
                const key = keys[i - 1];
                if (key.modifier === "*" || key.modifier === "+") {
                    params[key.name] = m[i].split(key.prefix + key.suffix).map((value) => {
                        return decode(value, key);
                    });
                }
                else {
                    params[key.name] = decode(m[i], key);
                }
            }
            return { path, index, params };
        };
    }
    exports.regexpToFunction = regexpToFunction;
    /**
     * Escape a regular expression string.
     */
    function escapeString(str) {
        return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    /**
     * Get the flags for a regexp from the options.
     */
    function flags(options) {
        return options && options.sensitive ? "" : "i";
    }
    /**
     * Pull out keys from a regexp.
     */
    function regexpToRegexp(path, keys) {
        if (!keys)
            return path;
        const groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
        let index = 0;
        let execResult = groupsRegex.exec(path.source);
        while (execResult) {
            keys.push({
                // Use parenthesized substring match if available, index otherwise
                name: execResult[1] || index++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: "",
            });
            execResult = groupsRegex.exec(path.source);
        }
        return path;
    }
    /**
     * Transform an array into a regexp.
     */
    function arrayToRegexp(paths, keys, options) {
        const parts = paths.map((path) => pathToRegexp(path, keys, options).source);
        return new RegExp(`(?:${parts.join("|")})`, flags(options));
    }
    /**
     * Create a path regexp from string input.
     */
    function stringToRegexp(path, keys, options) {
        return tokensToRegexp(parse(path, options), keys, options);
    }
    /**
     * Expose a function for taking tokens and returning a RegExp.
     */
    function tokensToRegexp(tokens, keys, options = {}) {
        const { strict = false, start = true, end = true, encode = (x) => x, delimiter = "/#?", endsWith = "", } = options;
        const endsWithRe = `[${escapeString(endsWith)}]|$`;
        const delimiterRe = `[${escapeString(delimiter)}]`;
        let route = start ? "^" : "";
        // Iterate over the tokens and create our regexp string.
        for (const token of tokens) {
            if (typeof token === "string") {
                route += escapeString(encode(token));
            }
            else {
                const prefix = escapeString(encode(token.prefix));
                const suffix = escapeString(encode(token.suffix));
                if (token.pattern) {
                    if (keys)
                        keys.push(token);
                    if (prefix || suffix) {
                        if (token.modifier === "+" || token.modifier === "*") {
                            const mod = token.modifier === "*" ? "?" : "";
                            route += `(?:${prefix}((?:${token.pattern})(?:${suffix}${prefix}(?:${token.pattern}))*)${suffix})${mod}`;
                        }
                        else {
                            route += `(?:${prefix}(${token.pattern})${suffix})${token.modifier}`;
                        }
                    }
                    else {
                        if (token.modifier === "+" || token.modifier === "*") {
                            route += `((?:${token.pattern})${token.modifier})`;
                        }
                        else {
                            route += `(${token.pattern})${token.modifier}`;
                        }
                    }
                }
                else {
                    route += `(?:${prefix}${suffix})${token.modifier}`;
                }
            }
        }
        if (end) {
            if (!strict)
                route += `${delimiterRe}?`;
            route += !options.endsWith ? "$" : `(?=${endsWithRe})`;
        }
        else {
            const endToken = tokens[tokens.length - 1];
            const isEndDelimited = typeof endToken === "string"
                ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1
                : endToken === undefined;
            if (!strict) {
                route += `(?:${delimiterRe}(?=${endsWithRe}))?`;
            }
            if (!isEndDelimited) {
                route += `(?=${delimiterRe}|${endsWithRe})`;
            }
        }
        return new RegExp(route, flags(options));
    }
    exports.tokensToRegexp = tokensToRegexp;
    /**
     * Normalize the given path string, returning a regular expression.
     *
     * An empty array can be passed in for the keys, which will hold the
     * placeholder key descriptions. For example, using `/user/:id`, `keys` will
     * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
     */
    function pathToRegexp(path, keys, options) {
        if (path instanceof RegExp)
            return regexpToRegexp(path, keys);
        if (Array.isArray(path))
            return arrayToRegexp(path, keys, options);
        return stringToRegexp(path, keys, options);
    }
    exports.pathToRegexp = pathToRegexp;
});
define("@scom/scom-page-builder/utility/command/interface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MAX_COLUMN = void 0;
    exports.MAX_COLUMN = 12;
});
define("@scom/scom-page-builder/utility/command/add.ts", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/const/index.ts", "@scom/scom-page-builder/store/index.ts"], function (require, exports, components_2, index_1, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ElementCommand = void 0;
    class ElementCommand {
        constructor(element, parent, data, isDeleted) {
            this.isDeleted = false;
            this.element = element;
            this.data = JSON.parse(JSON.stringify(data));
            this.rowId = this.element.rowId;
            this.parent = parent || document.body;
            this.isDeleted = typeof isDeleted === 'boolean' ? isDeleted : false;
        }
        execute() {
            this.element.parent = this.parent;
            if (this.isDeleted) {
                this.parent.removeChild(this.element);
                index_2.pageObject.removeRow(this.rowId);
                components_2.application.EventBus.dispatch(index_1.EVENT.ON_UPDATE_SECTIONS);
            }
            else {
                this.parent.appendChild(this.element);
                index_2.pageObject.addRow(this.data, this.rowId);
            }
        }
        undo() {
            if (this.isDeleted) {
                this.parent.appendChild(this.element);
                const sibling = this.parent.children[this.data.row];
                if (sibling)
                    this.parent.insertBefore(this.element, sibling);
                index_2.pageObject.addRow(this.data, this.rowId);
                components_2.application.EventBus.dispatch(index_1.EVENT.ON_UPDATE_SECTIONS);
            }
            else {
                this.element.remove();
                this.data && index_2.pageObject.removeRow(this.rowId);
            }
        }
        redo() { }
    }
    exports.ElementCommand = ElementCommand;
});
define("@scom/scom-page-builder/utility/command/history.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.commandHistory = exports.CommandHistory = void 0;
    class CommandHistory {
        constructor() {
            this.commands = [];
            this.currentCommandIndex = -1;
        }
        execute(command) {
            this.commands = this.commands.slice(0, this.currentCommandIndex + 1);
            this.commands.push(command);
            this.currentCommandIndex++;
            command.execute();
        }
        undo() {
            if (this.currentCommandIndex >= 0) {
                const command = this.commands[this.currentCommandIndex];
                console.log('undo', command);
                command.undo();
                this.currentCommandIndex--;
            }
        }
        redo() {
            if (this.currentCommandIndex < this.commands.length - 1) {
                this.currentCommandIndex++;
                const command = this.commands[this.currentCommandIndex];
                command.execute();
            }
        }
    }
    exports.CommandHistory = CommandHistory;
    exports.commandHistory = new CommandHistory();
});
define("@scom/scom-page-builder/utility/command/move.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MoveElementCommand = void 0;
    class MoveElementCommand {
        constructor(element, dropElm, parent, data) {
            this.dragIndex = 0;
            this.dropIndex = 0;
            this.element = element;
            this.dropElm = dropElm;
            this.parent = parent;
            this.dataList = data || [];
        }
        execute() {
            if (!this.parent.contains(this.element))
                return;
            const rows = this.parent.querySelectorAll('.dropzone') || [];
            for (let i = 0; i < rows.length; i++) {
                if (this.element.isEqualNode(rows[i])) {
                    this.dragIndex = i;
                }
                if (this.dropElm.isEqualNode(rows[i])) {
                    this.dropIndex = i;
                }
            }
            if (this.dataList.length) {
                const [dragRowData] = this.dataList.splice(this.dragIndex, 1);
                this.dataList.splice(this.dropIndex, 0, dragRowData);
            }
            if (this.dragIndex < this.dropIndex) {
                this.parent.insertBefore(this.element, this.dropElm.nextSibling);
            }
            else {
                this.parent.insertBefore(this.element, this.dropElm);
            }
            let templateColumns = [];
            const length = this.parent.children.length;
            const unitWidth = Number(this.parent.offsetWidth) / 12;
            for (let i = 0; i < length; i++) {
                templateColumns.push(i === this.dropIndex ? 'minmax(auto, 100%)' : `${unitWidth}px`);
            }
            this.parent.templateColumns = templateColumns;
        }
        undo() {
            if (!this.parent.contains(this.element))
                return;
            if (this.dataList.length) {
                const [dragRowData] = this.dataList.splice(this.dropIndex, 1);
                this.dataList.splice(this.dragIndex, 0, dragRowData);
            }
            const rows = this.parent.querySelectorAll('.dropzone') || [];
            for (let i = 0; i < rows.length; i++) {
                if (i === this.dragIndex) {
                    const temp = rows[i];
                    this.parent.replaceChild(this.element, rows[i]);
                    this.parent.appendChild(temp);
                }
            }
            let templateColumns = [];
            const length = this.parent.children.length;
            const unitWidth = Number(this.parent.offsetWidth) / 12;
            for (let i = 0; i < length; i++) {
                templateColumns.push(i === this.dragIndex ? 'minmax(auto, 100%)' : `${unitWidth}px`);
            }
            this.parent.templateColumns = templateColumns;
        }
        redo() { }
    }
    exports.MoveElementCommand = MoveElementCommand;
});
define("@scom/scom-page-builder/utility/command/resize.ts", ["require", "exports", "@scom/scom-page-builder/store/index.ts", "@scom/scom-page-builder/utility/command/interface.ts"], function (require, exports, index_3, interface_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ResizeElementCommand = void 0;
    class ResizeElementCommand {
        constructor(element, initialWidth, initialHeight, finalWidth, finalHeight) {
            this.gapWidth = 15;
            this.gridColumnWidth = 0;
            this.element = element;
            this.toolbar = element.querySelector('ide-toolbar');
            this.finalWidth = finalWidth;
            this.finalHeight = finalHeight;
            this.finalLeft = Number(this.element.left);
            this.initialWidth = initialWidth;
            this.initialHeight = initialHeight;
            this.oldDataColumn = {
                column: Number(element.dataset.column),
                columnSpan: Number(element.dataset.columnSpan)
            };
            const grid = this.element.closest('.grid');
            if (grid)
                this.gridColumnWidth = (grid.offsetWidth - this.gapWidth * (interface_1.MAX_COLUMN - 1)) / interface_1.MAX_COLUMN;
        }
        getColumnData() {
            const grid = this.element.closest('.grid');
            let currentSpan = 0;
            if (!grid)
                return null;
            const sections = Array.from(grid.querySelectorAll('ide-section'));
            let prevElm = null;
            let afterElm = null;
            currentSpan = sections.reduce((result, el) => {
                if (!el.contains(this.element)) {
                    const columnSpan = Number(el.dataset.columnSpan);
                    result += (columnSpan);
                    const column = Number(el.dataset.column);
                    if (this.oldDataColumn.column > column)
                        prevElm = el;
                    if (this.oldDataColumn.column < column)
                        afterElm = el;
                }
                return result;
            }, 0);
            const numberOfColumns = Math.ceil((this.finalWidth + this.gapWidth) / (this.gridColumnWidth + this.gapWidth));
            const finalColumnSpan = Math.max(Math.min(numberOfColumns, interface_1.MAX_COLUMN - currentSpan), 1);
            const column = Math.ceil((this.finalLeft + this.gapWidth) / (this.gridColumnWidth + this.gapWidth));
            let finalColumn = Math.max(Math.min(column, (interface_1.MAX_COLUMN - finalColumnSpan) + 1), 1);
            if (prevElm) {
                const prevColumn = Number(prevElm.dataset.column);
                const prevColumnSpan = Number(prevElm.dataset.columnSpan);
                if (finalColumn < prevColumn + prevColumnSpan)
                    finalColumn = prevColumn + prevColumnSpan;
            }
            if (afterElm) {
                const afterColumn = Number(afterElm.dataset.column);
                if (finalColumn >= afterColumn)
                    finalColumn = afterColumn - finalColumnSpan;
            }
            return { column: finalColumn, columnSpan: finalColumnSpan };
        }
        execute() {
            var _a, _b;
            const newColumnData = this.getColumnData();
            if (newColumnData) {
                this.element.setAttribute('data-column-span', `${newColumnData.columnSpan}`);
                this.element.setAttribute('data-column', `${newColumnData.column}`);
                this.element.style.gridColumn = `${newColumnData.column} / span ${newColumnData.columnSpan}`;
            }
            if (this.toolbar) {
                const rowId = this.toolbar.rowId;
                const elementId = this.toolbar.elementId;
                const currentTag = ((_b = (_a = this.toolbar) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.tag) || {};
                const tag = Object.assign(Object.assign({}, currentTag), { width: '100%', height: this.finalHeight || this.initialHeight });
                this.toolbar.setTag(tag);
                if (newColumnData.column !== this.oldDataColumn.column || newColumnData.columnSpan !== this.oldDataColumn.columnSpan)
                    index_3.pageObject.setElement(rowId, elementId, Object.assign({ tag }, newColumnData));
            }
        }
        undo() {
            var _a, _b;
            this.element.style.gridColumn = `${this.oldDataColumn.column} / span ${this.oldDataColumn.columnSpan}`;
            this.element.setAttribute('data-column', `${this.oldDataColumn.column}`);
            this.element.setAttribute('data-column-span', `${this.oldDataColumn.columnSpan}`);
            if (this.toolbar) {
                const rowId = this.toolbar.rowId;
                const elementId = this.toolbar.elementId;
                const currentTag = ((_b = (_a = this.toolbar) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.tag) || {};
                const tag = Object.assign(Object.assign({}, currentTag), { width: this.initialWidth, height: this.initialHeight });
                this.toolbar.setTag(tag);
                index_3.pageObject.setElement(rowId, elementId, Object.assign({ tag }, this.oldDataColumn));
            }
        }
        redo() { }
    }
    exports.ResizeElementCommand = ResizeElementCommand;
});
define("@scom/scom-page-builder/utility/command/drag.ts", ["require", "exports", "@scom/scom-page-builder/utility/command/interface.ts", "@scom/scom-page-builder/store/index.ts"], function (require, exports, interface_2, index_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DragElementCommand = void 0;
    class DragElementCommand {
        constructor(element, dropElm) {
            this.element = element;
            this.dropElm = dropElm;
            this.oldDataColumn = {
                column: Number(element.dataset.column),
                columnSpan: Number(element.dataset.columnSpan)
            };
            const pageRow = element.closest('ide-row');
            this.oldDataRow = ((pageRow === null || pageRow === void 0 ? void 0 : pageRow.id) || '').replace('row-', '');
            this.data = JSON.parse(JSON.stringify(element.data));
        }
        getColumnData() {
            const grid = this.dropElm.closest('.grid');
            const sections = Array.from(grid === null || grid === void 0 ? void 0 : grid.querySelectorAll('ide-section'));
            const column = Number(this.dropElm.getAttribute('data-column'));
            if (!isNaN(column)) {
                let columnSpan = Number(this.element.dataset.columnSpan);
                const maxColumn = (interface_2.MAX_COLUMN - columnSpan) + 1;
                let newColumn = (columnSpan > 1 && column > maxColumn) ? maxColumn : column;
                let newColumnSpan = columnSpan;
                let prevDropElm = null;
                let afterDropElm = null;
                let currentSpan = 0;
                const dropColumn = Number(this.dropElm.dataset.column);
                currentSpan = sections.reduce((result, el) => {
                    if (!el.contains(this.element)) {
                        const colSpan = Number(el.dataset.columnSpan);
                        result += (colSpan);
                        const column = Number(el.dataset.column);
                        if (dropColumn > column)
                            prevDropElm = el;
                        if (dropColumn < column)
                            afterDropElm = el;
                    }
                    return result;
                }, 0);
                if (prevDropElm) {
                    const prevColumn = Number(prevDropElm.dataset.column);
                    const prevColumnSpan = Number(prevDropElm.dataset.columnSpan);
                    if (newColumn < prevColumn + prevColumnSpan) {
                        const data = prevColumn + prevColumnSpan;
                        if (data < 13)
                            newColumn = prevColumn + prevColumnSpan;
                    }
                }
                if (afterDropElm) {
                    const afterColumn = Number(afterDropElm.dataset.column);
                    if (newColumn + columnSpan > afterColumn)
                        newColumnSpan = afterColumn - newColumn;
                }
                const finalColumnSpan = Math.max(Math.min(newColumnSpan, interface_2.MAX_COLUMN - currentSpan), 1);
                return { column: newColumn, columnSpan: finalColumnSpan };
            }
            else {
                const dropSection = this.dropElm.closest('ide-section');
                if (dropSection) {
                    const dropColumn = Number(dropSection.dataset.column);
                    const dropColumnSpan = Number(dropSection.dataset.columnSpan);
                    const columnSpan = Number(this.element.dataset.columnSpan);
                    const pageRow = this.dropElm.closest('ide-row');
                    const pageRowId = ((pageRow === null || pageRow === void 0 ? void 0 : pageRow.id) || '').replace('row-', '');
                    const nxtDrop = sections.find((el) => {
                        const column = Number(el.dataset.column);
                        return !isNaN(column) && (dropColumn + dropColumnSpan === column);
                    });
                    if (nxtDrop && pageRow.contains(this.element)) {
                        const nxtDropColumn = Number(nxtDrop.dataset.column);
                        const nxtDropColumnSpan = Number(nxtDrop.dataset.columnSpan);
                        const newDropColumn = nxtDropColumn + columnSpan;
                        index_4.pageObject.setElement(pageRowId, nxtDrop.id, { column: newDropColumn, columnSpan });
                        nxtDrop.setAttribute('data-column', `${newDropColumn}`);
                        nxtDrop.style.gridColumn = `${newDropColumn} / span ${nxtDropColumnSpan}`;
                        return { column: nxtDropColumn, columnSpan };
                    }
                    const newSpan = dropColumnSpan - columnSpan;
                    // Update drop column span
                    const newDropColSpan = newSpan === 0 ? Math.ceil(dropColumnSpan / 2) : newSpan;
                    const newColSpan = newSpan === 0 ? dropColumnSpan - newDropColSpan : columnSpan;
                    index_4.pageObject.setElement(pageRowId, dropSection.id, { column: dropColumn, columnSpan: newDropColSpan });
                    dropSection.setAttribute('data-column-span', `${newDropColSpan}`);
                    dropSection.style.gridColumn = `${dropColumn} / span ${newDropColSpan}`;
                    return { column: dropColumn + newDropColSpan, columnSpan: newColSpan };
                }
            }
            return null;
        }
        execute() {
            var _a;
            this.dropElm.style.border = "";
            const grid = this.dropElm.closest('.grid');
            if (!grid)
                return;
            const newColumnData = this.getColumnData();
            if (newColumnData) {
                this.element.style.gridRow = '1';
                this.element.style.gridColumn = `${newColumnData.column} / span ${newColumnData.columnSpan}`;
                this.element.setAttribute('data-column', `${newColumnData.column}`);
                this.element.setAttribute('data-column-span', `${newColumnData.columnSpan}`);
            }
            const elementRow = this.element.closest('ide-row');
            const dropRow = this.dropElm.closest('ide-row');
            const dropRowId = ((dropRow === null || dropRow === void 0 ? void 0 : dropRow.id) || '').replace('row-', '');
            const elementRowId = ((elementRow === null || elementRow === void 0 ? void 0 : elementRow.id) || '').replace('row-', '');
            index_4.pageObject.setElement(elementRowId, this.element.id, Object.assign({}, newColumnData));
            if (!elementRow.isEqualNode(dropRow)) {
                index_4.pageObject.addElement(dropRowId, Object.assign(Object.assign({}, this.data), newColumnData));
                index_4.pageObject.removeElement(elementRowId, this.element.id);
                grid.appendChild(this.element);
                const toolbar = this.element.querySelector('ide-toolbar');
                if (toolbar)
                    toolbar.rowId = dropRowId;
            }
            const elementSection = index_4.pageObject.getRow(elementRowId);
            elementRow.visible = !!((_a = elementSection === null || elementSection === void 0 ? void 0 : elementSection.elements) === null || _a === void 0 ? void 0 : _a.length);
        }
        undo() {
            var _a;
            this.element.style.gridRow = '1';
            this.element.style.gridColumn = `${this.oldDataColumn.column} / span ${this.oldDataColumn.columnSpan}`;
            this.element.setAttribute('data-column', `${this.oldDataColumn.column}`);
            this.element.setAttribute('data-column-span', `${this.oldDataColumn.columnSpan}`);
            const elementRow = this.element.closest('ide-row');
            const elementRowId = ((elementRow === null || elementRow === void 0 ? void 0 : elementRow.id) || '').replace('row-', '');
            index_4.pageObject.setElement(elementRowId, this.element.id, Object.assign({}, this.oldDataColumn));
            if (!this.oldDataRow)
                return;
            const oldElementRow = document.querySelector(`#row-${this.oldDataRow}`);
            if (oldElementRow && !elementRow.isEqualNode(oldElementRow)) {
                index_4.pageObject.addElement(this.oldDataRow, Object.assign(Object.assign({}, this.data), this.oldDataColumn));
                index_4.pageObject.removeElement(elementRowId, this.element.id);
                const oldGrid = oldElementRow.querySelector('.grid');
                if (oldGrid) {
                    oldGrid.appendChild(this.element);
                    const toolbar = this.element.querySelector('ide-toolbar');
                    if (toolbar)
                        toolbar.rowId = this.oldDataRow;
                }
            }
            const oldElementSection = index_4.pageObject.getRow(this.oldDataRow);
            oldElementRow && (oldElementRow.visible = !!((_a = oldElementSection === null || oldElementSection === void 0 ? void 0 : oldElementSection.elements) === null || _a === void 0 ? void 0 : _a.length));
        }
        redo() { }
    }
    exports.DragElementCommand = DragElementCommand;
});
define("@scom/scom-page-builder/utility/command/removeToolbar.ts", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/const/index.ts", "@scom/scom-page-builder/store/index.ts"], function (require, exports, components_3, index_5, index_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveToolbarCommand = void 0;
    class RemoveToolbarCommand {
        constructor(element) {
            this.element = element;
            this.data = JSON.parse(JSON.stringify(element.data));
            this.rowId = this.element.rowId;
            this.elementId = this.element.elementId;
            this.pageRow = this.element.closest('ide-row');
        }
        execute() {
            var _a;
            index_6.pageObject.removeElement(this.rowId, this.elementId);
            const ideSection = this.element.closest('ide-section');
            if (ideSection)
                ideSection.remove();
            const section = index_6.pageObject.getRow(this.rowId);
            if (this.pageRow) {
                this.pageRow.visible = !!((_a = section === null || section === void 0 ? void 0 : section.elements) === null || _a === void 0 ? void 0 : _a.length);
            }
            components_3.application.EventBus.dispatch(index_5.EVENT.ON_UPDATE_SECTIONS);
        }
        undo() {
            index_6.pageObject.addElement(this.rowId, this.data);
            const section = index_6.pageObject.getRow(this.rowId);
            const clonedSection = JSON.parse(JSON.stringify(section));
            if (this.pageRow) {
                this.pageRow.setData(Object.assign(Object.assign({}, clonedSection), { id: this.rowId }));
                this.pageRow.visible = true;
            }
            components_3.application.EventBus.dispatch(index_5.EVENT.ON_UPDATE_SECTIONS);
        }
        redo() { }
    }
    exports.RemoveToolbarCommand = RemoveToolbarCommand;
});
define("@scom/scom-page-builder/utility/command/index.ts", ["require", "exports", "@scom/scom-page-builder/utility/command/add.ts", "@scom/scom-page-builder/utility/command/history.ts", "@scom/scom-page-builder/utility/command/move.ts", "@scom/scom-page-builder/utility/command/resize.ts", "@scom/scom-page-builder/utility/command/drag.ts", "@scom/scom-page-builder/utility/command/removeToolbar.ts", "@scom/scom-page-builder/utility/command/interface.ts"], function (require, exports, add_1, history_1, move_1, resize_1, drag_1, removeToolbar_1, interface_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MAX_COLUMN = exports.RemoveToolbarCommand = exports.DragElementCommand = exports.ResizeElementCommand = exports.MoveElementCommand = exports.commandHistory = exports.CommandHistory = exports.ElementCommand = void 0;
    Object.defineProperty(exports, "ElementCommand", { enumerable: true, get: function () { return add_1.ElementCommand; } });
    Object.defineProperty(exports, "CommandHistory", { enumerable: true, get: function () { return history_1.CommandHistory; } });
    Object.defineProperty(exports, "commandHistory", { enumerable: true, get: function () { return history_1.commandHistory; } });
    Object.defineProperty(exports, "MoveElementCommand", { enumerable: true, get: function () { return move_1.MoveElementCommand; } });
    Object.defineProperty(exports, "ResizeElementCommand", { enumerable: true, get: function () { return resize_1.ResizeElementCommand; } });
    Object.defineProperty(exports, "DragElementCommand", { enumerable: true, get: function () { return drag_1.DragElementCommand; } });
    Object.defineProperty(exports, "RemoveToolbarCommand", { enumerable: true, get: function () { return removeToolbar_1.RemoveToolbarCommand; } });
    Object.defineProperty(exports, "MAX_COLUMN", { enumerable: true, get: function () { return interface_3.MAX_COLUMN; } });
});
define("@scom/scom-page-builder/utility/index.ts", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@scom/scom-page-builder/store/index.ts", "@scom/scom-page-builder/const/index.ts", "@scom/scom-page-builder/utility/pathToRegexp.ts", "@scom/scom-page-builder/utility/command/index.ts"], function (require, exports, components_4, eth_wallet_1, index_7, index_8, pathToRegexp_1, index_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getModule = exports.isEmpty = exports.generateUUID = exports.updatePagePath = exports.getPagePath = exports.getCID = exports.isCID = exports.formatNumberWithSeparators = exports.formatNumber = exports.compile = exports.match = exports.fetchFromIPFS = exports.uploadToIPFS = exports.assignAttr = void 0;
    Object.defineProperty(exports, "match", { enumerable: true, get: function () { return pathToRegexp_1.match; } });
    Object.defineProperty(exports, "compile", { enumerable: true, get: function () { return pathToRegexp_1.compile; } });
    const assignAttr = (module) => {
        const attrs = module.attrs;
        for (let attr in attrs) {
            if (attr === 'id' || typeof attrs[attr] === 'function')
                continue;
            module[attr] = module.getAttribute(attr, true);
        }
    };
    exports.assignAttr = assignAttr;
    const uploadToIPFS = (data) => {
        return new Promise(async (resolve, reject) => {
            const response = await fetch(index_8.IPFS_UPLOAD_END_POINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data,
                    fileName: `${+new Date().toString()}.json`
                })
            });
            let result = await response.json();
            if (result.success) {
                resolve(result.data.cid);
            }
            else
                reject();
        });
    };
    exports.uploadToIPFS = uploadToIPFS;
    const fetchFromIPFS = (cid) => {
        return new Promise(async (resolve, reject) => {
            let response;
            try {
                response = await fetch(index_8.IPFS_GATEWAY_IJS + cid);
            }
            catch (err) {
                response = await fetch(index_8.IPFS_GATEWAY + cid);
            }
            resolve(response);
        });
    };
    exports.fetchFromIPFS = fetchFromIPFS;
    const formatNumber = (value, decimals) => {
        let val = value;
        const minValue = '0.0000001';
        if (typeof value === 'string') {
            val = new eth_wallet_1.BigNumber(value).toNumber();
        }
        else if (typeof value === 'object') {
            val = value.toNumber();
        }
        if (val != 0 && new eth_wallet_1.BigNumber(val).lt(minValue)) {
            return `<${minValue}`;
        }
        return formatNumberWithSeparators(val, decimals || 4);
    };
    exports.formatNumber = formatNumber;
    const formatNumberWithSeparators = (value, precision) => {
        if (!value)
            value = 0;
        if (precision) {
            let outputStr = '';
            if (value >= 1) {
                outputStr = value.toLocaleString('en-US', { maximumFractionDigits: precision });
            }
            else {
                outputStr = value.toLocaleString('en-US', { maximumSignificantDigits: precision });
            }
            if (outputStr.length > 18) {
                outputStr = outputStr.substr(0, 18) + '...';
            }
            return outputStr;
            // let parts = parseFloat(value.toPrecision(precision)).toString().split(".");
            // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // return parts.join(".");
        }
        else {
            return value.toLocaleString('en-US');
            // let parts = value.toString().split(".");
            // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // return parts.join(".");
        }
    };
    exports.formatNumberWithSeparators = formatNumberWithSeparators;
    const isCID = (cid) => {
        const regex = new RegExp('^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})$');
        return regex.test(cid);
    };
    exports.isCID = isCID;
    const getCID = () => {
        if (!location.hash)
            return '';
        const segments = location.hash.split('/');
        for (const segment of segments) {
            if (isCID(segment)) {
                return segment;
            }
        }
        return '';
    };
    exports.getCID = getCID;
    const getPagePath = (path) => {
        let p = path;
        if (!p)
            p = location.hash;
        if (!p)
            return '';
        const segments = p.split('/');
        let firstEditAppeared = false;
        let paths = [];
        for (const segment of segments) {
            if (segment === '#')
                continue;
            if (!firstEditAppeared && segment === 'edit') {
                firstEditAppeared = true;
                continue;
            }
            if (isCID(segment)) {
                paths = [];
                continue;
            }
            paths.push(segment);
        }
        return paths.join('/');
    };
    exports.getPagePath = getPagePath;
    const updatePagePath = (pagePath) => {
        if (!pagePath || !location.hash)
            return;
        const cid = getCID();
        const isEdit = location.hash.indexOf('#/edit') >= 0;
        location.hash = `#/${isEdit ? 'edit/' : ''}${cid ? `${cid}/` : ''}${pagePath}`;
    };
    exports.updatePagePath = updatePagePath;
    const generateUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    exports.generateUUID = generateUUID;
    const isEmpty = (value) => {
        if (value === null || value === undefined || value === false || (typeof value === 'string' && !value))
            return true;
        if (value && typeof value === 'object')
            return Object.keys(value).length === 0;
        return false;
    };
    exports.isEmpty = isEmpty;
    const getSCConfigByCid = async (cid) => {
        let scConfig;
        let result = await fetchFromIPFS(cid);
        let codeInfoFileContent = await result.json();
        let ipfsCid = codeInfoFileContent.codeCID;
        if (ipfsCid) {
            try {
                let scConfigRes = await fetchFromIPFS(`${ipfsCid}/dist/scconfig.json`);
                scConfig = await scConfigRes.json();
            }
            catch (err) { }
        }
        return scConfig;
    };
    const getModule = async (options) => {
        let module;
        if (options.localPath) {
            const rootDir = index_7.getRootDir();
            const localRootPath = rootDir ? `${rootDir}/${options.localPath}` : options.localPath;
            const scconfigRes = await fetch(`${localRootPath}/scconfig.json`);
            const scconfig = await scconfigRes.json();
            scconfig.rootDir = localRootPath;
            module = await components_4.application.newModule(scconfig.main, scconfig);
        }
        else {
            const scconfig = await getSCConfigByCid(options.ipfscid);
            const main = scconfig.main;
            const response = await fetchFromIPFS(options.ipfscid);
            const result = await response.json();
            const codeCID = result.codeCID;
            if (main.startsWith("@")) {
                scconfig.rootDir = `${index_8.IPFS_GATEWAY_IJS}${codeCID}/dist`;
                module = await components_4.application.newModule(main, scconfig);
            }
            else {
                const mainScriptPath = `${index_8.IPFS_GATEWAY_IJS}${main.replace('{root}', codeCID + '/dist')}`;
                const dependencies = scconfig.dependencies;
                for (let key in dependencies) {
                    dependencies[key] = dependencies[key].replace('{root}', `${index_8.IPFS_GATEWAY_IJS}${codeCID}/dist`);
                }
                module = await components_4.application.newModule(mainScriptPath, { dependencies });
            }
        }
        return module;
    };
    exports.getModule = getModule;
    __exportStar(index_9, exports);
});
define("@scom/scom-page-builder/interface/core.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
    ;
    ;
});
define("@scom/scom-page-builder/interface/pageBlock.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-page-builder/interface/component.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-page-builder/interface/siteData.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeaderType = void 0;
    var HeaderType;
    (function (HeaderType) {
        HeaderType["COVER"] = "cover";
        HeaderType["LARGE"] = "largeBanner";
        HeaderType["NORMAL"] = "banner";
        HeaderType["TITLE"] = "titleOnly";
    })(HeaderType = exports.HeaderType || (exports.HeaderType = {}));
    ;
});
define("@scom/scom-page-builder/interface/jsonSchema.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-page-builder/interface/index.ts", ["require", "exports", "@scom/scom-page-builder/interface/pageBlock.ts", "@scom/scom-page-builder/interface/component.ts", "@scom/scom-page-builder/interface/siteData.ts", "@scom/scom-page-builder/interface/jsonSchema.ts"], function (require, exports, pageBlock_1, component_1, siteData_1, jsonSchema_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ELEMENT_NAME = void 0;
    __exportStar(pageBlock_1, exports);
    __exportStar(component_1, exports);
    __exportStar(siteData_1, exports);
    __exportStar(jsonSchema_1, exports);
    var ELEMENT_NAME;
    (function (ELEMENT_NAME) {
        ELEMENT_NAME["TEXTBOX"] = "Text box";
        ELEMENT_NAME["IMAGE"] = "Image";
        ELEMENT_NAME["NFT"] = "NFT Minter Dapp";
        ELEMENT_NAME["GEM_TOKEN"] = "Gem Token Dapp";
        ELEMENT_NAME["RANDOMIZER"] = "Randomizer";
    })(ELEMENT_NAME = exports.ELEMENT_NAME || (exports.ELEMENT_NAME = {}));
});
define("@scom/scom-page-builder/page/pageHeader.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_5.Styles.Theme.ThemeVars;
    components_5.Styles.cssRule('.ide-header', {
        $nest: {}
    });
});
define("@scom/scom-page-builder/page/pageHeader.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/page/pageHeader.css.ts"], function (require, exports, components_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageHeader = void 0;
    const Theme = components_6.Styles.Theme.ThemeVars;
    let PageHeader = class PageHeader extends components_6.Module {
        constructor(parent) {
            super(parent);
            this.iconList = [];
            this.initEventBus();
        }
        initEventBus() { }
        set logo(data) {
            this._logo = data;
            this.imgLogo.url = data;
        }
        get logo() {
            return this._logo;
        }
        hideLogo(hide) {
            this.imgLogo.visible = !hide;
        }
        renderIconList() {
            this.toolbars.clearInnerHTML();
            this.iconList.forEach((icon) => {
                this.toolbars.appendChild(this.$render("i-button", { padding: { left: '12px', right: '12px', top: '12px', bottom: '12px' }, width: 48, height: 48, border: { radius: '50%' }, caption: `<i-icon name="${icon.name}" width=${20} height=${20} fill="${Theme.text.primary}"></i-icon>`, background: { color: 'transparent' }, tooltip: icon.tooltip, class: "toolbar", onClick: icon.onClick }));
            });
        }
        renderDropdown() {
            // this.publishDropdown.clearInnerHTML();
            // const modalElm = (
            //   <i-modal
            //     maxWidth='200px'
            //     minWidth='200px'
            //     showBackdrop={false}
            //     height='auto'
            //     popupPlacement='bottomRight'
            //   >
            //     <i-vstack gap="0.5rem">
            //       <i-button
            //         caption="Publish settings"
            //         width='100%'
            //         height='auto'
            //         background={{color: 'transparent'}}
            //         border={{width: '0px'}}
            //         padding={{ top: '0.5rem', bottom: '0.5rem', left: '0.75rem', right: '0.75rem' }}
            //       ></i-button>
            //     </i-vstack>
            //   </i-modal>
            // )
            // this.publishDropdown.append(
            //   <i-button
            //     caption="Publish"
            //     padding={{ top: 10, bottom: 10, left: '1rem', right: '1rem' }}
            //     background={{color: Theme.colors.primary.main}}
            //     font={{color: Theme.colors.primary.contrastText, weight: 600}}
            //     rightIcon={{name: 'caret-down', width: 14, height: 14, fill: Theme.colors.primary.contrastText}}
            //     onClick={() => modalElm.visible = !modalElm.visible}
            //   ></i-button>,
            //   modalElm
            // )
        }
        async init() {
            super.init();
            this.iconList = [
            // {
            //   name: 'undo',
            //   tooltip: {content: 'Undo last action', placement: 'bottom'},
            //   onClick: () => commandHistory.undo()
            // },
            // {
            //   name: 'redo',
            //   tooltip: {content: 'Redo last action', placement: 'bottom'},
            //   onClick: () => commandHistory.redo()
            // },
            // {
            //   name: 'tablet',
            //   tooltip: {content: 'Preview', placement: 'bottom'},
            //   onClick: () => {}
            // },
            // {
            //   name: 'link',
            //   tooltip: {content: 'Can`t copy link for unpublish site', placement: 'bottom'},
            //   onClick: () => {}
            // },
            // {
            //   name: 'user-plus',
            //   tooltip: {content: 'Share with others', placement: 'bottom'},
            //   onClick: () => {}
            // },
            // {
            //   name: 'cog',
            //   tooltip: {content: 'Settings', placement: 'bottom'},
            //   onClick: () => {}
            // },
            // {
            //   name: 'ellipsis-v',
            //   tooltip: {content: 'More', placement: 'bottom'},
            //   onClick: () => {}
            // }
            ];
            this.renderIconList();
            this.renderDropdown();
        }
        render() {
            return (this.$render("i-hstack", { height: 64, justifyContent: 'space-between', verticalAlignment: "center", alignItems: 'center', padding: { left: 10, right: 10 }, class: 'ide-header' },
                this.$render("i-panel", { width: 200 },
                    this.$render("i-image", { id: 'imgLogo', height: 40, width: 'auto' })),
                this.$render("i-hstack", { class: "page-menu-bar", gap: "1rem", verticalAlignment: "center" },
                    this.$render("i-hstack", { id: "toolbars", gap: "1rem", verticalAlignment: "center" }))));
        }
    };
    PageHeader = __decorate([
        components_6.customElements('ide-header')
    ], PageHeader);
    exports.PageHeader = PageHeader;
});
define("@scom/scom-page-builder/page/pageSection.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_7.Styles.Theme.ThemeVars;
    components_7.Styles.cssRule('ide-section', {
        display: 'block',
        position: 'relative',
        maxWidth: '100%',
        border: '2px solid transparent',
        $nest: {
            '&.active, &:focus': {
                border: `2px solid ${Theme.colors.primary.main}`,
                transition: 'border ease-in .2s'
            },
            'h1, h2, h3, h4, h5, h6': {
                margin: 0
            },
            textarea: {
                resize: 'none'
            }
        }
    });
});
define("@scom/scom-page-builder/dialogs/confirmDialog.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/utility/index.ts"], function (require, exports, components_8, index_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfirmDialog = void 0;
    ;
    let ConfirmDialog = class ConfirmDialog extends components_8.Module {
        constructor(parent, options) {
            super(parent, options);
        }
        async init() {
            super.init();
            index_10.assignAttr(this);
            if (this.message)
                this.lbMessage.caption = this.message;
            if (this.cancelButtonText)
                this.btnCancel.caption = this.cancelButtonText;
            if (this.confirmButtonText)
                this.btnConfirm.caption = this.confirmButtonText;
        }
        async confirm() {
            if (this.onConfirm)
                await this.onConfirm();
            this.dialog.visible = false;
        }
        async cancel() {
            if (this.onCancel)
                await this.onCancel();
            this.dialog.visible = false;
        }
        show() {
            this.dialog.visible = true;
        }
        hide() {
            this.dialog.visible = false;
        }
        render() {
            return (this.$render("i-modal", { id: "dialog", showBackdrop: true, maxWidth: "400px", popupPlacement: "center" },
                this.$render("i-panel", { padding: { top: 20, bottom: 20, left: 20, right: 20 } },
                    this.$render("i-label", { id: "lbMessage", caption: "Confirm?" })),
                this.$render("i-hstack", { justifyContent: "end", alignItems: "center", padding: { top: 5, bottom: 5 } },
                    this.$render("i-button", { id: "btnCancel", caption: "No", onClick: this.cancel, background: { color: components_8.Styles.Theme.ThemeVars.colors.success.main } }),
                    this.$render("i-button", { id: "btnConfirm", caption: "Yes", onClick: this.confirm, margin: { left: 5 } }))));
        }
    };
    ConfirmDialog = __decorate([
        components_8.customElements('scpage-confirm-dialog')
    ], ConfirmDialog);
    exports.ConfirmDialog = ConfirmDialog;
});
define("@scom/scom-page-builder/dialogs/loadingDialog.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_9.Styles.Theme.ThemeVars;
    const spin = components_9.Styles.keyframes({
        "to": {
            "-webkit-transform": "rotate(360deg)"
        }
    });
    components_9.Styles.cssRule('scpage-loading-dialog', {
        $nest: {
            'i-modal .modal': {
                borderRadius: '5px',
            },
            'i-label': {
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '100%'
            },
            '.message-box': {
                textAlign: 'center',
                overflow: 'hidden'
            },
            '.spinner': {
                display: "inline-block",
                width: "50px",
                height: "50px",
                border: "3px solid rgba(255,255,255,.3)",
                borderRadius: "50%",
                borderTopColor: Theme.colors.primary.main,
                "animation": `${spin} 1s ease-in-out infinite`,
                "-webkit-animation": `${spin} 1s ease-in-out infinite`
            }
        }
    });
});
define("@scom/scom-page-builder/dialogs/loadingDialog.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/utility/index.ts", "@scom/scom-page-builder/dialogs/loadingDialog.css.ts"], function (require, exports, components_10, index_11) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoadingDialog = void 0;
    let LoadingDialog = class LoadingDialog extends components_10.Module {
        constructor(parent, options) {
            super(parent, options);
            index_11.assignAttr(this);
        }
        async init() {
            super.init();
        }
        show() {
            this.mdLoading.visible = true;
        }
        hide() {
            this.mdLoading.visible = false;
        }
        updateMessage(message) {
            this.lbMessage.caption = message;
        }
        render() {
            return (this.$render("i-modal", { id: 'mdLoading', showBackdrop: true, closeOnBackdropClick: false, maxWidth: 350, height: 300 },
                this.$render("i-panel", { class: 'message-box' },
                    this.$render("i-hstack", { justifyContent: 'center', alignItems: 'center' },
                        this.$render("i-panel", { class: 'spinner' })),
                    this.$render("i-label", { id: 'lbMessage', caption: 'Loading...', margin: { top: 5 } }))));
        }
    };
    LoadingDialog = __decorate([
        components_10.customElements('scpage-loading-dialog')
    ], LoadingDialog);
    exports.LoadingDialog = LoadingDialog;
});
define("@scom/scom-page-builder/dialogs/rowSettingsDialog.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_11) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_11.Styles.Theme.ThemeVars;
    components_11.Styles.cssRule('ide-row-settings-dialog', {
        $nest: {
            '.setting-modal': {
                $nest: {
                    '.i-modal_header': {
                        padding: '1rem 1rem 0.5rem',
                        fontSize: '1rem',
                        fontWeight: 600
                    },
                    'i-button': {
                        padding: '1rem'
                    },
                    'i-input': {
                        border: `1px solid ${Theme.divider}`,
                        marginBottom: '1rem'
                    },
                    '.modal': {
                        maxHeight: 'calc(100vh - 48px)',
                        padding: 0
                    }
                }
            },
        }
    });
});
define("@scom/scom-page-builder/dialogs/rowSettingsDialog.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/utility/index.ts", "@scom/scom-page-builder/dialogs/rowSettingsDialog.css.ts"], function (require, exports, components_12, index_12) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RowSettingsDialog = void 0;
    const Theme = components_12.Styles.Theme.ThemeVars;
    let RowSettingsDialog = class RowSettingsDialog extends components_12.Module {
        constructor(parent) {
            super(parent);
            index_12.assignAttr(this);
        }
        show() {
            this.dialog.visible = true;
        }
        hide() {
            this.dialog.visible = false;
        }
        setConfig(config) {
            this.txtRowBackgroundColor.value = config;
        }
        getConfig() {
            const backgroundColor = this.txtRowBackgroundColor.value;
            return backgroundColor;
        }
        async confirm() {
            const config = this.getConfig();
            if (this.onSave)
                await this.onSave(config);
            this.dialog.visible = false;
        }
        cancel() {
            this.dialog.visible = false;
        }
        render() {
            return (this.$render("i-modal", { id: 'dialog', minWidth: 400, maxWidth: 500, title: "Section Colors", closeOnBackdropClick: false, closeIcon: { name: 'times' }, class: "setting-modal" },
                this.$render("i-vstack", { padding: { left: '1rem', right: '1rem', top: '1rem', bottom: '1rem' } },
                    this.$render("i-vstack", { class: 'form-group', margin: { bottom: '2rem' }, gap: "0.5rem" },
                        this.$render("i-label", { class: 'form-label', caption: 'Background color' }),
                        this.$render("i-panel", { class: 'form-control' },
                            this.$render("i-input", { inputType: 'color', id: 'txtRowBackgroundColor' }))),
                    this.$render("i-hstack", { justifyContent: 'end', alignItems: 'center', gap: "0.5rem" },
                        this.$render("i-button", { caption: 'Cancel', background: { color: Theme.colors.primary.main }, font: { color: Theme.colors.primary.contrastText }, padding: { top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' }, onClick: this.cancel }),
                        this.$render("i-button", { caption: 'Confirm', background: { color: Theme.colors.primary.main }, font: { color: Theme.colors.primary.contrastText }, padding: { top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' }, onClick: this.confirm })))));
        }
    };
    RowSettingsDialog = __decorate([
        components_12.customElements('ide-row-settings-dialog')
    ], RowSettingsDialog);
    exports.RowSettingsDialog = RowSettingsDialog;
});
define("@scom/scom-page-builder/dialogs/pageBlockSettingsDialog.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/utility/index.ts"], function (require, exports, components_13, index_13) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageBlockSettingsDialog = void 0;
    let PageBlockSettingsDialog = class PageBlockSettingsDialog extends components_13.Module {
        constructor(parent, options) {
            super(parent, options);
            this.form = {};
            index_13.assignAttr(this);
        }
        async init() {
            super.init();
        }
        show(data) {
            if (!data)
                return;
            const { schema, configData, events, visibleOn, invisibleOn } = data;
            this.reset();
            this.schema = schema;
            this.configData = configData;
            const form = this.renderForm(schema, '', '', this.configData);
            if (form)
                this.pnlConfig.append(form);
            if (events) {
                for (const event of events) {
                    const box = this.$render("i-panel", { class: 'box' },
                        this.$render("i-panel", { class: 'box-header' },
                            this.$render("i-label", { caption: event.name }),
                            this.$render("i-label", { caption: event.description, class: 'ml-20', font: { size: '14px' } })));
                    this.pnlEvents.append(box);
                }
            }
            this.txtVisibleOn.value = visibleOn;
            this.txtInvisibleOn.value = invisibleOn;
            this.dialog.visible = true;
        }
        close() {
            this.dialog.visible = false;
        }
        async handleSaveClick() {
            const data = await this.getFormData(this.schema, '');
            if (this.onSave)
                await this.onSave({
                    visibleOn: this.txtVisibleOn.value,
                    invisibleOn: this.txtInvisibleOn.value,
                    configData: data
                });
            this.close();
        }
        async getFormData(object, name) {
            var _a, _b;
            switch ((_a = object.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) {
                case 'object':
                    let data = {};
                    const properties = object.properties;
                    for (const propertyName in properties) {
                        data[propertyName] = await this.getFormData(properties[propertyName], `${name}/${propertyName}`);
                    }
                    return data;
                case 'string':
                case 'number':
                case 'integer':
                case 'boolean':
                    switch (this.form[name].type) {
                        case 'input':
                        case 'datepicker':
                        case 'colorpicker':
                            return this.form[name].control.value;
                        case 'combobox':
                            return (_b = this.form[name].control.value) === null || _b === void 0 ? void 0 : _b.value;
                        case 'checkbox':
                            return this.form[name].control.checked;
                        case 'uploader':
                            if (this.form[name].control.fileList && this.form[name].control.fileList.length > 0)
                                return await this.form[name].control.toBase64(this.form[name].control.fileList[0]);
                            else
                                return '';
                    }
                default:
                    return null;
            }
            return null;
        }
        reset() {
            this.schema = undefined;
            this.configData = undefined;
            this.form = {};
            this.pnlConfig.clearInnerHTML();
        }
        renderForm(object, name, nameBuilder = "", data, required) {
            var _a, _b;
            if (!object)
                return null;
            const labelName = this.convertFieldNameToLabel(name);
            switch ((_a = object.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) {
                case 'object':
                    const req = object.required;
                    const properties = object.properties;
                    const box = this.$render("i-panel", { class: 'box' });
                    if (name) {
                        box.append(this.$render("i-panel", { class: 'box-header' },
                            this.$render("i-label", { caption: this.convertFieldNameToLabel(name) })));
                    }
                    const form = this.$render("i-panel", { class: 'box-content' });
                    for (const propertyName in properties) {
                        let subLevelData = data;
                        if (data && name)
                            subLevelData = data[name];
                        const control = this.renderForm(properties[propertyName], propertyName, `${nameBuilder}/${propertyName}`, subLevelData, req);
                        form.append(control);
                    }
                    box.append(form);
                    return box;
                case 'string':
                    switch ((_b = object.format) === null || _b === void 0 ? void 0 : _b.toLowerCase()) {
                        case 'date':
                            const datePicker = this.$render("i-datepicker", null);
                            if (data)
                                datePicker.value = data[name];
                            this.form[nameBuilder] = {
                                control: datePicker,
                                type: 'datepicker',
                                required: required && required.indexOf(name) >= 0
                            };
                            return this.$render("i-panel", { class: 'form-group' },
                                this.$render("i-label", { class: 'form-label', caption: labelName }),
                                this.$render("i-panel", { class: 'form-control' }, datePicker));
                        case 'datetime':
                            const dateTimePicker = this.$render("i-datepicker", { dateTimeFormat: 'YYYY-MM-DD HH:mm:ss' });
                            if (data)
                                dateTimePicker.value = data[name];
                            this.form[nameBuilder] = {
                                control: dateTimePicker,
                                type: 'datepicker',
                                required: required && required.indexOf(name) >= 0
                            };
                            return this.$render("i-panel", { class: 'form-group' },
                                this.$render("i-label", { class: 'form-label', caption: labelName }),
                                this.$render("i-panel", { class: 'form-control' }, dateTimePicker));
                        case 'color':
                            const colorPicker = this.$render("i-input", { inputType: 'color' });
                            if (data)
                                colorPicker.value = data[name];
                            this.form[nameBuilder] = {
                                control: colorPicker,
                                type: 'colorpicker',
                                required: required && required.indexOf(name) >= 0
                            };
                            return this.$render("i-panel", { class: 'form-group' },
                                this.$render("i-label", { class: 'form-label', caption: labelName }),
                                this.$render("i-panel", { class: 'form-control' }, colorPicker));
                        // case 'image':
                        //     const uploader: Upload = <i-upload></i-upload>
                        //     if(data) {
                        //         uploader.preview(data[name]);
                        //     }
                        //     this.form[name] = {
                        //         control: uploader,
                        //         type: 'uploader',
                        //         required: required && required.indexOf(name) >= 0
                        //     }
                        default:
                            if (object.enum && object.enum.length > 0) {
                                const items = [];
                                for (const item of object.enum) {
                                    items.push({ label: item, value: item });
                                }
                                // Drop down list
                                const comboBox = this.$render("i-combo-box", { items: items, icon: { name: 'caret-down' } });
                                if (data)
                                    comboBox.value = data[name];
                                this.form[nameBuilder] = {
                                    control: comboBox,
                                    type: 'combobox',
                                    required: required && required.indexOf(name) >= 0
                                };
                                return this.$render("i-panel", { class: 'form-group' },
                                    this.$render("i-label", { class: 'form-label', caption: labelName }),
                                    this.$render("i-panel", { class: 'form-control' }, comboBox));
                            }
                            else {
                                const input = this.$render("i-input", { inputType: 'text' });
                                if (data)
                                    input.value = data[name];
                                this.form[nameBuilder] = {
                                    control: input,
                                    type: 'input',
                                    required: required && required.indexOf(name) >= 0
                                };
                                // const { minLength, maxLength } = object.minLength;
                                // if(minLength) {
                                // }
                                // if(maxLength) {
                                // }
                                return this.$render("i-panel", { class: 'form-group' },
                                    this.$render("i-label", { class: 'form-label', caption: labelName }),
                                    this.$render("i-panel", { class: 'form-control' }, input));
                            }
                    }
                case 'number':
                    var { minimum, maximum } = object;
                    if (minimum != undefined && maximum != undefined) {
                        const input = this.$render("i-input", { inputType: 'range', min: minimum, max: maximum, tooltipVisible: true });
                        if (data)
                            input.value = data[name];
                        this.form[nameBuilder] = {
                            control: input,
                            type: 'input',
                            required: required && required.indexOf(name) >= 0
                        };
                        return this.$render("i-panel", { class: 'form-group' },
                            this.$render("i-label", { class: 'form-label', caption: labelName }),
                            this.$render("i-panel", { class: 'form-control' }, input));
                    }
                    else {
                        const input = this.$render("i-input", { inputType: 'number' });
                        if (data)
                            input.value = data[name];
                        this.form[nameBuilder] = {
                            control: input,
                            type: 'input',
                            required: required && required.indexOf(name) >= 0
                        };
                        return this.$render("i-panel", { class: 'form-group' },
                            this.$render("i-label", { class: 'form-label', caption: labelName }),
                            this.$render("i-panel", { class: 'form-control' }, input));
                    }
                case 'integer':
                    var { minimum, maximum } = object;
                    if (minimum != undefined && maximum != undefined) {
                        var input = this.$render("i-input", { inputType: 'range', min: minimum, max: maximum, value: minimum, tooltipVisible: true });
                        if (data)
                            input.value = data[name];
                        this.form[nameBuilder] = {
                            control: input,
                            type: 'input',
                            required: required && required.indexOf(name) >= 0
                        };
                        return this.$render("i-panel", { class: 'form-group' },
                            this.$render("i-label", { class: 'form-label', caption: labelName }),
                            this.$render("i-panel", { class: 'form-control' }, input));
                    }
                    else {
                        var input = this.$render("i-input", { inputType: 'number' });
                        if (data)
                            input.value = data[name];
                        this.form[nameBuilder] = {
                            control: input,
                            type: 'input',
                            required: required && required.indexOf(name) >= 0
                        };
                        return this.$render("i-panel", { class: 'form-group' },
                            this.$render("i-label", { class: 'form-label', caption: labelName }),
                            this.$render("i-panel", { class: 'form-control' }, input));
                    }
                case 'boolean':
                    var checkbox = this.$render("i-checkbox", null);
                    if (data)
                        checkbox.checked = data[name];
                    this.form[nameBuilder] = {
                        control: checkbox,
                        type: 'checkbox',
                        required: required && required.indexOf(name) >= 0
                    };
                    return this.$render("i-panel", { class: 'form-group' },
                        this.$render("i-label", { class: 'form-label', caption: labelName }),
                        this.$render("i-panel", { class: 'form-control' }, checkbox));
                default:
                    return null;
            }
        }
        convertFieldNameToLabel(name) {
            let label = '';
            for (let i = 0; i < name.length; i++) {
                let char = name[i];
                if (i == 0) {
                    label += char.toUpperCase();
                    continue;
                }
                if (char == char.toUpperCase())
                    label += ` ${char}`;
                else
                    label += char;
            }
            return label;
        }
        async render() {
            return this.$render("i-modal", { id: 'dialog', showBackdrop: true, closeOnBackdropClick: false, closeIcon: { name: 'times' }, visible: false, maxWidth: '1460px' },
                this.$render("i-tabs", null,
                    this.$render("i-tab", { caption: "Config" },
                        this.$render("i-panel", { id: 'pnlConfig' })),
                    this.$render("i-tab", { caption: "Global Events" },
                        this.$render("i-panel", { class: 'box' },
                            this.$render("i-panel", { id: 'pnlEvents', class: 'box-content' }))),
                    this.$render("i-tab", { caption: "Visible on" },
                        this.$render("i-panel", { class: 'box' },
                            this.$render("i-panel", { class: 'box-content' },
                                this.$render("i-panel", { class: 'form-group' },
                                    this.$render("i-label", { class: 'form-label', caption: "Visible on" }),
                                    this.$render("i-panel", { class: 'form-control' },
                                        this.$render("i-input", { inputType: 'text', id: "txtVisibleOn" }))),
                                this.$render("i-panel", { class: 'form-group' },
                                    this.$render("i-label", { class: 'form-label', caption: "Invisible on" }),
                                    this.$render("i-panel", { class: 'form-control' },
                                        this.$render("i-input", { inputType: 'text', id: "txtInvisibleOn" }))))))),
                this.$render("i-panel", null,
                    this.$render("i-button", { class: 'btn btn-secondary', caption: 'Cancel', onClick: this.close.bind(this) }),
                    this.$render("i-button", { class: 'btn btn-primary', caption: 'Save', onClick: this.handleSaveClick.bind(this) })));
        }
    };
    PageBlockSettingsDialog = __decorate([
        components_13.customElements('scpage-pageblock-settings-dialog')
    ], PageBlockSettingsDialog);
    exports.PageBlockSettingsDialog = PageBlockSettingsDialog;
});
define("@scom/scom-page-builder/dialogs/index.ts", ["require", "exports", "@scom/scom-page-builder/dialogs/confirmDialog.tsx", "@scom/scom-page-builder/dialogs/loadingDialog.tsx", "@scom/scom-page-builder/dialogs/rowSettingsDialog.tsx", "@scom/scom-page-builder/dialogs/pageBlockSettingsDialog.tsx"], function (require, exports, confirmDialog_1, loadingDialog_1, rowSettingsDialog_1, pageBlockSettingsDialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageBlockSettingsDialog = exports.RowSettingsDialog = exports.LoadingDialog = exports.ConfirmDialog = void 0;
    Object.defineProperty(exports, "ConfirmDialog", { enumerable: true, get: function () { return confirmDialog_1.ConfirmDialog; } });
    Object.defineProperty(exports, "LoadingDialog", { enumerable: true, get: function () { return loadingDialog_1.LoadingDialog; } });
    Object.defineProperty(exports, "RowSettingsDialog", { enumerable: true, get: function () { return rowSettingsDialog_1.RowSettingsDialog; } });
    Object.defineProperty(exports, "PageBlockSettingsDialog", { enumerable: true, get: function () { return pageBlockSettingsDialog_1.PageBlockSettingsDialog; } });
});
define("@scom/scom-page-builder/common/toolbar.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_14) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_14.Styles.Theme.ThemeVars;
    const tileToolbarFadeIn = components_14.Styles.keyframes({
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
    });
    components_14.Styles.cssRule('ide-toolbar', {
        display: 'block',
        $nest: {
            '.ide-component.active, .ide-component:hover': {
                border: `2px solid ${Theme.colors.primary.main}`
            },
            '.ide-component': {
                border: `2px solid transparent`,
                boxSizing: 'content-box'
            },
            'i-button': {
                boxShadow: 'none'
            },
            '.ide-toolbar': {
                position: 'absolute',
                zIndex: 99,
                top: -53,
                left: 0,
                boxShadow: '0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%), 0px 1px 5px 0px rgb(0 0 0 / 20%)',
                animation: `${tileToolbarFadeIn} 125ms cubic-bezier(0.4,0,1,1)`
            },
            '.setting-modal': {
                $nest: {
                    '.i-modal_header': {
                        padding: '1rem 1rem 0.5rem',
                        fontSize: '1rem',
                        fontWeight: 600
                    },
                    'i-button': {
                        padding: '1rem'
                    },
                    'i-input': {
                        border: `1px solid ${Theme.divider}`,
                        marginBottom: '1rem'
                    },
                    '.modal': {
                        padding: 0
                    }
                }
            },
            '.resize-icon': {
                cursor: 'ew-resize',
                opacity: 0,
                transition: '125ms',
                border: '1px solid #fff',
                borderRadius: '50%'
            },
            '&.active .resize-icon': {
                opacity: 1
            },
            '.nw-resize': {
                cursor: 'nw-resize !important'
            },
            '.ne-resize': {
                cursor: 'ne-resize !important'
            },
            '.n-resize': {
                cursor: 'n-resize !important'
            },
            '.move': {
                cursor: 'move'
            },
            '.dragger': {
                cursor: 'move',
                opacity: 0,
                visibility: 'hidden',
                transform: 'translateX(-50%)',
                zIndex: 10
            },
            '&:hover': {
                $nest: {
                    '.dragger': {
                        visibility: 'initial',
                        opacity: 0.48,
                        transition: 'opacity .3s .3s cubic-bezier(0.4,0,0.2,1), visibility 0s .2s'
                    }
                }
            }
        }
    });
});
define("@scom/scom-page-builder/common/toolbar.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/interface/index.ts", "@scom/scom-page-builder/store/index.ts", "@scom/scom-page-builder/utility/index.ts", "@scom/scom-page-builder/common/toolbar.css.ts"], function (require, exports, components_15, index_14, index_15, index_16) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IDEToolbar = void 0;
    const Theme = components_15.Styles.Theme.ThemeVars;
    let IDEToolbar = class IDEToolbar extends components_15.Module {
        constructor(parent) {
            super(parent);
            this._toolList = [];
            this.currentAction = null;
            this._component = null;
            this.setData = this.setData.bind(this);
            this.fetchModule = this.fetchModule.bind(this);
        }
        get data() {
            return index_15.pageObject.getElement(this.rowId, this.elementId);
        }
        get module() {
            return this._component;
        }
        get toolList() {
            return this._toolList || [];
        }
        set toolList(value) {
            this._toolList = value;
            this.renderToolbars();
        }
        get rowId() {
            return this._rowId;
        }
        set rowId(value) {
            this._rowId = value;
        }
        get elementId() {
            return this._elementId;
        }
        set elementId(value) {
            this._elementId = value;
        }
        get readonly() {
            return this._readonly;
        }
        set readonly(value) {
            this._readonly = value;
        }
        async renderToolbars() {
            this.toolbar.clearInnerHTML();
            for (let i = 0; i < this.toolList.length; i++) {
                const tool = this.toolList[i];
                let elm = await components_15.Button.create({
                    padding: { left: '12px', right: '12px', top: '12px', bottom: '12px' },
                    width: 48,
                    height: 48,
                    border: { radius: '50%' },
                    background: { color: 'transparent' },
                    visible: tool.visible ? tool.visible() : true,
                    caption: `<i-icon name="${tool.icon}" width=${20} height=${20} display="block" fill="${Theme.text.primary}"></i-icon>`,
                    onClick: () => {
                        this.currentAction = tool;
                        if (index_16.isEmpty(tool.userInputDataSchema)) {
                            const commandIns = this.currentAction.command(this, null);
                            index_16.commandHistory.execute(commandIns);
                        }
                        else {
                            this.mdActions.visible = true;
                        }
                        this.hideToolbars();
                    }
                });
                elm.classList.add('toolbar');
                this.toolbar.appendChild(elm);
            }
            const removeBtn = await components_15.Button.create({
                padding: { left: '12px', right: '12px', top: '12px', bottom: '12px' },
                width: 48,
                height: 48,
                border: { radius: '50%' },
                background: { color: 'transparent' },
                caption: `<i-icon name="trash" width=${20} height=${20} display="block" fill="${Theme.text.primary}"></i-icon>`,
                onClick: () => {
                    const removeCmd = new index_16.RemoveToolbarCommand(this);
                    index_16.commandHistory.execute(removeCmd);
                    this.hideToolbars();
                }
            });
            removeBtn.classList.add('toolbar');
            this.toolbar.appendChild(removeBtn);
        }
        onShowModal() {
            this.classList.add('is-setting');
            this.pnlFormMsg.visible = false;
            this.renderToolbarAction(this.currentAction);
        }
        onCloseModal() {
            this.classList.remove('is-setting');
        }
        renderToolbarAction(action) {
            var _a;
            this.pnlForm.clearInnerHTML();
            const data = this.data.properties;
            if (data.height === 'auto')
                data.height = this.offsetHeight;
            if (data.width === 'auto')
                data.width = this.offsetWidth;
            const options = {
                columnWidth: '100%',
                columnsPerRow: 1,
                confirmButtonBackgroundColor: Theme.colors.primary.main,
                confirmButtonFontColor: Theme.colors.primary.contrastText
            };
            // console.log('schema: ', action.userInputDataSchema)
            // console.log('data: ', data)
            // renderUI(this.pnlForm, action.userInputDataSchema, this.onSave.bind(this), data, options);
            let properties;
            //FIXME: used temporarily for container type
            if (data.content && data.content.properties) {
                properties = data.content.properties;
            }
            else {
                properties = data;
            }
            let tag = ((_a = data === null || data === void 0 ? void 0 : data.content) === null || _a === void 0 ? void 0 : _a.tag) || this.data.tag || {};
            components_15.renderUI(this.pnlForm, action.userInputDataSchema, this.onSave.bind(this), action.userInputUISchema, Object.assign(Object.assign({}, properties), tag), options);
        }
        onSave(result, data) {
            if (result) {
                const commandIns = this.currentAction.command(this, data);
                index_16.commandHistory.execute(commandIns);
                this.mdActions.visible = false;
            }
            else if (data === null || data === void 0 ? void 0 : data.errors) {
                this.pnlFormMsg.visible = true;
                this.renderError(data.errors || []);
            }
        }
        isTexbox() {
            return this.data.module.name === index_14.ELEMENT_NAME.TEXTBOX;
        }
        showToolbars() {
            if (this.toolList.length)
                this.toolsStack.visible = true;
            this.contentStack && this.contentStack.classList.add('active');
            this.classList.add('active');
            // if (this.isTexbox() && this._component.edit) {
            //     this._component.edit();
            //     this.isEditing = true;
            // }
        }
        hideToolbars() {
            this.toolsStack.visible = false;
            this.contentStack && this.contentStack.classList.remove('active');
            this.classList.remove('active');
            // if (this.isTexbox() && this._component.confirm && this.isEditing) {
            //     this._component.confirm();
            //     this.isEditing = false;
            // }
        }
        renderResizeStack(data) {
            var _a;
            this._eResizer = this.renderResizer('left');
            this._wResizer = this.renderResizer('right');
            this._nResizer = this.renderResizer('bottom');
            this._neResizer = this.renderResizer('bottomLeft');
            this._nwResizer = this.renderResizer('bottomRight');
            const isImage = ((_a = data === null || data === void 0 ? void 0 : data.module) === null || _a === void 0 ? void 0 : _a.name) === index_14.ELEMENT_NAME.IMAGE;
            if (this._nResizer)
                this._nResizer.visible = isImage;
            if (this._neResizer)
                this._neResizer.visible = isImage;
            if (this._nwResizer)
                this._nwResizer.visible = isImage;
        }
        renderResizer(position) {
            const stack = this.$render("i-vstack", { minWidth: 8, verticalAlignment: "center", horizontalAlignment: "center", zIndex: 20, position: "absolute", class: "resize-stack" });
            const iconEl = this.$render("i-icon", { name: "circle", fill: Theme.colors.primary.main, height: 16, width: 16, class: "resize-icon" });
            switch (position) {
                case 'left':
                    stack.top = 0;
                    stack.left = 0;
                    stack.height = '100%';
                    iconEl.margin = { left: -8 };
                    break;
                case 'right':
                    stack.top = 0;
                    stack.right = 0;
                    stack.height = '100%';
                    iconEl.margin = { right: -8 };
                    break;
                case 'bottom':
                    stack.bottom = -10;
                    stack.left = '50%';
                    stack.style.transform = 'translateX(-50%)';
                    stack.height = 'auto';
                    iconEl.classList.add('n-resize');
                    stack.visible = false;
                    break;
                case 'bottomLeft':
                    stack.bottom = -8;
                    stack.left = 0;
                    stack.height = 'auto';
                    iconEl.margin = { left: -8 };
                    iconEl.classList.add('ne-resize');
                    stack.visible = false;
                    break;
                case 'bottomRight':
                    stack.bottom = -8;
                    stack.right = 0;
                    stack.height = 'auto';
                    iconEl.margin = { right: -8 };
                    iconEl.classList.add('nw-resize');
                    stack.visible = false;
                    break;
            }
            stack.appendChild(iconEl);
            stack.classList.add(position);
            this.contentStack.appendChild(stack);
            return stack;
        }
        async fetchModule(data) {
            var _a, _b;
            if (this._readonly)
                return;
            const ipfscid = ((_a = data === null || data === void 0 ? void 0 : data.module) === null || _a === void 0 ? void 0 : _a.ipfscid) || '';
            const localPath = ((_b = data === null || data === void 0 ? void 0 : data.module) === null || _b === void 0 ? void 0 : _b.localPath) || '';
            try {
                const module = await index_16.getModule({ ipfscid, localPath });
                if (module) {
                    await module.init();
                    module.parent = this.contentStack;
                    this.contentStack.append(module);
                    this._component = module;
                    this._component.maxWidth = '100%';
                    this._component.maxHeight = '100%';
                    this._component.overflow = 'hidden';
                    this._component.style.display = 'block';
                    this._component.onClick = () => {
                        this.toolList = this._component.getActions ? this._component.getActions() : [];
                        this.checkToolbar();
                        this.showToolbars();
                    };
                    if (this.isTexbox()) {
                        this.dragStack.visible = true;
                        this.contentStack.classList.remove('move');
                    }
                    else {
                        this.dragStack.visible = false;
                        this.contentStack.classList.add('move');
                    }
                    this.renderResizeStack(data);
                }
            }
            catch (error) {
                console.log('fetch module error: ', error);
            }
        }
        async setData(properties) {
            // update data from pageblock
            if (!this._component)
                return;
            index_15.pageObject.setElement(this.rowId, this.data.id, { properties });
        }
        async setTag(tag) {
            var _a, _b, _c, _d;
            if (!this._component)
                return;
            if (tag.width === '100%')
                tag.width = Number(this.width);
            if (tag.height === '100%')
                tag.height = Number(this.height);
            await this._component.setTag(tag);
            const isContainer = ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.content) && typeof ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.properties) === null || _d === void 0 ? void 0 : _d.content) === 'object';
            if (isContainer) {
                const properties = this.data.properties;
                properties.content.tag = tag;
                index_15.pageObject.setElement(this.rowId, this.data.id, { properties });
            }
            else {
                index_15.pageObject.setElement(this.rowId, this.data.id, { tag });
            }
        }
        async setProperties(data) {
            if (!this._component)
                return;
            if (this._component.setRootDir) {
                const rootDir = index_15.getRootDir();
                this._component.setRootDir(rootDir);
            }
            await this._component.setData(data);
        }
        checkToolbar() {
            const isShowing = this.toolsStack.visible;
            const pageRows = document.querySelectorAll('ide-row');
            if (pageRows) {
                for (const row of pageRows) {
                    const toolbarElm = row.querySelector('ide-toolbar');
                    if (toolbarElm)
                        toolbarElm.hideToolbars();
                    row.classList.remove('active');
                }
            }
            isShowing && this.showToolbars();
        }
        renderError(errors) {
            this.pnlFormMsg.clearInnerHTML();
            errors.forEach(error => {
                this.pnlFormMsg.appendChild(this.$render("i-label", { caption: `${error.property} ${error.message}`, font: { color: Theme.colors.error.main, size: '0.75rem' } }));
            });
        }
        _handleClick(event) {
            if (this._readonly)
                return super._handleClick(event, true);
            this.checkToolbar();
            return super._handleClick(event, true);
        }
        init() {
            super.init();
            this.readonly = this.getAttribute('readonly', true, false);
        }
        render() {
            return (this.$render("i-vstack", { id: "mainWrapper", width: "auto", maxWidth: "100%", maxHeight: "100%" },
                this.$render("i-panel", { id: "toolsStack", border: { radius: 4 }, background: { color: '#fff' }, class: "ide-toolbar", visible: false },
                    this.$render("i-hstack", { id: "toolbar", gap: "0.5rem" })),
                this.$render("i-panel", { id: "contentStack", height: "100%", position: 'relative', maxWidth: "100%", maxHeight: "100%", class: "ide-component", onClick: this.showToolbars.bind(this) },
                    this.$render("i-vstack", { id: "dragStack", verticalAlignment: "center", position: "absolute", left: "50%", top: "0px", width: "auto", height: "auto", class: "dragger" },
                        this.$render("i-grid-layout", { verticalAlignment: "center", autoFillInHoles: true, columnsPerRow: 4, gap: { column: '2px', row: '2px' }, class: "main-drag" },
                            this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                            this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                            this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                            this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                            this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                            this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                            this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                            this.$render("i-icon", { name: "circle", width: 3, height: 3 })))),
                this.$render("i-modal", { id: 'mdActions', title: 'Update Settings', closeIcon: { name: 'times' }, minWidth: 400, maxWidth: 500, closeOnBackdropClick: false, onOpen: this.onShowModal.bind(this), onClose: this.onCloseModal.bind(this), class: "setting-modal" },
                    this.$render("i-panel", null,
                        this.$render("i-vstack", { id: "pnlFormMsg", padding: { left: '1.5rem', right: '1.5rem', top: '1rem' }, gap: "0.5rem", visible: false }),
                        this.$render("i-panel", { id: "pnlForm", padding: { left: '1rem', right: '1rem', top: '1rem', bottom: '1rem' } })))));
        }
    };
    IDEToolbar = __decorate([
        components_15.customElements('ide-toolbar')
    ], IDEToolbar);
    exports.IDEToolbar = IDEToolbar;
});
define("@scom/scom-page-builder/common/dragger.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/utility/index.ts"], function (require, exports, components_16, index_17) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContainerDragger = void 0;
    class ContainerDragger {
        constructor(target, stack, dragger, dataList) {
            this.target = target;
            this.stack = stack;
            this.dataList = dataList || [];
            this.dragger = dragger || this.target.querySelector('#dragStack');
            this.mouseDownHandler = this.mouseDownHandler.bind(this);
            this.mouseUpHandler = this.mouseUpHandler.bind(this);
            this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
            this.initDragEvent();
        }
        initDragEvent() {
            if (!this.dragger)
                return;
            this.target.classList.add('dropzone');
            if (!this.target.readonly) {
                this.dragger.addEventListener('mousedown', this.mouseDownHandler, false);
                const rows = Array.from(this.stack.children);
                rows.forEach(row => {
                    row.classList.add("dropzone");
                });
            }
            else
                this.dragger.removeEventListener('mousedown', this.mouseDownHandler, false);
            this.dragger.ondragstart = function () { return false; };
            if (!this.pnlOverlay) {
                this.pnlOverlay = new components_16.Panel(undefined, {
                    position: 'fixed',
                    zIndex: -1,
                    visible: false,
                    opacity: 0.4,
                    background: { color: '#ddd' }
                });
                this.pnlOverlay.classList.add('drag-overlay');
            }
            this.stack.parent && this.stack.parent.appendChild(this.pnlOverlay);
        }
        mouseDownHandler(event) {
            event.stopPropagation();
            if (this.target && !this.isDragging) {
                this.isDragging = true;
                const data = this.target.getBoundingClientRect();
                this.currentPosition = data;
                this.pnlOverlay.width = this.currentPosition.width;
                this.pnlOverlay.height = this.currentPosition.height;
                this.pnlOverlay.zIndex = '1';
                this.pnlOverlay.left = this.currentPosition.left;
                this.pnlOverlay.top = this.currentPosition.top;
                document.addEventListener('mousemove', this.mouseMoveHandler);
                document.addEventListener('mouseup', this.mouseUpHandler);
                document.body.click();
            }
        }
        mouseUpHandler(event) {
            document.removeEventListener('mousemove', this.mouseMoveHandler);
            document.removeEventListener('mouseup', this.mouseUpHandler);
            this.resetTarget();
            const target = event.target;
            const dropElm = target.closest('.dropzone');
            const rows = Array.from(document.querySelectorAll('.is-dragenter'));
            rows.forEach(row => {
                row.classList.remove("is-dragenter");
            });
            if (!dropElm || !this.stack.contains(dropElm)) {
                event.preventDefault();
                this.pnlOverlay.visible = false;
                this.pnlOverlay.zIndex = '-1';
                this.isDragging = false;
                return;
            }
            if (!this.target) {
                event.preventDefault();
                this.pnlOverlay.visible = false;
                this.pnlOverlay.zIndex = '-1';
                this.isDragging = false;
                return;
            }
            if (dropElm && !this.target.isSameNode(dropElm)) {
                const moveRowCmd = new index_17.MoveElementCommand(this.target, dropElm, this.stack, this.dataList);
                index_17.commandHistory.execute(moveRowCmd);
            }
            this.isDragging = false;
        }
        resetTarget() {
            if (!this.target)
                return;
            this.target.style.transform = 'none';
            this.target.classList.remove('dragging');
            this.pnlOverlay.visible = false;
            this.pnlOverlay.zIndex = '-1';
            if (this.target.onMoveDown)
                this.target.onMoveDown();
        }
        updateTarget(x, y) {
            this.target.classList.add('dragging');
            const elementWidth = (Number(this.currentPosition.width) / 2);
            const newX = elementWidth < 0 ? x + elementWidth : x - elementWidth;
            const newY = y - (Number(this.currentPosition.height) / 2);
            this.target.style.transform = `scale(0.5) translate(${newX}px, ${newY}px)`;
            if (this.target.onMoveUp)
                this.target.onMoveUp();
        }
        mouseMoveHandler(event) {
            let x = event.clientX;
            let y = event.clientY;
            const target = event.target;
            const dropZone = target.closest('.dropzone');
            const rows = Array.from(document.querySelectorAll('.is-dragenter'));
            rows.forEach(row => {
                row.classList.remove("is-dragenter");
            });
            if (dropZone && !dropZone.isEqualNode(this.target))
                dropZone.classList.add('is-dragenter');
            this.pnlOverlay.visible = true;
            this.pnlOverlay.zIndex = '1';
            this.updateTarget(x - this.currentPosition.x, y - this.currentPosition.y);
        }
    }
    exports.ContainerDragger = ContainerDragger;
});
define("@scom/scom-page-builder/common/index.ts", ["require", "exports", "@scom/scom-page-builder/common/toolbar.tsx", "@scom/scom-page-builder/common/dragger.tsx"], function (require, exports, toolbar_1, dragger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContainerDragger = exports.IDEToolbar = void 0;
    Object.defineProperty(exports, "IDEToolbar", { enumerable: true, get: function () { return toolbar_1.IDEToolbar; } });
    Object.defineProperty(exports, "ContainerDragger", { enumerable: true, get: function () { return dragger_1.ContainerDragger; } });
});
define("@scom/scom-page-builder/page/pageSection.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/dialogs/index.ts", "@scom/scom-page-builder/common/index.ts", "@scom/scom-page-builder/utility/index.ts", "@scom/scom-page-builder/store/index.ts", "@scom/scom-page-builder/page/pageSection.css.ts"], function (require, exports, components_17, index_18, index_19, index_20, index_21) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RowSettingsDialog = exports.PageSection = void 0;
    Object.defineProperty(exports, "RowSettingsDialog", { enumerable: true, get: function () { return index_18.RowSettingsDialog; } });
    let PageSection = class PageSection extends components_17.Module {
        constructor(parent) {
            super(parent);
            this.rowId = '';
            this.setData = this.setData.bind(this);
            // this.getData = this.getData.bind(this);
        }
        // get size() {
        //     return this._size || {};
        // }
        // set size(value: { width?: string; height?: string }) {
        //     this._size = value;
        //     this.updateContainerSize();
        // }
        get readonly() {
            return this._readonly;
        }
        set readonly(value) {
            this._readonly = value;
        }
        get data() {
            return index_21.pageObject.getElement(this.rowId, this.id);
        }
        init() {
            super.init();
            this.readonly = this.getAttribute('readonly', true, false);
            // const parent = this.parentElement.querySelector('#pnlElements') as Control;
            // if (!this.readonly && parent)
            //     this._dragger = new ContainerDragger(this, parent, this);
            // this._size = this.getAttribute('containerSize', true, {});
            // this.updateContainerSize();
            this.initEventListener();
        }
        setActive() {
            const pageRows = document.querySelectorAll('ide-row');
            if (pageRows) {
                for (const row of pageRows) {
                    row.classList.remove('active');
                }
            }
            const row = this.closest('ide-row');
            row && row.classList.add('active');
        }
        initEventListener() {
            this.onClick = (target, event) => this.setActive();
        }
        // private updateContainerSize() {
        //     const sizeWidth = this.size.width || 'none';
        //     const sizeHeight = this.size.height || 'none';
        //     if (this.pageSectionWrapper) {
        //         this.pageSectionWrapper.maxWidth = sizeWidth;
        //         this.pageSectionWrapper.maxHeight = sizeHeight;
        //         this.pageSectionWrapper.margin = { top: 'auto', bottom: 'auto', left: 'auto', right: 'auto' };
        //     }
        //     if (this.pnlLoading) {
        //         this.pnlLoading.maxWidth = sizeWidth;
        //         this.pnlLoading.maxHeight = sizeHeight;
        //     }
        //     if (this.pnlMain) {
        //         this.pnlMain.maxWidth = sizeWidth;
        //         this.pnlMain.maxHeight = sizeHeight;
        //     }
        // }
        clear() {
            this.currentToolbar = null;
            this.toolbarList = null;
            this.pnlMain.clearInnerHTML();
        }
        async createToolbar(value) {
            let toolbar = await index_19.IDEToolbar.create({});
            toolbar.readonly = this._readonly;
            toolbar.rowId = this.rowId;
            toolbar.elementId = value.id;
            await toolbar.fetchModule(value);
            return toolbar;
        }
        // TODO
        async setData(rowId, value) {
            var _a;
            this.id = value.id;
            this.rowId = rowId;
            if (value.type === 'primitive') {
                if (this.currentToolbar) {
                    this.currentToolbar.setProperties(value.properties);
                    value.tag && this.currentToolbar.setTag(value.tag);
                }
                else {
                    this.currentToolbar = await this.createToolbar(value);
                    this.currentToolbar.parent = this.pnlMain;
                    this.pnlMain.appendChild(this.currentToolbar);
                    if (!index_20.isEmpty(value.properties))
                        this.currentToolbar.setProperties(value.properties);
                    value.tag && this.currentToolbar.setTag(value.tag);
                }
            }
            else if ((_a = value.elements) === null || _a === void 0 ? void 0 : _a.length) {
                if (this.toolbarList.length) {
                    for (let i = 0; i < value.elements.length; i++) {
                        const element = value.elements[i];
                        const toolbar = this.toolbarList[i];
                        if (toolbar) {
                            toolbar.setProperties(element.properties);
                            element.tag && toolbar.setTag(element.tag);
                        }
                    }
                }
                else {
                    const stack = this.$render("i-vstack", null);
                    for (let i = 0; i < value.elements.length; i++) {
                        const element = value.elements[i];
                        const toolbar = await this.createToolbar(element);
                        if (!index_20.isEmpty(element.properties))
                            toolbar.setProperties(element.properties);
                        element.tag && toolbar.setTag(element.tag);
                        toolbar.parent = stack;
                        stack.appendChild(toolbar);
                        this.toolbarList.push(toolbar);
                    }
                    stack.parent = this.pnlMain;
                    this.pnlMain.appendChild(stack);
                }
            }
        }
        render() {
            return (this.$render("i-panel", { id: 'pnlPageSection', maxWidth: "100%", maxHeight: "100%", height: "100%" },
                this.$render("i-panel", { id: "pageSectionWrapper", width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", padding: { top: '1.5rem', bottom: '1.5rem' } },
                    this.$render("i-panel", { id: "pnlMain", maxWidth: "100%", maxHeight: "100%" })),
                this.$render("i-panel", { id: "pnlBack", position: "absolute", width: 15, height: "100%", top: "0px", right: "-18px", zIndex: 999, visible: false, class: "back-block" })));
        }
    };
    PageSection = __decorate([
        components_17.customElements('ide-section')
    ], PageSection);
    exports.PageSection = PageSection;
});
define("@scom/scom-page-builder/page/pageFooter.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_18) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_18.Styles.Theme.ThemeVars;
    components_18.Styles.cssRule('scpage-page-footer', {
        width: '100%',
        background: Theme.background.main,
        borderTop: '1px solid #dfe5eb',
        $nest: {
            '&.sticky': {
                //@ts-ignore
                position: 'fixed !important',
                bottom: '0',
            }
        }
    });
});
define("@scom/scom-page-builder/page/pageFooter.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/assets.ts", "@scom/scom-page-builder/page/pageFooter.css.ts"], function (require, exports, components_19, assets_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageFooter = void 0;
    const Theme = components_19.Styles.Theme.ThemeVars;
    let PageFooter = class PageFooter extends components_19.Module {
        constructor(parent) {
            super(parent);
            this._sticky = false;
        }
        async init() {
            super.init();
        }
        get footer() {
            return this._footer;
        }
        set footer(value) {
            this._footer = value;
            this.lbFooter.caption = value;
        }
        get sticky() {
            return this._sticky;
        }
        set sticky(value) {
            this._sticky = value;
            this._sticky
                ? this.classList.add('sticky')
                : this.classList.remove('sticky');
        }
        render() {
            return (this.$render("i-hstack", { class: "footer", justifyContent: "start", alignItems: "center", padding: { left: 20, right: 20, top: 10, bottom: 10 } },
                this.$render("i-image", { height: 30, width: 30, url: assets_1.default.icons.logo, margin: { right: 10 } }),
                this.$render("i-panel", null,
                    this.$render("i-label", { id: "lbFooter", font: { color: Theme.text.primary } })),
                this.$render("i-panel", null)));
        }
    };
    PageFooter = __decorate([
        components_19.customElements('scpage-page-footer')
    ], PageFooter);
    exports.PageFooter = PageFooter;
});
define("@scom/scom-page-builder/page/pageRow.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_20) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_20.Styles.Theme.ThemeVars;
    components_20.Styles.cssRule('#editor', {
        $nest: {
            '.row-actions-bar': {
                opacity: 0,
                zIndex: 10,
                position: 'absolute',
                top: '0',
                left: '-3em',
                width: '34px',
                padding: 0,
                transition: 'opacity .3s .3s cubic-bezier(0.4,0,0.2,1), visibility 0s .2s',
                $nest: {
                    '.actions': {
                        display: 'flex',
                        justifyContent: 'center',
                        maxHeight: '30px',
                        cursor: 'pointer',
                        $nest: {
                            svg: {
                                width: '14px',
                                fill: '#80868b'
                            }
                        }
                    },
                    '&:hover': {
                        opacity: '1 !important',
                        visibility: 'initial',
                        $nest: {
                            '> i-panel': {
                                boxShadow: '0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)'
                            }
                        }
                    }
                }
            },
            'ide-row:hover': {
                $nest: {
                    '.row-actions-bar': {
                        opacity: '1 !important',
                        transition: 'opacity .3s .3s cubic-bezier(0.4,0,0.2,1), visibility 0s .2s',
                        $nest: {
                            '> i-panel': {
                                boxShadow: '0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)'
                            }
                        }
                    }
                }
            },
            '.hidden': {
                display: 'none'
            }
        }
    });
    components_20.Styles.cssRule('ide-row', {
        display: 'block',
        position: 'relative',
        transition: 'translate .3s ease-in',
        border: '2px solid transparent',
        $nest: {
            '&.dragenter': {
                border: '2px solid #1976D2'
            },
            '.drag-stack': {
                visibility: 'hidden',
                opacity: 0,
                cursor: 'move',
                zIndex: 10,
                $nest: {
                    '.main-drag': {
                        paddingLeft: 7,
                        width: 15,
                        height: 22,
                        overflow: 'hidden'
                    }
                }
            },
            '&.dropzone:hover': {
                $nest: {
                    '.drag-stack': {
                        visibility: 'initial',
                        opacity: 0.48,
                        transition: 'opacity .3s .3s cubic-bezier(0.4,0,0.2,1),visibility 0s .2s'
                    }
                }
            },
            '&.disabled:hover': {
                cursor: 'default',
                backgroundColor: 'inherit'
            },
            'h1, h2, h3, h4, h5, h6': {
                margin: 0
            },
            textarea: {
                resize: 'none'
            },
            '&.active, &:focus': {
                border: `2px solid ${Theme.colors.primary.main}`,
                transition: 'border ease-in .2s'
            },
            '.is-dragenter': {
                background: '#cae5fbc4',
                border: `1px solid ${Theme.colors.primary.main}`,
                height: '100%',
                opacity: 1
            },
            '.rectangle': {
                display: 'none',
                position: 'absolute',
                top: 0,
                height: '100%',
                border: 'solid 2px blue'
            },
            '.border-x-dotted': {
                borderLeft: 'dotted 1px black',
                borderRight: 'dotted 1px black'
            },
            '.border-dotted': {
                border: 'dotted 1px black'
            }
        }
    });
});
define("@scom/scom-page-builder/page/pageRow.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/const/index.ts", "@scom/scom-page-builder/store/index.ts", "@scom/scom-page-builder/utility/index.ts", "@scom/scom-page-builder/page/pageRow.css.ts"], function (require, exports, components_21, index_22, index_23, index_24) {
    "use strict";
    var PageRow_1;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageRow = void 0;
    let PageRow = PageRow_1 = class PageRow extends components_21.Module {
        constructor(parent) {
            super(parent);
            this.isResizing = false;
            this.rowId = '';
            this.isCloned = true;
            this.isChanged = true;
            this.setData = this.setData.bind(this);
        }
        get data() {
            return this.rowId ? index_23.pageObject.getRow(this.rowId) : this.rowData;
        }
        initEventBus() {
            components_21.application.EventBus.register(this, index_22.EVENT.ON_RESIZE, this.onResized);
        }
        init() {
            this._readonly = this.getAttribute('readonly', true, false);
            super.init();
            this.renderFixedGrid();
            this.initEventBus();
            this.initEventListeners();
        }
        async createNewElement(i) {
            const sectionData = this.data.elements[i];
            const pageSection = (this.$render("ide-section", { readonly: this._readonly, display: "block", maxWidth: "100%", maxHeight: "100%", position: "relative" }));
            if (!this._readonly) {
                pageSection.setAttribute('draggable', 'true');
                pageSection.style.gridRow = '1';
                pageSection.style.gridColumn = `${sectionData.column || 1} / span ${sectionData.columnSpan || 1}`;
                pageSection.setAttribute('data-column', `${sectionData.column || 1}`);
                pageSection.setAttribute('data-column-span', `${sectionData.columnSpan || 1}`);
            }
            pageSection.visible = !!sectionData;
            this.pnlRow.appendChild(pageSection);
            await pageSection.setData(this.rowId, sectionData);
            return pageSection;
        }
        async clearData() {
            const children = this.pnlRow.querySelectorAll('ide-section');
            if (children && children.length)
                children.forEach((item) => item.remove());
        }
        async setData(rowData) {
            this.clearData();
            const { id, row, image, elements, backgroundColor } = rowData;
            this.id = `row-${id}`;
            this.rowId = id;
            this.rowData = rowData;
            this.setAttribute('data-row', `${row}`);
            if (image)
                this.background.image = image;
            else if (backgroundColor)
                this.background.color = backgroundColor;
            this.isCloned = this.parentElement.nodeName !== 'BUILDER-HEADER';
            this.isChanged = this.parentElement.nodeName !== 'BUILDER-HEADER';
            if (elements && elements.length > 0) {
                for (let i = 0; i < elements.length; i++) {
                    await this.createNewElement(i);
                }
            }
            this.actionsBar.minHeight = '100%';
        }
        onOpenRowSettingsDialog() {
            this.mdRowSetting.show();
        }
        onSaveRowSettings(color) {
            if (this.data) {
                this.data.backgroundColor = color;
                this.style.backgroundColor = color;
            }
        }
        async onClone() {
            const rowData = index_23.pageObject.getRow(this.rowId);
            if (!rowData)
                return;
            components_21.application.EventBus.dispatch(index_22.EVENT.ON_CLONE, { rowData, id: this.id });
        }
        onResized(data) { }
        onDeleteRow() {
            const rowCmd = new index_24.ElementCommand(this, this.parent, this.data, true);
            index_24.commandHistory.execute(rowCmd);
        }
        onMoveUp() {
            this.actionsBar.classList.add('hidden');
            this.dragStack.classList.add('hidden');
            this.background = { color: '#f2f2f2' };
        }
        onMoveDown() {
            this.actionsBar.classList.remove('hidden');
            this.dragStack.classList.remove('hidden');
            this.background = { color: 'initial' };
        }
        renderFixedGrid() {
            this.pnlRow.clearInnerHTML();
            this.pnlRow.appendChild(this.$render("i-panel", { class: "rectangle" }));
            const grid = (this.$render("i-grid-layout", { position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px", class: "fixed-grid" }));
            for (let i = 0; i < 12; i++) {
                const elm = this.$render("i-panel", { class: "fixed-grid-item" });
                elm.setAttribute('data-column', `${i + 1}`);
                elm.style.gridColumn = `${i + 1}`;
                grid.append(elm);
            }
            this.pnlRow.appendChild(grid);
        }
        initEventListeners() {
            let self = this;
            let newWidth = 0;
            let newHeight = 0;
            let currentDot;
            let startX = 0;
            let startY = 0;
            let toolbar;
            let grids = document.getElementsByClassName('grid');
            const gapWidth = 15;
            const gridColumnWidth = (this.pnlRow.offsetWidth - gapWidth * 11) / 12;
            for (const grid of grids) {
                const gridElm = grid;
                gridElm.templateColumns = [`repeat(12, ${gridColumnWidth}px)`];
                gridElm.gap = { column: `${gapWidth}px` };
            }
            let fixedGrids = document.getElementsByClassName('fixed-grid');
            for (const fixedGrid of fixedGrids) {
                const fixedGridElm = fixedGrid;
                fixedGridElm.templateColumns = [`repeat(12, ${gridColumnWidth}px)`];
                fixedGridElm.gap = { column: `${gapWidth}px` };
            }
            function addDottedLines() {
                const fixedGridItems = document.getElementsByClassName('fixed-grid-item');
                for (let i = 0; i < fixedGridItems.length; i++) {
                    fixedGridItems[i].classList.add('border-x-dotted');
                }
                const fixedGrids = document.getElementsByClassName('fixed-grid');
                for (let i = 0; i < fixedGrids.length; i++) {
                    fixedGrids[i].classList.add('border-dotted');
                }
            }
            function removeDottedLines() {
                const fixedGridItems = document.getElementsByClassName('fixed-grid-item');
                for (let i = 0; i < fixedGridItems.length; i++) {
                    fixedGridItems[i].classList.remove('border-x-dotted');
                }
                const fixedGrids = document.getElementsByClassName('fixed-grid');
                for (let i = 0; i < fixedGrids.length; i++) {
                    fixedGrids[i].classList.remove('border-dotted');
                }
            }
            this.addEventListener('mousedown', (e) => {
                const target = e.target;
                const parent = target.closest('.resize-stack');
                if (!parent)
                    return;
                e.preventDefault();
                const resizableElm = target.closest('ide-section');
                self.currentElement = resizableElm;
                toolbar = self.currentElement.querySelector('ide-toolbar');
                addDottedLines();
                this.isResizing = true;
                currentDot = parent;
                startX = e.clientX;
                startY = e.clientY;
                this.currentWidth = toolbar.offsetWidth;
                this.currentHeight = toolbar.offsetHeight;
            });
            document.addEventListener('mouseup', (e) => {
                e.preventDefault();
                if (!toolbar)
                    return;
                this.isResizing = false;
                removeDottedLines();
                toolbar.width = 'initial';
                toolbar.height = 'initial';
                self.currentElement.width = 'initial';
                self.currentElement.height = 'initial';
                const resizeCmd = new index_24.ResizeElementCommand(self.currentElement, this.currentWidth, this.currentHeight, newWidth, newHeight);
                index_24.commandHistory.execute(resizeCmd);
                self.currentElement.left = 'initial';
                self.currentElement = null;
                toolbar = null;
            });
            document.addEventListener('mousemove', (e) => {
                if (!this.isResizing || !toolbar)
                    return;
                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;
                if (currentDot.classList.contains('topLeft')) {
                    newWidth = this.currentWidth - deltaX;
                    newHeight = this.currentHeight - deltaY;
                    self.currentElement.left = deltaX + 'px';
                    toolbar.width = newWidth + 'px';
                    toolbar.height = newHeight + 'px';
                }
                else if (currentDot.classList.contains('topRight')) {
                    newWidth = this.currentWidth + deltaX;
                    newHeight = this.currentHeight - deltaY;
                    toolbar.width = newWidth + 'px';
                    toolbar.height = newHeight + 'px';
                }
                else if (currentDot.classList.contains('bottomLeft')) {
                    newWidth = this.currentWidth - deltaX;
                    newHeight = this.currentHeight + deltaY;
                    self.currentElement.left = deltaX + 'px';
                    toolbar.width = newWidth + 'px';
                    toolbar.height = newHeight + 'px';
                }
                else if (currentDot.classList.contains('bottomRight')) {
                    newWidth = this.currentWidth + deltaX;
                    newHeight = this.currentHeight + deltaY;
                    toolbar.width = newWidth + 'px';
                    toolbar.height = newHeight + 'px';
                }
                else if (currentDot.classList.contains('top')) {
                    newHeight = this.currentHeight - deltaY;
                    toolbar.height = newHeight + 'px';
                }
                else if (currentDot.classList.contains('bottom')) {
                    newHeight = this.currentHeight + deltaY;
                    toolbar.height = newHeight + 'px';
                }
                else if (currentDot.classList.contains('left')) {
                    newWidth = this.currentWidth - deltaX;
                    self.currentElement.left = deltaX + 'px';
                    toolbar.width = newWidth + 'px';
                }
                else if (currentDot.classList.contains('right')) {
                    newWidth = this.currentWidth + deltaX;
                    toolbar.width = newWidth + 'px';
                }
            });
            this.addEventListener('dragstart', function (event) {
                const eventTarget = event.target;
                if (eventTarget instanceof PageRow_1)
                    return;
                const target = eventTarget.closest('ide-section');
                const toolbar = target === null || target === void 0 ? void 0 : target.querySelector('ide-toolbar');
                const cannotDrag = toolbar &&
                    (toolbar.classList.contains('is-editing') ||
                        toolbar.classList.contains('is-setting'));
                if (target && !cannotDrag) {
                    self.currentElement = target;
                    self.currentElement.opacity = 0;
                    addDottedLines();
                }
                else {
                    event.preventDefault();
                }
            });
            document.addEventListener('drag', function (event) { });
            document.addEventListener('dragend', function (event) {
                if (self.currentElement)
                    self.currentElement.opacity = 1;
                self.currentElement = null;
                removeDottedLines();
                let rectangles = document.getElementsByClassName('rectangle');
                for (const rectangle of rectangles) {
                    rectangle.style.display = 'none';
                }
                let backBlocks = document.getElementsByClassName('back-block');
                for (const block of backBlocks) {
                    block.visible = false;
                    block.classList.remove('is-dragenter');
                }
            });
            document.addEventListener('dragenter', function (event) {
                var _a, _b, _c;
                const eventTarget = event.target;
                if (!eventTarget || !self.currentElement)
                    return;
                const target = eventTarget.closest('.fixed-grid-item');
                if (target) {
                    const column = Number(target.getAttribute('data-column'));
                    const rectangle = target
                        .closest('.fixed-grid')
                        .parentNode.querySelector(`.rectangle`);
                    rectangle.style.display = 'block';
                    const columnSpan = Number(self.currentElement.dataset.columnSpan);
                    const colSpan = Math.min(columnSpan, 12);
                    const colStart = Math.min(column, 12 - colSpan + 1);
                    rectangle.style.left = (gridColumnWidth + gapWidth) * (colStart - 1) + 'px';
                    rectangle.style.width =
                        gridColumnWidth * columnSpan + gapWidth * (columnSpan - 1) + 'px';
                }
                else {
                    const section = eventTarget.closest('ide-section');
                    if (section && !section.isSameNode(self.currentElement)) {
                        const curElmCol = Number((_a = section === null || section === void 0 ? void 0 : section.dataset) === null || _a === void 0 ? void 0 : _a.column);
                        const curElmColSpan = Number((_b = section === null || section === void 0 ? void 0 : section.dataset) === null || _b === void 0 ? void 0 : _b.columnSpan);
                        const sections = Array.from((_c = section.closest('#pnlRow')) === null || _c === void 0 ? void 0 : _c.querySelectorAll('ide-section'));
                        const nextElm = sections.find((el) => {
                            const column = Number(el.dataset.column);
                            return !isNaN(column) && (curElmCol + curElmColSpan === column);
                        });
                        const showHiddenBlock = curElmCol === 1 && (curElmCol + curElmColSpan === index_24.MAX_COLUMN + 1) ||
                            (nextElm) ||
                            (curElmCol + curElmColSpan === index_24.MAX_COLUMN + 1);
                        if (showHiddenBlock) {
                            const hiddenBlock = section.querySelector('.back-block');
                            hiddenBlock && (hiddenBlock.visible = true);
                        }
                    }
                    const backBlock = eventTarget.closest('.back-block');
                    backBlock && backBlock.classList.add('is-dragenter');
                }
            });
            document.addEventListener('dragover', function (event) {
                event.preventDefault();
            });
            document.addEventListener('dragleave', function (event) {
                const eventTarget = event.target;
                const target = eventTarget.closest('.fixed-grid-item');
                if (target) {
                    target.style.border = '';
                    let rectangles = document.getElementsByClassName('rectangle');
                    for (const rectangle of rectangles) {
                        rectangle.style.display = 'none';
                    }
                }
                else {
                    const block = eventTarget.closest('.back-block');
                    if (block) {
                        block.visible = false;
                        block.classList.remove('is-dragenter');
                    }
                }
            });
            document.addEventListener('drop', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (!self.currentElement)
                    return;
                const eventTarget = event.target;
                const target = eventTarget.closest('.fixed-grid-item');
                if (target) {
                    const dragCmd = new index_24.DragElementCommand(self.currentElement, target);
                    index_24.commandHistory.execute(dragCmd);
                }
                else {
                    const isPageRow = eventTarget.classList.contains('page-row');
                    const dropElm = (isPageRow
                        ? eventTarget.querySelector('.is-dragenter')
                        : eventTarget.closest('.is-dragenter'));
                    if (dropElm) {
                        dropElm.classList.remove('is-dragenter');
                        const dragCmd = new index_24.DragElementCommand(self.currentElement, dropElm);
                        index_24.commandHistory.execute(dragCmd);
                    }
                }
            });
        }
        render() {
            return (this.$render("i-panel", { id: "pnlRowWrap", class: 'page-row', width: "100%", height: "100%", padding: { left: '3rem', right: '3rem' } },
                this.$render("i-vstack", { id: 'actionsBar', class: "row-actions-bar", verticalAlignment: "center" },
                    this.$render("i-panel", { background: { color: '#fff' }, border: { radius: '20px' }, maxWidth: "100%", maxHeight: "100%" },
                        this.$render("i-panel", { id: "btnSetting", class: "actions", tooltip: { content: 'Section colors', placement: 'right' }, visible: this.isChanged, onClick: this.onOpenRowSettingsDialog },
                            this.$render("i-icon", { name: "palette" })),
                        this.$render("i-panel", { id: "btnClone", class: "actions", tooltip: { content: 'Duplicate section', placement: 'right' }, visible: this.isCloned, onClick: this.onClone },
                            this.$render("i-icon", { name: "clone" })),
                        this.$render("i-panel", { id: "btnDelete", class: "actions delete", tooltip: { content: 'Delete section', placement: 'right' }, onClick: this.onDeleteRow },
                            this.$render("i-icon", { name: "trash" })))),
                this.$render("i-vstack", { id: "dragStack", height: "100%", verticalAlignment: "center", position: "absolute", left: "0px", top: "0px", class: "drag-stack" },
                    this.$render("i-grid-layout", { verticalAlignment: "center", autoFillInHoles: true, columnsPerRow: 2, class: "main-drag" },
                        this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                        this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                        this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                        this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                        this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                        this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                        this.$render("i-icon", { name: "circle", width: 3, height: 3 }),
                        this.$render("i-icon", { name: "circle", width: 3, height: 3 }))),
                this.$render("i-grid-layout", { id: "pnlRow", width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", position: "relative", class: "grid" }),
                this.$render("ide-row-settings-dialog", { id: "mdRowSetting", onSave: this.onSaveRowSettings.bind(this) })));
        }
    };
    __decorate([
        components_21.observable()
    ], PageRow.prototype, "isCloned", void 0);
    __decorate([
        components_21.observable()
    ], PageRow.prototype, "isChanged", void 0);
    PageRow = PageRow_1 = __decorate([
        components_21.customElements('ide-row')
    ], PageRow);
    exports.PageRow = PageRow;
});
define("@scom/scom-page-builder/page/pageRows.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_22) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_22.Styles.Theme.ThemeVars;
    components_22.Styles.cssRule('ide-rows', {
        $nest: {
            '.drag-overlay': {
                zIndex: '-1',
                display: 'none',
                // boxShadow: '0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
                transition: 'all .5s ease-in'
            }
        }
    });
});
define("@scom/scom-page-builder/page/pageRows.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/page/pageSection.tsx", "@scom/scom-page-builder/page/pageRow.tsx", "@scom/scom-page-builder/page/pageFooter.tsx", "@scom/scom-page-builder/const/index.ts", "@scom/scom-page-builder/utility/index.ts", "@scom/scom-page-builder/store/index.ts", "@scom/scom-page-builder/page/pageRows.css.ts"], function (require, exports, components_23, pageSection_1, pageRow_1, pageFooter_1, index_25, index_26, index_27) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageFooter = exports.PageSection = exports.PageRows = void 0;
    Object.defineProperty(exports, "PageSection", { enumerable: true, get: function () { return pageSection_1.PageSection; } });
    Object.defineProperty(exports, "PageFooter", { enumerable: true, get: function () { return pageFooter_1.PageFooter; } });
    const Theme = components_23.Styles.Theme.ThemeVars;
    let PageRows = class PageRows extends components_23.Module {
        constructor(parent) {
            super(parent);
            this.isDragging = false;
            this.mouseDownHandler = this.mouseDownHandler.bind(this);
            this.mouseUpHandler = this.mouseUpHandler.bind(this);
            this.onMoveHandler = this.onMoveHandler.bind(this);
            this.initEventBus();
            this.getRows = this.getRows.bind(this);
            this.setRows = this.setRows.bind(this);
        }
        initEventBus() {
            components_23.application.EventBus.register(this, index_25.EVENT.ON_CLONE, this.onClone);
        }
        _handleClick(event) {
            if (this._readonly)
                return super._handleClick(event, true);
            const toolbars = document.querySelectorAll('ide-toolbar');
            for (const toolbar of toolbars) {
                toolbar.hideToolbars();
            }
            return super._handleClick(event, true);
        }
        init() {
            this._readonly = this.getAttribute('readonly', true, false);
            this.draggable = this.getAttribute('draggable', true, false);
            super.init();
        }
        get draggable() {
            return this._draggable;
        }
        set draggable(value) {
            if (this._draggable === value)
                return;
            this._draggable = value;
            this.handleDrag();
        }
        handleDrag() {
            if (!this.pnlRows)
                return;
            const rows = Array.from(this.pnlRows.querySelectorAll('ide-row'));
            if (!(rows === null || rows === void 0 ? void 0 : rows.length))
                return;
            rows.forEach((row, rowid) => {
                this.initDragEvent(row);
            });
        }
        initDragEvent(row) {
            const dragStack = row.querySelector('#dragStack');
            if (!dragStack)
                return;
            if (this.draggable) {
                row.classList.add('dropzone');
                dragStack.addEventListener('mousedown', this.mouseDownHandler, false);
            }
            else {
                dragStack.removeEventListener('mousedown', this.mouseDownHandler, false);
            }
            dragStack.ondragstart = function () {
                return false;
            };
        }
        mouseDownHandler(event) {
            event.stopPropagation();
            const target = event.target;
            const currentDragEl = target instanceof pageRow_1.PageRow ? target : target.closest('ide-row');
            if (currentDragEl && !this.isDragging) {
                this.isDragging = true;
                this.currentRow = currentDragEl;
                const data = this.currentRow.getBoundingClientRect();
                this.currentPosition = data;
                this.pnlRowOverlay.width = this.currentPosition.width;
                this.pnlRowOverlay.height = this.currentPosition.height;
                this.pnlRowOverlay.zIndex = '1';
                this.pnlRowOverlay.left = this.currentPosition.left;
                this.pnlRowOverlay.top = this.currentPosition.top;
                document.addEventListener('mousemove', this.onMoveHandler);
                document.addEventListener('mouseup', this.mouseUpHandler);
                this.click();
            }
        }
        mouseUpHandler(event) {
            document.removeEventListener('mousemove', this.onMoveHandler);
            document.removeEventListener('mouseup', this.mouseUpHandler);
            this.resetCurrentRow();
            const target = event.target;
            const dropElm = target instanceof pageRow_1.PageRow ? target : target.closest('ide-row');
            if (!dropElm || !dropElm.classList.contains('dropzone')) {
                event.preventDefault();
                this.pnlRowOverlay.visible = false;
                this.pnlRowOverlay.zIndex = '-1';
                return;
            }
            dropElm.classList.remove("dragenter");
            if (!this.currentRow) {
                event.preventDefault();
                this.pnlRowOverlay.visible = false;
                this.pnlRowOverlay.zIndex = '-1';
                return;
            }
            if (dropElm && !this.currentRow.isSameNode(dropElm)) {
                // let dragIndex = 0;
                // let dropIndex = 0;
                // const rows = this.pnlRows.querySelectorAll('ide-row');
                // for (let i = 0; i < rows.length; i++) {
                //     if (this.currentRow.isEqualNode(rows[i])) { dragIndex = i; }
                //     if (dropElm.isEqualNode(rows[i])) { dropIndex = i; }
                // }
                // const [dragRowData] = this.rows.splice(dragIndex, 1);
                // this.rows.splice(dropIndex, 0, dragRowData);
                // if (dragIndex < dropIndex) {
                //     this.pnlRows.insertBefore(this.currentRow, dropElm.nextSibling);
                // } else {
                //     this.pnlRows.insertBefore(this.currentRow, dropElm);
                // }
                const moveRowCmd = new index_26.MoveElementCommand(this.currentRow, dropElm, this.pnlRows, index_27.pageObject.sections);
                index_26.commandHistory.execute(moveRowCmd);
            }
            this.currentRow = null;
            this.currentPosition = null;
            this.isDragging = false;
        }
        resetCurrentRow() {
            if (!this.currentRow)
                return;
            this.currentRow.style.transform = 'none';
            this.currentRow.classList.remove('dragging');
            this.pnlRowOverlay.visible = false;
            this.pnlRowOverlay.zIndex = '-1';
            this.currentRow.onMoveDown();
        }
        updateCurrentRow(x, y) {
            this.currentRow.classList.add('dragging');
            this.currentRow.style.transform = `translate(${x}px, ${y}px)`;
            this.currentRow.style.width = this.currentPosition.width;
            this.currentRow.style.height = this.currentPosition.height;
            this.currentRow.onMoveUp();
        }
        onMoveHandler(event) {
            let x = event.clientX;
            let y = event.clientY;
            const target = event.target;
            const dropZone = target instanceof pageRow_1.PageRow ? target : target.closest('ide-row');
            const rows = this.pnlRows.querySelectorAll('ide-row');
            rows.forEach(row => {
                row.classList.remove("dragenter");
            });
            if (dropZone && !dropZone.isEqualNode(this.currentRow) && dropZone.classList.contains('dropzone'))
                dropZone.classList.add('dragenter');
            this.pnlRowOverlay.visible = true;
            this.pnlRowOverlay.zIndex = '1';
            this.updateCurrentRow(x - this.currentPosition.x, y - this.currentPosition.y);
        }
        async getRows() {
            // const rows = this.pnlRows.querySelectorAll('ide-row');
            // const rowDataList: IPageSection[] = [];
            // for (const row of rows) {
            //     const rowData = await (row as PageRow).getData();
            //     rowDataList.push(rowData);
            // }
            // return rowDataList;
            return index_27.pageObject.sections;
        }
        async setRows(rows) {
            index_27.pageObject.sections = rows;
            await this.renderRows();
        }
        async renderRows() {
            var _a;
            this.clearRows();
            for (let i = 0; i < index_27.pageObject.sections.length; i++) {
                const rowData = index_27.pageObject.sections[i];
                const pageRow = (this.$render("ide-row", { maxWidth: "100%", maxHeight: "100%" }));
                if (!this._readonly) {
                    pageRow.border = { top: { width: '1px', style: 'dashed', color: Theme.divider } };
                    this.initDragEvent(pageRow);
                }
                pageRow.visible = !!((_a = rowData === null || rowData === void 0 ? void 0 : rowData.elements) === null || _a === void 0 ? void 0 : _a.length);
                pageRow.parent = this.pnlRows;
                this.pnlRows.append(pageRow);
                await pageRow.setData(rowData);
            }
        }
        async appendRow(rowData) {
            var _a;
            const pageRow = (this.$render("ide-row", { maxWidth: "100%", maxHeight: "100%" }));
            if (!this._readonly) {
                pageRow.border = { top: { width: '1px', style: 'dashed', color: Theme.divider } };
                this.initDragEvent(pageRow);
            }
            pageRow.visible = !!((_a = rowData === null || rowData === void 0 ? void 0 : rowData.elements) === null || _a === void 0 ? void 0 : _a.length);
            const addRowCmd = new index_26.ElementCommand(pageRow, this.pnlRows, rowData);
            index_26.commandHistory.execute(addRowCmd);
            await pageRow.setData(rowData);
            return pageRow;
        }
        async onClone(data) {
            const { rowData, id } = data;
            const row = this.pnlRows.querySelector(`#${id}`);
            if (!row)
                return;
            const clonedData = JSON.parse(JSON.stringify(rowData));
            const newId = index_26.generateUUID();
            const newElements = clonedData.elements.map((el) => {
                el.id = index_26.generateUUID();
                return el;
            });
            const newRow = await this.appendRow(Object.assign(Object.assign({}, clonedData), { elements: newElements, id: newId }));
            this.pnlRows.insertBefore(newRow, row);
        }
        clearRows() {
            this.pnlRows.clearInnerHTML();
        }
        set footerVisible(value) {
            this.pageFooter.visible = value;
        }
        set footerSticky(value) {
            this.pageFooter.sticky = value;
        }
        set footerCopyright(value) {
            this.pageFooter.footer = value;
        }
        // async setPaging(pages: IPageData[], currPage: IPageData) {
        //     await this.pagePaging.setPaging(pages, currPage);
        // }
        // setPagingVisibility(pagingVisible: boolean) {
        //     this.pagePaging.setVisible(pagingVisible);
        // }
        // updatePaging() {
        //     this.pagePaging.renderUI();
        // }
        render() {
            return (this.$render("i-panel", { height: "100%" },
                this.$render("i-vstack", { id: 'pnlRows', class: 'container', verticalAlignment: "center", maxWidth: "100%", height: "100%" }),
                this.$render("i-panel", { id: "pnlRowOverlay", position: 'fixed', zIndex: -1, visible: false, opacity: 0.4, background: { color: '#ddd' }, class: 'drag-overlay' }),
                this.$render("scpage-page-footer", { id: 'pageFooter', class: 'boxed-style', visible: false })));
        }
    };
    PageRows = __decorate([
        components_23.customElements('ide-rows')
    ], PageRows);
    exports.PageRows = PageRows;
});
define("@scom/scom-page-builder/page/pageSidebar.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_24) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_24.Styles.Theme.ThemeVars;
    components_24.Styles.cssRule('ide-sidebar', {
        borderRight: `1px solid ${Theme.divider}`,
        $nest: {
            '.block-image': {
                maxHeight: 74,
                boxShadow: '0 0 0 1px rgb(218 220 224)',
                overflow: 'hidden'
            },
            '.pointer': {
                cursor: 'pointer'
            },
            '.pointer:hover': {
                background: Theme.action.hover
            },
            '.insert-tabs': {
                $nest: {
                    'i-tab:not(.disabled).active': {
                        backgroundColor: 'transparent',
                        color: Theme.colors.primary.main,
                    },
                    'i-tab:not(.disabled).active .tab-item': {
                        color: Theme.colors.primary.main,
                        // borderBottom: `1px solid ${Theme.colors.primary.main}`
                    },
                    '.tab-item': {
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: Theme.text.primary,
                        fontFamily: Theme.typography.fontFamily
                    },
                    'i-tab:not(.disabled):hover': {
                        backgroundColor: Theme.action.hover
                    }
                }
            },
            'i-tabs i-tab:not(.disabled).active': {
                borderColor: 'transparent'
            }
        }
    });
});
define("@scom/scom-page-builder/page/pageSidebar.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/store/index.ts", "@scom/scom-page-builder/assets.ts", "@scom/scom-page-builder/const/index.ts", "@scom/scom-page-builder/interface/index.ts", "@scom/scom-page-builder/page/pageSidebar.css.ts"], function (require, exports, components_25, index_28, assets_2, index_29, index_30) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageSidebar = void 0;
    const Theme = components_25.Styles.Theme.ThemeVars;
    const GET_PAGE_BLOCK_URL = `https://data.scom.dev/api/v1/audit/auditedPageBlock?packageType=2`;
    const GET_CATEGORIES_URL = `https://data.scom.dev/api/v1/master/getPackageCategory?packageStatus=1&packageType=2`;
    const SHOW_DEV_PAGEBLOCK = true;
    const imageModule = {
        description: 'Image (dev)',
        localPath: 'modules/pageblocks/scom-image',
        name: index_30.ELEMENT_NAME.IMAGE,
        imgUrl: 'data:image/png;base64,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',
        local: true,
    };
    const buttonModule = {
        description: 'Button (dev)',
        localPath: 'modules/pageblocks/scom-button',
        name: "Button",
        imgUrl: 'data:image/png;base64,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',
        local: true,
    };
    const nftModule = {
        description: 'Nft (dev)',
        localPath: 'modules/pageblocks/pageblock-nft-minter',
        name: index_30.ELEMENT_NAME.NFT,
        imgUrl: 'data:image/png;base64,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',
        local: true,
    };
    const gemModule = {
        description: 'Gem (dev)',
        localPath: 'modules/pageblocks/pageblock-gem-token',
        name: index_30.ELEMENT_NAME.GEM_TOKEN,
        imgUrl: 'data:image/png;base64,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',
        local: true,
    };
    const randomizerModule = {
        description: 'Randomizer (dev)',
        localPath: 'modules/pageblocks/pageblock-randomizer',
        name: index_30.ELEMENT_NAME.RANDOMIZER,
        imgUrl: 'data:image/png;base64,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',
        local: true,
    };
    const devModules = [
        imageModule,
        buttonModule,
        nftModule
    ];
    const textboxModule = {
        description: 'Textbox (dev)',
        localPath: 'modules/pageblocks/pageblock-markdown-editor',
        name: index_30.ELEMENT_NAME.TEXTBOX,
        imgUrl: 'data:image/png;base64,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',
        local: true,
    };
    const firstDevModules = [
        textboxModule,
        imageModule
    ];
    let PageSidebar = class PageSidebar extends components_25.Module {
        constructor(parent) {
            super(parent);
            this._contentBlocks = [];
        }
        init() {
            this.onSelectModule = this.getAttribute('onSelectModule', true);
            super.init();
            this.renderUI();
        }
        async renderUI() {
            this.pageBlocks = await this.getModules('5');
            index_28.setPageBlocks(this.pageBlocks);
            this.renderFirstStack();
            // this.renderBlockStack();
            this.renderComponentList();
            // const categories = await this.getCategories();
        }
        onToggleBlock(source) {
            this.blockStack.visible = !this.blockStack.visible;
            const icon = source.querySelector('i-icon');
            icon && (icon.name = this.blockStack.visible ? 'angle-up' : 'angle-down');
        }
        onAddComponent(module, type) {
            components_25.application.EventBus.dispatch(index_29.EVENT.ON_ADD_ELEMENT, { type, module });
        }
        async getModules(category) {
            const request = new Request(`${GET_PAGE_BLOCK_URL}${category ? `&categories=${category}` : ''}`);
            const response = await fetch(request);
            let data = await response.json();
            if (SHOW_DEV_PAGEBLOCK) {
                const devPageblocks = await this.getDevPageBlocks();
                data = [...data, ...devPageblocks];
            }
            return data;
        }
        async getDevPageBlocks() {
            return [];
        }
        async getCategories() {
            const request = new Request(GET_CATEGORIES_URL);
            const response = await fetch(request);
            const data = await response.json();
            return data;
        }
        async renderFirstStack() {
            this.firstStack.clearInnerHTML();
            let components = [];
            try {
                const filterdModules = this.pageBlocks.filter((v) => {
                    return v.name === "@PageBlock/Scom Image" || v.name === '@PageBlock/Markdown Editor';
                });
                for (let module of filterdModules) {
                    if (module.name === "@PageBlock/Scom Image")
                        module.name = index_30.ELEMENT_NAME.IMAGE;
                    else if (module.name === "@PageBlock/Markdown Editor")
                        module.name = index_30.ELEMENT_NAME.TEXTBOX;
                    components.push(module);
                }
                // components = [...firstDevModules, ...filterdModules];
            }
            catch (_a) {
                components = [...firstDevModules];
            }
            let matchedModules = components;
            for (const module of matchedModules) {
                const moduleCard = (this.$render("i-vstack", { class: "text-center pointer", verticalAlignment: "center", horizontalAlignment: 'center', minWidth: 88, gap: "0.5rem", onClick: () => this.onAddComponent(module, 'primitive') },
                    this.$render("i-panel", null,
                        this.$render("i-image", { url: module.imgUrl, width: 24, height: 24, display: "block" })),
                    this.$render("i-label", { caption: module.name })));
                this.firstStack.append(moduleCard);
            }
        }
        renderBlockStack() {
            this._contentBlocks = [
                {
                    image: 'img/blocks/block1.svg',
                    columns: 2
                },
                {
                    image: 'img/blocks/block2.svg',
                    columns: 2
                },
                {
                    image: 'img/blocks/block3.svg',
                    columns: 2
                },
                {
                    image: 'img/blocks/block4.svg',
                    columns: 3
                }
            ];
            this.blockStack.clearInnerHTML();
            this._contentBlocks.forEach(block => {
                let config = { width: '100%', columns: block.columns };
                let sectionData = {};
                sectionData.toolList = [
                    index_29.textStyles,
                    {
                        caption: `<i-icon name="bold" width=${20} height=${20} fill="${Theme.text.primary}"></i-icon>`,
                        onClick: () => { }
                    },
                    {
                        caption: `<i-icon name="italic" width=${20} height=${20} fill="${Theme.text.primary}"></i-icon>`,
                        onClick: () => { }
                    },
                    {
                        caption: `<i-icon name="trash" width=${20} height=${20} fill="${Theme.text.primary}"></i-icon>`,
                        onClick: async () => { }
                    }
                ];
                sectionData.component = {
                    type: 'Input',
                    properties: {
                        minHeight: '2.5rem',
                        width: '100%',
                        minWidth: 200
                    }
                };
                this.blockStack.appendChild(this.$render("i-vstack", { class: "block-image pointer", verticalAlignment: "center", horizontalAlignment: "center" },
                    this.$render("i-image", { width: "auto", height: "100%", url: assets_2.default.fullPath(block.image) })));
            });
        }
        async renderComponentList(keyword) {
            this.componentsStack.clearInnerHTML();
            let components = [];
            // components = [...devModules];
            const filterdModules = this.pageBlocks.filter((v) => {
                return ['@PageBlock/NFT Minter', '@PageBlock/Gem Token', '@PageBlock/Randomizer'].includes(v.name);
            });
            for (let module of filterdModules) {
                if (module.name === "@PageBlock/NFT Minter")
                    module.name = index_30.ELEMENT_NAME.NFT;
                else if (module.name === "@PageBlock/Gem Token")
                    module.name = index_30.ELEMENT_NAME.GEM_TOKEN;
                else if (module.name === "@PageBlock/Randomizer")
                    module.name = index_30.ELEMENT_NAME.RANDOMIZER;
                components.push(module);
            }
            // components.push(randomizerModule);
            // components.push(gemModule);
            let matchedModules = components;
            if (keyword) {
                matchedModules = components.filter((v) => {
                    return v.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0 || v.description.toLowerCase().indexOf(keyword.toLowerCase()) >= 0;
                });
            }
            for (const module of matchedModules) {
                const moduleCard = (this.$render("i-hstack", { height: 48, verticalAlignment: "center", gap: "1rem", padding: { left: '1rem', right: '1rem' }, class: "pointer", onClick: () => this.onAddComponent(module, 'primitive') },
                    this.$render("i-panel", null,
                        this.$render("i-image", { url: module.imgUrl, width: 24, height: 24, display: "block" })),
                    this.$render("i-label", { caption: module.name, font: { weight: 600 } })));
                this.componentsStack.append(moduleCard);
            }
        }
        render() {
            return (this.$render("i-panel", { class: "navigator", height: '100%', maxWidth: "100%" },
                this.$render("i-tabs", { class: "insert-tabs" },
                    this.$render("i-tab", { caption: 'Components', background: { color: 'transparent' } },
                        this.$render("i-panel", { height: "100%", overflow: { y: 'hidden' } },
                            this.$render("i-grid-layout", { id: "firstStack", templateColumns: ['repeat(2, 1fr)'], templateRows: ['repeat(1, 5rem)'], margin: { top: 6 } }),
                            this.$render("i-vstack", { visible: false, border: { bottom: { width: 1, style: 'solid', color: Theme.divider }, top: { width: 1, style: 'solid', color: Theme.divider } } },
                                this.$render("i-hstack", { horizontalAlignment: "space-between", verticalAlignment: "center", padding: { top: 8, bottom: 8, left: '1.5rem', right: 0 }, class: "pointer", onClick: (source) => this.onToggleBlock(source) },
                                    this.$render("i-label", { caption: "Content blocks", font: { weight: 600, size: '0.75rem', transform: 'uppercase' } }),
                                    this.$render("i-icon", { name: "angle-down", fill: Theme.text.primary, width: 24, height: 24 })),
                                this.$render("i-grid-layout", { id: "blockStack", templateColumns: ['repeat(2, 1fr)'], gap: { column: 12, row: 12 }, border: { bottom: { width: 1, style: 'solid', color: Theme.divider } }, padding: { left: '8px', right: '8px', bottom: '1rem' } })),
                            this.$render("i-vstack", { id: "componentsStack", padding: { top: '8px', bottom: '8px' } }))))));
        }
    };
    PageSidebar = __decorate([
        components_25.customElements('ide-sidebar')
    ], PageSidebar);
    exports.PageSidebar = PageSidebar;
});
define("@scom/scom-page-builder/page/index.ts", ["require", "exports", "@scom/scom-page-builder/page/pageHeader.tsx", "@scom/scom-page-builder/page/pageSection.tsx", "@scom/scom-page-builder/page/pageFooter.tsx", "@scom/scom-page-builder/page/pageRows.tsx", "@scom/scom-page-builder/page/pageRow.tsx", "@scom/scom-page-builder/page/pageSidebar.tsx"], function (require, exports, pageHeader_1, pageSection_2, pageFooter_2, pageRows_1, pageRow_2, pageSidebar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageSidebar = exports.PageRow = exports.PageRows = exports.PageFooter = exports.PageSection = exports.PageHeader = void 0;
    Object.defineProperty(exports, "PageHeader", { enumerable: true, get: function () { return pageHeader_1.PageHeader; } });
    Object.defineProperty(exports, "PageSection", { enumerable: true, get: function () { return pageSection_2.PageSection; } });
    Object.defineProperty(exports, "PageFooter", { enumerable: true, get: function () { return pageFooter_2.PageFooter; } });
    Object.defineProperty(exports, "PageRows", { enumerable: true, get: function () { return pageRows_1.PageRows; } });
    Object.defineProperty(exports, "PageRow", { enumerable: true, get: function () { return pageRow_2.PageRow; } });
    Object.defineProperty(exports, "PageSidebar", { enumerable: true, get: function () { return pageSidebar_1.PageSidebar; } });
});
define("@scom/scom-page-builder/builder/builderHeader.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_26) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_26.Styles.Theme.ThemeVars;
    components_26.Styles.cssRule('builder-header', {
        $nest: {
            '#pnlHeader': {
                backgroundSize: 'cover',
                $nest: {
                    'ide-section': {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%'
                    },
                    '.has-header > input': {
                        color: 'rgba(255,255,255,1)'
                    },
                    'i-input > input': {
                        background: 'transparent',
                        boxShadow: 'none',
                        border: 'none',
                        color: Theme.text.primary,
                        paddingLeft: 15
                    },
                    '.page-title input': {
                        lineHeight: 1.333,
                        fontSize: '1rem',
                        textAlign: 'left',
                        fontWeight: 600
                    },
                    '#pnlConfig': {
                        opacity: 0,
                        $nest: {
                            'i-button': {
                                boxShadow: 'none'
                            }
                        }
                    },
                    '&:hover': {
                        $nest: {
                            '.page-title': {
                                transition: 'box-shadow 125ms cubic-bezier(0.4,0,0.2,1)',
                                $nest: {
                                    '&:hover, &:focus': {
                                        boxShadow: '0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%)'
                                    },
                                    '&:hover ~ .edit-stack': {
                                        opacity: 1,
                                        transition: 'opacity 125ms cubic-bezier(0.4,0,0.2,1)'
                                    }
                                }
                            },
                            '#pnlConfig': {
                                opacity: 1,
                                transition: 'opacity 125ms cubic-bezier(0.4,0,0.2,1)'
                            }
                        }
                    },
                    '.custom-box': {
                        boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)'
                    },
                    '.type': {
                        cursor: 'pointer',
                        $nest: {
                            '&.active': {
                                $nest: {
                                    'i-label': {
                                        color: `${Theme.colors.primary.main} !important`
                                    },
                                    'svg': {
                                        fill: Theme.colors.primary.main
                                    }
                                }
                            }
                        }
                    }
                }
            },
            '.edit-stack': {
                opacity: 0,
                $nest: {
                    '&:hover': {
                        opacity: 1,
                        transition: 'opacity 125ms cubic-bezier(0.4,0,0.2,1)'
                    }
                }
            }
        }
    });
});
define("@scom/scom-page-builder/builder/builderHeader.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/assets.ts", "@scom/scom-page-builder/const/index.ts", "@scom/scom-page-builder/interface/index.ts", "@scom/scom-page-builder/store/index.ts", "@scom/scom-page-builder/utility/index.ts", "@scom/scom-page-builder/builder/builderHeader.css.ts"], function (require, exports, components_27, assets_3, index_31, index_32, index_33, index_34) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuilderHeader = void 0;
    const Theme = components_27.Styles.Theme.ThemeVars;
    let BuilderHeader = class BuilderHeader extends components_27.Module {
        constructor(parent) {
            super(parent);
            this._readonly = false;
            this._isUpdatingBg = false;
            this.showAddStack = true;
            this.initEventBus();
            this.setData = this.setData.bind(this);
        }
        initEventBus() {
            components_27.application.EventBus.register(this, index_31.EVENT.ON_UPDATE_SECTIONS, async () => {
                var _a, _b;
                if (!((_b = (_a = index_33.pageObject.header) === null || _a === void 0 ? void 0 : _a.elements) === null || _b === void 0 ? void 0 : _b.length))
                    this.updateHeader();
            });
        }
        async setData(value) {
            index_33.pageObject.header = value;
            await this.updateHeader();
        }
        get _elements() {
            return index_33.pageObject.header.elements || [];
        }
        get _image() {
            return index_33.pageObject.header.image || '';
        }
        get _headerType() {
            return index_33.pageObject.header.headerType || '';
        }
        async updateHeader() {
            this.pnlHeaderMain.clearInnerHTML();
            this.showAddStack = this._elements.length === 0 && !this._image;
            this.pnlHeader.background = this.showAddStack ? { color: '#fff', image: '' } : { image: this._image };
            this.updateHeaderType();
            this.pnlConfig.visible = !this.showAddStack;
            if (!this.showAddStack) {
                const pageRow = (this.$render("ide-row", { width: "100vw", maxWidth: "100%", maxHeight: "100%" }));
                const rowData = {
                    id: 'header',
                    row: 1,
                    elements: this._elements
                };
                await pageRow.setData(rowData);
                pageRow.parent = this.pnlHeaderMain;
                this.pnlHeaderMain.appendChild(pageRow);
            }
        }
        addHeader() {
            const pageBlocks = index_33.getPageBlocks();
            const textBlock = pageBlocks.find((v) => v.name === index_32.ELEMENT_NAME.TEXTBOX);
            this.setData({
                image: '',
                headerType: index_32.HeaderType.NORMAL,
                elements: [{
                        id: index_34.generateUUID(),
                        column: 4,
                        columnSpan: 5,
                        type: 'primitive',
                        module: textBlock,
                        properties: {
                            width: '100%',
                            height: '130px'
                        }
                    }]
            });
        }
        onShowUpload() {
            this.uploader.clear();
            this.mdUpload.visible = true;
        }
        onChangedBg() {
            this._isUpdatingBg = true;
            this.onShowUpload();
        }
        onToggleType(value) {
            this.pnlHeaderType.visible = value;
            this.pnlConfig.visible = !value;
        }
        async onUpdateImage() {
            const fileList = this.uploader.fileList || [];
            const file = fileList[0];
            if (this._isUpdatingBg) {
                const image = file ? await this.uploader.toBase64(file) : '';
                this.pnlHeader.background = { image };
                index_33.pageObject.header = Object.assign(Object.assign({}, index_33.pageObject.header), { image });
                this._isUpdatingBg = false;
            }
            else {
                if (this.pnlTitle.contains(this.pnlLogo))
                    this.pnlTitle.removeChild(this.pnlLogo);
                if (!file) {
                    this.mdUpload.visible = false;
                    this.btnAddLogo.caption = 'Add logo';
                    this.pnlLogo = null;
                    return;
                }
                const imgStr = await this.uploader.toBase64(file);
                this.pnlLogo = (this.$render("i-panel", null,
                    this.$render("i-image", { url: imgStr, width: "35", height: "auto", display: "block" })));
                this.btnAddLogo.caption = 'Edit logo';
                this.pnlTitle.insertBefore(this.pnlLogo, this.nameInput);
            }
            this.mdUpload.visible = false;
        }
        onActiveType(source, type) {
            const types = Array.from(this.pnlHeaderTypeMain.querySelectorAll('.type'));
            types.forEach(type => {
                type.classList.remove('active');
            });
            source.classList.add('active');
            const header = index_33.pageObject.header;
            this.setData(Object.assign(Object.assign({}, header), { headerType: type.type }));
            this.updateHeaderType();
        }
        updateHeaderType() {
            if (!this._headerType || this.showAddStack) {
                this.pnlHeader.height = 'auto';
                return;
            }
            switch (this._headerType) {
                case index_32.HeaderType.COVER:
                    this.pnlHeader.height = '100vh';
                    this.pnlHeader.background = this.showAddStack ? { color: '#fff', image: '' } : { image: this._image };
                    this.btnChangeImg.visible = true;
                    break;
                case index_32.HeaderType.LARGE:
                    this.pnlHeader.height = 520;
                    this.pnlHeader.background = this.showAddStack ? { color: '#fff', image: '' } : { image: this._image };
                    this.btnChangeImg.visible = true;
                    break;
                case index_32.HeaderType.NORMAL:
                    this.pnlHeader.height = 340;
                    this.pnlHeader.background = this.showAddStack ? { color: '#fff', image: '' } : { image: this._image };
                    this.btnChangeImg.visible = true;
                    break;
                case index_32.HeaderType.TITLE:
                    this.pnlHeader.height = 180;
                    this.pnlHeader.background = { color: '#fff', image: '' };
                    this.btnChangeImg.visible = false;
                    break;
            }
        }
        renderHeaderType() {
            const headerTypes = [
                {
                    caption: 'Cover',
                    type: index_32.HeaderType.COVER,
                    image: assets_3.default.fullPath('img/components/cover.svg')
                },
                {
                    caption: 'Large Banner',
                    type: index_32.HeaderType.LARGE,
                    image: assets_3.default.fullPath('img/components/large.svg')
                },
                {
                    caption: 'Banner',
                    type: index_32.HeaderType.NORMAL,
                    image: assets_3.default.fullPath('img/components/banner.svg')
                },
                {
                    caption: 'Title Only',
                    type: index_32.HeaderType.TITLE,
                    image: assets_3.default.fullPath('img/components/title.svg')
                }
            ];
            this.pnlHeaderTypeMain.clearInnerHTML();
            this.pnlHeaderTypeMain.appendChild(this.$render("i-panel", { onClick: () => this.onToggleType(false), class: "pointer" },
                this.$render("i-icon", { name: "angle-left", width: 24, height: 24, fill: "rgba(0,0,0,.54)" })));
            headerTypes.forEach(type => {
                this.pnlHeaderTypeMain.appendChild(this.$render("i-hstack", { gap: "10px", class: "type", verticalAlignment: "center", onClick: (source) => this.onActiveType(source, type) },
                    this.$render("i-panel", null,
                        this.$render("i-image", { url: type.image, width: 34, height: 34 })),
                    this.$render("i-label", { caption: type.caption, font: { color: 'rgba(0,0,0,.54)' } })));
            });
        }
        init() {
            this._readonly = this.getAttribute('readonly', true, false);
            super.init();
            this.btnAddLogo.caption = this.pnlLogo ? 'Edit logo' : 'Add logo';
            this.renderHeaderType();
        }
        render() {
            return (this.$render("i-vstack", { id: "pnlHeader", position: "relative", width: "100%", maxHeight: "100%", maxWidth: "100%" },
                this.$render("i-hstack", { id: "pnlTitle", class: "page-title", height: "3.5rem", minWidth: "12.5rem", gap: "1.125rem", padding: {
                        left: '1.125rem',
                        right: '1.125rem',
                        top: '0.5rem',
                        bottom: '0.5rem',
                    }, background: { color: 'transparent' }, verticalAlignment: "center", visible: false },
                    this.$render("i-input", { id: "nameInput", placeholder: "Enter site name", height: "100%", width: "100%", class: "custom-input" })),
                this.$render("i-vstack", { id: "pnlHeaderMain", height: "calc(100% - 52px)", horizontalAlignment: "center", verticalAlignment: "center" }),
                this.$render("i-hstack", { horizontalAlignment: "space-between", position: "absolute", top: "0px", zIndex: 15, width: "100%", padding: { left: 10, bottom: 5, right: 10 }, class: "edit-stack" },
                    this.$render("i-panel", null,
                        this.$render("i-button", { id: "btnAddLogo", class: "btn-add", icon: { name: 'image', fill: 'rgba(0,0,0,.54)' }, font: { color: 'rgba(0,0,0,.54)' }, background: { color: Theme.colors.secondary.light }, padding: { top: 10, left: 6, right: 6, bottom: 10 }, border: { radius: 2 }, caption: "Add logo", onClick: () => this.onShowUpload(), visible: false })),
                    this.$render("i-panel", null,
                        this.$render("i-button", { id: "btnAddHeader", class: "btn-add", icon: { name: 'plus-circle', fill: 'rgba(0,0,0,.54)' }, font: { color: 'rgba(0,0,0,.54)' }, background: { color: Theme.colors.secondary.light }, padding: { top: 10, left: 6, right: 6, bottom: 10 }, border: { radius: 2 }, caption: "Add header", visible: this.showAddStack, onClick: () => this.addHeader() })),
                    this.$render("i-panel", null)),
                this.$render("i-hstack", { id: "pnlConfig", background: { color: '#fafafa' }, bottom: "0px", left: "0px", position: "absolute", verticalAlignment: "center", border: { radius: 2 }, margin: { left: 12, top: 12, bottom: 12, right: 12 }, height: "40px", class: "custom-box", visible: false },
                    this.$render("i-button", { id: "btnChangeImg", class: "btn-add", icon: { name: 'image', fill: 'rgba(0,0,0,.54)' }, font: { color: 'rgba(0,0,0,.54)' }, background: { color: 'transparent' }, padding: { left: 6, right: 6 }, height: "100%", border: { width: 0 }, caption: "Change Image", onClick: () => this.onChangedBg() }),
                    this.$render("i-button", { id: "btnChangeType", class: "btn-add", icon: { name: 'columns', fill: 'rgba(0,0,0,.54)' }, font: { color: 'rgba(0,0,0,.54)' }, background: { color: 'transparent' }, padding: { left: 6, right: 6 }, height: "100%", border: { width: 0, left: { width: '1px', style: 'solid', color: Theme.divider } }, caption: "Header Type", onClick: () => this.onToggleType(true) })),
                this.$render("i-panel", { id: "pnlHeaderType", visible: false, background: { color: '#fafafa' }, bottom: "0px", left: "0px", position: "absolute", border: { radius: 2 }, margin: { left: 12, top: 12, bottom: 12, right: 12 }, class: "custom-box", height: "auto", width: "auto" },
                    this.$render("i-hstack", { id: "pnlHeaderTypeMain", gap: "1rem", margin: { left: 8, top: 8, bottom: 8, right: 8 }, height: "100%", width: "100%", verticalAlignment: "center" })),
                this.$render("i-modal", { id: 'mdUpload', title: 'Select Image', closeIcon: { name: 'times' }, width: 400, closeOnBackdropClick: false },
                    this.$render("i-vstack", { padding: { top: '1rem' }, gap: "1rem" },
                        this.$render("i-upload", { id: 'uploader', draggable: true, caption: 'Drag and Drop image', class: "custom-uploader" }),
                        this.$render("i-hstack", { horizontalAlignment: "end" },
                            this.$render("i-button", { id: "btnAddImage", icon: { name: 'plus-circle', fill: 'rgba(0,0,0,.54)' }, font: { color: 'rgba(0,0,0,.54)' }, background: { color: Theme.colors.secondary.light }, padding: { top: 10, left: 6, right: 6, bottom: 10 }, border: { radius: 2 }, caption: "Add Image", onClick: this.onUpdateImage.bind(this) }))))));
        }
    };
    __decorate([
        components_27.observable()
    ], BuilderHeader.prototype, "showAddStack", void 0);
    BuilderHeader = __decorate([
        components_27.customElements('builder-header')
    ], BuilderHeader);
    exports.BuilderHeader = BuilderHeader;
});
define("@scom/scom-page-builder/builder/builderFooter.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_28) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_28.Styles.Theme.ThemeVars;
    components_28.Styles.cssRule('builder-footer', {
        $nest: {
            '#pnlFooter': {
                backgroundSize: 'cover',
                $nest: {
                    '&:hover ~ .edit-stack': {
                        opacity: 1,
                        transition: 'opacity 125ms cubic-bezier(0.4,0,0.2,1)'
                    },
                    '> .edit-stack': {
                        opacity: 0,
                        $nest: {
                            '&:hover': {
                                opacity: 1,
                                transition: 'opacity 125ms cubic-bezier(0.4,0,0.2,1)'
                            }
                        }
                    },
                    '.flex': {
                        display: 'flex !important'
                    }
                }
            }
        }
    });
});
define("@scom/scom-page-builder/builder/builderFooter.tsx", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/const/index.ts", "@scom/scom-page-builder/interface/index.ts", "@scom/scom-page-builder/utility/index.ts", "@scom/scom-page-builder/store/index.ts", "@scom/scom-page-builder/builder/builderFooter.css.ts"], function (require, exports, components_29, index_35, index_36, index_37, index_38) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuilderFooter = void 0;
    const Theme = components_29.Styles.Theme.ThemeVars;
    let BuilderFooter = class BuilderFooter extends components_29.Module {
        constructor(parent) {
            super(parent);
            this._readonly = false;
            this.showAddStack = true;
            this.initEventBus();
            this.setData = this.setData.bind(this);
        }
        initEventBus() {
            components_29.application.EventBus.register(this, index_35.EVENT.ON_UPDATE_SECTIONS, async () => {
                var _a, _b;
                if (!((_b = (_a = index_38.pageObject.footer) === null || _a === void 0 ? void 0 : _a.elements) === null || _b === void 0 ? void 0 : _b.length))
                    this.updateFooter();
            });
        }
        resetData() {
            this.showAddStack = true;
            this.pnlFooter.background = { color: '#fff', image: '' };
            this.pnlEditOverlay.visible = false;
            this.pnlEditOverlay.classList.remove('flex');
            this.pnlOverlay.visible = false;
            this.pnlConfig.visible = false;
        }
        async setData(value) {
            index_38.pageObject.footer = value;
            await this.updateFooter();
        }
        get _elements() {
            return index_38.pageObject.footer.elements || [];
        }
        get _image() {
            return index_38.pageObject.footer.image || '';
        }
        async updateFooter() {
            this.pnlFooterMain.clearInnerHTML();
            this.showAddStack = this._elements.length === 0 && !this._image;
            this.pnlFooter.background = this.showAddStack ? { color: '#fff', image: '' } : { image: this._image };
            this.pnlEditOverlay.visible = !this.showAddStack;
            this.pnlEditOverlay.classList.remove('flex');
            this.pnlConfig.visible = !this.showAddStack;
            if (!this.showAddStack) {
                const pageRow = (this.$render("ide-row", { maxWidth: "100%", maxHeight: "100%" }));
                const rowData = {
                    id: 'footer',
                    row: -1,
                    elements: this._elements
                };
                await pageRow.setData(rowData);
                pageRow.parent = this.pnlFooterMain;
                this.pnlFooterMain.append(pageRow);
                this.pnlEditOverlay.classList.add('flex');
            }
            components_29.application.EventBus.dispatch(index_35.EVENT.ON_UPDATE_FOOTER);
        }
        addFooter() {
            const pageBlocks = index_38.getPageBlocks();
            const textBlock = pageBlocks.find((v) => v.name === index_36.ELEMENT_NAME.TEXTBOX);
            this.setData({
                image: '',
                elements: [{
                        id: index_37.generateUUID(),
                        column: 1,
                        columnSpan: 12,
                        type: 'primitive',
                        module: textBlock,
                        properties: {
                            width: '100%',
                            height: '130px'
                        }
                    }]
            });
        }
        updateOverlay(value) {
            this.pnlEditOverlay.visible = value && !this.showAddStack;
            if (this.pnlEditOverlay.visible)
                this.pnlEditOverlay.classList.add('flex');
            else
                this.pnlEditOverlay.classList.remove('flex');
            this.pnlOverlay.visible = !this.pnlEditOverlay.visible && !this.showAddStack;
            this.pnlOverlay.height = this.pnlOverlay.visible ? document.body.offsetHeight + this.offsetHeight : 0;
            if (!this.pnlOverlay.visible) {
                const row = this.querySelector('ide-row');
                if (row) {
                    row.classList.remove('active');
                    const toolbars = row.querySelectorAll('ide-toolbar');
                    toolbars.forEach((toolbar) => {
                        toolbar.hideToolbars();
                    });
                }
            }
        }
        onChangedBg() {
            this.uploader.clear();
            this.mdUpload.visible = true;
        }
        async onUpdateImage() {
            const fileList = this.uploader.fileList || [];
            const file = fileList[0];
            const image = file ? await this.uploader.toBase64(file) : '';
            this.pnlFooter.background = { image };
            index_38.pageObject.footer = Object.assign(Object.assign({}, index_38.pageObject.footer), { image });
            this.mdUpload.visible = false;
        }
        init() {
            this._readonly = this.getAttribute('readonly', true, false);
            super.init();
            this.position = 'absolute',
                this.width = '100%';
            this.display = 'block';
            this.bottom = '0px';
            this.minHeight = 180;
        }
        render() {
            return (this.$render("i-vstack", { id: "pnlFooter", width: "100%", height: "100%", minHeight: 180, maxWidth: "100%", maxHeight: "40%" },
                this.$render("i-panel", { id: "pnlOverlay", width: "100%", height: "100%", background: { color: 'rgba(0,0,0,.6)' }, position: "absolute", zIndex: 29, left: "0px", bottom: "100%", visible: false, onClick: () => this.updateOverlay(true) }),
                this.$render("i-hstack", { id: "pnlEditOverlay", width: "100%", height: "100%", position: "absolute", top: "0px", left: "0px", background: { color: 'rgba(0,0,0,.6)' }, zIndex: 29, visible: false, verticalAlignment: "center", horizontalAlignment: "center", class: "edit-stack" },
                    this.$render("i-button", { class: "btn-add", icon: { name: 'plus-circle', fill: 'rgba(0,0,0,.54)' }, font: { color: 'rgba(0,0,0,.54)' }, background: { color: Theme.colors.secondary.light }, padding: { top: 10, left: 6, right: 6, bottom: 10 }, border: { radius: 2 }, caption: "Edit Footer", onClick: () => this.updateOverlay(false) })),
                this.$render("i-hstack", { verticalAlignment: "end", horizontalAlignment: "center", width: "100%", height: "auto", display: 'inline-block', position: "absolute", bottom: "0px", margin: { bottom: -10 }, class: "edit-stack", visible: this.showAddStack },
                    this.$render("i-panel", null,
                        this.$render("i-button", { id: "btnAddFooter", class: "btn-add", icon: { name: 'plus-circle', fill: 'rgba(0,0,0,.54)' }, font: { color: 'rgba(0,0,0,.54)' }, background: { color: Theme.colors.secondary.light }, padding: { top: 10, left: 6, right: 6, bottom: 10 }, border: { radius: 2 }, caption: "Add Footer", onClick: () => this.addFooter() }))),
                this.$render("i-panel", { id: "pnlFooterMain", "max-maxWidth": "100%", maxHeight: "100%" }),
                this.$render("i-hstack", { id: "pnlConfig", background: { color: '#fafafa' }, bottom: "0px", left: "0px", position: "absolute", verticalAlignment: "center", border: { radius: 2 }, margin: { left: 12, top: 12, bottom: 12, right: 12 }, height: "40px", class: "custom-box", visible: false },
                    this.$render("i-button", { class: "btn-add", icon: { name: 'image', fill: 'rgba(0,0,0,.54)' }, font: { color: 'rgba(0,0,0,.54)' }, background: { color: 'transparent' }, padding: { left: 6, right: 6 }, height: "100%", border: { width: 0 }, caption: "Change Image", onClick: () => this.onChangedBg() })),
                this.$render("i-modal", { id: 'mdUpload', title: 'Select Image', closeIcon: { name: 'times' }, width: 400, closeOnBackdropClick: false },
                    this.$render("i-vstack", { padding: { top: '1rem' }, gap: "1rem" },
                        this.$render("i-upload", { id: 'uploader', draggable: true, caption: 'Drag and Drop image', class: "custom-uploader" }),
                        this.$render("i-hstack", { horizontalAlignment: "end" },
                            this.$render("i-button", { id: "btnAddImage", icon: { name: 'plus-circle', fill: 'rgba(0,0,0,.54)' }, font: { color: 'rgba(0,0,0,.54)' }, background: { color: Theme.colors.secondary.light }, padding: { top: 10, left: 6, right: 6, bottom: 10 }, border: { radius: 2 }, caption: "Add Image", onClick: this.onUpdateImage.bind(this) }))))));
        }
    };
    __decorate([
        components_29.observable()
    ], BuilderFooter.prototype, "showAddStack", void 0);
    BuilderFooter = __decorate([
        components_29.customElements('builder-footer')
    ], BuilderFooter);
    exports.BuilderFooter = BuilderFooter;
});
define("@scom/scom-page-builder/builder/index.ts", ["require", "exports", "@scom/scom-page-builder/builder/builderHeader.tsx", "@scom/scom-page-builder/builder/builderFooter.tsx"], function (require, exports, builderHeader_1, builderFooter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuilderFooter = exports.BuilderHeader = void 0;
    Object.defineProperty(exports, "BuilderHeader", { enumerable: true, get: function () { return builderHeader_1.BuilderHeader; } });
    Object.defineProperty(exports, "BuilderFooter", { enumerable: true, get: function () { return builderFooter_1.BuilderFooter; } });
});
define("@scom/scom-page-builder/theme/light.theme.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_30) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_30.Styles.Theme.defaultTheme;
    // Background
    Theme.background.main = '#FFFFFF';
    Theme.background.paper = '#FAFAFA';
    Theme.background.modal = '#FFFFFF';
    Theme.background.default = '#EEEEEE';
    // Theme.background.gradient = '';
    // Colors
    Theme.colors.primary.main = '#FF6600';
    Theme.colors.primary.light = '#FF8533';
    Theme.colors.primary.dark = '#FF8533';
    Theme.colors.primary.contrastText = '#FFFFFF';
    Theme.colors.secondary.main = '#AAAAAA';
    Theme.colors.secondary.light = '#f5f5f5';
    // Theme.colors.secondary.dark = '';
    // Theme.colors.secondary.contrastText = '';
    Theme.colors.success.main = '#77B24D';
    // Theme.colors.success.light = '';
    // Theme.colors.success.dark = '';
    Theme.colors.success.contrastText = '#FFFFFF';
    Theme.colors.error.main = '#B2554D';
    // Theme.colors.error.light = '';
    // Theme.colors.error.dark = '';
    Theme.colors.error.contrastText = '#FFFFFF';
    // Theme.colors.info.main = '';
    // Theme.colors.info.light = '';
    // Theme.colors.info.dark = '';
    // Theme.colors.info.contrastText = '';
    // Theme.colors.warning.main = '';
    // Theme.colors.warning.light = '';
    // Theme.colors.warning.dark = '';
    // Theme.colors.warning.contrastText = '';
    // Text
    Theme.text.primary = '#5f6368';
    // Theme.text.secondary = '';
    // Theme.text.third = '';
    // Theme.text.hint = '';
    // Theme.text.disabled = '';
    // Typography
    Theme.typography.fontSize = '16px';
    Theme.typography.fontFamily = 'Noto Sans';
    // Shadows
    // Theme.shadows["0"] = '';
    // Theme.shadows["1"] = '';
    // Theme.shadows["2"] = '';
    // Theme.shadows["3"] = '';
    // Theme.shadows["4"] = '';
    // Breakpoints
    // Theme.breakboints.xs = 0;
    // Theme.breakboints.sm = 0;
    // Theme.breakboints.md = 0;
    // Theme.breakboints.lg = 0;
    // Theme.breakboints.xl = 0;
    // Divider
    Theme.divider = 'rgba(217,225,232,.6)';
    // Docs
    // Theme.docs.background = '';
    // Theme.docs.text0 = '';
    // Theme.docs.text1 = '';
    // Input
    Theme.input.background = '#FAFAFA';
    // Theme.input.fontColor = '';
    // Combobox
    Theme.combobox.background = '#FAFAFA';
    // Theme.combobox.fontColor = '';
    // Action
    Theme.action.hover = 'FF6600DD';
    // Theme.action.hoverOpacity = 1;
    // Theme.action.active = '';
    // Theme.action.activeOpacity = 1;
    // Theme.action.disabled = '';
    // Theme.action.disabledBackground = '';
    // Theme.action.disabledOpacity = 1;
    // Theme.action.focus = '';
    // Theme.action.focusOpacity = 1;
    // Theme.action.selected = '';
    // Theme.action.selectedOpacity = 1;
    // Layout
    exports.default = Theme;
});
define("@scom/scom-page-builder/theme/dark.theme.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_31) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_31.Styles.Theme.darkTheme;
    // Background
    Theme.background.main = '#333333';
    Theme.background.paper = 'black';
    // Theme.background.modal = '';
    // Theme.background.default = '';
    // Theme.background.gradient = '';
    // Colors
    Theme.colors.primary.main = '#FF6600';
    // Theme.colors.primary.light = '';
    Theme.colors.primary.dark = '#FF6600DD';
    // Theme.colors.primary.contrastText = '';
    Theme.colors.secondary.main = '#333333';
    // Theme.colors.secondary.light = '';
    // Theme.colors.secondary.dark = '';
    // Theme.colors.secondary.contrastText = '';
    // Theme.colors.success.main = '';
    // Theme.colors.success.light = '';
    // Theme.colors.success.dark = '';
    // Theme.colors.success.contrastText = '';
    Theme.colors.error.main = '#B2554D';
    // Theme.colors.error.light = '';
    // Theme.colors.error.dark = '';
    // Theme.colors.error.contrastText = '';
    // Theme.colors.info.main = '';
    // Theme.colors.info.light = '';
    // Theme.colors.info.dark = '';
    // Theme.colors.info.contrastText = '';
    // Theme.colors.warning.main = '';
    // Theme.colors.warning.light = '';
    // Theme.colors.warning.dark = '';
    // Theme.colors.warning.contrastText = '';
    // Text
    Theme.text.primary = '#FFFFFF';
    // Theme.text.secondary = '';
    // Theme.text.third = '';
    // Theme.text.hint = '';
    // Theme.text.disabled = '';
    // Typography
    Theme.typography.fontSize = '16px';
    Theme.typography.fontFamily = 'Noto Sans';
    // Shadows
    // Theme.shadows["0"] = '';
    // Theme.shadows["1"] = '';
    // Theme.shadows["2"] = '';
    // Theme.shadows["3"] = '';
    // Theme.shadows["4"] = '';
    // Breakpoints
    // Theme.breakboints.xs = 0;
    // Theme.breakboints.sm = 0;
    // Theme.breakboints.md = 0;
    // Theme.breakboints.lg = 0;
    // Theme.breakboints.xl = 0;
    // Divider
    // Theme.divider = '';
    // Docs
    // Theme.docs.background = '';
    // Theme.docs.text0 = '';
    // Theme.docs.text1 = '';
    // Input
    // Theme.input.background = '';
    // Theme.input.fontColor = '';
    // Combobox
    // Theme.combobox.background = '';
    // Theme.combobox.fontColor = '';
    // Action
    Theme.action.hover = 'FF6600DD';
    // Theme.action.hoverOpacity = 1;
    // Theme.action.active = '';
    // Theme.action.activeOpacity = 1;
    // Theme.action.disabled = '';
    // Theme.action.disabledBackground = '';
    // Theme.action.disabledOpacity = 1;
    // Theme.action.focus = '';
    // Theme.action.focusOpacity = 1;
    // Theme.action.selected = '';
    // Theme.action.selectedOpacity = 1;
    exports.default = Theme;
});
define("@scom/scom-page-builder/theme/index.ts", ["require", "exports", "@scom/scom-page-builder/theme/light.theme.ts", "@scom/scom-page-builder/theme/dark.theme.ts"], function (require, exports, light_theme_1, dark_theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DarkTheme = exports.LightTheme = void 0;
    exports.LightTheme = light_theme_1.default;
    exports.DarkTheme = dark_theme_1.default;
});
define("@scom/scom-page-builder/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_32) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_32.Styles.Theme.ThemeVars;
    components_32.Styles.cssRule('#editor', {
        $nest: {
            '.pnl-editor-wrapper': {
                display: 'block',
                boxShadow: '0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%), 0px 1px 5px 0px rgb(0 0 0 / 20%)',
            },
            '.custom-input input': {
                paddingLeft: 10
            },
            '::-webkit-scrollbar': {
                width: '7px',
            },
            '::-webkit-scrollbar-track': {
                borderRadius: '10px',
                border: '1px solid transparent',
                background: Theme.divider
            },
            '::-webkit-scrollbar-thumb': {
                background: Theme.action.focus,
                borderRadius: '10px',
                outline: '1px solid transparent'
            },
            '#pnlForm i-input > input': {
                boxShadow: 'none',
                border: 'none',
                background: 'transparent'
            }
        }
    });
});
define("@scom/scom-page-builder", ["require", "exports", "@ijstech/components", "@scom/scom-page-builder/const/index.ts", "@scom/scom-page-builder/interface/index.ts", "@scom/scom-page-builder/store/index.ts", "@scom/scom-page-builder/theme/index.ts", "@scom/scom-page-builder/utility/index.ts", "@scom/scom-page-builder/store/index.ts", "@scom/scom-page-builder/index.css.ts"], function (require, exports, components_33, index_39, index_40, index_41, index_42, index_43, index_44) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = index_42.LightTheme;
    let Editor = class Editor extends components_33.Module {
        constructor(parent, options) {
            super(parent, options);
            this.getData = this.getData.bind(this);
            this.setData = this.setData.bind(this);
        }
        setRootDir(value) {
            index_44.setRootDir(value);
        }
        getData() {
            return {
                header: index_41.pageObject.header,
                sections: index_41.pageObject.sections,
                footer: index_41.pageObject.footer
            };
        }
        async setData(value) {
            index_41.pageObject.header = value.header;
            index_41.pageObject.sections = value.sections;
            index_41.pageObject.footer = value.footer;
            try {
                await this.builderHeader.setData(value.header);
                await this.pageRows.setRows(value.sections);
                await this.builderFooter.setData(value.footer);
            }
            catch (error) {
                console.log('setdata', error);
            }
        }
        onLoad() {
            this.initEventBus();
        }
        initEventBus() {
            components_33.application.EventBus.register(this, index_39.EVENT.ON_ADD_ELEMENT, (data) => {
                if (!data)
                    return;
                this.onAddRow(data);
            });
            components_33.application.EventBus.register(this, index_39.EVENT.ON_UPDATE_SECTIONS, async () => { });
            components_33.application.EventBus.register(this, index_39.EVENT.ON_UPDATE_FOOTER, async () => this.onUpdateWrapper());
        }
        async onAddRow(data) {
            const { type, module } = data;
            let element = {
                id: index_43.generateUUID(),
                column: 1,
                columnSpan: module.name === index_40.ELEMENT_NAME.TEXTBOX ? 12 : 3,
                type,
                module,
                properties: {}
            };
            let rowData = {
                id: index_43.generateUUID(),
                row: index_41.pageObject.sections.length + 1,
                elements: [element]
            };
            if (module.name === index_40.ELEMENT_NAME.NFT || module.name === index_40.ELEMENT_NAME.GEM_TOKEN) {
                element.module = index_41.getDappContainer();
                element.columnSpan = 6;
                element.properties = {
                    networks: [43113],
                    wallets: ["metamask"],
                    content: {
                        module,
                        properties: {
                            width: '100%'
                        }
                    }
                };
            }
            return await this.pageRows.appendRow(rowData);
        }
        onUpdateWrapper() {
            //     this.contentWrapper.minHeight = `calc((100vh - 6rem) - ${this.builderFooter.offsetHeight}px)`;
            //     this.contentWrapper.padding = {bottom: this.builderFooter.offsetHeight};
        }
        render() {
            return (this.$render("i-panel", { id: "editor", width: '100%', height: '100%' },
                this.$render("ide-header", { id: 'pageHeader', dock: 'top', border: { bottom: { width: 1, style: 'solid', color: '#dadce0' } } }),
                this.$render("i-grid-layout", { templateColumns: ['auto', '400px'], autoFillInHoles: true, dock: "fill", height: "100%" },
                    this.$render("i-panel", { class: "main-content", height: "100%", overflow: { y: 'auto' }, background: { color: Theme.background.default }, border: { right: { width: 1, style: 'solid', color: Theme.divider } }, padding: { bottom: '1rem' } },
                        this.$render("i-panel", { id: "pageContent", maxWidth: 1400, width: "100%", margin: { left: 'auto', right: 'auto' } },
                            this.$render("i-panel", { maxWidth: 1280, minHeight: "100vh", margin: { top: 8, bottom: 8, left: 60, right: 60 }, background: { color: '#fff' }, class: "pnl-editor-wrapper" },
                                this.$render("i-panel", { id: "contentWrapper", padding: { bottom: '12rem' }, minHeight: "calc((100vh - 6rem) - 12rem)" },
                                    this.$render("builder-header", { id: "builderHeader" }),
                                    this.$render("ide-rows", { id: "pageRows", draggable: true })),
                                this.$render("builder-footer", { id: "builderFooter" })))),
                    this.$render("i-panel", { class: "main-sidebar", height: "100%", overflow: { y: 'auto' } },
                        this.$render("ide-sidebar", { id: 'pageSidebar', width: "100%" })))));
        }
    };
    Editor = __decorate([
        components_33.customModule
    ], Editor);
    exports.default = Editor;
});
