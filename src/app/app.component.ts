import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular';
  // courses = [1];
  // viewModel = '';
  courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
  ]

  addCourse(){
    let course={id:4, name: 'course4'};
    this.courses.push(course);

  }

  remove(course){
    let index = this.courses.indexOf(course);
    console.log(index);
    this.courses.splice(index, 1);
  }
}
