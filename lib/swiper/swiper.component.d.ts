import { ElementRef, ChangeDetectorRef, AfterViewChecked, AfterViewInit } from '@angular/core';
export declare class SwiperComponent implements AfterViewChecked, AfterViewInit {
    private elementRef;
    private changeDetectorRef;
    platform_id: any;
    config: any;
    initialize: boolean;
    swiper: any;
    private swiperWrapper;
    private slideCount;
    private initialized;
    private shouldInitialize;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, platform_id: any);
    ngAfterViewInit(): void;
    setup(): void;
    ngAfterViewChecked(): void;
}
