"use strict";var q=Object.defineProperty,_=Object.defineProperties,tt=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,T=(n,a,t)=>a in n?q(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,h=(n,a)=>{for(var t in a||(a={}))rt.call(a,t)&&T(n,t,a[t]);if(N)for(var t of N(a))et.call(a,t)&&T(n,t,a[t]);return n},Z=(n,a)=>_(n,tt(a));(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[6359],{36359:(n,a,t)=>{t.r(a),t.d(a,{default:()=>H});var s=t(17626),l=t(77712),P=(t(85931),t(8314),t(90912),t(76898)),b=t(15861),j=t(84792),J=t(38811),O=t(62825),u=t(42043),x=t(2618),R=(t(29132),t(88879)),I=t(86162),U=t(62208),d=t(68653),E=t(65234),G=t(92383),M=t(17253),z=t(12334),C=t(49672),D=t(55214),K=t(37118);function v(e){return M.default.fromJSON(e).features.map(r=>r.geometry)}let i=class extends I.wq{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return v(e)}readIncidents(e){return v(e)}readPointBarriers(e,r){return v(r.barriers)}readPolylineBarriers(e){return v(e)}readPolygonBarriers(e){return v(e)}readRoutes(e){return function Q(e){return e.features.map(r=>{const m=E.Z.fromJSON(e.spatialReference),y=R.Z.fromJSON(r);return(0,U.pC)(y.geometry)&&(y.geometry.spatialReference=m),y})}(e)}};(0,s._)([(0,l.Cb)({type:[G.Z]})],i.prototype,"directions",void 0),(0,s._)([(0,l.Cb)({type:[C.Z]})],i.prototype,"facilities",void 0),(0,s._)([(0,d.r)("facilities")],i.prototype,"readFacilities",null),(0,s._)([(0,l.Cb)({type:[C.Z]})],i.prototype,"incidents",void 0),(0,s._)([(0,d.r)("incidents")],i.prototype,"readIncidents",null),(0,s._)([(0,l.Cb)({type:[z.Z]})],i.prototype,"messages",void 0),(0,s._)([(0,l.Cb)({type:[C.Z]})],i.prototype,"pointBarriers",void 0),(0,s._)([(0,d.r)("pointBarriers",["barriers"])],i.prototype,"readPointBarriers",null),(0,s._)([(0,l.Cb)({type:[D.Z]})],i.prototype,"polylineBarriers",void 0),(0,s._)([(0,d.r)("polylineBarriers")],i.prototype,"readPolylineBarriers",null),(0,s._)([(0,l.Cb)({type:[K.Z]})],i.prototype,"polygonBarriers",void 0),(0,s._)([(0,d.r)("polygonBarriers")],i.prototype,"readPolygonBarriers",null),(0,s._)([(0,l.Cb)({type:[R.Z]})],i.prototype,"routes",void 0),(0,s._)([(0,d.r)("routes")],i.prototype,"readRoutes",null),i=(0,s._)([(0,P.j)("esri.rest.support.ClosestFacilitySolveResult")],i);const V=i,W=(0,J.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});function S(){return(S=(0,b.Z)(function*(e,r,m){const y=[],f=[],p={},c={},A=(0,x.en)(e),{path:F}=A;r.incidents&&r.incidents.features&&(0,u.et)(r.incidents.features,f,"incidents.features",p),r.facilities&&r.facilities.features&&(0,u.et)(r.facilities.features,f,"facilities.features",p),r.pointBarriers&&r.pointBarriers.features&&(0,u.et)(r.pointBarriers.features,f,"pointBarriers.features",p),r.polylineBarriers&&r.polylineBarriers.features&&(0,u.et)(r.polylineBarriers.features,f,"polylineBarriers.features",p),r.polygonBarriers&&r.polygonBarriers.features&&(0,u.et)(r.polygonBarriers.features,f,"polygonBarriers.features",p);const L=yield(0,O.aX)(f);for(const o in p){const B=p[o];y.push(o),c[o]=L.slice(B[0],B[1])}if((0,u.Wf)(c,y)){let o=null;try{o=yield(0,u.bI)(F,r.apiKey,m)}catch(B){}o&&!o.hasZ&&(0,u.ef)(c,y)}for(const o in c)c[o].forEach((B,w)=>{r.get(o)[w].geometry=B});const Y=Z(h({},m),{query:Z(h(h({},A.query),W.toQueryParams(r)),{f:"json"})}),{data:k}=yield(0,j.default)(`${F}/solveClosestFacility`,Y);return V.fromJSON(k)})).apply(this,arguments)}var $=t(79308);let g=class extends $.Z{constructor(e){super(e),this.url=null}solve(e,r){return function X(e,r,m){return S.apply(this,arguments)}(this.url,e,r)}};(0,s._)([(0,l.Cb)()],g.prototype,"url",void 0),g=(0,s._)([(0,P.j)("esri.tasks.ClosestFacilityTask")],g);const H=g}}]);