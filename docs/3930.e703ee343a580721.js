"use strict";(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[3930],{79767:(Z,N,V)=>{V.d(N,{Z:()=>B});var b=V(17626),x=V(2076),g=V(77712),C=(V(85931),V(8314),V(90912),V(76898)),k=V(86162),D=V(79023),w=V(10012);const z=new x.Xn({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let F=class extends k.wq{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};(0,b._)([(0,g.Cb)({type:w.Z,json:{write:!0}})],F.prototype,"baseSymbol",void 0),(0,b._)([(0,g.Cb)({types:D.V,json:{read:{reader:D.i},write:!0}})],F.prototype,"colorRamp",void 0),(0,b._)([(0,g.Cb)({json:{read:z.read,write:z.write}})],F.prototype,"type",void 0),F=(0,b._)([(0,C.j)("esri.rest.support.ClassificationDefinition")],F);const q=F,T=new x.Xn({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),I=new x.Xn({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let y=class extends q{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(S){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",S)}set definedInterval(S){"defined-interval"===this.classificationMethod&&this._set("definedInterval",S)}};(0,b._)([(0,g.Cb)({json:{write:!0}})],y.prototype,"breakCount",void 0),(0,b._)([(0,g.Cb)({json:{write:!0}})],y.prototype,"classificationField",void 0),(0,b._)([(0,g.Cb)({type:String,json:{read:T.read,write:T.write}})],y.prototype,"classificationMethod",void 0),(0,b._)([(0,g.Cb)({json:{write:!0}})],y.prototype,"normalizationField",void 0),(0,b._)([(0,g.Cb)({json:{read:I.read,write:I.write}})],y.prototype,"normalizationType",void 0),(0,b._)([(0,g.Cb)({value:null,json:{write:!0}})],y.prototype,"standardDeviationInterval",null),(0,b._)([(0,g.Cb)({value:null,json:{write:!0}})],y.prototype,"definedInterval",null),(0,b._)([(0,g.Cb)()],y.prototype,"type",void 0),y=(0,b._)([(0,C.j)("esri.rest.support.ClassBreaksDefinition")],y);const B=y},63930:(Z,N,V)=>{V.d(N,{G2:()=>Q,oF:()=>at,XL:()=>j,i5:()=>O,H0:()=>J,eT:()=>$,Qm:()=>_,Lq:()=>R,fk:()=>tt,S5:()=>P,F_:()=>W,DL:()=>lt});var b=V(79767);function x(t,e){return Number(t.toFixed(e))}function G(t){const e=t.definition,{classificationMethod:n,breakCount:l,normalizationType:i,definedInterval:r}=e,a=[];let o=t.values;if(0===o.length)return[];o=o.sort((u,m)=>u-m);const d=o[0],p=o[o.length-1];if("equal-interval"===n)if(o.length>=l){const u=(p-d)/l;let m=d;for(let c=1;c<l;c++){const s=x(d+c*u,6);a.push({minValue:m,maxValue:s,label:v(m,s,i)}),m=s}a.push({minValue:m,maxValue:p,label:v(m,p,i)})}else o.forEach(u=>{a.push({minValue:u,maxValue:u,label:v(u,u,i)})});else if("natural-breaks"===n){const u=function C(t){const e=[],n=[];let l=Number.MIN_VALUE,i=1,r=-1;for(let a=0;a<t.length;a++){const o=t[a];o===l?(i++,n[r]=i):null!==o&&(e.push(o),l=o,i=1,n.push(i),r++)}return{uniqueValues:e,valueFrequency:n}}(o),c=function k(t,e,n){const l=t.length,i=[];n>l&&(n=l);for(let a=0;a<n;a++)i.push(Math.round(a*l/n-1));i.push(l-1);let r=D(i,t,e,n);return function w(t,e,n,l,i,r){let a=0,o=0,d=0,p=0,u=!0;for(let m=0;m<2&&u;m++){0===m&&(u=!1);for(let c=0;c<r-1;c++)for(;n[c+1]+1!==n[c+2];){n[c+1]=n[c+1]+1;const s=T(c,n,l,i);d=s.sbMean,a=s.sbSdcm;const f=T(c+1,n,l,i);if(p=f.sbMean,o=f.sbSdcm,!(a+o<e[c]+e[c+1])){n[c+1]=n[c+1]-1;break}e[c]=a,e[c+1]=o,t[c]=d,t[c+1]=p,u=!0}for(let c=r-1;c>0;c--)for(;n[c]!==n[c-1]+1;){n[c]=n[c]-1;const s=T(c-1,n,l,i);d=s.sbMean,a=s.sbSdcm;const f=T(c,n,l,i);if(p=f.sbMean,o=f.sbSdcm,!(a+o<e[c-1]+e[c])){n[c]=n[c]+1;break}e[c-1]=a,e[c]=o,t[c-1]=d,t[c]=p,u=!0}}return u}(r.mean,r.sdcm,i,t,e,n)&&(r=D(i,t,e,n)),i}(u.uniqueValues,t.valueFrequency||u.valueFrequency,l);let s=d;for(let f=1;f<l;f++)if(u.uniqueValues.length>f){const h=x(u.uniqueValues[c[f]],6);a.push({minValue:s,maxValue:h,label:v(s,h,i)}),s=h}a.push({minValue:s,maxValue:p,label:v(s,p,i)})}else if("quantile"===n)if(o.length>=l&&d!==p){let u=d,m=Math.ceil(o.length/l),c=0;for(let s=1;s<l;s++){let f=m+c-1;f>o.length&&(f=o.length-1),f<0&&(f=0),a.push({minValue:u,maxValue:o[f],label:v(u,o[f],i)}),u=o[f],c+=m,m=Math.ceil((o.length-c)/(l-s))}a.push({minValue:u,maxValue:p,label:v(u,p,i)})}else{let u=-1;for(let m=0;m<o.length;m++){const c=o[m];c!==u&&(u=c,a.push({minValue:u,maxValue:c,label:v(u,c,i)}),u=c)}}else if("standard-deviation"===n){const u=function F(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e/=t.length,e}(o),m=function q(t,e){let n=0;for(let l=0;l<t.length;l++){const i=t[l];n+=(i-e)*(i-e)}return n/=t.length,Math.sqrt(n)}(o,u);if(0===m)a.push({minValue:o[0],maxValue:o[0],label:v(o[0],o[0],i)});else{const c=function z(t,e,n,l,i){let r=Math.max(l-t,e-l)/i/n;return r=r>=1?1:r>=.5?.5:.25,r}(d,p,l,u,m)*m;let s=0,f=d;for(let M=l;M>=1;M--){const E=x(u-(M-.5)*c,6);a.push({minValue:f,maxValue:E,label:v(f,E,i)}),f=E,s++}let h=x(u+.5*c,6);a.push({minValue:f,maxValue:h,label:v(f,h,i)}),f=h,s++;for(let M=1;M<=l;M++)h=s===2*l?p:x(u+(M+.5)*c,6),a.push({minValue:f,maxValue:h,label:v(f,h,i)}),f=h,s++}}else if("defined-interval"===n){if(!r)return a;const u=o[0],m=o[o.length-1],c=Math.ceil((m-u)/r);let s=u;for(let f=1;f<c;f++){const h=x(u+f*r,6);a.push({minValue:s,maxValue:h,label:v(s,h,i)}),s=h}a.push({minValue:s,maxValue:m,label:v(s,m,i)})}return a}function v(t,e,n){let l=null;return l=t===e?n&&"percent-of-total"===n?t+"%":t.toString():n&&"percent-of-total"===n?t+"% - "+e+"%":t+" - "+e,l}function D(t,e,n,l){let i=[],r=[],a=[],o=0;const d=[],p=[];for(let s=0;s<l;s++){const f=T(s,t,e,n);d.push(f.sbMean),p.push(f.sbSdcm),o+=p[s]}let u,m=o,c=!0;for(;c||o<m;){c=!1,i=[];for(let s=0;s<l;s++)i.push(t[s]);for(let s=0;s<l;s++)for(let f=t[s]+1;f<=t[s+1];f++)if(u=e[f],s>0&&f!==t[s+1]&&Math.abs(u-d[s])>Math.abs(u-d[s-1]))t[s]=f;else if(s<l-1&&t[s]!==f-1&&Math.abs(u-d[s])>Math.abs(u-d[s+1])){t[s+1]=f-1;break}m=o,o=0,r=[],a=[];for(let s=0;s<l;s++){r.push(d[s]),a.push(p[s]);const f=T(s,t,e,n);d[s]=f.sbMean,p[s]=f.sbSdcm,o+=p[s]}}if(o>m){for(let s=0;s<l;s++)t[s]=i[s],d[s]=r[s],p[s]=a[s];o=m}return{mean:d,sdcm:p}}function T(t,e,n,l){let i=0,r=0;for(let d=e[t]+1;d<=e[t+1];d++){const p=l[d];i+=n[d]*p,r+=p}r<=0&&console.log("Exception in Natural Breaks calculation");const a=i/r;let o=0;for(let d=e[t]+1;d<=e[t+1];d++)o+=l[d]*(n[d]-a)**2;return{sbMean:a,sbSdcm:o}}const Y=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,L=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),H=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function P(t){return!(null!=t.normalizationField||null!=t.normalizationType||null!=t.minValue||null!=t.maxValue||t.sqlExpression&&t.supportsSQLExpression)}function J(t){const e=t.returnDistinct?[...new Set(t.values)]:t.values,n=e.filter(i=>null!=i).length,l={count:n};return t.supportsNullCount&&(l.nullcount=e.length-n),t.percentileParams&&(l.median=j(e,t.percentileParams)),l}function O(t){const{values:e,useSampleStdDev:n,supportsNullCount:l}=t;let i=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,a=null,o=null,d=null,p=null,u=0;const m=null==t.minValue?-1/0:t.minValue,c=null==t.maxValue?1/0:t.maxValue;for(const f of e)Number.isFinite(f)?f>=m&&f<=c&&(a+=f,i=Math.min(i,f),r=Math.max(r,f),u++):"string"==typeof f&&u++;if(u&&null!=a){o=a/u;let f=0;for(const h of e)Number.isFinite(h)&&h>=m&&h<=c&&(f+=(h-o)**2);p=n?u>1?f/(u-1):0:u>0?f/u:0,d=Math.sqrt(p)}else i=null,r=null;const s={avg:o,count:u,max:r,min:i,stddev:d,sum:a,variance:p};return l&&(s.nullcount=e.length-u),t.percentileParams&&(s.median=j(e,t.percentileParams)),s}function j(t,e){const{fieldType:n,value:l,orderBy:i,isDiscrete:r}=e,a=R(n,"desc"===i);if(0===(t=[...t].filter(s=>null!=s).sort((s,f)=>a(s,f))).length)return null;if(l<=0)return t[0];if(l>=1)return t[t.length-1];const o=(t.length-1)*l,d=Math.floor(o),p=d+1,u=o%1,m=t[d],c=t[p];return p>=t.length||r||"string"==typeof m||"string"==typeof c?m:m*(1-u)+c*u}function R(t,e){const n=e?1:-1,l=function K(t){return t?(e,n)=>n-e:(e,n)=>e-n}(e),i=X(e);if(!t||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...L].includes(t))return(r,a)=>"number"==typeof r&&"number"==typeof a?l(r,a):"string"==typeof r&&"string"==typeof a?i(r,a):n;if("esriFieldTypeDate"===t)return(r,a)=>{const o=new Date(r).getTime(),d=new Date(a).getTime();return isNaN(o)||isNaN(d)?n:l(o,d)};if(L.has(t))return(r,a)=>l(r,a);if("esriFieldTypeString"===t)return(r,a)=>i(r,a);if("esriFieldTypeGUID"===t||"esriFieldTypeGlobalID"===t){const r=X(e);return(a,o)=>r(A(a),A(o))}return e?(r,a)=>1:(r,a)=>-1}function X(t){return t?(e,n)=>(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0:(e,n)=>(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}function A(t){return t.substr(24,12)+t.substr(19,4)+t.substr(16,2)+t.substr(14,2)+t.substr(11,2)+t.substr(9,2)+t.substr(6,2)+t.substr(4,2)+t.substr(2,2)+t.substr(0,2)}function W(t,e){let n;for(n in t)H.indexOf(n)>-1&&(Number.isFinite(t[n])||(t[n]=null));return e&&["avg","stddev","variance"].forEach(l=>{null!=t[l]&&(t[l]=Math.ceil(t[l]))}),t}function $(t){const e={};for(let n of t)(null==n||"string"==typeof n&&""===n.trim())&&(n=null),null==e[n]?e[n]={count:1,data:n}:e[n].count++;return{count:e}}function _(t,e,n){const l=t.count,i=[];n&&e&&"coded-value"===e.type&&e.codedValues.forEach(r=>{const a=r.code;l.hasOwnProperty(a)||(l[a]={data:a,count:0})});for(const r in l){const a=l[r];i.push({value:a.data,count:a.count,label:a.label})}return{uniqueValueInfos:i}}function tt(t,e,n,l){let i=null;switch(e){case"log":0!==t&&(i=Math.log(t)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(i=t/l*100);break;case"field":Number.isFinite(n)&&0!==n&&(i=t/n);break;case"natural-log":t>0&&(i=Math.log(t));break;case"square-root":t>0&&(i=t**.5)}return i}function Q(t,e){const n=function et(t){const e=t.field,n=t.classificationMethod||"equal-interval",l=t.normalizationType,i=t.normalizationField,r=new b.Z;return r.classificationField=e,r.breakCount=t.breakCount,r.classificationMethod=n,r.standardDeviationInterval="standard-deviation"===n?t.standardDeviationInterval||1:void 0,r.normalizationType=l,r.normalizationField="field"===l?i:void 0,r}({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||5});return t=function nt(t,e,n){return e=null==e?-1/0:e,n=null==n?1/0:n,t.filter(l=>Number.isFinite(l)&&l>=e&&l<=n)}(t,e.minValue,e.maxValue),function U(t){const{normalizationTotal:e}=t;return{classBreaks:G(t),normalizationTotal:e}}({definition:n,values:t,normalizationTotal:e.normalizationTotal})}function lt(t,e){let n=t.classBreaks;const i=n[0].minValue,r=n[n.length-1].maxValue,a="standard-deviation"===e,o=Y;return n=n.map(d=>{const p=d.label,u={minValue:d.minValue,maxValue:d.maxValue,label:p};if(a&&p){const m=p.match(o).map(c=>+c.trim());2===m.length?(u.minStdDev=m[0],u.maxStdDev=m[1],m[0]<0&&m[1]>0&&(u.hasAvg=!0)):1===m.length&&(p.includes("<")?(u.minStdDev=null,u.maxStdDev=m[0]):p.includes(">")&&(u.minStdDev=m[0],u.maxStdDev=null))}return u}),{minValue:i,maxValue:r,classBreakInfos:n,normalizationTotal:t.normalizationTotal}}function at(t,e){const{min:n,max:l,intervals:i}=function it(t,e){const{field:n,classificationMethod:l,standardDeviationInterval:i,normalizationType:r,normalizationField:a,normalizationTotal:o,minValue:d,maxValue:p}=e,u=e.numBins||10;let m=null,c=null,s=null;if(l&&"equal-interval"!==l||r){const{classBreaks:f}=Q(t,{field:n,normalizationType:r,normalizationField:a,normalizationTotal:o,classificationMethod:l,standardDeviationInterval:i,minValue:d,maxValue:p,numClasses:u});m=f[0].minValue,c=f[f.length-1].maxValue,s=f.map(h=>[h.minValue,h.maxValue])}else{if(null!=d&&null!=p)m=d,c=p;else{const f=O({values:t,minValue:d,maxValue:p,useSampleStdDev:!r,supportsNullCount:P({normalizationType:r,normalizationField:a,minValue:d,maxValue:p})});m=f.min,c=f.max}s=function ot(t,e,n){const l=(e-t)/n,i=[];let r,a=t;for(let o=1;o<=n;o++)r=a+l,r=Number(r.toFixed(16)),i.push([a,o===n?e:r]),a=r;return i}(m,c,u)}return{min:m,max:c,intervals:s}}(t,e),r=i.map((a,o)=>({minValue:i[o][0],maxValue:i[o][1],count:0}));for(const a of t)if(null!=a&&a>=n&&a<=l){const o=st(i,a);o>-1&&r[o].count++}return{bins:r,minValue:n,maxValue:l,normalizationTotal:e.normalizationTotal}}function st(t,e){let n=-1;for(let l=t.length-1;l>=0;l--)if(e>=t[l][0]){n=l;break}return n}}}]);