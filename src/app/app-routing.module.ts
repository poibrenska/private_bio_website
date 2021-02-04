import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './tabs/contact/contact.component';
import { EducationComponent } from './tabs/education/education.component';
import { HobbiesComponent } from './tabs/hobbies/hobbies.component';

import { HomeComponent } from './tabs/home/home.component';
import { PageNotFoundComponent } from './tabs/page-not-found/page-not-found.component';
import { SkillsComponent } from './tabs/skills/skills.component';
import { WorkExperienceComponent } from './tabs/work-experience/work-experience.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: WorkExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
