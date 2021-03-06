"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var SwiperComponent = (function () {
    function SwiperComponent(elementRef, changeDetectorRef, platform_id) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.platform_id = platform_id;
        this.slideCount = 0;
        this.initialized = false;
        this.shouldInitialize = true;
    }
    Object.defineProperty(SwiperComponent.prototype, "initialize", {
        set: function (value) {
            this.shouldInitialize = this.initialized ? false : value;
        },
        enumerable: true,
        configurable: true
    });
    SwiperComponent.prototype.ngAfterViewInit = function () {
        if (this.shouldInitialize) {
            this.setup();
        }
    };
    SwiperComponent.prototype.setup = function () {
        if (!this.swiper) {
            if (common_1.isPlatformBrowser(this.platform_id)) {
                this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
                this.slideCount = this.swiperWrapper.childElementCount;
                this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('swiper > div'), this.config);
                this.changeDetectorRef.detectChanges();
            }
            this.shouldInitialize = false;
        }
    };
    SwiperComponent.prototype.ngAfterViewChecked = function () {
        if (this.shouldInitialize) {
            this.setup();
        }
        if (this.swiperWrapper && this.slideCount !== this.swiperWrapper.childElementCount) {
            this.slideCount = this.swiperWrapper.childElementCount;
            this.swiper.update();
        }
    };
    SwiperComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'swiper',
                    template: "\n    <div [ngClass]=\"{'swiper-container': config?.containerModifierClass === undefined }\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    :host {\n        display: block;\n    }\n\n    :host > div {\n        width: 100%;\n        height: 100%;\n    }\n  "],
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    SwiperComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.ChangeDetectorRef, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    SwiperComponent.propDecorators = {
        "config": [{ type: core_1.Input },],
        "initialize": [{ type: core_1.Input, args: ['initialize',] },],
    };
    return SwiperComponent;
}());
exports.SwiperComponent = SwiperComponent;
//# sourceMappingURL=swiper.component.js.map