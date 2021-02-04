import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }
  public isButtonClicked = false;

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.isButtonClicked = true;
    const pdfUrl = 'assets/docs/cv.pdf';
    const pdfName = 'Eleonora_CV.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
