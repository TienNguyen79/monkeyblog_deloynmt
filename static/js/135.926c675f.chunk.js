"use strict";(self.webpackChunkreact_monkey_blogging_boilerplate=self.webpackChunkreact_monkey_blogging_boilerplate||[]).push([[135],{2135:function(e,s,r){r.r(s);var a=r(5861),n=r(9439),l=r(7757),t=r.n(l),i=r(2791),c=r(8322),o=r(6356),d=r(3453),u=r(9248),m=r(8119),x=r(460),h=r(2582),p=r(1134),Z=r(3031),j=r(289),f=r(3585),g=r(4490),N=r(1199),v=r(9062),b=r(333),w=r.n(b),k=r(577),y=r(4641),A=r(6871),I=r(7531),E=r(9808),D=r(184);s.default=function(){var e=(0,p.cI)({mode:"onChange",defaultValues:{fullname:"",email:"",password:"",username:"",avatar:"",imageName:"",description:"",status:f.iQ.ACTIVE,role:f.xZ.USER,createdAt:new Date}}),s=e.control,r=e.handleSubmit,l=e.setValue,b=e.watch,S=e.getValues,C=e.formState,U=C.isValid,Q=C.isSubmitting,V=e.reset,M=(0,i.useState)(""),T=(0,n.Z)(M,2),_=(T[0],T[1],(0,i.useState)("")),B=(0,n.Z)(_,2),P=(B[0],B[1],b("status")),R=b("role"),G=(0,A.s0)(),O=(0,g.Z)(l,S),F=O.handleSelectImage,J=O.setImage,L=O.setProgress,X=O.handleDeleteImage,q=O.progress,z=O.image,H=O.imageName;if((0,E.a)().userInfo.role!==f.xZ.ADMIN)return(0,D.jsx)("div",{className:"text-[30px] font-semibold text-green-500 ",children:"This page is for admins only"});var K=function(){var e=(0,a.Z)(t().mark((function e(s){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,j.Xb)(N.I,s.email,s.password);case 5:return e.next=7,(0,j.ck)(N.I.currentUser,{displayName:s.fullname});case 7:return e.next=9,(0,v.ET)((0,v.hJ)(N.db,"users"),{fullname:s.fullname,email:s.email,password:s.password,username:w()(s.username||s.fullname,{lower:!0}),avatar:z,imageName:H,description:s.description,status:s.status,role:s.role,createdAt:(0,v.Bt)()});case 9:J(""),L(0),k.Am.success("Create User successfully "),G("/manage/user"),V({fullname:"",email:"",password:"",username:"",avatar:"",imageName:"",description:"",status:f.iQ.ACTIVE,role:f.xZ.USER,createdAt:new Date}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0),k.Am.error("Can't create User");case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(s){return e.apply(this,arguments)}}();return(0,D.jsxs)("div",{children:[(0,D.jsx)(c.Z,{title:"New user",desc:"Add new user to system"}),(0,D.jsxs)("form",{onSubmit:r(K),children:[(0,D.jsx)("div",{className:"w-[200px] h-[200px] mx-auto mb-10 ",children:(0,D.jsx)(Z.Z,{className:"!rounded-full h-full",onChange:F,handleDeleteImage:X,progress:q,image:z})}),(0,D.jsxs)("div",{className:"form-layout",children:[(0,D.jsxs)(o.Z,{children:[(0,D.jsx)(d.Z,{children:"Fullname"}),(0,D.jsx)(u.Z,{name:"fullname",placeholder:"Enter your fullname",control:s})]}),(0,D.jsxs)(o.Z,{children:[(0,D.jsx)(d.Z,{children:"Username"}),(0,D.jsx)(u.Z,{name:"username",placeholder:"Enter your username",control:s})]})]}),(0,D.jsxs)("div",{className:"form-layout",children:[(0,D.jsxs)(o.Z,{children:[(0,D.jsx)(d.Z,{children:"Email"}),(0,D.jsx)(u.Z,{name:"email",placeholder:"Enter your email",control:s,type:"email"})]}),(0,D.jsxs)(o.Z,{children:[(0,D.jsx)(d.Z,{children:"Password"}),(0,D.jsx)(y.Z,{control:s})]})]}),(0,D.jsxs)("div",{className:"form-layout",children:[(0,D.jsxs)(o.Z,{children:[(0,D.jsx)(d.Z,{children:"Status"}),(0,D.jsxs)(h.Z,{children:[(0,D.jsx)(m.Z,{name:"status",control:s,checked:Number(P)===f.iQ.ACTIVE,value:f.iQ.ACTIVE,children:"Active"}),(0,D.jsx)(m.Z,{name:"status",control:s,checked:Number(P)===f.iQ.PENDING,value:f.iQ.PENDING,children:"Pending"}),(0,D.jsx)(m.Z,{name:"status",control:s,checked:Number(P)===f.iQ.BAN,value:f.iQ.BAN,children:"Banned"})]})]}),(0,D.jsxs)(o.Z,{children:[(0,D.jsx)(d.Z,{children:"Role"}),(0,D.jsxs)(h.Z,{children:[(0,D.jsx)(m.Z,{name:"role",control:s,checked:Number(R)===f.xZ.ADMIN,value:f.xZ.ADMIN,children:"Admin"}),(0,D.jsx)(m.Z,{name:"role",control:s,checked:Number(R)===f.xZ.MOD,value:f.xZ.MOD,children:"Moderator"}),(0,D.jsx)(m.Z,{name:"role",control:s,checked:Number(R)===f.xZ.USER,value:f.xZ.USER,children:"User"})]})]}),(0,D.jsxs)(o.Z,{children:[(0,D.jsx)(d.Z,{children:"Description"}),(0,D.jsx)(I.Z,{name:"description",control:s})]})]}),(0,D.jsxs)("div",{className:"gap-x-5 flex justify-center",children:[(0,D.jsx)("div",{children:(0,D.jsx)(x.Z,{kind:"primary",className:"mx-auto w-[200px]",isLoading:Q,disabled:Q,type:"submit",children:"Add new user"})}),(0,D.jsx)("div",{children:(0,D.jsx)(x.Z,{to:"/manage/user",className:"mx-auto w-[100px] sm:w-[200px] md:w-[200px] lg:w-[200px]  ",kind:"ghost",type:"submit",children:"Back"})})]})]})]})}}}]);
//# sourceMappingURL=135.926c675f.chunk.js.map