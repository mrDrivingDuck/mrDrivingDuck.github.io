(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207472"],{a09f:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.theme},[i("p",{staticStyle:{"font-size":"30px"}},[t._v(" Author ")]),i("p",[t._v(" 🦆 "),i("b",[t._v(" Mr Dk. ")]),i("el-link",{attrs:{type:"primary",href:"https://github.com/mrdrivingduck"}},[t._v(" @mrdrivingduck ")])],1),t._m(0),i("el-divider"),t.fail?t._e():i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.commitLoading,expression:"commitLoading"}]},[i("p",{staticStyle:{"font-size":"30px"}},[t._v(" Last commit ")]),i("p",[t._v(" 📤 "+t._s(t.lastCommitMessage)+" ")]),i("p",[i("b",[t._v(" ⌚ "+t._s(t.lastCommitTime))]),t._v(" by "),i("b",[t._v(" "+t._s(t.lastCommitter)+" ")])])]),i("el-divider"),t.fail?t._e():i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.deployLoading,expression:"deployLoading"}]},[i("p",{staticStyle:{"font-size":"30px"}},[t._v(" Last deploy ")]),i("p",[i("b",[t._v(" 🔏 "+t._s(t.lastDeploySha))])]),i("p",[i("b",[t._v(" ⌚ "+t._s(t.lastDeployTime))]),t._v(" by "),i("b",[t._v(" "+t._s(t.lastDeployer)+" ")])])]),i("el-divider"),i("p",{staticStyle:{"font-size":"30px"}},[t._v(" Supported by ")]),t._l(t.supporting,(function(e){return i("p",{key:e.name},[i("el-link",{attrs:{href:e.link,type:"primary"}},[t._v(" "+t._s(e.name)+" ")]),t._v(" - "+t._s(e.description)+" ")],1)})),t.fail?i("el-alert",{attrs:{title:"Loading failed",type:"error",description:t.failReason,closable:!1,"show-icon":""}}):t._e()],2)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v(" Page build by "),i("i",[t._v(" duckling ")]),t._v(" version "),i("b",[t._v(" 0.2.8 ")])])}],o=(i("7f7f"),{props:["theme"],data:function(){return{lastCommitTime:null,lastCommitter:null,lastCommitMessage:null,lastCommitSha:null,commitLoading:!1,lastDeployTime:null,lastDeployer:null,lastDeploySha:null,deployLoading:!1,fail:!1,failReason:"",supporting:[{name:"Vue.js",description:"🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",link:"https://vuejs.org/"},{name:"Vuex",description:"🗃️ Centralized State Management for Vue.js.",link:"https://vuex.vuejs.org"},{name:"Vue CLI",description:"🛠️ Standard Tooling for Vue.js Development.",link:"https://cli.vuejs.org/"},{name:"Axios",description:"Promise based HTTP client for the browser and node.js.",link:"https://github.com/axios/axios"},{name:"Element",description:"A Vue.js 2.0 UI Toolkit for Web.",link:"https://element.eleme.io/"},{name:"Marked.js",description:"A markdown parser and compiler. Built for speed.",link:"https://marked.js.org/"},{name:"GitHub Markdown CSS",description:"The minimal amount of CSS to replicate the GitHub Markdown style.",link:"https://github.com/mrdrivingduck/github-markdown-css"},{name:"highlight.js",description:"JavaScript syntax highlighter.",link:"https://github.com/mrdrivingduck/highlight.js"},{name:"GitHub API v3",description:"The official GitHub REST API v3.",link:"https://developer.github.com/v3/"},{name:"GitHub Pages",description:"Websites for you and your projects.",link:"https://pages.github.com/"},{name:"Aliyun",description:"More Than Just Cloud.",link:"https://www.aliyun.com/"}]}},created:function(){this.getCommits(),this.getDeploys()},methods:{getCommits:function(){var t=this,e=this.$store.state.githubapi.api[0].commit;this.commitLoading=!0,this.fail=!1,this.failReason="",this.$http.get(e).then((function(e){var i=e.data[0],a=i.commit,s=i.sha,o=a.committer,n=a.message,l=o.name,r=o.date;t.lastCommitTime=r,t.lastCommitter=l,t.lastCommitMessage=n,t.lastCommitSha=s,t.commitLoading=!1})).catch((function(e){t.fail=!0,t.failReason=e.message}))},getDeploys:function(){var t=this,e=this.$store.state.githubapi.api[0].deploy;this.deployLoading=!0,this.fail=!1,this.failReason="",this.$http.get(e).then((function(e){var i=e.data[0],a=i.creator,s=i.sha,o=i.updated_at,n=a.login;t.lastDeployTime=o,t.lastDeploySha=s,t.lastDeployer=n,t.deployLoading=!1})).catch((function(e){t.fail=!0,t.failReason=e.message}))}}}),n=o,l=i("2877"),r=Object(l["a"])(n,a,s,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d207472.3a32e941.js.map