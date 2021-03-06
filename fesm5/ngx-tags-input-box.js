import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, EventEmitter, Output, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var NgxTagsService = /** @class */ (function () {
    function NgxTagsService() {
    }
    NgxTagsService.ɵprov = ɵɵdefineInjectable({ factory: function NgxTagsService_Factory() { return new NgxTagsService(); }, token: NgxTagsService, providedIn: "root" });
    NgxTagsService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxTagsService);
    return NgxTagsService;
}());

var NgxTagsComponent = /** @class */ (function () {
    function NgxTagsComponent() {
    }
    NgxTagsComponent.prototype.ngOnInit = function () {
    };
    NgxTagsComponent = __decorate([
        Component({
            selector: 'ngx-tags',
            template: "\n    <p>\n      ngx-tags works!\n    </p>\n  "
        })
    ], NgxTagsComponent);
    return NgxTagsComponent;
}());

var TagsComponent = /** @class */ (function () {
    function TagsComponent() {
        this.tagsChange = new EventEmitter();
        this.tags = [];
    }
    TagsComponent.prototype.ngOnInit = function () {
        this.limit = this.limit || 5;
        this.placeholder = this.placeholder || 'Add tags';
        this.header = this.header || 'Tags';
        if (this.mode === 'success') {
            this.mode = 'green';
        }
        else if (this.mode === 'primary') {
            this.mode = '#0d47a1';
        }
        else if (this.mode === 'danger') {
            this.mode = 'crimson';
        }
        else if (this.mode === 'warning') {
            this.mode = '#ff9800';
        }
        else if (this.mode === 'info') {
            this.mode = 'cornflowerblue';
        }
        else {
            this.mode = 'cornflowerblue';
        }
    };
    TagsComponent.prototype.add = function (e) {
        if (this.tags.length < this.limit - 1) {
            this.tags.push(e.target.value);
        }
        else {
            this.tags[this.limit - 1] = e.target.value;
        }
        e.target.value = '';
        this.tagsChange.emit(this.tags);
    };
    TagsComponent.prototype.remove = function (i) {
        this.tags.splice(i, 1);
    };
    __decorate([
        Output()
    ], TagsComponent.prototype, "tagsChange", void 0);
    __decorate([
        Input()
    ], TagsComponent.prototype, "limit", void 0);
    __decorate([
        Input()
    ], TagsComponent.prototype, "mode", void 0);
    __decorate([
        Input()
    ], TagsComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], TagsComponent.prototype, "header", void 0);
    TagsComponent = __decorate([
        Component({
            selector: 'ngx-tags-input',
            template: "<label for=\"headerText\">{{ header }}</label>\n<input\n  type=\"text\"\n  class=\"input-tags\"\n  (change)=\"add($event)\"\n  [style.borderColor]=\"mode\"\n  [placeholder]=\"placeholder\"\n/>\n<label for=\"\">Maximum tags allowed {{ limit }} </label>\n<div class=\"righter\">\n  <span\n    class=\"labeler\" (click)=\"remove(i)\"\n    [style.backgroundColor]=\"mode\"\n    *ngFor=\"let item of tags; index as i\"\n  >\n    {{ item }}&nbsp;&times;\n  </span>\n</div>\n",
            styles: [".input-tags{width:100%;background-color:#fff;padding:.625rem;margin:.3125rem 0;border:1px solid #000}.labeler{padding:7.5px;background-color:#6495ed;border-radius:5px;margin:.3125rem 5px;color:#fff;font-size:12px;text-transform:lowercase;cursor:pointer}.righter{text-align:right}input:focus{border:1px solid!important;outline:0;box-shadow:none}"]
        })
    ], TagsComponent);
    return TagsComponent;
}());

var NgxTagsModule = /** @class */ (function () {
    function NgxTagsModule() {
    }
    NgxTagsModule = __decorate([
        NgModule({
            declarations: [NgxTagsComponent, TagsComponent],
            imports: [CommonModule],
            exports: [NgxTagsComponent, TagsComponent],
        })
    ], NgxTagsModule);
    return NgxTagsModule;
}());

/*
 * Public API Surface of ngx-tags
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxTagsComponent, NgxTagsModule, NgxTagsService, TagsComponent as ɵa };
//# sourceMappingURL=ngx-tags-input-box.js.map
