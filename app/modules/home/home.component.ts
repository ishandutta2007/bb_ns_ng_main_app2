import { Component, Input, ChangeDetectionStrategy, OnInit, OnChanges, NgZone } from '@angular/core';
import { SetupItemViewArgs } from "nativescript-angular/directives";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from "../services/firebase.service";

@Component({
  selector: 'home',
  template: `
      <ActionBar class="action-bar" title="Home">
      </ActionBar>
      <side-drawer-page>
          <StackLayout>
            <ListView [items]="channels$ | async" class="list-group">
              <ng-template let-dataitem="item">
                <GridLayout class="list-group-item" rows="auto" columns="*, auto, auto">
                    <Label [text]="dataitem.name" android:class="label-item" colSpan="2" row="0"></Label>
                </GridLayout>
              </ng-template>
            </ListView>
          </StackLayout>
      </side-drawer-page>
  `,
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public channels$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private firebaseService: FirebaseService
  ) {
  }

  ngOnInit() {
    this.firebaseService.init();
    setTimeout(
      this.channels$ = <any>this.firebaseService.getPath('users/RXmeYtQYTxOUmc6WBnqPFTItyeP2/channels'),
      9000);
  }
}
