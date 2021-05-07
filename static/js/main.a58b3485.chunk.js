(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{20:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(3),i=n.n(s),c=(n(20),n(1)),r=function(t){var e=t.title;return Object(c.jsx)("h1",{className:"title",children:e})};r.defaultProps={title:"Simple title"};var o=r,l=n(11),u=n(12),d=n(15),f=n(14),p=n(5),m="ADD_TASK",j="REMOVE_TASK",v="COMPLETE_TASK",k="CHANGE_FILTER",h=(n(26),function(t){var e=t.value,n=t.onChange,a=t.onKeyPress;return Object(c.jsx)("div",{className:"todo-input-wrapper",children:Object(c.jsx)("input",{className:"todo-input",placeholder:"Click to add task",onChange:n,onKeyPress:a,value:e})})});h.defaultProps={onChange:function(){},onKeyPress:function(){},value:""};var b=h,O=(n(27),function(t){var e=t.text,n=t.isCompleted,a=t.removeTask,s=t.completeTask,i=t.id;return Object(c.jsxs)("li",{className:"todo-item",children:[Object(c.jsx)("i",{onClick:function(){s(i)},className:n?"mark far fa-check-circle":"mark far fa-circle"}),Object(c.jsx)("span",{className:n?"completed text":"text",children:e}),Object(c.jsx)("i",{onClick:function(){a(i)},className:"fas fa-times"})]})});O.defaultProps={text:"",isCompleted:!1,removeTask:function(){},id:0};var x=O,T=(n(28),function(t){var e=t.tasksList,n=t.removeTask,a=t.completeTask;return Object(c.jsx)("ul",{className:"todo-list",children:e.map((function(t){var e=t.id,s=t.text,i=t.isCompleted;return Object(c.jsx)(x,{completeTask:a,removeTask:n,id:e,text:s,isCompleted:i},e)}))})});T.defaultProps={tasksList:[],removeTask:function(){},completeTask:function(){}};var g=T,C=(n(29),[{text:"All",id:"all"},{text:"Active",id:"active"},{text:"Completed",id:"completed"}]),y=function(t){var e=t.amount,n=t.activeFilter,a=t.changeFilter;return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("span",{className:"amount",children:"".concat(e," tasks left")}),Object(c.jsx)("div",{className:"btn-group",children:C.map((function(t){var e=t.text,s=t.id;return Object(c.jsx)("button",{className:s===n?"filter-btn active":"filter-btn",onClick:function(){a(s)},children:e},s)}))})]})};y.defaultProps={amount:0,activeFilter:"all",changeFilter:function(){}};var N=y,w=(n(30),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={taskText:""},t.handleInputChange=function(e){var n=e.target.value;t.setState({taskText:n})},t.addTask=function(e){var n=e.key,a=t.state.taskText;a.length>3&&"Enter"===n&&((0,t.props.addTask)((new Date).getTime(),a,!1),t.setState({taskText:""}))},t.filterTasks=function(t,e){switch(e){case"completed":return t.filter((function(t){return t.isCompleted}));case"active":return t.filter((function(t){return!t.isCompleted}));default:return t}},t.getActiveTasksAmount=function(t){return t.filter((function(t){return!t.isCompleted})).length},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.taskText,e=this.props,n=e.tasks,a=e.removeTask,s=e.completeTask,i=e.filters,r=e.changeFilter,o=n&&n.length>0,l=this.filterTasks(n,i),u=this.getActiveTasksAmount(n);return Object(c.jsxs)("div",{className:"todo-wrapper",children:[Object(c.jsx)(b,{onKeyPress:this.addTask,onChange:this.handleInputChange,value:t}),o&&Object(c.jsx)(g,{tasksList:l,removeTask:a,completeTask:s}),o&&Object(c.jsx)(N,{changeFilter:r,amount:u,activeFilter:i})]})}}]),n}(a.Component)),A=Object(p.b)((function(t){return{tasks:t.tasks,filters:t.filters}}),{addTask:function(t,e,n){return{type:m,id:t,text:e,isCompleted:n}},removeTask:function(t){return{type:j,id:t}},completeTask:function(t){return{type:v,id:t}},changeFilter:function(t){return{type:k,activeFilter:t}}})(w),E=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{title:"ToDo App"}),Object(c.jsx)(A,{})]})},F=(n(31),n(2)),P=n(6),_=n(4),S=Object(_.load)({namespace:"todo-list"});S&&S.tasks&&S.tasks.length||(S={tasks:[]});var K,D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.tasks,e=arguments.length>1?arguments[1]:void 0,n=e.id,a=e.text,s=e.isCompleted,i=e.type;switch(i){case m:return[].concat(Object(P.a)(t),[{id:n,text:a,isCompleted:s}]);case j:return Object(P.a)(t).filter((function(t){return t.id!==n}));case v:return Object(P.a)(t).map((function(t){return t.id===n&&(t.isCompleted=!t.isCompleted),t}));default:return t}},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.activeFilter;switch(n){case k:return a;default:return t}},I=Object(F.b)({tasks:D,filters:L}),M="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.c,R=(K={},Object(F.d)(I,K,M(Object(F.a)(Object(_.save)({namespace:"todo-list"})))));i.a.render(Object(c.jsx)(p.a,{store:R,children:Object(c.jsx)(E,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a58b3485.chunk.js.map