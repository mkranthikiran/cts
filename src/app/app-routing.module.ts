import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './courses/course-list.component';
import { FullCourseDetailsComponent } from './courses/fullcoursedetails.component';
import { ErrorComponent } from './error/error.component';
import { PracticeComponent } from './practice.component';
import { CourseRouterActivatorService } from './shared/course.activate.router';
import { WelcomeComponent } from './welcome.component ';

const routes: Routes = [
                         {path:'allcourses', component : CourseListComponent},
                         {path:'welcome', component : WelcomeComponent},
                         {path:'practice', component : PracticeComponent},
                         {path:'404', component : ErrorComponent},
                         {path:'course/:id', component : FullCourseDetailsComponent,canActivate:[CourseRouterActivatorService]},
                         {path:'', redirectTo:'/allcourses', pathMatch:'full'},
                         {path:'**', redirectTo:'/404', pathMatch:'full'}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
