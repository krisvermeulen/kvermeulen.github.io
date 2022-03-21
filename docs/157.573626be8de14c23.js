"use strict";var le=Object.defineProperty,ie=Object.defineProperties,ue=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,ee=(E,g,o)=>g in E?le(E,g,{enumerable:!0,configurable:!0,writable:!0,value:o}):E[g]=o,W=(E,g)=>{for(var o in g||(g={}))pe.call(g,o)&&ee(E,o,g[o]);if(q)for(var o of q(g))de.call(g,o)&&ee(E,o,g[o]);return E},te=(E,g)=>ie(E,ue(g));(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[157,587],{10157:(E,g,o)=>{o.d(g,{V:()=>re});var h=o(15861),d=o(17626),Z=o(84792),f=o(26584),N=(o(8314),o(63290)),b=o(62208),_=o(10699),S=o(21726),m=o(77712),P=(o(85931),o(90912),o(68653)),A=o(76898),j=o(99433),O=o(52489),T=o(2004),w=o(79334),$=o(65234),M=o(38305),s=o(13812),i=o(60595),v=o(84687),x=o(55463),U=o(59213),V=o(35948),K=o(10587);function D(p,l,t){return L.apply(this,arguments)}function L(){return(L=(0,h.Z)(function*(p,l,t){if(!l||!l.resources)return;const e=l.portalItem===p.portalItem?new Set(p.paths):new Set;p.paths.length=0,p.portalItem=l.portalItem;const r=new Set(l.resources.toKeep.map(u=>u.resource.path)),a=new Set,n=[];r.forEach(u=>{e.delete(u),p.paths.push(u)});for(const u of l.resources.toUpdate)if(e.delete(u.resource.path),r.has(u.resource.path)||a.has(u.resource.path)){const{resource:F,content:oe,finish:ae,error:se}=u,k=(0,K.getSiblingOfSameTypeI)(F,(0,V.D)());p.paths.push(k.path),n.push(I({resource:k,content:oe,finish:ae,error:se},t))}else p.paths.push(u.resource.path),n.push(Q(u,t)),a.add(u.resource.path);for(const u of l.resources.toAdd)n.push(I(u,t)),p.paths.push(u.resource.path);if(e.forEach(u=>{const F=l.portalItem.resourceFromPath(u);n.push(F.portalItem.removeResource(F).catch(()=>{}))}),0===n.length)return;const c=yield(0,_.as)(n);(0,_.k_)(t);const y=c.filter(u=>"error"in u).map(u=>u.error);if(y.length>0)throw new f.Z("save:resources","Failed to save one or more resources",{errors:y})})).apply(this,arguments)}function I(p,l){return J.apply(this,arguments)}function J(){return(J=(0,h.Z)(function*(p,l){const t=yield(0,U.q6)(p.resource.portalItem.addResource(p.resource,p.content,l));if(!0!==t.ok)throw p.error&&p.error(t.error),t.error;p.finish&&p.finish(p.resource)})).apply(this,arguments)}function Q(p,l){return G.apply(this,arguments)}function G(){return(G=(0,h.Z)(function*(p,l){const t=yield(0,U.q6)(p.resource.update(p.content,l));if(!0!==t.ok)throw p.error(t.error),t.error;p.finish(p.resource)})).apply(this,arguments)}const z=N.Z.getLogger("esri.layers.mixins.SceneService"),re=p=>{let l=class extends p{constructor(){var t;super(...arguments),t=this,this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,_.Ds)(function(){var e=(0,h.Z)(function*(r,a,n){switch(r){case 0:return t._save(a);case 1:return t._saveAs(n,a)}});return function(r,a,n){return e.apply(this,arguments)}}())}readSpatialReference(t,e){return this._readSpatialReference(e)}_readSpatialReference(t){if(null!=t.spatialReference)return $.Z.fromJSON(t.spatialReference);{const e=t.store,r=e.indexCRS||e.geographicCRS,a=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=a?new $.Z(a):null}}readFullExtent(t,e,r){if(null!=t&&"object"==typeof t){const c=null==t.spatialReference?te(W({},t),{spatialReference:this._readSpatialReference(e)}):t;return T.Z.fromJSON(c,r)}const a=e.store,n=this._readSpatialReference(e);return null==n||null==a||null==a.extent||!Array.isArray(a.extent)||a.extent.some(c=>c<X)?null:new T.Z({xmin:a.extent[0],ymin:a.extent[1],xmax:a.extent[2],ymax:a.extent[3],spatialReference:n})}parseVersionString(t){const e={major:Number.NaN,minor:Number.NaN,versionString:t},r=t.split(".");return r.length>=2&&(e.major=parseInt(r[0],10),e.minor=parseInt(r[1],10)),e}readVersion(t,e){const r=e.store,a=null!=r.version?r.version.toString():"";return this.parseVersionString(a)}readTitlePortalItem(t){return"item-title"!==this.sublayerTitleMode?void 0:t}readTitleService(t,e){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return(0,M.a7)(this.url,e.name);let a=e.name;if(!a&&this.url){const n=(0,M.Qc)(this.url);(0,b.pC)(n)&&(a=n.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(a=r+" - "+a),(0,M.ld)(a)}set url(t){const e=(0,M.XG)({layer:this,url:t,nonStandardUrlAllowed:!1,logger:z});this._set("url",e.url),null!=e.layerId&&this._set("layerId",e.layerId)}writeUrl(t,e,r,a){(0,M.wH)(this,t,"layers",e,a)}get parsedUrl(){const t=this._get("url");if(!t)return null;const e=(0,S.mN)(t);return null!=this.layerId&&(e.path=`${e.path}/layers/${this.layerId}`),e}_fetchIndexAndUpdateExtent(t,e){var r=this;return(0,h.Z)(function*(){r.indexInfo=(0,i.T)(r.parsedUrl.path,r.rootNode,t,r.apiKey,z,e),null==r.fullExtent||r.fullExtent.hasZ||r._updateExtent(yield r.indexInfo)})()}_updateExtent(t){if("page"===(null==t?void 0:t.type)){var e,r;const n=t.rootIndex%t.pageSize,c=null==(e=t.rootPage)||null==(r=e.nodes)?void 0:r[n];if(null==c||null==c.obb||null==c.obb.center||null==c.obb.halfSize)throw new f.Z("sceneservice:invalid-node-page","Invalid node page.");if(c.obb.center[0]<X||null==this.fullExtent||this.fullExtent.hasZ)return;const y=c.obb.halfSize,u=c.obb.center[2],F=Math.sqrt(y[0]*y[0]+y[1]*y[1]+y[2]*y[2]);this.fullExtent.zmin=u-F,this.fullExtent.zmax=u+F}else if("node"===(null==t?void 0:t.type)){var a;const n=null==(a=t.rootNode)?void 0:a.mbs;if(!Array.isArray(n)||4!==n.length||n[0]<X)return;const c=n[2],y=n[3];this.fullExtent.zmin=c-y,this.fullExtent.zmax=c+y}}_fetchService(t){var e=this;return(0,h.Z)(function*(){if(null==e.url)throw new f.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==e.layerId&&/SceneServer\/*$/i.test(e.url)){const r=yield e._fetchFirstLayerId(t);null!=r&&(e.layerId=r)}return e._fetchServiceLayer(t)})()}_fetchFirstLayerId(t){var e=this;return(0,h.Z)(function*(){const r=yield(0,Z.default)(e.url,{query:{f:"json",token:e.apiKey},responseType:"json",signal:t});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id})()}_fetchServiceLayer(t){var e=this;return(0,h.Z)(function*(){const r=yield(0,Z.default)(e.parsedUrl.path,{query:{f:"json",token:e.apiKey},responseType:"json",signal:t});r.ssl&&(e.url=e.url.replace(/^http:/i,"https:"));let a=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(a=!0),a)return e.read(r.data,{origin:"service",url:e.parsedUrl}),e._fetchVoxelServiceLayer();const n=r.data;e.read(n,{origin:"service",url:e.parsedUrl}),e.validateLayer(n)})()}_fetchVoxelServiceLayer(t){var e=this;return(0,h.Z)(function*(){const r=(yield(0,Z.default)(e.parsedUrl.path+"/layer",{query:{f:"json",token:e.apiKey},responseType:"json",signal:t})).data;e.read(r,{origin:"service",url:e.parsedUrl}),e.validateLayer(r)})()}_ensureLoadBeforeSave(){var t=this;return(0,h.Z)(function*(){yield t.load(),"beforeSave"in t&&"function"==typeof t.beforeSave&&(yield t.beforeSave())})()}validateLayer(t){}_updateTypeKeywords(t,e,r){t.typeKeywords||(t.typeKeywords=[]);const a=e.getTypeKeywords();for(const n of a)t.typeKeywords.push(n);t.typeKeywords&&(t.typeKeywords=t.typeKeywords.filter((n,c,y)=>y.indexOf(n)===c),1===r&&(t.typeKeywords=t.typeKeywords.filter(n=>"Hosted Service"!==n)))}_saveAs(t,e){var r=this;return(0,h.Z)(function*(){const a=W(W({},Y),e);let n=x.default.from(t);n||(z.error("_saveAs(): requires a portal item parameter"),yield Promise.reject(new f.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),n.id&&(n=n.clone(),n.id=null);const c=n.portal||v.Z.getDefault();yield r._ensureLoadBeforeSave(),n.type=H,n.portal=c;const y={origin:"portal-item",url:null,messages:[],portal:c,portalItem:n,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},u={layers:[r.write({},y)]};return yield Promise.all(y.resources.pendingOperations),yield r._validateAgainstJSONSchema(u,y,a),n.url=r.url,n.title||(n.title=r.title),r._updateTypeKeywords(n,a,1),yield c._signIn(),yield c.user.addItem({item:n,folder:a&&a.folder,data:u}),yield D(r.resourceReferences,y,null),r.portalItem=n,(0,O.D)(y),y.portalItem=n,n})()}_save(t){var e=this;return(0,h.Z)(function*(){const r=W(W({},Y),t);e.portalItem||(z.error("_save(): requires the .portalItem property to be set"),yield Promise.reject(new f.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),e.portalItem.type!==H&&(z.error("_save(): Non-matching portal item type. Got "+e.portalItem.type+", expected "+H),yield Promise.reject(new f.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${H}"`))),yield e._ensureLoadBeforeSave();const a={origin:"portal-item",url:e.portalItem.itemUrl&&(0,S.mN)(e.portalItem.itemUrl),messages:[],portal:e.portalItem.portal||v.Z.getDefault(),portalItem:e.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[e.write({},a)]};return yield Promise.all(a.resources.pendingOperations),yield e._validateAgainstJSONSchema(n,a,r),e.portalItem.url=e.url,e.portalItem.title||(e.portalItem.title=e.title),e._updateTypeKeywords(e.portalItem,r,0),yield e.portalItem.update({data:n}),yield D(e.resourceReferences,a,null),(0,O.D)(a),e.portalItem})()}_validateAgainstJSONSchema(t,e,r){return(0,h.Z)(function*(){let a=e.messages.filter(n=>"error"===n.type).map(n=>new f.Z(n.name,n.message,n.details));if(r&&r.validationOptions.ignoreUnsupported&&(a=a.filter(n=>"layer:unsupported"!==n.name&&"symbol:unsupported"!==n.name&&"symbol-layer:unsupported"!==n.name&&"property:unsupported"!==n.name&&"url:unsupported"!==n.name&&"scenemodification:unsupported"!==n.name)),r.validationOptions.enabled||ne){const n=(yield o.e(5496).then(o.bind(o,15496))).validate(t,r.portalItemLayerType);if(n.length>0){const c=`Layer item did not validate:\n${n.join("\n")}`;if(z.error(`_validateAgainstJSONSchema(): ${c}`),"throw"===r.validationOptions.failPolicy){const y=n.map(u=>new f.Z("sceneservice:schema-validation",u)).concat(a);throw new f.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:y})}}}if(a.length>0)throw new f.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})})()}};return(0,d._)([(0,m.Cb)(s.id)],l.prototype,"id",void 0),(0,d._)([(0,m.Cb)({type:$.Z})],l.prototype,"spatialReference",void 0),(0,d._)([(0,P.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],l.prototype,"readSpatialReference",null),(0,d._)([(0,m.Cb)({type:T.Z})],l.prototype,"fullExtent",void 0),(0,d._)([(0,P.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],l.prototype,"readFullExtent",null),(0,d._)([(0,m.Cb)({readOnly:!0,type:w.Z})],l.prototype,"heightModelInfo",void 0),(0,d._)([(0,m.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],l.prototype,"minScale",void 0),(0,d._)([(0,m.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],l.prototype,"maxScale",void 0),(0,d._)([(0,m.Cb)({readOnly:!0})],l.prototype,"version",void 0),(0,d._)([(0,P.r)("version",["store.version"])],l.prototype,"readVersion",null),(0,d._)([(0,m.Cb)({type:String,json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),(0,d._)([(0,m.Cb)({type:String,json:{read:!1}})],l.prototype,"sublayerTitleMode",void 0),(0,d._)([(0,m.Cb)({type:String})],l.prototype,"title",void 0),(0,d._)([(0,P.r)("portal-item","title")],l.prototype,"readTitlePortalItem",null),(0,d._)([(0,P.r)("service","title",["name"])],l.prototype,"readTitleService",null),(0,d._)([(0,m.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],l.prototype,"layerId",void 0),(0,d._)([(0,m.Cb)(s.HQ)],l.prototype,"url",null),(0,d._)([(0,j.c)("url")],l.prototype,"writeUrl",null),(0,d._)([(0,m.Cb)()],l.prototype,"parsedUrl",null),(0,d._)([(0,m.Cb)({readOnly:!0})],l.prototype,"store",void 0),(0,d._)([(0,m.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],l.prototype,"rootNode",void 0),l=(0,d._)([(0,A.j)("esri.layers.mixins.SceneService")],l),l},X=-1e38,ne=!1,H="Scene Service",Y={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},60595:(E,g,o)=>{o.d(g,{T:()=>R});var h=o(15861),d=o(84792),Z=o(26584),f=o(62208);function R(b,_,S,m,C,B){return N.apply(this,arguments)}function N(){return(N=(0,h.Z)(function*(b,_,S,m,C,B){let P=null;if((0,f.pC)(S)){const O=`${b}/nodepages/`,T=O+Math.floor(S.rootIndex/S.nodesPerPage);try{return{type:"page",rootPage:(yield(0,d.default)(T,{query:{f:"json",token:m},responseType:"json",signal:B})).data,rootIndex:S.rootIndex,pageSize:S.nodesPerPage,lodMetric:S.lodSelectionMetricType,urlPrefix:O}}catch(w){(0,f.pC)(C)&&C.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",T,w),P=w}}if(!_)return null;const A=`${b}/nodes/`,j=A+(_&&_.split("/").pop());try{return{type:"node",rootNode:(yield(0,d.default)(j,{query:{f:"json",token:m},responseType:"json",signal:B})).data,urlPrefix:A}}catch(O){throw new Z.Z("sceneservice:root-node-missing","Root node missing.",{pageError:P,nodeError:O,url:j})}})).apply(this,arguments)}},10587:(E,g,o)=>{o.r(g),o.d(g,{addOrUpdateResource:()=>_,contentToBlob:()=>T,fetchResources:()=>N,getSiblingOfSameType:()=>$,getSiblingOfSameTypeI:()=>M,removeAllResources:()=>B,removeResource:()=>m,splitPrefixFileNameAndExtension:()=>j});var h=o(15861),d=o(84792),Z=o(26584),f=o(62208),R=o(21726);function N(s){return b.apply(this,arguments)}function b(){return(b=(0,h.Z)(function*(s,i={},v){yield s.load(v);const x=(0,R.v_)(s.itemUrl,"resources"),{start:U=1,num:V=10,sortOrder:K="asc",sortField:D="created"}=i,L={query:{start:U,num:V,sortOrder:K,sortField:D,token:s.apiKey},signal:(0,f.U2)(v,"signal")},I=yield s.portal._request(x,L);return{total:I.total,nextStart:I.nextStart,resources:I.resources.map(({created:J,size:Q,resource:G})=>({created:new Date(J),size:Q,resource:s.resourceFromPath(G)}))}})).apply(this,arguments)}function _(s,i,v,x){return S.apply(this,arguments)}function S(){return(S=(0,h.Z)(function*(s,i,v,x){if(!s.hasPath())throw new Z.Z(`portal-item-resource-${i}:invalid-path`,"Resource does not have a valid path");const U=s.portalItem;yield U.load(x);const V=(0,R.v_)(U.userItemUrl,"add"===i?"addResources":"updateResources"),[K,D]=A(s.path),L=yield T(v),I=new FormData;return K&&"."!==K&&I.append("resourcesPrefix",K),I.append("fileName",D),I.append("file",L,D),I.append("f","json"),(0,f.pC)(x)&&x.access&&I.append("access",x.access),yield U.portal._request(V,{method:"post",body:I,signal:(0,f.U2)(x,"signal")}),s})).apply(this,arguments)}function m(s,i,v){return C.apply(this,arguments)}function C(){return(C=(0,h.Z)(function*(s,i,v){if(!i.hasPath())throw new Z.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");yield s.load(v);const x=(0,R.v_)(s.userItemUrl,"removeResources");yield s.portal._request(x,{method:"post",query:{resource:i.path},signal:(0,f.U2)(v,"signal")}),i.portalItem=null})).apply(this,arguments)}function B(s,i){return P.apply(this,arguments)}function P(){return(P=(0,h.Z)(function*(s,i){yield s.load(i);const v=(0,R.v_)(s.userItemUrl,"removeResources");return s.portal._request(v,{method:"post",query:{deleteAll:!0},signal:(0,f.U2)(i,"signal")})})).apply(this,arguments)}function A(s){const i=s.lastIndexOf("/");return-1===i?[".",s]:[s.slice(0,i),s.slice(i+1)]}function j(s){const[i,v]=function O(s){const i=(0,R.Ml)(s);return(0,f.Wi)(i)?[s,""]:[s.slice(0,s.length-i.length-1),`.${i}`]}(s),[x,U]=A(i);return[x,U,v]}function T(s){return w.apply(this,arguments)}function w(){return(w=(0,h.Z)(function*(s){return s instanceof Blob?s:(yield(0,d.default)(s.url,{responseType:"blob"})).data})).apply(this,arguments)}function $(s,i){if(!s.hasPath())return null;const[v,,x]=j(s.path);return s.portalItem.resourceFromPath((0,R.v_)(v,i+x))}function M(s,i){if(!s.hasPath())return null;const[v,,x]=j(s.path);return s.portalItem.resourceFromPath((0,R.v_)(v,i+x))}}}]);