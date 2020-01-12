import { Component } from '@angular/core';

import { COMMON_NAMES } from './common-names';

/**
 * Demo app showing usage of the mentions directive.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = {
    mentions: [
      {
        items: ['jjj', 'lll'],
        data: [
          {
            img:
              'https://t3.ftcdn.net/jpg/02/12/43/28/240_F_212432820_Zf6CaVMwOXFIylDOEDqNqzURaYa7CHHc.jpg'
          },
          {
            img:
              'https://t3.ftcdn.net/jpg/02/12/43/28/240_F_212432820_Zf6CaVMwOXFIylDOEDqNqzURaYa7CHHc.jpg'
          }
        ],
        triggerChar: '@'
      },
      {
        items: ['llll', 'kkkkk'],
        data: [{ user: 'po' }, { user: 'lll' }],
        triggerChar: '#'
      }
    ]
  };
  get test() {
    switch (window.location.pathname) {
      case '/config':
        return 'config';
      case '/async':
        return 'async';
      case '/options':
        return 'options';
      case '/template':
        return 'template';
      case '/pos':
        return 'pos';
    }
  }
}
