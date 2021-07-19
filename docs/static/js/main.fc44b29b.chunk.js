(this["webpackJsonpgrid-puzzle"]=this["webpackJsonpgrid-puzzle"]||[]).push([[0],{44:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var l=n(1),i=n.n(l),r=n(30),s=n.n(r),a=(n(44),n(4)),c=n(15),o=n(67),u=n(70),j=n(71),h=n(66),d=n(68),b=n(69),O=n(19),x=n(21),g=n(20),v=n(7),p=n(31),f=n(32);var z,m,C=function(e){var t=e.enabled.map((function(e){return+e})),n=0;return t.forEach((function(l,i){1===l&&(!function(e,t,n,l){for(var i=[n];i.length;){var r=i.splice(0,1),s=Object(v.a)(r,1)[0];if(e[s]!==l&&0!==e[s]){e[s]=l;var a=s%t;a>0&&i.push(s-1),a<t-1&&i.push(s+1),s>=t&&i.push(s-t),s<t*t-t&&i.push(s+t)}}}(t,e.n,i,n+2),n+=1)})),n};function y(e){return"number"==typeof e?e:-1}function w(e){return"number"==typeof e||null==e?null:e}function S(e){var t,n=0,l=Object(O.a)(e);try{for(l.s();!(t=l.n()).done;){if(t.value?n++:n=0,3===n)return!0}}catch(i){l.e(i)}finally{l.f()}return!1}function T(e){var t,n=0,l=!1,i=Object(O.a)(e);try{for(i.s();!(t=i.n()).done;){t.value?l=!1:l||(n++,l=!0)}}catch(r){i.e(r)}finally{i.f()}return n}!function(e){e.NO_TRIPLES="NO_TRIPLES",e.YES_TRIPLES="YES_TRIPLES",e.SQ_1="1_SQUARE",e.SQ_2="2_SQUARE",e.SQ_3="3_SQUARE"}(z||(z={})),function(e){e.NEARBY_COUNT="NEARBY_COUNT"}(m||(m={}));var E,P,_=function(){function e(t){Object(p.a)(this,e),this.n=void 0,this.state=void 0,this.colCounts=void 0,this.rowCounts=void 0,this.colRules=void 0,this.rowRules=void 0,this.minTotal=void 0,this.maxTotal=void 0,this.numContinents=void 0,this.gridFeatures=void 0;var n=t.n;if(this.n=n,this.state={enabled:Array(n*n).fill(!1),complete:!1,n:n},this.colCounts=(t.colClues||Array(n).fill(null)).map(y),this.rowCounts=(t.rowClues||Array(n).fill(null)).map(y),this.colRules=(t.colClues||Array(n).fill(null)).map(w),this.rowRules=(t.rowClues||Array(n).fill(null)).map(w),this.colCounts.some((function(e){return e<-1||e>n})))throw new Error("Invalid requirement forsome column "+JSON.stringify(this.colCounts));if(this.rowCounts.some((function(e){return e<-1||e>n})))throw new Error("Invalid requirement forsome column "+JSON.stringify(this.rowCounts));t.totalActive?this.maxTotal=this.minTotal=t.totalActive:(this.maxTotal=t.maxTotal,this.minTotal=t.minTotal),this.numContinents=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return void 0===e?t:e}(t.numContinents),this.gridFeatures={};var l,i=Object(O.a)(t.gridFeatures||[]);try{for(i.s();!(l=i.n()).done;){var r=l.value,s=r.i+r.j*n;this.gridFeatures[s]=r}}catch(a){i.e(a)}finally{i.f()}}return Object(f.a)(e,[{key:"isLineValid",value:function(e,t,n){if(t===z.NO_TRIPLES){if(S(e))return!1}else if(t===z.YES_TRIPLES){if(!S(e))return!1}else if(t===z.SQ_1){if(1!==T(e))return!1}else if(t===z.SQ_2){if(2!==T(e))return!1}else if(t===z.SQ_3&&3!==T(e))return!1;return-1===n||e.reduce((function(e,t){return e+ +t}),0)===n}},{key:"isRowValid",value:function(e,t){var n=e.enabled.slice(t*this.n,(t+1)*this.n);return this.isLineValid(n,this.rowRules[t],this.rowCounts[t])}},{key:"isColValid",value:function(e,t){var n=this,l=e.enabled.filter((function(e,l){return l%n.n===t}));return this.isLineValid(l,this.colRules[t],this.colCounts[t])}},{key:"getGridFeature",value:function(e,t){var n=e+t*this.n;return this.gridFeatures[n]}},{key:"getAdjacentCount",value:function(e,t,n){for(var l=0,i=-1;i<=1;i++)if(!(e+i<0||e+i>=this.n))for(var r=-1;r<=1;r++)t+r<0||t+r>=this.n||n.enabled[e+i+this.n*(t+r)]&&l++;return l}},{key:"gridFeatureValid",value:function(e,t,n){var l=this.getGridFeature(e,t);return!l||(l.kind!==m.NEARBY_COUNT||this.getAdjacentCount(e,t,n)===l.value)}},{key:"isCountValid",value:function(e){if(!this.maxTotal&&!this.minTotal)return!0;var t=e.enabled.reduce((function(e,t){return e+ +t}),0);return!(this.maxTotal&&t>this.maxTotal)&&!(this.minTotal&&t<this.minTotal)}},{key:"totalRequirement",value:function(){return this.minTotal&&this.maxTotal?this.minTotal===this.maxTotal?this.minTotal.toString():"".concat(this.minTotal,"-").concat(this.maxTotal):this.minTotal?"\u2265".concat(this.minTotal):this.maxTotal?"\u2264".concat(this.maxTotal):void 0}},{key:"isValid",value:function(e){if(!this.isCountValid(e))return!1;for(var t=0;t<this.n;t++){if(!this.isRowValid(e,t))return!1;if(!this.isColValid(e,t))return!1}if(-1!==this.numContinents&&C(e)!==this.numContinents)return!1;for(var n=0,l=Object.keys(this.gridFeatures);n<l.length;n++){var i=l[n],r=this.gridFeatures[i];if(!this.gridFeatureValid(r.i,r.j,e))return!1}return!0}},{key:"getState",value:function(){return this.state}},{key:"read",value:function(e,t){var n=e+t*this.n;return this.state.enabled[n]}},{key:"toggle",value:function(e,t,n){var l=e+t*this.n,i={enabled:this.state.enabled.slice(),complete:!1,n:this.n};return i.enabled[l]=n,i.complete=this.isValid(i),this.state=i,this.state}},{key:"reset",value:function(){var e={enabled:Array(this.n*this.n).fill(!1),complete:!1,n:this.n};return e.complete=this.isValid(e),this.state=e,this.state}}],[{key:"countContinents",value:function(e){return C(e)}}]),e}(),I=n(0),k="brightness(0) saturate(100%) invert(11%) sepia(98%) saturate(7155%) hue-rotate(0deg) brightness(101%) contrast(109%)",R=new _({n:1});!function(e){e[e.CONTINENTS=0]="CONTINENTS"}(P||(P={}));var N=i.a.createContext({puzzle:R,attemptKey:""}),L=i.a.createContext([R.getState(),{onToggle:function(){},reset:function(){}}]),A=function(){var e=Object(l.useContext)(N);return Object(l.useEffect)((function(){console.warn("Re-rendering puzzle state")}),[e]),e},Q=function(){return Object(l.useContext)(L)};function F(e){return"".concat("/grid-puzzle","/").concat(e)}var q,Y=["checked-1.png","checked-2.png","checked-3.png"].map(F),D=["unchecked-1.png","unchecked-2.png","unchecked-3.png"].map(F),V=Object(O.a)(Y.concat(D));try{for(V.s();!(q=V.n()).done;){var M=q.value;(new Image).src=M}}catch(qt){V.e(qt)}finally{V.f()}var B=function(e){return e?Y[Math.floor(Math.random()*Y.length)]:D[Math.floor(Math.random()*D.length)]};function U(e){return"string"!==typeof e}var W=function(e){var t=e.i,n=e.j,i=e.status,r=Object(l.useState)(B(i)),s=Object(v.a)(r,2),a=s[0],c=s[1],o=Object(l.useState)(!1),u=Object(v.a)(o,2),j=u[0],h=u[1],d=A(),b=d.attemptKey,O=d.isPlayground,x=Q(),g=Object(v.a)(x,2)[1].onToggle;Object(l.useEffect)((function(){b&&h(!1)}),[b,h]);var p=Object(l.useCallback)((function(e){!function(e){if("type"in e){if("click"===e.type)return!1;if("contextmenu"===e.type)return!0}return"which"in e?3===e.which:"button"in e&&2===e.button}(e)?i?(c(B(!1)),g(t,n,!1),h(!1)):(c(B(!0)),g(t,n,!0),h(!0)):(e.preventDefault(),c(B(!1)),i||!j?(g(t,n,!1),h(!0)):h(!1))}),[j,t,n,g,i]),f=function(e,t,n){var l=A(),i=l.puzzle,r=l.isPlayground,s=l.playgroundFeatures,a=l.highlightErrors,c=Q(),o=Object(v.a)(c,1)[0];if(!r){var u=i.getGridFeature(e,t);if(!u)return null;var j=a&&!i.gridFeatureValid(e,t,o);return(null===u||void 0===u?void 0:u.kind)===m.NEARBY_COUNT?Object(I.jsx)("span",{style:{color:j?"red":n?"white":"black",fontSize:"3em",fontWeight:"bolder"},children:u.value}):null}var h=null===s||void 0===s?void 0:s.filter(U).find((function(n){return n.i===e&&n.j===t}));return h?h.kind===m.NEARBY_COUNT?Object(I.jsx)("span",{style:{color:"#147eff",fontSize:"3em",fontWeight:"bolder",WebkitTextStroke:n?"2px white":void 0},children:i.getAdjacentCount(e,t,o)}):void 0:null}(t,n,i);return Object(I.jsx)("button",{onClick:p,onContextMenu:p,style:{border:"2px solid ".concat(O?"#147eff":"black"),backgroundImage:j?"url(".concat(a,")"):"",backgroundColor:"white",backgroundSize:"cover",padding:"0"},children:f})},G=function(e,t){return{display:"inline-grid",gridTemplateColumns:"100px ".repeat(e),gridTemplateRows:"100px ".repeat(e),border:"4px solid ".concat(t?"#147eff":"black")}},J=function(e){var t=A(),n=t.puzzle,l=t.isPlayground;return Object(I.jsx)("div",{style:G(n.n,l),children:e.children})},K={display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},H=(E={},Object(g.a)(E,z.NO_TRIPLES,{image:F("counts/circle-circle-cross.png"),alt:"Circle circle cross"}),Object(g.a)(E,z.YES_TRIPLES,{image:F("counts/cross-ccc.png"),alt:"NOT circle circle cross"}),Object(g.a)(E,z.SQ_1,{image:F("counts/square-1.png"),alt:"One square"}),Object(g.a)(E,z.SQ_2,{image:F("counts/square-2.png"),alt:"Two squares"}),Object(g.a)(E,z.SQ_3,{image:F("counts/square-3.png"),alt:"Three squares"}),E),X=function(e){var t=e.count,n=e.horizontal,l=e.index,i=e.rule,r=function(e,t){var n=A(),l=n.puzzle,i=n.highlightErrors,r=Q(),s=Object(v.a)(r,1)[0];return!!i&&(e?!l.isRowValid(s,t):!l.isColValid(s,t))}(!!n,l)?k:void 0;return t>6?Object(I.jsx)(Z,{text:t.toString(),horizontal:n,filter:r}):t>=0?Object(I.jsx)(Z,{alt:"".concat(t," in this ").concat(n?"row":"column"),image:F("counts/dot-".concat(t,".png")),horizontal:n,filter:r}):i?Object(I.jsx)(Z,Object(x.a)(Object(x.a)({},H[i]),{},{horizontal:n,filter:r})):Object(I.jsx)("div",{})},Z=function(e){var t=e.alt,n=e.text,l=e.image,i=e.horizontal,r=e.width,s=void 0===r?"45px":r,a=e.filter,c=void 0===a?"grayscale(100%) brightness(0%)":a,o=e.color,u={transform:i?"rotate(90deg)":void 0,width:s,height:s,filter:c,color:void 0===o?"black":o};return l&&n?Object(I.jsx)("div",{style:Object(x.a)(Object(x.a)(Object(x.a)({},u),K),{},{backgroundImage:"url(".concat(l,")"),backgroundSize:"cover",fontSize:"2em",fontWeight:900}),children:n}):Object(I.jsxs)("div",{style:K,children:[l&&Object(I.jsx)("img",{alt:t,style:u,src:l}),n&&n]})},$={width:"100px",height:"100%",gridArea:"extra-details",display:"flex",alignItems:"space-evenly",justifyContent:"center"},ee=[P.CONTINENTS],te=function(){var e=A(),t=e.puzzle,n=e.isPlayground,l=e.playgroundFeatures,i=e.highlightErrors,r=Q(),s=Object(v.a)(r,1)[0],a=-1!==t.numContinents;if(n&&(null===l||void 0===l?void 0:l.length)&&ee.some((function(e){return null===l||void 0===l?void 0:l.includes(e)})))return Object(I.jsx)("div",{style:$,children:l.includes(P.CONTINENTS)&&Object(I.jsx)(Z,{image:F("counts/continent.png"),alt:"Number of continents",text:_.countContinents(s).toString(),width:"60px",color:"#007e00",filter:"brightness(0) saturate(100%) invert(41%) sepia(48%) saturate(4528%) hue-rotate(200deg) brightness(99%) contrast(105%)"})});if(!a)return null;var c=i&&-1!==t.numContinents&&_.countContinents(s)!==t.numContinents;return Object(I.jsx)("div",{style:$,children:-1!==t.numContinents&&Object(I.jsx)(Z,{image:F("counts/continent.png"),alt:"Number of continents",text:t.numContinents.toString(),width:"60px",filter:c?k:void 0})})},ne=function(){var e=A(),t=e.puzzle,n=e.highlightErrors,l=Q(),i=Object(v.a)(l,1)[0],r=t.totalRequirement();if(!r)return null;var s=n&&!t.isCountValid(i);return Object(I.jsx)("div",{style:{gridArea:"total-count",textAlign:"center",justifyContent:"center"},children:Object(I.jsx)("strong",{style:{fontSize:"2em",color:s?"red":"inherit"},children:r})})},le=function(e){var t,n=e.children,l=A(),i=l.puzzle,r=l.playgroundFeatures;return i.colCounts.some((function(e){return e>=0}))||i.rowCounts.some((function(e){return e>=0}))||i.totalRequirement()||(null===r||void 0===r?void 0:r.some((function(e){return!U(e)})))?Object(I.jsxs)("div",{style:(t=i.n,{display:"inline-grid",gridTemplateRows:"45px ".concat(100*t+8,"px"),gridTemplateColumns:"auto ".concat(100*t+8,"px auto"),gridTemplateAreas:'"extra-details top-clues total-count" "extra-details main-section side-clues"'}),children:[Object(I.jsx)(te,{}),Object(I.jsx)("div",{style:{gridArea:"top-clues",display:"grid",gridTemplateColumns:"100px ".repeat(i.n),justifyContent:"space-around"},children:i.colCounts.map((function(e,t){return Object(I.jsx)(X,{index:t,count:e,rule:i.colRules[t]},t)}))}),Object(I.jsx)("div",{style:{gridArea:"main-section"},children:n}),Object(I.jsx)("div",{style:{gridArea:"side-clues",display:"grid",gridTemplateRows:"100px ".repeat(i.n),alignContent:"space-around",justifyContent:"start"},children:i.rowCounts.map((function(e,t){return Object(I.jsx)(X,{index:t,count:e,rule:i.rowRules[t],horizontal:!0},t)}))}),Object(I.jsx)(ne,{})]}):n},ie=function(){var e=Q(),t=Object(v.a)(e,2),n=t[0],i=t[1].reset,r=Object(l.useState)(0),s=Object(v.a)(r,2),a=s[0],c=s[1];return Object(l.useEffect)((function(){n&&c(0)}),[n]),Object(l.useEffect)((function(){2===a&&(i(),c(0))}),[a,i]),Object(I.jsx)("div",{style:{float:"right"},children:Object(I.jsxs)("button",{onClick:function(){return c((function(e){return e+1}))},children:[0===a&&"Reset",0!==a&&"Are you sure"]})})},re=function(){var e=Q(),t=Object(v.a)(e,1)[0];return Object(I.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(I.jsx)(le,{children:Object(I.jsx)(J,{children:t.enabled.map((function(e,n){return Object(I.jsx)(W,{status:e,i:n%t.n,j:Math.floor(n/t.n)},n)}))})}),Object(I.jsx)(ie,{})]})},se=function(e){var t=e.details,n=e.highlightErrors,i=e.isPlayground,r=e.playgroundFeatures,s=Object(l.useState)({puzzle:new _(t),isPlayground:i,playgroundFeatures:r,highlightErrors:n,attemptKey:Math.random().toString()}),a=Object(v.a)(s,2),c=a[0],o=a[1],u=c.puzzle,j=Object(l.useState)(u.getState()),h=Object(v.a)(j,2),d=h[0],b=h[1],O=Object(l.useCallback)((function(e,t,n){b(u.toggle(e,t,n))}),[u]),g=Object(l.useCallback)((function(){b(u.reset()),o(Object(x.a)(Object(x.a)({},c),{},{attemptKey:Math.random().toString()}))}),[u,c,o]),p=Object(l.useMemo)((function(){return{reset:g,onToggle:O}}),[O,g]);return Object(I.jsx)(N.Provider,{value:c,children:Object(I.jsx)(L.Provider,{value:[d,p],children:Object(I.jsx)("div",{style:{backgroundColor:d.complete&&!i?"hsla(120, 80%, 80%, 50%)":"",padding:"8px"},children:Object(I.jsx)(re,{})})})})},ae={n:3,colClues:[0,1,0],rowClues:[0,1,0]},ce={n:3,colClues:[1,3,1],rowClues:[2,2,1]},oe={n:4,colClues:[2,4,1,1],rowClues:[3,2,1,2]},ue={n:5,colClues:[3,1,3,3,4],rowClues:[5,2,4,0,3]},je={n:5,colClues:[1,1,2,4,4],rowClues:[2,4,3,0,3]},he={n:6,colClues:[1,2,4,1,0,1],rowClues:[0,4,2,1,1,1]},de=function(e){return Object(I.jsxs)(h.a,{children:[e.links,Object(I.jsx)(o.a,{variant:"h3",children:"Day 1: The beginning"}),Object(I.jsx)("p",{children:"I'm making a grid-based puzzle and going to add a new idea/mechanic to the puzzles each day to make them more interesting/challenging or add variety etc."}),Object(I.jsx)("p",{children:'Core idea for the puzzle on day 1 is that we have a grid, with a hint about how many "active" squares there are in each row/column.'}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle"}),Object(I.jsx)(se,{details:ae}),Object(I.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(I.jsx)("p",{children:"I hope the solution to this one is straightforward enough. The background will turn green once the puzzle is solved."}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(I.jsx)(se,{details:ce}),Object(I.jsxs)("p",{children:[Object(I.jsx)("strong",{children:"Note:"})," These puzzles do not necessarily have unique solutions."]}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(I.jsx)("p",{children:"Stepping it up to 4 by 4 now."}),Object(I.jsx)(se,{details:oe}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(I.jsx)("p",{children:"And on to 5 by 5 just as quickly."}),Object(I.jsx)(se,{details:ue}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(I.jsx)(se,{details:je}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle"}),Object(I.jsx)(se,{details:he}),Object(I.jsx)("br",{}),e.links]})},be={n:3,colClues:[0,1,0],rowClues:[0,-1,-1]},Oe={n:3,colClues:[0,1,-1],rowClues:[-1,0,-1],totalActive:2},xe={n:3,colClues:[2,0,-1],rowClues:[1,-1,1]},ge={n:3,colClues:[2,0,-1],rowClues:[1,-1,1],totalActive:3},ve={n:4,colClues:[1,3,-1,2],rowClues:[-1,-1,2,1],totalActive:10},pe={n:4,colClues:[3,1,-1,4],rowClues:[4,-1,3,2],totalActive:11},fe={n:5,colClues:[1,-1,-1,3,2],rowClues:[-1,5,2,-1,2],totalActive:9},ze={n:5,colClues:[1,-1,-1,3,2],rowClues:[-1,5,2,-1,2],totalActive:16},me=function(e){return Object(I.jsxs)(h.a,{children:[e.links,Object(I.jsx)(o.a,{variant:"h3",children:"Day 2: Some variation"}),Object(I.jsx)("p",{children:"Let's add a little variety to the very simple concept introduced yesterday."}),Object(I.jsx)("p",{children:"What if we don't know exactly how many active squares are in some of the rows and columns?"}),Object(I.jsx)(o.a,{variant:"h5",children:"A note on controls"}),Object(I.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle"}),Object(I.jsx)(se,{details:be}),Object(I.jsxs)("p",{children:[Object(I.jsx)("strong",{children:"Note:"})," There is a difference between the empty circle and no marking at all."]}),Object(I.jsx)("p",{children:"Not too bad yet, I hope."}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(I.jsxs)("p",{children:["What if we also know how many active squares are in the puzzle ",Object(I.jsx)("strong",{children:"in total"}),"?"]}),Object(I.jsx)(se,{details:Oe}),Object(I.jsx)("p",{children:"I guess that adds a bit of interest to the scenario."}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(I.jsx)("p",{children:"Let's do some puzzles now."}),Object(I.jsx)(se,{details:xe}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(I.jsx)("p",{children:"Does one more change things?"}),Object(I.jsx)(se,{details:ge}),Object(I.jsx)("p",{children:"Interestingly, there are still more solutions to even this puzzle than I thought at first."}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(I.jsx)(se,{details:ve}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(I.jsx)(se,{details:pe}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle #1"}),Object(I.jsx)(se,{details:fe}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle #2"}),Object(I.jsx)("p",{children:"Identical to the puzzle above except for the total count."}),Object(I.jsx)(se,{details:ze}),Object(I.jsx)("br",{}),e.links]})},Ce={n:3,colClues:[0,null,0],rowClues:[null,null,null],totalActive:2,numContinents:2},ye={n:2,colClues:[null,null],rowClues:[null,null],totalActive:2,numContinents:1},we={n:2,colClues:[null,null],rowClues:[null,null],totalActive:2,numContinents:2},Se={n:4},Te={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:1},Ee={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:2},Pe={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:3},_e={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:4},Ie={n:3,colClues:[2,1,2],rowClues:[1,2,2],numContinents:2},ke={n:3,colClues:[null,1,3],rowClues:[null,2,2],numContinents:2},Re={n:4,colClues:[2,4,2,null],rowClues:[2,4,null,null],totalActive:10,numContinents:2},Ne={n:4,colClues:[3,2,null,0],rowClues:[3,1,2,null],totalActive:8,numContinents:2},Le={n:5,colClues:[null,2,null,2,1],rowClues:[2,null,1,2,1],numContinents:1},Ae={n:5,colClues:[null,2,2,3,1],rowClues:[3,2,1,null,1],totalActive:9,numContinents:2},Qe={n:5,colClues:[null,2,2,3,1],rowClues:[3,2,1,null,1],totalActive:9,numContinents:8},Fe=function(e){return Object(I.jsxs)(h.a,{children:[e.links,Object(I.jsx)(o.a,{variant:"h3",children:"Day 3: A fuzzy number"}),Object(I.jsx)("p",{children:"Let's continue adding more features!"}),Object(I.jsx)(o.a,{variant:"h5",children:"A note on controls"}),Object(I.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #1"}),Object(I.jsx)(se,{details:Ce,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(I.jsx)(se,{details:ye,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #3"}),Object(I.jsx)("p",{children:"I just want to clarify this."}),Object(I.jsx)(se,{details:we,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Playground"}),Object(I.jsxs)("p",{children:[Object(I.jsx)("strong",{children:"Note:"}),' This is a playground, not a regular puzzle. There is no "solution", but the puzzle will provide you with feedback on the current puzzle state.']}),Object(I.jsx)(se,{details:Se,playgroundFeatures:[P.CONTINENTS],isPlayground:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #4"}),Object(I.jsx)("p",{children:"You can play around here to understand better what the rule is for today."}),Object(I.jsx)(se,{details:Te,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #5"}),Object(I.jsxs)("p",{children:["It's always worth finding some answers that are ",Object(I.jsx)("i",{children:"wrong"})," as well as correct ones. This helps you test your hypothesis."]}),Object(I.jsx)(se,{details:Ee,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #6"}),Object(I.jsx)("p",{children:"Follow the pattern."}),Object(I.jsx)(se,{details:Pe,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #7"}),Object(I.jsx)("p",{children:"Hopefully this one should be understandable at this point."}),Object(I.jsx)(se,{details:_e,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(I.jsx)("p",{children:"Let's do some puzzles now."}),Object(I.jsx)(se,{details:Ie}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(I.jsx)(se,{details:ke}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(I.jsx)(se,{details:Re}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(I.jsx)(se,{details:Ne}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #5"}),Object(I.jsx)(se,{details:Le}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle #1"}),Object(I.jsx)(se,{details:Ae}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle #2"}),Object(I.jsx)("p",{children:"Almost identical to the puzzle above."}),Object(I.jsx)(se,{details:Qe}),Object(I.jsx)("br",{}),e.links]})},qe=function(e){var t=e.index,n=e.children,l=_t[t],i=l.link,r=l.title;return n?Object(I.jsx)(c.b,{to:i,children:n}):Object(I.jsx)(c.b,{to:i,children:r})};function Ye(e,t,n){return{kind:m.NEARBY_COUNT,i:e,j:t,value:n}}var De={n:5,colClues:[0,0,z.NO_TRIPLES,0,0],rowClues:[null,null,null,null,null],totalActive:3},Ve={n:3,colClues:[z.NO_TRIPLES,z.NO_TRIPLES,z.NO_TRIPLES],rowClues:[z.NO_TRIPLES,z.NO_TRIPLES,z.NO_TRIPLES],totalActive:6},Me={n:4,colClues:[z.NO_TRIPLES,1,z.NO_TRIPLES,z.NO_TRIPLES],rowClues:[1,3,3,z.NO_TRIPLES],totalActive:8},Be={n:4,colClues:[z.NO_TRIPLES,z.NO_TRIPLES,2,3],rowClues:[1,z.NO_TRIPLES,z.NO_TRIPLES,3],totalActive:10},Ue={n:5,colClues:[z.NO_TRIPLES,4,z.NO_TRIPLES,z.NO_TRIPLES,5],rowClues:[5,z.NO_TRIPLES,z.NO_TRIPLES,3,3],totalActive:18},We={n:5,colClues:[4,4,z.NO_TRIPLES,4,z.NO_TRIPLES],rowClues:[5,4,3,5,z.NO_TRIPLES],totalActive:20},Ge={n:6,colClues:[6,3,5,z.NO_TRIPLES,z.NO_TRIPLES,z.NO_TRIPLES],rowClues:[4,z.NO_TRIPLES,2,5,4,6],numContinents:1},Je=function(e){return Object(I.jsxs)(h.a,{children:[e.links,Object(I.jsx)(o.a,{variant:"h3",children:"Day 4: Circle circle cross"}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #1"}),Object(I.jsx)(se,{details:De,highlightErrors:!0}),Object(I.jsx)("p",{children:"Make sure to get this one wrong too, don't move on straight away."}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(I.jsx)("p",{children:"You can play around here to understand better what the rule is for today."}),Object(I.jsx)(se,{details:Ve,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(I.jsx)("p",{children:"Let's do some puzzles now."}),Object(I.jsx)(se,{details:Me,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(I.jsx)(se,{details:Be,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(I.jsx)(se,{details:Ue,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(I.jsx)(se,{details:We,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle"}),Object(I.jsxs)("p",{children:["If you're not familiar with this feature in the top-left, you should revisit ",Object(I.jsx)(qe,{index:2})]}),Object(I.jsx)(se,{details:Ge}),Object(I.jsx)("br",{}),e.links]})},Ke={n:3,colClues:[null,null,null],rowClues:[null,null,null],minTotal:7},He={n:5,colClues:[null,3,null,3,4],rowClues:[null,1,null,null,2],minTotal:17},Xe={n:5,colClues:[4,null,4,0,3],rowClues:[3,null,2,2,null],numContinents:2,minTotal:6},Ze={n:5,colClues:[null,1,null,3,null],rowClues:[2,3,1,null,null],minTotal:8,maxTotal:9,numContinents:1},$e={n:5,colClues:[null,null,1,4,null],rowClues:[z.NO_TRIPLES,4,null,z.NO_TRIPLES,3],minTotal:18,numContinents:3},et=function(e){return Object(I.jsxs)(h.a,{children:[e.links,Object(I.jsx)(o.a,{variant:"h3",children:"Day 5: Time for some leeway"}),Object(I.jsx)("p",{children:"Today's feature is hardly the most exciting, but I think that it was worth exploring at least."}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle"}),Object(I.jsx)(se,{details:Ke,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(I.jsx)("p",{children:"Let's make it a bit more interesting."}),Object(I.jsx)(se,{details:He,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(I.jsx)(se,{details:Xe,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(I.jsx)(se,{details:Ze}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(I.jsx)(se,{details:$e}),Object(I.jsx)("p",{children:"Bonus points for finding the solution with exactly 19 total."}),Object(I.jsx)("br",{}),e.links]})},tt={n:5,colClues:[0,0,z.YES_TRIPLES,0,0],rowClues:[null,null,null,null,null]},nt={n:4,colClues:[z.NO_TRIPLES,3,z.YES_TRIPLES,0],rowClues:[1,z.NO_TRIPLES,z.NO_TRIPLES,z.YES_TRIPLES]},lt={n:4,colClues:[3,null,1,z.YES_TRIPLES],rowClues:[1,z.YES_TRIPLES,z.NO_TRIPLES,3]},it={n:5,colClues:[z.YES_TRIPLES,3,5,null,1],rowClues:[2,z.YES_TRIPLES,z.NO_TRIPLES,3,z.YES_TRIPLES],totalActive:13},rt={n:4,colClues:[2,z.YES_TRIPLES,2,3],rowClues:[2,z.NO_TRIPLES,4,null],numContinents:3},st={n:5,colClues:[1,3,null,3,z.YES_TRIPLES],rowClues:[1,null,3,2,z.YES_TRIPLES],numContinents:1,maxTotal:12},at={n:6,colClues:[2,2,z.NO_TRIPLES,z.YES_TRIPLES,2,4],rowClues:[3,4,4,1,z.YES_TRIPLES,null],numContinents:1,totalActive:15},ct=function(e){return Object(I.jsxs)(h.a,{children:[e.links,Object(I.jsx)(o.a,{variant:"h3",children:"Day 6: Not what we saw before"}),Object(I.jsx)("p",{children:"This looks a little familiar..."}),Object(I.jsxs)("p",{children:["It's recommended to have completed ",Object(I.jsx)(qe,{index:3})," before working on these puzzles."]}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle"}),Object(I.jsx)(se,{details:tt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(I.jsx)("p",{children:"And away we go."}),Object(I.jsx)(se,{details:nt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(I.jsx)(se,{details:lt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(I.jsx)(se,{details:it,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(I.jsx)(se,{details:rt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle #1"}),Object(I.jsx)(se,{details:st}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle #2"}),Object(I.jsxs)("p",{children:["This puzzle is dedicated to everyone who tells me \"You can't have a final puzzle number one ",Object(I.jsx)("i",{children:"and"}),' number two".']}),Object(I.jsx)("p",{children:"You inspire me."}),Object(I.jsx)(se,{details:at}),Object(I.jsx)("br",{}),e.links]})},ot={n:5,colClues:[z.SQ_1,0,z.SQ_2,0,z.SQ_3],rowClues:[null,null,null,null,null]},ut={n:3,colClues:[z.SQ_1,2,0],rowClues:[2,1,z.SQ_2]},jt={n:3,colClues:[z.SQ_1,2,2],rowClues:[z.SQ_1,1,z.SQ_1],totalActive:4},ht={n:3,colClues:[z.SQ_1,1,2],rowClues:[1,z.SQ_2,2]},dt={n:4,colClues:[z.SQ_1,1,2,2],rowClues:[1,z.SQ_2,z.SQ_2,z.SQ_1],totalActive:8},bt={n:4,colClues:[z.SQ_1,2,2,z.SQ_2],rowClues:[3,2,z.SQ_1,1],totalActive:6},Ot={n:4,colClues:[2,2,3,z.SQ_1],rowClues:[1,3,2,z.SQ_1],totalActive:7},xt={n:5,colClues:[z.SQ_2,z.SQ_3,z.SQ_2,0,3],rowClues:[2,z.SQ_1,0,3,z.SQ_1],minTotal:10},gt={n:5,colClues:[0,3,z.SQ_1,3,2],rowClues:[z.SQ_2,4,1,1,4]},vt={n:5,colClues:[z.SQ_3,1,4,4,z.SQ_1],rowClues:[2,z.SQ_2,z.SQ_2,5,2]},pt={n:5,colClues:[3,z.SQ_2,4,z.SQ_1,3],rowClues:[z.SQ_1,5,3,z.SQ_1,z.SQ_1],numContinents:2,totalActive:14},ft={n:5,colClues:[3,3,2,z.SQ_1,4],rowClues:[4,z.SQ_1,2,z.SQ_2,z.SQ_1],numContinents:1},zt=function(e){return Object(I.jsxs)(h.a,{children:[e.links,Object(I.jsx)(o.a,{variant:"h3",children:"Day 7: Counting... squares?"}),Object(I.jsx)("p",{children:"I thought we already had enough squares in these puzzles."}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #1"}),Object(I.jsx)("p",{children:"I'm introducing 3 new symbols today. Try them each out and see what makes them happy, and what makes them sad."}),Object(I.jsx)(se,{details:ot,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(I.jsx)("p",{children:"Let's use them in a slightly more substantial puzzle now."}),Object(I.jsx)(se,{details:ut,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #3"}),Object(I.jsx)(se,{details:jt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #4"}),Object(I.jsx)(se,{details:ht,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(I.jsx)("p",{children:"Time for some bigger puzzles now."}),Object(I.jsx)(se,{details:dt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(I.jsx)(se,{details:bt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(I.jsx)(se,{details:Ot,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(I.jsx)(se,{details:xt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #5"}),Object(I.jsx)(se,{details:gt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #6"}),Object(I.jsx)(se,{details:vt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle #1"}),Object(I.jsx)("p",{children:"I apologise for these."}),Object(I.jsx)(se,{details:pt}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle #2"}),Object(I.jsxs)("p",{children:[Object(I.jsx)("strong",{children:"Warning:"})," This is by far the hardest puzzle I've made so far."]}),Object(I.jsx)(se,{details:ft}),Object(I.jsx)("br",{}),e.links]})},mt={n:4},Ct={n:4,colClues:[null,null,null,null],rowClues:[null,null,null,null],gridFeatures:[Ye(1,1,4),Ye(2,1,3)]},yt={n:4,rowClues:[1,3,2,2],colClues:[3,1,1,3],gridFeatures:[Ye(1,1,3),Ye(3,2,3)]},wt={n:4,rowClues:[2,1,3,3],colClues:[2,2,3,2],gridFeatures:[Ye(1,1,5),Ye(3,2,5)]},St={n:4,rowClues:[null,3,null,1],colClues:[2,null,1,2],gridFeatures:[Ye(1,1,4),Ye(2,2,2)]},Tt={n:5,rowClues:[z.NO_TRIPLES,z.YES_TRIPLES,3,null,3],colClues:[3,4,z.YES_TRIPLES,z.SQ_2,3],gridFeatures:[Ye(2,1,5),Ye(1,3,9)]},Et={n:5,rowClues:[null,2,4,4,null],colClues:[4,null,4,1,3],gridFeatures:[Ye(1,1,7),Ye(4,2,4),Ye(2,3,5)]},Pt={n:5,rowClues:[3,z.SQ_1,z.SQ_1,z.YES_TRIPLES,4],colClues:[4,2,z.SQ_1,z.YES_TRIPLES,2],gridFeatures:[Ye(2,1,6),Ye(1,3,6)]},_t=[{title:"Day 1: The beginning",description:"The first day",link:"/days/1",component:de},{title:"Day 2: Some variation",description:"Adding a little variety/ambiguity",link:"/days/2",component:me},{title:"Day 3: A fuzzy number",description:"No guidance on an island",link:"/days/3",component:Fe},{title:'Day 4: "Circle circle cross"',description:"Whatever could it mean?",link:"/days/4",component:Je},{title:"Day 5: Time for some leeway",description:"Does this help or hinder?",link:"/days/5",component:et},{title:"Day 6: Not what we saw before",description:"This looks a little familiar",link:"/days/6",component:ct},{title:"Day 7: Counting... squares?",description:"I thought we already had enough squares",link:"/days/7",component:zt,hidden:!0},{title:"Day 8: Numbers on the board",description:"More counting?",link:"/days/8",component:function(e){return Object(I.jsxs)(h.a,{children:[e.links,Object(I.jsx)(o.a,{variant:"h3",children:"Day 8: Numbers on the board"}),Object(I.jsxs)("p",{children:["What's that? Symbols ",Object(I.jsx)("i",{children:"in the grid?"})]}),Object(I.jsx)("p",{children:"Today's mechanic is actually one I'm pretty excited about. And it may remind some of another very popular grid-based computer puzzle game."}),Object(I.jsxs)("p",{children:["As a word of warning, this mechanic allows the creation of some very difficult puzzles. These are not puzzles that I was able to get through in a quick sitting, I do not expect everyone to be able to solve all of these. The puzzles from puzzle #4 onwards are ",Object(I.jsx)("i",{children:"very"})," difficult."]}),Object(I.jsx)(o.a,{variant:"h4",children:"Playground"}),Object(I.jsxs)("p",{children:[Object(I.jsx)("strong",{children:"Note:"}),' This is a playground, not a regular puzzle. There is no "solution", but the puzzle will provide you with feedback on the current puzzle state.']}),Object(I.jsx)(se,{details:mt,playgroundFeatures:[Ye(1,1,0)],isPlayground:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Intro Puzzle"}),Object(I.jsx)("p",{children:"I think you should understand this one easily enough."}),Object(I.jsx)(se,{details:Ct,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(I.jsxs)("p",{children:["Let's look at some ",Object(I.jsx)("i",{children:"actual"})," puzzles using this mechanic."]}),Object(I.jsx)(se,{details:yt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(I.jsx)(se,{details:wt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(I.jsx)(se,{details:St,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(I.jsx)(se,{details:Tt,highlightErrors:!0}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle #1"}),Object(I.jsx)("p",{children:"These are tricky ones. Please don't spend all day attempting these."}),Object(I.jsx)(se,{details:Et}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h4",children:"Final puzzle #2"}),Object(I.jsx)(se,{details:Pt}),Object(I.jsx)("br",{}),e.links]})},hidden:!0}];if(window.location.host.includes("127")){var It,kt=Object(O.a)(_t);try{for(kt.s();!(It=kt.n()).done;){It.value.hidden=!1}}catch(qt){kt.e(qt)}finally{kt.f()}}var Rt=function(){return Object(I.jsxs)(h.a,{children:[Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"h3",children:"Grid puzzles website"}),Object(I.jsx)("p",{children:"Hopefully the home of some interesting puzzles."}),_t.filter((function(e){return!e.hidden})).map((function(e){return Object(I.jsxs)(l.Fragment,{children:[Object(I.jsx)(c.b,{to:e.link,children:Object(I.jsx)(d.a,{children:Object(I.jsxs)(b.a,{children:[Object(I.jsx)(o.a,{variant:"h5",children:e.title}),e.description&&Object(I.jsx)("p",{children:e.description})]})})}),Object(I.jsx)("br",{})]},e.link)}))]})},Nt=Object(a.f)((function(e){var t=e.history;return Object(l.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null})),Lt=function(e){return Object(I.jsx)(c.b,{to:e.to,style:{textDecoration:"none",color:"white",marginLeft:"32px"},children:Object(I.jsx)(o.a,{variant:"button",children:e.children})})},At=_t.filter((function(e){return!e.hidden}));var Qt=function(){return Object(I.jsxs)(c.a,{children:[Object(I.jsx)(Nt,{}),Object(I.jsx)(u.a,{position:"sticky",children:Object(I.jsxs)(j.a,{children:[Object(I.jsx)(o.a,{variant:"h5",children:"Grid Puzzle"}),Object(I.jsx)(Lt,{to:"/",children:"Home"}),Object(I.jsx)(Lt,{to:_t[0].link,children:"Day 1"}),Object(I.jsx)(Lt,{to:At[At.length-1].link,children:"Today"})]})}),Object(I.jsxs)(a.c,{children:[_t.map((function(e,t){var n=e.component,l=e.link;e.title;return Object(I.jsx)(a.a,{path:l,children:Object(I.jsx)(n,{links:Object(I.jsxs)("div",{style:{paddingTop:"8px",marginBottom:"32px"},children:[t>0&&Object(I.jsx)("div",{style:{float:"left"},children:Object(I.jsxs)(c.b,{to:_t[t-1].link,children:["\u2190 ",_t[t-1].title]})}),t<At.length-1&&Object(I.jsx)("div",{style:{float:"right"},children:Object(I.jsxs)(c.b,{to:_t[t+1].link,children:[_t[t+1].title," \u2192"]})})]})})},t)})),Object(I.jsx)(a.a,{path:"/",children:Object(I.jsx)(Rt,{})})]})]})},Ft=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,l=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),l(e),i(e),r(e),s(e)}))};s.a.render(Object(I.jsx)(i.a.StrictMode,{children:Object(I.jsx)(Qt,{})}),document.getElementById("root")),Ft()}},[[54,1,2]]]);
//# sourceMappingURL=main.fc44b29b.chunk.js.map