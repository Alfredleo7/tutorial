import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'tutorial';

  showInputTitle = true;

  studentsGroup1 = [
    'luis',
    'sonia',
    'alberto'
  ]

  studentsGroup2 = [
    'jose',
    'carlos',
    'paul'
  ]

  onSave() {
    console.log('click in the button');
  }

  switchHideInput() {
    this.showInputTitle = !this.showInputTitle;
  }

  onListStudentChildChange(text) {
    console.log('on event of child emit: ', text)
  }

  // arrays

  


}
