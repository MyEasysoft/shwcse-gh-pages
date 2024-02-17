"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[7385],{99407:(e,s,r)=>{r.r(s),r.d(s,{PasswordChangePageComponent:()=>I,default:()=>M});var a=r(72791),o=r(52007),n=r.n(o),t=r(42789),d=r(47375),l=r(80948),i=(r(73665),r(46902)),m=r(81301),c=r(52745),g=r(67600),w=r(55269),P=r(41418),h=r.n(P),u=r(84480),C=r(10314),p=r(35074);const _={root:"PasswordChangeForm_root__D64td",newPasswordSection:"PasswordChangeForm_newPasswordSection__O6n8a",confirmChangesSection:"PasswordChangeForm_confirmChangesSection__5vqhf",confirmChangesSectionVisible:"PasswordChangeForm_confirmChangesSectionVisible__DtoAO",confirmChangesTitle:"PasswordChangeForm_confirmChangesTitle__hqLza",confirmChangesInfo:"PasswordChangeForm_confirmChangesInfo__cAsZu",bottomWrapper:"PasswordChangeForm_bottomWrapper__RbGvM",error:"PasswordChangeForm_error__-dDVS h4",helperLink:"PasswordChangeForm_helperLink__scojf a",emailStyle:"PasswordChangeForm_emailStyle__LF37r"};class E extends a.Component{constructor(e){super(e),this.state={showResetPasswordMessage:!1},this.resetTimeoutId=null,this.submittedValues={},this.handleResetPassword=this.handleResetPassword.bind(this)}componentWillUnmount(){window.clearTimeout(this.resetTimeoutId)}handleResetPassword(){this.setState({showResetPasswordMessage:!0});const e=this.props.currentUser.attributes.email;this.props.onResetPassword(e)}render(){return a.createElement(w.l0,Object.assign({},this.props,{render:e=>{const{rootClassName:s,className:r,formId:o,changePasswordError:n,currentUser:t,handleSubmit:d,inProgress:i,resetPasswordInProgress:c,intl:g,invalid:w,pristine:P,ready:E,form:b,values:f}=e;if(!(0,C.j0)(t).id)return null;const F=g.formatMessage({id:"PasswordChangeForm.newPasswordLabel"}),S=g.formatMessage({id:"PasswordChangeForm.newPasswordPlaceholder"}),N=g.formatMessage({id:"PasswordChangeForm.newPasswordRequired"}),L=u.uL(N),I=g.formatMessage({id:"PasswordChangeForm.passwordTooShort"},{minLength:u.Z9}),T=g.formatMessage({id:"PasswordChangeForm.passwordTooLong"},{maxLength:u.e2}),v=u.Ei(I,u.Z9),M=u.BS(T,u.e2),R=g.formatMessage({id:"PasswordChangeForm.passwordLabel"}),k=g.formatMessage({id:"PasswordChangeForm.passwordPlaceholder"}),H=g.formatMessage({id:"PasswordChangeForm.passwordRequired"}),D=u.uL(H),U=g.formatMessage({id:"PasswordChangeForm.passwordFailed"}),A=f.currentPassword&&this.submittedValues.currentPassword!==f.currentPassword,y=(0,p.DX)(n)?U:null,O=h()(_.confirmChangesSection,{[_.confirmChangesSectionVisible]:!P}),V=n&&!y?a.createElement("span",{className:_.error},a.createElement(l._H,{id:"PasswordChangeForm.genericFailure"})):null,q=h()(s||_.root,r),j=w||i,x=a.createElement("span",{className:_.helperLink,onClick:this.handleResetPassword,role:"button"},a.createElement(l._H,{id:"PasswordChangeForm.resetPasswordLinkText"})),B=a.createElement("span",{className:_.helperLink,onClick:this.handleResetPassword,role:"button"},a.createElement(l._H,{id:"PasswordChangeForm.resendPasswordLinkText"})),Z=this.state.showResetPasswordMessage||c?a.createElement(a.Fragment,null,a.createElement(l._H,{id:"PasswordChangeForm.resetPasswordLinkSent",values:{email:a.createElement("span",{className:_.emailStyle},t.attributes.email)}})," ",B):x;return a.createElement(m.l0,{className:q,onSubmit:e=>{this.submittedValues=f,d(e).then((()=>{this.resetTimeoutId=window.setTimeout((()=>{b.restart(),this.props.onChange&&this.props.onChange()}),800)})).catch((()=>{}))}},a.createElement("div",{className:_.newPasswordSection},a.createElement(m.gC,{type:"password",id:o?"".concat(o,".newPassword"):"newPassword",name:"newPassword",autoComplete:"new-password",label:F,placeholder:S,validate:u.A3(L,v,M)})),a.createElement("div",{className:O},a.createElement(m.H4,{as:"h3",className:_.confirmChangesTitle},a.createElement(l._H,{id:"PasswordChangeForm.confirmChangesTitle"})),a.createElement("p",{className:_.confirmChangesInfo},a.createElement(l._H,{id:"PasswordChangeForm.confirmChangesInfo"}),a.createElement("br",null),a.createElement(l._H,{id:"PasswordChangeForm.resetPasswordInfo",values:{resetPasswordLink:Z}})),a.createElement(m.gC,{className:_.password,type:"password",id:"currentPassword",name:"currentPassword",autoComplete:"current-password",label:R,placeholder:k,validate:u.A3(D,v,M),customErrorText:A?null:y})),a.createElement("div",{className:_.bottomWrapper},V,a.createElement(m.KM,{type:"submit",inProgress:i,ready:E,disabled:j},a.createElement(l._H,{id:"PasswordChangeForm.saveChanges"}))))}}))}}E.defaultProps={rootClassName:null,className:null,changePasswordError:null,inProgress:!1,formId:null,resetPasswordInProgress:!1,resetPasswordError:null};const{bool:b,string:f}=n(),F=(0,t.qC)(l.XN)(E);F.displayName="PasswordChangeForm";const S=F;var N=r(33181);const L={content:"PasswordChangePage_content__QjUBH",desktopTopbar:"PasswordChangePage_desktopTopbar__E5IUB",mobileTopbar:"PasswordChangePage_mobileTopbar__SL9-g"},I=e=>{const{changePasswordError:s,changePasswordInProgress:r,currentUser:o,onChange:n,onSubmitChangePassword:t,onResetPassword:d,resetPasswordInProgress:i,resetPasswordError:w,passwordChanged:P,scrollingDisabled:h,intl:u}=e,C=o&&o.id?a.createElement(S,{className:L.form,changePasswordError:s,currentUser:o,onSubmit:t,onChange:n,onResetPassword:d,resetPasswordInProgress:i,resetPasswordError:w,inProgress:r,ready:P}):null,p=u.formatMessage({id:"PasswordChangePage.title"});return a.createElement(m.T3,{title:p,scrollingDisabled:h},a.createElement(m.i_,{topbar:a.createElement(a.Fragment,null,a.createElement(c.Z,{currentPage:"PasswordChangePage",desktopClassName:L.desktopTopbar,mobileClassName:L.mobileTopbar}),a.createElement(m.Tb,{currentPage:"PasswordChangePage"})),sideNav:null,useAccountSettingsNav:!0,currentPage:"PasswordChangePage",footer:a.createElement(g.Z,null)},a.createElement("div",{className:L.content},a.createElement(m.H3,{as:"h1"},a.createElement(l._H,{id:"PasswordChangePage.heading"})),C)))};I.defaultProps={changePasswordError:null,currentUser:null,resetPasswordInProgress:!1,resetPasswordError:null};const{bool:T,func:v}=n(),M=(0,t.qC)((0,d.$j)((e=>{const{changePasswordError:s,changePasswordInProgress:r,passwordChanged:a,resetPasswordInProgress:o,resetPasswordError:n}=e.PasswordChangePage,{currentUser:t}=e.user;return{changePasswordError:s,changePasswordInProgress:r,currentUser:t,passwordChanged:a,scrollingDisabled:(0,i.uS)(e),resetPasswordInProgress:o,resetPasswordError:n}}),(e=>({onChange:()=>e((0,N.Ib)()),onSubmitChangePassword:s=>e((0,N.Cp)(s)),onResetPassword:s=>e((0,N.c0)(s))}))),l.XN)(I)}}]);
//# sourceMappingURL=PasswordChangePage.1005cf6f.chunk.js.map