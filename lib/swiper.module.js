"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var swiper_component_1 = require("./swiper/swiper.component");
var SwiperModule = (function () {
    function SwiperModule() {
    }
    SwiperModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        swiper_component_1.SwiperComponent
                    ],
                    exports: [
                        swiper_component_1.SwiperComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    SwiperModule.ctorParameters = function () { return []; };
    return SwiperModule;
}());
exports.SwiperModule = SwiperModule;
var swiper_component_2 = require("./swiper/swiper.component");
exports.SwiperComponent = swiper_component_2.SwiperComponent;
//# sourceMappingURL=swiper.module.js.map