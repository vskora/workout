import{a as je,b as Ue,c as Qe,d as He,e as $e,f as We,g as Ze,h as Je,i as Ke,j as Xe,k as Ye,l as et,m as tt,n as it,o as rt,p as at,q as nt}from"./chunk-IIGIJTSR.js";import{a as re}from"./chunk-K7X7GKFR.js";import{$ as j,A as Se,D as we,E as Re,F as q,G as Te,H as Ae,I as Pe,J as O,K as Ve,L as Ge,O as ze,P as Be,R as qe,S as Oe,T as Le,V as Ne,W as ot,X as dt,Y as ct,Z as L,_ as N,b as De,d as Ie,f as Me,g as z,h as B,n as Fe,u as ie}from"./chunk-UDCRA2UT.js";import{$a as A,Db as ee,Eb as g,Fb as te,Ga as Y,Ha as E,Ia as D,Ja as I,K as de,Ka as M,L as ce,La as F,M as le,Ma as _,N as Z,Na as a,Nb as Ee,Oa as o,P as l,Pa as h,T as p,Ta as x,U as b,V as se,Va as u,Wa as m,Xa as R,Y as J,Ya as T,Z as me,Za as he,_a as fe,a as oe,aa as w,ab as P,b as ne,ea as K,fb as S,hb as d,ib as ge,jb as f,ka as X,la as c,lb as ve,ma as ue,mb as xe,nb as ye,ob as V,pa as _e,pb as ke,ra as k,sa as C,tb as G,va as v,wa as pe,xa as be,xb as Ce}from"./chunk-LHKYAZRL.js";var U=class r{#e=l(Ee);exerciseDetailsResource=De({stream:()=>this.#e.get("/exercises.json")});exerciseDetails=G(()=>this.exerciseDetailsResource.hasValue()?this.exerciseDetailsResource.value():[]);static \u0275fac=function(e){return new(e||r)};static \u0275prov=ce({token:r,factory:r.\u0275fac,providedIn:"root"})};var _t=["mat-internal-form-field",""],pt=["*"],lt=(()=>{class r{labelPosition="after";static \u0275fac=function(i){return new(i||r)};static \u0275cmp=v({type:r,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,t){i&2&&S("mdc-form-field--align-end",t.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:_t,ngContentSelectors:pt,decls:1,vars:0,template:function(i,t){i&1&&(R(),T(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return r})();var bt=["input"],ht=["formField"],ft=["*"],H=class{source;value;constructor(n,e){this.source=n,this.value=e}},gt={provide:Ve,useExisting:de(()=>ae),multi:!0},st=new Z("MatRadioGroup"),vt=new Z("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),ae=(()=>{class r{_changeDetector=l(ee);_value=null;_name=l(ie).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new J;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(i=>{i.checked=this.value===i.value,i.checked&&(this._selected=i)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new H(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(i){return new(i||r)};static \u0275dir=be({type:r,selectors:[["mat-radio-group"]],contentQueries:function(i,t,s){if(i&1&&he(s,$,5),i&2){let y;A(y=P())&&(t._radios=y)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",g],required:[2,"required","required",g],disabledInteractive:[2,"disabledInteractive","disabledInteractive",g]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[V([gt,{provide:st,useExisting:r}])]})}return r})(),$=(()=>{class r{_elementRef=l(K);_changeDetector=l(ee);_focusMonitor=l(Fe);_radioDispatcher=l(dt);_defaultOptions=l(vt,{optional:!0});_ngZone=l(me);_renderer=l(_e);_uniqueId=l(ie).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new J;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Se();_injector=l(se);constructor(){l(Ie).load(Re);let e=l(st,{optional:!0}),i=l(new Ce("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,i&&(this.tabIndex=te(i,0))}focus(e,i){i?this._focusMonitor.focusVia(this._inputElement,i,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,i)=>{e!==this.id&&i===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new H(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let i=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),i&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,i;if(!e||!e.selected||this.disabled?i=this.tabIndex:i=e.selected===this?this.tabIndex:-1,i!==this._previousTabIndex){let t=this._inputElement?.nativeElement;t&&(t.setAttribute("tabindex",i+""),this._previousTabIndex=i,ue(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===t&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===t&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=v({type:r,selectors:[["mat-radio-button"]],viewQuery:function(i,t){if(i&1&&fe(bt,5)(ht,7,K),i&2){let s;A(s=P())&&(t._inputElement=s.first),A(s=P())&&(t._rippleTrigger=s.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(i,t){i&1&&u("focus",function(){return t._inputElement.nativeElement.focus()}),i&2&&(Y("id",t.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),S("mat-primary",t.color==="primary")("mat-accent",t.color==="accent")("mat-warn",t.color==="warn")("mat-mdc-radio-checked",t.checked)("mat-mdc-radio-disabled",t.disabled)("mat-mdc-radio-disabled-interactive",t.disabledInteractive)("_mat-animation-noopable",t._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",g],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:te(e)],checked:[2,"checked","checked",g],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",g],required:[2,"required","required",g],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",g]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:ft,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(i,t){i&1&&(R(),a(0,"div",2,0)(2,"div",3)(3,"div",4),u("click",function(y){return t._onTouchTargetClick(y)}),o(),a(4,"input",5,1),u("change",function(y){return t._onInputInteraction(y)}),o(),a(6,"div",6),h(7,"div",7)(8,"div",8),o(),a(9,"div",9),h(10,"div",10),o()(),a(11,"label",11),T(12),o()()),i&2&&(_("labelPosition",t.labelPosition),c(2),S("mdc-radio--disabled",t.disabled),c(2),_("id",t.inputId)("checked",t.checked)("disabled",t.disabled&&!t.disabledInteractive)("required",t.required),Y("name",t.name)("value",t.value)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby)("aria-disabled",t.disabled&&t.disabledInteractive?"true":null),c(5),_("matRippleTrigger",t._rippleTrigger.nativeElement)("matRippleDisabled",t._isRippleDisabled())("matRippleCentered",!0),c(2),_("for",t.inputId))},dependencies:[we,lt],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return r})(),mt=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=pe({type:r});static \u0275inj=le({imports:[Te,$,Me]})}return r})();function Dt(r,n){if(r&1&&h(0,"img",3),r&2){let e=n.$implicit;_("src",e,X)}}function It(r,n){if(r&1){let e=x();a(0,"mat-form-field")(1,"button",7),u("click",function(){p(e);let t=m(2);return b(t.remove(t.exerciseForm.reps))}),a(2,"mat-icon"),d(3,"remove"),o()(),a(4,"mat-label"),d(5,"Reps"),o(),h(6,"input",8),k(),a(7,"button",9),u("click",function(){p(e);let t=m(2);return b(t.add(t.exerciseForm.reps))}),a(8,"mat-icon"),d(9,"add"),o()()()}if(r&2){let e=m(2);c(6),_("formField",e.exerciseForm.reps),C()}}function Mt(r,n){if(r&1){let e=x();a(0,"mat-form-field")(1,"button",7),u("click",function(){p(e);let t=m(2);return b(t.remove(t.exerciseForm.duration))}),a(2,"mat-icon"),d(3,"remove"),o()(),a(4,"mat-label"),d(5,"Duration (seconds)"),o(),h(6,"input",8),k(),a(7,"button",9),u("click",function(){p(e);let t=m(2);return b(t.add(t.exerciseForm.duration))}),a(8,"mat-icon"),d(9,"add"),o()()()}if(r&2){let e=m(2);c(6),_("formField",e.exerciseForm.duration),C()}}function Ft(r,n){if(r&1){let e=x();a(0,"h3"),d(1),o(),M(2,Dt,1,1,"img",3,I),a(4,"form")(5,"mat-radio-group",4)(6,"mat-radio-button",5),d(7,"Reps"),o(),a(8,"mat-radio-button",6),d(9,"Time"),o()(),k(),a(10,"div"),E(11,It,10,1,"mat-form-field")(12,Mt,10,1,"mat-form-field"),a(13,"mat-form-field")(14,"button",7),u("click",function(){p(e);let t=m();return b(t.remove(t.exerciseForm.rest))}),a(15,"mat-icon"),d(16,"remove"),o()(),a(17,"mat-label"),d(18,"Rest (seconds)"),o(),h(19,"input",8),k(),a(20,"button",9),u("click",function(){p(e);let t=m();return b(t.add(t.exerciseForm.rest))}),a(21,"mat-icon"),d(22,"add"),o()()(),a(23,"mat-form-field")(24,"button",7),u("click",function(){p(e);let t=m();return b(t.remove(t.exerciseForm.sets))}),a(25,"mat-icon"),d(26,"remove"),o()(),a(27,"mat-label"),d(28,"Sets"),o(),h(29,"input",8),k(),a(30,"button",9),u("click",function(){p(e);let t=m();return b(t.add(t.exerciseForm.sets))}),a(31,"mat-icon"),d(32,"add"),o()()()()()}if(r&2){let e,i,t=m();c(),ge((e=t.selectedExerciseDetail())==null?null:e.name),c(),F((i=t.selectedExerciseDetail())==null?null:i.images),c(3),_("formField",t.exerciseForm.type),C(),c(6),D(t.exerciseModel().type==="reps"&&t.exerciseForm.reps?11:t.exerciseForm.duration?12:-1),c(8),_("formField",t.exerciseForm.rest),C(),c(10),_("formField",t.exerciseForm.sets),C()}}function St(r,n){if(r&1){let e=x();a(0,"mat-list-item",14),u("click",function(){let t=p(e).$implicit,s=m(2);return b(s.select(t))}),d(1),h(2,"img",15),o()}if(r&2){let e=n.$implicit;c(),f(" ",e.name," "),c(),_("src",e.images[0],X)}}function wt(r,n){if(r&1){let e=x();a(0,"mat-form-field",10)(1,"mat-label"),d(2,"Search"),o(),a(3,"input",11),ye("ngModelChange",function(t){p(e);let s=m();return xe(s.search,t)||(s.search=t),b(t)}),o()(),a(4,"mat-list",12),M(5,St,3,2,"mat-list-item",13,I),o()}if(r&2){let e=m();c(3),ve("ngModel",e.search),c(2),F(e.filteredExerciseDetails())}}var W=class r{#e=l(U);#t=l(Qe);exerciseDetails=this.#e.exerciseDetails;search=w("");filteredExerciseDetails=G(()=>{let n=this.exerciseDetails(),e=this.search();return e===""?n:n.filter(i=>i.name.toLowerCase().includes(e))});selectedExerciseDetail=w(null);select(n){this.selectedExerciseDetail.set(n)}exerciseModel=w({type:"reps",reps:12,duration:30,rest:30,sets:1});exerciseForm=je(this.exerciseModel);add(n){n().value.set(n().value()+1)}remove(n){n().value.set(n().value()-1)}addToProgram(){let n=ne(oe({},this.exerciseModel()),{details:this.selectedExerciseDetail(),id:crypto.randomUUID()});this.#t.close(n)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=v({type:r,selectors:[["app-exercise-add-dialog"]],decls:10,vars:3,consts:[["mat-dialog-title",""],["matButton","",3,"mat-dialog-close"],["matButton","filled","cdkFocusInitial","",3,"click","mat-dialog-close"],["width","100",3,"src"],["aria-label","Select type",3,"formField"],["value","reps"],["value","time"],["matIconButton","","matPrefix","",3,"click"],["matInput","","type","number",3,"formField"],["matIconButton","","matSuffix","",3,"click"],[1,"search"],["matInput","",3,"ngModelChange","ngModel"],["role","list"],["role","listitem"],["role","listitem",3,"click"],["matListItemAvatar","",3,"src"]],template:function(e,i){e&1&&(a(0,"h2",0),d(1,"Add exercise"),o(),a(2,"mat-dialog-content"),E(3,Ft,33,5)(4,wt,7,1),o(),a(5,"mat-dialog-actions")(6,"button",1),d(7,"Cancel"),o(),a(8,"button",2),u("click",function(){return i.addToProgram()}),d(9,"Add"),o()()),e&2&&(c(3),D(i.selectedExerciseDetail()?3:4),c(3),_("mat-dialog-close",void 0),c(2),_("mat-dialog-close",!0))},dependencies:[Ke,$e,We,Je,Ze,it,tt,Xe,Ye,et,at,rt,O,Ae,q,Ne,Le,Ge,ze,Be,Oe,qe,j,L,N,ct,mt,ae,$,Ue,B,z],styles:["[_nghost-%COMP%]{--mat-list-list-item-one-line-container-height: 100px;--mat-list-list-item-leading-avatar-size: 100px;--mat-list-list-item-leading-avatar-shape: 0}.search[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:min-content}"]})};var Rt=()=>["programs"];function Tt(r,n){if(r&1&&d(0),r&2){let e=m().$implicit;f(" Reps: ",e.reps," ")}}function At(r,n){if(r&1&&d(0),r&2){let e=m().$implicit;f(" Duration (seconds): ",e.duration," ")}}function Pt(r,n){if(r&1){let e=x();a(0,"mat-list-item",3)(1,"div",5)(2,"div",6)(3,"span"),d(4),o(),a(5,"span"),d(6),o(),a(7,"span"),E(8,Tt,1,1)(9,At,1,1),o(),a(10,"span"),d(11),o()(),a(12,"div")(13,"button",7),u("confirm",function(){let t=p(e).$implicit,s=m();return b(s.delete(t.id))}),a(14,"mat-icon"),d(15,"delete"),o()()()()()}if(r&2){let e=n.$implicit;c(4),f("Name: ",e.details.name),c(2),f("Type: ",e.type),c(2),D(e.type==="reps"?8:e.type==="time"?9:-1),c(3),f("Sets: ",e.sets)}}var ut=class r{#e=l(re);#t=l(He);program=this.#e.program;add(){this.#t.open(W).afterClosed().subscribe(e=>{e&&this.#e.addExercise(e)})}delete(n){this.#e.deleteExercise(n)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=v({type:r,selectors:[["app-program"]],features:[V([re])],decls:12,vars:3,consts:[[1,"program-wrapper"],["matIconButton","",3,"navigate"],["role","list"],["role","listitem"],["matFab","",1,"floating-button",3,"click"],[1,"row"],[1,"details"],["matIconButton","","appConfirm","",3,"confirm"]],template:function(e,i){if(e&1&&(a(0,"div",0)(1,"h1")(2,"button",1)(3,"mat-icon"),d(4,"arrow_back"),o()(),d(5),o(),a(6,"mat-list",2),M(7,Pt,16,4,"mat-list-item",3,I),o()(),a(9,"button",4),u("click",function(){return i.add()}),a(10,"mat-icon"),d(11,"add"),o()()),e&2){let t,s;c(2),_("navigate",ke(2,Rt)),c(3),f(" ",(t=i.program())==null?null:t.name," "),c(2),F((s=i.program())==null?null:s.exercises)}},dependencies:[B,z,O,q,Pe,j,L,N,nt,ot],styles:[".program-wrapper[_ngcontent-%COMP%]{padding:var(--spacer-md) var(--spacer-md) 0}.floating-button[_ngcontent-%COMP%]{position:fixed;right:var(--spacer-md);bottom:var(--spacer-md)}.row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto}.details[_ngcontent-%COMP%]{display:flex;gap:var(--spacer-md)}"]})};export{ut as Program};
