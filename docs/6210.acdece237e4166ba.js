"use strict";var Fe=Object.defineProperty,Ce=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,J=(C,g,o)=>g in C?Fe(C,g,{enumerable:!0,configurable:!0,writable:!0,value:o}):C[g]=o,A=(C,g)=>{for(var o in g||(g={}))be.call(g,o)&&J(C,o,g[o]);if(W)for(var o of W(g))Ie.call(g,o)&&J(C,o,g[o]);return C},R=(C,g)=>Ce(C,Se(g));(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[6210],{56210:(C,g,o)=>{o.r(g),o.d(g,{FeatureServiceSnappingSourceWorker:()=>b,default:()=>ve});var h=o(15861),u=o(17626),N=o(61885),L=o(72392),a=o(62208),m=o(10699),Q=o(27e3),c=o(77712),U=o(85931),I=(o(8314),o(90912),o(76898)),Z=o(65234),D=o(82708),V=o(38330),k=o(2584),G=o(62708),T=o(84952),z=o(14517);let x=class extends z.Z{constructor(){super(...arguments),this.updating=!1,this.pending=[]}push(e,t){this.pending.push({promise:e,callback:t}),1===this.pending.length&&this.process()}process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const e=this.pending[0];e.promise.then(t=>e.callback(t)).catch(()=>{}).then(()=>{this.pending.shift(),this.process()})}};(0,u._)([(0,c.Cb)()],x.prototype,"updating",void 0),x=(0,u._)([(0,I.j)("esri.core.AsyncSequence")],x);var $=o(80542),K=o(54024),X=o(63290),Y=o(2004),F=o(65401),w=o(82054),q=o(98558),P=o(20477),M=o(59213);class _{constructor(t,i){this.data=t,this.resolution=i,this.state={type:0},this.alive=!0}process(t){switch(this.state.type){case 0:return this.state=this.gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case 1:case 3:break;case 2:return this.state=this.gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case 4:this.state=this.goToDone(this.state,t)}return null}get debugInfo(){return{data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case 0:case 1:return 0;case 2:return this.state.featureCount;case 3:return this.state.previous.featureCount;case 4:return this.state.features.length;case 5:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case 0:return"created";case 1:return"fetch-count";case 2:return"fetched-count";case 3:return"fetch-features";case 4:return"fetched-features";case 5:return"done"}}gotoFetchCount(t,i){var s=this;return{type:1,previous:t,task:(0,m.vr)(function(){var r=(0,h.Z)(function*(n){const l=yield(0,M.mt)(i.fetchCount(s,n));1===s.state.type&&(s.state=s.gotoFetchedCount(s.state,l.ok?l.value:1/0))});return function(n){return r.apply(this,arguments)}}())}}gotoFetchedCount(t,i){return{type:2,featureCount:i,previous:t}}gotoFetchFeatures(t,i){var s=this;return{type:3,previous:t,task:(0,m.vr)(function(){var r=(0,h.Z)(function*(n){const l=yield(0,M.mt)(i.fetchFeatures(s,t.featureCount,n));3===s.state.type&&(s.state=s.gotoFetchedFeatures(s.state,l.ok?l.value:[]))});return function(n){return r.apply(this,arguments)}}())}}gotoFetchedFeatures(t,i){return{type:4,previous:t,features:i}}goToDone(t,i){return i.finish(this,t.features),{type:5,previous:t}}reset(){const t=this.state;switch(this.state={type:0},t.type){case 0:case 2:case 4:case 5:break;case 1:case 3:t.task.abort()}}intersects(t){return!(!(0,a.Wi)(t)&&this.data.extent)||((0,F.oJ)(t,j),(0,F.kK)(this.data.extent,j))}}const j=(0,F.Ue)(),ee=X.Z.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let d=class extends $.r{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new x,this.pendingEditsAbortController=new AbortController}get minimumVerticesPerFeature(){var e;switch(null==(e=this.store)?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),i=this.filterProperties(e);JSON.stringify(t)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&((0,a.pC)(e)&&(0,a.pC)(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this.initializeFetchExtent(),this.updatingHandles.add(this,"configuration",()=>this.refresh()),this.updatingHandles.add(this,"tilesOfInterest",(e,t)=>{(0,U.fS)(e,t,({id:i},{id:s})=>i===s)||this.process()},1)}destroy(){this.pendingTiles.forEach(e=>this.deletePendingTile(e)),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null}refresh(){this.store.refresh(),this.pendingTiles.forEach(e=>this.deletePendingTile(e)),this.process()}applyEdits(e){var t=this;this.pendingEdits.push(e,function(){var i=(0,h.Z)(function*(s){if(0===s.addedFeatures.length&&0===s.updatedFeatures.length&&0===s.deletedFeatures.length)return;for(const[,n]of t.pendingTiles)n.reset();const r=R(A({},s),{deletedFeatures:s.deletedFeatures.map(({objectId:n,globalId:l})=>n&&-1!==n?n:t.lookupObjectIdByGlobalId(l))});yield t.updatingHandles.addPromise(t.store.processEdits(r,(n,l)=>t.queryFeaturesById(n,l),t.pendingEditsAbortController.signal)),t.processPendingTiles()});return function(s){return i.apply(this,arguments)}}())}initializeFetchExtent(){var e=this;if(!this.capabilities.query.supportsExtent)return;const t=(0,m.vr)(function(){var i=(0,h.Z)(function*(s){try{var r;const n=yield(0,P.executeQueryForExtent)(e.url,new T.Z({where:"1=1",outSpatialReference:e.spatialReference,cacheHint:!!e.capabilities.query.supportsCacheHint||void 0}),{query:e.configuration.customParameters,signal:s});e.store.extent=Y.Z.fromJSON(null==(r=n.data)?void 0:r.extent)}catch(n){(0,m.r9)(n),ee.warn("Failed to fetch data extent",n)}});return function(s){return i.apply(this,arguments)}}());this.updatingHandles.addPromise(t.promise.then(()=>this.process())),this.handles.add((0,K.kB)(()=>t.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}process(){this.markTilesNotAlive(),this.createPendingTiles(),this.deletePendingTiles(),this.processPendingTiles()}markTilesNotAlive(){for(const[,e]of this.pendingTiles)e.alive=!1}createPendingTiles(){const e=this.collectMissingTilesInfo();if(this.setAvailability((0,a.Wi)(e)?1:e.coveredArea/e.fullArea),!(0,a.Wi)(e))for(const{data:t,resolution:i}of e.missingTiles){const s=this.pendingTiles.get(t.id);s?(s.resolution=i,s.alive=!0):this.createPendingTile(t,i)}}collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const s=this.store.process(this.tilesOfInterest[t],(r,n)=>this.verifyTileComplexity(r,n));(0,a.Wi)(e)?e=s:e.prepend(s)}return e}deletePendingTiles(){for(const[,e]of this.pendingTiles)e.alive||this.deletePendingTile(e)}processPendingTiles(){const e={fetchCount:(t,i)=>this.fetchCount(t,i),fetchFeatures:(t,i,s)=>this.fetchFeatures(t,i,s),finish:(t,i)=>this.finishPendingTile(t,i),resume:()=>this.processPendingTiles()};if(this.ensureFetchAllCounts(e))for(const[,t]of this.pendingTiles)this.verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e))}verifyTileComplexity(e,t){return this.verifyVertexComplexity(e)&&this.verifyFeatureDensity(e,t)}verifyVertexComplexity(e){return e*this.minimumVerticesPerFeature<ie}verifyFeatureDensity(e,t){if((0,a.Wi)(this.tileInfo))return!1;const i=this.tileSize*t;return e*(se/(i*i))<re}ensureFetchAllCounts(e){let t=!0;for(const[,i]of this.pendingTiles)i.state.type<2&&this.updatingHandles.addPromise(i.process(e)),i.state.type<=1&&(t=!1);return t}finishPendingTile(e,t){this.store.add(e.data,t),this.deletePendingTile(e),this.updateAvailability()}updateAvailability(){const e=this.collectMissingTilesInfo();this.setAvailability((0,a.Wi)(e)?1:e.coveredArea/e.fullArea)}setAvailability(e){this._set("availability",e)}createPendingTile(e,t){const i=new _(e,t);return this.pendingTiles.set(e.id,i),i}deletePendingTile(e){e.reset(),this.pendingTiles.delete(e.data.id)}fetchCount(e,t){var i=this;return(0,h.Z)(function*(){return i.store.fetchCount(e.data,i.url,i.createCountQuery(e),{query:i.customParameters,timeout:E,signal:t})})()}fetchFeatures(e,t,i){var s=this;return(0,h.Z)(function*(){let r,n=0,l=0,y=t;for(;;){const f=s.createFeaturesQuery(e),p=s.setPagingParameters(f,n,y),{features:v,exceededTransferLimit:me}=yield s.queryFeatures(f,i);if(p&&(n+=(0,a.Wg)(f.num)),l+=v.length,r=r?r.concat(v):v,y=t-l,!p||!me||y<=0)return r}})()}filterProperties(e){return(0,a.Wi)(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}lookupObjectIdByGlobalId(e){const t=this.globalIdField,i=this.objectIdField;if((0,a.Wi)(t))throw new Error("Expected globalIdField to be defined");let s=null;if(this.store.featureStore.forEach(r=>{var n;e===r.attributes[t]&&(s=null!=(n=r.objectId)?n:r.attributes[i])}),(0,a.Wi)(s))throw new Error(`Expected to find a feature with globalId ${e}`);return s}queryFeaturesById(e,t){const i=this.createFeaturesQuery(null);return i.objectIds=e,this.queryFeatures(i,t)}queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this.queryFeaturesPBF(e,t):this.queryFeaturesJSON(e,t)}queryFeaturesPBF(e,t){var i=this;return(0,h.Z)(function*(){const{sourceSpatialReference:s}=i,{data:r}=yield(0,P.executeQueryPBF)(i.url,e,new q.J({sourceSpatialReference:s}),{query:i.configuration.customParameters,timeout:E,signal:t});return(0,w.lM)(r)})()}queryFeaturesJSON(e,t){var i=this;return(0,h.Z)(function*(){const{sourceSpatialReference:s}=i,{data:r}=yield(0,P.executeQuery)(i.url,e,s,{query:i.configuration.customParameters,timeout:E,signal:t});return(0,w.h_)(r,i.objectIdField)})()}createCountQuery(e){const t=this.createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}createFeaturesQuery(e){const t=this.createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,(0,a.pC)(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}createBaseQuery(e){const t=new T.Z({returnZ:!1,returnM:!1,geometry:(0,a.pC)(this.tileInfo)&&(0,a.pC)(e)?(0,F.HH)(e.data.extent,this.tileInfo.spatialReference):void 0}),i=this.configuration.filter;return(0,a.pC)(i)&&(t.where=i.where,t.gdbVersion=i.gdbVersion,t.timeExtent=i.timeExtent),t.outSpatialReference=this.spatialReference,t}setPagingParameters(e,t,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:s,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:l,supportsResultType:y}=this.capabilities.query,f=s?T.Z.MAX_MAX_RECORD_COUNT_FACTOR:1,p=f*((y||r)&&n?n:l||te);return e.start=t,s?(e.maxRecordCountFactor=Math.min(f,Math.ceil(i/p)),e.num=Math.min(i,e.maxRecordCountFactor*p)):e.num=Math.min(i,p),!0}};(0,u._)([(0,c.Cb)({constructOnly:!0})],d.prototype,"url",void 0),(0,u._)([(0,c.Cb)({constructOnly:!0})],d.prototype,"objectIdField",void 0),(0,u._)([(0,c.Cb)({constructOnly:!0})],d.prototype,"globalIdField",void 0),(0,u._)([(0,c.Cb)({constructOnly:!0})],d.prototype,"capabilities",void 0),(0,u._)([(0,c.Cb)({constructOnly:!0})],d.prototype,"sourceSpatialReference",void 0),(0,u._)([(0,c.Cb)({constructOnly:!0})],d.prototype,"spatialReference",void 0),(0,u._)([(0,c.Cb)({constructOnly:!0})],d.prototype,"store",void 0),(0,u._)([(0,c.Cb)({readOnly:!0})],d.prototype,"minimumVerticesPerFeature",null),(0,u._)([(0,c.Cb)()],d.prototype,"filter",null),(0,u._)([(0,c.Cb)()],d.prototype,"customParameters",null),(0,u._)([(0,c.Cb)({readOnly:!0})],d.prototype,"configuration",null),(0,u._)([(0,c.Cb)()],d.prototype,"tileInfo",null),(0,u._)([(0,c.Cb)()],d.prototype,"tileSize",null),(0,u._)([(0,c.Cb)()],d.prototype,"tilesOfInterest",void 0),(0,u._)([(0,c.Cb)({readOnly:!0})],d.prototype,"updating",null),(0,u._)([(0,c.Cb)({readOnly:!0})],d.prototype,"availability",void 0),d=(0,u._)([(0,I.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],d);const te=2e3,E=6e5,ie=1e6,se=25,re=1;function ne(e){return 32+e.length}function B(e,t){return 32+e.length*t}var le=o(61256);class ue{constructor(){this._store=new Map,this._byteSize=0}set(t,i){this.delete(t),this._store.set(t,i),this._byteSize+=i.byteSize}delete(t){const i=this._store.get(t);return!!this._store.delete(t)&&(this._byteSize-=i.byteSize,!0)}get(t){return this.used(t),this._store.get(t)}has(t){return this.used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,i){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),i(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}used(t){const i=this._store.get(t);i&&(this._store.delete(t),this._store.set(t,i))}}let S=class extends z.Z{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10485760,this.tileBounds=new le.H,this.tiles=new ue,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=(0,F.Ue)()}add(e,t){const i=[];for(const s of t)0===this.referenceFeature(s.objectId)&&i.push(s);this.addTileStorage(e,new Set(t.map(({objectId:s})=>s)),function ce(e){return e.reduce((t,i)=>t+function he(e){return 32+function de(e){if((0,a.Wi)(e))return 0;const t=B(e.lengths,4);return 32+B(e.coords,8)+t}(e.geometry)+function ae(e){if(!e)return 0;let t=32;for(const i in e)if(e.hasOwnProperty(i)){const s=e[i];switch(typeof s){case"string":t+=ne(s);break;case"number":t+=16;break;case"boolean":t+=4}}return t}(e.attributes)}(i),0)}(t)),this.featureStore.addMany(i),this.tiles.applyByteSizeLimit(this.maximumByteSize,s=>this.removeTileStorage(s))}destroy(){this.clear(),this.tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear()}refresh(){this.clear(),this.tileFeatureCounts.clear()}processEdits(e,t,i){return this.processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this.processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,i)}addTileStorage(e,t,i){this.tiles.set(e.id,new fe(e,t,i)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size)}remove({id:e}){const t=this.tiles.get(e);t&&this.removeTileStorage(t)}removeTileStorage(e){const t=[];for(const s of e.objectIds)1===this.unreferenceFeature(s)&&t.push(s);this.featureStore.removeManyById(t);const i=e.data.id;this.tiles.delete(i),this.tileBounds.delete(i)}processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this.tiles){for(const i of e)t.objectIds.delete(i);this.tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this.refCounts.delete(t)}processEditsRefetch(e,t,i){var s=this;return(0,h.Z)(function*(){const r=(yield t(e,i)).features,{hasZ:n,hasM:l}=s.featureStore;for(const y of r){const f=(0,w.$)(s.tmpBoundingRect,y.geometry,n,l);(0,a.Wi)(f)||s.tileBounds.forEachInBounds(f,p=>{const v=s.tiles.get(p);s.featureStore.add(y),v.objectIds.has(y.objectId)||(v.objectIds.add(y.objectId),s.referenceFeature(y.objectId),s.tileFeatureCounts.set(v.data.id,v.objectIds.size))})}})()}process(e,t=(()=>!0)){if((0,a.Wi)(this.tileInfo)||!e.extent||(0,a.pC)(this.extent)&&!(0,F.kK)((0,F.oJ)(this.extent,this.tmpBoundingRect),e.extent))return new O(e);if(this.tiles.has(e.id))return new O(e);const i=this.createTileTree(e,this.tileInfo);return this.simplify(i,t,null,0,1),this.collectMissingTiles(e,i,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map(({data:e})=>({data:e,featureCount:this.tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){const t=this.tileFeatureCounts.get(e.id);return null!=t?t:0}fetchCount(e,t,i,s){var r=this;return(0,h.Z)(function*(){const n=r.tileFeatureCounts.get(e.id);if(null!=n)return n;const l=yield(0,P.executeQueryForCount)(t,i,s);return r.tileFeatureCounts.set(e.id,l.data.count),l.data.count})()}createTileTree(e,t){const i=new H(e.level,e.row,e.col);return t.updateTileInfo(i,1),this.tileBounds.forEachInBounds(e.extent,s=>{const r=this.tiles.get(s).data;this.tilesAreRelated(e,r)&&this.populateChildren(i,r,t,this.tileFeatureCounts.get(r.id)||0)}),i}tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const i=e.level<t.level,s=i?e:t,r=i?t:e,n=1<<r.level-s.level;return Math.floor(r.row/n)===s.row&&Math.floor(r.col/n)===s.col}populateChildren(e,t,i,s){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,l=t.col>>r,f=l-(e.col<<1)+(n-(e.row<<1)<<1),p=e.children[f];if((0,a.pC)(p))this.populateChildren(p,t,i,s);else{const v=new H(e.level+1,n,l);i.updateTileInfo(v,1),e.children[f]=v,this.populateChildren(v,t,i,s)}}simplify(e,t,i,s,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this.remove(e),(0,a.pC)(i)&&(i.children[s]=null),n);const l=r/2,y=l*l;let f=0;for(let p=0;p<e.children.length;p++){const v=e.children[p];f+=(0,a.pC)(v)?this.simplify(v,t,e,p,l):y}return 0===f?this.mergeChildren(e):1-f/n<ge&&(this.purge(e),(0,a.pC)(i)&&(i.children[s]=null),f=n),f}mergeChildren(e){const t=new Set;let i=0;this.forEachLeaf(e,s=>{const r=this.tiles.get(s.id);if(r){i+=r.byteSize;for(const n of r.objectIds)t.has(n)||(t.add(n),this.referenceFeature(n));this.remove(s)}}),this.addTileStorage(e,t,i),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,t.size)}forEachLeaf(e,t){for(const i of e.children)(0,a.Wi)(i)||(i.isLeaf?t(i):this.forEachLeaf(i,t))}purge(e){if(!(0,a.Wi)(e))if(e.isLeaf)this.remove(e);else for(let t=0;t<e.children.length;t++)this.purge(e.children[t]),e.children[t]=null}collectMissingTiles(e,t,i){const s=new pe(i,e,this.extent);return this.collectMissingTilesRecurse(t,s,1),s.info}collectMissingTilesRecurse(e,t,i){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,i);const s=i/2;for(let r=0;r<e.children.length;r++){const n=e.children[r];(0,a.Wi)(n)?t.addMissing(e.level+1,(e.row<<1)+((2&r)>>1),(e.col<<1)+(1&r),s):this.collectMissingTilesRecurse(n,t,s)}}referenceFeature(e){const t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),1===t?0:2}unreferenceFeature(e){const t=(this.refCounts.get(e)||0)-1;return 0===t?(this.refCounts.delete(e),1):(t>0&&this.refCounts.set(e,t),2)}get test(){return{tiles:Array.from(this.tiles.values()).map(e=>`${e.data.id}:[${Array.from(e.objectIds)}]`),featureReferences:Array.from(this.refCounts.keys()).map(e=>`${e}:${this.refCounts.get(e)}`)}}};(0,u._)([(0,c.Cb)({constructOnly:!0})],S.prototype,"featureStore",void 0),(0,u._)([(0,c.Cb)()],S.prototype,"tileInfo",void 0),(0,u._)([(0,c.Cb)()],S.prototype,"extent",void 0),(0,u._)([(0,c.Cb)()],S.prototype,"maximumByteSize",void 0),S=(0,u._)([(0,I.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],S);class fe{constructor(t,i,s){this.data=t,this.objectIds=i,this.byteSize=s}}class H{constructor(t,i,s){this.level=t,this.row=i,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&((0,a.pC)(this.children[0])||(0,a.pC)(this.children[1])||(0,a.pC)(this.children[2])||(0,a.pC)(this.children[3]))}}class O{constructor(t,i=[]){this.missingTiles=i,this.fullArea=0,this.coveredArea=0,this.fullArea=(0,F.SO)(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class pe{constructor(t,i,s){this.tileInfo=t,this.extent=null,this.info=new O(i),(0,a.pC)(s)&&(this.extent=(0,F.oJ)(s))}addMissing(t,i,s,r){const n={id:null,level:t,row:i,col:s};this.tileInfo.updateTileInfo(n,1),!(0,a.pC)(n.extent)||(0,a.pC)(this.extent)&&!(0,F.kK)(this.extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=(0,F.SO)(n.extent))}}const ge=.18751;var ye=o(70257);let b=class extends N.Z.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=(0,m.dD)(),this.handles=new L.Z,this.updatingHandles=new ye.t,this.pendingApplyEdits=new Map}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()}setup(e){var t=this;return(0,h.Z)(function*(){const{geometryType:i,objectIdField:s,timeInfo:r,fields:n}=e.serviceInfo;return t.featureStore=new D.Z(R(A({},e.serviceInfo),{hasZ:!1,hasM:!1})),t.queryEngine=new V.Z({spatialReference:e.spatialReference,featureStore:t.featureStore,geometryType:i,fields:n,hasZ:!1,hasM:!1,objectIdField:s,timeInfo:r?G.Z.fromJSON(r):null}),t.featureFetcher=new d({store:new S({featureStore:t.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:Z.Z.fromJSON(e.spatialReference),sourceSpatialReference:Z.Z.fromJSON(e.serviceInfo.spatialReference)}),t.handles.add([t.featureFetcher.watch("availability",l=>t.emit("notify-availability",{availability:l}),!0),t.watch("updating",()=>t.notifyUpdating())]),t.whenSetup.resolve(),t.isInitializing=!1,t.configure(e.configuration)})()}configure(e){var t=this;return(0,h.Z)(function*(){return yield t.updatingHandles.addPromise(t.whenSetup.promise),t.updateFeatureFetcherConfiguration(e),{result:{}}})()}fetchCandidates(e,t){var i=this;return(0,h.Z)(function*(){return yield i.whenSetup.promise,(0,m.k_)(t),{result:yield i.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:(0,a.pC)(e.filter)?e.filter:{where:"1=1"}},(0,a.pC)(t)?t.signal:null)}})()}updateTiles(e,t){var i=this;return(0,h.Z)(function*(){return yield i.updatingHandles.addPromise(i.whenSetup.promise),(0,m.k_)(t),i.featureFetcher.tileSize=e.tileSize,i.featureFetcher.tilesOfInterest=e.tiles,i.featureFetcher.tileInfo=(0,a.pC)(e.tileInfo)?k.Z.fromJSON(e.tileInfo):null,{result:{}}})()}refresh(e,t){var i=this;return(0,h.Z)(function*(){return yield i.updatingHandles.addPromise(i.whenSetup.promise),(0,m.k_)(t),i.featureFetcher.refresh(),{result:{}}})()}whenNotUpdating(e,t){var i=this;return(0,h.Z)(function*(){return yield i.updatingHandles.addPromise(i.whenSetup.promise),(0,m.k_)(t),yield(0,m.Hl)((0,Q.cm)(i,"updating"),t),{result:{}}})()}getDebugInfo(e,t){var i=this;return(0,h.Z)(function*(){return(0,m.k_)(t),{result:i.featureFetcher.debugInfo}})()}beginApplyEdits(e,t){var i=this;return(0,h.Z)(function*(){i.updatingHandles.addPromise(i.whenSetup.promise),(0,m.k_)(t);const s=(0,m.dD)();return i.pendingApplyEdits.set(e.id,s),i.featureFetcher.applyEdits(s.promise),i.updatingHandles.addPromise(s.promise),{result:{}}})()}endApplyEdits(e,t){var i=this;return(0,h.Z)(function*(){const s=i.pendingApplyEdits.get(e.id);return s&&s.resolve(e.edits),(0,m.k_)(t),{result:{}}})()}updateFeatureFetcherConfiguration(e){this.featureFetcher.filter=(0,a.pC)(e.filter)?T.Z.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters}notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};function ve(){return new b}(0,u._)([(0,c.Cb)({readOnly:!0})],b.prototype,"updating",null),(0,u._)([(0,c.Cb)()],b.prototype,"isInitializing",void 0),b=(0,u._)([(0,I.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],b)}}]);