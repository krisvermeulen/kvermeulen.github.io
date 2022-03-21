"use strict";var Vt=Object.defineProperty,Kt=Object.defineProperties,kt=Object.getOwnPropertyDescriptors,Ut=Object.getOwnPropertySymbols,Yt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable,Ot=(S,T,_)=>T in S?Vt(S,T,{enumerable:!0,configurable:!0,writable:!0,value:_}):S[T]=_,Lt=(S,T)=>{for(var _ in T||(T={}))Yt.call(T,_)&&Ot(S,_,T[_]);if(Ut)for(var _ of Ut(T))jt.call(T,_)&&Ot(S,_,T[_]);return S},Dt=(S,T)=>Kt(S,kt(T));(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[3755],{64288:(S,T,_)=>{_.d(T,{mR:()=>ot,C$:()=>q,e2:()=>tt,Jq:()=>Wt,wO:()=>at,Mk:()=>st,cM:()=>ht,Z_:()=>_t,ws:()=>rt,xV:()=>nt,Ub:()=>Ft,UK:()=>ut,Yw:()=>ct,$_:()=>V,Gr:()=>mt,nU:()=>it,Ll:()=>Nt,$K:()=>It,DQ:()=>ft,HX:()=>pt,hj:()=>et,iw:()=>Tt,TB:()=>Rt,sG:()=>dt,Gg:()=>Ct,js:()=>bt,Y8:()=>Q});var L=_(26584),w=_(63290),p=(_(21286),_(81295),_(39406)),O=_(27899);class g{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(d,f,E,N,D,R,gt,C,F){this.color=d,this.haloColor=f,this.haloSize=E,this.size=N,this.angle=D,this.offsetX=R,this.offsetY=gt,this.hAnchor=C,this.vAnchor=F}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}g.pool=new O.Z(g),_(55086);const P=w.Z.getLogger("esri.views.2d.engine.webgl.Utils"),e="geometry",h=[{name:e,strideInBytes:32,divisor:0}],U=[{name:e,strideInBytes:20,divisor:0}],v=[{name:e,strideInBytes:12,divisor:0}],I=[{name:e,strideInBytes:40,divisor:0}],u=[{name:e,strideInBytes:36,divisor:0}],x=[{name:e,strideInBytes:36,divisor:0}];function y(t){const d={};for(const f of t)d[f.name]=f.strideInBytes;return d}const b=y([{name:e,strideInBytes:36,divisor:0}]),G=y(h),At=y(U),z=y(v),X=y(I),H=y(u),Z=y(x);function V(t,{fill:d}){switch(t){case p.LW.MARKER:return b;case p.LW.FILL:return"dot-density"===d?z:"simple"===d?At:G;case p.LW.LINE:return X;case p.LW.TEXT:return H;case p.LW.LABEL:return Z}}const K=[e],k=[e],Y=[e],j=[e],$=[e];function J(t){switch(t){case p.LW.MARKER:return K;case p.LW.FILL:return k;case p.LW.LINE:return Y;case p.LW.TEXT:return j;case p.LW.LABEL:return $}}function Q(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function q(t,d){switch(d%4){case 0:case 2:return new Uint32Array(Math.floor(t*d/4));case 1:case 3:return new Uint8Array(t*d)}}function tt(t,d){switch(d%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function It(t){return null!=t}function et(t){return"number"==typeof t}function rt(t){switch(t){case"butt":return 0;case"round":return 1;case"square":return 2;default:return P.error(new L.Z("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),1}}function nt(t){switch(t){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return P.error(new L.Z("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),1}}function it(t){switch(t){case"opacity":return p.pc.OPACITY;case"color":return p.pc.COLOR;case"rotation":return p.pc.ROTATION;case"size":return p.pc.SIZE;default:return P.error(`Cannot interpret unknown vv: ${t}`),null}}function at(t,d,f,E,N,D,R){for(const C in D){const F=D[C].stride,Mt=Q(F),Gt=D[C].data,zt=f[C].data,Xt=F*N.vertexCount/Mt,Ht=F*t/Mt,Zt=F*N.vertexFrom/Mt;for(let B=0;B<Xt;++B)zt[B+Ht]=Gt[B+Zt]}const gt=N.indexCount;for(let C=0;C<gt;++C)E[C+d]=R[C+N.indexFrom]-N.vertexFrom+t}const ot={[e]:35044};function st(t,d){const f=[];for(let E=0;E<5;++E){const N=J(E),D={};for(const R of N)D[R]={data:d(E,R)};f.push({data:t(E),buffers:D})}return f}function xt(t){switch(t){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function ct(t){switch(t){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void P.error(new L.Z("webgl-utils",`Unable to handle type ${t}`))}}function ut(t){switch(t){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void P.error(new L.Z("webgl-utils",`Unable to handle type ${t}`))}}const yt=t=>{const d=new Map;for(const f in t)for(const E of t[f])d.set(E.name,E.location);return d},St=t=>{const d={};for(const f in t){const E=t[f];d[f]=E.length?E[0].stride:0}return d},W=new Map,ht=(t,d)=>{if(!W.has(t)){const f=function lt(t){const d={};for(const f in t){let N=0;d[f]=t[f].map(D=>{const R=Dt(Lt({},D),{normalized:D.normalized||!1,divisor:D.divisor||0,offset:N,stride:0});return N+=D.count*xt(D.type),R}),d[f].forEach(D=>D.stride=N)}return d}(d),E={strides:St(f),bufferLayouts:f,attributes:yt(d)};W.set(t,E)}return W.get(t)};function _t(t){t(p.LW.FILL),t(p.LW.LINE),t(p.LW.MARKER),t(p.LW.TEXT),t(p.LW.LABEL)}const dt=t=>"path"in t&&Bt(t.path),pt=t=>"url"in t&&t.url||"imageData"in t&&t.imageData,mt=t=>"imageData"in t&&t.imageData&&"contentType"in t&&t.contentType?`data:${t.contentType};base64,${t.imageData}`:"url"in t?t.url:null,ft=t=>"url"in t&&t.url&&t.url.includes(".gif")||"contentType"in t&&"image/gif"===t.contentType||"imageData"in t&&t.imageData.includes("data:image/gif"),Tt=t=>"url"in t&&t.url&&t.url.includes(".png")||"contentType"in t&&"image/png"===t.contentType||"imageData"in t&&t.imageData.includes("data:image/png"),Nt=t=>t.type&&-1!==t.type.toLowerCase().indexOf("3d");function Ct(t){switch(t.type){case"line":{const d=t;return"CIMSolidStroke"===d.cim.type&&!d.dashTemplate}case"fill":return"CIMSolidFill"===t.cim.type;case"esriSFS":return"esriSFSSolid"===t.style||"esriSFSNull"===t.style;case"esriSLS":return"esriSLSSolid"===t.style||"esriSLSNull"===t.style;default:return!1}}const Rt=t=>t.includes("data:image/svg+xml");function bt(t){switch("cim"in t?t.cim.type:t.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function Ft(t){return"maxVVSize"in t&&t.maxVVSize||"width"in t&&t.width||"size"in t&&t.size||0}function Wt(t){const d=[];for(let f=0;f<t.length;f++)d.push(t.charCodeAt(f));return d}const Bt=t=>!!t&&(t=t.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4))},81295:(S,T,_)=>{_.d(T,{pr:()=>p,t2:()=>s,aH:()=>P});var L=_(5254);function p(e,o=0,l=!1){const A=e[o+3];return e[o+0]*=A,e[o+1]*=A,e[o+2]*=A,l||(e[o+3]*=255),e}function s(e){if(!e)return 0;const{r:o,g:l,b:A,a:h}=e;return(0,L.Jz)(o*h,l*h,A*h,255*h)}function P(e){if(!e)return 0;const[o,l,A,h]=e;return(0,L.Jz)(o*(h/255),l*(h/255),A*(h/255),h)}},39351:(S,T,_)=>{_.d(T,{xl:()=>q,aK:()=>tt,eF:()=>G,Uh:()=>ht,_6:()=>ft,Tz:()=>dt,CQ:()=>_t,oK:()=>pt,e0:()=>mt,SD:()=>Tt,XJ:()=>ut,$0:()=>o,iV:()=>it,Zd:()=>nt,Ex:()=>y,uG:()=>rt,Jc:()=>ot,xm:()=>l,m4:()=>et,MI:()=>W,AI:()=>M,Ip:()=>lt,ru:()=>p,fL:()=>ct,iJ:()=>Z,nM:()=>V,Ij:()=>K,f2:()=>k,Ic:()=>H,Al:()=>X,QU:()=>Y,Jw:()=>j,kF:()=>$,yP:()=>J,D3:()=>z,Iw:()=>b,tQ:()=>at,I_:()=>O,a:()=>wt,CU:()=>Et,V4:()=>st});const M=1e-30,p=4294967295,O=512,o=8,l=29,y=24,b=8,G={metrics:{width:15,height:17,left:0,top:-7,advance:14}},z=0,X=0,H=0,Z=1,V=2,K=3,k=4,Y=5,j=6,$=5,J=6,q=1,tt=2,et=2,rt=1,nt=2,it=4,at=1.05,ot=6,st=5,Et=6,wt=1.15,ct=2,ut=8,lt=500,W=10,ht=2,_t=0,dt=1,pt=4,mt=8,ft=4,Tt=1},39406:(S,T,_)=>{var L,w,M,m,p,O,g,s;_.d(T,{Un:()=>g,pc:()=>m,jx:()=>M,LW:()=>L,X:()=>p,mf:()=>O}),(s=L||(L={}))[s.FILL=0]="FILL",s[s.LINE=1]="LINE",s[s.MARKER=2]="MARKER",s[s.TEXT=3]="TEXT",s[s.LABEL=4]="LABEL",function(s){s[s.SUCCEEDED=0]="SUCCEEDED",s[s.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(w||(w={})),function(s){s[s.NONE=0]="NONE",s[s.MAP=1]="MAP",s[s.LABEL=2]="LABEL",s[s.LABEL_ALPHA=4]="LABEL_ALPHA",s[s.HITTEST=8]="HITTEST",s[s.HIGHLIGHT=16]="HIGHLIGHT",s[s.CLIP=32]="CLIP",s[s.DEBUG=64]="DEBUG",s[s.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(M||(M={})),function(s){s[s.SIZE=0]="SIZE",s[s.COLOR=1]="COLOR",s[s.OPACITY=2]="OPACITY",s[s.ROTATION=3]="ROTATION"}(m||(m={})),function(s){s[s.NONE=0]="NONE",s[s.OPACITY=1]="OPACITY",s[s.COLOR=2]="COLOR",s[s.ROTATION=4]="ROTATION",s[s.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",s[s.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",s[s.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",s[s.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(p||(p={})),function(s){s[s.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",s[s.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",s[s.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",s[s.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(O||(O={})),function(s){s[s.SPRITE=0]="SPRITE",s[s.GLYPH=1]="GLYPH"}(g||(g={}))},5254:(S,T,_)=>{_.d(T,{UJ:()=>h,Jz:()=>U,Au:()=>l});const L=new Float32Array(1);function l(u){return[255&u,(65280&u)>>>8,(16711680&u)>>>16,(4278190080&u)>>>24]}function h(u,x){return 65535&u|x<<16}function U(u,x,y,b){return 255&u|(255&x)<<8|(255&y)<<16|b<<24}new Uint32Array(L.buffer)},55086:(S,T,_)=>{_.d(T,{Z:()=>g});var L=_(21286),w=_(62208),M=_(81653),m=_(67969),p=_(38210);class g{constructor(e,o,l=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(m._g.Texture,this),this._descriptor=Lt({target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1},o),34067===this._descriptor.target?this.setDataCubeMap(l):this.setData(l)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(m._g.Texture,this))}release(){this.dispose()}resize(e,o){const l=this._descriptor;l.width===e&&l.height===o||(l.width=e,l.height=o,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(e=null){for(let o=34069;o<=34074;o++)this.setData(e,o)}setData(e,o=3553){if(!this._context||!this._context.gl)return;const l=this._context.gl;this._glName||(this._glName=l.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const A=this._context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES),h=this._descriptor;g._validateTexture(this._context,h),l.pixelStorei(l.UNPACK_ALIGNMENT,h.unpackAlignment),l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,h.flipped?1:0),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.preMultiplyAlpha?1:0);const U=h.pixelFormat;let v=h.internalFormat?h.internalFormat:this._deriveInternalFormat(U,h.dataType);if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let I=e.width,u=e.height;e instanceof HTMLVideoElement&&(I=e.videoWidth,u=e.videoHeight),l.texImage2D(o,0,v,U,h.dataType,e),(0,M.zu)(l),h.hasMipmap&&this.generateMipmap(),void 0===h.width&&(h.width=I),void 0===h.height&&(h.height=u)}else{null!=h.width&&null!=h.height||console.error("Width and height must be specified!"),l.DEPTH24_STENCIL8&&v===l.DEPTH_STENCIL&&(v=l.DEPTH24_STENCIL8);let I=h.width,u=h.height;if(function s(P){return(0,w.pC)(P)&&"type"in P&&"compressed"===P.type}(e)){const x=Math.round(Math.log(Math.max(I,u))/Math.LN2)+1;h.hasMipmap=h.hasMipmap&&x===e.levels.length;for(let y=0;;++y){const b=e.levels[Math.min(y,e.levels.length-1)];if(l.compressedTexImage2D(o,y,v,I,u,0,b),1===I&&1===u||!h.hasMipmap)break;I=Math.max(1,I>>1),u=Math.max(1,u>>1)}}else if((0,w.pC)(e))l.texImage2D(o,0,v,I,u,0,U,h.dataType,e),(0,M.zu)(l),h.hasMipmap&&this.generateMipmap();else for(let x=0;l.texImage2D(o,x,v,I,u,0,U,h.dataType,null),(0,M.zu)(l),(1!==I||1!==u)&&h.hasMipmap;++x)I=Math.max(1,I>>1),u=Math.max(1,u>>1)}g._applySamplingMode(l,this._descriptor),g._applyWrapMode(l,this._descriptor),g._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,M.zu)(l),this._context.bindTexture(A,g.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,o,l,A,h,U,v=3553){U||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const I=this._context.gl,u=this._descriptor,x=this._context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);(o<0||l<0||A>u.width||h>u.height||o+A>u.width||l+h>u.height)&&console.error("An attempt to update out of bounds of the texture!"),I.pixelStorei(I.UNPACK_ALIGNMENT,u.unpackAlignment),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,u.flipped?1:0),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.preMultiplyAlpha?1:0),U instanceof ImageData||U instanceof HTMLImageElement||U instanceof HTMLCanvasElement||U instanceof HTMLVideoElement?I.texSubImage2D(v,e,o,l,u.pixelFormat,u.dataType,U):I.texSubImage2D(v,e,o,l,A,h,u.pixelFormat,u.dataType,U),this._context.bindTexture(x,g.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,g._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const o=this._context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(e.target),this._context.bindTexture(o,g.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,g._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,o=this._descriptor;this._samplingModeDirty&&(g._applySamplingMode(e,o),this._samplingModeDirty=!1),this._wrapModeDirty&&(g._applyWrapMode(e,o),this._wrapModeDirty=!1)}_deriveInternalFormat(e,o){if("webgl"===this._context.webglVersion)return e;if(5126===o)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}static _validateTexture(e,o){(o.width<0||o.height<0)&&console.error("Negative dimension parameters are not allowed!");const l=(0,L.wt)(o.width)&&(0,L.wt)(o.height);(0,p.Z)(e.gl)||l||("number"==typeof o.wrapMode?33071!==o.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===o.wrapMode.s&&33071===o.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),o.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,o){let l=o.samplingMode,A=o.samplingMode;9985===l||9987===l?(l=9729,o.hasMipmap||(A=9729)):9984!==l&&9986!==l||(l=9728,o.hasMipmap||(A=9728)),e.texParameteri(o.target,e.TEXTURE_MAG_FILTER,l),e.texParameteri(o.target,e.TEXTURE_MIN_FILTER,A)}static _applyWrapMode(e,o){"number"==typeof o.wrapMode?(e.texParameteri(o.target,e.TEXTURE_WRAP_S,o.wrapMode),e.texParameteri(o.target,e.TEXTURE_WRAP_T,o.wrapMode)):(e.texParameteri(o.target,e.TEXTURE_WRAP_S,o.wrapMode.s),e.texParameteri(o.target,e.TEXTURE_WRAP_T,o.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,o){var l;const A=e.capabilities.textureFilterAnisotropic;!A||e.gl.texParameterf(o.target,A.TEXTURE_MAX_ANISOTROPY,null!=(l=o.maxAnisotropy)?l:1)}}g.TEXTURE_UNIT_FOR_UPDATES=0},38210:(S,T,_)=>{function L(w){return window.WebGL2RenderingContext&&w instanceof window.WebGL2RenderingContext}_.d(T,{Z:()=>L})},81653:(S,T,_)=>{_.d(T,{zu:()=>P,hZ:()=>g,CG:()=>s});var L=_(26584),w=_(8314);const m=_(63290).Z.getLogger("esri/views/webgl"),O=!!(0,w.Z)("enable-feature:webgl-debug");function g(){return O}function s(){return O}function P(e){if(g()){const o=e.getError();if(o){const l=function p(e,o){switch(o){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,o),A=(new Error).stack;m.error(new L.Z("webgl-error","WebGL error occured",{message:l,stack:A}))}}}},67969:(S,T,_)=>{_.d(T,{Ld:()=>L,Lu:()=>M,_g:()=>w});const L=33984;var w,m;(m=w||(w={}))[m.Texture=0]="Texture",m[m.Buffer=1]="Buffer",m[m.VAO=2]="VAO",m[m.VertexShader=3]="VertexShader",m[m.FragmentShader=4]="FragmentShader",m[m.Program=5]="Program",m[m.Framebuffer=6]="Framebuffer",m[m.Renderbuffer=7]="Renderbuffer",m[m.COUNT=8]="COUNT";const M=33306}}]);