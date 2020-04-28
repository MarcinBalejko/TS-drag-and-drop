!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class r{constructor(e,t,n,r){this.templateElement=document.getElementById(e),this.hostElement=document.getElementById(t);const s=document.importNode(this.templateElement.content,!0);this.element=s.firstElementChild,r&&(this.element.id=r),this.attach(n)}attach(e){this.hostElement.insertAdjacentElement(e?"afterbegin":"beforeend",this.element)}}function s(e){let t=!0;return e.required&&(t=t&&0!==e.value.toString().trim().length),null!=e.minLength&&"string"==typeof e.value&&(t=t&&e.value.length>=e.minLength),null!=e.maxLength&&"string"==typeof e.value&&(t=t&&e.value.length<=e.maxLength),null!=e.min&&"number"==typeof e.value&&(t=t&&e.value>=e.min),null!=e.max&&"number"==typeof e.value&&(t=t&&e.value<=e.max),t}function i(e,t,n){const r=n.value;return{configurable:!0,get(){return r.bind(this)}}}var o;!function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(o||(o={}));class l{constructor(e,t,n,r,s){this.id=e,this.title=t,this.description=n,this.people=r,this.status=s}}class a extends class{constructor(){this.listeners=[]}addListener(e){this.listeners.push(e)}}{constructor(){super(),this.projects=[]}static getInstance(){return this.instance||(this.instance=new a),this.instance}addProject(e,t,n){const r=new l(Math.random().toString(),e,t,n,o.Active);this.projects.push(r),this.updateListeners()}moveProject(e,t){const n=this.projects.find(t=>t.id===e);n&&n.status!==t&&(n.status=t,this.updateListeners())}updateListeners(){for(const e of this.listeners)e(this.projects.slice())}}const c=a.getInstance();var u=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class d extends r{constructor(){super("project-input","app",!0,"user-input"),this.titleInputElement=this.element.querySelector("#title"),this.descriptionInputElement=this.element.querySelector("#description"),this.peopleInputElement=this.element.querySelector("#people"),this.configure()}configure(){this.element.addEventListener("submit",this.submitHandler)}renderContent(){}gatherUserInput(){const e=this.titleInputElement.value,t=this.descriptionInputElement.value,n=this.peopleInputElement.value,r={value:t,required:!0,minLength:5},i={value:+n,required:!0,min:1,max:5};return s({value:e,required:!0})&&s(r)&&s(i)?[e,t,+n]:void alert("Invalid input, please try again!")}clearInputs(){this.titleInputElement.value="",this.descriptionInputElement.value="",this.peopleInputElement.value=""}submitHandler(e){e.preventDefault();const t=this.gatherUserInput();if(Array.isArray(t)){const[e,n,r]=t;c.addProject(e,n,r),this.clearInputs()}}}u([i],d.prototype,"submitHandler",null);var p=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class h extends r{constructor(e,t){super("single-project",e,!1,t.id),this.project=t,this.configure(),this.renderContent()}get persons(){return 1===this.project.people?"1 person":this.project.people+" persons"}dragStartHandler(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}dragEndHandler(e){console.log("DragEnd")}configure(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dragEndHandler)}renderContent(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.persons+" assigned",this.element.querySelector("p").textContent=this.project.description}}p([i],h.prototype,"dragStartHandler",null);var f=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class m extends r{constructor(e){super("project-list","app",!1,e+"-projects"),this.type=e,this.assignedProjects=[],this.configure(),this.renderContent()}dragOverHandler(e){if(e.dataTransfer&&"text/plain"===e.dataTransfer.types[0]){e.preventDefault(),this.element.querySelector("ul").classList.add("droppable")}}dropHandler(e){const t=e.dataTransfer.getData("text/plain");c.moveProject(t,"active"===this.type?o.Active:o.Finished)}dragLeaveHandler(e){this.element.querySelector("ul").classList.remove("droppable")}configure(){this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),this.element.addEventListener("drop",this.dropHandler),c.addListener(e=>{const t=e.filter(e=>"active"===this.type?e.status===o.Active:e.status===o.Finished);this.assignedProjects=t,this.renderProjects()})}renderContent(){const e=this.type+"-projects-list";this.element.querySelector("ul").id=e,this.element.querySelector("h2").textContent=this.type.toUpperCase()+" PROJECTS"}renderProjects(){document.getElementById(this.type+"-projects-list").innerHTML="";for(const e of this.assignedProjects)new h(this.element.querySelector("ul").id,e)}}f([i],m.prototype,"dragOverHandler",null),f([i],m.prototype,"dropHandler",null),f([i],m.prototype,"dragLeaveHandler",null),new d,new m("active"),new m("finished")}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy9hdXRvYmluZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3Byb2plY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL3Byb2plY3Qtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC1pbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJDb21wb25lbnQiLCJ0ZW1wbGF0ZUlkIiwiaG9zdEVsZW1lbnRJZCIsImluc2VydEF0U3RhcnQiLCJuZXdFbGVtZW50SWQiLCJ0aGlzIiwidGVtcGxhdGVFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhvc3RFbGVtZW50IiwiaW1wb3J0ZWROb2RlIiwiaW1wb3J0Tm9kZSIsImNvbnRlbnQiLCJlbGVtZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpZCIsImF0dGFjaCIsImluc2VydEF0QmVnaW5uaW5nIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwidmFsaWRhdGUiLCJ2YWxpZGF0YWJsZUlucHV0IiwiaXNWYWxpZCIsInJlcXVpcmVkIiwidG9TdHJpbmciLCJ0cmltIiwibGVuZ3RoIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibWluIiwibWF4IiwiYXV0b2JpbmQiLCJfIiwiXzIiLCJkZXNjcmlwdG9yIiwib3JpZ2luYWxNZXRob2QiLCJjb25maWd1cmFibGUiLCJQcm9qZWN0U3RhdHVzIiwiUHJvamVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwZW9wbGUiLCJzdGF0dXMiLCJsaXN0ZW5lcnMiLCJsaXN0ZW5lckZuIiwicHVzaCIsInN1cGVyIiwicHJvamVjdHMiLCJpbnN0YW5jZSIsIm51bU9mUGVvcGxlIiwibmV3UHJvamVjdCIsIk1hdGgiLCJyYW5kb20iLCJBY3RpdmUiLCJ1cGRhdGVMaXN0ZW5lcnMiLCJwcm9qZWN0SWQiLCJuZXdTdGF0dXMiLCJwcm9qZWN0IiwiZmluZCIsInByaiIsInNsaWNlIiwicHJvamVjdFN0YXRlIiwiZ2V0SW5zdGFuY2UiLCJ0aXRsZUlucHV0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXNjcmlwdGlvbklucHV0RWxlbWVudCIsInBlb3BsZUlucHV0RWxlbWVudCIsImNvbmZpZ3VyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRIYW5kbGVyIiwiZW50ZXJlZFRpdGxlIiwiZW50ZXJlZERlc2NyaXB0aW9uIiwiZW50ZXJlZFBlb3BsZSIsImRlc2NyaXB0aW9uVmFsaWRhdGFibGUiLCJwZW9wbGVWYWxpZGF0YWJsZSIsImFsZXJ0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJJbnB1dCIsImdhdGhlclVzZXJJbnB1dCIsIkFycmF5IiwiaXNBcnJheSIsImRlc2MiLCJhZGRQcm9qZWN0IiwiY2xlYXJJbnB1dHMiLCJob3N0SWQiLCJyZW5kZXJDb250ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJjb25zb2xlIiwibG9nIiwiZHJhZ1N0YXJ0SGFuZGxlciIsImRyYWdFbmRIYW5kbGVyIiwidGV4dENvbnRlbnQiLCJwZXJzb25zIiwidHlwZSIsImFzc2lnbmVkUHJvamVjdHMiLCJ0eXBlcyIsImNsYXNzTGlzdCIsImFkZCIsInByaklkIiwiZ2V0RGF0YSIsIm1vdmVQcm9qZWN0IiwiRmluaXNoZWQiLCJyZW1vdmUiLCJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnTGVhdmVIYW5kbGVyIiwiZHJvcEhhbmRsZXIiLCJhZGRMaXN0ZW5lciIsInJlbGV2YW50UHJvamVjdHMiLCJmaWx0ZXIiLCJyZW5kZXJQcm9qZWN0cyIsImxpc3RJZCIsInRvVXBwZXJDYXNlIiwiaW5uZXJIVE1MIiwicHJqSXRlbSJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIs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ZjFGLEtBQUtRLFFBQVFrRCxjQUFjLE1BQU9oRCxHQUFLaUcsRUFDdkMzRyxLQUFLUSxRQUFRa0QsY0FBYyxNQUFPOEIsWUFDaEN4RixLQUFLMEYsS0FBS2tCLGNBQWdCLFlBR3RCLGlCQUNTMUcsU0FBU0MsZUFDbkJILEtBQUswRixLQUFSLGtCQUVLbUIsVUFBWSxHQUNuQixJQUFLLE1BQU1DLEtBQVc5RyxLQUFLMkYsaUJBQ3pCLElBQUksRUFBWTNGLEtBQUtRLFFBQVFrRCxjQUFjLE1BQU9oRCxHQUFJb0csSUFyRDFELEdBRENyRixHLG9DQVVELEdBRENBLEcsZ0NBVUQsR0FEQ0EsRyxxQ0NuQ0gsSUFBSSxFQUNKLElBQUksRUFBWSxVQUNoQixJQUFJLEVBQVkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gQ29tcG9uZW50IEJhc2UgQ2xhc3NcblxuLy8gJ2RlZmF1bHQnIHN1Z2dlc3RzIHRoYXQgdGhpcyBpcyB0aGUgbWFpbiBleHBvcnQgb2YgdGhpcyBmaWxlLCB3ZSBjYW4gaGF2ZSBvbmx5IG9uZSBleHBvcnQgZGVmYXVsdCBwZXIgZmlsZVxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFxuICBUIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG4gIFUgZXh0ZW5kcyBIVE1MRWxlbWVudFxuPiB7XG4gIHRlbXBsYXRlRWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgaG9zdEVsZW1lbnQ6IFQ7XG4gIGVsZW1lbnQ6IFU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGVtcGxhdGVJZDogc3RyaW5nLFxuICAgIGhvc3RFbGVtZW50SWQ6IHN0cmluZyxcbiAgICBpbnNlcnRBdFN0YXJ0OiBib29sZWFuLFxuICAgIG5ld0VsZW1lbnRJZD86IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLnRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgdGVtcGxhdGVJZFxuICAgICkhIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgdGhpcy5ob3N0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhvc3RFbGVtZW50SWQpISBhcyBUO1xuXG4gICAgY29uc3QgaW1wb3J0ZWROb2RlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcbiAgICAgIHRoaXMudGVtcGxhdGVFbGVtZW50LmNvbnRlbnQsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBpbXBvcnRlZE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQgYXMgVTtcbiAgICBpZiAobmV3RWxlbWVudElkKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuaWQgPSBuZXdFbGVtZW50SWQ7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2goaW5zZXJ0QXRTdGFydCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaChpbnNlcnRBdEJlZ2lubmluZzogYm9vbGVhbikge1xuICAgIHRoaXMuaG9zdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgaW5zZXJ0QXRCZWdpbm5pbmcgPyBcImFmdGVyYmVnaW5cIiA6IFwiYmVmb3JlZW5kXCIsXG4gICAgICB0aGlzLmVsZW1lbnRcbiAgICApO1xuICB9XG5cbiAgYWJzdHJhY3QgY29uZmlndXJlKCk6IHZvaWQ7XG4gIGFic3RyYWN0IHJlbmRlckNvbnRlbnQoKTogdm9pZDtcbn1cbiIsIi8vIFZhbGlkYXRpb25cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGFibGUge1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIG1pbkxlbmd0aD86IG51bWJlcjtcbiAgbWF4TGVuZ3RoPzogbnVtYmVyO1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbGlkYXRhYmxlSW5wdXQ6IFZhbGlkYXRhYmxlKSB7XG4gIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgaWYgKHZhbGlkYXRhYmxlSW5wdXQucmVxdWlyZWQpIHtcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMDtcbiAgfVxuICBpZiAoXG4gICAgdmFsaWRhdGFibGVJbnB1dC5taW5MZW5ndGggIT0gbnVsbCAmJlxuICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSBcInN0cmluZ1wiXG4gICkge1xuICAgIGlzVmFsaWQgPVxuICAgICAgaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLmxlbmd0aCA+PSB2YWxpZGF0YWJsZUlucHV0Lm1pbkxlbmd0aDtcbiAgfVxuICBpZiAoXG4gICAgdmFsaWRhdGFibGVJbnB1dC5tYXhMZW5ndGggIT0gbnVsbCAmJlxuICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSBcInN0cmluZ1wiXG4gICkge1xuICAgIGlzVmFsaWQgPVxuICAgICAgaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLmxlbmd0aCA8PSB2YWxpZGF0YWJsZUlucHV0Lm1heExlbmd0aDtcbiAgfVxuICBpZiAoXG4gICAgdmFsaWRhdGFibGVJbnB1dC5taW4gIT0gbnVsbCAmJlxuICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSBcIm51bWJlclwiXG4gICkge1xuICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPj0gdmFsaWRhdGFibGVJbnB1dC5taW47XG4gIH1cbiAgaWYgKFxuICAgIHZhbGlkYXRhYmxlSW5wdXQubWF4ICE9IG51bGwgJiZcbiAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gXCJudW1iZXJcIlxuICApIHtcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlIDw9IHZhbGlkYXRhYmxlSW5wdXQubWF4O1xuICB9XG4gIHJldHVybiBpc1ZhbGlkO1xufVxuIiwiLy8gYXV0b2JpbmQgZGVjb3JhdG9yXG5leHBvcnQgZnVuY3Rpb24gYXV0b2JpbmQoXzogYW55LCBfMjogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICBjb25zdCBhZGpEZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IGJvdW5kRm4gPSBvcmlnaW5hbE1ldGhvZC5iaW5kKHRoaXMpO1xuICAgICAgcmV0dXJuIGJvdW5kRm47XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGFkakRlc2NyaXB0b3I7XG59XG4iLCJleHBvcnQgZW51bSBQcm9qZWN0U3RhdHVzIHtcbiAgQWN0aXZlLFxuICBGaW5pc2hlZCxcbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyxcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgcGVvcGxlOiBudW1iZXIsXG4gICAgcHVibGljIHN0YXR1czogUHJvamVjdFN0YXR1c1xuICApIHt9XG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3RhdHVzIH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0XCI7XG5cbi8vIFByb2plY3QgU3RhdGUgTWFuYWdlbWVudFxudHlwZSBMaXN0ZW5lcjxUPiA9IChpdGVtczogVFtdKSA9PiB2b2lkO1xuXG5jbGFzcyBTdGF0ZTxUPiB7XG4gIC8vIHRoaXMgaXMgb25seSB1c2VkIGluIFRISVMgZmlsZSBzbyBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIGV4cG9ydGVkXG4gIHByb3RlY3RlZCBsaXN0ZW5lcnM6IExpc3RlbmVyPFQ+W10gPSBbXTtcblxuICBhZGRMaXN0ZW5lcihsaXN0ZW5lckZuOiBMaXN0ZW5lcjxUPikge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXJGbik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3RTdGF0ZSBleHRlbmRzIFN0YXRlPFByb2plY3Q+IHtcbiAgcHJpdmF0ZSBwcm9qZWN0czogUHJvamVjdFtdID0gW107XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQcm9qZWN0U3RhdGU7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQcm9qZWN0U3RhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGFkZFByb2plY3QodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgbnVtT2ZQZW9wbGU6IG51bWJlcikge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICAgIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBudW1PZlBlb3BsZSxcbiAgICAgIFByb2plY3RTdGF0dXMuQWN0aXZlXG4gICAgKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIG1vdmVQcm9qZWN0KHByb2plY3RJZDogc3RyaW5nLCBuZXdTdGF0dXM6IFByb2plY3RTdGF0dXMpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcmopID0+IHByai5pZCA9PT0gcHJvamVjdElkKTtcbiAgICBpZiAocHJvamVjdCAmJiBwcm9qZWN0LnN0YXR1cyAhPT0gbmV3U3RhdHVzKSB7XG4gICAgICBwcm9qZWN0LnN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVMaXN0ZW5lcnMoKSB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lckZuIG9mIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lckZuKHRoaXMucHJvamVjdHMuc2xpY2UoKSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0U3RhdGUgPSBQcm9qZWN0U3RhdGUuZ2V0SW5zdGFuY2UoKTtcbiIsImltcG9ydCBDbXAgZnJvbSBcIi4vYmFzZS1jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIFZhbGlkYXRpb24gZnJvbSBcIi4uL3V0aWwvdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgYXV0b2JpbmQgYXMgQXV0b2JpbmQgfSBmcm9tIFwiLi4vZGVjb3JhdG9ycy9hdXRvYmluZFwiO1xuaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL3Byb2plY3Qtc3RhdGVcIjtcblxuLy8nKicgLSBldmVyeXRoaW5nIGluIHRoYXQgZmlsZVxuLy8gUHJvamVjdElucHV0IENsYXNzXG5leHBvcnQgY2xhc3MgUHJvamVjdElucHV0IGV4dGVuZHMgQ21wPEhUTUxEaXZFbGVtZW50LCBIVE1MRm9ybUVsZW1lbnQ+IHtcbiAgdGl0bGVJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGRlc2NyaXB0aW9uSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuICBwZW9wbGVJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJwcm9qZWN0LWlucHV0XCIsIFwiYXBwXCIsIHRydWUsIFwidXNlci1pbnB1dFwiKTtcbiAgICB0aGlzLnRpdGxlSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiN0aXRsZVwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI2Rlc2NyaXB0aW9uXCJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI3Blb3BsZVwiXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gIH1cblxuICBjb25maWd1cmUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5zdWJtaXRIYW5kbGVyKTtcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQoKSB7fVxuXG4gIHByaXZhdGUgZ2F0aGVyVXNlcklucHV0KCk6IFtzdHJpbmcsIHN0cmluZywgbnVtYmVyXSB8IHZvaWQge1xuICAgIGNvbnN0IGVudGVyZWRUaXRsZSA9IHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkUGVvcGxlID0gdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQudmFsdWU7XG5cbiAgICBjb25zdCB0aXRsZVZhbGlkYXRhYmxlOiBWYWxpZGF0aW9uLlZhbGlkYXRhYmxlID0ge1xuICAgICAgdmFsdWU6IGVudGVyZWRUaXRsZSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgZGVzY3JpcHRpb25WYWxpZGF0YWJsZTogVmFsaWRhdGlvbi5WYWxpZGF0YWJsZSA9IHtcbiAgICAgIHZhbHVlOiBlbnRlcmVkRGVzY3JpcHRpb24sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbkxlbmd0aDogNSxcbiAgICB9O1xuICAgIGNvbnN0IHBlb3BsZVZhbGlkYXRhYmxlOiBWYWxpZGF0aW9uLlZhbGlkYXRhYmxlID0ge1xuICAgICAgdmFsdWU6ICtlbnRlcmVkUGVvcGxlLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDUsXG4gICAgfTtcblxuICAgIGlmIChcbiAgICAgICFWYWxpZGF0aW9uLnZhbGlkYXRlKHRpdGxlVmFsaWRhdGFibGUpIHx8XG4gICAgICAhVmFsaWRhdGlvbi52YWxpZGF0ZShkZXNjcmlwdGlvblZhbGlkYXRhYmxlKSB8fFxuICAgICAgIVZhbGlkYXRpb24udmFsaWRhdGUocGVvcGxlVmFsaWRhdGFibGUpXG4gICAgKSB7XG4gICAgICBhbGVydChcIkludmFsaWQgaW5wdXQsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2VudGVyZWRUaXRsZSwgZW50ZXJlZERlc2NyaXB0aW9uLCArZW50ZXJlZFBlb3BsZV07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcklucHV0cygpIHtcbiAgICB0aGlzLnRpdGxlSW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIH1cblxuICBAQXV0b2JpbmRcbiAgcHJpdmF0ZSBzdWJtaXRIYW5kbGVyKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcklucHV0ID0gdGhpcy5nYXRoZXJVc2VySW5wdXQoKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VySW5wdXQpKSB7XG4gICAgICBjb25zdCBbdGl0bGUsIGRlc2MsIHBlb3BsZV0gPSB1c2VySW5wdXQ7XG4gICAgICBwcm9qZWN0U3RhdGUuYWRkUHJvamVjdCh0aXRsZSwgZGVzYywgcGVvcGxlKTtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dHMoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gXCIuLi9tb2RlbHMvZHJhZy1kcm9wXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0XCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2Jhc2UtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gXCIuLi9kZWNvcmF0b3JzL2F1dG9iaW5kXCI7XG5cbi8vIFByb2plY3RJdGVtIENsYXNzXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQ8SFRNTFVMaXN0RWxlbWVudCwgSFRNTExJRWxlbWVudD5cbiAgaW1wbGVtZW50cyBEcmFnZ2FibGUge1xuICBwcml2YXRlIHByb2plY3Q6IFByb2plY3Q7XG5cbiAgZ2V0IHBlcnNvbnMoKSB7XG4gICAgaWYgKHRoaXMucHJvamVjdC5wZW9wbGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBcIjEgcGVyc29uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnByb2plY3QucGVvcGxlfSBwZXJzb25zYDtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihob3N0SWQ6IHN0cmluZywgcHJvamVjdDogUHJvamVjdCkge1xuICAgIHN1cGVyKFwic2luZ2xlLXByb2plY3RcIiwgaG9zdElkLCBmYWxzZSwgcHJvamVjdC5pZCk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcblxuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZHJhZ1N0YXJ0SGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyIS5zZXREYXRhKFwidGV4dC9wbGFpblwiLCB0aGlzLnByb2plY3QuaWQpO1xuICAgIGV2ZW50LmRhdGFUcmFuc2ZlciEuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xuICB9XG5cbiAgZHJhZ0VuZEhhbmRsZXIoXzogRHJhZ0V2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJEcmFnRW5kXCIpO1xuICB9XG5cbiAgY29uZmlndXJlKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIHRoaXMuZHJhZ1N0YXJ0SGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIHRoaXMuZHJhZ0VuZEhhbmRsZXIpO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudCgpIHtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpIS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC50aXRsZTtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpIS50ZXh0Q29udGVudCA9IHRoaXMucGVyc29ucyArIFwiIGFzc2lnbmVkXCI7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpIS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRHJhZ1RhcmdldCB9IGZyb20gXCIuLi9tb2RlbHMvZHJhZy1kcm9wXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3RhdHVzIH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0XCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2Jhc2UtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gXCIuLi9kZWNvcmF0b3JzL2F1dG9iaW5kXCI7XG5pbXBvcnQgeyBwcm9qZWN0U3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvcHJvamVjdC1zdGF0ZVwiO1xuaW1wb3J0IHsgUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi9wcm9qZWN0LWl0ZW1cIjtcblxuLy8gUHJvamVjdExpc3QgQ2xhc3NcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TGlzdCBleHRlbmRzIENvbXBvbmVudDxIVE1MRGl2RWxlbWVudCwgSFRNTEVsZW1lbnQ+XG4gIGltcGxlbWVudHMgRHJhZ1RhcmdldCB7XG4gIGFzc2lnbmVkUHJvamVjdHM6IFByb2plY3RbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6IFwiYWN0aXZlXCIgfCBcImZpbmlzaGVkXCIpIHtcbiAgICBzdXBlcihcInByb2plY3QtbGlzdFwiLCBcImFwcFwiLCBmYWxzZSwgYCR7dHlwZX0tcHJvamVjdHNgKTtcbiAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSBbXTtcblxuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZHJhZ092ZXJIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsaXN0RWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpITtcbiAgICAgIGxpc3RFbC5jbGFzc0xpc3QuYWRkKFwiZHJvcHBhYmxlXCIpO1xuICAgIH1cbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkcm9wSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgY29uc3QgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIhLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xuICAgIHByb2plY3RTdGF0ZS5tb3ZlUHJvamVjdChcbiAgICAgIHByaklkLFxuICAgICAgdGhpcy50eXBlID09PSBcImFjdGl2ZVwiID8gUHJvamVjdFN0YXR1cy5BY3RpdmUgOiBQcm9qZWN0U3RhdHVzLkZpbmlzaGVkXG4gICAgKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkcmFnTGVhdmVIYW5kbGVyKF86IERyYWdFdmVudCkge1xuICAgIGNvbnN0IGxpc3RFbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikhO1xuICAgIGxpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcHBhYmxlXCIpO1xuICB9XG5cbiAgY29uZmlndXJlKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIHRoaXMuZHJhZ0xlYXZlSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgcHJvamVjdFN0YXRlLmFkZExpc3RlbmVyKChwcm9qZWN0czogUHJvamVjdFtdKSA9PiB7XG4gICAgICBjb25zdCByZWxldmFudFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcmopID0+IHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgIHJldHVybiBwcmouc3RhdHVzID09PSBQcm9qZWN0U3RhdHVzLkFjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJqLnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5GaW5pc2hlZDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hc3NpZ25lZFByb2plY3RzID0gcmVsZXZhbnRQcm9qZWN0cztcbiAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgbGlzdElkID0gYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YDtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpIS5pZCA9IGxpc3RJZDtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpIS50ZXh0Q29udGVudCA9XG4gICAgICB0aGlzLnR5cGUudG9VcHBlckNhc2UoKSArIFwiIFBST0pFQ1RTXCI7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclByb2plY3RzKCkge1xuICAgIGNvbnN0IGxpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YFxuICAgICkhIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgbGlzdEVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBwcmpJdGVtIG9mIHRoaXMuYXNzaWduZWRQcm9qZWN0cykge1xuICAgICAgbmV3IFByb2plY3RJdGVtKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikhLmlkLCBwcmpJdGVtKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFByb2plY3RJbnB1dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdC1pbnB1dFwiO1xuaW1wb3J0IHsgUHJvamVjdExpc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3QtbGlzdFwiO1xuXG5uZXcgUHJvamVjdElucHV0KCk7XG5uZXcgUHJvamVjdExpc3QoXCJhY3RpdmVcIik7XG5uZXcgUHJvamVjdExpc3QoXCJmaW5pc2hlZFwiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=