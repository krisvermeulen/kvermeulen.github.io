"use strict";(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[6240],{16240:(y,a,s)=>{s.r(a),s.d(a,{default:()=>c});var e=s(17626),E=s(26584),u=s(99959),d=s(50618),t=s(77712),i=(s(85931),s(8314),s(90912),s(76898)),p=s(63602),O=s(6647);let o=class extends((0,O.I)((0,u.R)(p.Z))){constructor(_){super(_),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((_,n)=>{(0,d.Os)(()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let l="Unsupported layer type";r&&(l+=" "+r),n(new E.Z("layer:unsupported-layer-type",l,{layerType:r}))})}))}read(_,n){const r={resourceInfo:_};null!=_.id&&(r.id=_.id),null!=_.title&&(r.title=_.title),super.read(r,n)}write(_){return Object.assign(_||{},this.resourceInfo,{id:this.id})}};(0,e._)([(0,t.Cb)({readOnly:!0})],o.prototype,"resourceInfo",void 0),(0,e._)([(0,t.Cb)({type:["show","hide"]})],o.prototype,"listMode",void 0),(0,e._)([(0,t.Cb)({json:{read:!1},readOnly:!0,value:"unsupported"})],o.prototype,"type",void 0),o=(0,e._)([(0,i.j)("esri.layers.UnsupportedLayer")],o);const c=o}}]);