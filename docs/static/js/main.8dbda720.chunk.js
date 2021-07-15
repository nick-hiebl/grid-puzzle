(this["webpackJsonpgrid-puzzle"]=this["webpackJsonpgrid-puzzle"]||[]).push([[0],{43:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(28),r=n.n(c),o=(n(43),n(16)),a=n(4),l=n(66),u=n(69),j=n(70),h=n(65),d=n(67),b=n(68),x=n(23),O=n(17),p=n(29),v=n(30),g=n(31);var f=function(t){var e=t.enabled.map((function(t){return+t})),n=0;return e.forEach((function(i,s){1===i&&(!function(t,e,n,i){for(var s=[n];s.length;){var c=s.splice(0,1),r=Object(O.a)(c,1)[0];if(t[r]!==i&&0!==t[r]){t[r]=i;var o=r%e;o>0&&s.push(r-1),o<e-1&&s.push(r+1),r>=e&&s.push(r-e),r<e*e-e&&s.push(r+e)}}}(e,t.n,s,n+2),n+=1)})),n};function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return void 0===t?e:t}var z=function(){function t(e){Object(v.a)(this,t),this.n=void 0,this.state=void 0,this.colCounts=void 0,this.rowCounts=void 0,this.totalActive=void 0,this.numContinents=void 0;var n=e.n;if(this.n=n,this.state={enabled:Array(n*n).fill(!1),complete:!1,n:n},this.colCounts=e.colCounts||Array(n).fill(-1),this.rowCounts=e.rowCounts||Array(n).fill(-1),this.colCounts.some((function(t){return t<-1||t>n})))throw new Error("Invalid requirement forsome column "+JSON.stringify(this.colCounts));if(this.rowCounts.some((function(t){return t<-1||t>n})))throw new Error("Invalid requirement forsome column "+JSON.stringify(this.rowCounts));this.totalActive=m(e.totalActive),this.numContinents=m(e.numContinents)}return Object(g.a)(t,[{key:"isValid",value:function(t){var e=this;if(this.totalActive>=0&&t.enabled.reduce((function(t,e){return t+ +e}),0)!==this.totalActive)return!1;if(!this.colCounts.every((function(n,i){return-1===n||t.enabled.filter((function(t,n){return n%e.n===i})).reduce((function(t,e){return t+ +e}),0)===n})))return!1;if(!this.rowCounts.every((function(n,i){return-1===n||t.enabled.slice(i*e.n,(i+1)*e.n).reduce((function(t,e){return t+ +e}),0)===n})))return!1;if(-1!==this.numContinents&&f(t)!==this.numContinents)return!1;return!0}},{key:"getState",value:function(){return this.state}},{key:"read",value:function(t,e){var n=t+e*this.n;return this.state.enabled[n]}},{key:"toggle",value:function(t,e,n){var i=t+e*this.n,s={enabled:this.state.enabled.slice(),complete:!1,n:this.n};return s.enabled[i]=n,s.complete=this.isValid(s),this.state=s,this.state}}]),t}(),C=n(0);function y(t){return"".concat("/grid-puzzle","/").concat(t)}var w,k=["checked-1.png","checked-2.png","checked-3.png"].map(y),A=["unchecked-1.png","unchecked-2.png","unchecked-3.png"].map(y),T=Object(p.a)(k.concat(A));try{for(T.s();!(w=T.n()).done;){var q=w.value;(new Image).src=q}}catch(bt){T.e(bt)}finally{T.f()}var I=function(t){return t?k[Math.floor(Math.random()*k.length)]:A[Math.floor(Math.random()*A.length)]};var P=function(t){var e=t.status,n=t.onToggle,s=Object(i.useState)(I(e)),c=Object(O.a)(s,2),r=c[0],o=c[1],a=Object(i.useState)(!1),l=Object(O.a)(a,2),u=l[0],j=l[1];Object(i.useEffect)((function(){o(I(e))}),[e]);var h=Object(i.useCallback)((function(t){!function(t){if("type"in t){if("click"===t.type)return!1;if("contextmenu"===t.type)return!0}return"which"in t?3===t.which:"button"in t&&2===t.button}(t)?e?(o(I(!1)),n(!1),j(!1)):(o(I(!0)),n(!0),j(!0)):(t.preventDefault(),o(I(!1)),e||!u?(n(!1),j(!0)):j(!1))}),[u,n,e]);return Object(C.jsx)("button",{onClick:h,onContextMenu:h,style:{border:"2px solid black",backgroundImage:u?"url(".concat(r,")"):"",backgroundColor:"white",backgroundSize:"cover",padding:"0"}})},S=function(t){return Object(C.jsx)("div",{style:(e=t.n,{display:"inline-grid",gridTemplateColumns:"100px ".repeat(e),gridTemplateRows:"100px ".repeat(e),border:"4px solid black"}),children:t.children});var e},D={display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},F=function(t){var e=t.count,n=t.horizontal;return e>6?Object(C.jsx)(M,{text:e.toString(),horizontal:n}):e>=0?Object(C.jsx)(M,{alt:"".concat(e," in this ").concat(n?"row":"column"),image:y("counts/dot-".concat(e,".png")),horizontal:n}):Object(C.jsx)("div",{})},M=function(t){var e=t.alt,n=t.text,i=t.image,s=t.horizontal,c=t.width,r=void 0===c?"45px":c,o={transform:s?"rotate(90deg)":void 0,width:r,height:r,filter:"grayscale(100%) brightness(0%)"};return i&&n?Object(C.jsx)("div",{style:Object(x.a)(Object(x.a)(Object(x.a)({},o),D),{},{backgroundImage:"url(".concat(i,")"),backgroundSize:"cover",fontSize:"2em",fontWeight:900}),children:n}):Object(C.jsxs)("div",{style:D,children:[i&&Object(C.jsx)("img",{alt:e,style:o,src:i}),n&&n]})},L={width:"100px",height:"100%",gridArea:"extra-details",display:"flex",alignItems:"space-evenly",justifyContent:"center"},N=function(t){var e=t.puzzle;return-1!==e.numContinents?Object(C.jsx)("div",{style:L,children:-1!==e.numContinents&&Object(C.jsx)(M,{image:y("counts/continent.png"),alt:"Number of continents",text:e.numContinents.toString(),width:"60px"})}):null},E=function(t){var e,n=t.children,i=t.puzzle;return i.colCounts.some((function(t){return t>=0}))||i.rowCounts.some((function(t){return t>=0}))||-1!==i.totalActive?Object(C.jsxs)("div",{style:(e=i.n,{display:"inline-grid",gridTemplateRows:"45px ".concat(100*e+8,"px"),gridTemplateColumns:"auto ".concat(100*e+8,"px 45px"),gridTemplateAreas:'"extra-details top-clues total-count" "extra-details main-section side-clues"'}),children:[Object(C.jsx)(N,{puzzle:i}),Object(C.jsx)("div",{style:{gridArea:"top-clues",display:"grid",gridTemplateColumns:"100px ".repeat(i.n),justifyContent:"space-around"},children:i.colCounts.map((function(t,e){return Object(C.jsx)(F,{count:t},e)}))}),Object(C.jsx)("div",{style:{gridArea:"main-section"},children:n}),Object(C.jsx)("div",{style:{gridArea:"side-clues",display:"grid",gridTemplateRows:"100px ".repeat(i.n),alignContent:"space-around"},children:i.rowCounts.map((function(t,e){return Object(C.jsx)(F,{count:t,horizontal:!0},e)}))}),-1!==i.totalActive&&Object(C.jsx)("div",{style:{gridArea:"total-count",textAlign:"center",justifyContent:"center"},children:Object(C.jsx)("strong",{style:{fontSize:"2em"},children:i.totalActive})})]}):n},J=function(t){var e=t.onToggle,n=t.puzzle,i=t.state;return Object(C.jsx)(E,{puzzle:n,children:Object(C.jsx)(S,{n:n.n,children:i.enabled.map((function(t,i){var s=i%n.n,c=Math.floor(i/n.n);return Object(C.jsx)(P,{status:t,onToggle:e(s,c),i:i%n.n,j:Math.floor(i/n.n)},i)}))})})},B=function(t){var e=t.details,n=Object(i.useState)(new z(e)),s=Object(O.a)(n,1)[0],c=Object(i.useState)(s.getState()),r=Object(O.a)(c,2),o=r[0],a=r[1],l=Object(i.useCallback)((function(t,e){return function(n){a(s.toggle(t,e,n))}}),[s]);return Object(C.jsx)("div",{style:{backgroundColor:o.complete?"hsla(120, 80%, 80%, 50%)":"",padding:"8px"},children:Object(C.jsx)(J,{puzzle:s,onToggle:l,state:o})})},R={n:3,colCounts:[0,1,0],rowCounts:[0,1,0]},W={n:3,colCounts:[1,3,1],rowCounts:[2,2,1]},G={n:4,colCounts:[2,4,1,1],rowCounts:[3,2,1,2]},H={n:5,colCounts:[3,1,3,3,4],rowCounts:[5,2,4,0,3]},V={n:5,colCounts:[1,1,2,4,4],rowCounts:[2,4,3,0,3]},Y={n:6,colCounts:[1,2,4,1,0,1],rowCounts:[0,4,2,1,1,1]},K={n:3,colCounts:[0,1,0],rowCounts:[0,-1,-1]},Q={n:3,colCounts:[0,1,-1],rowCounts:[-1,0,-1],totalActive:2},U={n:3,colCounts:[2,0,-1],rowCounts:[1,-1,1]},X={n:3,colCounts:[2,0,-1],rowCounts:[1,-1,1],totalActive:3},Z={n:4,colCounts:[1,3,-1,2],rowCounts:[-1,-1,2,1],totalActive:10},$={n:4,colCounts:[3,1,-1,4],rowCounts:[4,-1,3,2],totalActive:11},_={n:5,colCounts:[1,-1,-1,3,2],rowCounts:[-1,5,2,-1,2],totalActive:9},tt={n:5,colCounts:[1,-1,-1,3,2],rowCounts:[-1,5,2,-1,2],totalActive:16},et={n:3,colCounts:[0,-1,0],rowCounts:[-1,-1,-1],totalActive:2,numContinents:2},nt={n:3,colCounts:[-1,-1,-1],rowCounts:[-1,-1,-1],totalActive:4,numContinents:3},it={n:3,colCounts:[2,1,2],rowCounts:[1,2,2],numContinents:2},st={n:3,colCounts:[-1,1,3],rowCounts:[-1,2,2],numContinents:2},ct={n:4,colCounts:[2,4,2,-1],rowCounts:[2,4,-1,-1],totalActive:10,numContinents:2},rt={n:4,colCounts:[3,2,-1,0],rowCounts:[3,1,2,-1],totalActive:8,numContinents:2},ot={n:5,colCounts:[-1,2,2,3,1],rowCounts:[3,2,1,-1,1],totalActive:9,numContinents:2},at={n:5,colCounts:[-1,2,2,3,1],rowCounts:[3,2,1,-1,1],totalActive:9,numContinents:8},lt=[{title:"Day 1: the beginning",description:"The first day",link:"/days/1",component:function(t){return Object(C.jsxs)(h.a,{children:[t.links,Object(C.jsx)(l.a,{variant:"h3",children:"Day 1"}),Object(C.jsx)("p",{children:"I'm making a grid-based puzzle and going to add a new idea/mechanic to the puzzles each day to make them more interesting/challenging or add variety etc."}),Object(C.jsx)("p",{children:'Core idea for the puzzle on day 1 is that we have a grid, with a hint about how many "active" squares there are in each row/column.'}),Object(C.jsx)(l.a,{variant:"h4",children:"Intro Puzzle"}),Object(C.jsx)(B,{details:R}),Object(C.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(C.jsx)("p",{children:"I hope the solution to this one is straightforward enough. The background will turn green once the puzzle is solved."}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #1"}),Object(C.jsx)(B,{details:W}),Object(C.jsxs)("p",{children:[Object(C.jsx)("strong",{children:"Note:"})," These puzzles do not necessarily have unique solutions."]}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #2"}),Object(C.jsx)("p",{children:"Stepping it up to 4 by 4 now."}),Object(C.jsx)(B,{details:G}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #3"}),Object(C.jsx)("p",{children:"And on to 5 by 5 just as quickly."}),Object(C.jsx)(B,{details:H}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #4"}),Object(C.jsx)(B,{details:V}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Final puzzle"}),Object(C.jsx)(B,{details:Y}),Object(C.jsx)("br",{}),t.links]})}},{title:"Day 2: some variation",description:"Adding a little variety/ambiguity",link:"/days/2",component:function(t){return Object(C.jsxs)(h.a,{children:[t.links,Object(C.jsx)(l.a,{variant:"h3",children:"Day 2"}),Object(C.jsx)("p",{children:"Let's add a little variety to the very simple concept introduced yesterday."}),Object(C.jsx)("p",{children:"What if we don't know exactly how many active squares are in some of the rows and columns?"}),Object(C.jsx)(l.a,{variant:"h5",children:"A note on controls"}),Object(C.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(C.jsx)(l.a,{variant:"h4",children:"Intro Puzzle"}),Object(C.jsx)(B,{details:K}),Object(C.jsxs)("p",{children:[Object(C.jsx)("strong",{children:"Note:"})," There is a difference between the empty circle and no marking at all."]}),Object(C.jsx)("p",{children:"Not too bad yet, I hope."}),Object(C.jsx)(l.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(C.jsxs)("p",{children:["What if we also know how many active squares are in the puzzle ",Object(C.jsx)("strong",{children:"in total"}),"?"]}),Object(C.jsx)(B,{details:Q}),Object(C.jsx)("p",{children:"I guess that adds a bit of interest to the scenario."}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #1"}),Object(C.jsx)("p",{children:"Let's do some puzzles now."}),Object(C.jsx)(B,{details:U}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #2"}),Object(C.jsx)("p",{children:"Does one more change things?"}),Object(C.jsx)(B,{details:X}),Object(C.jsx)("p",{children:"Interestingly, there are still more solutions to even this puzzle than I thought at first."}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #3"}),Object(C.jsx)(B,{details:Z}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #4"}),Object(C.jsx)(B,{details:$}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Final puzzle #1"}),Object(C.jsx)(B,{details:_}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Final puzzle #2"}),Object(C.jsx)("p",{children:"Identical to the puzzle above except for the total count."}),Object(C.jsx)(B,{details:tt}),Object(C.jsx)("br",{}),t.links]})}},{title:"Day 3: more ideas",description:"Something something",link:"/days/3",component:function(t){return Object(C.jsxs)(h.a,{children:[t.links,Object(C.jsx)(l.a,{variant:"h3",children:"Day 3"}),Object(C.jsx)("p",{children:"Let's continue adding more features!"}),Object(C.jsx)(l.a,{variant:"h5",children:"A note on controls"}),Object(C.jsx)("p",{children:"To signify an active square, click to draw a big dot in that square. A right click will mark a square with grey strokes. This counts as the square still being inactive, but can be used as a note-to-self that the square is definitely not active while working out the puzzle."}),Object(C.jsx)(l.a,{variant:"h4",children:"Intro Puzzle"}),Object(C.jsx)(B,{details:et}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Intro Puzzle #2"}),Object(C.jsx)("p",{children:"You can play around here to understand better what the rule is for today."}),Object(C.jsx)(B,{details:nt}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #1"}),Object(C.jsx)("p",{children:"Let's do some puzzles now."}),Object(C.jsx)(B,{details:it}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #2"}),Object(C.jsx)(B,{details:st}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #3"}),Object(C.jsx)(B,{details:ct}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Puzzle #4"}),Object(C.jsx)(B,{details:rt}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Final puzzle #1"}),Object(C.jsx)(B,{details:ot}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h4",children:"Final puzzle #2"}),Object(C.jsx)("p",{children:"Almost identical to the puzzle above."}),Object(C.jsx)(B,{details:at}),Object(C.jsx)("br",{}),t.links]})}}],ut=function(){return Object(C.jsxs)(h.a,{children:[Object(C.jsx)(l.a,{variant:"h3",children:"Grid puzzles website"}),Object(C.jsx)("p",{children:"Hopefully the home of some interesting puzzles."}),lt.map((function(t){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(o.b,{to:t.link,children:Object(C.jsx)(d.a,{children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(l.a,{variant:"h5",children:t.title}),t.description&&Object(C.jsx)("p",{children:t.description})]})})},t.link),Object(C.jsx)("br",{})]})}))]})},jt=function(t){return Object(C.jsx)(o.b,{to:t.to,style:{textDecoration:"none",color:"white",marginLeft:"20px"},children:Object(C.jsx)(l.a,{variant:"button",children:t.children})})};var ht=function(){return Object(C.jsxs)(o.a,{children:[Object(C.jsx)(u.a,{position:"static",children:Object(C.jsxs)(j.a,{children:[Object(C.jsx)(l.a,{variant:"h5",children:"Grid Puzzle"}),Object(C.jsx)(jt,{to:"/",children:"Home"}),Object(C.jsx)(jt,{to:lt[0].link,children:"Day 1"}),Object(C.jsx)(jt,{to:lt[lt.length-1].link,children:"Today"})]})}),Object(C.jsxs)(a.c,{children:[lt.map((function(t,e){var n=t.component,i=t.link;t.title;return Object(C.jsx)(a.a,{path:i,children:Object(C.jsx)(n,{links:Object(C.jsxs)("div",{style:{paddingTop:"8px",marginBottom:"32px"},children:[e>0&&Object(C.jsx)("div",{style:{float:"left"},children:Object(C.jsxs)(o.b,{to:lt[e-1].link,children:["\u2190 ",lt[e-1].title]})}),e<lt.length-1&&Object(C.jsx)("div",{style:{float:"right"},children:Object(C.jsxs)(o.b,{to:lt[e+1].link,children:[lt[e+1].title," \u2192"]})})]})})},e)})),Object(C.jsx)(a.a,{path:"/",children:Object(C.jsx)(ut,{})})]})]})},dt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),i(t),s(t),c(t),r(t)}))};r.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(ht,{})}),document.getElementById("root")),dt()}},[[53,1,2]]]);
//# sourceMappingURL=main.8dbda720.chunk.js.map