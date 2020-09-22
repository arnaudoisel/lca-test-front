// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { ChangeDetectorRef, Type } from '@angular/core';
import { getTestBed, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

// Fixes detectChanges() issue with OnPush change detection strategy:
// https://github.com/angular/angular/issues/12313#issuecomment-561221167
function runOnPushChangeDetection<T>(cf: ComponentFixture<T>) {
    return async () => {
        const cd: ChangeDetectorRef = cf.debugElement.injector.get<ChangeDetectorRef>(ChangeDetectorRef as any);
        cd.detectChanges();
        return await cf.whenStable();
    }
}

export const ImproveChangeDetection = () => {
    const originalCreate = TestBed.createComponent;
    TestBed.createComponent = <T>(component: Type<T>) => {
        const componentFixture: ComponentFixture<T> = originalCreate(component);
        componentFixture.detectChanges = runOnPushChangeDetection(componentFixture);
        return componentFixture;
    };
};

ImproveChangeDetection();
