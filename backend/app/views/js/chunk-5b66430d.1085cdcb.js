(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b66430d"],{"4b11":function(t,e,u){"use strict";u("7f2a")},"7a79":function(t,e,u){"use strict";u.r(e);u("a4d3"),u("e01a");var n=u("7a23"),i={key:0,class:"edit-form"},r=Object(n["e"])("h4",null,"Tutorial",-1),l={class:"form-group"},o=Object(n["e"])("label",{for:"title"},"Title",-1),c={class:"form-group"},a=Object(n["e"])("label",{for:"description"},"Description",-1),s={class:"form-group"},d=Object(n["e"])("label",null,[Object(n["e"])("strong",null,"Status:")],-1),b={key:1},p=Object(n["e"])("br",null,null,-1),f=Object(n["e"])("p",null,"Please click on a Tutorial...",-1),h=[p,f];function g(t,e,u,p,f,g){return f.currentTutorial?(Object(n["q"])(),Object(n["d"])("div",i,[r,Object(n["e"])("form",null,[Object(n["e"])("div",l,[o,Object(n["C"])(Object(n["e"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=function(t){return f.currentTutorial.title=t})},null,512),[[n["z"],f.currentTutorial.title]])]),Object(n["e"])("div",c,[a,Object(n["C"])(Object(n["e"])("input",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[1]||(e[1]=function(t){return f.currentTutorial.description=t})},null,512),[[n["z"],f.currentTutorial.description]])]),Object(n["e"])("div",s,[d,Object(n["f"])(" "+Object(n["x"])(f.currentTutorial.published?"Published":"Pending"),1)])]),f.currentTutorial.published?(Object(n["q"])(),Object(n["d"])("button",{key:0,class:"badge badge-primary mr-2",onClick:e[2]||(e[2]=function(t){return g.updatePublished(!1)})}," UnPublish ")):(Object(n["q"])(),Object(n["d"])("button",{key:1,class:"badge badge-primary mr-2",onClick:e[3]||(e[3]=function(t){return g.updatePublished(!0)})}," Publish ")),Object(n["e"])("button",{class:"badge badge-danger mr-2",onClick:e[4]||(e[4]=function(){return g.deleteTutorial&&g.deleteTutorial.apply(g,arguments)})}," Delete "),Object(n["e"])("button",{type:"submit",class:"badge badge-success",onClick:e[5]||(e[5]=function(){return g.updateTutorial&&g.updateTutorial.apply(g,arguments)})}," Update "),Object(n["e"])("p",null,Object(n["x"])(f.message),1)])):(Object(n["q"])(),Object(n["d"])("div",b,h))}var T=u("f652"),j={name:"tutorial",data:function(){return{currentTutorial:null,message:""}},methods:{getTutorial:function(t){var e=this;T["a"].get(t).then((function(t){e.currentTutorial=t.data,console.log(t.data)})).catch((function(t){console.log(t)}))},updatePublished:function(t){var e=this,u={id:this.currentTutorial.id,title:this.currentTutorial.title,description:this.currentTutorial.description,published:t};T["a"].update(this.currentTutorial.id,u).then((function(u){console.log(u.data),e.currentTutorial.published=t,e.message="The status was updated successfully!"})).catch((function(t){console.log(t)}))},updateTutorial:function(){var t=this;T["a"].update(this.currentTutorial.id,this.currentTutorial).then((function(e){console.log(e.data),t.message="The tutorial was updated successfully!"})).catch((function(t){console.log(t)}))},deleteTutorial:function(){var t=this;T["a"].delete(this.currentTutorial.id).then((function(e){console.log(e.data),t.$router.push({name:"tutorials"})})).catch((function(t){console.log(t)}))}},mounted:function(){this.message="",this.getTutorial(this.$route.params.id)}};u("4b11");j.render=g;e["default"]=j},"7f2a":function(t,e,u){}}]);
//# sourceMappingURL=chunk-5b66430d.1085cdcb.js.map