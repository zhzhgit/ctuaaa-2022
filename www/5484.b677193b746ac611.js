"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5484],{5484:(Z,c,g)=>{g.r(c),g.d(c,{LoginModule:()=>f});var p=g(9808),s=g(4182),e=g(2159),u=g(4030),n=g(9863),m=g(6401);const h=[{path:"",component:(()=>{class o{constructor(i,t){this.userData=i,this.router=t,this.login={username:"",password:""},this.submitted=!1}onLogin(i){this.submitted=!0,i.valid&&(this.userData.login(this.login.username),this.router.navigateByUrl("/app/tabs/schedule"))}onSignup(){this.router.navigateByUrl("/signup")}}return o.\u0275fac=function(i){return new(i||o)(n.Y36(m.m),n.Y36(u.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["page-login"]],decls:35,vars:4,consts:[["slot","start"],[1,"login-logo"],["src","assets/img/appicon.svg","alt","Ionic logo"],["novalidate",""],["loginForm","ngForm"],["position","stacked","color","primary"],["name","username","type","text","spellcheck","false","autocapitalize","off","required","",3,"ngModel","ngModelChange"],["username","ngModel"],["color","danger"],[1,"ion-padding-start",3,"hidden"],["name","password","type","password","required","",3,"ngModel","ngModelChange"],["password","ngModel"],["type","submit","expand","block",3,"click"],["color","light","expand","block",3,"click"]],template:function(i,t){if(1&i){const d=n.EpF();n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"Login"),n.qZA()()(),n.TgZ(6,"ion-content")(7,"div",1),n._UZ(8,"img",2),n.qZA(),n.TgZ(9,"form",3,4)(11,"ion-list")(12,"ion-item")(13,"ion-label",5),n._uU(14,"Username"),n.qZA(),n.TgZ(15,"ion-input",6,7),n.NdJ("ngModelChange",function(r){return t.login.username=r}),n.qZA()(),n.TgZ(17,"ion-text",8)(18,"p",9),n._uU(19," Username is required "),n.qZA()(),n.TgZ(20,"ion-item")(21,"ion-label",5),n._uU(22,"Password"),n.qZA(),n.TgZ(23,"ion-input",10,11),n.NdJ("ngModelChange",function(r){return t.login.password=r}),n.qZA()(),n.TgZ(25,"ion-text",8)(26,"p",9),n._uU(27," Password is required "),n.qZA()()(),n.TgZ(28,"ion-row")(29,"ion-col")(30,"ion-button",12),n.NdJ("click",function(){n.CHM(d);const r=n.MAs(10);return t.onLogin(r)}),n._uU(31,"Login"),n.qZA()(),n.TgZ(32,"ion-col")(33,"ion-button",13),n.NdJ("click",function(){return t.onSignup()}),n._uU(34,"Signup"),n.qZA()()()()()}if(2&i){const d=n.MAs(16),l=n.MAs(24);n.xp6(15),n.Q6J("ngModel",t.login.username),n.xp6(3),n.Q6J("hidden",d.valid||!1===t.submitted),n.xp6(5),n.Q6J("ngModel",t.login.password),n.xp6(3),n.Q6J("hidden",l.valid||!1===t.submitted)}},directives:[e.Gu,e.sr,e.Sm,e.fG,e.wd,e.W2,s._Y,s.JL,s.F,e.q_,e.Ie,e.Q$,e.pK,e.j9,s.Q7,s.JJ,s.On,e.yW,e.Nd,e.wI,e.YG],styles:[".login-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]}),o})()}];let M=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[u.Bz.forChild(h)],u.Bz]}),o})(),f=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[p.ez,s.u5,e.Pc,M]]}),o})()}}]);