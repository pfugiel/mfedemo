(self.webpackChunkshell=self.webpackChunkshell||[]).push([[242],{242:(v,i,o)=>{o.r(i);var p=o(6245),r=o(9316),t=o(1715),m=o(7850),c=o(2782);let a=(()=>{class e{constructor(n,s){this.service=n,this.title="shell",this.service.login("Max",null)}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(m.AuthLibService),t.\u0275\u0275directiveInject(c.HttpClient))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-root"]],decls:10,vars:0,consts:[["src","assets/angular.png","width","50"],["routerLink","/"],["routerLink","/flights/flights-search"]],template:function(n,s){1&n&&(t.\u0275\u0275elementStart(0,"ul")(1,"li"),t.\u0275\u0275element(2,"img",0),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"li")(4,"a",1),t.\u0275\u0275text(5,"Home"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(6,"li")(7,"a",2),t.\u0275\u0275text(8,"Flights"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275element(9,"router-outlet"))},dependencies:[r.RouterOutlet,r.RouterLinkWithHref],encapsulation:2}),e})();const h=[{path:"",component:(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-home"]],decls:2,vars:0,template:function(n,s){1&n&&(t.\u0275\u0275elementStart(0,"h1"),t.\u0275\u0275text(1,"Welcome!"),t.\u0275\u0275elementEnd())},encapsulation:2}),e})(),pathMatch:"full"},{path:"flights",loadChildren:()=>o.e(568).then(o.t.bind(o,7568,23)).then(e=>e.FlightsModule)},{path:"**",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-not-found"]],decls:7,vars:0,template:function(n,s){1&n&&(t.\u0275\u0275elementStart(0,"h1"),t.\u0275\u0275text(1,"Not implemented yet!"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"p"),t.\u0275\u0275text(3,"Implementing this will be "),t.\u0275\u0275elementStart(4,"b"),t.\u0275\u0275text(5,"your task"),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(6," during this exercise."),t.\u0275\u0275elementEnd())},encapsulation:2}),e})()}];var f=o(9534);let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e,bootstrap:[a]}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[p.BrowserModule,m.AuthLibModule,c.HttpClientModule,f.FormsModule,r.RouterModule.forRoot(h)]}),e})();(0,t.enableProdMode)(),p.platformBrowser().bootstrapModule(C).catch(e=>console.error(e))}}]);