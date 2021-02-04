import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {FieldsetModule} from 'primeng/fieldset';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './tabs/home/home.component';
import { EducationComponent } from './tabs/education/education.component';
import { SkillsComponent } from './tabs/skills/skills.component';
import { WorkExperienceComponent } from './tabs/work-experience/work-experience.component';
import { HobbiesComponent } from './tabs/hobbies/hobbies.component';
import { ContactComponent } from './tabs/contact/contact.component';
import { PageNotFoundComponent } from './tabs/page-not-found/page-not-found.component';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    HobbiesComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TabMenuModule,
    DropdownModule,
    InputTextareaModule,
    ToastModule,
    FieldsetModule,
    AvatarModule,
    AvatarGroupModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
