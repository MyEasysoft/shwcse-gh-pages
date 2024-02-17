"use strict";exports.id=651,exports.ids=[651],exports.modules=[,(e,t,a)=>{a.r(t),a.d(t,{ContactDetailsPageComponent:()=>k,default:()=>R});var s=a(6689),r=a.n(s),n=a(580),i=a.n(n),o=a(6695),l=a(6022),m=a(1233),c=(a(3665),a(4941)),d=a(9895),E=a(6902),u=a(9930),h=a(2745),C=a(7600),g=a(113),p=a.n(g),f=a(9003),_=a.n(f),P=a(2411),b=a(1341),D=a(5074);const F={root:"ContactDetailsForm_root__Ve4GD",infoText:"ContactDetailsForm_infoText__eENnH textSmall",contactDetailsSection:"ContactDetailsForm_contactDetailsSection__yE1cF",phone:"ContactDetailsForm_phone__TNaT8",confirmChangesSection:"ContactDetailsForm_confirmChangesSection__UKhEe",confirmChangesSectionVisible:"ContactDetailsForm_confirmChangesSectionVisible__FikTj",emailVerified:"ContactDetailsForm_emailVerified__wUmPI ContactDetailsForm_infoText__eENnH textSmall",emailUnverified:"ContactDetailsForm_emailUnverified__6vOx0 ContactDetailsForm_infoText__eENnH textSmall",pendingEmailUnverified:"ContactDetailsForm_pendingEmailUnverified__L8lfp ContactDetailsForm_infoText__eENnH textSmall",checkInbox:"ContactDetailsForm_checkInbox__8-Myk",emailStyle:"ContactDetailsForm_emailStyle__aCL19",helperLink:"ContactDetailsForm_helperLink__L4Gjt a",tooMany:"ContactDetailsForm_tooMany__6Els+",emailSent:"ContactDetailsForm_emailSent__w+Z3P",confirmChangesTitle:"ContactDetailsForm_confirmChangesTitle__qgvt1",confirmChangesInfo:"ContactDetailsForm_confirmChangesInfo__C8aHm",bottomWrapper:"ContactDetailsForm_bottomWrapper__kI5z-",error:"ContactDetailsForm_error__OKJ6s h4"};class N extends s.Component{constructor(e){super(e),this.state={showVerificationEmailSentMessage:!1,showResetPasswordMessage:!1},this.emailSentTimeoutId=null,this.handleResendVerificationEmail=this.handleResendVerificationEmail.bind(this),this.handleResetPassword=this.handleResetPassword.bind(this),this.submittedValues={}}componentWillUnmount(){window.clearTimeout(this.emailSentTimeoutId)}handleResendVerificationEmail(){this.setState({showVerificationEmailSentMessage:!0}),this.props.onResendVerificationEmail().then((()=>{this.emailSentTimeoutId=window.setTimeout((()=>{this.setState({showVerificationEmailSentMessage:!1})}),2e3)}))}handleResetPassword(){this.setState({showResetPasswordMessage:!0});const e=this.props.currentUser.attributes.email;this.props.onResetPassword(e)}render(){return r().createElement(P.Form,Object.assign({},this.props,{render:e=>{const{rootClassName:t,className:a,saveEmailError:s,savePhoneNumberError:n,currentUser:i,formId:o,handleSubmit:l,inProgress:d,intl:E,invalid:h,sendVerificationEmailError:C,sendVerificationEmailInProgress:g,resetPasswordInProgress:f,values:P}=e,{email:N,phoneNumber:w}=P,v=(0,c.j0)(i);if(!v.id)return null;const{email:V,emailVerified:S,pendingEmail:I,profile:T}=v.attributes,M=V!==N,k=E.formatMessage({id:"ContactDetailsForm.emailLabel"}),H=V||"",x=E.formatMessage({id:"ContactDetailsForm.emailRequired"}),R=b.C1(x),y=E.formatMessage({id:"ContactDetailsForm.emailInvalid"}),U=b.gX(y),L=(0,D.rn)(C),j=this.submittedValues.email!==P.email,q=(0,D.$q)(s)?E.formatMessage({id:"ContactDetailsForm.emailTakenError"}):null;let O=null;O=L?r().createElement("span",{className:F.tooMany},r().createElement(m._H,{id:"ContactDetailsForm.tooManyVerificationRequests"})):g||this.state.showVerificationEmailSentMessage?r().createElement("span",{className:F.emailSent},r().createElement(m._H,{id:"ContactDetailsForm.emailSent"})):r().createElement("span",{className:F.helperLink,onClick:this.handleResendVerificationEmail,role:"button"},r().createElement(m._H,{id:"ContactDetailsForm.resendEmailVerificationText"}));let Z=null;if(!S||I||M)if(S||I){if(I){const e=r().createElement("span",{className:F.emailStyle},I),t=r().createElement("span",{className:F.checkInbox},r().createElement(m._H,{id:"ContactDetailsForm.pendingEmailCheckInbox",values:{pendingEmail:e}}));Z=r().createElement("span",{className:F.pendingEmailUnverified},r().createElement(m._H,{id:"ContactDetailsForm.pendingEmailUnverified",values:{pendingEmailCheckInbox:t,resendEmailMessage:O}}))}}else Z=r().createElement("span",{className:F.emailUnverified},r().createElement(m._H,{id:"ContactDetailsForm.emailUnverified",values:{resendEmailMessage:O}}));else Z=r().createElement("span",{className:F.emailVerified},r().createElement(m._H,{id:"ContactDetailsForm.emailVerified"}));const A=(T.protectedData||{}).phoneNumber,W=A!==w&&!("undefined"===typeof A&&""===w),K=E.formatMessage({id:"ContactDetailsForm.phonePlaceholder"}),X=E.formatMessage({id:"ContactDetailsForm.phoneLabel"}),z=E.formatMessage({id:"ContactDetailsForm.passwordLabel"}),G=E.formatMessage({id:"ContactDetailsForm.passwordPlaceholder"}),J=E.formatMessage({id:"ContactDetailsForm.passwordRequired"}),Y=b.uL(J),B=E.formatMessage({id:"ContactDetailsForm.passwordTooShort"},{minLength:b.Z9}),$=b.Ei(B,b.Z9),Q=M?b.A3(Y,$):null,ee=E.formatMessage({id:"ContactDetailsForm.passwordFailed"}),te=this.submittedValues.currentPassword!==P.currentPassword,ae=(0,D.JY)(s)?ee:null,se=_()(F.confirmChangesSection,{[F.confirmChangesSectionVisible]:M}),re=s&&!(q||ae);let ne=null;re&&n?ne=r().createElement("span",{className:F.error},r().createElement(m._H,{id:"ContactDetailsForm.genericFailure"})):re?ne=r().createElement("span",{className:F.error},r().createElement(m._H,{id:"ContactDetailsForm.genericEmailFailure"})):n&&(ne=r().createElement("span",{className:F.error},r().createElement(m._H,{id:"ContactDetailsForm.genericPhoneNumberFailure"})));const ie=r().createElement("span",{className:F.helperLink,onClick:this.handleResetPassword,role:"button"},r().createElement(m._H,{id:"ContactDetailsForm.resetPasswordLinkText"})),oe=r().createElement("span",{className:F.helperLink,onClick:this.handleResetPassword,role:"button"},r().createElement(m._H,{id:"ContactDetailsForm.resendPasswordLinkText"})),le=this.state.showResetPasswordMessage||f?r().createElement(r().Fragment,null,r().createElement(m._H,{id:"ContactDetailsForm.resetPasswordLinkSent",values:{email:r().createElement("span",{className:F.emailStyle},i.attributes.email)}})," ",oe):ie,me=_()(t||F.root,a),ce=Object.keys(this.submittedValues).length>0&&p()(P,this.submittedValues),de=h||ce||d||!(M||W);return r().createElement(u.l0,{className:me,onSubmit:e=>{this.submittedValues=P,l(e)}},r().createElement("div",{className:F.contactDetailsSection},r().createElement(u.gC,{type:"email",name:"email",id:o?"".concat(o,".email"):"email",label:k,placeholder:H,validate:b.A3(R,U),customErrorText:j?null:q}),Z,r().createElement(u.IY,{className:F.phone,name:"phoneNumber",id:o?"".concat(o,".phoneNumber"):"phoneNumber",label:X,placeholder:K})),r().createElement("div",{className:se},r().createElement(u.H4,{as:"h3",className:F.confirmChangesTitle},r().createElement(m._H,{id:"ContactDetailsForm.confirmChangesTitle"})),r().createElement("p",{className:F.confirmChangesInfo},r().createElement(m._H,{id:"ContactDetailsForm.confirmChangesInfo"}),r().createElement("br",null),r().createElement(m._H,{id:"ContactDetailsForm.resetPasswordInfo",values:{resetPasswordLink:le}})),r().createElement(u.gC,{className:F.password,type:"password",name:"currentPassword",id:o?"".concat(o,".currentPassword"):"currentPassword",autoComplete:"current-password",label:z,placeholder:G,validate:Q,customErrorText:te?null:ae})),r().createElement("div",{className:F.bottomWrapper},ne,r().createElement(u.KM,{type:"submit",inProgress:d,ready:ce,disabled:de},r().createElement(m._H,{id:"ContactDetailsForm.saveChanges"}))))}}))}}N.defaultProps={rootClassName:null,className:null,formId:null,saveEmailError:null,savePhoneNumberError:null,inProgress:!1,sendVerificationEmailError:null,sendVerificationEmailInProgress:!1,email:null,phoneNumber:null,resetPasswordInProgress:!1,resetPasswordError:null};const{bool:w,func:v,string:V}=i(),S=(0,o.compose)(m.XN)(N);S.displayName="ContactDetailsForm";const I=S;var T=a(5185);const M={content:"ContactDetailsPage_content__NOhC-",desktopTopbar:"ContactDetailsPage_desktopTopbar__fVtHT",mobileTopbar:"ContactDetailsPage_mobileTopbar__miBEM"},k=e=>{const{saveEmailError:t,savePhoneNumberError:a,saveContactDetailsInProgress:s,currentUser:n,contactDetailsChanged:i,onChange:o,scrollingDisabled:l,sendVerificationEmailInProgress:d,sendVerificationEmailError:E,onResendVerificationEmail:g,onSubmitContactDetails:p,onResetPassword:f,resetPasswordInProgress:_,resetPasswordError:P,intl:b}=e,D=(0,c.j0)(n),F=D.attributes.email||"",N=(D.attributes.profile.protectedData||{}).phoneNumber||"",w=D.id?r().createElement(I,{className:M.form,initialValues:{email:F,phoneNumber:N},saveEmailError:t,savePhoneNumberError:a,currentUser:n,onResendVerificationEmail:g,onResetPassword:f,onSubmit:e=>p({...e,currentEmail:F,currentPhoneNumber:N}),onChange:o,inProgress:s,ready:i,sendVerificationEmailInProgress:d,sendVerificationEmailError:E,resetPasswordInProgress:_,resetPasswordError:P}):null,v=b.formatMessage({id:"ContactDetailsPage.title"});return r().createElement(u.T3,{title:v,scrollingDisabled:l},r().createElement(u.i_,{topbar:r().createElement(r().Fragment,null,r().createElement(h.Z,{currentPage:"ContactDetailsPage",desktopClassName:M.desktopTopbar,mobileClassName:M.mobileTopbar}),r().createElement(u.Tb,{currentPage:"ContactDetailsPage"})),sideNav:null,useAccountSettingsNav:!0,currentPage:"ContactDetailsPage",footer:r().createElement(C.Z,null)},r().createElement("div",{className:M.content},r().createElement(u.H3,{as:"h1"},r().createElement(m._H,{id:"ContactDetailsPage.heading"})),w)))};k.defaultProps={saveEmailError:null,savePhoneNumberError:null,currentUser:null,sendVerificationEmailError:null,resetPasswordInProgress:!1,resetPasswordError:null};const{bool:H,func:x}=i(),R=(0,o.compose)((0,l.connect)((e=>{const{currentUser:t,sendVerificationEmailInProgress:a,sendVerificationEmailError:s}=e.user,{saveEmailError:r,savePhoneNumberError:n,saveContactDetailsInProgress:i,contactDetailsChanged:o,resetPasswordInProgress:l,resetPasswordError:m}=e.ContactDetailsPage;return{saveEmailError:r,savePhoneNumberError:n,saveContactDetailsInProgress:i,currentUser:t,contactDetailsChanged:o,scrollingDisabled:(0,E.uS)(e),sendVerificationEmailInProgress:a,sendVerificationEmailError:s,resetPasswordInProgress:l,resetPasswordError:m}}),(e=>({onChange:()=>e((0,T.de)()),onResendVerificationEmail:()=>e((0,d.zk)()),onSubmitContactDetails:t=>e((0,T.AH)(t)),onResetPassword:t=>e((0,T.c0)(t))}))),m.XN)(k)}];
//# sourceMappingURL=ContactDetailsPage.aba51db5.chunk.js.map