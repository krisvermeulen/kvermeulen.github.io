"use strict";var Oe=Object.defineProperty,ge=Object.defineProperties,De=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,ye=(M,h,t)=>h in M?Oe(M,h,{enumerable:!0,configurable:!0,writable:!0,value:t}):M[h]=t,H=(M,h)=>{for(var t in h||(h={}))Ie.call(h,t)&&ye(M,t,h[t]);if(ne)for(var t of ne(h))me.call(h,t)&&ye(M,t,h[t]);return M},ee=(M,h)=>ge(M,De(h));(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[3130],{19027:(M,h,t)=>{t.d(h,{O:()=>Q});var m=t(15861),i=t(17626),w=t(84792),F=t(10699),v=t(21726),g=t(10349),f=t(77712),J=(t(85931),t(8314),t(90912),t(68653)),V=t(76898),K=t(2004),$=t(65234),Z=t(13812);const Q=A=>{let D=class extends A{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=null}readCapabilities(U,d){const u=d.capabilities&&d.capabilities.split(",").map(S=>S.toLowerCase().trim());if(!u)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const y=this.type,p=-1!==u.indexOf("query"),_=-1!==u.indexOf("map"),O=!!d.exportTilesAllowed,n=-1!==u.indexOf("tilemap"),I="tile"!==y&&!!d.supportsDynamicLayers,W="tile"!==y&&(!d.tileInfo||I),T="tile"!==y&&(!d.tileInfo||I),B="tile"!==y,x=!!d.cimVersion&&g.G.parse(d.cimVersion).since(1,4);return{operations:{supportsQuery:p,supportsExportMap:_,supportsExportTiles:O,supportsTileMap:n},exportMap:_?{supportsArcadeExpressionForLabeling:x,supportsSublayersChanges:B,supportsDynamicLayers:I,supportsSublayerVisibility:W,supportsSublayerDefinitionExpression:T}:null,exportTiles:O?{maxExportTilesCount:+d.maxExportTilesCount}:null}}readVersion(U,d){let u=d.currentVersion;return u||(u=d.hasOwnProperty("capabilities")||d.hasOwnProperty("tables")?10:d.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),u}fetchSublayerInfo(U,d){var u=this;return(0,m.Z)(function*(){return yield u.fetchAllLayersAndTables(d),u._allLayersAndTablesMap.get(U)})()}fetchAllLayersAndTables(U){var d=this;return(0,m.Z)(function*(){yield d.load(U),d._allLayersAndTablesPromise||(d._allLayersAndTablesPromise=(0,w.default)((0,v.mN)(d.url).path+"/layers",{responseType:"json",query:ee(H({f:"json"},d.customParameters),{token:d.apiKey})}).then(y=>{d._allLayersAndTablesMap=new Map;for(const p of y.data.layers)d._allLayersAndTablesMap.set(p.id,p);return{result:y.data}},y=>({error:y})));const u=yield d._allLayersAndTablesPromise;if((0,F.k_)(U),"result"in u)return u.result;throw u.error})()}};return(0,i._)([(0,f.Cb)({readOnly:!0})],D.prototype,"capabilities",void 0),(0,i._)([(0,J.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],D.prototype,"readCapabilities",null),(0,i._)([(0,f.Cb)({json:{read:{source:"copyrightText"}}})],D.prototype,"copyright",void 0),(0,i._)([(0,f.Cb)({type:K.Z})],D.prototype,"fullExtent",void 0),(0,i._)([(0,f.Cb)(Z.id)],D.prototype,"id",void 0),(0,i._)([(0,f.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],D.prototype,"legendEnabled",void 0),(0,i._)([(0,f.Cb)(Z.C_)],D.prototype,"popupEnabled",void 0),(0,i._)([(0,f.Cb)({type:$.Z})],D.prototype,"spatialReference",void 0),(0,i._)([(0,f.Cb)()],D.prototype,"version",void 0),(0,i._)([(0,J.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],D.prototype,"readVersion",null),D=(0,i._)([(0,V.j)("esri.layers.mixins.ArcGISMapService")],D),D}},66120:(M,h,t)=>{t.d(h,{x:()=>U});var m=t(17626),i=t(7093),w=t(46882),F=t(26584),v=t(63290),g=t(77712),b=(t(85931),t(8314),t(52323)),J=(t(90912),t(76898)),V=t(31283),K=t(39058),$=t(13410);const Z=v.Z.getLogger("esri.layers.TileLayer"),A=i.Z.ofType(K.Z);function D(d,u){d&&d.forEach(y=>{u(y),y.sublayers&&y.sublayers.length&&D(y.sublayers,u)})}const U=d=>{let u=class extends d{constructor(...y){super(...y),this.allSublayers=new w.Z({getCollections:()=>[this.sublayers],getChildrenFunction:p=>p.sublayers}),this.sublayersSourceJSON={2:{},3:{},4:{},5:{}},this.handles.add(this.watch("sublayers",(p,_)=>this._handleSublayersChange(p,_),!0))}readSublayers(y,p){if(!p||!y)return;const{sublayersSourceJSON:_}=this,O=(0,V.M9)(p.origin);if(O<2||(_[O]={context:p,visibleLayers:y.visibleLayers||_[O].visibleLayers,layers:y.layers||_[O].layers},O>2))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:n,origin:I}=this.createSublayersForOrigin("web-document"),W=(0,b.vw)(this);W.setDefaultOrigin(I),this._set("sublayers",new A(n)),W.setDefaultOrigin("user")}findSublayerById(y){return this.allSublayers.find(p=>p.id===y)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(y){const p=(0,V.M9)("web-document"===y?"web-map":y);let _=2,O=this.sublayersSourceJSON[2].layers,n=this.sublayersSourceJSON[2].context,I=null;const W=[3,4,5].filter(E=>E<=p);for(const E of W){const j=this.sublayersSourceJSON[E];(0,$.ac)(j.layers)&&(_=E,O=j.layers,n=j.context,j.visibleLayers&&(I={visibleLayers:j.visibleLayers,context:j.context}))}const T=[3,4,5].filter(E=>E>_&&E<=p);let B=null;for(const E of T){const{layers:j,visibleLayers:z,context:X}=this.sublayersSourceJSON[E];j&&(B={layers:j,context:X}),z&&(I={visibleLayers:z,context:X})}const x=function Q(d,u){const y=[],p={};return d&&d.forEach(_=>{const O=new K.Z;if(O.read(_,u),p[O.id]=O,null!=_.parentLayerId&&-1!==_.parentLayerId){const n=p[_.parentLayerId];n.sublayers||(n.sublayers=[]),n.sublayers.unshift(O)}else y.unshift(O)}),y}(O,n),S=new Map,G=new Set;if(B)for(const E of B.layers)S.set(E.id,E);if(I)for(const E of I.visibleLayers)G.add(E);return D(x,E=>{B&&E.read(S.get(E.id),B.context),I&&E.read({defaultVisibility:G.has(E.id)},I.context)}),{origin:(0,V.x3)(_),sublayers:new A({items:x})}}read(y,p){super.read(y,p),this.readSublayers(y,p)}_handleSublayersChange(y,p){p&&(p.forEach(_=>{_.parent=null,_.layer=null}),this.handles.remove("sublayers-owner")),y&&(y.forEach(_=>{_.parent=this,_.layer=this}),this.handles.add([y.on("after-add",({item:_})=>{_.parent=this,_.layer=this}),y.on("after-remove",({item:_})=>{_.parent=null,_.layer=null})],"sublayers-owner"),"tile"===this.type&&this.handles.add(y.on("before-changes",_=>{Z.error(new F.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),_.preventDefault()}),"sublayers-owner"))}};return(0,m._)([(0,g.Cb)({readOnly:!0})],u.prototype,"allSublayers",void 0),(0,m._)([(0,g.Cb)({readOnly:!0,type:i.Z.ofType(K.Z)})],u.prototype,"serviceSublayers",void 0),(0,m._)([(0,g.Cb)({value:null,type:A,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],u.prototype,"sublayers",void 0),(0,m._)([(0,g.Cb)({readOnly:!0})],u.prototype,"sublayersSourceJSON",void 0),u=(0,m._)([(0,J.j)("esri.layers.mixins.SublayersOwner")],u),u}},39058:(M,h,t)=>{t.d(h,{Z:()=>fe});var Y,m=t(15861),i=t(17626),F=(t(29132),t(73281)),K=(t(4832),t(49067),t(26284),t(54928),t(69357),t(40342),t(14726),t(33474),t(32088)),$=t(84792),Z=t(65787),Q=t(7093),A=t(26584),D=t(80542),U=t(61996),d=t(58817),u=t(47996),y=t(63290),p=t(62208),_=t(99959),O=t(21726),n=t(77712),I=t(52323),W=t(66656),T=t(68653),B=t(76898),x=t(99433),S=t(90912),G=t(31283),E=t(41638),j=t(36255),z=t(60466),X=t(170),de=t(2430),oe=t(15283),re=t(48370),le=t(84952),_e=t(49430),ue=t(79530),pe=t(2004);function te(e){return e&&"esriSMS"===e.type}function se(e,r,s){var o;const l=this.originIdOf(r)>=(0,G.M9)(s.origin);return{ignoreOrigin:!0,allowNull:l,enabled:!!s&&"map-image"===(null==(o=s.layer)?void 0:o.type)&&(s.writeSublayerStructure||l)}}function ae(e,r,s){var o;return{enabled:!!s&&"tile"===(null==(o=s.layer)?void 0:o.type)&&this._isOverridden(r)}}function C(e,r,s){return{ignoreOrigin:!0,enabled:s&&s.writeSublayerStructure||!1}}function k(e,r,s){return{ignoreOrigin:!0,enabled:!!s&&(s.writeSublayerStructure||this.originIdOf(r)>=(0,G.M9)(s.origin))}}const ie=y.Z.getLogger("esri.layers.support.Sublayer");let ce=0;const N=new Set;N.add("layer"),N.add("parent"),N.add("loaded"),N.add("loadStatus"),N.add("loadError"),N.add("loadWarnings");let a=Y=class extends((0,D.p)((0,_.R)((0,U.I)(u.Z)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}load(e){var r=this;return(0,m.Z)(function*(){return r.addResolvingPromise((0,m.Z)(function*(){var s;if(!r.layer&&!r.url)throw new A.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:r});let o=null;if(!r.layer||r.originIdOf("url")>2||"data-layer"===(null==(s=r.source)?void 0:s.type))o=(yield(0,$.default)(r.url,H({responseType:"json",query:{f:"json"}},e))).data;else{var l;let c=r.id;"map-layer"===(null==(l=r.source)?void 0:l.type)&&(c=r.source.mapLayerId),o=yield r.layer.fetchSublayerInfo(c,e)}o&&(r.sourceJSON=o,r.read({layerDefinition:o},{origin:"service"}))})()),r})()}readCapabilities(e,r){const s=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map(o=>o.trim()):[];return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:-1!==s.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new z.Z(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const s of r.fields)if("esriFieldTypeGlobalID"===s.type)return s.name}get id(){const e=this._get("id");return null==e?ce++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,s,o){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map(l=>l.write({},o))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(r=>r.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const s of r.fields)if("esriFieldTypeOID"===s.type)return s.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){const s=r.layerDefinition;return 1-.01*(null!=s.transparency?s.transparency:s.drawingInfo.transparency)}writeOpacity(e,r,s,o){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){r.parentLayerId=this.parent&&this.parent!==this.layer?(0,S.vU)(this.parent.id):-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const r of e.getSymbols())if((0,Z.dU)(r)){ie.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new re.R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,S.se)(Q.Z.ofType(Y),e)}writeSublayers(e,r,s){this.get("sublayers.length")&&(r[s]=this.sublayers.map(o=>o.id).toArray().reverse())}readTypeIdField(e,r){let s=(r=r.layerDefinition||r).typeIdField;if(s&&r.fields){s=s.toLowerCase();const o=r.fields.find(l=>l.name.toLowerCase()===s);o&&(s=o.name)}return null}get url(){var e,r;const s=null!=(e=null==(r=this.layer)?void 0:r.parsedUrl)?e:this._lastParsedUrl,o=this.source;if(!s)return null;if(this._lastParsedUrl=s,"map-layer"===(null==o?void 0:o.type))return`${s.path}/${o.mapLayerId}`;const l={layer:JSON.stringify({source:this.source})};return`${s.path}/dynamicLayer?${(0,O.B7)(l)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,s,o){r[s]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,I.vw)(this),r=new Y;return(0,I.vw)(r).store=e.clone(N),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return(0,_e.eZ)(this,e)}createQuery(){return new le.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}createFeatureLayer(){var e=this;return(0,m.Z)(function*(){var r,s;if(e.hasOwnProperty("sublayers"))return null;const o=null==(r=e.layer)?void 0:r.parsedUrl,l=new((yield Promise.resolve().then(t.bind(t,15382))).default)({url:o.path});return o&&e.source&&("map-layer"===e.source.type?l.layerId=e.source.mapLayerId:l.dynamicDataSource=e.source),null!=e.layer.refreshInterval&&(l.refreshInterval=e.layer.refreshInterval),e.definitionExpression&&(l.definitionExpression=e.definitionExpression),e.floorInfo&&(l.floorInfo=(0,d.d9)(e.floorInfo)),e.originIdOf("labelingInfo")>2&&(l.labelingInfo=(0,d.d9)(e.labelingInfo)),e.originIdOf("labelsVisible")>0&&(l.labelsVisible=e.labelsVisible),e.originIdOf("legendEnabled")>0&&(l.legendEnabled=e.legendEnabled),e.originIdOf("visible")>0&&(l.visible=e.visible),e.originIdOf("minScale")>0&&(l.minScale=e.minScale),e.originIdOf("maxScale")>0&&(l.maxScale=e.maxScale),e.originIdOf("opacity")>0&&(l.opacity=e.opacity),e.originIdOf("popupTemplate")>0&&(l.popupTemplate=(0,d.d9)(e.popupTemplate)),e.originIdOf("renderer")>2&&(l.renderer=(0,d.d9)(e.renderer)),"data-layer"===(null==(s=e.source)?void 0:s.type)&&(l.dynamicDataSource=e.source.clone()),e.originIdOf("title")>0&&(l.title=e.title),"map-image"===e.layer.type&&e.layer.originIdOf("customParameters")>0&&(l.customParameters=e.layer.customParameters),"tile"===e.layer.type&&e.layer.originIdOf("customParameters")>0&&(l.customParameters=e.layer.customParameters),l})()}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:s}=this;if(!r||!e)return null;const o=e.attributes?e.attributes[r]:void 0;if(null==o)return null;let l=null;return s.some(c=>{const{id:L}=c;return null!=L&&(L.toString()===o.toString()&&(l=c),!!l)}),l}getFieldDomain(e,r){const o=this.getFeatureType(r&&r.feature);if(o){const l=o.domains&&o.domains[e];if(l&&"inherited"!==l.type)return l}return this._getLayerDomain(e)}queryFeatures(e=this.createQuery(),r){var s=this;return(0,m.Z)(function*(){var o,l,c,L;if(yield s.load(),!s.get("capabilities.operations.supportsQuery"))throw new A.Z("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:be},{default:Ee}]=yield Promise.all([Promise.resolve().then(t.bind(t,20477)),Promise.resolve().then(t.bind(t,17253))]),he=yield be(s.url,le.Z.from(e),null!=(o=null==(l=s.layer)?void 0:l.spatialReference)?o:null,ee(H({},r),{query:ee(H({},null==(c=s.layer)?void 0:c.customParameters),{token:null==(L=s.layer)?void 0:L.apiKey})})),q=Ee.fromJSON(he.data);if(null!=q&&q.features)for(const ve of q.features)ve.sourceLayer=s;return q})()}toExportImageJSON(e){var r;const s={id:this.id,source:(null==(r=this.source)?void 0:r.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};if(this.definitionExpression){const c=(0,p.pC)(e)?(0,ue.Hp)(e,this):this.definitionExpression;s.definitionExpression=c}else(0,p.pC)(e)&&(s.definitionExpression=e);const o=["renderer","labelingInfo","opacity","labelsVisible"].reduce((c,L)=>(c[L]=this.originIdOf(L),c),{});if(Object.keys(o).some(c=>o[c]>2)){const c=s.drawingInfo={};o.renderer>2&&(c.renderer=this.renderer?this.renderer.toJSON():null),o.labelsVisible>2&&(c.showLabels=this.labelsVisible),this.labelsVisible&&o.labelingInfo>2&&(c.labelingInfo=this.labelingInfo?this.labelingInfo.map(L=>L.write({},{origin:"service",layer:this.layer})):null,c.showLabels=!0),o.opacity>2&&(c.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(c.renderer)}return s}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,r=>{r.color||"esriSMSX"!==r.style&&"esriSMSCross"!==r.style||(r.color=r.outline&&r.outline.color?r.outline.color:[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,r){if(e){const s="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const o of s)te(o.symbol)&&r(o.symbol);"symbol"in e&&te(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&te(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const s=this.layer,o=this._get(e);let l,c;switch(e){case"definitionExpression":case"floorInfo":l="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":l="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":l="supportsDynamicLayers",c="supportsModification"}const L=(0,I.vw)(this).getDefaultOrigin();if("service"!==L){if(l&&!1===this.get(`layer.capabilities.exportMap.${l}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${l}'`);if(c&&!1===this.get(`capabilities.exportMap.${c}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${c}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==L&&o!==r&&s&&s.emit&&s.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach(s=>{s.parent=null,s.layer=null}),this.handles.removeAll()),e&&(e.forEach(s=>{s.parent=this,s.layer=this.layer}),this.handles.add([e.on("after-add",({item:s})=>{s.parent=this,s.layer=this.layer}),e.on("after-remove",({item:s})=>{s.parent=null,s.layer=null}),e.on("before-changes",s=>{const o=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==o||o||(ie.error(new A.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),s.preventDefault())})]))}_logLockedError(e,r){ie.error(new A.Z("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};a.test={isMapImageLayerOverridePolicy:e=>e===C||e===se,isTileImageLayerOverridePolicy:e=>e===ae},(0,i._)([(0,n.Cb)({readOnly:!0})],a.prototype,"capabilities",void 0),(0,i._)([(0,T.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],a.prototype,"readCapabilities",null),(0,i._)([(0,n.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:se}}})],a.prototype,"definitionExpression",null),(0,i._)([(0,n.Cb)({type:[j.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],a.prototype,"fields",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],a.prototype,"fieldsIndex",null),(0,i._)([(0,n.Cb)({type:de.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:se},origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"floorInfo",null),(0,i._)([(0,n.Cb)({type:pe.Z,json:{read:{source:"layerDefinition.extent"}}})],a.prototype,"fullExtent",void 0),(0,i._)([(0,n.Cb)({type:String})],a.prototype,"globalIdField",void 0),(0,i._)([(0,T.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],a.prototype,"readGlobalIdFieldFromService",null),(0,i._)([(0,n.Cb)({type:S.z8,json:{write:{ignoreOrigin:!0}}})],a.prototype,"id",null),(0,i._)([(0,n.Cb)({value:null,type:[X.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:C}}})],a.prototype,"labelingInfo",null),(0,i._)([(0,x.c)("labelingInfo")],a.prototype,"writeLabelingInfo",null),(0,i._)([(0,n.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:C}}})],a.prototype,"labelsVisible",null),(0,i._)([(0,n.Cb)({value:null})],a.prototype,"layer",null),(0,i._)([(0,n.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:k}}})],a.prototype,"legendEnabled",void 0),(0,i._)([(0,n.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],a.prototype,"listMode",null),(0,i._)([(0,n.Cb)({type:Number,value:0,json:{write:{overridePolicy:C}}})],a.prototype,"minScale",null),(0,i._)([(0,T.r)("minScale",["minScale","layerDefinition.minScale"])],a.prototype,"readMinScale",null),(0,i._)([(0,n.Cb)({type:Number,value:0,json:{write:{overridePolicy:C}}})],a.prototype,"maxScale",null),(0,i._)([(0,T.r)("maxScale",["maxScale","layerDefinition.maxScale"])],a.prototype,"readMaxScale",null),(0,i._)([(0,n.Cb)({type:String})],a.prototype,"objectIdField",void 0),(0,i._)([(0,T.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],a.prototype,"readObjectIdFieldFromService",null),(0,i._)([(0,n.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:C}}})],a.prototype,"opacity",null),(0,i._)([(0,T.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],a.prototype,"readOpacity",null),(0,i._)([(0,x.c)("opacity")],a.prototype,"writeOpacity",null),(0,i._)([(0,n.Cb)({json:{type:S.z8,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:C}}})],a.prototype,"parent",void 0),(0,i._)([(0,x.c)("parent")],a.prototype,"writeParent",null),(0,i._)([(0,n.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:k,writer(e,r,s){r[s]=!e}}}})],a.prototype,"popupEnabled",void 0),(0,i._)([(0,n.Cb)({type:F.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:k}}})],a.prototype,"popupTemplate",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),(0,i._)([(0,n.Cb)({types:K.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:C},origins:{"web-scene":{types:K.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:C}}}}})],a.prototype,"renderer",null),(0,i._)([(0,n.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":oe.n,"map-layer":re.R}},cast(e){if(e){if("mapLayerId"in e)return(0,S.TJ)(re.R,e);if("dataSource"in e)return(0,S.TJ)(oe.n,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:C}}})],a.prototype,"source",null),(0,i._)([(0,n.Cb)()],a.prototype,"sourceJSON",void 0),(0,i._)([(0,n.Cb)({value:null,json:{type:[S.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:C}}})],a.prototype,"sublayers",null),(0,i._)([(0,W.p)("sublayers")],a.prototype,"castSublayers",null),(0,i._)([(0,x.c)("sublayers")],a.prototype,"writeSublayers",null),(0,i._)([(0,n.Cb)({type:String,json:{name:"name",write:{overridePolicy:k}}})],a.prototype,"title",void 0),(0,i._)([(0,n.Cb)({type:String})],a.prototype,"typeIdField",void 0),(0,i._)([(0,T.r)("typeIdField",["layerDefinition.typeIdField"])],a.prototype,"readTypeIdField",null),(0,i._)([(0,n.Cb)({type:[E.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],a.prototype,"types",void 0),(0,i._)([(0,n.Cb)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:ae}}})],a.prototype,"url",null),(0,i._)([(0,n.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:C}}})],a.prototype,"visible",null),(0,i._)([(0,x.c)("visible")],a.prototype,"writeVisible",null),a=Y=(0,i._)([(0,B.j)("esri.layers.support.Sublayer")],a);const fe=a},13410:(M,h,t)=>{function m(v,g,f){return g.flatten(({sublayers:b})=>b).length!==v.length||!!v.some(b=>b.originIdOf("minScale")>f||b.originIdOf("maxScale")>f||b.originIdOf("renderer")>f||b.originIdOf("labelingInfo")>f||b.originIdOf("opacity")>f||b.originIdOf("labelsVisible")>f||b.originIdOf("source")>f)||!w(v,g)}function i(v,g,f){return!!v.some(P=>{const b=P.source;return!(!b||"map-layer"===b.type&&b.mapLayerId===P.id&&(!b.gdbVersion||b.gdbVersion===f.gdbVersion))||P.originIdOf("renderer")>2||P.originIdOf("labelingInfo")>2||P.originIdOf("opacity")>2||P.originIdOf("labelsVisible")>2})||!w(v,g)}function w(v,g){if(!v||!v.length)return!0;const f=g.slice().reverse().flatten(({sublayers:R})=>R&&R.toArray().reverse()).map(R=>R.id).toArray();if(v.length>f.length)return!1;let P=0;const b=f.length;for(const{id:R}of v){for(;P<b&&f[P]!==R;)P++;if(P>=b)return!1}return!0}function F(v){return!!v&&v.some(g=>null!=g.minScale||g.layerDefinition&&null!=g.layerDefinition.minScale)}t.d(h,{FN:()=>i,ac:()=>F,QV:()=>m})}}]);