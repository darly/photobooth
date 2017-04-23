import {TestComponentBuilder, describe, expect, injectAsync, it} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {SplashScreenComponent} from './splash-screen.component';

export function main() {
  describe('splash screen button should be present', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let splashScreenDOM = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(splashScreenDOM, 'button')[0].textContent).toEqual('English');
            expect(DOM.querySelectorAll(splashScreenDOM, 'button')[0].textContent).toEqual('Español');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [SplashScreenComponent],
  template: '<pb-splash-screen></pb-splash-screen>'
})
class TestComponent { }
