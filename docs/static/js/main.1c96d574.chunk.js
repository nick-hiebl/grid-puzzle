(this["webpackJsonpgrid-puzzle"]=this["webpackJsonpgrid-puzzle"]||[]).push([[0],{44:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var l=n(1),i=n.n(l),s=n(30),c=n.n(s),r=(n(44),n(4)),a=n(14),o=n(67),u=n(70),j=n(71),h=n(66),d=n(68),b=n(69),O=n(18),x=n(21),p=n(17),v=n(22),f=n(31),g=n(32);var z,m=function(e){var t=e.enabled.map((function(e){return+e})),n=0;return t.forEach((function(l,i){1===l&&(!function(e,t,n,l){for(var i=[n];i.length;){var s=i.splice(0,1),c=Object(p.a)(s,1)[0];if(e[c]!==l&&0!==e[c]){e[c]=l;var r=c%t;r>0&&i.push(c-1),r<t-1&&i.push(c+1),c>=t&&i.push(c-t),c<t*t-t&&i.push(c+t)}}}(t,e.n,i,n+2),n+=1)})),n};function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return void 0===e?t:e}function w(e){return"number"==typeof e?e:-1}function y(e){return"number"==typeof e||null==e?null:e}!function(e){e.NO_TRIPLES="NO_TRIPLES"}(z||(z={}));var k=function(){function e(t){Object(f.a)(this,e),this.n=void 0,this.state=void 0,this.colCounts=void 0,this.rowCounts=void 0,this.colRules=void 0,this.rowRules=void 0,this.totalActive=void 0,this.numContinents=void 0;var n=t.n;if(this.n=n,this.state={enabled:Array(n*n).fill(!1),complete:!1,n:n},this.colCounts=(t.colClues||Array(n).fill(null)).map(w),this.rowCounts=(t.rowClues||Array(n).fill(null)).map(w),this.colRules=(t.colClues||Array(n).fill(null)).map(y),this.rowRules=(t.rowClues||Array(n).fill(null)).map(y),this.colCounts.some((function(e){return e<-1||e>n})))throw new Error("Invalid requirement forsome column "+JSON.stringify(this.colCounts));if(this.rowCounts.some((function(e){return e<-1||e>n})))throw new Error("Invalid requirement forsome column "+JSON.stringify(this.rowCounts));this.totalActive=C(t.totalActive),this.numContinents=C(t.numContinents)}return Object(g.a)(e,[{key:"isLineValid",value:function(e,t,n){return(t!==z.NO_TRIPLES||!function(e){var t,n=0,l=Object(v.a)(e);try{for(l.s();!(t=l.n()).done;)if(t.value?n++:n=0,3===n)return!0}catch(i){l.e(i)}finally{l.f()}return!1}(e))&&(-1===n||e.reduce((function(e,t){return e+ +t}),0)===n)}},{key:"isValid",value:function(e){var t=this;if(this.totalActive>=0&&e.enabled.reduce((function(e,t){return e+ +t}),0)!==this.totalActive)return!1;if(!this.colCounts.every((function(n,l){var i=e.enabled.filter((function(e,n){return n%t.n===l}));return t.isLineValid(i,t.colRules[l],n)})))return!1;if(!this.rowCounts.every((function(n,l){var i=e.enabled.slice(l*t.n,(l+1)*t.n);return t.isLineValid(i,t.rowRules[l],n)})))return!1;if(-1!==this.numContinents&&m(e)!==this.numContinents)return!1;return!0}},{key:"getState",value:function(){return this.state}},{key:"read",value:function(e,t){var n=e+t*this.n;return this.state.enabled[n]}},{key:"toggle",value:function(e,t,n){var l=e+t*this.n,i={enabled:this.state.enabled.slice(),complete:!1,n:this.n};return i.enabled[l]=n,i.complete=this.isValid(i),this.state=i,this.state}}]),e}(),P=n(0);function I(e){return"".concat("/grid-puzzle","/").concat(e)}var T,A=["checked-1.png","checked-2.png","checked-3.png"].map(I),S=["unchecked-1.png","unchecked-2.png","unchecked-3.png"].map(I),L=Object(v.a)(A.concat(S));try{for(L.s();!(T=L.n()).done;){var R=T.value;(new Image).src=R}}catch(Ee){L.e(Ee)}finally{L.f()}var N=function(e){return e?A[Math.floor(Math.random()*A.length)]:S[Math.floor(Math.random()*S.length)]};var E=function(e){var t=e.status,n=e.onToggle,i=Object(l.useState)(N(t)),s=Object(p.a)(i,2),c=s[0],r=s[1],a=Object(l.useState)(!1),o=Object(p.a)(a,2),u=o[0],j=o[1];Object(l.useEffect)((function(){r(N(t))}),[t]);var h=Object(l.useCallback)((function(e){!function(e){if("type"in e){if("click"===e.type)return!1;if("contextmenu"===e.type)return!0}return"which"in e?3===e.which:"button"in e&&2===e.button}(e)?t?(r(N(!1)),n(!1),j(!1)):(r(N(!0)),n(!0),j(!0)):(e.preventDefault(),r(N(!1)),t||!u?(n(!1),j(!0)):j(!1))}),[u,n,t]);return Object(P.jsx)("button",{onClick:h,onContextMenu:h,style:{border:"2px solid black",backgroundImage:u?"url(".concat(c,")"):"",backgroundColor:"white",backgroundSize:"cover",padding:"0"}})},_=function(e){return Object(P.jsx)("div",{style:(t=e.n,{display:"inline-grid",gridTemplateColumns:"100px ".repeat(t),gridTemplateRows:"100px ".repeat(t),border:"4px solid black"}),children:e.children});var t},q={display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},D=Object(x.a)({},z.NO_TRIPLES,{image:I("counts/circle-circle-cross.png"),alt:"Circle circle cross"}),F=function(e){var t=e.count,n=e.horizontal,l=e.rule;return t>6?Object(P.jsx)(M,{text:t.toString(),horizontal:n}):t>=0?Object(P.jsx)(M,{alt:"".concat(t," in this ").concat(n?"row":"column"),image:I("counts/dot-".concat(t,".png")),horizontal:n}):l?Object(P.jsx)(M,Object(O.a)(Object(O.a)({},D[l]),{},{horizontal:n})):Object(P.jsx)("div",{})},M=function(e){var t=e.alt,n=e.text,l=e.image,i=e.horizontal,s=e.width,c=void 0===s?"45px":s,r={transform:i?"rotate(90deg)":void 0,width:c,height:c,filter:"grayscale(100%) brightness(0%)"};return l&&n?Object(P.jsx)("div",{style:Object(O.a)(Object(O.a)(Object(O.a)({},r),q),{},{backgroundImage:"url(".concat(l,")"),backgroundSize:"cover",fontSize:"2em",fontWeight:900}),children:n}):Object(P.jsxs)("div",{style:q,children:[l&&Object(P.jsx)("img",{alt:t,style:r,src:l}),n&&n]})},V={width:"100px",height:"100%",gridArea:"extra-details",display:"flex",alignItems:"space-evenly",justifyContent:"center"},J=function(e){var t=e.puzzle;return-1!==t.numContinents?Object(P.jsx)("div",{style:V,children:-1!==t.numContinents&&Object(P.jsx)(M,{image:I("counts/continent.png"),alt:"Number of continents",text:t.numContinents.toString(),width:"60px"})}):null},W=function(e){var t,n=e.children,l=e.puzzle;return l.colCounts.some((function(e){return e>=0}))||l.rowCounts.some((function(e){return e>=0}))||-1!==l.totalActive?Object(P.jsxs)("div",{style:(t=l.n,{display:"inline-grid",gridTemplateRows:"45px ".concat(100*t+8,"px"),gridTemplateColumns:"auto ".concat(100*t+8,"px 45px"),gridTemplateAreas:'"extra-details top-clues total-count" "extra-details main-section side-clues"'}),children:[Object(P.jsx)(J,{puzzle:l}),Object(P.jsx)("div",{style:{gridArea:"top-clues",display:"grid",gridTemplateColumns:"100px ".repeat(l.n),justifyContent:"space-around"},children:l.colCounts.map((function(e,t){return Object(P.jsx)(F,{count:e,rule:l.colRules[t]},t)}))}),Object(P.jsx)("div",{style:{gridArea:"main-section"},children:n}),Object(P.jsx)("div",{style:{gridArea:"side-clues",display:"grid",gridTemplateRows:"100px ".repeat(l.n),alignContent:"space-around"},children:l.rowCounts.map((function(e,t){return Object(P.jsx)(F,{count:e,rule:l.rowRules[t],horizontal:!0},t)}))}),-1!==l.totalActive&&Object(P.jsx)("div",{style:{gridArea:"total-count",textAlign:"center",justifyContent:"center"},children:Object(P.jsx)("strong",{style:{fontSize:"2em"},children:l.totalActive})})]}):n},B=function(e){var t=e.onToggle,n=e.puzzle,l=e.state;return Object(P.jsx)(W,{puzzle:n,children:Object(P.jsx)(_,{n:n.n,children:l.enabled.map((function(e,l){var i=l%n.n,s=Math.floor(l/n.n);return Object(P.jsx)(E,{status:e,onToggle:t(i,s),i:l%n.n,j:Math.floor(l/n.n)},l)}))})})},H=function(e){var t=e.details,n=Object(l.useState)(new k(t)),i=Object(p.a)(n,1)[0],s=Object(l.useState)(i.getState()),c=Object(p.a)(s,2),r=c[0],a=c[1],o=Object(l.useCallback)((function(e,t){return function(n){a(i.toggle(e,t,n))}}),[i]);return Object(P.jsx)("div",{style:{backgroundColor:r.complete?"hsla(120, 80%, 80%, 50%)":"",padding:"8px"},children:Object(P.jsx)(B,{puzzle:i,onToggle:o,state:r})})},G={n:3,colClues:[0,1,0],rowClues:[0,1,0]},Y={n:3,colClues:[1,3,1],rowClues:[2,2,1]},K={n:4,colClues:[2,4,1,1],rowClues:[3,2,1,2]},Q={n:5,colClues:[3,1,3,3,4],rowClues:[5,2,4,0,3]},U={n:5,colClues:[1,1,2,4,4],rowClues:[2,4,3,0,3]},X={n:6,colClues:[1,2,4,1,0,1],rowClues:[0,4,2,1,1,1]},Z=function(e){return Object(P.jsxs)(h.a,{children:[e.links,Object(P.jsx)(o.a,{variant:"h3",children:"Day 1"}),Object(P.jsx)("p",{children:"I'm making a grid-based puzzle and going to add a new idea/mechanic to the puzzles each day to make them more interesting/challenging or add variety etc."}),Object(P.jsx)("p",{children:'Core idea for the puzzle on day 1 is that we have a grid, with a hint about how many "active" squares there are in each row/column.'}),Object(P.jsx)(o.a,{variant:"h4",children:"Intro Puzzle"}),Object(P.jsx)(H,{details:G}),Object(P.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(P.jsx)("p",{children:"I hope the solution to this one is straightforward enough. The background will turn green once the puzzle is solved."}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(P.jsx)(H,{details:Y}),Object(P.jsxs)("p",{children:[Object(P.jsx)("strong",{children:"Note:"})," These puzzles do not necessarily have unique solutions."]}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(P.jsx)("p",{children:"Stepping it up to 4 by 4 now."}),Object(P.jsx)(H,{details:K}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(P.jsx)("p",{children:"And on to 5 by 5 just as quickly."}),Object(P.jsx)(H,{details:Q}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(P.jsx)(H,{details:U}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Final puzzle"}),Object(P.jsx)(H,{details:X}),Object(P.jsx)("br",{}),e.links]})},$={n:3,colClues:[0,1,0],rowClues:[0,-1,-1]},ee={n:3,colClues:[0,1,-1],rowClues:[-1,0,-1],totalActive:2},te={n:3,colClues:[2,0,-1],rowClues:[1,-1,1]},ne={n:3,colClues:[2,0,-1],rowClues:[1,-1,1],totalActive:3},le={n:4,colClues:[1,3,-1,2],rowClues:[-1,-1,2,1],totalActive:10},ie={n:4,colClues:[3,1,-1,4],rowClues:[4,-1,3,2],totalActive:11},se={n:5,colClues:[1,-1,-1,3,2],rowClues:[-1,5,2,-1,2],totalActive:9},ce={n:5,colClues:[1,-1,-1,3,2],rowClues:[-1,5,2,-1,2],totalActive:16},re=function(e){return Object(P.jsxs)(h.a,{children:[e.links,Object(P.jsx)(o.a,{variant:"h3",children:"Day 2"}),Object(P.jsx)("p",{children:"Let's add a little variety to the very simple concept introduced yesterday."}),Object(P.jsx)("p",{children:"What if we don't know exactly how many active squares are in some of the rows and columns?"}),Object(P.jsx)(o.a,{variant:"h5",children:"A note on controls"}),Object(P.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(P.jsx)(o.a,{variant:"h4",children:"Intro Puzzle"}),Object(P.jsx)(H,{details:$}),Object(P.jsxs)("p",{children:[Object(P.jsx)("strong",{children:"Note:"})," There is a difference between the empty circle and no marking at all."]}),Object(P.jsx)("p",{children:"Not too bad yet, I hope."}),Object(P.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(P.jsxs)("p",{children:["What if we also know how many active squares are in the puzzle ",Object(P.jsx)("strong",{children:"in total"}),"?"]}),Object(P.jsx)(H,{details:ee}),Object(P.jsx)("p",{children:"I guess that adds a bit of interest to the scenario."}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(P.jsx)("p",{children:"Let's do some puzzles now."}),Object(P.jsx)(H,{details:te}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(P.jsx)("p",{children:"Does one more change things?"}),Object(P.jsx)(H,{details:ne}),Object(P.jsx)("p",{children:"Interestingly, there are still more solutions to even this puzzle than I thought at first."}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(P.jsx)(H,{details:le}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(P.jsx)(H,{details:ie}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Final puzzle #1"}),Object(P.jsx)(H,{details:se}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Final puzzle #2"}),Object(P.jsx)("p",{children:"Identical to the puzzle above except for the total count."}),Object(P.jsx)(H,{details:ce}),Object(P.jsx)("br",{}),e.links]})},ae={n:3,colClues:[0,null,0],rowClues:[null,null,null],totalActive:2,numContinents:2},oe={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:1},ue={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:2},je={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:3},he={n:3,colClues:[null,null,null],rowClues:[null,null,null],totalActive:4,numContinents:4},de={n:3,colClues:[2,1,2],rowClues:[1,2,2],numContinents:2},be={n:3,colClues:[null,1,3],rowClues:[null,2,2],numContinents:2},Oe={n:4,colClues:[2,4,2,null],rowClues:[2,4,null,null],totalActive:10,numContinents:2},xe={n:4,colClues:[3,2,null,0],rowClues:[3,1,2,null],totalActive:8,numContinents:2},pe={n:5,colClues:[null,2,null,2,1],rowClues:[2,null,1,2,1],numContinents:1},ve={n:5,colClues:[null,2,2,3,1],rowClues:[3,2,1,null,1],totalActive:9,numContinents:2},fe={n:5,colClues:[null,2,2,3,1],rowClues:[3,2,1,null,1],totalActive:9,numContinents:8},ge=function(e){return Object(P.jsxs)(h.a,{children:[e.links,Object(P.jsx)(o.a,{variant:"h3",children:"Day 3"}),Object(P.jsx)("p",{children:"Let's continue adding more features!"}),Object(P.jsx)(o.a,{variant:"h5",children:"A note on controls"}),Object(P.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(P.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #1"}),Object(P.jsx)(H,{details:ae}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(P.jsx)("p",{children:"You can play around here to understand better what the rule is for today."}),Object(P.jsx)(H,{details:oe}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #3"}),Object(P.jsxs)("p",{children:["It's always worth finding some answers that are ",Object(P.jsx)("i",{children:"wrong"})," as well as correct ones. This helps you test your hypothesis."]}),Object(P.jsx)(H,{details:ue}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #4"}),Object(P.jsx)("p",{children:"Follow the pattern."}),Object(P.jsx)(H,{details:je}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #5"}),Object(P.jsx)("p",{children:"Hopefully this one should be understandable at this point."}),Object(P.jsx)(H,{details:he}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(P.jsx)("p",{children:"Let's do some puzzles now."}),Object(P.jsx)(H,{details:de}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(P.jsx)(H,{details:be}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(P.jsx)(H,{details:Oe}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(P.jsx)(H,{details:xe}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #5"}),Object(P.jsx)(H,{details:pe}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Final puzzle #1"}),Object(P.jsx)(H,{details:ve}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Final puzzle #2"}),Object(P.jsx)("p",{children:"Almost identical to the puzzle above."}),Object(P.jsx)(H,{details:fe}),Object(P.jsx)("br",{}),e.links]})},ze=function(e){var t=e.index,n=e.children,l=Te[t],i=l.link,s=l.title;return n?Object(P.jsx)(a.b,{to:i,children:n}):Object(P.jsx)(a.b,{to:i,children:s})},me={n:5,colClues:[0,0,z.NO_TRIPLES,0,0],rowClues:[null,null,null,null,null],totalActive:3},Ce={n:3,colClues:[z.NO_TRIPLES,z.NO_TRIPLES,z.NO_TRIPLES],rowClues:[z.NO_TRIPLES,z.NO_TRIPLES,z.NO_TRIPLES],totalActive:6},we={n:4,colClues:[z.NO_TRIPLES,1,z.NO_TRIPLES,z.NO_TRIPLES],rowClues:[1,3,3,z.NO_TRIPLES],totalActive:8},ye={n:4,colClues:[z.NO_TRIPLES,z.NO_TRIPLES,2,3],rowClues:[1,z.NO_TRIPLES,z.NO_TRIPLES,3],totalActive:10},ke={n:5,colClues:[z.NO_TRIPLES,4,z.NO_TRIPLES,z.NO_TRIPLES,5],rowClues:[5,z.NO_TRIPLES,z.NO_TRIPLES,3,3],totalActive:18},Pe={n:5,colClues:[4,4,z.NO_TRIPLES,4,z.NO_TRIPLES],rowClues:[5,4,3,5,z.NO_TRIPLES],totalActive:20},Ie={n:6,colClues:[6,3,5,z.NO_TRIPLES,z.NO_TRIPLES,z.NO_TRIPLES],rowClues:[4,z.NO_TRIPLES,2,5,4,6],numContinents:1},Te=[{title:"Day 1: The beginning",description:"The first day",link:"/days/1",component:Z},{title:"Day 2: Some variation",description:"Adding a little variety/ambiguity",link:"/days/2",component:re},{title:"Day 3: A fuzzy number",description:"No guidance on an island",link:"/days/3",component:ge},{title:'Day 4: "Circle circle cross"',description:"Whatever could it mean?",link:"/days/4",component:function(e){return Object(P.jsxs)(h.a,{children:[e.links,Object(P.jsx)(o.a,{variant:"h3",children:"Day 4"}),Object(P.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #1"}),Object(P.jsx)(H,{details:me}),Object(P.jsx)("p",{children:"Make sure to get this one wrong too, don't move on straight away."}),Object(P.jsx)(o.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(P.jsx)("p",{children:"You can play around here to understand better what the rule is for today."}),Object(P.jsx)(H,{details:Ce}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #1"}),Object(P.jsx)("p",{children:"Let's do some puzzles now."}),Object(P.jsx)(H,{details:we}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #2"}),Object(P.jsx)(H,{details:ye}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #3"}),Object(P.jsx)(H,{details:ke}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Puzzle #4"}),Object(P.jsx)(H,{details:Pe}),Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h4",children:"Final puzzle"}),Object(P.jsxs)("p",{children:["If you're not familiar with this feature in the top-left, you should revisit ",Object(P.jsx)(ze,{index:2})]}),Object(P.jsx)(H,{details:Ie}),Object(P.jsx)("br",{}),e.links]})}}],Ae=function(){return Object(P.jsxs)(h.a,{children:[Object(P.jsx)("br",{}),Object(P.jsx)(o.a,{variant:"h3",children:"Grid puzzles website"}),Object(P.jsx)("p",{children:"Hopefully the home of some interesting puzzles."}),Te.map((function(e){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(a.b,{to:e.link,children:Object(P.jsx)(d.a,{children:Object(P.jsxs)(b.a,{children:[Object(P.jsx)(o.a,{variant:"h5",children:e.title}),e.description&&Object(P.jsx)("p",{children:e.description})]})})},e.link),Object(P.jsx)("br",{})]})}))]})},Se=Object(r.f)((function(e){var t=e.history;return Object(l.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null})),Le=function(e){return Object(P.jsx)(a.b,{to:e.to,style:{textDecoration:"none",color:"white",marginLeft:"32px"},children:Object(P.jsx)(o.a,{variant:"button",children:e.children})})};var Re=function(){return Object(P.jsxs)(a.a,{children:[Object(P.jsx)(Se,{}),Object(P.jsx)(u.a,{position:"sticky",children:Object(P.jsxs)(j.a,{children:[Object(P.jsx)(o.a,{variant:"h5",children:"Grid Puzzle"}),Object(P.jsx)(Le,{to:"/",children:"Home"}),Object(P.jsx)(Le,{to:Te[0].link,children:"Day 1"}),Object(P.jsx)(Le,{to:Te[Te.length-1].link,children:"Today"})]})}),Object(P.jsxs)(r.c,{children:[Te.map((function(e,t){var n=e.component,l=e.link;e.title;return Object(P.jsx)(r.a,{path:l,children:Object(P.jsx)(n,{links:Object(P.jsxs)("div",{style:{paddingTop:"8px",marginBottom:"32px"},children:[t>0&&Object(P.jsx)("div",{style:{float:"left"},children:Object(P.jsxs)(a.b,{to:Te[t-1].link,children:["\u2190 ",Te[t-1].title]})}),t<Te.length-1&&Object(P.jsx)("div",{style:{float:"right"},children:Object(P.jsxs)(a.b,{to:Te[t+1].link,children:[Te[t+1].title," \u2192"]})})]})})},t)})),Object(P.jsx)(r.a,{path:"/",children:Object(P.jsx)(Ae,{})})]})]})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,l=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),l(e),i(e),s(e),c(e)}))};c.a.render(Object(P.jsx)(i.a.StrictMode,{children:Object(P.jsx)(Re,{})}),document.getElementById("root")),Ne()}},[[54,1,2]]]);
//# sourceMappingURL=main.1c96d574.chunk.js.map