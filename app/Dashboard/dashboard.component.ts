import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

declare var _gaq:Function;
declare var $:any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit{
    location: Location;
    private currentRoute:string;

    constructor(_router:Router,
                _location:Location) {
        this.location = _location;
        _router.events.subscribe((event:any) => {
            // Send GA tracking on NavigationEnd event. You may wish to add other
            // logic here too or change which event to work with
            if (event instanceof NavigationEnd) {
                // When the route is '/', location.path actually returns ''.
                let newRoute = _location.path() || '/';
                // If the route has changed, send the new route to analytics.
                if (this.currentRoute != newRoute) {
                    _gaq('send', 'pageview', newRoute);
                    this.currentRoute = newRoute;
                }
            }
        });
    }

    ngOnInit(){
         $.getScript('../assets/js/light-bootstrap-dashboard.js');
         $.getScript('../assets/js/demo.js');

         $.getScript('../assets/js/init/initMenu.js');
         $.getScript('../assets/js/plugins/bootstrap-switch-tags.js');
    }
    public isMap(){
        // console.log(this.location);
        if(this.location.prepareExternalUrl(this.location.path()) == '#/maps/fullscreen'){
            return true;
        }
        else {
            return false;
        }
    }
}
