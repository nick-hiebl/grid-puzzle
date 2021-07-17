(this["webpackJsonpgrid-puzzle"]=this["webpackJsonpgrid-puzzle"]||[]).push([[0],{44:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var l=n(1),i=n.n(l),s=n(30),r=n.n(s),c=(n(44),n(4)),a=n(15),o=n(67),u=n(70),j=n(71),h=n(66),d=n(68),b=n(69),O=n(18),x=n(20),g=n(10),p=n(22),v=n(31),f=n(32);var m,C=function(e){var t=e.enabled.map((function(e){return+e})),n=0;return t.forEach((function(l,i){1===l&&(!function(e,t,n,l){for(var i=[n];i.length;){var s=i.splice(0,1),r=Object(g.a)(s,1)[0];if(e[r]!==l&&0!==e[r]){e[r]=l;var c=r%t;c>0&&i.push(r-1),c<t-1&&i.push(r+1),r>=t&&i.push(r-t),r<t*t-t&&i.push(r+t)}}}(t,e.n,i,n+2),n+=1)})),n};function z(e){return"number"==typeof e?e:-1}function y(e){return"number"==typeof e||null==e?null:e}function w(e){var t,n=0,l=Object(p.a)(e);try{for(l.s();!(t=l.n()).done;){if(t.value?n++:n=0,3===n)return!0}}catch(i){l.e(i)}finally{l.f()}return!1}!function(e){e.NO_TRIPLES="NO_TRIPLES",e.YES_TRIPLES="YES_TRIPLES"}(m||(m={}));var T,E,P=function(){function e(t){Object(v.a)(this,e),this.n=void 0,this.state=void 0,this.colCounts=void 0,this.rowCounts=void 0,this.colRules=void 0,this.rowRules=void 0,this.minTotal=void 0,this.maxTotal=void 0,this.numContinents=void 0;var n=t.n;if(this.n=n,this.state={enabled:Array(n*n).fill(!1),complete:!1,n:n},this.colCounts=(t.colClues||Array(n).fill(null)).map(z),this.rowCounts=(t.rowClues||Array(n).fill(null)).map(z),this.colRules=(t.colClues||Array(n).fill(null)).map(y),this.rowRules=(t.rowClues||Array(n).fill(null)).map(y),this.colCounts.some((function(e){return e<-1||e>n})))throw new Error("Invalid requirement forsome column "+JSON.stringify(this.colCounts));if(this.rowCounts.some((function(e){return e<-1||e>n})))throw new Error("Invalid requirement forsome column "+JSON.stringify(this.rowCounts));t.totalActive?this.maxTotal=this.minTotal=t.totalActive:(this.maxTotal=t.maxTotal,this.minTotal=t.minTotal),this.numContinents=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return void 0===e?t:e}(t.numContinents)}return Object(f.a)(e,[{key:"isLineValid",value:function(e,t,n){if(t===m.NO_TRIPLES){if(w(e))return!1}else if(t===m.YES_TRIPLES&&!w(e))return!1;return-1===n||e.reduce((function(e,t){return e+ +t}),0)===n}},{key:"isRowValid",value:function(e,t){var n=e.enabled.slice(t*this.n,(t+1)*this.n);return this.isLineValid(n,this.rowRules[t],this.rowCounts[t])}},{key:"isColValid",value:function(e,t){var n=this,l=e.enabled.filter((function(e,l){return l%n.n===t}));return this.isLineValid(l,this.colRules[t],this.colCounts[t])}},{key:"isCountValid",value:function(e){if(!this.maxTotal&&!this.minTotal)return!0;var t=e.enabled.reduce((function(e,t){return e+ +t}),0);return!(this.maxTotal&&t>this.maxTotal)&&!(this.minTotal&&t<this.minTotal)}},{key:"totalRequirement",value:function(){return this.minTotal&&this.maxTotal?this.minTotal===this.maxTotal?this.minTotal.toString():"".concat(this.minTotal,"-").concat(this.maxTotal):this.minTotal?"\u2265".concat(this.minTotal):this.maxTotal?"\u2264".concat(this.maxTotal):void 0}},{key:"isValid",value:function(e){if(!this.isCountValid(e))return!1;for(var t=0;t<this.n;t++){if(!this.isRowValid(e,t))return!1;if(!this.isColValid(e,t))return!1}if(-1!==this.numContinents&&C(e)!==this.numContinents)return!1;return!0}},{key:"getState",value:function(){return this.state}},{key:"read",value:function(e,t){var n=e+t*this.n;return this.state.enabled[n]}},{key:"toggle",value:function(e,t,n){var l=e+t*this.n,i={enabled:this.state.enabled.slice(),complete:!1,n:this.n};return i.enabled[l]=n,i.complete=this.isValid(i),this.state=i,this.state}},{key:"reset",value:function(){var e={enabled:Array(this.n*this.n).fill(!1),complete:!1,n:this.n};return e.complete=this.isValid(e),this.state=e,this.state}}],[{key:"countContinents",value:function(e){return C(e)}}]),e}(),S=n(0),I="brightness(0) saturate(100%) invert(11%) sepia(98%) saturate(7155%) hue-rotate(0deg) brightness(101%) contrast(109%)",k=new P({n:1});!function(e){e[e.CONTINENTS=0]="CONTINENTS"}(E||(E={}));var R=i.a.createContext({puzzle:k,attemptKey:""}),L=i.a.createContext([k.getState(),{onToggle:function(){},reset:function(){}}]),N=function(){var e=Object(l.useContext)(R);return Object(l.useEffect)((function(){console.warn("Re-rendering puzzle state")}),[e]),e},_=function(){return Object(l.useContext)(L)};function A(e){return"".concat("/grid-puzzle","/").concat(e)}var q,Y=["checked-1.png","checked-2.png","checked-3.png"].map(A),F=["unchecked-1.png","unchecked-2.png","unchecked-3.png"].map(A),D=Object(p.a)(Y.concat(F));try{for(D.s();!(q=D.n()).done;){var V=q.value;(new Image).src=V}}catch(ut){D.e(ut)}finally{D.f()}var M=function(e){return e?Y[Math.floor(Math.random()*Y.length)]:F[Math.floor(Math.random()*F.length)]};var B=function(e){var t=e.i,n=e.j,i=e.status,s=Object(l.useState)(M(i)),r=Object(g.a)(s,2),c=r[0],a=r[1],o=Object(l.useState)(!1),u=Object(g.a)(o,2),j=u[0],h=u[1],d=N(),b=d.attemptKey,O=d.isPlayground,x=_(),p=Object(g.a)(x,2)[1].onToggle;Object(l.useEffect)((function(){b&&h(!1)}),[b,h]);var v=Object(l.useCallback)((function(e){!function(e){if("type"in e){if("click"===e.type)return!1;if("contextmenu"===e.type)return!0}return"which"in e?3===e.which:"button"in e&&2===e.button}(e)?i?(a(M(!1)),p(t,n,!1),h(!1)):(a(M(!0)),p(t,n,!0),h(!0)):(e.preventDefault(),a(M(!1)),i||!j?(p(t,n,!1),h(!0)):h(!1))}),[j,t,n,p,i]);return Object(S.jsx)("button",{onClick:v,onContextMenu:v,style:{border:"2px solid ".concat(O?"#147eff":"black"),backgroundImage:j?"url(".concat(c,")"):"",backgroundColor:"white",backgroundSize:"cover",padding:"0"}})},J=function(e,t){return{display:"inline-grid",gridTemplateColumns:"100px ".repeat(e),gridTemplateRows:"100px ".repeat(e),border:"4px solid ".concat(t?"#147eff":"black")}},K=function(e){var t=N(),n=t.puzzle,l=t.isPlayground;return Object(S.jsx)("div",{style:J(n.n,l),children:e.children})},W={display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},H=(T={},Object(x.a)(T,m.NO_TRIPLES,{image:A("counts/circle-circle-cross.png"),alt:"Circle circle cross"}),Object(x.a)(T,m.YES_TRIPLES,{image:A("counts/cross-ccc.png"),alt:"NOT circle circle cross"}),T),G=function(e){var t=e.count,n=e.horizontal,l=e.index,i=e.rule,s=function(e,t){var n=N(),l=n.puzzle,i=n.highlightErrors,s=_(),r=Object(g.a)(s,1)[0];return!!i&&(e?!l.isRowValid(r,t):!l.isColValid(r,t))}(!!n,l)?I:void 0;return t>6?Object(S.jsx)(Q,{text:t.toString(),horizontal:n,filter:s}):t>=0?Object(S.jsx)(Q,{alt:"".concat(t," in this ").concat(n?"row":"column"),image:A("counts/dot-".concat(t,".png")),horizontal:n,filter:s}):i?Object(S.jsx)(Q,Object(O.a)(Object(O.a)({},H[i]),{},{horizontal:n,filter:s})):Object(S.jsx)("div",{})},Q=function(e){var t=e.alt,n=e.text,l=e.image,i=e.horizontal,s=e.width,r=void 0===s?"45px":s,c=e.filter,a=void 0===c?"grayscale(100%) brightness(0%)":c,o=e.color,u={transform:i?"rotate(90deg)":void 0,width:r,height:r,filter:a,color:void 0===o?"black":o};return l&&n?Object(S.jsx)("div",{style:Object(O.a)(Object(O.a)(Object(O.a)({},u),W),{},{backgroundImage:"url(".concat(l,")"),backgroundSize:"cover",fontSize:"2em",fontWeight:900}),children:n}):Object(S.jsxs)("div",{style:W,children:[l&&Object(S.jsx)("img",{alt:t,style:u,src:l}),n&&n]})},U={width:"100px",height:"100%",gridArea:"extra-details",display:"flex",alignItems:"space-evenly",justifyContent:"center"},X=function(){var e=N(),t=e.puzzle,n=e.isPlayground,l=e.playgroundFeatures,i=e.highlightErrors,s=_(),r=Object(g.a)(s,1)[0],c=-1!==t.numContinents;if(n&&(null===l||void 0===l?void 0:l.length))return Object(S.jsx)("div",{style:U,children:l.includes(E.CONTINENTS)&&Object(S.jsx)(Q,{image:A("counts/continent.png"),alt:"Number of continents",text:P.countContinents(r).toString(),width:"60px",color:"#007e00",filter:"brightness(0) saturate(100%) invert(41%) sepia(48%) saturate(4528%) hue-rotate(200deg) brightness(99%) contrast(105%)"})});if(!c)return null;var a=i&&-1!==t.numContinents&&P.countContinents(r)!==t.numContinents;return Object(S.jsx)("div",{style:U,children:-1!==t.numContinents&&Object(S.jsx)(Q,{image:A("counts/continent.png"),alt:"Number of continents",text:t.numContinents.toString(),width:"60px",filter:a?I:void 0})})},Z=function(){var e=N(),t=e.puzzle,n=e.highlightErrors,l=_(),i=Object(g.a)(l,1)[0],s=t.totalRequirement();if(!s)return null;var r=n&&!t.isCountValid(i);return Object(S.jsx)("div",{style:{gridArea:"total-count",textAlign:"center",justifyContent:"center"},children:Object(S.jsx)("strong",{style:{fontSize:"2em",color:r?"red":"inherit"},children:s})})},$=function(e){var t,n=e.children,l=N(),i=l.puzzle,s=l.playgroundFeatures;return i.colCounts.some((function(e){return e>=0}))||i.rowCounts.some((function(e){return e>=0}))||i.totalRequirement()||(null===s||void 0===s?void 0:s.length)?Object(S.jsxs)("div",{style:(t=i.n,{display:"inline-grid",gridTemplateRows:"45px ".concat(100*t+8,"px"),gridTemplateColumns:"auto ".concat(100*t+8,"px 45px"),gridTemplateAreas:'"extra-details top-clues total-count" "extra-details main-section side-clues"'}),children:[Object(S.jsx)(X,{}),Object(S.jsx)("div",{style:{gridArea:"top-clues",display:"grid",gridTemplateColumns:"100px ".repeat(i.n),justifyContent:"space-around"},children:i.colCounts.map((function(e,t){return Object(S.jsx)(G,{index:t,count:e,rule:i.colRules[t]},t)}))}),Object(S.jsx)("div",{style:{gridArea:"main-section"},children:n}),Object(S.jsx)("div",{style:{gridArea:"side-clues",display:"grid",gridTemplateRows:"100px ".repeat(i.n),alignContent:"space-around"},children:i.rowCounts.map((function(e,t){return Object(S.jsx)(G,{index:t,count:e,rule:i.rowRules[t],horizontal:!0},t)}))}),Object(S.jsx)(Z,{})]}):n},ee=function(){var e=_(),t=Object(g.a)(e,2)[1].reset,n=Object(l.useState)(0),i=Object(g.a)(n,2),s=i[0],r=i[1];return Object(l.useEffect)((function(){3===s&&(t(),r(0))}),[s,t]),Object(S.jsx)("div",{style:{float:"right"},children:Object(S.jsxs)("button",{onClick:function(){return r((function(e){return e+1}))},children:[0===s&&"Reset",0!==s&&"Clicks until reset: ".concat(3-s)]})})},te=function(){var e=_(),t=Object(g.a)(e,1)[0];return Object(S.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(S.jsx)($,{children:Object(S.jsx)(K,{children:t.enabled.map((function(e,n){return Object(S.jsx)(B,{status:e,i:n%t.n,j:Math.floor(n/t.n)},n)}))})}),Object(S.jsx)(ee,{})]})},ne=function(e){var t=e.details,n=e.highlightErrors,i=e.isPlayground,s=e.playgroundFeatures,r=Object(l.useState)({puzzle:new P(t),isPlayground:i,playgroundFeatures:s,highlightErrors:n,attemptKey:Math.random().toString()}),c=Object(g.a)(r,2),a=c[0],o=c[1],u=a.puzzle,j=Object(l.useState)(u.getState()),h=Object(g.a)(j,2),d=h[0],b=h[1],x=Object(l.useCallback)((function(e,t,n){b(u.toggle(e,t,n))}),[u]),p=Object(l.useCallback)((function(){b(u.reset()),o(Object(O.a)(Object(O.a)({},a),{},{attemptKey:Math.random().toString()}))}),[u,a,o]),v=Object(l.useMemo)((function(){return{reset:p,onToggle:x}}),[x,p]);return Object(S.jsx)(R.Provider,{value:a,children:Object(S.jsx)(L.Provider,{value:[d,v],children:Object(S.jsx)("div",{style:{backgroundColor:d.complete&&!i?"hsla(120, 80%, 80%, 50%)":"",padding:"8px"},children:Object(S.jsx)(te,{})})})})},le={n:3,colClues:[0,1,0],rowClues:[0,1,0]},ie={n:3,colClues:[1,3,1],rowClues:[2,2,1]},se={n:4,colClues:[2,4,1,1],rowClues:[3,2,1,2]},re={n:5,colClues:[3,1,3,3,4],rowClues:[5,2,4,0,3]},ce={n:5,colClues:[1,1,2,4,4],rowClues:[2,4,3,0,3]},ae={n:6,colClues:[1,2,4,1,0,1],rowClues:[0,4,2,1,1,1]},oe=function(e){return Object(S.jsxs)(h.a,{children:[e.links,Object(S.jsx)(o.a,{variant:"h3",children:"Day 1: The beginning"}),Object(S.jsx)("p",{children:"I'm making a grid-based puzzle and going to add a new idea/mechanic to the puzzles each day to make them more interesting/challenging or add variety etc."}),Object(S.jsx)("p",{children:'Core idea for the puzzle on day 1 is that we have a grid, with a hint about how many "active" squares there are in each row/column.'}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle"}),Object(S.jsx)(ne,{details:le}),Object(S.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(S.jsx)("p",{children:"I hope the solution to this one is straightforward enough. The background will turn green once the puzzle is solved."}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(S.jsx)(ne,{details:ie}),Object(S.jsxs)("p",{children:[Object(S.jsx)("strong",{children:"Note:"})," These puzzles do not necessarily have unique solutions."]}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(S.jsx)("p",{children:"Stepping it up to 4 by 4 now."}),Object(S.jsx)(ne,{details:se}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(S.jsx)("p",{children:"And on to 5 by 5 just as quickly."}),Object(S.jsx)(ne,{details:re}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(S.jsx)(ne,{details:ce}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Final puzzle"}),Object(S.jsx)(ne,{details:ae}),Object(S.jsx)("br",{}),e.links]})},ue={n:3,colClues:[0,1,0],rowClues:[0,-1,-1]},je={n:3,colClues:[0,1,-1],rowClues:[-1,0,-1],totalActive:2},he={n:3,colClues:[2,0,-1],rowClues:[1,-1,1]},de={n:3,colClues:[2,0,-1],rowClues:[1,-1,1],totalActive:3},be={n:4,colClues:[1,3,-1,2],rowClues:[-1,-1,2,1],totalActive:10},Oe={n:4,colClues:[3,1,-1,4],rowClues:[4,-1,3,2],totalActive:11},xe={n:5,colClues:[1,-1,-1,3,2],rowClues:[-1,5,2,-1,2],totalActive:9},ge={n:5,colClues:[1,-1,-1,3,2],rowClues:[-1,5,2,-1,2],totalActive:16},pe=function(e){return Object(S.jsxs)(h.a,{children:[e.links,Object(S.jsx)(o.a,{variant:"h3",children:"Day 2: Some variation"}),Object(S.jsx)("p",{children:"Let's add a little variety to the very simple concept introduced yesterday."}),Object(S.jsx)("p",{children:"What if we don't know exactly how many active squares are in some of the rows and columns?"}),Object(S.jsx)(o.a,{variant:"h5",children:"A note on controls"}),Object(S.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle"}),Object(S.jsx)(ne,{details:ue}),Object(S.jsxs)("p",{children:[Object(S.jsx)("strong",{children:"Note:"})," There is a difference between the empty circle and no marking at all."]}),Object(S.jsx)("p",{children:"Not too bad yet, I hope."}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(S.jsxs)("p",{children:["What if we also know how many active squares are in the puzzle ",Object(S.jsx)("strong",{children:"in total"}),"?"]}),Object(S.jsx)(ne,{details:je}),Object(S.jsx)("p",{children:"I guess that adds a bit of interest to the scenario."}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(S.jsx)("p",{children:"Let's do some puzzles now."}),Object(S.jsx)(ne,{details:he}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(S.jsx)("p",{children:"Does one more change things?"}),Object(S.jsx)(ne,{details:de}),Object(S.jsx)("p",{children:"Interestingly, there are still more solutions to even this puzzle than I thought at first."}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(S.jsx)(ne,{details:be}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(S.jsx)(ne,{details:Oe}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Final puzzle #1"}),Object(S.jsx)(ne,{details:xe}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Final puzzle #2"}),Object(S.jsx)("p",{children:"Identical to the puzzle above except for the total count."}),Object(S.jsx)(ne,{details:ge}),Object(S.jsx)("br",{}),e.links]})},ve={n:3,colClues:[0,null,0],rowClues:[null,null,null],totalActive:2,numContinents:2},fe={n:2,colClues:[null,null],rowClues:[null,null],totalActive:2,numContinents:1},me={n:2,colClues:[null,null],rowClues:[null,null],totalActive:2,numContinents:2},Ce={n:4},ze={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:1},ye={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:2},we={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:3},Te={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:4},Ee={n:3,colClues:[2,1,2],rowClues:[1,2,2],numContinents:2},Pe={n:3,colClues:[null,1,3],rowClues:[null,2,2],numContinents:2},Se={n:4,colClues:[2,4,2,null],rowClues:[2,4,null,null],totalActive:10,numContinents:2},Ie={n:4,colClues:[3,2,null,0],rowClues:[3,1,2,null],totalActive:8,numContinents:2},ke={n:5,colClues:[null,2,null,2,1],rowClues:[2,null,1,2,1],numContinents:1},Re={n:5,colClues:[null,2,2,3,1],rowClues:[3,2,1,null,1],totalActive:9,numContinents:2},Le={n:5,colClues:[null,2,2,3,1],rowClues:[3,2,1,null,1],totalActive:9,numContinents:8},Ne=function(e){return Object(S.jsxs)(h.a,{children:[e.links,Object(S.jsx)(o.a,{variant:"h3",children:"Day 3: A fuzzy number"}),Object(S.jsx)("p",{children:"Let's continue adding more features!"}),Object(S.jsx)(o.a,{variant:"h5",children:"A note on controls"}),Object(S.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #1"}),Object(S.jsx)(ne,{details:ve,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(S.jsx)(ne,{details:fe,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #3"}),Object(S.jsx)("p",{children:"I just want to clarify this."}),Object(S.jsx)(ne,{details:me,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Playground"}),Object(S.jsxs)("p",{children:[Object(S.jsx)("strong",{children:"Note:"}),' This is a playground, not a regular puzzle. There is no "solution", but the puzzle will provide you with feedback on the current puzzle state.']}),Object(S.jsx)(ne,{details:Ce,playgroundFeatures:[E.CONTINENTS],isPlayground:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #4"}),Object(S.jsx)("p",{children:"You can play around here to understand better what the rule is for today."}),Object(S.jsx)(ne,{details:ze,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #5"}),Object(S.jsxs)("p",{children:["It's always worth finding some answers that are ",Object(S.jsx)("i",{children:"wrong"})," as well as correct ones. This helps you test your hypothesis."]}),Object(S.jsx)(ne,{details:ye,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #6"}),Object(S.jsx)("p",{children:"Follow the pattern."}),Object(S.jsx)(ne,{details:we,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #7"}),Object(S.jsx)("p",{children:"Hopefully this one should be understandable at this point."}),Object(S.jsx)(ne,{details:Te,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(S.jsx)("p",{children:"Let's do some puzzles now."}),Object(S.jsx)(ne,{details:Ee}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(S.jsx)(ne,{details:Pe}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(S.jsx)(ne,{details:Se}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(S.jsx)(ne,{details:Ie}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #5"}),Object(S.jsx)(ne,{details:ke}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Final puzzle #1"}),Object(S.jsx)(ne,{details:Re}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Final puzzle #2"}),Object(S.jsx)("p",{children:"Almost identical to the puzzle above."}),Object(S.jsx)(ne,{details:Le}),Object(S.jsx)("br",{}),e.links]})},_e=function(e){var t=e.index,n=e.children,l=lt[t],i=l.link,s=l.title;return n?Object(S.jsx)(a.b,{to:i,children:n}):Object(S.jsx)(a.b,{to:i,children:s})},Ae={n:5,colClues:[0,0,m.NO_TRIPLES,0,0],rowClues:[null,null,null,null,null],totalActive:3},qe={n:3,colClues:[m.NO_TRIPLES,m.NO_TRIPLES,m.NO_TRIPLES],rowClues:[m.NO_TRIPLES,m.NO_TRIPLES,m.NO_TRIPLES],totalActive:6},Ye={n:4,colClues:[m.NO_TRIPLES,1,m.NO_TRIPLES,m.NO_TRIPLES],rowClues:[1,3,3,m.NO_TRIPLES],totalActive:8},Fe={n:4,colClues:[m.NO_TRIPLES,m.NO_TRIPLES,2,3],rowClues:[1,m.NO_TRIPLES,m.NO_TRIPLES,3],totalActive:10},De={n:5,colClues:[m.NO_TRIPLES,4,m.NO_TRIPLES,m.NO_TRIPLES,5],rowClues:[5,m.NO_TRIPLES,m.NO_TRIPLES,3,3],totalActive:18},Ve={n:5,colClues:[4,4,m.NO_TRIPLES,4,m.NO_TRIPLES],rowClues:[5,4,3,5,m.NO_TRIPLES],totalActive:20},Me={n:6,colClues:[6,3,5,m.NO_TRIPLES,m.NO_TRIPLES,m.NO_TRIPLES],rowClues:[4,m.NO_TRIPLES,2,5,4,6],numContinents:1},Be=function(e){return Object(S.jsxs)(h.a,{children:[e.links,Object(S.jsx)(o.a,{variant:"h3",children:"Day 4: Circle circle cross"}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #1"}),Object(S.jsx)(ne,{details:Ae,highlightErrors:!0}),Object(S.jsx)("p",{children:"Make sure to get this one wrong too, don't move on straight away."}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(S.jsx)("p",{children:"You can play around here to understand better what the rule is for today."}),Object(S.jsx)(ne,{details:qe,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(S.jsx)("p",{children:"Let's do some puzzles now."}),Object(S.jsx)(ne,{details:Ye,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(S.jsx)(ne,{details:Fe,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(S.jsx)(ne,{details:De,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(S.jsx)(ne,{details:Ve,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Final puzzle"}),Object(S.jsxs)("p",{children:["If you're not familiar with this feature in the top-left, you should revisit ",Object(S.jsx)(_e,{index:2})]}),Object(S.jsx)(ne,{details:Me}),Object(S.jsx)("br",{}),e.links]})},Je={n:3,colClues:[null,null,null],rowClues:[null,null,null],minTotal:7},Ke={n:5,colClues:[null,3,null,3,4],rowClues:[null,1,null,null,2],minTotal:17},We={n:5,colClues:[4,null,4,0,3],rowClues:[3,null,2,2,null],numContinents:2,minTotal:6},He={n:5,colClues:[null,1,null,3,null],rowClues:[2,3,1,null,null],minTotal:8,maxTotal:9,numContinents:1},Ge={n:5,colClues:[null,null,1,4,null],rowClues:[m.NO_TRIPLES,4,null,m.NO_TRIPLES,3],minTotal:18,numContinents:3},Qe=function(e){return Object(S.jsxs)(h.a,{children:[e.links,Object(S.jsx)(o.a,{variant:"h3",children:"Day 5: Time for some leeway"}),Object(S.jsx)("p",{children:"Today's feature is hardly the most exciting, but I think that it was worth exploring at least."}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #1"}),Object(S.jsx)(ne,{details:Je,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(S.jsx)("p",{children:"Let's make it a bit more interesting."}),Object(S.jsx)(ne,{details:Ke,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(S.jsx)(ne,{details:We,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(S.jsx)(ne,{details:He}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(S.jsx)(ne,{details:Ge}),Object(S.jsx)("p",{children:"Bonus points for finding the solution with exactly 19 total."}),Object(S.jsx)("br",{}),e.links]})},Ue={n:5,colClues:[0,0,m.YES_TRIPLES,0,0],rowClues:[null,null,null,null,null]},Xe={n:4,colClues:[m.NO_TRIPLES,3,m.YES_TRIPLES,0],rowClues:[1,m.NO_TRIPLES,m.NO_TRIPLES,m.YES_TRIPLES]},Ze={n:4,colClues:[3,null,1,m.YES_TRIPLES],rowClues:[1,m.YES_TRIPLES,m.NO_TRIPLES,3]},$e={n:5,colClues:[m.YES_TRIPLES,3,5,null,1],rowClues:[2,m.YES_TRIPLES,m.NO_TRIPLES,3,m.YES_TRIPLES],totalActive:13},et={n:4,colClues:[2,m.YES_TRIPLES,2,3],rowClues:[2,m.NO_TRIPLES,4,null],numContinents:3},tt={n:5,colClues:[1,3,null,3,m.YES_TRIPLES],rowClues:[1,null,3,2,m.YES_TRIPLES],numContinents:1,maxTotal:12},nt={n:6,colClues:[2,2,m.NO_TRIPLES,m.YES_TRIPLES,2,4],rowClues:[3,4,4,1,m.YES_TRIPLES,null],numContinents:1,totalActive:15},lt=[{title:"Day 1: The beginning",description:"The first day",link:"/days/1",component:oe},{title:"Day 2: Some variation",description:"Adding a little variety/ambiguity",link:"/days/2",component:pe},{title:"Day 3: A fuzzy number",description:"No guidance on an island",link:"/days/3",component:Ne},{title:'Day 4: "Circle circle cross"',description:"Whatever could it mean?",link:"/days/4",component:Be},{title:"Day 5: Time for some leeway",description:"Does this help or hinder?",link:"/days/5",component:Qe},{title:"Day 6: Not what we saw before",description:"This looks a little familiar",link:"/days/6",component:function(e){return Object(S.jsxs)(h.a,{children:[e.links,Object(S.jsx)(o.a,{variant:"h3",children:"Day 6: Not what we saw before"}),Object(S.jsx)("p",{children:"This looks a little familiar..."}),Object(S.jsxs)("p",{children:["It's recommended to have completed ",Object(S.jsx)(_e,{index:3})," before working on these puzzles."]}),Object(S.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #1"}),Object(S.jsx)(ne,{details:Ue,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(S.jsx)("p",{children:"And away we go."}),Object(S.jsx)(ne,{details:Xe,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(S.jsx)(ne,{details:Ze,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(S.jsx)(ne,{details:$e,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(S.jsx)(ne,{details:et,highlightErrors:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Final puzzle #1"}),Object(S.jsx)(ne,{details:tt}),Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h4",children:"Final puzzle #2"}),Object(S.jsxs)("p",{children:["This puzzle is dedicated to everyone who tells me \"You can't have a final puzzle number one ",Object(S.jsx)("i",{children:"and"}),' number two".']}),Object(S.jsx)("p",{children:"You inspire me."}),Object(S.jsx)(ne,{details:nt}),Object(S.jsx)("br",{}),e.links]})},hidden:!0}],it=function(){return Object(S.jsxs)(h.a,{children:[Object(S.jsx)("br",{}),Object(S.jsx)(o.a,{variant:"h3",children:"Grid puzzles website"}),Object(S.jsx)("p",{children:"Hopefully the home of some interesting puzzles."}),lt.filter((function(e){return!e.hidden})).map((function(e){return Object(S.jsxs)(l.Fragment,{children:[Object(S.jsx)(a.b,{to:e.link,children:Object(S.jsx)(d.a,{children:Object(S.jsxs)(b.a,{children:[Object(S.jsx)(o.a,{variant:"h5",children:e.title}),e.description&&Object(S.jsx)("p",{children:e.description})]})})}),Object(S.jsx)("br",{})]},e.link)}))]})},st=Object(c.f)((function(e){var t=e.history;return Object(l.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null})),rt=function(e){return Object(S.jsx)(a.b,{to:e.to,style:{textDecoration:"none",color:"white",marginLeft:"32px"},children:Object(S.jsx)(o.a,{variant:"button",children:e.children})})},ct=lt.filter((function(e){return!e.hidden}));var at=function(){return Object(S.jsxs)(a.a,{children:[Object(S.jsx)(st,{}),Object(S.jsx)(u.a,{position:"sticky",children:Object(S.jsxs)(j.a,{children:[Object(S.jsx)(o.a,{variant:"h5",children:"Grid Puzzle"}),Object(S.jsx)(rt,{to:"/",children:"Home"}),Object(S.jsx)(rt,{to:lt[0].link,children:"Day 1"}),Object(S.jsx)(rt,{to:ct[ct.length-1].link,children:"Today"})]})}),Object(S.jsxs)(c.c,{children:[lt.map((function(e,t){var n=e.component,l=e.link;e.title;return Object(S.jsx)(c.a,{path:l,children:Object(S.jsx)(n,{links:Object(S.jsxs)("div",{style:{paddingTop:"8px",marginBottom:"32px"},children:[t>0&&Object(S.jsx)("div",{style:{float:"left"},children:Object(S.jsxs)(a.b,{to:lt[t-1].link,children:["\u2190 ",lt[t-1].title]})}),t<ct.length-1&&Object(S.jsx)("div",{style:{float:"right"},children:Object(S.jsxs)(a.b,{to:lt[t+1].link,children:[lt[t+1].title," \u2192"]})})]})})},t)})),Object(S.jsx)(c.a,{path:"/",children:Object(S.jsx)(it,{})})]})]})},ot=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,l=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),l(e),i(e),s(e),r(e)}))};r.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(at,{})}),document.getElementById("root")),ot()}},[[54,1,2]]]);
//# sourceMappingURL=main.54ee3086.chunk.js.map