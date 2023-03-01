var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom-page-launcher/main", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MainModule = void 0;
    let MainModule = class MainModule extends components_1.Module {
        constructor(parent, options) {
            super(parent, options);
            if (options) {
                this.onLoad(options);
            }
        }
        onLoad(options) {
            var _a;
            this.options = options;
            if (((_a = this.options) === null || _a === void 0 ? void 0 : _a._mode) === 'edit')
                this.loadPageBuilderModule();
            else
                this.loadPageViewerModule();
        }
        setData(data) {
            if (this.module && this.module.setData)
                this.module.setData(data);
        }
        getData() {
            let data;
            if (this.module && this.module.getData)
                data = this.module.getData();
            return data;
        }
        async loadModule(path) {
            var _a;
            this.module = undefined;
            if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.rootDir) {
                path = `${this.options.rootDir}/${path}`;
            }
            this.module = await components_1.application.newModule(path);
            if (this.module) {
                await this.module.onLoad();
                this.pnlMain.append(this.module);
                await this.module.onShow(this.options);
            }
        }
        async loadPageViewerModule() {
            this.loadModule("libs/@scom/secure-page-viewer/index.js");
        }
        async loadPageBuilderModule() {
            var _a;
            await this.loadModule("libs/@scom/scom-page-builder/index.js");
            if ((_a = this.options) === null || _a === void 0 ? void 0 : _a._data) {
                this.setData(this.options._data);
            }
        }
        render() {
            return (this.$render("i-vstack", { height: "inherit" },
                this.$render("i-panel", { id: "pnlMain", stack: { grow: "1" } })));
        }
    };
    MainModule = __decorate([
        components_1.customModule
    ], MainModule);
    exports.MainModule = MainModule;
});
