import { Component } from '@angular/core';
import { ButtonViewComponent } from './button-view/button-view.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name: string;

  constructor() {}

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'ID',
      },
      username: {
        title: 'ID',
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: ButtonViewComponent,
      },
    },
    actions: false,
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      button: 'Button #1',
      componentName: 'component' + 1,
      procesado: false,
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      button: 'Button #2',
      componentName: 'component' + 2,
      procesado: false,
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      button: 'Button #3',
      componentName: 'component' + 3,
      procesado: true,
    },
    {
      id: 4,
      name: 'Clementine Bauch',
      username: 'arce',
      email: 'Nathan@yesenia.net',
      button: 'Button #3',
      componentName: 'component' + 3,
      procesado: true,
    },
  ];
}
