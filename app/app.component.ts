import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>First Angular app going to Azure : {{ display }} </h1>'
})
export class AppComponent { 
	display = " Hello World! ";

}
