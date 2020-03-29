import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterContentInit, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit, OnChanges {

  newStudent: string = '';

  @Input() students: string[] = ['primer estudiante'];
  @Input() textPrueba: string = '';
  @Output() onChangeStudentList: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes): void {
    console.log('El cambio es: ', changes)
  }

  addStudent(): void {
    if(this.newStudent != '') {
      this.students.push(this.newStudent);
      this.newStudent = '';
      this.onChangeStudentList.emit('the students list has changed');
    } else {
      alert('input student is required');
    }
  }
  
  deleteStudent(index): number {
    this.students.splice(index, 1);
    return 1;
  }

}
