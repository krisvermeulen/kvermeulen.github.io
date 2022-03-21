"use strict";var X=Object.defineProperty,Y=Object.defineProperties,w=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,L=(u,o,e)=>o in u?X(u,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[o]=e,h=(u,o)=>{for(var e in o||(o={}))k.call(o,e)&&L(u,e,o[e]);if(I)for(var e of I(o))q.call(o,e)&&L(u,e,o[e]);return u},M=(u,o)=>Y(u,w(o));(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[8731,9530],{59735:(u,o,e)=>{e.r(o),e.d(o,{default:()=>Q});var a=e(17626),O=(e(29132),e(84792)),v=e(26584),l=e(80542),_=e(62208),n=e(99959),f=e(10699),P=e(21726),p=e(77712),R=(e(85931),e(8314),e(66656)),S=e(68653),U=e(76898),A=e(99433),W=e(63602),j=e(50085),B=e(5143),K=e(19027),x=e(65088),N=e(552),b=e(50107),$=e(49286),G=e(6647),J=e(30346),Z=e(99555),F=e(66120),D=e(38305),V=e(13812),H=e(39058),T=e(65234);const g=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let s=class extends((0,N.h)((0,F.x)((0,Z.M)((0,$.q)((0,G.I)((0,B.Z)((0,K.O)((0,x.Y)((0,n.R)((0,l.p)((0,J.Q)((0,j.V)((0,b.N)(W.Z)))))))))))))){constructor(...r){super(...r),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(r,t){return"string"==typeof r?h({url:r},t):r}load(r){const t=(0,_.pC)(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},r).catch(f.r9).then(()=>this._fetchService(t))),Promise.resolve(this)}get attributionDataUrl(){var r;const t=null==(r=this.parsedUrl)?void 0:r.path.toLowerCase();return t&&this._getDefaultAttribution(this._getMapName(t))}readSpatialReference(r,t){return(r=r||t.tileInfo&&t.tileInfo.spatialReference)&&T.Z.fromJSON(r)}writeSublayers(r,t,i,c){if(!this.loaded||!r)return;const y=r.slice().reverse().flatten(({sublayers:E})=>E&&E.toArray().reverse()).toArray(),d=[],C=h({writeSublayerStructure:!1},c);y.forEach(E=>{const z=E.write({},C);d.push(z)}),d.some(E=>Object.keys(E).length>1)&&(t.layers=d)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(r){return Array.isArray(r)?r.map(t=>(0,P.mN)(t).path):null}fetchTile(r,t,i,c={}){const{signal:y}=c,d=this.getTileUrl(r,t,i),C={responseType:"image",signal:y,query:h({},this.refreshParameters)};return(0,O.default)(d,C).then(E=>E.data)}getTileUrl(r,t,i){const c=!this.tilemapCache&&this.supportsBlankTile,y=(0,P.B7)(M(h(M(h({},this.parsedUrl.query),{blankTile:!c&&null}),this.customParameters),{token:this.apiKey})),d=this.tileServers;return`${d&&d.length?d[t%d.length]:this.parsedUrl.path}/tile/${r}/${t}/${i}${y?"?"+y:""}`}_fetchService(r){return new Promise((t,i)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new v.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new v.Z("tile-layer:undefined-url","layer's url is not defined");const c=(0,D.Qc)(this.parsedUrl.path);if((0,_.pC)(c)&&"ImageServer"===c.serverType)throw new v.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,O.default)(this.parsedUrl.path,{query:M(h(h({f:"json"},this.parsedUrl.query),this.customParameters),{token:this.apiKey}),responseType:"json",signal:r}).then(t,i)}).then(t=>{if(t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,D.M8)(this.url))return this._fetchServerVersion(this.url,r).then(i=>{this.read({currentVersion:i})}).catch(()=>{})})}_fetchServerVersion(r,t){if(!(0,D.B5)(r))return Promise.reject();const i=r.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,O.default)(i,{query:M(h({f:"json"},this.customParameters),{token:this.apiKey}),responseType:"json",signal:t}).then(c=>{if(c.data&&c.data.currentVersion)return c.data.currentVersion;throw new v.Z("tile-layer:version-not-available")})}_getMapName(r){const t=r.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]}_getDefaultAttribution(r){if(!r)return;let t;r=r.toLowerCase();for(let i=0,c=g.length;i<c;i++)if(t=g[i],t.toLowerCase().indexOf(r)>-1)return(0,P.hF)("//static.arcgis.com/attribution/"+t)}_getDefaultTileServers(r){const t=-1!==r.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),i=-1!==r.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||i?[r,r.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,a._)([(0,p.Cb)({readOnly:!0})],s.prototype,"attributionDataUrl",null),(0,a._)([(0,p.Cb)({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),(0,a._)([(0,p.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),(0,a._)([(0,p.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),(0,a._)([(0,p.Cb)({type:Boolean})],s.prototype,"resampling",void 0),(0,a._)([(0,p.Cb)()],s.prototype,"sourceJSON",void 0),(0,a._)([(0,p.Cb)({type:T.Z})],s.prototype,"spatialReference",void 0),(0,a._)([(0,S.r)("spatialReference",["spatialReference","tileInfo"])],s.prototype,"readSpatialReference",null),(0,a._)([(0,p.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),(0,a._)([(0,p.Cb)({readOnly:!0})],s.prototype,"sublayers",void 0),(0,a._)([(0,A.c)("sublayers",{layers:{type:[H.Z]}})],s.prototype,"writeSublayers",null),(0,a._)([(0,p.Cb)({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),(0,a._)([(0,p.Cb)()],s.prototype,"tileServers",null),(0,a._)([(0,R.p)("tileServers")],s.prototype,"castTileServers",null),(0,a._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),(0,a._)([(0,p.Cb)(V.HQ)],s.prototype,"url",void 0),s=(0,a._)([(0,U.j)("esri.layers.TileLayer")],s),s.prototype.fetchTile.__isDefault__=!0;const Q=s},79530:(u,o,e)=>{function a(l){var _;const n=l.layer;return"floorInfo"in n&&null!=(_=n.floorInfo)&&_.floorField&&"floors"in l.view?v(l.view.floors,n.floorInfo.floorField):null}function m(l,_){var n;return"floorInfo"in _&&null!=(n=_.floorInfo)&&n.floorField?v(l,_.floorInfo.floorField):null}function O(l,_){const{definitionExpression:n}=_;return l?n?`(${n}) AND (${l})`:l:n}function v(l,_){if(null==l||!l.length)return null;const n=l.filter(f=>""!==f).map(f=>`'${f}'`);return n.push("''"),`${_} IN (${n.join(",")}) OR ${_} IS NULL`}e.d(o,{Hp:()=>O,cx:()=>a,ff:()=>m})}}]);