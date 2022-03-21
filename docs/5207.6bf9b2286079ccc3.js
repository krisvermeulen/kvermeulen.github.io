"use strict";(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[5207],{90301:(K,f,t)=>{t.d(f,{eY:()=>U});var s=t(62208),d=t(30217),P=t(49966),p=t(9545),o=t(57477),E=t(14403),O=t(55086);function B(m,i,u){const n={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return i&&u&&(n.width=i,n.height=u),new O.Z(m,n)}class U extends o.s{constructor(i=null,u,n=!0){super(),this.requestRenderOnSourceChangedEnabled=n,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=u,this.source=i,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(i){this._height=i}get source(){return this._source}set source(i){this._source=i,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(i){this._width=i}beforeRender(i){super.beforeRender(i),this.updateTexture(i.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,P.c)()}}setTransform(i){const u=(0,d.b)(this.transforms.dvs),[n,y]=i.toScreenNoRotation([0,0],[this.x,this.y]),W=this.resolution/this.pixelRatio/i.resolution,H=W*this.width,L=W*this.height,z=Math.PI*this.rotation/180;(0,d.c)(u,u,(0,p.f)(n,y)),(0,d.c)(u,u,(0,p.f)(H/2,L/2)),(0,d.r)(u,u,-z),(0,d.c)(u,u,(0,p.f)(-H/2,-L/2)),(0,d.j)(u,u,(0,p.f)(H,L)),(0,d.m)(this.transforms.dvs,i.displayViewMat3,u)}setSamplingProfile(i){this._texture&&(i.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(i.samplingMode))}bind(i,u){this._texture&&i.bindTexture(this._texture,u)}updateTexture(i){var u;if(!this.stage)return null==(u=this._texture)||u.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this._texture=this.source?B(i,this.sourceWidth,this.sourceHeight):B(i));const n=this.source;if(n){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function T(m){return m&&"render"in m}(n))if(n instanceof E.Z){const y=n.getRenderedRasterPixels();this._texture.setData((0,s.pC)(y)?y.renderedRasterPixels:null)}else this._texture.setData(function b(m){const i=document.createElement("canvas");return i.width=m.width,i.height=m.height,m.render(i.getContext("2d")),i}(n));else(function v(m){return m&&!("render"in m)})(n)&&this._texture.setData(n);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},91757:(K,f,t)=>{t.d(f,{c:()=>p});var s=t(2361),d=t(39406),P=t(44589);class p extends P.Z{get requiresDedicatedFBO(){return this.children.some(E=>"additive"===E.blendFunction)}prepareRenderPasses(E){const O=E.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:d.jx.MAP});return[...super.prepareRenderPasses(E),O]}}},14403:(K,f,t)=>{t.d(f,{Z:()=>d});var s=t(62208);class d{constructor(p,o,E){this.pixelBlock=p,this.extent=o,this.originalPixelBlock=E}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(p){const o=this.pixelBlock;if((0,s.Wi)(o))return;const E=this.filter({pixelBlock:o});if((0,s.Wi)(E.pixelBlock))return;const O=E.pixelBlock.getAsRGBA(),T=p.createImageData(E.pixelBlock.width,E.pixelBlock.height);T.data.set(O),p.putImageData(T,0,0)}getRenderedRasterPixels(){const p=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(p.pixelBlock)?null:{width:p.pixelBlock.width,height:p.pixelBlock.height,renderedRasterPixels:new Uint8Array(p.pixelBlock.getAsRGBA().buffer)}}}},37384:(K,f,t)=>{t.d(f,{y:()=>x});var s=t(17626),d=t(7093),P=t(89726),p=t(27e3),o=t(77712),v=(t(85931),t(8314),t(90912),t(76898)),b=t(1011),B=t(86162);t(63290),t(82255);let i=class extends B.wq{};i=(0,s._)([(0,v.j)("esri.views.layers.support.ClipArea")],i);const u=i;var n;let y=n=class extends u{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],y.prototype,"version",null),y=n=(0,s._)([(0,v.j)("esri.views.layers.support.ClipRect")],y);const W=y;t(29132);var C,L=t(21674),z=t(91179),G=t(2004),R=t(37118);const V={base:L.Z,key:"type",typeMap:{extent:G.Z,polygon:R.Z}};let D=C=class extends u{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new C({geometry:this.geometry.clone()})}};(0,s._)([(0,o.Cb)({types:V,json:{read:z.im,write:!0}})],D.prototype,"geometry",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],D.prototype,"version",null),D=C=(0,s._)([(0,v.j)("esri.views.layers.support.Geometry")],D);const M=D;let A=class extends u{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[[[Number]]],json:{write:!0}})],A.prototype,"path",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],A.prototype,"version",null),A=(0,s._)([(0,v.j)("esri.views.layers.support.Path")],A);const e=d.Z.ofType({key:"type",base:u,typeMap:{rect:W,path:A,geometry:M}}),x=c=>{let a=class extends c{constructor(){super(...arguments),this.clips=new e,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var r;this.container||(this.container=new b.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,p.S1)(this,"suspended",h=>{this.container&&(this.container.visible=!h),this.view&&!h&&this.updateRequested&&this.view.requestUpdate()},!0),(0,p.S1)(this,["layer.opacity","container"],()=>{var h,g;this.container&&(this.container.opacity=null!=(h=null==(g=this.layer)?void 0:g.opacity)?h:1)},!0),(0,p.S1)(this,["layer.blendMode"],h=>{this.container&&(this.container.blendMode=h)},!0),(0,p.S1)(this,["layer.effect"],h=>{this.container&&(this.container.effect=h)},!0),this.clips.on("change",()=>{this.container.clips=this.clips,this.notifyChange("clips")})]),null!=(r=this.view)&&r.whenLayerView?this.view.whenLayerView(this.layer).then(h=>{h!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(!this.updatingHandles||!this.updatingHandles.updating)}isVisibleAtScale(r){let h=!0;const g=this.layer,_=g.minScale,I=g.maxScale;if(null!=_&&null!=I){let w=!_,j=!I;!w&&r<=_&&(w=!0),!j&&r>=I&&(j=!0),h=w&&j}return h}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(r){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",r),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(r))):this.updateRequested=!1}hitTest(r,h){return Promise.resolve(null)}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,s._)([(0,o.Cb)({type:e,set(r){const h=(0,P.Z)(r,this._get("clips"),e);this._set("clips",h)}})],a.prototype,"clips",void 0),(0,s._)([(0,o.Cb)()],a.prototype,"moving",void 0),(0,s._)([(0,o.Cb)()],a.prototype,"attached",void 0),(0,s._)([(0,o.Cb)()],a.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],a.prototype,"suspended",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],a.prototype,"updateParameters",void 0),(0,s._)([(0,o.Cb)()],a.prototype,"updateRequested",void 0),(0,s._)([(0,o.Cb)()],a.prototype,"updating",null),(0,s._)([(0,o.Cb)()],a.prototype,"view",void 0),a=(0,s._)([(0,v.j)("esri.views.2d.layers.LayerView2D")],a),a}},67802:(K,f,t)=>{t.d(f,{Z:()=>A});var s=t(15861),d=t(17626),P=t(14517),p=t(10699),o=t(77712),v=(t(85931),t(8314),t(90912),t(76898)),b=t(2004),B=t(65401),U=t(37053),m=t(2584);const i=Math.PI/180;var L=t(90301),z=t(9598),G=t(58098);const R=(0,B.Ue)(),C=[0,0],V=new G.Z(0,0,0,0);let M=class extends P.Z{constructor(l){var e;super(l),e=this,this._imagePromise=null,this.bitmaps=[],this.hidpi=false,this.imageMaxWidth=2048,this.imageMaxHeight=2048,this.imageRotationSupported=false,this.imageNormalizationSupported=false,this.update=(0,p.Ds)(function(){var x=(0,s.Z)(function*(c,a){if(!c.stationary||e.destroyed)return null;const r=c.state,h=(0,U.C5)(r.spatialReference),g=e.hidpi?c.pixelRatio:1,_=e.imageNormalizationSupported&&r.worldScreenWidth&&r.worldScreenWidth<r.size[0];_?(C[0]=r.worldScreenWidth,C[1]=r.size[1]):e.imageRotationSupported?(C[0]=r.size[0],C[1]=r.size[1]):function y(l,e){const x=function u(l){return l*i}(e.rotation),c=Math.abs(Math.cos(x)),a=Math.abs(Math.sin(x)),[r,h]=e.size;return l[0]=Math.round(h*a+r*c),l[1]=Math.round(h*c+r*a),l}(C,r);const I=Math.floor(C[0]*g)>e.imageMaxWidth||Math.floor(C[1]*g)>e.imageMaxHeight,j=!e.imageNormalizationSupported&&h&&(r.extent.xmin<h.valid[0]||r.extent.xmax>h.valid[1]),F=e.imageRotationSupported?r.rotation:0;if(I||j){let S=Math.min(e.imageMaxWidth,e.imageMaxHeight);j&&(S=Math.min(r.worldScreenWidth,S)),e._imagePromise=e._tiledExport(r,S,F,g,a)}else e._imagePromise=e._singleExport(r,C,_?r.paddedViewState.center:r.center,r.resolution,F,g,a);return e._imagePromise.then(function(){var S=(0,s.Z)(function*(N){if(e._imagePromise=null,!e.destroyed){e.bitmaps=null!=N?N:[];for(const Z of e.container.children)N.includes(Z)||Z.fadeOut().then(()=>{Z.remove()});for(const Z of N)e.container.addChild(Z),Z.fadeIn()}});return function(N){return S.apply(this,arguments)}}()).catch(S=>{throw e._imagePromise=null,S})});return function(c,a){return x.apply(this,arguments)}}(),5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(l){for(const e of this.container.children){if(!e.visible||!e.stage)return;l(e),e.invalidateTexture(),e.requestRender()}}_export(l,e,x,c,a,r){var h=this;return(0,s.Z)(function*(){const g=yield h.fetchSource(l,Math.floor(e*a),Math.floor(x*a),{rotation:c,pixelRatio:a,signal:r}),_=new L.eY(g,"additive");return _.x=l.xmin,_.y=l.ymax,_.resolution=l.width/e,_.rotation=c,_.pixelRatio=a,_})()}_singleExport(l,e,x,c,a,r,h){var g=this;return(0,s.Z)(function*(){!function W(l,e,x,c){const[a,r]=e,[h,g]=c,_=.5*x;l[0]=a-_*h,l[1]=r-_*g,l[2]=a+_*h,l[3]=r+_*g}(R,x,c,e);const _=new b.Z(R[0],R[1],R[2],R[3],l.spatialReference);return[yield g._export(_,e[0],e[1],a,r,h)]})()}_tiledExport(l,e,x,c,a){const r=m.Z.create({size:e,spatialReference:l.spatialReference,scales:[l.scale]}),h=new z.Z(r),g=h.getTileCoverage(l);if(!g)return null;const _=[];return g.forEach((I,w,j,Y)=>{V.set(I,w,j,Y),h.getTileBounds(R,V);const F=new b.Z(R[0],R[1],R[2],R[3],l.spatialReference);_.push(this._export(F,e,e,x,c,a))}),Promise.all(_)}};(0,d._)([(0,o.Cb)()],M.prototype,"_imagePromise",void 0),(0,d._)([(0,o.Cb)()],M.prototype,"bitmaps",void 0),(0,d._)([(0,o.Cb)()],M.prototype,"container",void 0),(0,d._)([(0,o.Cb)()],M.prototype,"fetchSource",void 0),(0,d._)([(0,o.Cb)()],M.prototype,"hidpi",void 0),(0,d._)([(0,o.Cb)()],M.prototype,"imageMaxWidth",void 0),(0,d._)([(0,o.Cb)()],M.prototype,"imageMaxHeight",void 0),(0,d._)([(0,o.Cb)()],M.prototype,"imageRotationSupported",void 0),(0,d._)([(0,o.Cb)()],M.prototype,"imageNormalizationSupported",void 0),(0,d._)([(0,o.Cb)()],M.prototype,"requestUpdate",void 0),(0,d._)([(0,o.Cb)()],M.prototype,"updating",null),M=(0,d._)([(0,v.j)("esri.views.2d.layers.support.ExportStrategy")],M);const A=M},45611:(K,f,t)=>{t.d(f,{Z:()=>u});var s=t(17626),d=t(14517),P=t(61885),p=t(80542),o=t(61996),E=t(63290),O=t(62208),T=t(60330),v=t(77712),m=(t(85931),t(8314),t(90912),t(76898));let i=class extends((0,p.p)((0,o.I)((0,T.v)(P.Z.EventedMixin(d.Z))))){constructor(n){super(n),this.layer=null,this.parent=null}initialize(){this.when().catch(n=>{if("layerview:create-error"!==n.name){const y=this.layer&&this.layer.id||"no id",W=this.layer&&this.layer.title||"no title";throw E.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${W}', id: '${y}')`,n),n}})}get fullOpacity(){return(0,O.Pt)(this.get("layer.opacity"),1)*(0,O.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var n;return!0===(null==(n=this.layer)?void 0:n.visible)}set visible(n){void 0!==n?this._override("visible",n):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const n=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(n.viewNotReady=!0),this.layer&&this.layer.loaded||(n.layerNotLoaded=!0),this.visible||(n.layerInvisible=!0),n}isUpdating(){return!1}};(0,s._)([(0,v.Cb)()],i.prototype,"fullOpacity",null),(0,s._)([(0,v.Cb)()],i.prototype,"layer",void 0),(0,s._)([(0,v.Cb)()],i.prototype,"parent",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],i.prototype,"suspended",null),(0,s._)([(0,v.Cb)({readOnly:!0})],i.prototype,"suspendInfo",null),(0,s._)([(0,v.Cb)({readOnly:!0})],i.prototype,"legendEnabled",null),(0,s._)([(0,v.Cb)({type:Boolean,readOnly:!0})],i.prototype,"updating",null),(0,s._)([(0,v.Cb)({readOnly:!0})],i.prototype,"updatingProgress",null),(0,s._)([(0,v.Cb)()],i.prototype,"visible",null),i=(0,s._)([(0,m.j)("esri.views.layers.LayerView")],i);const u=i},94421:(K,f,t)=>{t.d(f,{y:()=>b});var s=t(17626),d=t(63290),P=t(10699),p=t(27e3),o=t(77712),v=(t(85931),t(8314),t(90912),t(76898));const b=B=>{let U=class extends B{initialize(){this.handles.add((0,p.on)(this,"layer","refresh",m=>{this.doRefresh(m.dataChanged).catch(i=>{(0,P.D_)(i)||d.Z.getLogger(this.declaredClass).error(i)})}),"RefreshableLayerView")}};return(0,s._)([(0,o.Cb)()],U.prototype,"layer",void 0),U=(0,s._)([(0,v.j)("esri.layers.mixins.RefreshableLayerView")],U),U}}}]);