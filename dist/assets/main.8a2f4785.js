const $l="modulepreload",Hl=function(t){return"/"+t},Mi={},Rt=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=Hl(s),s in Mi)return;Mi[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":$l,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function Ks(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const jl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vl=Ks(jl);function Ea(t){return!!t||t===""}function Gs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ae(r)?zl(r):Gs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ae(t))return t;if(ce(t))return t}}const ql=/;(?![^(]*\))/g,Wl=/:(.+)/;function zl(t){const e={};return t.split(ql).forEach(n=>{if(n){const r=n.split(Wl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Js(t){let e="";if(ae(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Js(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const q_=t=>ae(t)?t:t==null?"":F(t)||ce(t)&&(t.toString===Ta||!j(t.toString))?JSON.stringify(t,wa,2):String(t),wa=(t,e)=>e&&e.__v_isRef?wa(t,e.value):Yt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ia(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!F(e)&&!Sa(e)?String(e):e,Z={},Xt=[],Be=()=>{},Kl=()=>!1,Gl=/^on[^a-z]/,Er=t=>Gl.test(t),Xs=t=>t.startsWith("onUpdate:"),_e=Object.assign,Ys=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jl=Object.prototype.hasOwnProperty,q=(t,e)=>Jl.call(t,e),F=Array.isArray,Yt=t=>wr(t)==="[object Map]",Ia=t=>wr(t)==="[object Set]",j=t=>typeof t=="function",ae=t=>typeof t=="string",Qs=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Ra=t=>ce(t)&&j(t.then)&&j(t.catch),Ta=Object.prototype.toString,wr=t=>Ta.call(t),Xl=t=>wr(t).slice(8,-1),Sa=t=>wr(t)==="[object Object]",Zs=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Jn=Ks(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ir=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yl=/-(\w)/g,Ye=Ir(t=>t.replace(Yl,(e,n)=>n?n.toUpperCase():"")),Ql=/\B([A-Z])/g,fn=Ir(t=>t.replace(Ql,"-$1").toLowerCase()),Rr=Ir(t=>t.charAt(0).toUpperCase()+t.slice(1)),zr=Ir(t=>t?`on${Rr(t)}`:""),An=(t,e)=>!Object.is(t,e),Xn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},cr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Li;const Zl=()=>Li||(Li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let qe;class eu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&qe&&(this.parent=qe,this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=qe;try{return qe=this,e()}finally{qe=n}}}on(){qe=this}off(){qe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function tu(t,e=qe){e&&e.active&&e.effects.push(t)}const ei=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Aa=t=>(t.w&wt)>0,Ca=t=>(t.n&wt)>0,nu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wt},ru=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Aa(s)&&!Ca(s)?s.delete(t):e[n++]=s,s.w&=~wt,s.n&=~wt}e.length=n}},Es=new WeakMap;let yn=0,wt=1;const ws=30;let Me;const kt=Symbol(""),Is=Symbol("");class ti{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tu(this,r)}run(){if(!this.active)return this.fn();let e=Me,n=yt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Me,Me=this,yt=!0,wt=1<<++yn,yn<=ws?nu(this):Ui(this),this.fn()}finally{yn<=ws&&ru(this),wt=1<<--yn,Me=this.parent,yt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Me===this?this.deferStop=!0:this.active&&(Ui(this),this.onStop&&this.onStop(),this.active=!1)}}function Ui(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yt=!0;const Oa=[];function dn(){Oa.push(yt),yt=!1}function hn(){const t=Oa.pop();yt=t===void 0?!0:t}function Oe(t,e,n){if(yt&&Me){let r=Es.get(t);r||Es.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ei()),Pa(s)}}function Pa(t,e){let n=!1;yn<=ws?Ca(t)||(t.n|=wt,n=!Aa(t)):n=!t.has(Me),n&&(t.add(Me),Me.deps.push(t))}function it(t,e,n,r,s,i){const o=Es.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?Zs(n)&&a.push(o.get("length")):(a.push(o.get(kt)),Yt(t)&&a.push(o.get(Is)));break;case"delete":F(t)||(a.push(o.get(kt)),Yt(t)&&a.push(o.get(Is)));break;case"set":Yt(t)&&a.push(o.get(kt));break}if(a.length===1)a[0]&&Rs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Rs(ei(c))}}function Rs(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&Bi(r);for(const r of n)r.computed||Bi(r)}function Bi(t,e){(t!==Me||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const su=Ks("__proto__,__v_isRef,__isVue"),ka=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qs)),iu=ni(),ou=ni(!1,!0),au=ni(!0),Fi=cu();function cu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)Oe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){dn();const r=K(this)[e].apply(this,n);return hn(),r}}),t}function ni(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Ru:La:e?Ma:xa).get(r))return r;const o=F(r);if(!t&&o&&q(Fi,s))return Reflect.get(Fi,s,i);const a=Reflect.get(r,s,i);return(Qs(s)?ka.has(s):su(s))||(t||Oe(r,"get",s),e)?a:he(a)?o&&Zs(s)?a:a.value:ce(a)?t?Ua(a):Bt(a):a}}const lu=Na(),uu=Na(!0);function Na(t=!1){return function(n,r,s,i){let o=n[r];if(Cn(o)&&he(o)&&!he(s))return!1;if(!t&&!Cn(s)&&(Ts(s)||(s=K(s),o=K(o)),!F(n)&&he(o)&&!he(s)))return o.value=s,!0;const a=F(n)&&Zs(r)?Number(r)<n.length:q(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?An(s,o)&&it(n,"set",r,s):it(n,"add",r,s)),c}}function fu(t,e){const n=q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&it(t,"delete",e,void 0),r}function du(t,e){const n=Reflect.has(t,e);return(!Qs(e)||!ka.has(e))&&Oe(t,"has",e),n}function hu(t){return Oe(t,"iterate",F(t)?"length":kt),Reflect.ownKeys(t)}const Da={get:iu,set:lu,deleteProperty:fu,has:du,ownKeys:hu},pu={get:au,set(t,e){return!0},deleteProperty(t,e){return!0}},mu=_e({},Da,{get:ou,set:uu}),ri=t=>t,Tr=t=>Reflect.getPrototypeOf(t);function Vn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&Oe(s,"get",e),Oe(s,"get",i));const{has:o}=Tr(s),a=r?ri:n?oi:On;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function qn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&Oe(r,"has",t),Oe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Wn(t,e=!1){return t=t.__v_raw,!e&&Oe(K(t),"iterate",kt),Reflect.get(t,"size",t)}function $i(t){t=K(t);const e=K(this);return Tr(e).has.call(e,t)||(e.add(t),it(e,"add",t,t)),this}function Hi(t,e){e=K(e);const n=K(this),{has:r,get:s}=Tr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?An(e,o)&&it(n,"set",t,e):it(n,"add",t,e),this}function ji(t){const e=K(this),{has:n,get:r}=Tr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&it(e,"delete",t,void 0),i}function Vi(){const t=K(this),e=t.size!==0,n=t.clear();return e&&it(t,"clear",void 0,void 0),n}function zn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?ri:t?oi:On;return!t&&Oe(a,"iterate",kt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Kn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Yt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ri:e?oi:On;return!e&&Oe(i,"iterate",c?Is:kt),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function lt(t){return function(...e){return t==="delete"?!1:this}}function gu(){const t={get(i){return Vn(this,i)},get size(){return Wn(this)},has:qn,add:$i,set:Hi,delete:ji,clear:Vi,forEach:zn(!1,!1)},e={get(i){return Vn(this,i,!1,!0)},get size(){return Wn(this)},has:qn,add:$i,set:Hi,delete:ji,clear:Vi,forEach:zn(!1,!0)},n={get(i){return Vn(this,i,!0)},get size(){return Wn(this,!0)},has(i){return qn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:zn(!0,!1)},r={get(i){return Vn(this,i,!0,!0)},get size(){return Wn(this,!0)},has(i){return qn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:zn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Kn(i,!1,!1),n[i]=Kn(i,!0,!1),e[i]=Kn(i,!1,!0),r[i]=Kn(i,!0,!0)}),[t,n,e,r]}const[_u,vu,yu,bu]=gu();function si(t,e){const n=e?t?bu:yu:t?vu:_u;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const Eu={get:si(!1,!1)},wu={get:si(!1,!0)},Iu={get:si(!0,!1)},xa=new WeakMap,Ma=new WeakMap,La=new WeakMap,Ru=new WeakMap;function Tu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Su(t){return t.__v_skip||!Object.isExtensible(t)?0:Tu(Xl(t))}function Bt(t){return Cn(t)?t:ii(t,!1,Da,Eu,xa)}function Au(t){return ii(t,!1,mu,wu,Ma)}function Ua(t){return ii(t,!0,pu,Iu,La)}function ii(t,e,n,r,s){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Su(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Qt(t){return Cn(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function Ts(t){return!!(t&&t.__v_isShallow)}function Ba(t){return Qt(t)||Cn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Fa(t){return cr(t,"__v_skip",!0),t}const On=t=>ce(t)?Bt(t):t,oi=t=>ce(t)?Ua(t):t;function $a(t){yt&&Me&&(t=K(t),Pa(t.dep||(t.dep=ei())))}function Ha(t,e){t=K(t),t.dep&&Rs(t.dep)}function he(t){return!!(t&&t.__v_isRef===!0)}function Cu(t){return Va(t,!1)}function ja(t){return Va(t,!0)}function Va(t,e){return he(t)?t:new Ou(t,e)}class Ou{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:On(e)}get value(){return $a(this),this._value}set value(e){e=this.__v_isShallow?e:K(e),An(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:On(e),Ha(this))}}function Ke(t){return he(t)?t.value:t}const Pu={get:(t,e,n)=>Ke(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return he(s)&&!he(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qa(t){return Qt(t)?t:new Proxy(t,Pu)}class ku{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ti(e,()=>{this._dirty||(this._dirty=!0,Ha(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return $a(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Nu(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=Be):(r=t.get,s=t.set),new ku(r,s,i||!s,n)}function bt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Sr(i,e,n)}return s}function Fe(t,e,n,r){if(j(t)){const i=bt(t,e,n,r);return i&&Ra(i)&&i.catch(o=>{Sr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Fe(t[i],e,n,r));return s}function Sr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){bt(c,null,10,[t,o,a]);return}}Du(t,n,s,r)}function Du(t,e,n,r=!0){console.error(t)}let lr=!1,Ss=!1;const Ce=[];let nt=0;const En=[];let bn=null,Wt=0;const wn=[];let dt=null,zt=0;const Wa=Promise.resolve();let ai=null,As=null;function za(t){const e=ai||Wa;return t?e.then(this?t.bind(this):t):e}function xu(t){let e=nt+1,n=Ce.length;for(;e<n;){const r=e+n>>>1;Pn(Ce[r])<t?e=r+1:n=r}return e}function Ka(t){(!Ce.length||!Ce.includes(t,lr&&t.allowRecurse?nt+1:nt))&&t!==As&&(t.id==null?Ce.push(t):Ce.splice(xu(t.id),0,t),Ga())}function Ga(){!lr&&!Ss&&(Ss=!0,ai=Wa.then(Ya))}function Mu(t){const e=Ce.indexOf(t);e>nt&&Ce.splice(e,1)}function Ja(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Ga()}function Lu(t){Ja(t,bn,En,Wt)}function Uu(t){Ja(t,dt,wn,zt)}function Ar(t,e=null){if(En.length){for(As=e,bn=[...new Set(En)],En.length=0,Wt=0;Wt<bn.length;Wt++)bn[Wt]();bn=null,Wt=0,As=null,Ar(t,e)}}function Xa(t){if(Ar(),wn.length){const e=[...new Set(wn)];if(wn.length=0,dt){dt.push(...e);return}for(dt=e,dt.sort((n,r)=>Pn(n)-Pn(r)),zt=0;zt<dt.length;zt++)dt[zt]();dt=null,zt=0}}const Pn=t=>t.id==null?1/0:t.id;function Ya(t){Ss=!1,lr=!0,Ar(t),Ce.sort((n,r)=>Pn(n)-Pn(r));const e=Be;try{for(nt=0;nt<Ce.length;nt++){const n=Ce[nt];n&&n.active!==!1&&bt(n,null,14)}}finally{nt=0,Ce.length=0,Xa(),lr=!1,ai=null,(Ce.length||En.length||wn.length)&&Ya(t)}}function Bu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Z;d&&(s=n.map(g=>g.trim())),h&&(s=n.map(bs))}let a,c=r[a=zr(e)]||r[a=zr(Ye(e))];!c&&i&&(c=r[a=zr(fn(e))]),c&&Fe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Fe(l,t,6,s)}}function Qa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=Qa(l,e,!0);u&&(a=!0,_e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):_e(o,i),r.set(t,o),o)}function Cr(t,e){return!t||!Er(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,fn(e))||q(t,e))}let Le=null,Or=null;function ur(t){const e=Le;return Le=t,Or=t&&t.type.__scopeId||null,e}function W_(t){Or=t}function z_(){Or=null}function Fu(t,e=Le,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Zi(-1);const i=ur(e),o=t(...s);return ur(i),r._d&&Zi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Kr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:S,inheritAttrs:M}=t;let C,A;const L=ur(t);try{if(n.shapeFlag&4){const W=s||r;C=We(u.call(W,W,h,i,g,d,S)),A=c}else{const W=e;C=We(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),A=e.props?c:$u(c)}}catch(W){In.length=0,Sr(W,t,1),C=ge(xt)}let H=C;if(A&&M!==!1){const W=Object.keys(A),{shapeFlag:P}=H;W.length&&P&7&&(o&&W.some(Xs)&&(A=Hu(A,o)),H=nn(H,A))}return n.dirs&&(H=nn(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),C=H,ur(L),C}const $u=t=>{let e;for(const n in t)(n==="class"||n==="style"||Er(n))&&((e||(e={}))[n]=t[n]);return e},Hu=(t,e)=>{const n={};for(const r in t)(!Xs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ju(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?qi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Cr(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?qi(r,o,l):!0:!!o;return!1}function qi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Cr(n,i))return!0}return!1}function Vu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const qu=t=>t.__isSuspense;function Wu(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Uu(t)}function Yn(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Ge(t,e,n=!1){const r=fe||Le;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r.proxy):e}}const Wi={};function Qn(t,e,n){return Za(t,e,n)}function Za(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Z){const a=fe;let c,l=!1,u=!1;if(he(t)?(c=()=>t.value,l=Ts(t)):Qt(t)?(c=()=>t,r=!0):F(t)?(u=!0,l=t.some(A=>Qt(A)||Ts(A)),c=()=>t.map(A=>{if(he(A))return A.value;if(Qt(A))return Pt(A);if(j(A))return bt(A,a,2)})):j(t)?e?c=()=>bt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Fe(t,a,3,[d])}:c=Be,e&&r){const A=c;c=()=>Pt(A())}let h,d=A=>{h=C.onStop=()=>{bt(A,a,4)}};if(Nn)return d=Be,e?n&&Fe(e,a,3,[c(),u?[]:void 0,d]):c(),Be;let g=u?[]:Wi;const S=()=>{if(!!C.active)if(e){const A=C.run();(r||l||(u?A.some((L,H)=>An(L,g[H])):An(A,g)))&&(h&&h(),Fe(e,a,3,[A,g===Wi?void 0:g,d]),g=A)}else C.run()};S.allowRecurse=!!e;let M;s==="sync"?M=S:s==="post"?M=()=>be(S,a&&a.suspense):M=()=>Lu(S);const C=new ti(c,M);return e?n?S():g=C.run():s==="post"?be(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&Ys(a.scope.effects,C)}}function zu(t,e,n){const r=this.proxy,s=ae(t)?t.includes(".")?ec(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=fe;rn(this);const a=Za(s,i.bind(r),n);return o?rn(o):Nt(),a}function ec(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Pt(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),he(t))Pt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Pt(t[n],e);else if(Ia(t)||Yt(t))t.forEach(n=>{Pt(n,e)});else if(Sa(t))for(const n in t)Pt(t[n],e);return t}function tc(t){return j(t)?{setup:t,name:t.name}:t}const Zn=t=>!!t.type.__asyncLoader,nc=t=>t.type.__isKeepAlive;function Ku(t,e){rc(t,"a",e)}function Gu(t,e){rc(t,"da",e)}function rc(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Pr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)nc(s.parent.vnode)&&Ju(r,e,n,s),s=s.parent}}function Ju(t,e,n,r){const s=Pr(e,t,r,!0);ci(()=>{Ys(r[e],s)},n)}function Pr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;dn(),rn(n);const a=Fe(e,n,t,o);return Nt(),hn(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=fe)=>(!Nn||t==="sp")&&Pr(t,e,n),Xu=at("bm"),Yu=at("m"),Qu=at("bu"),Zu=at("u"),ef=at("bum"),ci=at("um"),tf=at("sp"),nf=at("rtg"),rf=at("rtc");function sf(t,e=fe){Pr("ec",t,e)}function K_(t,e){const n=Le;if(n===null)return t;const r=Nr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Z]=e[i];j(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Tt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(dn(),Fe(c,n,8,[t.el,a,t,e]),hn())}}const li="components";function of(t,e){return ic(li,t,!0,e)||t}const sc=Symbol();function af(t){return ae(t)?ic(li,t,!1)||t:t||sc}function ic(t,e,n=!0,r=!1){const s=Le||fe;if(s){const i=s.type;if(t===li){const a=Ff(i,!1);if(a&&(a===e||a===Ye(e)||a===Rr(Ye(e))))return i}const o=zi(s[t]||i[t],e)||zi(s.appContext[t],e);return!o&&r?i:o}}function zi(t,e){return t&&(t[e]||t[Ye(e)]||t[Rr(Ye(e))])}function G_(t,e,n,r){let s;const i=n&&n[r];if(F(t)||ae(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Cs=t=>t?yc(t)?Nr(t)||t.proxy:Cs(t.parent):null,fr=_e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cs(t.parent),$root:t=>Cs(t.root),$emit:t=>t.emit,$options:t=>ac(t),$forceUpdate:t=>t.f||(t.f=()=>Ka(t.update)),$nextTick:t=>t.n||(t.n=za.bind(t.proxy)),$watch:t=>zu.bind(t)}),cf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Z&&q(r,e))return o[e]=1,r[e];if(s!==Z&&q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,i[e];if(n!==Z&&q(n,e))return o[e]=4,n[e];Os&&(o[e]=0)}}const u=fr[e];let h,d;if(u)return e==="$attrs"&&Oe(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Z&&q(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Z&&q(s,e)?(s[e]=n,!0):r!==Z&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&q(t,o)||e!==Z&&q(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q(fr,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Os=!0;function lf(t){const e=ac(t),n=t.proxy,r=t.ctx;Os=!1,e.beforeCreate&&Ki(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:S,activated:M,deactivated:C,beforeDestroy:A,beforeUnmount:L,destroyed:H,unmounted:W,render:P,renderTracked:oe,renderTriggered:ve,errorCaptured:Pe,serverPrefetch:ue,expose:we,inheritAttrs:Ie,components:se,directives:Re,filters:ye}=e;if(l&&uf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const X=o[ee];j(X)&&(r[ee]=X.bind(n))}if(s){const ee=s.call(n,n);ce(ee)&&(t.data=Bt(ee))}if(Os=!0,i)for(const ee in i){const X=i[ee],Te=j(X)?X.bind(n,n):j(X.get)?X.get.bind(n,n):Be,$t=!j(X)&&j(X.set)?X.set.bind(n):Be,Ze=Ne({get:Te,set:$t});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:He=>Ze.value=He})}if(a)for(const ee in a)oc(a[ee],r,n,ee);if(c){const ee=j(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(X=>{Yn(X,ee[X])})}u&&Ki(u,t,"c");function ie(ee,X){F(X)?X.forEach(Te=>ee(Te.bind(n))):X&&ee(X.bind(n))}if(ie(Xu,h),ie(Yu,d),ie(Qu,g),ie(Zu,S),ie(Ku,M),ie(Gu,C),ie(sf,Pe),ie(rf,oe),ie(nf,ve),ie(ef,L),ie(ci,W),ie(tf,ue),F(we))if(we.length){const ee=t.exposed||(t.exposed={});we.forEach(X=>{Object.defineProperty(ee,X,{get:()=>n[X],set:Te=>n[X]=Te})})}else t.exposed||(t.exposed={});P&&t.render===Be&&(t.render=P),Ie!=null&&(t.inheritAttrs=Ie),se&&(t.components=se),Re&&(t.directives=Re)}function uf(t,e,n=Be,r=!1){F(t)&&(t=Ps(t));for(const s in t){const i=t[s];let o;ce(i)?"default"in i?o=Ge(i.from||s,i.default,!0):o=Ge(i.from||s):o=Ge(i),he(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ki(t,e,n){Fe(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function oc(t,e,n,r){const s=r.includes(".")?ec(n,r):()=>n[r];if(ae(t)){const i=e[t];j(i)&&Qn(s,i)}else if(j(t))Qn(s,t.bind(n));else if(ce(t))if(F(t))t.forEach(i=>oc(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&Qn(s,i,t)}}function ac(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>dr(c,l,o,!0)),dr(c,e,o)),i.set(e,c),c}function dr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&dr(t,i,n,!0),s&&s.forEach(o=>dr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ff[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ff={data:Gi,props:At,emits:At,methods:At,computed:At,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:At,directives:At,watch:hf,provide:Gi,inject:df};function Gi(t,e){return e?t?function(){return _e(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function df(t,e){return At(Ps(t),Ps(e))}function Ps(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function At(t,e){return t?_e(_e(Object.create(null),t),e):e}function hf(t,e){if(!t)return e;if(!e)return t;const n=_e(Object.create(null),t);for(const r in e)n[r]=me(t[r],e[r]);return n}function pf(t,e,n,r=!1){const s={},i={};cr(i,kr,1),t.propsDefaults=Object.create(null),cc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Au(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function mf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Cr(t.emitsOptions,d))continue;const g=e[d];if(c)if(q(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const S=Ye(d);s[S]=ks(c,a,S,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{cc(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!q(e,h)&&((u=fn(h))===h||!q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ks(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!q(e,h)&&!0)&&(delete i[h],l=!0)}l&&it(t,"set","$attrs")}function cc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Jn(c))continue;const l=e[c];let u;s&&q(s,u=Ye(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Cr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||Z;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ks(s,c,h,l[h],t,!q(l,h))}}return o}function ks(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(rn(s),r=l[n]=c.call(null,e),Nt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===fn(n))&&(r=!0))}return r}function lc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=h=>{c=!0;const[d,g]=lc(h,e,!0);_e(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Xt),Xt;if(F(i))for(let u=0;u<i.length;u++){const h=Ye(i[u]);Ji(h)&&(o[h]=Z)}else if(i)for(const u in i){const h=Ye(u);if(Ji(h)){const d=i[u],g=o[h]=F(d)||j(d)?{type:d}:d;if(g){const S=Qi(Boolean,g.type),M=Qi(String,g.type);g[0]=S>-1,g[1]=M<0||S<M,(S>-1||q(g,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Ji(t){return t[0]!=="$"}function Xi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Yi(t,e){return Xi(t)===Xi(e)}function Qi(t,e){return F(e)?e.findIndex(n=>Yi(n,t)):j(e)&&Yi(e,t)?0:-1}const uc=t=>t[0]==="_"||t==="$stable",ui=t=>F(t)?t.map(We):[We(t)],gf=(t,e,n)=>{if(e._n)return e;const r=Fu((...s)=>ui(e(...s)),n);return r._c=!1,r},fc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(uc(s))continue;const i=t[s];if(j(i))e[s]=gf(s,i,r);else if(i!=null){const o=ui(i);e[s]=()=>o}}},dc=(t,e)=>{const n=ui(e);t.slots.default=()=>n},_f=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),cr(e,"_",n)):fc(e,t.slots={})}else t.slots={},e&&dc(t,e);cr(t.slots,kr,1)},vf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(_e(s,e),!n&&a===1&&delete s._):(i=!e.$stable,fc(e,s)),o=e}else e&&(dc(t,e),o={default:1});if(i)for(const a in s)!uc(a)&&!(a in o)&&delete s[a]};function hc(){return{app:null,config:{isNativeTag:Kl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yf=0;function bf(t,e){return function(r,s=null){j(r)||(r=Object.assign({},r)),s!=null&&!ce(s)&&(s=null);const i=hc(),o=new Set;let a=!1;const c=i.app={_uid:yf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...u)):j(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ge(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Nr(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Ns(t,e,n,r,s=!1){if(F(t)){t.forEach((d,g)=>Ns(d,e&&(F(e)?e[g]:e),n,r,s));return}if(Zn(r)&&!s)return;const i=r.shapeFlag&4?Nr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Z?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ae(l)?(u[l]=null,q(h,l)&&(h[l]=null)):he(l)&&(l.value=null)),j(c))bt(c,a,12,[o,u]);else{const d=ae(c),g=he(c);if(d||g){const S=()=>{if(t.f){const M=d?u[c]:c.value;s?F(M)&&Ys(M,i):F(M)?M.includes(i)||M.push(i):d?(u[c]=[i],q(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,q(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,be(S,n)):S()}}}const be=Wu;function Ef(t){return wf(t)}function wf(t,e){const n=Zl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Be,cloneNode:S,insertStaticContent:M}=t,C=(f,p,m,y=null,v=null,w=null,T=!1,E=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!_n(f,p)&&(y=N(f),ke(f,v,w,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:b,ref:D,shapeFlag:O}=p;switch(b){case fi:A(f,p,m,y);break;case xt:L(f,p,m,y);break;case er:f==null&&H(p,m,y,T);break;case tt:Re(f,p,m,y,v,w,T,E,I);break;default:O&1?oe(f,p,m,y,v,w,T,E,I):O&6?ye(f,p,m,y,v,w,T,E,I):(O&64||O&128)&&b.process(f,p,m,y,v,w,T,E,I,te)}D!=null&&v&&Ns(D,f&&f.ref,w,p||f,!p)},A=(f,p,m,y)=>{if(f==null)r(p.el=a(p.children),m,y);else{const v=p.el=f.el;p.children!==f.children&&l(v,p.children)}},L=(f,p,m,y)=>{f==null?r(p.el=c(p.children||""),m,y):p.el=f.el},H=(f,p,m,y)=>{[f.el,f.anchor]=M(f.children,p,m,y,f.el,f.anchor)},W=({el:f,anchor:p},m,y)=>{let v;for(;f&&f!==p;)v=d(f),r(f,m,y),f=v;r(p,m,y)},P=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),s(f),f=m;s(p)},oe=(f,p,m,y,v,w,T,E,I)=>{T=T||p.type==="svg",f==null?ve(p,m,y,v,w,T,E,I):we(f,p,v,w,T,E,I)},ve=(f,p,m,y,v,w,T,E)=>{let I,b;const{type:D,props:O,shapeFlag:x,transition:U,patchFlag:z,dirs:Y}=f;if(f.el&&S!==void 0&&z===-1)I=f.el=S(f.el);else{if(I=f.el=o(f.type,w,O&&O.is,O),x&8?u(I,f.children):x&16&&ue(f.children,I,null,y,v,w&&D!=="foreignObject",T,E),Y&&Tt(f,null,y,"created"),O){for(const re in O)re!=="value"&&!Jn(re)&&i(I,re,null,O[re],w,f.children,y,v,R);"value"in O&&i(I,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Ve(b,y,f)}Pe(I,f,f.scopeId,T,y)}Y&&Tt(f,null,y,"beforeMount");const Q=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;Q&&U.beforeEnter(I),r(I,p,m),((b=O&&O.onVnodeMounted)||Q||Y)&&be(()=>{b&&Ve(b,y,f),Q&&U.enter(I),Y&&Tt(f,null,y,"mounted")},v)},Pe=(f,p,m,y,v)=>{if(m&&g(f,m),y)for(let w=0;w<y.length;w++)g(f,y[w]);if(v){let w=v.subTree;if(p===w){const T=v.vnode;Pe(f,T,T.scopeId,T.slotScopeIds,v.parent)}}},ue=(f,p,m,y,v,w,T,E,I=0)=>{for(let b=I;b<f.length;b++){const D=f[b]=E?ht(f[b]):We(f[b]);C(null,D,p,m,y,v,w,T,E)}},we=(f,p,m,y,v,w,T)=>{const E=p.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:D}=p;I|=f.patchFlag&16;const O=f.props||Z,x=p.props||Z;let U;m&&St(m,!1),(U=x.onVnodeBeforeUpdate)&&Ve(U,m,p,f),D&&Tt(p,f,m,"beforeUpdate"),m&&St(m,!0);const z=v&&p.type!=="foreignObject";if(b?Ie(f.dynamicChildren,b,E,m,y,z,w):T||Te(f,p,E,null,m,y,z,w,!1),I>0){if(I&16)se(E,p,O,x,m,y,v);else if(I&2&&O.class!==x.class&&i(E,"class",null,x.class,v),I&4&&i(E,"style",O.style,x.style,v),I&8){const Y=p.dynamicProps;for(let Q=0;Q<Y.length;Q++){const re=Y[Q],De=O[re],Ht=x[re];(Ht!==De||re==="value")&&i(E,re,De,Ht,v,f.children,m,y,R)}}I&1&&f.children!==p.children&&u(E,p.children)}else!T&&b==null&&se(E,p,O,x,m,y,v);((U=x.onVnodeUpdated)||D)&&be(()=>{U&&Ve(U,m,p,f),D&&Tt(p,f,m,"updated")},y)},Ie=(f,p,m,y,v,w,T)=>{for(let E=0;E<p.length;E++){const I=f[E],b=p[E],D=I.el&&(I.type===tt||!_n(I,b)||I.shapeFlag&70)?h(I.el):m;C(I,b,D,null,y,v,w,T,!0)}},se=(f,p,m,y,v,w,T)=>{if(m!==y){for(const E in y){if(Jn(E))continue;const I=y[E],b=m[E];I!==b&&E!=="value"&&i(f,E,b,I,T,p.children,v,w,R)}if(m!==Z)for(const E in m)!Jn(E)&&!(E in y)&&i(f,E,m[E],null,T,p.children,v,w,R);"value"in y&&i(f,"value",m.value,y.value)}},Re=(f,p,m,y,v,w,T,E,I)=>{const b=p.el=f?f.el:a(""),D=p.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:x,slotScopeIds:U}=p;U&&(E=E?E.concat(U):U),f==null?(r(b,m,y),r(D,m,y),ue(p.children,m,D,v,w,T,E,I)):O>0&&O&64&&x&&f.dynamicChildren?(Ie(f.dynamicChildren,x,m,v,w,T,E),(p.key!=null||v&&p===v.subTree)&&pc(f,p,!0)):Te(f,p,m,D,v,w,T,E,I)},ye=(f,p,m,y,v,w,T,E,I)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?v.ctx.activate(p,m,y,T,I):ct(p,m,y,v,w,T,I):ie(f,p,I)},ct=(f,p,m,y,v,w,T)=>{const E=f.component=xf(f,y,v);if(nc(f)&&(E.ctx.renderer=te),Mf(E),E.asyncDep){if(v&&v.registerDep(E,ee),!f.el){const I=E.subTree=ge(xt);L(null,I,p,m)}return}ee(E,f,p,m,v,w,T)},ie=(f,p,m)=>{const y=p.component=f.component;if(ju(f,p,m))if(y.asyncDep&&!y.asyncResolved){X(y,p,m);return}else y.next=p,Mu(y.update),y.update();else p.el=f.el,y.vnode=p},ee=(f,p,m,y,v,w,T)=>{const E=()=>{if(f.isMounted){let{next:D,bu:O,u:x,parent:U,vnode:z}=f,Y=D,Q;St(f,!1),D?(D.el=z.el,X(f,D,T)):D=z,O&&Xn(O),(Q=D.props&&D.props.onVnodeBeforeUpdate)&&Ve(Q,U,D,z),St(f,!0);const re=Kr(f),De=f.subTree;f.subTree=re,C(De,re,h(De.el),N(De),f,v,w),D.el=re.el,Y===null&&Vu(f,re.el),x&&be(x,v),(Q=D.props&&D.props.onVnodeUpdated)&&be(()=>Ve(Q,U,D,z),v)}else{let D;const{el:O,props:x}=p,{bm:U,m:z,parent:Y}=f,Q=Zn(p);if(St(f,!1),U&&Xn(U),!Q&&(D=x&&x.onVnodeBeforeMount)&&Ve(D,Y,p),St(f,!0),O&&$){const re=()=>{f.subTree=Kr(f),$(O,f.subTree,f,v,null)};Q?p.type.__asyncLoader().then(()=>!f.isUnmounted&&re()):re()}else{const re=f.subTree=Kr(f);C(null,re,m,y,f,v,w),p.el=re.el}if(z&&be(z,v),!Q&&(D=x&&x.onVnodeMounted)){const re=p;be(()=>Ve(D,Y,re),v)}(p.shapeFlag&256||Y&&Zn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&be(f.a,v),f.isMounted=!0,p=m=y=null}},I=f.effect=new ti(E,()=>Ka(b),f.scope),b=f.update=()=>I.run();b.id=f.uid,St(f,!0),b()},X=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,mf(f,p.props,y,m),vf(f,p.children,m),dn(),Ar(void 0,f.update),hn()},Te=(f,p,m,y,v,w,T,E,I=!1)=>{const b=f&&f.children,D=f?f.shapeFlag:0,O=p.children,{patchFlag:x,shapeFlag:U}=p;if(x>0){if(x&128){Ze(b,O,m,y,v,w,T,E,I);return}else if(x&256){$t(b,O,m,y,v,w,T,E,I);return}}U&8?(D&16&&R(b,v,w),O!==b&&u(m,O)):D&16?U&16?Ze(b,O,m,y,v,w,T,E,I):R(b,v,w,!0):(D&8&&u(m,""),U&16&&ue(O,m,y,v,w,T,E,I))},$t=(f,p,m,y,v,w,T,E,I)=>{f=f||Xt,p=p||Xt;const b=f.length,D=p.length,O=Math.min(b,D);let x;for(x=0;x<O;x++){const U=p[x]=I?ht(p[x]):We(p[x]);C(f[x],U,m,null,v,w,T,E,I)}b>D?R(f,v,w,!0,!1,O):ue(p,m,y,v,w,T,E,I,O)},Ze=(f,p,m,y,v,w,T,E,I)=>{let b=0;const D=p.length;let O=f.length-1,x=D-1;for(;b<=O&&b<=x;){const U=f[b],z=p[b]=I?ht(p[b]):We(p[b]);if(_n(U,z))C(U,z,m,null,v,w,T,E,I);else break;b++}for(;b<=O&&b<=x;){const U=f[O],z=p[x]=I?ht(p[x]):We(p[x]);if(_n(U,z))C(U,z,m,null,v,w,T,E,I);else break;O--,x--}if(b>O){if(b<=x){const U=x+1,z=U<D?p[U].el:y;for(;b<=x;)C(null,p[b]=I?ht(p[b]):We(p[b]),m,z,v,w,T,E,I),b++}}else if(b>x)for(;b<=O;)ke(f[b],v,w,!0),b++;else{const U=b,z=b,Y=new Map;for(b=z;b<=x;b++){const Se=p[b]=I?ht(p[b]):We(p[b]);Se.key!=null&&Y.set(Se.key,b)}let Q,re=0;const De=x-z+1;let Ht=!1,Ni=0;const gn=new Array(De);for(b=0;b<De;b++)gn[b]=0;for(b=U;b<=O;b++){const Se=f[b];if(re>=De){ke(Se,v,w,!0);continue}let je;if(Se.key!=null)je=Y.get(Se.key);else for(Q=z;Q<=x;Q++)if(gn[Q-z]===0&&_n(Se,p[Q])){je=Q;break}je===void 0?ke(Se,v,w,!0):(gn[je-z]=b+1,je>=Ni?Ni=je:Ht=!0,C(Se,p[je],m,null,v,w,T,E,I),re++)}const Di=Ht?If(gn):Xt;for(Q=Di.length-1,b=De-1;b>=0;b--){const Se=z+b,je=p[Se],xi=Se+1<D?p[Se+1].el:y;gn[b]===0?C(null,je,m,xi,v,w,T,E,I):Ht&&(Q<0||b!==Di[Q]?He(je,m,xi,2):Q--)}}},He=(f,p,m,y,v=null)=>{const{el:w,type:T,transition:E,children:I,shapeFlag:b}=f;if(b&6){He(f.component.subTree,p,m,y);return}if(b&128){f.suspense.move(p,m,y);return}if(b&64){T.move(f,p,m,te);return}if(T===tt){r(w,p,m);for(let O=0;O<I.length;O++)He(I[O],p,m,y);r(f.anchor,p,m);return}if(T===er){W(f,p,m);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(w),r(w,p,m),be(()=>E.enter(w),v);else{const{leave:O,delayLeave:x,afterLeave:U}=E,z=()=>r(w,p,m),Y=()=>{O(w,()=>{z(),U&&U()})};x?x(w,z,Y):Y()}else r(w,p,m)},ke=(f,p,m,y=!1,v=!1)=>{const{type:w,props:T,ref:E,children:I,dynamicChildren:b,shapeFlag:D,patchFlag:O,dirs:x}=f;if(E!=null&&Ns(E,null,m,f,!0),D&256){p.ctx.deactivate(f);return}const U=D&1&&x,z=!Zn(f);let Y;if(z&&(Y=T&&T.onVnodeBeforeUnmount)&&Ve(Y,p,f),D&6)k(f.component,m,y);else{if(D&128){f.suspense.unmount(m,y);return}U&&Tt(f,null,p,"beforeUnmount"),D&64?f.type.remove(f,p,m,v,te,y):b&&(w!==tt||O>0&&O&64)?R(b,p,m,!1,!0):(w===tt&&O&384||!v&&D&16)&&R(I,p,m),y&&mn(f)}(z&&(Y=T&&T.onVnodeUnmounted)||U)&&be(()=>{Y&&Ve(Y,p,f),U&&Tt(f,null,p,"unmounted")},m)},mn=f=>{const{type:p,el:m,anchor:y,transition:v}=f;if(p===tt){_(m,y);return}if(p===er){P(f);return}const w=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:E}=v,I=()=>T(m,w);E?E(f.el,w,I):I()}else w()},_=(f,p)=>{let m;for(;f!==p;)m=d(f),s(f),f=m;s(p)},k=(f,p,m)=>{const{bum:y,scope:v,update:w,subTree:T,um:E}=f;y&&Xn(y),v.stop(),w&&(w.active=!1,ke(T,f,p,m)),E&&be(E,p),be(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(f,p,m,y=!1,v=!1,w=0)=>{for(let T=w;T<f.length;T++)ke(f[T],p,m,y,v)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),G=(f,p,m)=>{f==null?p._vnode&&ke(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,m),Xa(),p._vnode=f},te={p:C,um:ke,m:He,r:mn,mt:ct,mc:ue,pc:Te,pbc:Ie,n:N,o:t};let V,$;return e&&([V,$]=e(te)),{render:G,hydrate:V,createApp:bf(G,V)}}function St({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pc(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ht(s[i]),a.el=o.el),n||pc(o,a))}}function If(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Rf=t=>t.__isTeleport,tt=Symbol(void 0),fi=Symbol(void 0),xt=Symbol(void 0),er=Symbol(void 0),In=[];let Ue=null;function Ds(t=!1){In.push(Ue=t?null:[])}function Tf(){In.pop(),Ue=In[In.length-1]||null}let kn=1;function Zi(t){kn+=t}function mc(t){return t.dynamicChildren=kn>0?Ue||Xt:null,Tf(),kn>0&&Ue&&Ue.push(t),t}function Sf(t,e,n,r,s,i){return mc(vc(t,e,n,r,s,i,!0))}function gc(t,e,n,r,s){return mc(ge(t,e,n,r,s,!0))}function xs(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const kr="__vInternal",_c=({key:t})=>t!=null?t:null,tr=({ref:t,ref_key:e,ref_for:n})=>t!=null?ae(t)||he(t)||j(t)?{i:Le,r:t,k:e,f:!!n}:t:null;function vc(t,e=null,n=null,r=0,s=null,i=t===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_c(e),ref:e&&tr(e),scopeId:Or,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(di(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ae(n)?8:16),kn>0&&!o&&Ue&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ue.push(c),c}const ge=Af;function Af(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sc)&&(t=xt),xs(t)){const a=nn(t,e,!0);return n&&di(a,n),kn>0&&!i&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(t)]=a:Ue.push(a)),a.patchFlag|=-2,a}if($f(t)&&(t=t.__vccOpts),e){e=Cf(e);let{class:a,style:c}=e;a&&!ae(a)&&(e.class=Js(a)),ce(c)&&(Ba(c)&&!F(c)&&(c=_e({},c)),e.style=Gs(c))}const o=ae(t)?1:qu(t)?128:Rf(t)?64:ce(t)?4:j(t)?2:0;return vc(t,e,n,r,s,o,i,!0)}function Cf(t){return t?Ba(t)||kr in t?_e({},t):t:null}function nn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?kf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_c(a),ref:e&&e.ref?n&&s?F(s)?s.concat(tr(e)):[s,tr(e)]:tr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor}}function Of(t=" ",e=0){return ge(fi,null,t,e)}function J_(t,e){const n=ge(er,null,t);return n.staticCount=e,n}function Pf(t="",e=!1){return e?(Ds(),gc(xt,null,t)):ge(xt,null,t)}function We(t){return t==null||typeof t=="boolean"?ge(xt):F(t)?ge(tt,null,t.slice()):typeof t=="object"?ht(t):ge(fi,null,String(t))}function ht(t){return t.el===null||t.memo?t:nn(t)}function di(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),di(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(kr in e)?e._ctx=Le:s===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),r&64?(n=16,e=[Of(e)]):n=8);t.children=e,t.shapeFlag|=n}function kf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Js([e.class,r.class]));else if(s==="style")e.style=Gs([e.style,r.style]);else if(Er(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ve(t,e,n,r=null){Fe(t,e,7,[n,r])}const Nf=hc();let Df=0;function xf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Nf,i={uid:Df++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new eu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lc(r,s),emitsOptions:Qa(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Bu.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const rn=t=>{fe=t,t.scope.on()},Nt=()=>{fe&&fe.scope.off(),fe=null};function yc(t){return t.vnode.shapeFlag&4}let Nn=!1;function Mf(t,e=!1){Nn=e;const{props:n,children:r}=t.vnode,s=yc(t);pf(t,n,s,e),_f(t,r);const i=s?Lf(t,e):void 0;return Nn=!1,i}function Lf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fa(new Proxy(t.ctx,cf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Bf(t):null;rn(t),dn();const i=bt(r,t,0,[t.props,s]);if(hn(),Nt(),Ra(i)){if(i.then(Nt,Nt),e)return i.then(o=>{eo(t,o,e)}).catch(o=>{Sr(o,t,0)});t.asyncDep=i}else eo(t,i,e)}else bc(t,e)}function eo(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=qa(e)),bc(t,n)}let to;function bc(t,e,n){const r=t.type;if(!t.render){if(!e&&to&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=_e(_e({isCustomElement:i,delimiters:a},o),c);r.render=to(s,l)}}t.render=r.render||Be}rn(t),dn(),lf(t),hn(),Nt()}function Uf(t){return new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}})}function Bf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Uf(t))},slots:t.slots,emit:t.emit,expose:e}}function Nr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qa(Fa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fr)return fr[n](t)}}))}function Ff(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function $f(t){return j(t)&&"__vccOpts"in t}const Ne=(t,e)=>Nu(t,e,Nn);function Ec(t,e,n){const r=arguments.length;return r===2?ce(e)&&!F(e)?xs(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xs(n)&&(n=[n]),ge(t,e,n))}const Hf="3.2.37",jf="http://www.w3.org/2000/svg",Ot=typeof document<"u"?document:null,no=Ot&&Ot.createElement("template"),Vf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ot.createElementNS(jf,t):Ot.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{no.innerHTML=r?`<svg>${t}</svg>`:t;const a=no.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function qf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Wf(t,e,n){const r=t.style,s=ae(n);if(n&&!s){for(const i in n)Ms(r,i,n[i]);if(e&&!ae(e))for(const i in e)n[i]==null&&Ms(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ro=/\s*!important$/;function Ms(t,e,n){if(F(n))n.forEach(r=>Ms(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=zf(t,e);ro.test(n)?t.setProperty(fn(r),n.replace(ro,""),"important"):t[r]=n}}const so=["Webkit","Moz","ms"],Gr={};function zf(t,e){const n=Gr[e];if(n)return n;let r=Ye(e);if(r!=="filter"&&r in t)return Gr[e]=r;r=Rr(r);for(let s=0;s<so.length;s++){const i=so[s]+r;if(i in t)return Gr[e]=i}return e}const io="http://www.w3.org/1999/xlink";function Kf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(io,e.slice(6,e.length)):t.setAttributeNS(io,e,n);else{const i=Vl(e);n==null||i&&!Ea(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Gf(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ea(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[wc,Jf]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Ls=0;const Xf=Promise.resolve(),Yf=()=>{Ls=0},Qf=()=>Ls||(Xf.then(Yf),Ls=wc());function Kt(t,e,n,r){t.addEventListener(e,n,r)}function Zf(t,e,n,r){t.removeEventListener(e,n,r)}function ed(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=td(e);if(r){const l=i[e]=nd(r,s);Kt(t,a,l,c)}else o&&(Zf(t,a,o,c),i[e]=void 0)}}const oo=/(?:Once|Passive|Capture)$/;function td(t){let e;if(oo.test(t)){e={};let n;for(;n=t.match(oo);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[fn(t.slice(2)),e]}function nd(t,e){const n=r=>{const s=r.timeStamp||wc();(Jf||s>=n.attached-1)&&Fe(rd(r,n.value),e,5,[r])};return n.value=t,n.attached=Qf(),n}function rd(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ao=/^on[a-z]/,sd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?qf(t,r,s):e==="style"?Wf(t,n,r):Er(e)?Xs(e)||ed(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):id(t,e,r,s))?Gf(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Kf(t,e,r,s))};function id(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ao.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ao.test(e)&&ae(n)?!1:e in t}const co=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Xn(e,n):e};function od(t){t.target.composing=!0}function lo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const X_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=co(s);const i=r||s.props&&s.props.type==="number";Kt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=bs(a)),t._assign(a)}),n&&Kt(t,"change",()=>{t.value=t.value.trim()}),e||(Kt(t,"compositionstart",od),Kt(t,"compositionend",lo),Kt(t,"change",lo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=co(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&bs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},ad=_e({patchProp:sd},Vf);let uo;function cd(){return uo||(uo=Ef(ad))}const ld=(...t)=>{const e=cd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ud(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ud(t){return ae(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.4
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Gt=typeof window<"u";function fd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const J=Object.assign;function Jr(t,e){const n={};for(const r in e){const s=e[r];n[r]=$e(s)?s.map(t):t(s)}return n}const Rn=()=>{},$e=Array.isArray,dd=/\/$/,hd=t=>t.replace(dd,"");function Xr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=_d(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function pd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function md(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&sn(e.matched[r],n.matched[s])&&Ic(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function sn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ic(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gd(t[n],e[n]))return!1;return!0}function gd(t,e){return $e(t)?ho(t,e):$e(e)?ho(e,t):t===e}function ho(t,e){return $e(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function _d(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Dn;(function(t){t.pop="pop",t.push="push"})(Dn||(Dn={}));var Tn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Tn||(Tn={}));function vd(t){if(!t)if(Gt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hd(t)}const yd=/^[^#]+#/;function bd(t,e){return t.replace(yd,"#")+e}function Ed(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Dr=()=>({left:window.pageXOffset,top:window.pageYOffset});function wd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ed(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function po(t,e){return(history.state?history.state.position-e:-1)+t}const Us=new Map;function Id(t,e){Us.set(t,e)}function Rd(t){const e=Us.get(t);return Us.delete(t),e}let Td=()=>location.protocol+"//"+location.host;function Rc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),fo(c,"")}return fo(n,t)+r+s}function Sd(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=Rc(t,location),S=n.value,M=e.value;let C=0;if(d){if(n.value=g,e.value=d,o&&o===S){o=null;return}C=M?d.position-M.position:0}else r(g);s.forEach(A=>{A(n.value,S,{delta:C,type:Dn.pop,direction:C?C>0?Tn.forward:Tn.back:Tn.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const S=s.indexOf(d);S>-1&&s.splice(S,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(J({},d.state,{scroll:Dr()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function mo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Dr():null}}function Ad(t){const{history:e,location:n}=window,r={value:Rc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Td()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=J({},e.state,mo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=J({},s.value,e.state,{forward:c,scroll:Dr()});i(u.current,u,!0);const h=J({},mo(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Cd(t){t=vd(t);const e=Ad(t),n=Sd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:bd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Od(t){return typeof t=="string"||t&&typeof t=="object"}function Tc(t){return typeof t=="string"||typeof t=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Sc=Symbol("");var go;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(go||(go={}));function on(t,e){return J(new Error,{type:t,[Sc]:!0},e)}function et(t,e){return t instanceof Error&&Sc in t&&(e==null||!!(t.type&e))}const _o="[^/]+?",Pd={sensitive:!1,strict:!1,start:!0,end:!0},kd=/[.+*?^${}()[\]/\\]/g;function Nd(t,e){const n=J({},Pd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(kd,"\\$&"),g+=40;else if(d.type===1){const{value:S,repeatable:M,optional:C,regexp:A}=d;i.push({name:S,repeatable:M,optional:C});const L=A||_o;if(L!==_o){g+=10;try{new RegExp(`(${L})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${S}" (${L}): `+W.message)}}let H=M?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(H=C&&l.length<2?`(?:/${H})`:"/"+H),C&&(H+="?"),s+=H,g+=20,C&&(g+=-8),M&&(g+=-20),L===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",S=i[d-1];h[S.name]=g&&S.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:S,repeatable:M,optional:C}=g,A=S in l?l[S]:"";if($e(A)&&!M)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const L=$e(A)?A.join("/"):A;if(!L)if(C)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);u+=L}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Dd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Dd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(vo(r))return 1;if(vo(s))return-1}return s.length-r.length}function vo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Md={type:0,value:""},Ld=/[a-zA-Z0-9_]/;function Ud(t){if(!t)return[[]];if(t==="/")return[[Md]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Ld.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Bd(t,e,n){const r=Nd(Ud(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Fd(t,e){const n=[],r=new Map;e=Eo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const g=!d,S=$d(u);S.aliasOf=d&&d.record;const M=Eo(e,u),C=[S];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of H)C.push(J({},S,{components:d?d.record.components:S.components,path:W,aliasOf:d?d.record:S}))}let A,L;for(const H of C){const{path:W}=H;if(h&&W[0]!=="/"){const P=h.record.path,oe=P[P.length-1]==="/"?"":"/";H.path=h.record.path+(W&&oe+W)}if(A=Bd(H,h,M),d?d.alias.push(A):(L=L||A,L!==A&&L.alias.push(A),g&&u.name&&!bo(A)&&o(u.name)),S.children){const P=S.children;for(let oe=0;oe<P.length;oe++)i(P[oe],A,d&&d.children[oe])}d=d||A,c(A)}return L?()=>{o(L)}:Rn}function o(u){if(Tc(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&xd(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ac(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!bo(u)&&r.set(u.record.name,u)}function l(u,h){let d,g={},S,M;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw on(1,{location:u});M=d.record.name,g=J(yo(h.params,d.keys.filter(L=>!L.optional).map(L=>L.name)),u.params&&yo(u.params,d.keys.map(L=>L.name))),S=d.stringify(g)}else if("path"in u)S=u.path,d=n.find(L=>L.re.test(S)),d&&(g=d.parse(S),M=d.record.name);else{if(d=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!d)throw on(1,{location:u,currentLocation:h});M=d.record.name,g=J({},h.params,u.params),S=d.stringify(g)}const C=[];let A=d;for(;A;)C.unshift(A.record),A=A.parent;return{name:M,path:S,params:g,matched:C,meta:jd(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function yo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function $d(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Hd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Hd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function bo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jd(t){return t.reduce((e,n)=>J(e,n.meta),{})}function Eo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ac(t,e){return e.children.some(n=>n===t||Ac(t,n))}const Cc=/#/g,Vd=/&/g,qd=/\//g,Wd=/=/g,zd=/\?/g,Oc=/\+/g,Kd=/%5B/g,Gd=/%5D/g,Pc=/%5E/g,Jd=/%60/g,kc=/%7B/g,Xd=/%7C/g,Nc=/%7D/g,Yd=/%20/g;function hi(t){return encodeURI(""+t).replace(Xd,"|").replace(Kd,"[").replace(Gd,"]")}function Qd(t){return hi(t).replace(kc,"{").replace(Nc,"}").replace(Pc,"^")}function Bs(t){return hi(t).replace(Oc,"%2B").replace(Yd,"+").replace(Cc,"%23").replace(Vd,"%26").replace(Jd,"`").replace(kc,"{").replace(Nc,"}").replace(Pc,"^")}function Zd(t){return Bs(t).replace(Wd,"%3D")}function eh(t){return hi(t).replace(Cc,"%23").replace(zd,"%3F")}function th(t){return t==null?"":eh(t).replace(qd,"%2F")}function hr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function nh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Oc," "),o=i.indexOf("="),a=hr(o<0?i:i.slice(0,o)),c=o<0?null:hr(i.slice(o+1));if(a in e){let l=e[a];$e(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function wo(t){let e="";for(let n in t){const r=t[n];if(n=Zd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&Bs(i)):[r&&Bs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function rh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$e(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const sh=Symbol(""),Io=Symbol(""),xr=Symbol(""),pi=Symbol(""),Fs=Symbol("");function vn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function pt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(on(4,{from:n,to:e})):h instanceof Error?a(h):Od(h)?a(on(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Yr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ih(a)){const l=(a.__vccOpts||a)[e];l&&s.push(pt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=fd(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&pt(d,n,r,i,o)()}))}}return s}function ih(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ro(t){const e=Ge(xr),n=Ge(pi),r=Ne(()=>e.resolve(Ke(t.to))),s=Ne(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(sn.bind(null,u));if(d>-1)return d;const g=To(c[l-2]);return l>1&&To(u)===g&&h[h.length-1].path!==g?h.findIndex(sn.bind(null,c[l-2])):d}),i=Ne(()=>s.value>-1&&lh(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&Ic(n.params,r.value.params));function a(c={}){return ch(c)?e[Ke(t.replace)?"replace":"push"](Ke(t.to)).catch(Rn):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const oh=tc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ro,setup(t,{slots:e}){const n=Bt(Ro(t)),{options:r}=Ge(xr),s=Ne(()=>({[So(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[So(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ec("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ah=oh;function ch(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$e(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function To(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const So=(t,e,n)=>t!=null?t:e!=null?e:n,uh=tc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ge(Fs),s=Ne(()=>t.route||r.value),i=Ge(Io,0),o=Ne(()=>{let l=Ke(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ne(()=>s.value.matched[o.value]);Yn(Io,Ne(()=>o.value+1)),Yn(sh,a),Yn(Fs,s);const c=Cu();return Qn(()=>[c.value,a.value,t.name],([l,u,h],[d,g,S])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!sn(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(M=>M(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ao(n.default,{Component:d,route:l});const g=h.props[u],S=g?g===!0?l.params:typeof g=="function"?g(l):g:null,C=Ec(d,J({},S,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ao(n.default,{Component:C,route:l})||C}}});function Ao(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fh=uh;function dh(t){const e=Fd(t.routes,t),n=t.parseQuery||nh,r=t.stringifyQuery||wo,s=t.history,i=vn(),o=vn(),a=vn(),c=ja(ut);let l=ut;Gt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Jr.bind(null,_=>""+_),h=Jr.bind(null,th),d=Jr.bind(null,hr);function g(_,k){let R,N;return Tc(_)?(R=e.getRecordMatcher(_),N=k):N=_,e.addRoute(N,R)}function S(_){const k=e.getRecordMatcher(_);k&&e.removeRoute(k)}function M(){return e.getRoutes().map(_=>_.record)}function C(_){return!!e.getRecordMatcher(_)}function A(_,k){if(k=J({},k||c.value),typeof _=="string"){const $=Xr(n,_,k.path),f=e.resolve({path:$.path},k),p=s.createHref($.fullPath);return J($,f,{params:d(f.params),hash:hr($.hash),redirectedFrom:void 0,href:p})}let R;if("path"in _)R=J({},_,{path:Xr(n,_.path,k.path).path});else{const $=J({},_.params);for(const f in $)$[f]==null&&delete $[f];R=J({},_,{params:h(_.params)}),k.params=h(k.params)}const N=e.resolve(R,k),G=_.hash||"";N.params=u(d(N.params));const te=pd(r,J({},_,{hash:Qd(G),path:N.path})),V=s.createHref(te);return J({fullPath:te,hash:G,query:r===wo?rh(_.query):_.query||{}},N,{redirectedFrom:void 0,href:V})}function L(_){return typeof _=="string"?Xr(n,_,c.value.path):J({},_)}function H(_,k){if(l!==_)return on(8,{from:k,to:_})}function W(_){return ve(_)}function P(_){return W(J(L(_),{replace:!0}))}function oe(_){const k=_.matched[_.matched.length-1];if(k&&k.redirect){const{redirect:R}=k;let N=typeof R=="function"?R(_):R;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=L(N):{path:N},N.params={}),J({query:_.query,hash:_.hash,params:"path"in N?{}:_.params},N)}}function ve(_,k){const R=l=A(_),N=c.value,G=_.state,te=_.force,V=_.replace===!0,$=oe(R);if($)return ve(J(L($),{state:typeof $=="object"?J({},G,$.state):G,force:te,replace:V}),k||R);const f=R;f.redirectedFrom=k;let p;return!te&&md(r,N,R)&&(p=on(16,{to:f,from:N}),$t(N,N,!0,!1)),(p?Promise.resolve(p):ue(f,N)).catch(m=>et(m)?et(m,2)?m:Te(m):ee(m,f,N)).then(m=>{if(m){if(et(m,2))return ve(J({replace:V},L(m.to),{state:typeof m.to=="object"?J({},G,m.to.state):G,force:te}),k||f)}else m=Ie(f,N,!0,V,G);return we(f,N,m),m})}function Pe(_,k){const R=H(_,k);return R?Promise.reject(R):Promise.resolve()}function ue(_,k){let R;const[N,G,te]=hh(_,k);R=Yr(N.reverse(),"beforeRouteLeave",_,k);for(const $ of N)$.leaveGuards.forEach(f=>{R.push(pt(f,_,k))});const V=Pe.bind(null,_,k);return R.push(V),jt(R).then(()=>{R=[];for(const $ of i.list())R.push(pt($,_,k));return R.push(V),jt(R)}).then(()=>{R=Yr(G,"beforeRouteUpdate",_,k);for(const $ of G)$.updateGuards.forEach(f=>{R.push(pt(f,_,k))});return R.push(V),jt(R)}).then(()=>{R=[];for(const $ of _.matched)if($.beforeEnter&&!k.matched.includes($))if($e($.beforeEnter))for(const f of $.beforeEnter)R.push(pt(f,_,k));else R.push(pt($.beforeEnter,_,k));return R.push(V),jt(R)}).then(()=>(_.matched.forEach($=>$.enterCallbacks={}),R=Yr(te,"beforeRouteEnter",_,k),R.push(V),jt(R))).then(()=>{R=[];for(const $ of o.list())R.push(pt($,_,k));return R.push(V),jt(R)}).catch($=>et($,8)?$:Promise.reject($))}function we(_,k,R){for(const N of a.list())N(_,k,R)}function Ie(_,k,R,N,G){const te=H(_,k);if(te)return te;const V=k===ut,$=Gt?history.state:{};R&&(N||V?s.replace(_.fullPath,J({scroll:V&&$&&$.scroll},G)):s.push(_.fullPath,G)),c.value=_,$t(_,k,R,V),Te()}let se;function Re(){se||(se=s.listen((_,k,R)=>{if(!mn.listening)return;const N=A(_),G=oe(N);if(G){ve(J(G,{replace:!0}),N).catch(Rn);return}l=N;const te=c.value;Gt&&Id(po(te.fullPath,R.delta),Dr()),ue(N,te).catch(V=>et(V,12)?V:et(V,2)?(ve(V.to,N).then($=>{et($,20)&&!R.delta&&R.type===Dn.pop&&s.go(-1,!1)}).catch(Rn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),ee(V,N,te))).then(V=>{V=V||Ie(N,te,!1),V&&(R.delta&&!et(V,8)?s.go(-R.delta,!1):R.type===Dn.pop&&et(V,20)&&s.go(-1,!1)),we(N,te,V)}).catch(Rn)}))}let ye=vn(),ct=vn(),ie;function ee(_,k,R){Te(_);const N=ct.list();return N.length?N.forEach(G=>G(_,k,R)):console.error(_),Promise.reject(_)}function X(){return ie&&c.value!==ut?Promise.resolve():new Promise((_,k)=>{ye.add([_,k])})}function Te(_){return ie||(ie=!_,Re(),ye.list().forEach(([k,R])=>_?R(_):k()),ye.reset()),_}function $t(_,k,R,N){const{scrollBehavior:G}=t;if(!Gt||!G)return Promise.resolve();const te=!R&&Rd(po(_.fullPath,0))||(N||!R)&&history.state&&history.state.scroll||null;return za().then(()=>G(_,k,te)).then(V=>V&&wd(V)).catch(V=>ee(V,_,k))}const Ze=_=>s.go(_);let He;const ke=new Set,mn={currentRoute:c,listening:!0,addRoute:g,removeRoute:S,hasRoute:C,getRoutes:M,resolve:A,options:t,push:W,replace:P,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ct.add,isReady:X,install(_){const k=this;_.component("RouterLink",ah),_.component("RouterView",fh),_.config.globalProperties.$router=k,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(c)}),Gt&&!He&&c.value===ut&&(He=!0,W(s.location).catch(G=>{}));const R={};for(const G in ut)R[G]=Ne(()=>c.value[G]);_.provide(xr,k),_.provide(pi,Bt(R)),_.provide(Fs,c);const N=_.unmount;ke.add(_),_.unmount=function(){ke.delete(_),ke.size<1&&(l=ut,se&&se(),se=null,c.value=ut,He=!1,ie=!1),N()}}};return mn}function jt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function hh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>sn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>sn(l,c))||s.push(c))}return[n,r,s]}function Y_(){return Ge(xr)}function Q_(){return Ge(pi)}const ph=()=>{console.log(`\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D
\u2588\u2588\u2551\u2591\u2591\u255A\u2550\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u255A\u2588\u2588\u2588\u2588\u2588\u2557\u2591
\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u255D\u2591\u2588\u2588\u2554\u2550\u2550\u255D\u2591\u2591\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2591\u255A\u2550\u2550\u2550\u2588\u2588\u2557
\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D
\u2591\u255A\u2550\u2550\u2550\u2550\u255D\u2591\u255A\u2550\u255D\u2591\u2591\u255A\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u255D\u2591\u2591\u255A\u2550\u255D\u255A\u2550\u255D\u2591\u2591\u2591\u2591\u2591\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D\u2591\u2591\u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u255D\u2591`),console.log("deliver chirps to only your best friends!"),console.log("Follow me on Twitter if you're interested! @wintu520")};class mh{constructor(){this._status=Bt({queueViews:[],currentView:null})}get status(){return this._status}show(e,n={}){this._status.currentView={component:ja(e),bindData:n}}setView(e,n={}){if(this._status.currentView){this.queueViews.push({component:e,bindData:n});return}this.show(e,n)}close(){this._status.currentView=null,this._status.queueViews.length&&this.show(...this._status.queueViews.shift())}}const Co=new mh;const gh={class:"app"},_h={__name:"App",setup(t){const e=()=>document.documentElement.style.setProperty("--vh",`${window.innerHeight/100}px`);window.addEventListener("resize",e),ci(()=>window.removeEventListener("resize",e)),e(),ph();const n=Co.status;return(r,s)=>{const i=of("router-view");return Ds(),Sf("div",gh,[ge(i,{class:"container"}),Ke(n).currentView?(Ds(),gc(af(Ke(n).currentView.component),{key:0,class:"overlay",bind:Ke(n).currentView.bindData,onClose:s[0]||(s[0]=o=>Ke(Co).close())},null,40,["bind"])):Pf("",!0)])}}};var Z_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dc={exports:{}},mi={exports:{}},xc=function(e,n){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(n,s)}},yh=xc,gi=Object.prototype.toString,_i=function(t){return function(e){var n=gi.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function Ft(t){return t=t.toLowerCase(),function(n){return _i(n)===t}}function vi(t){return Array.isArray(t)}function pr(t){return typeof t>"u"}function bh(t){return t!==null&&!pr(t)&&t.constructor!==null&&!pr(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Mc=Ft("ArrayBuffer");function Eh(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Mc(t.buffer),e}function wh(t){return typeof t=="string"}function Ih(t){return typeof t=="number"}function Lc(t){return t!==null&&typeof t=="object"}function nr(t){if(_i(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var Rh=Ft("Date"),Th=Ft("File"),Sh=Ft("Blob"),Ah=Ft("FileList");function yi(t){return gi.call(t)==="[object Function]"}function Ch(t){return Lc(t)&&yi(t.pipe)}function Oh(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||gi.call(t)===e||yi(t.toString)&&t.toString()===e)}var Ph=Ft("URLSearchParams");function kh(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Nh(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function bi(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),vi(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function $s(){var t={};function e(s,i){nr(t[i])&&nr(s)?t[i]=$s(t[i],s):nr(s)?t[i]=$s({},s):vi(s)?t[i]=s.slice():t[i]=s}for(var n=0,r=arguments.length;n<r;n++)bi(arguments[n],e);return t}function Dh(t,e,n){return bi(e,function(s,i){n&&typeof s=="function"?t[i]=yh(s,n):t[i]=s}),t}function xh(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function Mh(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)}function Lh(t,e,n){var r,s,i,o={};e=e||{};do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)i=r[s],o[i]||(e[i]=t[i],o[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e}function Uh(t,e,n){t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return r!==-1&&r===n}function Bh(t){if(!t)return null;var e=t.length;if(pr(e))return null;for(var n=new Array(e);e-- >0;)n[e]=t[e];return n}var Fh=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),de={isArray:vi,isArrayBuffer:Mc,isBuffer:bh,isFormData:Oh,isArrayBufferView:Eh,isString:wh,isNumber:Ih,isObject:Lc,isPlainObject:nr,isUndefined:pr,isDate:Rh,isFile:Th,isBlob:Sh,isFunction:yi,isStream:Ch,isURLSearchParams:Ph,isStandardBrowserEnv:Nh,forEach:bi,merge:$s,extend:Dh,trim:kh,stripBOM:xh,inherits:Mh,toFlatObject:Lh,kindOf:_i,kindOfTest:Ft,endsWith:Uh,toArray:Bh,isTypedArray:Fh,isFileList:Ah},Vt=de;function Oo(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Uc=function(e,n,r){if(!n)return e;var s;if(r)s=r(n);else if(Vt.isURLSearchParams(n))s=n.toString();else{var i=[];Vt.forEach(n,function(c,l){c===null||typeof c>"u"||(Vt.isArray(c)?l=l+"[]":c=[c],Vt.forEach(c,function(h){Vt.isDate(h)?h=h.toISOString():Vt.isObject(h)&&(h=JSON.stringify(h)),i.push(Oo(l)+"="+Oo(h))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},$h=de;function Mr(){this.handlers=[]}Mr.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};Mr.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Mr.prototype.forEach=function(e){$h.forEach(this.handlers,function(r){r!==null&&e(r)})};var Hh=Mr,jh=de,Vh=function(e,n){jh.forEach(e,function(s,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=s,delete e[i])})},Bc=de;function an(t,e,n,r,s){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}Bc.inherits(an,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Fc=an.prototype,$c={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){$c[t]={value:t}});Object.defineProperties(an,$c);Object.defineProperty(Fc,"isAxiosError",{value:!0});an.from=function(t,e,n,r,s,i){var o=Object.create(Fc);return Bc.toFlatObject(t,o,function(c){return c!==Error.prototype}),an.call(o,t.message,e,n,r,s),o.name=t.name,i&&Object.assign(o,i),o};var pn=an,Hc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xe=de;function qh(t,e){e=e||new FormData;var n=[];function r(i){return i===null?"":xe.isDate(i)?i.toISOString():xe.isArrayBuffer(i)||xe.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function s(i,o){if(xe.isPlainObject(i)||xe.isArray(i)){if(n.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);n.push(i),xe.forEach(i,function(c,l){if(!xe.isUndefined(c)){var u=o?o+"."+l:l,h;if(c&&!o&&typeof c=="object"){if(xe.endsWith(l,"{}"))c=JSON.stringify(c);else if(xe.endsWith(l,"[]")&&(h=xe.toArray(c))){h.forEach(function(d){!xe.isUndefined(d)&&e.append(u,r(d))});return}}s(c,u)}}),n.pop()}else e.append(o,r(i))}return s(t),e}var jc=qh,Qr,Po;function Wh(){if(Po)return Qr;Po=1;var t=pn;return Qr=function(n,r,s){var i=s.config.validateStatus;!s.status||!i||i(s.status)?n(s):r(new t("Request failed with status code "+s.status,[t.ERR_BAD_REQUEST,t.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))},Qr}var Zr,ko;function zh(){if(ko)return Zr;ko=1;var t=de;return Zr=t.isStandardBrowserEnv()?function(){return{write:function(r,s,i,o,a,c){var l=[];l.push(r+"="+encodeURIComponent(s)),t.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),t.isString(o)&&l.push("path="+o),t.isString(a)&&l.push("domain="+a),c===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Zr}var Kh=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Gh=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},Jh=Kh,Xh=Gh,Vc=function(e,n){return e&&!Jh(n)?Xh(e,n):n},es,No;function Yh(){if(No)return es;No=1;var t=de,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return es=function(r){var s={},i,o,a;return r&&t.forEach(r.split(`
`),function(l){if(a=l.indexOf(":"),i=t.trim(l.substr(0,a)).toLowerCase(),o=t.trim(l.substr(a+1)),i){if(s[i]&&e.indexOf(i)>=0)return;i==="set-cookie"?s[i]=(s[i]?s[i]:[]).concat([o]):s[i]=s[i]?s[i]+", "+o:o}}),s},es}var ts,Do;function Qh(){if(Do)return ts;Do=1;var t=de;return ts=t.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),s;function i(o){var a=o;return n&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=i(window.location.href),function(a){var c=t.isString(a)?i(a):a;return c.protocol===s.protocol&&c.host===s.host}}():function(){return function(){return!0}}(),ts}var ns,xo;function Lr(){if(xo)return ns;xo=1;var t=pn,e=de;function n(r){t.call(this,r==null?"canceled":r,t.ERR_CANCELED),this.name="CanceledError"}return e.inherits(n,t,{__CANCEL__:!0}),ns=n,ns}var rs,Mo;function Zh(){return Mo||(Mo=1,rs=function(e){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}),rs}var ss,Lo;function Uo(){if(Lo)return ss;Lo=1;var t=de,e=Wh(),n=zh(),r=Uc,s=Vc,i=Yh(),o=Qh(),a=Hc,c=pn,l=Lr(),u=Zh();return ss=function(d){return new Promise(function(S,M){var C=d.data,A=d.headers,L=d.responseType,H;function W(){d.cancelToken&&d.cancelToken.unsubscribe(H),d.signal&&d.signal.removeEventListener("abort",H)}t.isFormData(C)&&t.isStandardBrowserEnv()&&delete A["Content-Type"];var P=new XMLHttpRequest;if(d.auth){var oe=d.auth.username||"",ve=d.auth.password?unescape(encodeURIComponent(d.auth.password)):"";A.Authorization="Basic "+btoa(oe+":"+ve)}var Pe=s(d.baseURL,d.url);P.open(d.method.toUpperCase(),r(Pe,d.params,d.paramsSerializer),!0),P.timeout=d.timeout;function ue(){if(!!P){var se="getAllResponseHeaders"in P?i(P.getAllResponseHeaders()):null,Re=!L||L==="text"||L==="json"?P.responseText:P.response,ye={data:Re,status:P.status,statusText:P.statusText,headers:se,config:d,request:P};e(function(ie){S(ie),W()},function(ie){M(ie),W()},ye),P=null}}if("onloadend"in P?P.onloadend=ue:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(ue)},P.onabort=function(){!P||(M(new c("Request aborted",c.ECONNABORTED,d,P)),P=null)},P.onerror=function(){M(new c("Network Error",c.ERR_NETWORK,d,P,P)),P=null},P.ontimeout=function(){var Re=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded",ye=d.transitional||a;d.timeoutErrorMessage&&(Re=d.timeoutErrorMessage),M(new c(Re,ye.clarifyTimeoutError?c.ETIMEDOUT:c.ECONNABORTED,d,P)),P=null},t.isStandardBrowserEnv()){var we=(d.withCredentials||o(Pe))&&d.xsrfCookieName?n.read(d.xsrfCookieName):void 0;we&&(A[d.xsrfHeaderName]=we)}"setRequestHeader"in P&&t.forEach(A,function(Re,ye){typeof C>"u"&&ye.toLowerCase()==="content-type"?delete A[ye]:P.setRequestHeader(ye,Re)}),t.isUndefined(d.withCredentials)||(P.withCredentials=!!d.withCredentials),L&&L!=="json"&&(P.responseType=d.responseType),typeof d.onDownloadProgress=="function"&&P.addEventListener("progress",d.onDownloadProgress),typeof d.onUploadProgress=="function"&&P.upload&&P.upload.addEventListener("progress",d.onUploadProgress),(d.cancelToken||d.signal)&&(H=function(se){!P||(M(!se||se&&se.type?new l:se),P.abort(),P=null)},d.cancelToken&&d.cancelToken.subscribe(H),d.signal&&(d.signal.aborted?H():d.signal.addEventListener("abort",H))),C||(C=null);var Ie=u(Pe);if(Ie&&["http","https","file"].indexOf(Ie)===-1){M(new c("Unsupported protocol "+Ie+":",c.ERR_BAD_REQUEST,d));return}P.send(C)})},ss}var is,Bo;function ep(){return Bo||(Bo=1,is=null),is}var le=de,Fo=Vh,$o=pn,tp=Hc,np=jc,rp={"Content-Type":"application/x-www-form-urlencoded"};function Ho(t,e){!le.isUndefined(t)&&le.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function sp(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Uo()),t}function ip(t,e,n){if(le.isString(t))try{return(e||JSON.parse)(t),le.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var Ur={transitional:tp,adapter:sp(),transformRequest:[function(e,n){if(Fo(n,"Accept"),Fo(n,"Content-Type"),le.isFormData(e)||le.isArrayBuffer(e)||le.isBuffer(e)||le.isStream(e)||le.isFile(e)||le.isBlob(e))return e;if(le.isArrayBufferView(e))return e.buffer;if(le.isURLSearchParams(e))return Ho(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r=le.isObject(e),s=n&&n["Content-Type"],i;if((i=le.isFileList(e))||r&&s==="multipart/form-data"){var o=this.env&&this.env.FormData;return np(i?{"files[]":e}:e,o&&new o)}else if(r||s==="application/json")return Ho(n,"application/json"),ip(e);return e}],transformResponse:[function(e){var n=this.transitional||Ur.transitional,r=n&&n.silentJSONParsing,s=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||s&&le.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?$o.from(o,$o.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ep()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};le.forEach(["delete","get","head"],function(e){Ur.headers[e]={}});le.forEach(["post","put","patch"],function(e){Ur.headers[e]=le.merge(rp)});var Ei=Ur,op=de,ap=Ei,cp=function(e,n,r){var s=this||ap;return op.forEach(r,function(o){e=o.call(s,e,n)}),e},os,jo;function qc(){return jo||(jo=1,os=function(e){return!!(e&&e.__CANCEL__)}),os}var Vo=de,as=cp,lp=qc(),up=Ei,fp=Lr();function cs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new fp}var dp=function(e){cs(e),e.headers=e.headers||{},e.data=as.call(e,e.data,e.headers,e.transformRequest),e.headers=Vo.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Vo.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var n=e.adapter||up.adapter;return n(e).then(function(s){return cs(e),s.data=as.call(e,s.data,s.headers,e.transformResponse),s},function(s){return lp(s)||(cs(e),s&&s.response&&(s.response.data=as.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},Ae=de,Wc=function(e,n){n=n||{};var r={};function s(u,h){return Ae.isPlainObject(u)&&Ae.isPlainObject(h)?Ae.merge(u,h):Ae.isPlainObject(h)?Ae.merge({},h):Ae.isArray(h)?h.slice():h}function i(u){if(Ae.isUndefined(n[u])){if(!Ae.isUndefined(e[u]))return s(void 0,e[u])}else return s(e[u],n[u])}function o(u){if(!Ae.isUndefined(n[u]))return s(void 0,n[u])}function a(u){if(Ae.isUndefined(n[u])){if(!Ae.isUndefined(e[u]))return s(void 0,e[u])}else return s(void 0,n[u])}function c(u){if(u in n)return s(e[u],n[u]);if(u in e)return s(void 0,e[u])}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return Ae.forEach(Object.keys(e).concat(Object.keys(n)),function(h){var d=l[h]||i,g=d(h);Ae.isUndefined(g)&&d!==c||(r[h]=g)}),r},ls,qo;function zc(){return qo||(qo=1,ls={version:"0.27.2"}),ls}var hp=zc().version,mt=pn,wi={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){wi[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var Wo={};wi.transitional=function(e,n,r){function s(i,o){return"[Axios v"+hp+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,a){if(e===!1)throw new mt(s(o," has been removed"+(n?" in "+n:"")),mt.ERR_DEPRECATED);return n&&!Wo[o]&&(Wo[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function pp(t,e,n){if(typeof t!="object")throw new mt("options must be an object",mt.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(t),s=r.length;s-- >0;){var i=r[s],o=e[i];if(o){var a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new mt("option "+i+" must be "+c,mt.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new mt("Unknown option "+i,mt.ERR_BAD_OPTION)}}var mp={assertOptions:pp,validators:wi},Kc=de,gp=Uc,zo=Hh,Ko=dp,Br=Wc,_p=Vc,Gc=mp,qt=Gc.validators;function cn(t){this.defaults=t,this.interceptors={request:new zo,response:new zo}}cn.prototype.request=function(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Br(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&Gc.assertOptions(r,{silentJSONParsing:qt.transitional(qt.boolean),forcedJSONParsing:qt.transitional(qt.boolean),clarifyTimeoutError:qt.transitional(qt.boolean)},!1);var s=[],i=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(i=i&&g.synchronous,s.unshift(g.fulfilled,g.rejected))});var o=[];this.interceptors.response.forEach(function(g){o.push(g.fulfilled,g.rejected)});var a;if(!i){var c=[Ko,void 0];for(Array.prototype.unshift.apply(c,s),c=c.concat(o),a=Promise.resolve(n);c.length;)a=a.then(c.shift(),c.shift());return a}for(var l=n;s.length;){var u=s.shift(),h=s.shift();try{l=u(l)}catch(d){h(d);break}}try{a=Ko(l)}catch(d){return Promise.reject(d)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};cn.prototype.getUri=function(e){e=Br(this.defaults,e);var n=_p(e.baseURL,e.url);return gp(n,e.params,e.paramsSerializer)};Kc.forEach(["delete","get","head","options"],function(e){cn.prototype[e]=function(n,r){return this.request(Br(r||{},{method:e,url:n,data:(r||{}).data}))}});Kc.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Br(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}cn.prototype[e]=n(),cn.prototype[e+"Form"]=n(!0)});var vp=cn,us,Go;function yp(){if(Go)return us;Go=1;var t=Lr();function e(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(o){r=o});var s=this;this.promise.then(function(i){if(!!s._listeners){var o,a=s._listeners.length;for(o=0;o<a;o++)s._listeners[o](i);s._listeners=null}}),this.promise.then=function(i){var o,a=new Promise(function(c){s.subscribe(c),o=c}).then(i);return a.cancel=function(){s.unsubscribe(o)},a},n(function(o){s.reason||(s.reason=new t(o),r(s.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]},e.prototype.unsubscribe=function(r){if(!!this._listeners){var s=this._listeners.indexOf(r);s!==-1&&this._listeners.splice(s,1)}},e.source=function(){var r,s=new e(function(o){r=o});return{token:s,cancel:r}},us=e,us}var fs,Jo;function bp(){return Jo||(Jo=1,fs=function(e){return function(r){return e.apply(null,r)}}),fs}var ds,Xo;function Ep(){if(Xo)return ds;Xo=1;var t=de;return ds=function(n){return t.isObject(n)&&n.isAxiosError===!0},ds}var Yo=de,wp=xc,rr=vp,Ip=Wc,Rp=Ei;function Jc(t){var e=new rr(t),n=wp(rr.prototype.request,e);return Yo.extend(n,rr.prototype,e),Yo.extend(n,e),n.create=function(s){return Jc(Ip(t,s))},n}var Ee=Jc(Rp);Ee.Axios=rr;Ee.CanceledError=Lr();Ee.CancelToken=yp();Ee.isCancel=qc();Ee.VERSION=zc().version;Ee.toFormData=jc;Ee.AxiosError=pn;Ee.Cancel=Ee.CanceledError;Ee.all=function(e){return Promise.all(e)};Ee.spread=bp();Ee.isAxiosError=Ep();mi.exports=Ee;mi.exports.default=Ee;(function(t){t.exports=mi.exports})(Dc);const Tp=vh(Dc.exports);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Sp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ap=function(t){const e=Xc(t);return Yc.encodeByteArray(e,!0)},Qc=function(t){return Ap(t).replace(/\./g,"")},Cp=function(t){try{return Yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function kp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dp(){const t=pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xp(){return typeof indexedDB=="object"}function Mp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="FirebaseError";class It extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Lp,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Up(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new It(s,a,r)}}function Up(t,e){return t.replace(Bp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Bp=/\{\$([^}]+)}/g;function Fp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qo(i)&&Qo(o)){if(!mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $p(t,e){const n=new Hp(t,e);return n.subscribe.bind(n)}class Hp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hs),s.error===void 0&&(s.error=hs),s.complete===void 0&&(s.complete=hs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Op;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wp(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qp(t){return t===Ct?void 0:t}function Wp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Kp={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Gp=ne.INFO,Jp={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Xp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Jp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=Gp,this._logHandler=Xp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Yp=(t,e)=>e.some(n=>t instanceof n);let Zo,ea;function Qp(){return Zo||(Zo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zp(){return ea||(ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const el=new WeakMap,Hs=new WeakMap,tl=new WeakMap,ps=new WeakMap,Ii=new WeakMap;function em(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Et(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&el.set(n,t)}).catch(()=>{}),Ii.set(e,t),e}function tm(t){if(Hs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hs.set(t,e)}let js={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nm(t){js=t(js)}function rm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ms(this),e,...n);return tl.set(r,e.sort?e.sort():[e]),Et(r)}:Zp().includes(t)?function(...e){return t.apply(ms(this),e),Et(el.get(this))}:function(...e){return Et(t.apply(ms(this),e))}}function sm(t){return typeof t=="function"?rm(t):(t instanceof IDBTransaction&&tm(t),Yp(t,Qp())?new Proxy(t,js):t)}function Et(t){if(t instanceof IDBRequest)return em(t);if(ps.has(t))return ps.get(t);const e=sm(t);return e!==t&&(ps.set(t,e),Ii.set(e,t)),e}const ms=t=>Ii.get(t);function im(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Et(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Et(o.result),c.oldVersion,c.newVersion,Et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const om=["get","getKey","getAll","getAllKeys","count"],am=["put","add","delete","clear"],gs=new Map;function ta(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gs.get(e))return gs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=am.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||om.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return gs.set(e,i),i}nm(t=>({...t,get:(e,n,r)=>ta(e,n)||t.get(e,n,r),has:(e,n)=>!!ta(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vs="@firebase/app",na="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Zc("@firebase/app"),um="@firebase/app-compat",fm="@firebase/analytics-compat",dm="@firebase/analytics",hm="@firebase/app-check-compat",pm="@firebase/app-check",mm="@firebase/auth",gm="@firebase/auth-compat",_m="@firebase/database",vm="@firebase/database-compat",ym="@firebase/functions",bm="@firebase/functions-compat",Em="@firebase/installations",wm="@firebase/installations-compat",Im="@firebase/messaging",Rm="@firebase/messaging-compat",Tm="@firebase/performance",Sm="@firebase/performance-compat",Am="@firebase/remote-config",Cm="@firebase/remote-config-compat",Om="@firebase/storage",Pm="@firebase/storage-compat",km="@firebase/firestore",Nm="@firebase/firestore-compat",Dm="firebase",xm="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="[DEFAULT]",Mm={[Vs]:"fire-core",[um]:"fire-core-compat",[dm]:"fire-analytics",[fm]:"fire-analytics-compat",[pm]:"fire-app-check",[hm]:"fire-app-check-compat",[mm]:"fire-auth",[gm]:"fire-auth-compat",[_m]:"fire-rtdb",[vm]:"fire-rtdb-compat",[ym]:"fire-fn",[bm]:"fire-fn-compat",[Em]:"fire-iid",[wm]:"fire-iid-compat",[Im]:"fire-fcm",[Rm]:"fire-fcm-compat",[Tm]:"fire-perf",[Sm]:"fire-perf-compat",[Am]:"fire-rc",[Cm]:"fire-rc-compat",[Om]:"fire-gcs",[Pm]:"fire-gcs-compat",[km]:"fire-fst",[Nm]:"fire-fst-compat","fire-js":"fire-js",[Dm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map,qs=new Map;function Lm(t,e){try{t.container.addComponent(e)}catch(n){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(qs.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;qs.set(e,t);for(const n of gr.values())Lm(n,t);return!0}function rl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new Bn("app","Firebase",Um);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=xm;function Fm(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:nl,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Lt.create("bad-app-name",{appName:String(r)});const s=gr.get(r);if(s){if(mr(t,s.options)&&mr(n,s.config))return s;throw Lt.create("duplicate-app",{appName:r})}const i=new zp(r);for(const a of qs.values())i.addComponent(a);const o=new Bm(t,n,i);return gr.set(r,o),o}function $m(t=nl){const e=gr.get(t);if(!e)throw Lt.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let s=(r=Mm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(a.join(" "));return}xn(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="firebase-heartbeat-database",jm=1,Mn="firebase-heartbeat-store";let _s=null;function sl(){return _s||(_s=im(Hm,jm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mn)}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),_s}async function Vm(t){var e;try{return(await sl()).transaction(Mn).objectStore(Mn).get(il(t))}catch(n){if(n instanceof It)Mt.warn(n.message);else{const r=Lt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Mt.warn(r.message)}}}async function ra(t,e){var n;try{const s=(await sl()).transaction(Mn,"readwrite");return await s.objectStore(Mn).put(e,il(t)),s.done}catch(r){if(r instanceof It)Mt.warn(r.message);else{const s=Lt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Mt.warn(s.message)}}}function il(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=1024,Wm=30*24*60*60*1e3;class zm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Wm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sa(),{heartbeatsToSend:n,unsentEntries:r}=Km(this._heartbeatsCache.heartbeats),s=Qc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sa(){return new Date().toISOString().substring(0,10)}function Km(t,e=qm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ia(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ia(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Gm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xp()?Mp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ra(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ra(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ia(t){return Qc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t){xn(new ln("platform-logger",e=>new cm(e),"PRIVATE")),xn(new ln("heartbeat",e=>new zm(e),"PRIVATE")),Zt(Vs,na,t),Zt(Vs,na,"esm2017"),Zt("fire-js","")}Jm("");var Xm="firebase",Ym="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(Xm,Ym,"app");const Qm={apiKey:"AIzaSyCtX5DINMtY2VOYeAKDicXXVkTeVo9UPJg",authDomain:"chirpers-dc194.firebaseapp.com",projectId:"chirpers-dc194",storageBucket:"chirpers-dc194.appspot.com",messagingSenderId:"285039285899",appId:"1:285039285899:web:cea9047b72b3f9ae83268e",measurementId:"G-FNZSH5KKLK"},Zm=Fm(Qm);function Ri(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ol(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eg=ol,al=new Bn("auth","Firebase",ol());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new Zc("@firebase/auth");function sr(t,...e){oa.logLevel<=ne.ERROR&&oa.error(`Auth (${$r}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,...e){throw Ti(t,...e)}function Je(t,...e){return Ti(t,...e)}function cl(t,e,n){const r=Object.assign(Object.assign({},eg()),{[e]:n});return new Bn("auth","Firebase",r).create(e,{appName:t.name})}function tg(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qe(t,"argument-error"),cl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ti(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return al.create(t,...e)}function B(t,e,...n){if(!t)throw Ti(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sr(e),new Error(e)}function ot(t,e){t||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map;function st(t){ot(t instanceof Function,"Expected a class definition");let e=aa.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,aa.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e){const n=rl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(mr(i,e!=null?e:{}))return s;Qe(s,"already-initialized")}return n.initialize({options:e})}function rg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sg(){return ca()==="http:"||ca()==="https:"}function ca(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sg()||kp()||"connection"in navigator)?navigator.onLine:!0}function og(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=Pp()||Np()}get(){return ig()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new $n(3e4,6e4);function lg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,r,s={}){return ul(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Fn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ll.fetch()(fl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ul(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ag),e);try{const s=new fg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gn(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cl(t,u,l);Qe(t,u)}}catch(s){if(s instanceof It)throw s;Qe(t,"network-request-failed")}}async function ug(t,e,n,r,s={}){const i=await Hr(t,e,n,r,s);return"mfaPendingCredential"in i&&Qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function fl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Si(t.config,s):`${t.config.apiScheme}://${s}`}class fg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),cg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Je(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dg(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function hg(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pg(t,e=!1){const n=Fr(t),r=await n.getIdToken(e),s=Ai(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Sn(vs(s.auth_time)),issuedAtTime:Sn(vs(s.iat)),expirationTime:Sn(vs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vs(t){return Number(t)*1e3}function Ai(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return sr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cp(r);return i?JSON.parse(i):(sr("Failed to decode base64 JWT payload"),null)}catch(i){return sr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function mg(t){const e=Ai(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof It&&gg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sn(this.lastLoginAt),this.creationTime=Sn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ln(t,hg(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bg(i.providerUserInfo):[],a=yg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function vg(t){const e=Fr(t);await _r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bg(t){return t.map(e=>{var{providerId:n}=e,r=Ri(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(t,e){const n=await ul(t,{},async()=>{const r=Fn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=fl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ll.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Eg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Un;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ri(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _g(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ln(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pg(this,e)}reload(){return vg(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _r(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ln(this,dg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,M=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:W,isAnonymous:P,providerData:oe,stsTokenManager:ve}=n;B(H&&ve,e,"internal-error");const Pe=Un.fromJSON(this.name,ve);B(typeof H=="string",e,"internal-error"),ft(h,e.name),ft(d,e.name),B(typeof W=="boolean",e,"internal-error"),B(typeof P=="boolean",e,"internal-error"),ft(g,e.name),ft(S,e.name),ft(M,e.name),ft(C,e.name),ft(A,e.name),ft(L,e.name);const ue=new Dt({uid:H,auth:e,email:d,emailVerified:W,displayName:h,isAnonymous:P,photoURL:S,phoneNumber:g,tenantId:M,stsTokenManager:Pe,createdAt:A,lastLoginAt:L});return oe&&Array.isArray(oe)&&(ue.providerData=oe.map(we=>Object.assign({},we))),C&&(ue._redirectEventId=C),ue}static async _fromIdTokenResponse(e,n,r=!1){const s=new Un;s.updateFromServerResponse(n);const i=new Dt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _r(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hl.type="NONE";const la=hl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e,n){return`firebase:${t}:${e}:${n}`}class en{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ir(this.userKey,s.apiKey,i),this.fullPersistenceKey=ir("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new en(st(la),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||st(la);const o=ir(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Dt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new en(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new en(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vl(e))return"Blackberry";if(yl(e))return"Webos";if(Ci(e))return"Safari";if((e.includes("chrome/")||ml(e))&&!e.includes("edge/"))return"Chrome";if(_l(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pl(t=pe()){return/firefox\//i.test(t)}function Ci(t=pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ml(t=pe()){return/crios\//i.test(t)}function gl(t=pe()){return/iemobile/i.test(t)}function _l(t=pe()){return/android/i.test(t)}function vl(t=pe()){return/blackberry/i.test(t)}function yl(t=pe()){return/webos/i.test(t)}function jr(t=pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wg(t=pe()){var e;return jr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ig(){return Dp()&&document.documentMode===10}function bl(t=pe()){return jr(t)||_l(t)||yl(t)||vl(t)||/windows phone/i.test(t)||gl(t)}function Rg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t,e=[]){let n;switch(t){case"Browser":n=ua(pe());break;case"Worker":n=`${ua(pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fa(this),this.idTokenSubscription=new fa(this),this.beforeStateQueue=new Tg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=al,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await _r(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=og()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fr(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=El(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Vr(t){return Fr(t)}class fa{constructor(e){this.auth=e,this.observer=null,this.addObserver=$p(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(t,e){return ug(t,"POST","/v1/accounts:signInWithIdp",lg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="http://localhost";class Ut extends wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ri(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ut(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tn(e,n)}buildRequest(){const e={requestUri:Ag,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Oi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Hn{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Hn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ut._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Hn{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Hn{constructor(){super("twitter.com")}static credential(e,n){return Ut._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ze.credential(n,r)}catch{return null}}}ze.TWITTER_SIGN_IN_METHOD="twitter.com";ze.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dt._fromIdTokenResponse(e,r,s),o=da(r);return new un({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=da(r);return new un({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function da(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends It{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vr(e,n,r,s)}}function Il(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vr._fromErrorAndOperation(t,i,e,r):i})}async function Cg(t,e,n=!1){const r=await Ln(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return un._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Ln(t,Il(s,i,e,t),n);B(o.idToken,s,"internal-error");const a=Ai(o.idToken);B(a,s,"internal-error");const{sub:c}=a;return B(t.uid===c,s,"user-mismatch"),un._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Qe(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(t,e,n=!1){const r="signIn",s=await Il(t,r,e),i=await un._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}const yr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yr,"1"),this.storage.removeItem(yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(){const t=pe();return Ci(t)||jr(t)}const Ng=1e3,Dg=10;class Tl extends Rl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kg()&&Rg(),this.fallbackToPolling=bl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ig()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Dg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ng)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tl.type="LOCAL";const xg=Tl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends Rl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sl.type="SESSION";const Al=Sl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Mg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Pi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function Ug(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function Bg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $g(){return Cl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="firebaseLocalStorageDb",Hg=1,br="firebaseLocalStorage",Pl="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wr(t,e){return t.transaction([br],e?"readwrite":"readonly").objectStore(br)}function jg(){const t=indexedDB.deleteDatabase(Ol);return new jn(t).toPromise()}function zs(){const t=indexedDB.open(Ol,Hg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(br,{keyPath:Pl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(br)?e(r):(r.close(),await jg(),e(await zs()))})})}async function ha(t,e,n){const r=Wr(t,!0).put({[Pl]:e,value:n});return new jn(r).toPromise()}async function Vg(t,e){const n=Wr(t,!1).get(e),r=await new jn(n).toPromise();return r===void 0?null:r.value}function pa(t,e){const n=Wr(t,!0).delete(e);return new jn(n).toPromise()}const qg=800,Wg=3;class kl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qr._getInstance($g()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bg(),!this.activeServiceWorker)return;this.sender=new Lg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zs();return await ha(e,yr,"1"),await pa(e,yr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ha(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wr(s,!1).getAll();return new jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kl.type="LOCAL";const zg=kl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Kg().appendChild(r)})}function Jg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $n(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e){return e?st(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends wl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xg(t){return Pg(t.auth,new ki(t),t.bypassAuthState)}function Yg(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Og(n,new ki(t),t.bypassAuthState)}async function Qg(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Cg(n,new ki(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xg;case"linkViaPopup":case"linkViaRedirect":return Qg;case"reauthViaPopup":case"reauthViaRedirect":return Yg;default:Qe(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new $n(2e3,1e4);class Jt extends Dl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Zg.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="pendingRedirect",or=new Map;class t_ extends Dl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=or.get(this.auth._key());if(!e){try{const r=await n_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}or.set(this.auth._key(),e)}return this.bypassAuthState||or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function n_(t,e){const n=Ml(e),r=xl(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function r_(t,e){return xl(t)._set(Ml(e),"true")}function s_(t,e){or.set(t._key(),e)}function xl(t){return st(t._redirectPersistence)}function Ml(t){return ir(e_,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t,e,n){return o_(t,e,n)}async function o_(t,e,n){const r=Vr(t);tg(t,e,Oi);const s=Nl(r,n);return await r_(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function a_(t,e){return await Vr(t)._initializationPromise,Ll(t,e,!1)}async function Ll(t,e,n=!1){const r=Vr(t),s=Nl(r,e),o=await new t_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=10*60*1e3;class l_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!u_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ul(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=c_&&this.cachedEventUids.clear(),this.cachedEventUids.has(ma(e))}saveEventToCache(e){this.cachedEventUids.add(ma(e)),this.lastProcessedEventTime=Date.now()}}function ma(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ul({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function u_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ul(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h_=/^https?/;async function p_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await f_(t);for(const n of e)try{if(m_(n))return}catch{}Qe(t,"unauthorized-domain")}function m_(t){const e=Ws(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!h_.test(n))return!1;if(d_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=new $n(3e4,6e4);function ga(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function __(t){return new Promise((e,n)=>{var r,s,i;function o(){ga(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ga(),n(Je(t,"network-request-failed"))},timeout:g_.get()})}if(!((s=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xe().gapi)===null||i===void 0)&&i.load)o();else{const a=Jg("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},Gg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ar=null,e})}let ar=null;function v_(t){return ar=ar||__(t),ar}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=new $n(5e3,15e3),b_="__/auth/iframe",E_="emulator/auth/iframe",w_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R_(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Si(e,E_):`https://${t.config.authDomain}/${b_}`,r={apiKey:e.apiKey,appName:t.name,v:$r},s=I_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fn(r).slice(1)}`}async function T_(t){const e=await v_(t),n=Xe().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:R_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Xe().setTimeout(()=>{i(o)},y_.get());function c(){Xe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A_=500,C_=600,O_="_blank",P_="http://localhost";class _a{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k_(t,e,n,r=A_,s=C_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},S_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=pe().toLowerCase();n&&(a=ml(l)?O_:n),pl(l)&&(e=e||P_,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,S])=>`${d}${g}=${S},`,"");if(wg(l)&&a!=="_self")return N_(e||"",a),new _a(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new _a(h)}function N_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="__/auth/handler",x_="emulator/auth/handler";function va(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:s};if(e instanceof Oi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Hn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${M_(t)}?${Fn(a).slice(1)}`}function M_({config:t}){return t.emulator?Si(t,x_):`https://${t.authDomain}/${D_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="webStorageSupport";class L_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Al,this._completeRedirectFn=Ll,this._overrideRedirectResult=s_}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=va(e,n,r,Ws(),s);return k_(e,o,Pi())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Ug(va(e,n,r,Ws(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await T_(e),r=new l_(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ys,{type:ys},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ys];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bl()||Ci()||jr()}}const U_=L_;var ya="@firebase/auth",ba="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $_(t){xn(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{B(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:El(t)},u=new Sg(a,c,l);return rg(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new ln("auth-internal",e=>{const n=Vr(e.getProvider("auth").getImmediate());return(r=>new B_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(ya,ba,F_(t)),Zt(ya,ba,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t=$m()){const e=rl(t,"auth");return e.isInitialized()?e.getImmediate():ng(t,{popupRedirectResolver:U_,persistence:[zg,xg,Al]})}$_("Browser");class j_{constructor(){this.status=Bt({isLoggedIn:!1,user:null,progress:!0}),this.auth=H_(Zm),this.auth.useDeviceLanguage(),this.auth.onAuthStateChanged(async e=>{this.status.progress=!1,e&&(this.status.progress=!1,this.status.isLoggedIn=!0,this.status.user=e)})}getStatus(){return this.status}login(){this.status.isLoggedIn||(this.status.progress=!0,i_(this.auth,new ze))}async redirectHandler(){try{const e=await a_(this.auth);if(!e)return;this.status.isLoggedIn=!0,this.status.user=e.user,this.status.progress=!1;const n=ze.credentialFromResult(e);await Tp.post("/api/auth/relate",{idToken:await this.status.user.getIdToken(),accessToken:n.accessToken,secret:n.secret})}catch(e){console.error(e)}}getToken(){if(!!this.status.isLoggedIn)return this.status.user.getIdToken()}logout(){this.auth.signOut(),location.assign("/")}}const V_=new j_,Bl=dh({history:Cd(),routes:[{path:"/",component:()=>Rt(()=>import("./Index.fb206035.js"),["assets/Index.fb206035.js","assets/Index.8cd0c487.css","assets/api_client.f45c9317.js","assets/_plugin-vue_export-helper.cdc0426e.js"])},{path:"/home",component:()=>Rt(()=>import("./Home.1715305c.js"),["assets/Home.1715305c.js","assets/Home.0f06ae5e.css","assets/MenuBar.dca5e5a5.js","assets/MenuBar.074997ad.css","assets/_plugin-vue_export-helper.cdc0426e.js","assets/UserSelector.fa65e289.js","assets/UserSelector.49d10520.css","assets/api_client.f45c9317.js"]),meta:{needLogin:!0}},{path:"/entry/:entryId",component:()=>Rt(()=>import("./EditEntry.b22fbce2.js"),["assets/EditEntry.b22fbce2.js","assets/EditEntry.26631de8.css","assets/MenuBar.dca5e5a5.js","assets/MenuBar.074997ad.css","assets/_plugin-vue_export-helper.cdc0426e.js","assets/api_client.f45c9317.js","assets/UserSelector.fa65e289.js","assets/UserSelector.49d10520.css"]),meta:{needLogin:!0}},{path:"/e/:entryId",component:()=>Rt(()=>import("./ReadEntry.907ce4cd.js"),["assets/ReadEntry.907ce4cd.js","assets/ReadEntry.a1b9430e.css","assets/api_client.f45c9317.js","assets/MenuBar.dca5e5a5.js","assets/MenuBar.074997ad.css","assets/_plugin-vue_export-helper.cdc0426e.js"])},{path:"/error",component:()=>Rt(()=>import("./Error.f9c9abfa.js"),["assets/Error.f9c9abfa.js","assets/Error.4e88a614.css","assets/_plugin-vue_export-helper.cdc0426e.js"])},{path:"/not_found",component:()=>Rt(()=>import("./NotFound.3ab44a45.js"),["assets/NotFound.3ab44a45.js","assets/NotFound.a63b8901.css","assets/_plugin-vue_export-helper.cdc0426e.js"])},{path:"/:pathMatch(.*)",component:()=>Rt(()=>import("./NotFound.3ab44a45.js"),["assets/NotFound.3ab44a45.js","assets/NotFound.a63b8901.css","assets/_plugin-vue_export-helper.cdc0426e.js"])}]});Bl.beforeEach((t,e,n)=>{if(t.matched.some(r=>r.meta.needLogin)&&!V_.getStatus().isLoggedIn)return n({path:"/",query:{redirect:t.fullPath}});n()});const Fl=ld(_h);Fl.use(Bl);Fl.mount("#app");export{V_ as A,tt as F,Co as O,Q_ as a,vc as b,Sf as c,Ke as d,gc as e,Fu as f,Pf as g,z_ as h,Of as i,Tp as j,Z_ as k,Bt as l,ge as m,G_ as n,Ds as o,W_ as p,Ne as q,of as r,Js as s,q_ as t,Y_ as u,K_ as v,Qn as w,X_ as x,Cu as y,J_ as z};
