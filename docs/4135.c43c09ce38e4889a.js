"use strict";(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[4135],{44135:(B,D,p)=>{p.r(D),p.d(D,{classBreaks:()=>W,histogram:()=>A,summaryStatistics:()=>k,uniqueValues:()=>N});var g=p(15861),S=(p(26584),p(65234)),m=(p(36630),p(63930)),j=p(46679);let v=null;function F(a,n){return V.apply(this,arguments)}function V(){return(V=(0,g.Z)(function*(a,n){if(!n)return[];const l=a.field,r=a.valueExpression,s=a.normalizationType,u=a.normalizationField,c=a.normalizationTotal,f=[],d=a.viewInfoParams;let y=null,x=null;if(r){if(!v){const{arcadeUtils:z}=yield(0,j.LC)();v=z}y=v.createFunction(r),x=d&&v.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new S.Z(d.spatialReference)})}return n.forEach(z=>{const I=z.attributes;let T;if(r){const C=v.createExecContext(z,x);T=v.executeFunction(y,C)}else I&&(T=I[l]);if(s&&isFinite(T)){const C=I&&parseFloat(I[u]);T=(0,m.fk)(T,s,C,c)}f.push(T)}),f})).apply(this,arguments)}function k(a){return E.apply(this,arguments)}function E(){return(E=(0,g.Z)(function*(a){const{attribute:n,features:l}=a,{normalizationType:r,normalizationField:s,minValue:u,maxValue:c,fieldType:f}=n,d=yield F({field:n.field,valueExpression:n.valueExpression,normalizationType:r,normalizationField:s,normalizationTotal:n.normalizationTotal,viewInfoParams:n.viewInfoParams},l),y=(0,m.S5)({normalizationType:r,normalizationField:s,minValue:u,maxValue:c}),x={value:.5,fieldType:f},z="esriFieldTypeString"===f?(0,m.H0)({values:d,supportsNullCount:y,percentileParams:x}):(0,m.i5)({values:d,minValue:u,maxValue:c,useSampleStdDev:!r,supportsNullCount:y,percentileParams:x});return(0,m.F_)(z,"esriFieldTypeDate"===f)})).apply(this,arguments)}function N(a){return w.apply(this,arguments)}function w(){return(w=(0,g.Z)(function*(a){const{attribute:n,features:l}=a,r=yield F({field:n.field,valueExpression:n.valueExpression,viewInfoParams:n.viewInfoParams},l),s=(0,m.eT)(r);return(0,m.Qm)(s,n.domain,n.returnAllCodedValues)})).apply(this,arguments)}function W(a){return P.apply(this,arguments)}function P(){return(P=(0,g.Z)(function*(a){const{attribute:n,features:l}=a,{field:r,normalizationType:s,normalizationField:u,normalizationTotal:c,classificationMethod:f}=n,d=yield F({field:r,valueExpression:n.valueExpression,normalizationType:s,normalizationField:u,normalizationTotal:c,viewInfoParams:n.viewInfoParams},l),y=(0,m.G2)(d,{field:r,normalizationType:s,normalizationField:u,normalizationTotal:c,classificationMethod:f,standardDeviationInterval:n.standardDeviationInterval,numClasses:n.numClasses,minValue:n.minValue,maxValue:n.maxValue});return(0,m.DL)(y,f)})).apply(this,arguments)}function A(a){return b.apply(this,arguments)}function b(){return(b=(0,g.Z)(function*(a){const{attribute:n,features:l}=a,{field:r,normalizationType:s,normalizationField:u,normalizationTotal:c,classificationMethod:f}=n,d=yield F({field:r,valueExpression:n.valueExpression,normalizationType:s,normalizationField:u,normalizationTotal:c,viewInfoParams:n.viewInfoParams},l);return(0,m.oF)(d,{field:r,normalizationType:s,normalizationField:u,normalizationTotal:c,classificationMethod:f,standardDeviationInterval:n.standardDeviationInterval,numBins:n.numBins,minValue:n.minValue,maxValue:n.maxValue})})).apply(this,arguments)}}}]);