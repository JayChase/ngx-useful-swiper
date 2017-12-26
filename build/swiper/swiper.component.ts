import {
  Component, OnInit, ChangeDetectionStrategy, Input,
  ElementRef, ChangeDetectorRef, AfterViewChecked, AfterViewInit
} from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'swiper',
  template: "\n    <div [ngClass]=\"{'swiper-container': config?.containerModifierClass === undefined }\">\n      <ng-content></ng-content>\n    </div>\n  ",
  styles: ["\n    :host {\n        display: block;\n    }\n\n    :host > div {\n        width: 100%;\n        height: 100%;\n    }\n  "],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperComponent implements AfterViewChecked, AfterViewInit {
  @Input() config: any;
  @Input('initialize') set initialize(value: boolean) {
    this.shouldInitialize = this.initialized ? false : value;
  }

  swiper: any;

  private swiperWrapper: any;
  private slideCount = 0;
  private initialized = false;
  private shouldInitialize = true;

  constructor(private elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    if (this.shouldInitialize) {
      this.setup();
    }
  }

  setup() {
    if (!this.swiper) {
      // if rendered on server querySelector is undefined
      if (this.elementRef.nativeElement.querySelector) {
        this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
        this.slideCount = this.swiperWrapper.childElementCount;
        this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('swiper > div'), this.config);
        this.changeDetectorRef.detectChanges();
      }

      this.shouldInitialize = false;
    }
  }

  ngAfterViewChecked() {
    if (this.shouldInitialize) {
      this.setup();
    }

    if (this.swiperWrapper && this.slideCount !== this.swiperWrapper.childElementCount) {
      this.slideCount = this.swiperWrapper.childElementCount;
      this.swiper.update();
    }
  }
}
