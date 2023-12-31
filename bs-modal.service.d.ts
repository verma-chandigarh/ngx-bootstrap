import { ComponentRef, TemplateRef, EventEmitter, RendererFactory2 } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalOptions } from './modal-options.class';
import { BsModalRef } from './bs-modal-ref.service';
import * as i0 from "@angular/core";
export declare class BsModalService {
    private clf;
    private modalDefaultOption;
    config: ModalOptions;
    onShow: EventEmitter<any>;
    onShown: EventEmitter<any>;
    onHide: EventEmitter<any>;
    onHidden: EventEmitter<any>;
    protected isBodyOverflowing: boolean;
    protected originalBodyPadding: number;
    protected scrollbarWidth: number;
    protected backdropRef?: ComponentRef<ModalBackdropComponent>;
    private _backdropLoader;
    private modalsCount;
    private lastDismissReason?;
    private loaders;
    private _renderer;
    private _focusEl;
    constructor(rendererFactory: RendererFactory2, clf: ComponentLoaderFactory, modalDefaultOption: ModalOptions);
    /** Shows a modal */
    show<T>(content: string | TemplateRef<any> | {
        new (...args: any[]): T;
    }, config?: ModalOptions<T>): BsModalRef<T>;
    hide(id?: number | string): void;
    _showBackdrop(): void;
    _hideBackdrop(): void;
    _showModal<T>(content: any): BsModalRef<T>;
    _hideModal(id?: number | string): void;
    getModalsCount(): number;
    setDismissReason(reason: string): void;
    removeBackdrop(): void;
    /** Checks if the body is overflowing and sets scrollbar width */
    /** @internal */
    checkScrollbar(): void;
    setScrollbar(): void;
    private resetScrollbar;
    private getScrollbarWidth;
    private _createLoaders;
    private removeLoaders;
    private copyEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<BsModalService, [null, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BsModalService>;
}
