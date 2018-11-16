import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

@inject(Router)
export class Start{
    constructor(router){
        this.router = router;
    }

    async activate(){
        await this._configureRouter();
    }

    _configureRouter(){
        let routes = [
            {route: '', title: 'Main', moduleId: PLATFORM.moduleName('./start')},
            // {route: 'menus/left-menu', title: 'Left Menu', moduleId: PLATFORM.moduleName('./menus/left-menu')}
        ];
        this.router.configure(config =>{
            config.title ='Score Card';
            config.map(routes);
        });
    }
}