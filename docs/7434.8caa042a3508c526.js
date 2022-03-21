"use strict";var H=Object.defineProperty,z=Object.defineProperties,G=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,W=(d,a,e)=>a in d?H(d,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[a]=e,j=(d,a)=>{for(var e in a||(a={}))Q.call(a,e)&&W(d,e,a[e]);if(L)for(var e of L(a))J.call(a,e)&&W(d,e,a[e]);return d},B=(d,a)=>z(d,G(a));(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[7434],{67434:(d,a,e)=>{e.r(a),e.d(a,{default:()=>w});var p=e(15861),v=e(17626),c=(e(8314),e(62208)),u=(e(63290),e(90912),e(85931),e(82255),e(76898)),h=e(84682),D=e(36859),A=e(39351),g=e(13112),E=e(55376);class M{constructor(s,r){this.offset=s,this.extent=r}}let y=class extends g.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}update(n,s){var r=this;return(0,p.Z)(function*(){const _=s.schema.processors[0];"heatmap"===_.type&&(0,h.Hg)(r._schema,_)&&(n.mesh=!0,r._schema=_)})()}onTileUpdate(n){for(const s of n.removed)this._tileKeyToFeatureSets.delete(s.key.id)}onTileClear(n){return this._tileKeyToFeatureSets.delete(n.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:n.id,data:{clear:!0}})}onTileMessage(n,s,r){var _=this;return(0,p.Z)(function*(){_._tileKeyToFeatureSets.has(n.key.id)||_._tileKeyToFeatureSets.set(n.key.id,new Map);const t=_._tileKeyToFeatureSets.get(n.key.id);if((0,c.pC)(s.addOrUpdate)&&s.addOrUpdate.hasFeatures&&t.set(s.addOrUpdate.instance,s),s.end){const l=[],C=function S(n){const s=n.key,r=new Map,_=256,t=A.I_,l=n.tileInfoView.tileInfo.isWrappable;return r.set((0,E.M)(s,-1,-1,l).id,new M([-t,-t],[t-_,t-_,t,t])),r.set((0,E.M)(s,0,-1,l).id,new M([0,-t],[0,t-_,t,t])),r.set((0,E.M)(s,1,-1,l).id,new M([t,-t],[0,t-_,_,t])),r.set((0,E.M)(s,-1,0,l).id,new M([-t,0],[t-_,0,t,t])),r.set((0,E.M)(s,1,0,l).id,new M([t,0],[0,0,_,t])),r.set((0,E.M)(s,-1,1,l).id,new M([-t,t],[t-_,0,t,_])),r.set((0,E.M)(s,0,1,l).id,new M([0,t],[0,0,t,_])),r.set((0,E.M)(s,1,1,l).id,new M([t,t],[0,0,_,_])),r}(n);_._tileKeyToFeatureSets.forEach((R,U)=>{if(U===n.key.id)R.forEach(K=>(0,c.Po)(K.addOrUpdate,m=>l.push(m)));else if(C.has(U)){const K=C.get(U),[m,V]=K.offset;R.forEach(Z=>(0,c.Po)(Z.addOrUpdate,b=>{const x=b.transform(m,V,1,1);l.push(x)}))}});const I=(0,D.QM)(l,_._schema.mesh,512,512),k=[I.matrix];return _.remoteClient.invoke("tileRenderer.onTileData",{tileKey:n.key.id,intensityInfo:I},B(j({},r),{transferList:k}))}})()}onTileError(n,s,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:n.id,error:s},r)}};y=(0,v._)([(0,u.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],y);const w=y},55376:(d,a,e)=>{function T(c,O,P,f){const i=c.clone(),u=1<<i.level,h=i.col+O,D=i.row+P;return f&&h<0?(i.col=h+u,i.world-=1):h>=u?(i.col=h-u,i.world+=1):i.col=h,i.row=D,i}e.d(a,{M:()=>T}),e(81340)}}]);