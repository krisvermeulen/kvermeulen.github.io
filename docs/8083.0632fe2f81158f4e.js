"use strict";var Ee=Object.defineProperty,De=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,ce=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,ye=(N,u,e)=>u in N?Ee(N,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):N[u]=e,me=(N,u)=>{for(var e in u||(u={}))je.call(u,e)&&ye(N,e,u[e]);if(ce)for(var e of ce(u))Pe.call(u,e)&&ye(N,e,u[e]);return N},ve=(N,u)=>De(N,Se(u));(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[8083],{38811:(N,u,e)=>{e.d(u,{E:()=>I});class E{constructor(D={}){this._options=D}toQueryParams(D){if(!D)return null;const R=D.toJSON(),O={};return Object.keys(R).forEach(t=>{const c=this._options[t];if(c){const r="boolean"!=typeof c&&c.name?c.name:t,h="boolean"!=typeof c&&c.getter?c.getter(R):R[t];null!=h&&(O[r]=(l=>{if(!Array.isArray(l))return!1;const[D]=l;return"number"==typeof D||"string"==typeof D})(h)?h.join(","):"object"==typeof h?JSON.stringify(h):h)}else O[t]=R[t]},this),O}}function I(l){return new E(l)}},42043:(N,u,e)=>{e.d(u,{et:()=>ge,ef:()=>Te,bI:()=>Ne,mT:()=>Me,Wf:()=>Ae});var a=e(15861),E=e(84792),I=e(26584),l=e(62208),D=e(94113),R=e(21726),O=e(2618),t=e(17626),c=e(86162),r=e(77712),Q=(e(85931),e(8314),e(90912),e(76898)),se=e(58817),V=e(55342),U=e(2076);const f=(0,U.wY)()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"}),Z=((0,U.wY)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),(0,U.wY)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),(0,U.wY)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),(0,U.wY)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),(0,U.wY)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"})),C=((0,U.wY)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),(0,U.wY)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),(0,U.wY)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}));var g;let d=g=class extends c.wq{constructor(s){super(s),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new g((0,se.d9)({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};(0,t._)([(0,r.Cb)({type:[Object],json:{write:!0}})],d.prototype,"attributeParameterValues",void 0),(0,t._)([(0,r.Cb)({type:String,json:{write:!0}})],d.prototype,"description",void 0),(0,t._)([(0,r.Cb)({type:String,json:{write:!0}})],d.prototype,"distanceAttributeName",void 0),(0,t._)([(0,r.Cb)({type:String,json:{write:!0}})],d.prototype,"id",void 0),(0,t._)([(0,r.Cb)({type:String,json:{write:!0}})],d.prototype,"impedanceAttributeName",void 0),(0,t._)([(0,r.Cb)({type:String,json:{write:!0}})],d.prototype,"name",void 0),(0,t._)([(0,r.Cb)({type:[String],json:{write:!0}})],d.prototype,"restrictionAttributeNames",void 0),(0,t._)([(0,r.Cb)({type:Number,json:{write:!0}})],d.prototype,"simplificationTolerance",void 0),(0,t._)([(0,V.J)(f)],d.prototype,"simplificationToleranceUnits",void 0),(0,t._)([(0,r.Cb)({type:String,json:{write:!0}})],d.prototype,"timeAttributeName",void 0),(0,t._)([(0,V.J)(C)],d.prototype,"type",void 0),(0,t._)([(0,r.Cb)({type:Boolean,json:{write:!0}})],d.prototype,"useHierarchy",void 0),(0,t._)([(0,V.J)(Z)],d.prototype,"uturnAtJunctions",void 0),d=g=(0,t._)([(0,Q.j)("esri.rest.support.TravelMode")],d);const H=d;let n=class extends c.wq{constructor(s){super(s),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};(0,t._)([(0,r.Cb)()],n.prototype,"currentVersion",void 0),(0,t._)([(0,r.Cb)()],n.prototype,"defaultTravelMode",void 0),(0,t._)([(0,r.Cb)()],n.prototype,"directionsLanguage",void 0),(0,t._)([(0,r.Cb)()],n.prototype,"directionsSupportedLanguages",void 0),(0,t._)([(0,r.Cb)()],n.prototype,"directionsTimeAttribute",void 0),(0,t._)([(0,r.Cb)()],n.prototype,"hasZ",void 0),(0,t._)([(0,r.Cb)()],n.prototype,"impedance",void 0),(0,t._)([(0,r.Cb)()],n.prototype,"networkDataset",void 0),(0,t._)([(0,r.Cb)({type:[H]})],n.prototype,"supportedTravelModes",void 0),n=(0,t._)([(0,Q.j)("esri.rest.support.NetworkServiceDescription")],n);const K=n;var L=e(88879),F=e(68653),v=e(17253),S=e(12334),j=e(92383);let T=class extends c.wq{constructor(s){super(s),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};(0,t._)([(0,r.Cb)({type:j.Z,json:{write:!0}})],T.prototype,"directions",void 0),(0,t._)([(0,r.Cb)({type:L.Z,json:{write:!0}})],T.prototype,"route",void 0),(0,t._)([(0,r.Cb)({type:String,json:{write:!0}})],T.prototype,"routeName",void 0),(0,t._)([(0,r.Cb)({type:[L.Z],json:{write:!0}})],T.prototype,"stops",void 0),T=(0,t._)([(0,Q.j)("esri.rest.support.RouteResult")],T);const he=T;function oe(s){return s&&v.default.fromJSON(s).features.map(o=>o)}let P=class extends c.wq{constructor(s){super(s),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(s,o){return oe(o.barriers||o.pointBarriers)}readPolylineBarriers(s){return oe(s)}readPolygonBarriers(s){return oe(s)}};(0,t._)([(0,r.Cb)({aliasOf:"pointBarriers"})],P.prototype,"barriers",void 0),(0,t._)([(0,r.Cb)({type:[S.Z]})],P.prototype,"messages",void 0),(0,t._)([(0,r.Cb)({type:[L.Z]})],P.prototype,"pointBarriers",void 0),(0,t._)([(0,F.r)("pointBarriers",["barriers","pointBarriers"])],P.prototype,"readPointBarriers",null),(0,t._)([(0,r.Cb)({type:[L.Z]})],P.prototype,"polylineBarriers",void 0),(0,t._)([(0,F.r)("polylineBarriers")],P.prototype,"readPolylineBarriers",null),(0,t._)([(0,r.Cb)({type:[L.Z]})],P.prototype,"polygonBarriers",void 0),(0,t._)([(0,F.r)("polygonBarriers")],P.prototype,"readPolygonBarriers",null),(0,t._)([(0,r.Cb)({type:[he]})],P.prototype,"routeResults",void 0),P=(0,t._)([(0,Q.j)("esri.rest.support.RouteResultsContainer")],P);const fe=P;function ge(s,o,i,y){y[i]=[o.length,o.length+s.length],s.forEach(p=>{o.push(p.geometry)})}function Te(s,o){for(let i=0;i<o.length;i++){const y=s[o[i]];if(y&&y.length)for(const p of y)p.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function Me(s){const o=[],i=[],{directions:y=[],routes:{features:p=[],spatialReference:J=null}={},stops:{features:x=[],spatialReference:k=null}={},barriers:_,polygonBarriers:z,polylineBarriers:$,messages:le}=s.data,G="esri.tasks.RouteTask.NULL_ROUTE_NAME";let A,X,q=!0;const ee=p&&J||x&&k||_&&_.spatialReference||z&&z.spatialReference||$&&$.spatialReference;y.forEach(m=>{o.push(A=m.routeName),i[A]={directions:m}}),p.forEach(m=>{-1===o.indexOf(A=m.attributes.Name)&&(o.push(A),i[A]={}),(0,l.pC)(m.geometry)&&(m.geometry.spatialReference=ee),i[A].route=m}),x.forEach(m=>{X=m.attributes,-1===o.indexOf(A=X.RouteName||G)&&(o.push(A),i[A]={}),A!==G&&(q=!1),(0,l.pC)(m.geometry)&&(m.geometry.spatialReference=ee),null==i[A].stops&&(i[A].stops=[]),i[A].stops.push(m)}),x.length>0&&!0===q&&(i[o[0]].stops=i[G].stops,delete i[G],o.splice(o.indexOf(G),1));const re=o.map(m=>(i[m].routeName=m===G?null:m,i[m]));return fe.fromJSON({routeResults:re,pointBarriers:_,polygonBarriers:z,polylineBarriers:$,messages:le})}function Ae(s,o){for(let i=0;i<o.length;i++){const y=s[o[i]];if(y&&y.length)for(const p of y)if((0,l.pC)(p)&&p.hasZ)return!0}return!1}function Ne(s,o,i){return ie.apply(this,arguments)}function ie(){return(ie=(0,a.Z)(function*(s,o,i){if(!s)throw new I.Z("network-service:missing-url","Url to Network service is missing");const y=(0,O.lA)({f:"json",token:o},i),{data:p}=yield(0,E.default)(s,y);p.supportedTravelModes||(p.supportedTravelModes=[]);for(let _=0;_<p.supportedTravelModes.length;_++)p.supportedTravelModes[_].id||(p.supportedTravelModes[_].id=p.supportedTravelModes[_].itemId);const J=p.currentVersion>=10.4?Oe(s,o,i):Ce(s,i),{defaultTravelMode:x,supportedTravelModes:k}=yield J;return p.defaultTravelMode=x,p.supportedTravelModes=k,K.fromJSON(p)})).apply(this,arguments)}function Ce(s,o){return ne.apply(this,arguments)}function ne(){return(ne=(0,a.Z)(function*(s,o){var i,y;const p=(0,O.lA)({f:"json"},o),{data:J}=yield(0,E.default)(s.replace(/\/rest\/.*$/i,"/info"),p);if(!J||!J.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:x}=J,k=(0,R.Qj)(x)+"/sharing/rest/portals/self",{data:_}=yield(0,E.default)(k,p),z=(0,D.hS)("helperServices.routingUtilities.url",_);if(!z)return{supportedTravelModes:[],defaultTravelMode:null};const $=(0,O.en)(x),le=/\/solve$/i.test($.path)?"Route":/\/solveclosestfacility$/i.test($.path)?"ClosestFacility":"ServiceAreas",G=(0,O.lA)({f:"json",serviceName:le},o),A=(0,R.Qj)(z)+"/GetTravelModes/execute",X=yield(0,E.default)(A,G),q=[];let ee=null;if(null!=X&&null!=(i=X.data)&&null!=(y=i.results)&&y.length){const m=X.data.results;for(const te of m){var re;if("supportedTravelModes"===te.paramName){if(null!=(re=te.value)&&re.features)for(const{attributes:de}of te.value.features)if(de){const be=JSON.parse(de.TravelMode);q.push(be)}}else"defaultTravelMode"===te.paramName&&(ee=te.value)}}return{supportedTravelModes:q,defaultTravelMode:ee}})).apply(this,arguments)}function Oe(s,o,i){return ae.apply(this,arguments)}function ae(){return(ae=(0,a.Z)(function*(s,o,i){try{const y=(0,O.lA)({f:"json",token:o},i),p=(0,R.Qj)(s)+"/retrieveTravelModes",{data:{supportedTravelModes:J,defaultTravelMode:x}}=yield(0,E.default)(p,y);return{supportedTravelModes:J,defaultTravelMode:x}}catch(y){throw new I.Z("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:y})}})).apply(this,arguments)}},92383:(N,u,e)=>{e.d(u,{Z:()=>ue});var a=e(17626),I=(e(29132),e(62208)),l=e(77712),t=(e(85931),e(8314),e(90912),e(68653)),c=e(76898),r=e(88879);let h=class extends r.Z{};(0,a._)([(0,l.Cb)()],h.prototype,"events",void 0),(0,a._)([(0,l.Cb)()],h.prototype,"strings",void 0),h=(0,a._)([(0,c.j)("esri.rest.support.DirectionsFeature")],h);const Y=h;var pe=e(17253),Q=e(2004),se=e(65234),V=e(55214),U=e(49672);let f=class extends pe.default{constructor(M){super(M),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(M,B){var b;if(!M)return[];const Z=null!=(b=B.summary.envelope.spatialReference)?b:B.spatialReference,W=Z&&se.Z.fromJSON(Z);return M.map(w=>{var C,g;const d=this._decompressGeometry(w.compressedGeometry),H=new V.Z(ve(me({},d),{spatialReference:W})),n=null!=(C=null==(g=w.events)?void 0:g.map(K=>{const{arriveTimeUTC:L,ETA:F,point:{x:v,y:S,z:j},strings:T}=K;return new Y({geometry:new U.Z({x:v,y:S,z:j,hasZ:void 0!==j,spatialReference:W}),attributes:{ETA:F,arriveTimeUTC:L},strings:T})}))?C:[];return new Y({attributes:w.attributes,events:n,geometry:H,strings:w.strings})})}get mergedGeometry(){if(!this.features)return null;const M=this.features.map(({geometry:b})=>(0,I.Wg)(b)),B=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(M,B)}get strings(){return this.features.map(({strings:M})=>M)}_decompressGeometry(M){let B=0,b=0,Z=0,W=0;const w=[];let C,g,d,H,n,K,L,F,v=0,S=0,j=0;if(n=M.match(/((\+|\-)[^\+\-\|]+|\|)/g),n||(n=[]),0===parseInt(n[v],32)){v=2;const T=parseInt(n[v],32);v++,K=parseInt(n[v],32),v++,1&T&&(S=n.indexOf("|")+1,L=parseInt(n[S],32),S++),2&T&&(j=n.indexOf("|",S)+1,F=parseInt(n[j],32),j++)}else K=parseInt(n[v],32),v++;for(;v<n.length&&"|"!==n[v];){C=parseInt(n[v],32)+B,v++,B=C,g=parseInt(n[v],32)+b,v++,b=g;const T=[C/K,g/K];S&&(H=parseInt(n[S],32)+Z,S++,Z=H,T.push(H/L)),j&&(d=parseInt(n[j],32)+W,j++,W=d,T.push(d/F)),w.push(T)}return{paths:[w],hasZ:S>0,hasM:j>0}}_mergePolylinesToSinglePath(M,B){if(0===M.length)return new V.Z({spatialReference:B});const b=[];for(const C of M)for(const g of C.paths)b.push(...g);const Z=[];b.forEach((C,g)=>{0!==g&&C[0]===b[g-1][0]&&C[1]===b[g-1][1]||Z.push(C)});const{hasM:W,hasZ:w}=M[0];return new V.Z({hasM:W,hasZ:w,paths:[Z],spatialReference:B})}};(0,a._)([(0,l.Cb)({type:Q.Z,json:{read:{source:"summary.envelope"}}})],f.prototype,"extent",void 0),(0,a._)([(0,l.Cb)()],f.prototype,"features",void 0),(0,a._)([(0,t.r)("features")],f.prototype,"readFeatures",null),(0,a._)([(0,l.Cb)()],f.prototype,"geometryType",void 0),(0,a._)([(0,l.Cb)({readOnly:!0})],f.prototype,"mergedGeometry",null),(0,a._)([(0,l.Cb)()],f.prototype,"routeId",void 0),(0,a._)([(0,l.Cb)()],f.prototype,"routeName",void 0),(0,a._)([(0,l.Cb)({value:null,readOnly:!0})],f.prototype,"strings",null),(0,a._)([(0,l.Cb)({json:{read:{source:"summary.totalDriveTime"}}})],f.prototype,"totalDriveTime",void 0),(0,a._)([(0,l.Cb)({json:{read:{source:"summary.totalLength"}}})],f.prototype,"totalLength",void 0),(0,a._)([(0,l.Cb)({json:{read:{source:"summary.totalTime"}}})],f.prototype,"totalTime",void 0),f=(0,a._)([(0,c.j)("esri.rest.support.DirectionsFeatureSet")],f);const ue=f},45568:(N,u,e)=>{e.d(u,{Z:()=>h});var a=e(17626),E=e(2076),I=e(86162),l=e(77712),t=(e(85931),e(8314),e(90912),e(76898));const c=new E.Xn({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let r=class extends I.wq{constructor(Y){super(Y),this.description=null,this.type=null}};(0,a._)([(0,l.Cb)({type:String,json:{write:!0}})],r.prototype,"description",void 0),(0,a._)([(0,l.Cb)({type:String,json:{read:c.read,write:c.write}})],r.prototype,"type",void 0),r=(0,a._)([(0,t.j)("esri.rest.support.GPMessage")],r);const h=r},12334:(N,u,e)=>{e.d(u,{Z:()=>h});var a=e(17626),E=e(2076),I=e(77712),O=(e(85931),e(8314),e(90912),e(76898)),t=e(45568);const c=new E.Xn({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let r=class extends t.Z{constructor(Y){super(Y),this.type=null}};(0,a._)([(0,I.Cb)({type:String,json:{read:c.read,write:c.write}})],r.prototype,"type",void 0),r=(0,a._)([(0,O.j)("esri.rest.support.NAMessage")],r);const h=r}}]);