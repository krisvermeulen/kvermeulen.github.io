"use strict";(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[2405],{52405:(Ft,Le,_e)=>{_e.r(Le),_e.d(Le,{b:()=>kr});var K,Pe=_e(1719),Ae={exports:{}};K="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(K=K||__filename),Ae.exports=function(k){var Y,H,i=void 0!==(k=k||{})?k:{};i.ready=new Promise(function(e,r){Y=e,H=r});var C,le,I,We,qe,E={};for(C in i)i.hasOwnProperty(C)&&(E[C]=i[C]);le="object"==typeof window,I="function"==typeof importScripts,We="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,qe=!le&&!We&&!I;var ce,Z,Ee,Oe,T="";We?(T=I?require("path").dirname(T)+"/":__dirname+"/",ce=function(e,r){return Ee||(Ee=require("fs")),Oe||(Oe=require("path")),e=Oe.normalize(e),Ee.readFileSync(e,r?null:"utf8")},Z=function(e){var r=ce(e,!0);return r.buffer||(r=new Uint8Array(r)),Se(r.buffer),r},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof jt))throw e}),process.on("unhandledRejection",L),i.inspect=function(){return"[Emscripten Module object]"}):qe?("undefined"!=typeof read&&(ce=function(e){return read(e)}),Z=function(e){var r;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(Se("object"==typeof(r=read(e,"binary"))),r)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(le||I)&&(I?T=self.location.href:document.currentScript&&(T=document.currentScript.src),K&&(T=K),T=0!==T.indexOf("blob:")?T.substr(0,T.lastIndexOf("/")+1):"",ce=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},I&&(Z=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var Q,ee,Rr=i.print||console.log.bind(console),z=i.printErr||console.warn.bind(console);for(C in E)E.hasOwnProperty(C)&&(i[C]=E[C]);E=null,i.wasmBinary&&(Q=i.wasmBinary),"object"!=typeof WebAssembly&&L("no native wasm support detected");var xr=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),Xe=!1;function Se(e,r){e||L("Assertion failed: "+r)}var Je="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function Ke(e,r,n){for(var t=r+n,o=r;e[o]&&!(o>=t);)++o;if(o-r>16&&e.subarray&&Je)return Je.decode(e.subarray(r,o));for(var a="";r<o;){var s=e[r++];if(128&s){var u=63&e[r++];if(192!=(224&s)){var l=63&e[r++];if((s=224==(240&s)?(15&s)<<12|u<<6|l:(7&s)<<18|u<<12|l<<6|63&e[r++])<65536)a+=String.fromCharCode(s);else{var c=s-65536;a+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else a+=String.fromCharCode((31&s)<<6|u)}else a+=String.fromCharCode(s)}return a}function Ye(e,r){return e?Ke(b,e,r):""}var B,fe,b,U,re,g,P,Qe,er,Ze="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Mr(e,r){for(var n=e,t=n>>1,o=t+r/2;!(t>=o)&&re[t];)++t;if((n=t<<1)-e>32&&Ze)return Ze.decode(b.subarray(e,n));for(var a=0,s="";;){var u=U[e+2*a>>1];if(0==u||a==r/2)return s;++a,s+=String.fromCharCode(u)}}function Vr(e,r,n){if(void 0===n&&(n=2147483647),n<2)return 0;for(var t=r,o=(n-=2)<2*e.length?n/2:e.length,a=0;a<o;++a){var s=e.charCodeAt(a);U[r>>1]=s,r+=2}return U[r>>1]=0,r-t}function Hr(e){return 2*e.length}function zr(e,r){for(var n=0,t="";!(n>=r/4);){var o=g[e+4*n>>2];if(0==o)break;if(++n,o>=65536){var a=o-65536;t+=String.fromCharCode(55296|a>>10,56320|1023&a)}else t+=String.fromCharCode(o)}return t}function Br(e,r,n){if(void 0===n&&(n=2147483647),n<4)return 0;for(var t=r,o=t+n-4,a=0;a<e.length;++a){var s=e.charCodeAt(a);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++a)),g[r>>2]=s,(r+=4)+4>o)break}return g[r>>2]=0,r-t}function Lr(e){for(var r=0,n=0;n<e.length;++n){var t=e.charCodeAt(n);t>=55296&&t<=57343&&++n,r+=4}return r}function Nr(e,r){return e%r>0&&(e+=r-e%r),e}function nr(e){B=e,i.HEAP8=fe=new Int8Array(e),i.HEAP16=U=new Int16Array(e),i.HEAP32=g=new Int32Array(e),i.HEAPU8=b=new Uint8Array(e),i.HEAPU16=re=new Uint16Array(e),i.HEAPU32=P=new Uint32Array(e),i.HEAPF32=Qe=new Float32Array(e),i.HEAPF64=er=new Float64Array(e)}var tr=i.INITIAL_MEMORY||16777216;function pe(e){for(;e.length>0;){var r=e.shift();if("function"!=typeof r){var n=r.func;"number"==typeof n?void 0===r.arg?i.dynCall_v(n):i.dynCall_vi(n,r.arg):n(void 0===r.arg?null:r.arg)}else r(i)}}(ee=i.wasmMemory?i.wasmMemory:new WebAssembly.Memory({initial:tr/65536,maximum:32768}))&&(B=ee.buffer),tr=B.byteLength,nr(B),g[80624]=5565536;var ir=[],or=[],Xr=[],ar=[],rn=Math.ceil,nn=Math.floor,M=0,ne=null;function L(e){i.onAbort&&i.onAbort(e),z(e+=""),Xe=!0,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(e);throw H(r),r}function ur(e,r){return String.prototype.startsWith?e.startsWith(r):0===e.indexOf(r)}function sr(e){return ur(e,"data:application/octet-stream;base64,")}function lr(e){return ur(e,"file://")}i.preloadedImages={},i.preloadedAudios={};var A="basis_transcoder.wasm";function cr(){try{if(Q)return new Uint8Array(Q);if(Z)return Z(A);throw"both async and sync fetching of the wasm failed"}catch(e){L(e)}}sr(A)||(A=function Fr(e){return i.locateFile?i.locateFile(e,T):T+e}(A)),or.push({func:function(){Pr()}});var de={};function ye(e){for(;e.length;){var r=e.pop();e.pop()(r)}}function te(e){return this.fromWireType(P[e>>2])}var N={},V={},he={};function fr(e){if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+e:e}function je(e,r){return e=fr(e),function(){return r.apply(this,arguments)}}function ke(e,r){var n=je(r,function(t){this.name=r,this.message=t;var o=new Error(t).stack;void 0!==o&&(this.stack=this.toString()+"\n"+o.replace(/^Error(:[^\n]*)?\n/,""))});return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},n}var pr=void 0;function me(e){throw new pr(e)}function F(e,r,n){function t(u){var l=n(u);l.length!==e.length&&me("Mismatched type converter count");for(var c=0;c<e.length;++c)W(e[c],l[c])}e.forEach(function(u){he[u]=r});var o=new Array(r.length),a=[],s=0;r.forEach(function(u,l){V.hasOwnProperty(u)?o[l]=V[u]:(a.push(u),N.hasOwnProperty(u)||(N[u]=[]),N[u].push(function(){o[l]=V[u],++s===a.length&&t(o)}))}),0===a.length&&t(o)}function ve(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}var dr=void 0;function v(e){for(var r="",n=e;b[n];)r+=dr[b[n++]];return r}var G=void 0;function p(e){throw new G(e)}function W(e,r,n){if(n=n||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(e||p('type "'+t+'" must have a positive integer typeid pointer'),V.hasOwnProperty(e)){if(n.ignoreDuplicateRegistrations)return;p("Cannot register type '"+t+"' twice")}if(V[e]=r,delete he[e],N.hasOwnProperty(e)){var o=N[e];delete N[e],o.forEach(function(a){a()})}}function hn(e){if(!(this instanceof R&&e instanceof R))return!1;for(var r=this.$$.ptrType.registeredClass,n=this.$$.ptr,t=e.$$.ptrType.registeredClass,o=e.$$.ptr;r.baseClass;)n=r.upcast(n),r=r.baseClass;for(;t.baseClass;)o=t.upcast(o),t=t.baseClass;return r===t&&n===o}function mn(e){return{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}function Fe(e){p(function r(n){return n.$$.ptrType.registeredClass.name}(e)+" instance already deleted")}var Re=!1;function yr(e){}function hr(e){e.count.value-=1,0===e.count.value&&function vn(e){e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)}(e)}function ie(e){return"undefined"==typeof FinalizationGroup?(ie=function(r){return r},e):(Re=new FinalizationGroup(function(r){for(var n=r.next();!n.done;n=r.next()){var t=n.value;t.ptr?hr(t):console.warn("object already deleted: "+t.ptr)}}),yr=function(r){Re.unregister(r.$$)},(ie=function(r){return Re.register(r,r.$$,r.$$),r})(e))}function gn(){if(this.$$.ptr||Fe(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=ie(Object.create(Object.getPrototypeOf(this),{$$:{value:mn(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function bn(){this.$$.ptr||Fe(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&p("Object already scheduled for deletion"),yr(this),hr(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function $n(){return!this.$$.ptr}var oe=void 0,ae=[];function xe(){for(;ae.length;){var e=ae.pop();e.$$.deleteScheduled=!1,e.delete()}}function Cn(){return this.$$.ptr||Fe(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&p("Object already scheduled for deletion"),ae.push(this),1===ae.length&&oe&&oe(xe),this.$$.deleteScheduled=!0,this}function R(){}var mr={};function vr(e,r,n){if(void 0===e[r].overloadTable){var t=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||p("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[r].overloadTable+")!"),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[t.argCount]=t}}function De(e,r,n){i.hasOwnProperty(e)?((void 0===n||void 0!==i[e].overloadTable&&void 0!==i[e].overloadTable[n])&&p("Cannot register public name '"+e+"' twice"),vr(i,e,e),i.hasOwnProperty(n)&&p("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),i[e].overloadTable[n]=r):(i[e]=r,void 0!==n&&(i[e].numArguments=n))}function Tn(e,r,n,t,o,a,s,u){this.name=e,this.constructor=r,this.instancePrototype=n,this.rawDestructor=t,this.baseClass=o,this.getActualType=a,this.upcast=s,this.downcast=u,this.pureVirtualFunctions=[]}function Ie(e,r,n){for(;r!==n;)r.upcast||p("Expected null or instance of "+n.name+", got an instance of "+r.name),e=r.upcast(e),r=r.baseClass;return e}function _n(e,r){return null===r?(this.isReference&&p("null is not a valid "+this.name),0):(r.$$||p('Cannot pass "'+q(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),Ie(r.$$.ptr,r.$$.ptrType.registeredClass,this.registeredClass))}function Pn(e,r){var n;if(null===r)return this.isReference&&p("null is not a valid "+this.name),this.isSmartPointer?(n=this.rawConstructor(),null!==e&&e.push(this.rawDestructor,n),n):0;if(r.$$||p('Cannot pass "'+q(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&r.$$.ptrType.isConst&&p("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name),n=Ie(r.$$.ptr,r.$$.ptrType.registeredClass,this.registeredClass),this.isSmartPointer)switch(void 0===r.$$.smartPtr&&p("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?n=r.$$.smartPtr:p("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:n=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)n=r.$$.smartPtr;else{var o=r.clone();n=this.rawShare(n,S(function(){o.delete()})),null!==e&&e.push(this.rawDestructor,n)}break;default:p("Unsupporting sharing policy")}return n}function An(e,r){return null===r?(this.isReference&&p("null is not a valid "+this.name),0):(r.$$||p('Cannot pass "'+q(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),r.$$.ptrType.isConst&&p("Cannot convert argument of type "+r.$$.ptrType.name+" to parameter type "+this.name),Ie(r.$$.ptr,r.$$.ptrType.registeredClass,this.registeredClass))}function Wn(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function En(e){this.rawDestructor&&this.rawDestructor(e)}function On(e){null!==e&&e.delete()}function gr(e,r,n){if(r===n)return e;if(void 0===n.baseClass)return null;var t=gr(e,r,n.baseClass);return null===t?null:n.downcast(t)}function Sn(){return Object.keys(ue).length}function jn(){var e=[];for(var r in ue)ue.hasOwnProperty(r)&&e.push(ue[r]);return e}function kn(e){oe=e,ae.length&&oe&&oe(xe)}var ue={};function ge(e,r){return r.ptrType&&r.ptr||me("makeClassHandle requires ptr and ptrType"),!!r.smartPtrType!=!!r.smartPtr&&me("Both smartPtrType and smartPtr must be specified"),r.count={value:1},ie(Object.create(e,{$$:{value:r}}))}function Dn(e){var r=this.getPointee(e);if(!r)return this.destructor(e),null;var n=function xn(e,r){return r=function Rn(e,r){for(void 0===r&&p("ptr should not be undefined");e.baseClass;)r=e.upcast(r),e=e.baseClass;return r}(e,r),ue[r]}(this.registeredClass,r);if(void 0!==n){if(0===n.$$.count.value)return n.$$.ptr=r,n.$$.smartPtr=e,n.clone();var t=n.clone();return this.destructor(e),t}function o(){return ge(this.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:e}:{ptrType:this,ptr:e})}var a,s=this.registeredClass.getActualType(r),u=mr[s];if(!u)return o.call(this);var l=gr(r,this.registeredClass,(a=this.isConst?u.constPointerType:u.pointerType).registeredClass);return null===l?o.call(this):ge(a.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:a,ptr:l,smartPtrType:this,smartPtr:e}:{ptrType:a,ptr:l})}function O(e,r,n,t,o,a,s,u,l,c,f){this.name=e,this.registeredClass=r,this.isReference=n,this.isConst=t,this.isSmartPointer=o,this.pointeeType=a,this.sharingPolicy=s,this.rawGetPointee=u,this.rawConstructor=l,this.rawShare=c,this.rawDestructor=f,o||void 0!==r.baseClass?this.toWireType=Pn:t?(this.toWireType=_n,this.destructorFunction=null):(this.toWireType=An,this.destructorFunction=null)}function br(e,r,n){i.hasOwnProperty(e)||me("Replacing nonexistant public symbol"),void 0!==i[e].overloadTable&&void 0!==n?i[e].overloadTable[n]=r:(i[e]=r,i[e].argCount=n)}function _(e,r){e=v(e);var t=function n(o){var a=[r];return function(){a.length=arguments.length+1;for(var s=0;s<arguments.length;s++)a[s+1]=arguments[s];return o.apply(null,a)}}(i["dynCall_"+e]);return"function"!=typeof t&&p("unknown function pointer with signature "+e+": "+r),t}var $r=void 0;function Cr(e){var r=Ar(e),n=v(r);return j(r),n}function be(e,r){var n=[],t={};throw r.forEach(function o(a){t[a]||V[a]||(he[a]?he[a].forEach(o):(n.push(a),t[a]=!0))}),new $r(e+": "+n.map(Cr).join([", "]))}function Ue(e,r){for(var n=[],t=0;t<e;t++)n.push(g[(r>>2)+t]);return n}function wr(e,r,n,t,o){var a=r.length;a<2&&p("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=null!==r[1]&&null!==n,u=!1,l=1;l<r.length;++l)if(null!==r[l]&&void 0===r[l].destructorFunction){u=!0;break}var c="void"!==r[0].name,f=a-2,h=new Array(f),d=[],m=[];return function(){var $;arguments.length!==f&&p("function "+e+" called with "+arguments.length+" arguments, expected "+f+" args!"),m.length=0,d.length=s?2:1,d[0]=o,s&&($=r[1].toWireType(m,this),d[1]=$);for(var y=0;y<f;++y)h[y]=r[y+2].toWireType(m,arguments[y]),d.push(h[y]);var x=t.apply(null,d);if(u)ye(m);else for(y=s?1:2;y<r.length;y++){var D=1===y?$:h[y-2];null!==r[y].destructorFunction&&r[y].destructorFunction(D)}if(c)return r[0].fromWireType(x)}}var Me=[],w=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ve(e){e>4&&0==--w[e].refcount&&(w[e]=void 0,Me.push(e))}function zn(){for(var e=0,r=5;r<w.length;++r)void 0!==w[r]&&++e;return e}function Bn(){for(var e=5;e<w.length;++e)if(void 0!==w[e])return w[e];return null}function S(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=Me.length?Me.pop():w.length;return w[r]={refcount:1,value:e},r}}function Gn(e,r,n){switch(r){case 0:return function(t){return this.fromWireType((n?fe:b)[t])};case 1:return function(t){return this.fromWireType((n?U:re)[t>>1])};case 2:return function(t){return this.fromWireType((n?g:P)[t>>2])};default:throw new TypeError("Unknown integer type: "+e)}}function $e(e,r){var n=V[e];return void 0===n&&p(r+" has unknown type "+Cr(e)),n}function q(e){if(null===e)return"null";var r=typeof e;return"object"===r||"array"===r||"function"===r?e.toString():""+e}function Jn(e,r){switch(r){case 2:return function(n){return this.fromWireType(Qe[n>>2])};case 3:return function(n){return this.fromWireType(er[n>>3])};default:throw new TypeError("Unknown float type: "+e)}}function Zn(e,r,n){switch(r){case 0:return n?function(t){return fe[t]}:function(t){return b[t]};case 1:return n?function(t){return U[t>>1]}:function(t){return re[t>>1]};case 2:return n?function(t){return g[t>>2]}:function(t){return P[t>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function se(e){return e||p("Cannot use deleted val. handle = "+e),w[e].value}var ut={};function Ce(e){var r=ut[e];return void 0===r?v(e):r}var He=[];function Tr(){if("object"==typeof globalThis)return globalThis;function e(r){r.$$$embind_global$$$=r;var n="object"==typeof $$$embind_global$$$&&r.$$$embind_global$$$===r;return n||delete r.$$$embind_global$$$,n}if("object"==typeof $$$embind_global$$$||("object"==typeof Pe.c&&e(Pe.c)?$$$embind_global$$$=Pe.c:"object"==typeof self&&e(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$))return $$$embind_global$$$;throw Error("unable to get global object.")}var _r={};function Tt(e){try{return ee.grow(e-B.byteLength+65535>>>16),nr(ee.buffer),1}catch(r){}}var we={mappings:{},buffers:[null,[],[]],printChar:function(e,r){var n=we.buffers[e];0===r||10===r?((1===e?Rr:z)(Ke(n,0)),n.length=0):n.push(r)},varargs:void 0,get:function(){return we.varargs+=4,g[we.varargs-4>>2]},getStr:function(e){return Ye(e)},get64:function(e,r){return e}};pr=i.InternalError=ke(Error,"InternalError"),function dn(){for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);dr=e}(),G=i.BindingError=ke(Error,"BindingError"),function wn(){R.prototype.isAliasOf=hn,R.prototype.clone=gn,R.prototype.delete=bn,R.prototype.isDeleted=$n,R.prototype.deleteLater=Cn}(),function In(){O.prototype.getPointee=Wn,O.prototype.destructor=En,O.prototype.argPackAdvance=8,O.prototype.readValueFromPointer=te,O.prototype.deleteObject=On,O.prototype.fromWireType=Dn}(),function Fn(){i.getInheritedInstanceCount=Sn,i.getLiveInheritedInstances=jn,i.flushPendingDeletes=xe,i.setDelayFunction=kn}(),$r=i.UnboundTypeError=ke(Error,"UnboundTypeError"),function Ln(){i.count_emval_handles=zn,i.get_first_emval=Bn}();var St={u:function pn(e){var r=de[e];delete de[e];var n=r.rawConstructor,t=r.rawDestructor,o=r.fields;F([e],o.map(function(a){return a.getterReturnType}).concat(o.map(function(a){return a.setterArgumentType})),function(a){var s={};return o.forEach(function(u,l){var f=a[l],h=u.getter,d=u.getterContext,m=a[l+o.length],$=u.setter,y=u.setterContext;s[u.fieldName]={read:function(x){return f.fromWireType(h(d,x))},write:function(x,D){var X=[];$(y,x,m.toWireType(X,D)),ye(X)}}}),[{name:r.name,fromWireType:function(u){var l={};for(var c in s)l[c]=s[c].read(u);return t(u),l},toWireType:function(u,l){for(var c in s)if(!(c in l))throw new TypeError('Missing field:  "'+c+'"');var f=n();for(c in s)s[c].write(f,l[c]);return null!==u&&u.push(t,f),f},argPackAdvance:8,readValueFromPointer:te,destructorFunction:t}]})},J:function yn(e,r,n,t,o){var a=ve(n);W(e,{name:r=v(r),fromWireType:function(s){return!!s},toWireType:function(s,u){return u?t:o},argPackAdvance:8,readValueFromPointer:function(s){var u;if(1===n)u=fe;else if(2===n)u=U;else{if(4!==n)throw new TypeError("Unknown boolean type size: "+r);u=g}return this.fromWireType(u[s>>a])},destructorFunction:null})},y:function Un(e,r,n,t,o,a,s,u,l,c,f,h,d){f=v(f),a=_(o,a),u&&(u=_(s,u)),c&&(c=_(l,c)),d=_(h,d);var m=fr(f);De(m,function(){be("Cannot construct "+f+" due to unbound types",[t])}),F([e,r,n],t?[t]:[],function($){var y,x;$=$[0],x=t?(y=$.registeredClass).instancePrototype:R.prototype;var D=je(m,function(){if(Object.getPrototypeOf(this)!==X)throw new G("Use 'new' to construct "+f);if(void 0===J.constructor_body)throw new G(f+" has no accessible constructor");var Or=J.constructor_body[arguments.length];if(void 0===Or)throw new G("Tried to invoke ctor of "+f+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(J.constructor_body).toString()+") parameters instead!");return Or.apply(this,arguments)}),X=Object.create(x,{constructor:{value:D}});D.prototype=X;var J=new Tn(f,D,X,d,y,a,u,c),kt=new O(f,J,!0,!1,!1),Wr=new O(f+"*",J,!1,!1,!1),Er=new O(f+" const*",J,!1,!0,!1);return mr[e]={pointerType:Wr,constPointerType:Er},br(m,D),[kt,Wr,Er]})},x:function Mn(e,r,n,t,o,a){Se(r>0);var s=Ue(r,n);o=_(t,o);var u=[a],l=[];F([],[e],function(c){var f="constructor "+(c=c[0]).name;if(void 0===c.registeredClass.constructor_body&&(c.registeredClass.constructor_body=[]),void 0!==c.registeredClass.constructor_body[r-1])throw new G("Cannot register multiple constructors with identical number of parameters ("+(r-1)+") for class '"+c.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return c.registeredClass.constructor_body[r-1]=function(){be("Cannot construct "+c.name+" due to unbound types",s)},F([],s,function(h){return c.registeredClass.constructor_body[r-1]=function(){arguments.length!==r-1&&p(f+" called with "+arguments.length+" arguments, expected "+(r-1)),l.length=0,u.length=r;for(var d=1;d<r;++d)u[d]=h[d].toWireType(l,arguments[d-1]);var m=o.apply(null,u);return ye(l),h[0].fromWireType(m)},[]}),[]})},d:function Vn(e,r,n,t,o,a,s,u){var l=Ue(n,t);r=v(r),a=_(o,a),F([],[e],function(c){var f=(c=c[0]).name+"."+r;function h(){be("Cannot call "+f+" due to unbound types",l)}u&&c.registeredClass.pureVirtualFunctions.push(r);var d=c.registeredClass.instancePrototype,m=d[r];return void 0===m||void 0===m.overloadTable&&m.className!==c.name&&m.argCount===n-2?(h.argCount=n-2,h.className=c.name,d[r]=h):(vr(d,r,f),d[r].overloadTable[n-2]=h),F([],l,function($){var y=wr(f,$,c,a,s);return void 0===d[r].overloadTable?(y.argCount=n-2,d[r]=y):d[r].overloadTable[n-2]=y,[]}),[]})},k:function Hn(e,r,n){e=v(e),F([],[r],function(t){return i[e]=(t=t[0]).fromWireType(n),[]})},I:function Nn(e,r){W(e,{name:r=v(r),fromWireType:function(n){var t=w[n].value;return Ve(n),t},toWireType:function(n,t){return S(t)},argPackAdvance:8,readValueFromPointer:te,destructorFunction:null})},n:function qn(e,r,n,t){var o=ve(n);function a(){}r=v(r),a.values={},W(e,{name:r,constructor:a,fromWireType:function(s){return this.constructor.values[s]},toWireType:function(s,u){return u.value},argPackAdvance:8,readValueFromPointer:Gn(r,o,t),destructorFunction:null}),De(r,a)},a:function Xn(e,r,n){var t=$e(e,"enum");r=v(r);var o=t.constructor,a=Object.create(t.constructor.prototype,{value:{value:n},constructor:{value:je(t.name+"_"+r,function(){})}});o.values[n]=a,o[r]=a},B:function Kn(e,r,n){var t=ve(n);W(e,{name:r=v(r),fromWireType:function(o){return o},toWireType:function(o,a){if("number"!=typeof a&&"boolean"!=typeof a)throw new TypeError('Cannot convert "'+q(a)+'" to '+this.name);return a},argPackAdvance:8,readValueFromPointer:Jn(r,t),destructorFunction:null})},i:function Yn(e,r,n,t,o,a){var s=Ue(r,n);e=v(e),o=_(t,o),De(e,function(){be("Cannot call "+e+" due to unbound types",s)},r-1),F([],s,function(u){var l=[u[0],null].concat(u.slice(1));return br(e,wr(e,l,null,o,a),r-1),[]})},j:function Qn(e,r,n,t,o){r=v(r),-1===o&&(o=4294967295);var a=ve(n),s=function(c){return c};if(0===t){var u=32-8*n;s=function(c){return c<<u>>>u}}var l=-1!=r.indexOf("unsigned");W(e,{name:r,fromWireType:s,toWireType:function(c,f){if("number"!=typeof f&&"boolean"!=typeof f)throw new TypeError('Cannot convert "'+q(f)+'" to '+this.name);if(f<t||f>o)throw new TypeError('Passing a number "'+q(f)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+o+"]!");return l?f>>>0:0|f},argPackAdvance:8,readValueFromPointer:Zn(r,a,0!==t),destructorFunction:null})},h:function et(e,r,n){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(a){var u=P[a>>=2];return new t(B,P[a+1],u)}W(e,{name:n=v(n),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},C:function rt(e,r){var n="std::string"===(r=v(r));W(e,{name:r,fromWireType:function(t){var o,a=P[t>>2];if(n)for(var s=t+4,u=0;u<=a;++u){var l=t+4+u;if(u==a||0==b[l]){var c=Ye(s,l-s);void 0===o?o=c:(o+=String.fromCharCode(0),o+=c),s=l+1}}else{var f=new Array(a);for(u=0;u<a;++u)f[u]=String.fromCharCode(b[t+4+u]);o=f.join("")}return j(t),o},toWireType:function(t,o){o instanceof ArrayBuffer&&(o=new Uint8Array(o));var a="string"==typeof o;a||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||p("Cannot pass non-string to std::string");var s=(n&&a?function(){return function Ur(e){for(var r=0,n=0;n<e.length;++n){var t=e.charCodeAt(n);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&e.charCodeAt(++n)),t<=127?++r:r+=t<=2047?2:t<=65535?3:4}return r}(o)}:function(){return o.length})(),u=ze(4+s+1);if(P[u>>2]=s,n&&a)!function Ir(e,r,n){(function Dr(e,r,n,t){if(!(t>0))return 0;for(var o=n,a=n+t-1,s=0;s<e.length;++s){var u=e.charCodeAt(s);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++s)),u<=127){if(n>=a)break;r[n++]=u}else if(u<=2047){if(n+1>=a)break;r[n++]=192|u>>6,r[n++]=128|63&u}else if(u<=65535){if(n+2>=a)break;r[n++]=224|u>>12,r[n++]=128|u>>6&63,r[n++]=128|63&u}else{if(n+3>=a)break;r[n++]=240|u>>18,r[n++]=128|u>>12&63,r[n++]=128|u>>6&63,r[n++]=128|63&u}}r[n]=0})(e,b,r,n)}(o,u+4,s+1);else if(a)for(var l=0;l<s;++l){var c=o.charCodeAt(l);c>255&&(j(u),p("String has UTF-16 code units that do not fit in 8 bits")),b[u+4+l]=c}else for(l=0;l<s;++l)b[u+4+l]=o[l];return null!==t&&t.push(j,u),u},argPackAdvance:8,readValueFromPointer:te,destructorFunction:function(t){j(t)}})},w:function nt(e,r,n){var t,o,a,s,u;n=v(n),2===r?(t=Mr,o=Vr,s=Hr,a=function(){return re},u=1):4===r&&(t=zr,o=Br,s=Lr,a=function(){return P},u=2),W(e,{name:n,fromWireType:function(l){for(var c,f=P[l>>2],h=a(),d=l+4,m=0;m<=f;++m){var $=l+4+m*r;if(m==f||0==h[$>>u]){var y=t(d,$-d);void 0===c?c=y:(c+=String.fromCharCode(0),c+=y),d=$+r}}return j(l),c},toWireType:function(l,c){"string"!=typeof c&&p("Cannot pass non-string to C++ string type "+n);var f=s(c),h=ze(4+f+r);return P[h>>2]=f>>u,o(c,h+4,f+r),null!==l&&l.push(j,h),h},argPackAdvance:8,readValueFromPointer:te,destructorFunction:function(l){j(l)}})},v:function tt(e,r,n,t,o,a){de[e]={name:v(r),rawConstructor:_(n,t),rawDestructor:_(o,a),fields:[]}},c:function it(e,r,n,t,o,a,s,u,l,c){de[e].fields.push({fieldName:v(r),getterReturnType:n,getter:_(t,o),getterContext:a,setterArgumentType:s,setter:_(u,l),setterContext:c})},K:function ot(e,r){W(e,{isVoid:!0,name:r=v(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,t){}})},m:function at(e,r,n){e=se(e),r=$e(r,"emval::as");var t=[],o=S(t);return g[n>>2]=o,r.toWireType(t,e)},s:function st(e,r,n,t){(e=He[e])(r=se(r),n=Ce(n),null,t)},b:Ve,z:function lt(e){return 0===e?S(Tr()):(e=Ce(e),S(Tr()[e]))},t:function pt(e,r){var n=function ft(e,r){for(var n=new Array(e),t=0;t<e;++t)n[t]=$e(g[(r>>2)+t],"parameter "+t);return n}(e,r),t=n[0],o=new Array(e-1);return function ct(e){var r=He.length;return He.push(e),r}(function(a,s,u,l){for(var c=0,f=0;f<e-1;++f)o[f]=n[f+1].readValueFromPointer(l+c),c+=n[f+1].argPackAdvance;var h=a[s].apply(a,o);for(f=0;f<e-1;++f)n[f+1].deleteObject&&n[f+1].deleteObject(o[f]);if(!t.isVoid)return t.toWireType(u,h)})},r:function dt(e){return e=Ce(e),S(i[e])},e:function yt(e,r){return S((e=se(e))[r=se(r)])},g:function ht(e){e>4&&(w[e].refcount+=1)},q:function vt(e,r,n,t){e=se(e);var o=_r[r];return o||(o=function mt(e){var r=new Array(e+1);return function(n,t,o){r[0]=n;for(var a=0;a<e;++a){var s=$e(g[(t>>2)+a],"parameter "+a);r[a+1]=s.readValueFromPointer(o),o+=s.argPackAdvance}return S(new(n.bind.apply(n,r)))}}(r),_r[r]=o),o(e,n,t)},f:function gt(e){return S(Ce(e))},l:function bt(e){ye(w[e].value),Ve(e)},p:function $t(){L()},F:function Ct(e,r,n){b.copyWithin(e,r,r+n)},G:function _t(e){e>>>=0;var r=function wt(){return b.length}(),t=2147483648;if(e>t)return!1;for(var a=1;a<=4;a*=2){var s=r*(1+.2/a);if(s=Math.min(s,e+100663296),Tt(Math.min(t,Nr(Math.max(16777216,e,s),65536))))return!0}return!1},H:function Pt(e){return 0},D:function At(e,r,n,t,o){},A:function Wt(e,r,n,t){for(var o=0,a=0;a<n;a++){for(var s=g[r+8*a>>2],u=g[r+(8*a+4)>>2],l=0;l<u;l++)we.printChar(e,b[s+l]);o+=u}return g[t>>2]=o,0},memory:ee,o:function Et(e){return(e=+e)>=0?+nn(e+.5):+rn(e-.5)},E:function Ot(e){},table:xr};!function ln(){var e={a:St};function r(a,s){i.asm=a.exports,function on(e){if(M--,i.monitorRunDependencies&&i.monitorRunDependencies(M),0==M&&ne){var r=ne;ne=null,r()}}()}function n(a){r(a.instance)}function t(a){return function sn(){return Q||!le&&!I||"function"!=typeof fetch||lr(A)?new Promise(function(e,r){e(cr())}):fetch(A,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+A+"'";return e.arrayBuffer()}).catch(function(){return cr()})}().then(function(s){return WebAssembly.instantiate(s,e)}).then(a,function(s){z("failed to asynchronously prepare wasm: "+s),L(s)})}if(function tn(e){M++,i.monitorRunDependencies&&i.monitorRunDependencies(M)}(),i.instantiateWasm)try{return i.instantiateWasm(e,r)}catch(a){return z("Module.instantiateWasm callback failed with error: "+a),!1}(function o(){if(Q||"function"!=typeof WebAssembly.instantiateStreaming||sr(A)||lr(A)||"function"!=typeof fetch)return t(n);fetch(A,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(n,function(s){return z("wasm streaming compile failed: "+s),z("falling back to ArrayBuffer instantiation"),t(n)})})})()}();var Te,Pr=i.___wasm_call_ctors=function(){return(Pr=i.___wasm_call_ctors=i.asm.L).apply(null,arguments)},ze=i._malloc=function(){return(ze=i._malloc=i.asm.M).apply(null,arguments)},j=i._free=function(){return(j=i._free=i.asm.N).apply(null,arguments)},Ar=i.___getTypeName=function(){return(Ar=i.___getTypeName=i.asm.O).apply(null,arguments)};function jt(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function Be(e){function r(){Te||(Te=!0,i.calledRun=!0,Xe||(function Kr(){pe(or)}(),function Yr(){pe(Xr)}(),Y(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function Zr(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)e=i.postRun.shift(),ar.unshift(e);var e;pe(ar)}()))}M>0||(function Jr(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)e=i.preRun.shift(),ir.unshift(e);var e;pe(ir)}(),M>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),r()},1)):r()))}if(i.___embind_register_native_and_builtin_types=function(){return(i.___embind_register_native_and_builtin_types=i.asm.P).apply(null,arguments)},i.dynCall_viii=function(){return(i.dynCall_viii=i.asm.Q).apply(null,arguments)},i.dynCall_vi=function(){return(i.dynCall_vi=i.asm.R).apply(null,arguments)},i.dynCall_v=function(){return(i.dynCall_v=i.asm.S).apply(null,arguments)},i.dynCall_i=function(){return(i.dynCall_i=i.asm.T).apply(null,arguments)},i.dynCall_iii=function(){return(i.dynCall_iii=i.asm.U).apply(null,arguments)},i.dynCall_ii=function(){return(i.dynCall_ii=i.asm.V).apply(null,arguments)},i.dynCall_vii=function(){return(i.dynCall_vii=i.asm.W).apply(null,arguments)},i.dynCall_iiii=function(){return(i.dynCall_iiii=i.asm.X).apply(null,arguments)},i.dynCall_iiiii=function(){return(i.dynCall_iiiii=i.asm.Y).apply(null,arguments)},i.dynCall_iiiiii=function(){return(i.dynCall_iiiiii=i.asm.Z).apply(null,arguments)},i.dynCall_iiiiiiii=function(){return(i.dynCall_iiiiiiii=i.asm._).apply(null,arguments)},i.dynCall_iiiiiiiii=function(){return(i.dynCall_iiiiiiiii=i.asm.$).apply(null,arguments)},i.dynCall_viiii=function(){return(i.dynCall_viiii=i.asm.aa).apply(null,arguments)},i.dynCall_iiiiiii=function(){return(i.dynCall_iiiiiii=i.asm.ba).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiii=i.asm.ca).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiiii=i.asm.da).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiii=i.asm.ea).apply(null,arguments)},i.dynCall_viiiii=function(){return(i.dynCall_viiiii=i.asm.fa).apply(null,arguments)},i.dynCall_iiiiiiiiii=function(){return(i.dynCall_iiiiiiiiii=i.asm.ga).apply(null,arguments)},i.dynCall_iiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiii=i.asm.ha).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.ia).apply(null,arguments)},i.dynCall_viiiiii=function(){return(i.dynCall_viiiiii=i.asm.ja).apply(null,arguments)},ne=function e(){Te||Be(),Te||(ne=e)},i.run=Be,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Be(),k.ready};const kr=Object.freeze(function Sr(k,Y){for(var H=0;H<Y.length;H++){const i=Y[H];if("string"!=typeof i&&!Array.isArray(i))for(const C in i)if("default"!==C&&!(C in k)){const E=Object.getOwnPropertyDescriptor(i,C);E&&Object.defineProperty(k,C,E.get?E:{enumerable:!0,get:()=>i[C]})}}return Object.freeze(k)}({__proto__:null,default:Ae.exports},[Ae.exports]))}}]);