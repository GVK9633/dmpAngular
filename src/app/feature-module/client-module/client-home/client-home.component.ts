import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constants } from '../../../shared-module/constants';
import { BaseHttpService } from '../../../shared-module/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../shared-module/services/app.service';



@Component({
  selector: 'client-home',
  templateUrl: './client-home.component.html'
})
export class ClientHomeComponent implements OnInit {
  private constants = new Constants();
  constructor(
    private baseHttpService: BaseHttpService,
    private router: Router, private route: ActivatedRoute,
    private appService: AppService
    
  ) { }

  ngOnInit() {

  }

 
  startNewSession() {
    
  }
}
