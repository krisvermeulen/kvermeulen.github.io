"use strict";(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[1843],{15994:(x,r,a)=>{a.d(r,{N:()=>u});const u={convertToGEGeometry:function m(i,t){return null==t?null:i.convertJSONToGeometry(t)},exportPoint:function l(i,t,n){const e=new c(i.getPointX(t),i.getPointY(t),n),s=i.hasZ(t),o=i.hasM(t);return s&&(e.z=i.getPointZ(t)),o&&(e.m=i.getPointM(t)),e},exportPolygon:function M(i,t,n){return new p(i.exportPaths(t),n,i.hasZ(t),i.hasM(t))},exportPolyline:function d(i,t,n){return new v(i.exportPaths(t),n,i.hasZ(t),i.hasM(t))},exportMultipoint:function f(i,t,n){return new g(i.exportPoints(t),n,i.hasZ(t),i.hasM(t))},exportExtent:function Z(i,t,n){const e=i.hasZ(t),s=i.hasM(t),o=new _(i.getXMin(t),i.getYMin(t),i.getXMax(t),i.getYMax(t),n);if(e){const h=i.getZExtent(t);o.zmin=h.vmin,o.zmax=h.vmax}if(s){const h=i.getMExtent(t);o.mmin=h.vmin,o.mmax=h.vmax}return o}};class c{constructor(t,n,e){this.x=t,this.y=n,this.spatialReference=e,this.z=void 0,this.m=void 0}}class p{constructor(t,n,e,s){this.rings=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),s&&(this.hasM=s)}}class v{constructor(t,n,e,s){this.paths=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),s&&(this.hasM=s)}}class g{constructor(t,n,e,s){this.points=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),s&&(this.hasM=s)}}class _{constructor(t,n,e,s,o){this.xmin=t,this.ymin=n,this.xmax=e,this.ymax=s,this.spatialReference=o,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},28632:(x,r,a)=>{a.r(r),a.d(r,{executeGEOperation:()=>m});var u=a(7006);function m(c){return(0,u.g[c.operation])(...c.parameters)}}}]);