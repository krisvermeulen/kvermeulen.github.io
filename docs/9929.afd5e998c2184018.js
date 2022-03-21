"use strict";var ge=Object.defineProperty,ve=Object.defineProperties,Me=Object.getOwnPropertyDescriptors,me=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,pe=(O,S,h)=>S in O?ge(O,S,{enumerable:!0,configurable:!0,writable:!0,value:h}):O[S]=h,xe=(O,S)=>{for(var h in S||(S={}))Re.call(S,h)&&pe(O,h,S[h]);if(me)for(var h of me(S))Se.call(S,h)&&pe(O,h,S[h]);return O},ye=(O,S)=>ve(O,Me(S));(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[9929],{28594:(O,S,h)=>{h.d(S,{vF:()=>fe,_D:()=>oe,Qp:()=>k,P_:()=>he,ut:()=>z,Hq:()=>ie,zD:()=>W,tB:()=>ne,nF:()=>j,VO:()=>Y,Mk:()=>Q,kZ:()=>ce,kr:()=>ue});var B=h(15861),X=(h(29132),h(26584)),M=h(62208),U=h(16730),b=h(56741),C=h(2004),R=h(49672);const Z=5e-4;function Q(e,n,a){return!(0,b.Up)(e,n,a)}function E(e,n,a){const o=Q(e,n,a);if(o&&!(0,b.kR)())throw new X.Z("rasterprojectionhelper-project","projection engine is not loaded");return o}const H=function(e,n,a){const o=(e[0]+e[4]+e[4*n.cols]+e[4*n.cols+4])/4,l=(e[1]+e[5]+e[4*n.rows+1]+e[4*n.rows+5])/4,i=(e[4*n.cols]-e[0]+e[4*n.cols+4]-e[4])/a[0]*.5,d=(e[4*n.cols+1]-e[1]+e[4*n.cols+5]-e[5])/a[1]*.5;return[0===i||isNaN(i)?0:Math.abs(o-e[2*n.rows+2])/Math.abs(i),0===d||isNaN(d)?0:Math.abs(l-e[2*n.rows+3])/Math.abs(d)]},N={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244};function W(){return L.apply(this,arguments)}function L(){return(L=(0,B.Z)(function*(){if((0,b.kR)())return null;yield(0,b.zD)()})).apply(this,arguments)}function oe(e,n,a){return E(e.spatialReference,n)?a?(0,b.rS)(n,e.spatialReference,e):(0,b.rS)(e.spatialReference,n,e):null}function Y(e,n,a,o=null){if(e.spatialReference.equals(n))return e;E(e.spatialReference,n,o);const l=a.center,i=new C.Z({xmin:l.x-e.x/2,xmax:l.x+e.x/2,ymin:l.y-e.y/2,ymax:l.y+e.y/2,spatialReference:e.spatialReference}),d=(0,b.iV)(i,n,o);return(0,M.Wi)(d)?null:{x:d.xmax-d.xmin,y:d.ymax-d.ymin}}function ee(e,n=.01){return(0,U.c9)(e)?n/(0,U.c9)(e):0}function j(e,n,a=null,o=!0){const l=e.spatialReference;if(l.equals(n))return e;E(l,n,a);const i=(0,b.iV)(e,n,a);if(o&&n.isGeographic){const[d,r]=$(l,!0),t=ee(l);t&&null!=d&&null!=r&&(Math.abs(e.x-d)<t&&Math.abs(180-i.x)<Z?i.x-=360:Math.abs(e.x-r)<t&&Math.abs(180+i.x)<Z&&(i.x+=360))}return i}function te(e){const n=z(e[0].spatialReference);if(e.length<2||!(0,M.pC)(n))return e[0];let{xmin:a,xmax:o,ymin:l,ymax:i}=e[0];for(let d=1;d<e.length;d++){const r=e[d];o=r.xmax+n*d,l=Math.min(l,r.ymin),i=Math.max(i,r.ymax)}return new C.Z({xmin:a,xmax:o,ymin:l,ymax:i,spatialReference:e[0].spatialReference})}function ne(e,n,a=null,o=!0){if(e.spatialReference.equals(n))return e;const l=ie(e),i=z(e.spatialReference,!0);return(0,M.pC)(i)&&0!==l?te(e.clone().normalize().map(d=>se(d,n,a,o))):se(e,n,a,o)}function se(e,n,a=null,o=!0){const l=e.spatialReference;if(l.equals(n))return e;E(l,n,a);const i=(0,b.iV)(e,n,a);let[d,r]=$(l,!0);if(i&&o&&l.isWebMercator&&n.isGeographic&&null!=d&&null!=r){if(Math.abs(e.xmin-d)<.001&&Math.abs(r-e.xmax)>1e3&&Math.abs(180-i.xmax)<Z){i.xmin=-180;const u=[];u.push(new R.Z(e.xmax,e.ymin,l)),u.push(new R.Z(e.xmax,(e.ymin+e.ymax)/2,l)),u.push(new R.Z(e.xmax,e.ymax,l));const p=u.map(f=>j(f,n,a)).filter(f=>!isNaN(null==f?void 0:f.x)).map(f=>f.x);i.xmax=Math.max.apply(null,p)}if(Math.abs(e.xmax-r)<.001&&Math.abs(d-e.xmin)>1e3&&Math.abs(180+i.xmin)<Z){i.xmax=180;const u=[];u.push(new R.Z(e.xmin,e.ymin,l)),u.push(new R.Z(e.xmin,(e.ymin+e.ymax)/2,l)),u.push(new R.Z(e.xmin,e.ymax,l));const p=u.map(f=>j(f,n,a)).filter(f=>!isNaN(null==f?void 0:f.x)).map(f=>f.x);i.xmin=Math.min.apply(null,p)}}[d,r]=$(n,!0);const t=ee(n);return t&&null!=d&&null!=r&&i&&(Math.abs(i.xmin-d)<t&&(i.xmin=d),Math.abs(i.xmax-r)<t&&(i.xmax=r)),i}function z(e,n=!1){return e.isWebMercator?2*(n?20037508.342787:20037508.342788905):e.wkid&&e.isGeographic?360:2*N[e.wkid]||null}function $(e,n=!1){const a=[],o=z(e,n);return(0,M.pC)(o)&&(a.push(-o/2),a.push(o/2)),a}function A(e,n,a,o){let l=(e-n)/a;return l-Math.floor(l)!=0?l=Math.floor(l):o&&(l-=1),l}function ie(e,n=!1){const a=z(e.spatialReference);if(!(0,M.pC)(a))return 0;const o=n?0:-a/2;return A(e.xmax,o,a,!0)-A(e.xmin,o,a,!1)}function he(e){const n=e.storageInfo.origin.x,a=z(e.spatialReference,!0);if(!(0,M.pC)(a))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const o=a/2,{nativePixelSize:l,storageInfo:i,extent:d}=e,{maximumPyramidLevel:r,blockWidth:t,pyramidScalingFactor:s}=i;let c=l.x;const u=[],p=(0,M.pC)(e.transform)&&"gcs-shift"===e.transform.type,f=n+(p?0:o),x=p?a-n:o-n;for(let m=0;m<=r;m++){const g=(d.xmax-n)/c/t,_=g-Math.floor(g)==0?g:Math.ceil(g),D=x/c/t,y=D-Math.floor(D)==0?D:Math.ceil(D),T=Math.floor(f/c/t),v=Math.round(f/c)%t,I=(t-Math.round(x/c)%t)%t;u.push({resolutionX:c,blockWidth:t,datsetColumnCount:_,worldColumnCountFromOrigin:y,leftMargin:v,rightPadding:I,originColumnOffset:T}),c*=s}return{originX:n,halfWorldWidth:o,pyramidsInfo:u,hasGCSSShiftTransform:p}}function k(e){const n=e.isAdaptive&&null==e.spacing,a=e.spacing||[32,32];let o=re(e),l={cols:o.size[0]+1,rows:o.size[1]+1},i=H(o.offsets,l,a);const r=o.outofBoundPointCount>0&&o.outofBoundPointCount<o.offsets.length/2;return n&&(r||(i[0]+i[1])/2>4)&&(o=re(ye(xe({},e),{spacing:[4,4]})),l={cols:o.size[0]+1,rows:o.size[1]+1},i=H(o.offsets,l,a)),o.error=i,o.coefficients=function ae(e,n,a){const{cols:o,rows:l}=n,i=new Float32Array((o-1)*(l-1)*2*6),d=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),r=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let t=0;t<o-1;t++){for(let s=0;s<l-1;s++){let c=t*l*2+2*s;const u=e[c],p=e[c+1],f=e[c+2],x=e[c+3];c+=2*l;const m=e[c],g=e[c+1],_=e[c+2],D=e[c+3];let y=0,T=12*(s*(o-1)+t);for(let v=0;v<3;v++)i[T++]=d[y++]*u+d[y++]*f+d[y++]*_;y=0;for(let v=0;v<3;v++)i[T++]=d[y++]*p+d[y++]*x+d[y++]*D;y=0;for(let v=0;v<3;v++)i[T++]=r[y++]*u+r[y++]*m+r[y++]*_;y=0;for(let v=0;v<3;v++)i[T++]=r[y++]*p+r[y++]*g+r[y++]*D}if(a)for(let s=0;s<i.length;s++)isNaN(i[s])&&(i[s]=-1)}return i}(o.offsets,l,r),o}function re(e){const{projectedExtent:n,srcBufferExtent:a,pixelSize:o,datumTransformation:l,rasterTransform:i}=e,d=n.spatialReference,r=a.spatialReference;E(d,r);const{xmin:t,ymin:s,xmax:c,ymax:u}=n,p=z(r),f=e.hasWrapAround||"gcs-shift"===(null==i?void 0:i.type),x=e.spacing||[32,32],m={x:x[0]*o.x,y:x[1]*o.y},g_cols=Math.ceil((c-t)/m.x-.1/x[0])+1,g_rows=Math.ceil((u-s)/m.y-.1/x[1])+1,_=m.x,D=m.y,y=[];let T,v=0;const I=[];for(let K=0;K<g_cols;K++)for(let J=0;J<g_rows;J++)I.push(new R.Z({x:t+_*K,y:u-D*J,spatialReference:d}));const de=function le(e,n,a=null){const o=e[0].spatialReference;return o.equals(n)?e:(E(o,n,a),(0,b.iV)(e,n,a))}(I,r,l);for(let K=0;K<g_cols;K++){const J=[];for(let q=0;q<g_rows;q++){let F=de[K*g_rows+q];i&&(F=i.inverseTransform(F)),J.push(F),K>0&&f&&F&&T[q]&&(0,M.pC)(p)&&F.x<T[q].x&&(F.x+=p),F?(y.push((F.x-a.xmin)/(a.xmax-a.xmin)),y.push((a.ymax-F.y)/(a.ymax-a.ymin))):(y.push(NaN),y.push(NaN),v++)}T=J}return{offsets:y,error:null,coefficients:null,outofBoundPointCount:v,spacing:x,size:[g_cols-1,g_rows-1]}}function ce(e){const n=e.clone().normalize();return 1===n.length?n[0]:te(n)}function ue(e,n,a){const{storageInfo:o,pixelSize:l}=n;let i,d=!1;const{pyramidResolutions:r}=o;if((0,M.pC)(r)&&r.length){const p=(e.x+e.y)/2,f=r[r.length-1],x=(f.x+f.y)/2,m=(l.x+l.y)/2;if(p<=m)i=0;else if(p>=x)i=r.length,d=p/x>8;else{let _,D=m;for(let y=1;y<=r.length;y++){if(_=(r[y-1].x+r[y-1].y)/2,p<=_){p===_?i=y:"down"===a?(i=y-1,d=p/D>8):i="up"===a||p-D>_-p||p/D>2?y:y-1;break}D=_}}const g=0===i?l:r[i-1];return{pyramidLevel:i,pyramidResolution:new R.Z({x:g.x,y:g.y,spatialReference:n.spatialReference}),excessiveReading:d}}const t=Math.log(e.x/l.x)/Math.LN2,s=Math.log(e.y/l.y)/Math.LN2,c=n.storageInfo.maximumPyramidLevel||0;i="down"===a?Math.floor(Math.min(t,s)):"up"===a?Math.ceil(Math.max(t,s)):Math.round((t+s)/2),i<0?i=0:i>c&&(d=i>c+3,i=c);const u=2**i;return{pyramidLevel:i,pyramidResolution:new R.Z({x:u*n.nativePixelSize.x,y:u*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:d}}function fe(e,n,a=512,o=!0){const{extent:l,spatialReference:i,pixelSize:d}=e,r=Y(new R.Z({x:d.x,y:d.y,spatialReference:i}),n,l);if(null==r)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const t=(r.x+r.y)/2,s=(0,U.c9)(n),c=t*s*96*39.37,u=n.isGeographic?256/a*295828763.7958547:256/a*591657527.591555;let p="vector-magdir"===e.dataType||"vector-uv"===e.dataType;const f=ne(l,n);p||o&&(n.isGeographic||n.isWebMercator)&&(p=f.xmin*f.xmax<0);let x,m=c;const g=1.001;if(p){m=u;const v=n.isGeographic?1341104507446289e-21:.29858214164761665,I=v*(96*s*39.37);x=Y(new R.Z({x:v,y:v,spatialReference:{wkid:n.isGeographic?4326:3857}}),i,f),x.x*=m/I,x.y*=m/I}else{x={x:d.x,y:d.y};const v=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2);let I=0;for(;m<u*(g/2)&&I<v;)I++,m*=2,x.x*=2,x.y*=2;Math.max(m,u)/Math.min(m,u)<=g&&(m=u)}const _=[m],D=[{x:x.x,y:x.y}],T=Math.min(70.5310735,c)/g;for(;m>=T;)m/=2,x.x/=2,x.y/=2,_.push(m),D.push({x:x.x,y:x.y});return{projectedPixelSize:r,scales:_,srcResolutions:D,isCustomTilingScheme:!p}}},62860:(O,S,h)=>{h.d(S,{Z:()=>d});var B=h(15861),P=h(17626),X=h(14517),M=h(77712),R=(h(85931),h(8314),h(90912),h(76898)),Z=h(37084),Q=h(18717),E=h(39406),H=h(44589);class N extends H.Z{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(t){super.doRender(t)}prepareRenderPasses(t){const s=t.registerRenderPass({name:"flow",brushes:[Q.Z],target:()=>this.children,drawPhase:E.jx.MAP});return[...super.prepareRenderPasses(t),s]}}h(29132);var V=h(63290),w=h(21286),W=h(62208),L=h(10699),oe=h(49672);const Y=V.Z.getLogger("esri.views.2d.engine.flow.FlowDisplayData");class ee{constructor(t,s,c,u){this.state={name:"created"},this.flowStyle=t,this.extent=s,this.size=c,this.pixelRatio=u}load(){var t=this;return(0,B.Z)(function*(){const s=new AbortController;t.state={name:"loading",abortController:s};const c=yield t.flowStyle.loadResources({extent:t.extent,size:t.size,pixelRatio:t.pixelRatio},s.signal);t.state={name:"loaded",resources:c}})()}prepareForRendering(t,s,c){if("loaded"!==this.state.name)return void Y.error("Only loaded resources can be attached.");const u=this.state.resources;u.prepareForRendering(t,s,c),this.state={name:"attached",resources:u}}destroy(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){return!!this.flowStyle.areResourcesCompatible(t.flowStyle)&&!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio||(this.flowStyle=t.flowStyle,0))}}var j=h(30217),le=h(49966),te=h(57477);class ne extends te.s{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){(0,W.pC)(this._displayData)&&(this._displayData.destroy(),this._displayData=null,this.requestRender())}setTransform(t){const{displayData:s}=this;if((0,W.Wi)(s))return;const p=[0,0];t.toScreen(p,[s.extent.xmin,s.extent.ymax]);const f=(s.extent.xmax-s.extent.xmin)/s.size[0]/t.resolution,x=(0,w.Vl)(t.rotation),{dvs:m}=this.transforms;(0,j.b)(m),(0,j.c)(m,m,[-1,1,0]),(0,j.d)(m,m,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),(0,j.c)(m,m,[p[0],p[1],0]),(0,j.r)(m,m,x),(0,j.d)(m,m,[f*t.pixelRatio,f*t.pixelRatio,1])}_createTransforms(){return{dvs:(0,le.c)()}}}var se=h(2004);const $=V.Z.getLogger("esri.views.2d.engine.flow.FlowStrategy");let A=class extends X.Z{constructor(r){super(r),this._flowDisplayObject=new ne,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(r){const{flowStyle:t}=this.flowContainer;if((0,W.Wi)(t))return void this._clear();const{extent:s,rotation:c,resolution:u,pixelRatio:p}=r.state,f=function he(r,t){const s=new oe.Z({x:(r.xmax+r.xmin)/2,y:(r.ymax+r.ymin)/2,spatialReference:r.spatialReference}),c=r.xmax-r.xmin,u=r.ymax-r.ymin,p=Math.abs(Math.cos((0,w.Vl)(t))),f=Math.abs(Math.sin((0,w.Vl)(t))),x=p*c+f*u,m=f*c+p*u,g=new se.Z({xmin:s.x-x/2,ymin:s.y-m/2,xmax:s.x+x/2,ymax:s.y+m/2,spatialReference:r.spatialReference});return g.centerAt(s),g}(s,c);f.expand(1.15);const x=[Math.round((f.xmax-f.xmin)/u),Math.round((f.ymax-f.ymin)/u)],m=new ee(t,f,x,p);if((0,W.pC)(this._loading)){if(this._loading.update(m))return;this._loading.destroy(),this._loading=null}!(0,W.Wi)(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(m)||(m.load().then(()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null},g=>{(0,L.D_)(g)||($.error("A resource failed to load.",g),this._loading=null)}),this._loading=m)}_clear(){this._flowDisplayObject.clear(),(0,W.pC)(this._loading)&&(this._loading.destroy(),this._loading=null)}};(0,P._)([(0,M.Cb)()],A.prototype,"_loading",void 0),(0,P._)([(0,M.Cb)()],A.prototype,"flowContainer",void 0),(0,P._)([(0,M.Cb)()],A.prototype,"updating",null),A=(0,P._)([(0,R.j)("esri.views.2d.engine.flow.FlowStrategy")],A);const ie=A;var k=h(23841),ae=h(83994),a=(h(85775),h(81653),h(67969),h(20194),h(55086),h(49353));class o{constructor(t,s){this._vertexData=t,this._indexData=s}prepareForRendering(t,s,c){const u=ae.Z.createVertex(t,35044,this._vertexData),p=ae.Z.createIndex(t,35044,this._indexData),f=new a.Z(t,s,c,{geometry:u},p);this.vertexBuffer=u,this.indexBuffer=p,this.vertexArray=f,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose()}}class l{constructor(t,s,c){this._loadImagery=t,this._createStreamlinesMesh=s,this._rendererSettings=function re(r){const t=(0,k.F2)(r.lineWidth),s=2*t,c=Math.round((0,k.F2)(r.lineLength)/s)+1,u=t,f=r.lineColor.toRgba(),x=[f[0]/255,f[1]/255,f[2]/255,f[3]],{lineSpeed:m,fadeDuration:g,density:_}=r;return{lineRenderWidth:t,segmentLength:s,verticesPerLine:c,lineCollisionWidth:u,lineSpacing:10,lineColor:x,lineSpeed:m,fadeDuration:g,density:_,smoothing:(0,k.F2)(r.smoothing),velocityScale:1,minWeightThreshold:.001,minSpeedThreshold:.001,maxTurnAngle:1,mergeLines:!0,interpolate:!0,profile:!1}}(c)}get animated(){return this._rendererSettings.lineSpeed>0}get renderSettings(){return this._rendererSettings}areResourcesCompatible(t){let s=!0;return s=s&&t._loadImagery===this._loadImagery,s=s&&t._createStreamlinesMesh===this._createStreamlinesMesh,s=s&&t._rendererSettings.verticesPerLine===this._rendererSettings.verticesPerLine,s=s&&t._rendererSettings.segmentLength===this._rendererSettings.segmentLength,s=s&&t._rendererSettings.lineSpacing===this._rendererSettings.lineSpacing,s=s&&t._rendererSettings.density===this._rendererSettings.density,s=s&&t._rendererSettings.smoothing===this._rendererSettings.smoothing,s=s&&t._rendererSettings.velocityScale===this._rendererSettings.velocityScale,s=s&&t._rendererSettings.minWeightThreshold===this._rendererSettings.minWeightThreshold,s=s&&t._rendererSettings.minSpeedThreshold===this._rendererSettings.minSpeedThreshold,s=s&&t._rendererSettings.mergeLines===this._rendererSettings.mergeLines,s=s&&t._rendererSettings.interpolate===this._rendererSettings.interpolate,s&&this._rendererSettings.mergeLines&&(s=t._rendererSettings.lineCollisionWidth===this._rendererSettings.lineCollisionWidth),!!s}loadResources(t,s){var c=this;return(0,B.Z)(function*(){const{extent:u,size:p}=t;(0,L.k_)(s);const f=yield c._loadImagery(u,p[0],p[1],s),{vertexData:x,indexData:m}=yield c._createStreamlinesMesh(c._rendererSettings,f,s);return new o(x,m)})()}}let i=class extends X.Z{constructor(){var r;super(...arguments),r=this,this._loadImagery=(t,s,c,u)=>(0,Z.KK)(this.layer,t,s,c,u),this._createStreamlinesMesh=(t,s,c)=>this.layer.createStreamlinesMesh({flowData:s,rendererSettings:t},{signal:c}),this.container=null,this.layer=null,this.type="rasterAnimatedFlow",this.redrawOrRefetch=(0,B.Z)(function*(){r._rendererChanged()})}get updating(){return!this._strategy||this._strategy.updating}update(r){r.stationary?this._strategy.update(r):this.layerView.requestUpdate()}install(r){this.container=new N,r.addChild(this.container),this._strategy=new ie({flowContainer:this.container}),this._rendererChanged()}uninstall(){this._strategy.destroy(),this.container.removeAllChildren(),this.container.remove()}moveEnd(){}doRefresh(){return(0,B.Z)(function*(){})()}attach(){}_rendererChanged(){if("animated-flow"!==this.layer.renderer.type)return;const r=new l(this._loadImagery,this._createStreamlinesMesh,this.layer.renderer);this.container.flowStyle=r,this.layerView.requestUpdate()}};(0,P._)([(0,M.Cb)()],i.prototype,"_strategy",void 0),(0,P._)([(0,M.Cb)()],i.prototype,"container",void 0),(0,P._)([(0,M.Cb)()],i.prototype,"layer",void 0),(0,P._)([(0,M.Cb)()],i.prototype,"layerView",void 0),(0,P._)([(0,M.Cb)()],i.prototype,"type",void 0),(0,P._)([(0,M.Cb)()],i.prototype,"updating",null),i=(0,P._)([(0,R.j)("esri.views.2d.engine.flow.AnimatedFlowView2D")],i);const d=i},10023:(O,S,h)=>{h.d(S,{V:()=>b,e:()=>M});var B=h(15861),P=h(62208),X=h(36630);function M(C){return U.apply(this,arguments)}function U(){return(U=(0,B.Z)(function*(C,R=C.popupTemplate){if(!(0,P.pC)(R))return[];const Z=yield R.getRequiredFields(C.fieldsIndex),{lastEditInfoEnabled:Q}=R,{objectIdField:E,typeIdField:H,globalIdField:N,relationships:G}=C;if(Z.includes("*"))return["*"];const V=Q?yield(0,X.CH)(C):[],w=(0,X.Q0)(C.fieldsIndex,[...Z,...V]);return H&&w.push(H),w&&E&&C.fieldsIndex.has(E)&&-1===w.indexOf(E)&&w.push(E),w&&N&&C.fieldsIndex.has(N)&&-1===w.indexOf(N)&&w.push(N),G&&G.forEach(W=>{const{keyField:L}=W;w&&L&&C.fieldsIndex.has(L)&&-1===w.indexOf(L)&&w.push(L)}),w})).apply(this,arguments)}function b(C,R){return C.popupTemplate?C.popupTemplate:(0,P.pC)(R)&&R.defaultPopupTemplateEnabled&&(0,P.pC)(C.defaultPopupTemplate)?C.defaultPopupTemplate:null}}}]);