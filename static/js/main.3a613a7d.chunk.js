(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{17:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),s=r(10),c=r.n(s),a=r(5),o=r(2),d=r(6),l=r.n(d),x=r(7),p=r(4),j=r(1);var b=function(){var e=Object(o.g)().id,t=Object(n.useState)(!0),r=Object(p.a)(t,2),i=r[0],s=r[1],c=Object(n.useState)({}),d=Object(p.a)(c,2),b=d[0],u=d[1],h=Object(n.useCallback)(Object(x.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:r=t.sent,u(r.data.movie),s(!1);case 7:case"end":return t.stop()}}),t)}))),[e]);return Object(n.useEffect)((function(){h()}),[h]),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:i?Object(j.jsx)("h1",{children:"Loading..."}):Object(j.jsxs)("div",{style:{display:"flex",marginTop:"50px"},children:[Object(j.jsx)(a.b,{to:"/",children:Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"25px",width:"40px",height:"40px",border:"2px solid black",borderRadius:"50%",backgroundColor:"skyblue",position:"absolute",top:0,left:"50%",transform:"translateX(-84%) translateY(30%)"},children:Object(j.jsx)("span",{style:{transform:"translateY(-18%)"},children:"\ud83d\udc48"})})}),Object(j.jsxs)("div",{style:{display:"flex",width:"270px",flexDirection:"column",marginRight:"10px"},children:[Object(j.jsx)("img",{style:{borderTopLeftRadius:"20px",borderTopRightRadius:"20px"},src:b.medium_cover_image,alt:""}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"0 10px",border:"1.5px solid grey",height:"45px",borderTop:0,borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"},children:[Object(j.jsxs)("span",{style:{fontSize:"14px"},children:["\u2b50",b.rating]}),Object(j.jsxs)("span",{style:{fontSize:"14px"},children:["\ud83c\udfa6",b.download_count]}),Object(j.jsxs)("span",{style:{fontSize:"14px"},children:["\ud83d\udc4d",b.like_count]}),Object(j.jsxs)("span",{style:{fontSize:"14px"},children:["\ud83d\udd52",Math.floor(b.runtime/60),"H"," ",b.runtime-60*Math.floor(b.runtime/60),"Min"]})]})]}),Object(j.jsx)("div",{style:{width:"300px",border:"1.5px solid grey",borderRadius:"20px",padding:"0 10px",boxSizing:"border-box"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:b.title}),Object(j.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:b.genres.map((function(e){return Object(j.jsx)("div",{style:{backgroundColor:"grey",color:"white",padding:"2px 7px",borderRadius:"5px",marginRight:"5px",marginBottom:"5px"},children:e},e)}))}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:b.description_full})})]})})]})})};var u=function(e){var t=e.id,r=e.title,n=e.coverImg,i=e.summary,s=e.genres;return Object(j.jsxs)("div",{style:{display:"flex",boxShadow:"2px 2px 5px grey",justifyContent:"space-around",alignItems:"center",position:"relative"},children:[Object(j.jsx)("img",{src:n,alt:"",style:{width:"230px",height:"350px",boxShadow:"0px 0px 10px grey"}}),Object(j.jsxs)("div",{style:{width:"270px",alignSelf:"flex-start"},children:[Object(j.jsx)("h2",{children:r}),Object(j.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:s.map((function(e){return Object(j.jsx)("div",{style:{backgroundColor:"grey",color:"white",fontSize:"12px",padding:"2px 7px",borderRadius:"5px",marginRight:"5px",marginBottom:"5px"},children:e},e)}))}),Object(j.jsx)("p",{children:i.length>235?"".concat(i.slice(0,235),"..."):i}),Object(j.jsx)("div",{style:{backgroundColor:"black",color:"white",position:"absolute",bottom:"5%",right:"5%",padding:"5px 10px"},children:Object(j.jsx)(a.b,{style:{textDecoration:"none",color:"inherit"},to:"/movie/".concat(t),children:Object(j.jsx)("span",{children:"More Details?"})})})]})]})};var h=function(){var e=Object(n.useState)(!0),t=Object(p.a)(e,2),r=t[0],i=t[1],s=Object(n.useState)([]),c=Object(p.a)(s,2),a=c[0],o=c[1],d=function(){var e=Object(x.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px"},children:r?Object(j.jsx)("h1",{children:"Loading..."}):Object(j.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 600px)",gridAutoRows:"400px",gridGap:"50px"},children:a.map((function(e){return Object(j.jsx)(u,{id:e.id,title:e.title,coverImg:e.medium_cover_image,summary:e.summary,genres:e.genres},e.id)}))})})};var m=function(){return Object(j.jsx)(a.a,{basename:"/react-for-beginners",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/movie/:id",element:Object(j.jsx)(b,{})}),Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(h,{})})]})})};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3a613a7d.chunk.js.map