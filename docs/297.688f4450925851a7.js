"use strict";var at=Object.defineProperty,ot=Object.defineProperties,lt=Object.getOwnPropertyDescriptors,it=Object.getOwnPropertySymbols,ut=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,nt=(C,E,p)=>E in C?at(C,E,{enumerable:!0,configurable:!0,writable:!0,value:p}):C[E]=p,q=(C,E)=>{for(var p in E||(E={}))ut.call(E,p)&&nt(C,p,E[p]);if(it)for(var p of it(E))vt.call(E,p)&&nt(C,p,E[p]);return C},st=(C,E)=>ot(C,lt(E));(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[297],{11915:(C,E,p)=>{p.d(E,{e:()=>X});var R,Y,tt={exports:{}};R=tt,void 0!==(Y=function(){function W(t,e,r){r=r||2;var s,i,a,o,d,V,O,k=e&&e.length,U=k?e[0]*r:t.length,F=_(t,0,U,r,!0),z=[];if(!F||F.next===F.prev)return z;if(k&&(F=function j(t,e,r,s){var i,a,o,d=[];for(i=0,a=e.length;i<a;i++)(o=_(t,e[i]*s,i<a-1?e[i+1]*s:t.length,s,!1))===o.next&&(o.steiner=!0),d.push(rt(o));for(d.sort(G),i=0;i<d.length;i++)r=I(r=Q(d[i],r),r.next);return r}(t,e,F,r)),t.length>80*r){s=a=t[0],i=o=t[1];for(var T=r;T<U;T+=r)(d=t[T])<s&&(s=d),(V=t[T+1])<i&&(i=V),d>a&&(a=d),V>o&&(o=V);O=0!==(O=Math.max(a-s,o-i))?1/O:0}return D(F,z,r,s,i,O),z}function _(t,e,r,s,i){var a,o;if(i===M(t,e,r,s)>0)for(a=e;a<r;a+=s)o=y(a,t[a],t[a+1],o);else for(a=r-s;a>=e;a-=s)o=y(a,t[a],t[a+1],o);if(o&&v(o,o.next)){var d=o.next;n(o),o=d}return o}function I(t,e){if(!t)return t;e||(e=t);var r,s=t;do{if(r=!1,s.steiner||!v(s,s.next)&&0!==L(s.prev,s,s.next))s=s.next;else{var i=s.prev;if(n(s),(s=e=i)===s.next)break;r=!0}}while(r||s!==e);return e}function D(t,e,r,s,i,a,o){if(t){!o&&a&&A(t,s,i,a);for(var d,V,O=t;t.prev!==t.next;)if(d=t.prev,V=t.next,a?J(t,s,i,a):et(t))e.push(d.i/r),e.push(t.i/r),e.push(V.i/r),n(t),t=V.next,O=V.next;else if((t=V)===O){o?1===o?D(t=P(I(t),e,r),e,r,s,i,a,2):2===o&&K(t,e,r,s,i,a):D(I(t),e,r,s,i,a,1);break}}}function et(t){var e=t.prev,r=t,s=t.next;if(L(e,r,s)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(B(e.x,e.y,r.x,r.y,s.x,s.y,i.x,i.y)&&L(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function J(t,e,r,s){var i=t.prev,a=t,o=t.next;if(L(i,a,o)>=0)return!1;for(var O=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,k=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,U=H(i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,e,r,s),F=H(O,k,e,r,s),z=t.prevZ,T=t.nextZ;z&&z.z>=U&&T&&T.z<=F;){if(z!==t.prev&&z!==t.next&&B(i.x,i.y,a.x,a.y,o.x,o.y,z.x,z.y)&&L(z.prev,z,z.next)>=0||(z=z.prevZ,T!==t.prev&&T!==t.next&&B(i.x,i.y,a.x,a.y,o.x,o.y,T.x,T.y)&&L(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;z&&z.z>=U;){if(z!==t.prev&&z!==t.next&&B(i.x,i.y,a.x,a.y,o.x,o.y,z.x,z.y)&&L(z.prev,z,z.next)>=0)return!1;z=z.prevZ}for(;T&&T.z<=F;){if(T!==t.prev&&T!==t.next&&B(i.x,i.y,a.x,a.y,o.x,o.y,T.x,T.y)&&L(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function P(t,e,r){var s=t;do{var i=s.prev,a=s.next.next;!v(i,a)&&u(i,s,s.next,a)&&g(i,a)&&g(a,i)&&(e.push(i.i/r),e.push(s.i/r),e.push(a.i/r),n(s),n(s.next),s=t=a),s=s.next}while(s!==t);return I(s)}function K(t,e,r,s,i,a){var o=t;do{for(var d=o.next.next;d!==o.prev;){if(o.i!==d.i&&w(o,d)){var V=m(o,d);return o=I(o,o.next),V=I(V,V.next),D(o,e,r,s,i,a),void D(V,e,r,s,i,a)}d=d.next}o=o.next}while(o!==t)}function G(t,e){return t.x-e.x}function N(t){if(t.next.prev===t)return t;let e=t;for(;;){const r=e.next;if(r.prev===e||r===e||r===t)break;e=r}return e}function Q(t,e){var r=function $(t,e){var r,s=e,i=t.x,a=t.y,o=-1/0;do{if(a<=s.y&&a>=s.next.y&&s.next.y!==s.y){var d=s.x+(a-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(d<=i&&d>o){if(o=d,d===i){if(a===s.y)return s;if(a===s.next.y)return s.next}r=s.x<s.next.x?s:s.next}}s=s.next}while(s!==e);if(!r)return null;if(i===o)return r;var V,O=r,k=r.x,U=r.y,F=1/0;s=r;do{i>=s.x&&s.x>=k&&i!==s.x&&B(a<U?i:o,a,k,U,a<U?o:i,a,s.x,s.y)&&(V=Math.abs(a-s.y)/(i-s.x),g(s,t)&&(V<F||V===F&&(s.x>r.x||s.x===r.x&&b(r,s)))&&(r=s,F=V)),s=s.next}while(s!==O);return r}(t,e);if(!r)return e;var s=m(r,t),i=I(r,r.next);let a=N(s);return I(a,a.next),i=N(i),N(e===r?i:e)}function b(t,e){return L(t.prev,t,e.prev)<0&&L(e.next,t,t.next)<0}function A(t,e,r,s){var i=t;do{if(null===i.z&&(i.z=H(i.x,i.y,e,r,s)),i.prev.next!==i||i.next.prev!==i)return i.prev.next=i,i.next.prev=i,A(t,e,r,s);i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function Z(t){var e,r,s,i,a,o,d,V,O=1;do{for(r=t,t=null,a=null,o=0;r;){for(o++,s=r,d=0,e=0;e<O&&(d++,s=s.nextZ);e++);for(V=O;d>0||V>0&&s;)0!==d&&(0===V||!s||r.z<=s.z)?(i=r,r=r.nextZ,d--):(i=s,s=s.nextZ,V--),a?a.nextZ=i:t=i,i.prevZ=a,a=i;r=s}a.nextZ=null,O*=2}while(o>1)}(i)}function H(t,e,r,s,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-s)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function rt(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next}while(e!==t);return r}function B(t,e,r,s,i,a,o,d){return(i-o)*(e-d)-(t-o)*(a-d)>=0&&(t-o)*(s-d)-(r-o)*(e-d)>=0&&(r-o)*(a-d)-(i-o)*(s-d)>=0}function w(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function h(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&u(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}(t,e)&&(g(t,e)&&g(e,t)&&function S(t,e){var r=t,s=!1,i=(t.x+e.x)/2,a=(t.y+e.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next}while(r!==t);return s}(t,e)&&(L(t.prev,t,e.prev)||L(t,e.prev,e))||v(t,e)&&L(t.prev,t,t.next)>0&&L(e.prev,e,e.next)>0)}function L(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function v(t,e){return t.x===e.x&&t.y===e.y}function u(t,e,r,s){var i=c(L(t,e,r)),a=c(L(t,e,s)),o=c(L(r,s,t)),d=c(L(r,s,e));return i!==a&&o!==d||!(0!==i||!f(t,r,e))||!(0!==a||!f(t,s,e))||!(0!==o||!f(r,t,s))||!(0!==d||!f(r,e,s))}function f(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function c(t){return t>0?1:t<0?-1:0}function g(t,e){return L(t.prev,t,t.next)<0?L(t,e,t.next)>=0&&L(t,t.prev,e)>=0:L(t,e,t.prev)<0||L(t,t.next,e)<0}function m(t,e){var r=new l(t.i,t.x,t.y),s=new l(e.i,e.x,e.y),i=t.next,a=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,s.next=r,r.prev=s,a.next=s,s.prev=a,s}function y(t,e,r,s){var i=new l(t,e,r);return s?(i.next=s.next,i.prev=s,s.next.prev=i,s.next=i):(i.prev=i,i.next=i),i}function n(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function l(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M(t,e,r,s){for(var i=0,a=e,o=r-s;a<r;a+=s)i+=(t[o]-t[a])*(t[a+1]+t[o+1]),o=a;return i}return W.deviation=function(t,e,r,s){var i=e&&e.length,o=Math.abs(M(t,0,i?e[0]*r:t.length,r));if(i)for(var d=0,V=e.length;d<V;d++)o-=Math.abs(M(t,e[d]*r,d<V-1?e[d+1]*r:t.length,r));var U=0;for(d=0;d<s.length;d+=3){var F=s[d]*r,z=s[d+1]*r,T=s[d+2]*r;U+=Math.abs((t[F]-t[T])*(t[z+1]-t[F+1])-(t[F]-t[z])*(t[T+1]-t[F+1]))}return 0===o&&0===U?0:Math.abs((U-o)/o)},W.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},s=0,i=0;i<t.length;i++){for(var a=0;a<t[i].length;a++)for(var o=0;o<e;o++)r.vertices.push(t[i][a][o]);i>0&&r.holes.push(s+=t[i-1].length)}return r},W}())&&(R.exports=Y);const X=tt.exports},43289:(C,E,p)=>{p.d(E,{vX:()=>$,s5:()=>j,k3:()=>G,Or:()=>K});const X=128/Math.PI,J=1/Math.LN2;function P(b,A){return(b%=A)>=0?b:b+A}function K(b){return P(b*X,256)}function j(b){return P(.7111111111111111*b,256)}function G(b){return Math.log(b)*J}function $(b,A,Z){return b>=A&&b<=Z||b>=Z&&b<=A}},18716:(C,E,p)=>{p.d(E,{dk:()=>c,Gq:()=>m,a:()=>g,mE:()=>h,m2:()=>w,qr:()=>S,jj:()=>rt,hF:()=>B});var R=p(26584),x=p(39406),Y=p(44649);function rt(y,n){switch(y){case x.LW.FILL:return c.from(n);case x.LW.LINE:return g.from(n);case x.LW.MARKER:return h.from(n);case x.LW.TEXT:return S.from(n);case x.LW.LABEL:return m.from(n);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${y}`)}}function B(y){switch(w.load(y).geometryType){case x.LW.MARKER:return new h(y);case x.LW.FILL:return new c(y);case x.LW.LINE:return new g(y);case x.LW.TEXT:return new S(y);case x.LW.LABEL:return new m(y)}}class w{constructor(n){this._data=0,this._data=n}static load(n){const l=this.shared;return l.data=n,l}set data(n){this._data=n}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(n){this.setBits(n,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(n){this.setBit(20,n)}get sdf(){return!!this.bit(11)}set sdf(n){this.setBit(11,n)}get pattern(){return!!this.bit(12)}set pattern(n){this.setBit(12,n)}get textureBinding(){return this.bits(0,8)}set textureBinding(n){this.setBits(n,0,8)}get geometryTypeString(){switch(this.geometryType){case x.LW.FILL:return"fill";case x.LW.MARKER:return"marker";case x.LW.LINE:return"line";case x.LW.TEXT:return"text";case x.LW.LABEL:return"label";default:throw new R.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(n,l){const M=1<<n;l?this._data|=M:this._data&=~M}bit(n){return(this._data&1<<n)>>n}setBits(n,l,M){for(let t=l,e=0;t<M;t++,e++)this.setBit(t,0!=(n&1<<e))}bits(n,l){let M=0;for(let t=n,e=0;t<l;t++,e++)M|=this.bit(t)<<e;return M}hasVV(){return!1}setVV(n,l){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}w.shared=new w(0);const L=y=>class extends y{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(n){this.setBit(16,n)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(n){this.setBit(17,n)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(n){this.setBit(18,n)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(n){this.setBit(19,n)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(n,l){super.setVV(n,l);const M=function tt(y,n){const l=x.X.SIZE_FIELD_STOPS|x.X.SIZE_MINMAX_VALUE|x.X.SIZE_SCALE_STOPS|x.X.SIZE_UNIT_VALUE,M=(y&(x.mf.FIELD_TARGETS_OUTLINE|x.mf.MINMAX_TARGETS_OUTLINE|x.mf.SCALE_TARGETS_OUTLINE|x.mf.UNIT_TARGETS_OUTLINE))>>>4;return n.isOutline||n.isOutlinedFill?l&M:l&~M}(n,l)&n;this.vvSizeMinMaxValue=!!(M&x.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(M&x.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(M&x.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(M&x.X.SIZE_SCALE_STOPS)}},v=y=>class extends y{get vvRotation(){return 0!==this.bit(15)}set vvRotation(n){this.setBit(15,n)}hasVV(){return super.hasVV()||this.vvRotation}setVV(n,l){super.setVV(n,l),this.vvRotation=!l.isOutline&&!!(n&x.X.ROTATION)}},u=y=>class extends y{get vvColor(){return 0!==this.bit(13)}set vvColor(n){this.setBit(13,n)}hasVV(){return super.hasVV()||this.vvColor}setVV(n,l){super.setVV(n,l),this.vvColor=!l.isOutline&&!!(n&x.X.COLOR)}},f=y=>class extends y{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(n){this.setBit(14,n)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(n,l){super.setVV(n,l),this.vvOpacity=!l.isOutline&&!!(n&x.X.OPACITY)}};class c extends(u(f(L(w)))){static load(n){const l=this.shared;return l.data=n,l}static from(n){const l=this.load(0);return l.geometryType=x.LW.FILL,l.dotDensity="dot-density"===n.stride.fill,l.simple="simple"===n.stride.fill,l.outlinedFill=n.isOutlinedFill,l.dotDensity||l.setVV(n.vvFlags,n),l.data}getVariation(){return st(q({},super.getVariation()),{dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}get dotDensity(){return!!this.bit(15)}set dotDensity(n){this.setBit(15,n)}get simple(){return!!this.bit(22)}set simple(n){this.setBit(22,n)}get outlinedFill(){return!!this.bit(21)}set outlinedFill(n){this.setBit(21,n)}}c.shared=new c(0);class h extends(u(f(v(L(w))))){static load(n){const l=this.shared;return l.data=n,l}static from(n){const l=this.load(0);return l.geometryType=x.LW.MARKER,l.setVV(n.vvFlags,n),l.data}getVariation(){return st(q({},super.getVariation()),{vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}h.shared=new h(0);class g extends(u(f(L(w)))){static load(n){const l=this.shared;return l.data=n,l}static from(n){const l=this.load(0);return l.geometryType=x.LW.LINE,l.setVV(n.vvFlags,n),l.data}getVariation(){return st(q({},super.getVariation()),{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}g.shared=new g(0);class S extends(u(f(v(L(w))))){static load(n){const l=this.shared;return l.data=n,l}static from(n){const l=this.load(0);return l.geometryType=x.LW.TEXT,l.setVV(n.vvFlags,n),l.data}getVariation(){return st(q({},super.getVariation()),{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}S.shared=new S(0);class m extends(L(w)){static load(n){const l=this.shared;return l.data=n,l}static from(n){const l=this.load(0);return l.geometryType=x.LW.LABEL,l.setVV(n.vvFlags,n),l.mapAligned=(0,Y.N)(n.placement),l.data}getVariation(){return st(q({},super.getVariation()),{vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}m.shared=new m(0)},44649:(C,E,p)=>{function R(x){switch(x){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}p.d(E,{N:()=>R})},61517:(C,E,p)=>{p.r(E),p.d(E,{default:()=>L});var R=p(15861),x=p(17626),Y=p(986),X=(p(26584),p(8314)),W=p(63290),_=p(62208),I=p(10699),P=(p(90912),p(85931),p(82255),p(76898)),K=p(84682),j=p(65234),G=p(99666),N=p(55130),Q=p(246),$=p(1825),b=p(32940),A=p(32954),Z=p(13112);class H{constructor(u){this._remoteClient=u,this._resourceMap=new Map,this._inFlightResourceMap=new Map}destroy(){}fetchResource(u,f){var c=this;return(0,R.Z)(function*(){const h=c._resourceMap,g=h.get(u);if(g)return g;let S=c._inFlightResourceMap.get(u);if(S)return S;try{S=c._remoteClient.invoke("tileRenderer.fetchResource",{url:u},q({},f)),c._inFlightResourceMap.set(u,S),S.then(m=>(c._inFlightResourceMap.delete(u),h.set(u,m),m))}catch(m){return(0,I.D_)(m)?null:{width:0,height:0}}return S})()}getResource(u){var f;return null!=(f=this._resourceMap.get(u))?f:null}}function rt(v,u){return(!v.minScale||v.minScale>=u)&&(!v.maxScale||v.maxScale<=u)}function B(v){const u=v.message,f={message:{data:{},tileKey:u.tileKey,tileKeyOrigin:u.tileKeyOrigin},transferList:new Array};for(const c in u.data){const h=u.data[c];if(f.message.data[c]=null,(0,_.pC)(h)){const g=h.stride,S=h.indices.slice(0),m=h.vertices.slice(0),y=h.records.slice(0),n={stride:g,indices:S,vertices:m,records:y,metrics:(0,_.Po)(h.metrics,l=>l.slice(0))};f.transferList.push(S,m,y),f.message.data[c]=n}}return f}W.Z.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let w=class extends Z.Z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new H(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(v){this._bufferIds.forEach(u=>{u.forEach(v)})}update(v,u){var f=this;return(0,R.Z)(function*(){const c=u.schema.processors[0];if("symbol"!==c.type)return;const h=(0,K.Hg)(f._schema,c);(0,K.uD)(h,"mesh")&&((0,X.Z)("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",h),v.mesh=!0,v.why.mesh.push("Symbology changed"),f._schema=c,f._factory=f._createFactory(c),f._factory.update(c,f.tileStore.tileScheme.tileInfo))})()}onTileMessage(v,u,f,c){return(0,I.k_)(c),this._onTileData(v,u,f,c)}onTileClear(v){return this._bufferData.delete(v.key.id),this._bufferIds.delete(v.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:v.id,data:{clear:!0}})}onTileError(v,u,f){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:v.id,error:u},{signal:f.signal})}onTileUpdate(v){for(const u of v.removed)this._bufferData.has(u.key.id)&&this._bufferData.delete(u.key.id),this._bufferIds.has(u.key.id)&&this._bufferIds.delete(u.key.id);for(const u of v.added)this._bufferData.forEach(f=>{for(const c of f)c.message.tileKey===u.id&&this._updateTileMesh("append",u,B(c),[],!1,!1,null)})}_addBufferData(v,u){this._bufferData.has(v)||this._bufferData.set(v,[]),this._bufferData.get(v).push(B(u))}_createFactory(v){const{geometryType:u,objectIdField:f,fields:c}=this.service,g={geometryType:u,fields:c,spatialReference:j.Z.fromJSON(this.spatialReference)},S=new $.Wr((n,l)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",n,l),this.tileStore.tileScheme.tileInfo),{matcher:m,aggregateMatcher:y}=v.mesh;return this._store=S,this._matchers.feature=(0,b.fL)(m,S,g,this._resourceManagerProxy),this._matchers.aggregate=(0,_.Po)(y,n=>(0,b.fL)(n,S,g,this._resourceManagerProxy)),new Q.j(u,f,S)}_onTileData(v,u,f,c){var h=this;return(0,R.Z)(function*(){(0,I.k_)(c);const{type:g,addOrUpdate:S,remove:m}=u,y=u.end,n=!!h._schema.mesh.sortKey;if(!S)return h.remoteClient.invoke("tileRenderer.onTileData",{tileKey:v.id,data:{type:g,addOrUpdate:null,remove:m,clear:!1,end:y,sort:n}},c);const l=h._processFeatures(v,S,f,c);try{const M=yield l;if((0,_.Wi)(M))return h.remoteClient.invoke("tileRenderer.onTileData",{tileKey:v.id,data:{type:g,addOrUpdate:null,remove:m,clear:!1,end:y,sort:n}},c);const t=[];for(const e of M){let r=!1;const s=e.message.bufferIds,i=v.key.id,a=e.message.tileKey;if(i!==a&&(0,_.pC)(s)){if(!h.tileStore.get(a)){h._addBufferData(i,e),t.push(e);continue}let o=h._bufferIds.get(a);o||(o=new Set,h._bufferIds.set(a,o));const d=Array.from(s);for(const V of d){if(o.has(V)){r=!0;break}o.add(V)}}r||(h._addBufferData(i,e),t.push(e))}yield(0,I.$6)(t.map(e=>{const r=v.key.id===e.message.tileKey;return h._updateTileMesh(g,v,e,r?u.remove:[],r&&u.end,u.clear,c.signal)}))}catch(M){h._handleError(v,M,c)}})()}_updateTileMesh(v,u,f,c,h,g,S){var m=this;return(0,R.Z)(function*(){const y=v,n=f.message.tileKey,l=!!m._schema.mesh.sortKey;n!==u.key.id&&(h=!1);const M=(0,_.Po)(f,s=>s.message),t=(0,_.Po)(f,s=>s.transferList)||[],e={type:y,addOrUpdate:M,remove:c,clear:!1,end:h,sort:l},r={transferList:(0,_.Wg)(t)||[],signal:S};return(0,I.k_)(r),m.remoteClient.invoke("tileRenderer.onTileData",{tileKey:n,data:e},r)})()}_processFeatures(v,u,f,c){var h=this;return(0,R.Z)(function*(){if((0,_.Wi)(u)||!u.hasFeatures)return null;const g={transform:v.transform,hasZ:!1,hasM:!1},S=h._factory,m={viewingMode:"",scale:v.scale},y=yield h._matchers.feature,n=yield h._matchers.aggregate;(0,I.k_)(c);const l=h._getLabelInfos(v,u);return yield S.analyze(u.getCursor(),h._resourceManagerProxy,y,n,g,m),(0,I.k_)(c),h._writeFeatureSet(v,u,g,l,S,f)})()}_writeFeatureSet(v,u,f,c,h,g){const S=u.getSize(),m=new N._(v.key.id,{features:S,records:S,metrics:0},this._schema.mesh.matcher.stride,g,!0),y={viewingMode:"",scale:v.scale},n=u.getCursor();for(;n.next();)try{const M=n.getDisplayId(),t=(0,_.pC)(c)?c.get(M):null;h.writeCursor(m,n,f,y,v.level,t)}catch(M){}return m.serialize(v.tileInfoView.tileInfo.isWrappable)}_handleError(v,u,f){if(!(0,I.D_)(u))return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:v.id,error:u.message},{signal:f.signal})}_getLabelingSchemaForScale(v){const u=this._schema.mesh.labels;if((0,_.Wi)(u))return null;if("subtype"===u.type){const c={type:"subtype",classes:{}};let h=!1;for(const g in u.classes){const S=u.classes[g].filter(m=>rt(m,v.scale));h=h||!!S.length,c.classes[g]=S}return h?c:null}const f=u.classes.filter(c=>rt(c,v.scale));return f.length?{type:"simple",classes:f}:null}_getLabels(v,u){if("subtype"===u.type){var f;const h=(0,_.s3)(this.service.subtypeField,"Expected to find subtype Field"),g=v.readAttribute(h);return null==g?[]:null!=(f=u.classes[g])?f:[]}return u.classes}_getLabelInfos(v,u){const f=this._getLabelingSchemaForScale(v);if((0,_.Wi)(f))return null;const c=new Map,h=u.getCursor();for(;h.next();){const g=h.getDisplayId(),S=[],m=(0,G.nE)(g),y=m&&1!==h.readAttribute("cluster_count")?"aggregate":"feature",n=this._getLabels(h,f);for(const l of n){if(l.target!==y)continue;const t=h.getStorage().getComputedStringAtIndex(m&&"feature"===y?h.readAttribute("referenceId"):g,l.fieldIndex);if(!t)continue;const e=(0,Y.E)(t.toString()),s=e[1];this._store.getMosaicItem(l.symbol,(0,A._)(e[0])).then(i=>{S[l.index]={glyphs:i.glyphMosaicItems,rtl:s,index:l.index}})}c.set(g,S)}return c}};w=(0,x._)([(0,P.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],w);const L=w}}]);