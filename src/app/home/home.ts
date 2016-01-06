import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';

// self node_modules
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {Title} from './providers/title';
import {XLarge} from './directives/x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES,
    XLarge,
    CAROUSEL_DIRECTIVES
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {
  private myInterval:  number = 5000;
  private noWrapSlides: boolean = false;
  private slides: Array<any> = [];

  // TypeScript public modifiers
  constructor(public title: Title, public http: Http) {
    for (let i = 0; i < 18; i++) {
      this.addSlide();
    }
  }

  ngOnInit() {
    console.log('hello Home component');
  }

  private addSlide() {
    let num = this.slides.length + 1;
    this.slides.push({
      image: `/assets/img/home/${num}.jpg`,
      text: `${['帅气的', '漂亮的', '性感的', '神奇的'][this.slides.length % 4]}
      ${['男孩', '女孩', '前端', 'Angular2工程师'][this.slides.length % 4]}`
    });
  }


}
