"use strict";(self["webpackChunkvue_school_travel_app"]=self["webpackChunkvue_school_travel_app"]||[]).push([[483],{483:function(s,a,c){c.r(a),c.d(a,{default:function(){return z}});var l=c(252),t=c(577),e=c(262),i=c(201);const r={class:"m-3"},d={class:"row g-0"},n={class:"col-md-4"},u=["src"],o={class:"col-md-8"},_={class:"card-body"},p={class:"card-title"},m={class:"card-text"},v={class:"card-text"},h=(0,l.Uk)(" ISBN: "),b={class:"card-text"},f=(0,l.Uk)(" Price: "),w={class:"card-text"},k=(0,l.Uk)(" Modified On : "),g={class:"text-muted"};var x={__name:"ComicDetails",setup(s){const a=(0,i.yj)(),c=(0,e.iH)([]),x=async()=>{await fetch(`https://gateway.marvel.com/v1/public/comics/${a.params.id}?&ts=1660412526&apikey=5bf99f434c56b7b344223d891c551e4c&hash=f6e15b1a5fdd702ce8c364d031fc2acc`).then((s=>s.json())).then((s=>c.value=s.data.results))};return(0,l.bv)((()=>{x()})),(s,a)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",r,[(0,l._)("h6",{onClick:a[0]||(a[0]=a=>s.$router.back()),class:"cursor-pointer"},"Back")]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(c.value,(s=>((0,l.wg)(),(0,l.iD)("div",{class:"card mb-3",key:s.id},[(0,l._)("div",d,[(0,l._)("div",n,[(0,l._)("img",{src:`${s.thumbnail.path}.${s.thumbnail.extension}`,class:"img-fluid rounded-start",alt:"..."},null,8,u)]),(0,l._)("div",o,[(0,l._)("div",_,[(0,l._)("h5",p,(0,t.zw)(s.title),1),(0,l._)("p",m,(0,t.zw)(s.description),1),(0,l._)("p",v,[h,(0,l._)("small",null,(0,t.zw)(s.isbn),1)]),(0,l._)("p",b,[f,(0,l._)("small",null,(0,t.zw)(s.prices.price),1)]),(0,l._)("p",w,[k,(0,l._)("small",g,(0,t.zw)(s.modified),1)])])])])])))),128))],64))}};const y=x;var z=y}}]);
//# sourceMappingURL=483.ed5c656c.js.map