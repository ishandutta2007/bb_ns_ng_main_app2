import { Injectable, Inject, NgZone } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");
import * as appSettings from 'application-settings';
import { RouterExtensions } from 'nativescript-angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/find';

@Injectable()
export class FirebaseService {

    private _store_array: Array<any> = [];
    constructor(
        private ngZone: NgZone
    ) { }

    public init() {
        try {
            firebase.init({
                // Optionally pass in properties for database, authentication and cloud messaging,
                // see their respective docs.
            }).then(
                function (instance) {
                    console.log("firebase.init done");
                },
                function (error) {
                    console.log("firebase.init error: " + error);
                }
                );
        } catch (error) {
            console.log("firebase.init doesnt even get called properly: " + error);
        }
    }

    public getPath(path): Observable<any> {
        return new Observable((observer: any) => {
            let listener: any;

            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    let results = this.handleSnapshot(snapshot.value);
                    observer.next(results);
                });
            };

            firebase.addValueEventListener(onValueEvent, `/${path}`).then(() => {
                // todo
            });
        }).share();
    }

    //utilities

    handleSnapshot(data: any) {
        this._store_array = [];
        if (data) {
            for (let id in data) {
                let result = (<any>Object).assign({ id: id }, data[id]);
                this._store_array.push(result);
            }
        }
        return this._store_array;
    }
}