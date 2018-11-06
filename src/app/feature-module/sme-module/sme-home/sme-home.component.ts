import { Component, OnInit } from '@angular/core';
import { Constants } from '../../../shared-module/constants';
import { BaseHttpService } from '../../../shared-module/services/http.service';
import { SMEProductModel } from '../sme-home/sme-home.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupQuestionModel } from '../../../shared-module/models/questions.model';
import { AppService } from '../../../shared-module/services/app.service';

@Component({
  selector: 'sme-home',
  templateUrl: './sme-home.component.html'
})
export class SMEHomeComponent implements OnInit {
  private constants = new Constants();
  SMEProducts: SMEProductModel[] = [];
  public questionsStore: GroupQuestionModel[];
  smeID: number = 0;
  versionID: number = 0;

  constructor(
    private baseHttpService: BaseHttpService,
    private router: Router, private route: ActivatedRoute,
    private appService: AppService) {
  }

  ngOnInit() {
    
  }
}
