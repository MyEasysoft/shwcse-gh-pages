"use strict";exports.id=778,exports.ids=[778,756,464],exports.modules={5734:(e,t,a)=>{a.r(t),a.d(t,{AuthenticationForms:()=>Q,AuthenticationOrConfirmInfoForm:()=>$,AuthenticationPageComponent:()=>ee,SocialLoginButtonsMaybe:()=>K,default:()=>te});var r=a(6689),n=a.n(r),o=a(6695),i=a(6022),s=a(4661),l=a(6734),c=a.n(l),m=a(9003),d=a.n(m),u=a(9699),p=a.n(u),g=a(6639),h=a(6134),f=a(3429),E=a(1422),_=a(3872),P=a(1233),v=(a(3665),a(4941)),N=a(5074),b=a(6471),A=a(6902),C=a(9895),y=a(9930),S=a(2745),k=a(7600),F=a(4395),M=a(2411),T=a(1839),L=a.n(T),I=a(1341);const w="ConfirmSignupForm_root__QPzC4 marketplaceModalFormRootStyles",H="ConfirmSignupForm_name__sQdEH",R="ConfirmSignupForm_firstNameRoot__nefy6",x="ConfirmSignupForm_lastNameRoot__e+XtV",W="ConfirmSignupForm_bottomWrapper__Rq4C6 marketplaceModalBottomWrapper",O=e=>n().createElement(M.Form,Object.assign({},e,{mutators:{...L()},render:e=>{const{rootClassName:t,className:a,formId:r,handleSubmit:o,inProgress:i,invalid:s,intl:l,termsAndConditions:c,authInfo:m,idp:u}=e,p=I.C1(l.formatMessage({id:"ConfirmSignupForm.emailRequired"})),g=I.gX(l.formatMessage({id:"ConfirmSignupForm.emailInvalid"})),h=d()(t||w,a),f=i,E=s||f;if(!m)return;const{email:_,firstName:v,lastName:N}=m;return n().createElement(y.l0,{className:h,onSubmit:o},n().createElement("div",null,n().createElement(y.gC,{type:"email",id:r?"".concat(r,".email"):"email",name:"email",autoComplete:"email",label:l.formatMessage({id:"ConfirmSignupForm.emailLabel"}),placeholder:l.formatMessage({id:"ConfirmSignupForm.emailPlaceholder"}),initialValue:_,validate:I.A3(p,g)}),n().createElement("div",{className:H},n().createElement(y.gC,{className:R,type:"text",id:r?"".concat(r,".firstName"):"firstName",name:"firstName",autoComplete:"given-name",label:l.formatMessage({id:"ConfirmSignupForm.firstNameLabel"}),placeholder:l.formatMessage({id:"ConfirmSignupForm.firstNamePlaceholder"}),initialValue:v,validate:I.C1(l.formatMessage({id:"ConfirmSignupForm.firstNameRequired"}))}),n().createElement(y.gC,{className:x,type:"text",id:r?"".concat(r,".lastName"):"lastName",name:"lastName",autoComplete:"family-name",label:l.formatMessage({id:"ConfirmSignupForm.lastNameLabel"}),placeholder:l.formatMessage({id:"ConfirmSignupForm.lastNamePlaceholder"}),initialValue:N,validate:I.C1(l.formatMessage({id:"ConfirmSignupForm.lastNameRequired"}))}))),n().createElement("div",{className:W},c,n().createElement(y.KM,{type:"submit",inProgress:f,disabled:E},n().createElement(P._H,{id:"ConfirmSignupForm.signUp",values:{idp:u}}))))}}));O.defaultProps={inProgress:!1};const B=(0,o.compose)(P.XN)(O);B.displayName="ConfirmSignupForm";const D=B;var q=a(5090),V=a(6025);const X={root:"AuthenticationPage_root__NmviC",contentContainer:"AuthenticationPage_contentContainer__a46vz marketplaceModalRootStyles",content:"AuthenticationPage_content__aAO1o marketplaceModalBaseStyles",tabs:"AuthenticationPage_tabs__0pM5F",tab:"AuthenticationPage_tab__fAPnP marketplaceModalTitleStyles",form:"AuthenticationPage_form__U1VDc",loginForm:"AuthenticationPage_loginForm__yM-vq",signupForm:"AuthenticationPage_signupForm__FEoDH",bottomWrapper:"AuthenticationPage_bottomWrapper__w0w4I marketplaceModalBottomWrapper",privacyWrapper:"AuthenticationPage_privacyWrapper__RamWn",termsWrapper:"AuthenticationPage_termsWrapper__WKYrC",hideOnMobile:"AuthenticationPage_hideOnMobile__IUbwt",verifyClose:"AuthenticationPage_verifyClose__PBkzr marketplaceModalCloseStyles",closeText:"AuthenticationPage_closeText__N1K0x marketplaceModalCloseText",closeIcon:"AuthenticationPage_closeIcon__CUw3C marketplaceModalCloseIcon",modalTitle:"AuthenticationPage_modalTitle__Hu7hI marketplaceModalTitleStyles",modalMessage:"AuthenticationPage_modalMessage__54ObO marketplaceModalParagraphStyles",email:"AuthenticationPage_email__FeBXz",modalHelperLink:"AuthenticationPage_modalHelperLink__5GSLY a marketplaceModalHelperLink",modalHelperText:"AuthenticationPage_modalHelperText__Ti0em marketplaceModalHelperText",modalIcon:"AuthenticationPage_modalIcon__S--V7 marketplaceModalIconStyles",error:"AuthenticationPage_error__269bM marketplaceModalPasswordMargins",signupWithIdpTitle:"AuthenticationPage_signupWithIdpTitle__pQeMN marketplaceModalTitleStyles",confirmInfoText:"AuthenticationPage_confirmInfoText__61BfC",buttonIcon:"AuthenticationPage_buttonIcon__3nT1r",socialButtonWrapper:"AuthenticationPage_socialButtonWrapper__iaCJc",socialButtonsOr:"AuthenticationPage_socialButtonsOr__x7By2",socialButtonsOrText:"AuthenticationPage_socialButtonsOrText__a6Ltk"},j=e=>{const{name:t,email:a,onResendVerificationEmail:r,resendErrorMessage:o,sendVerificationEmailInProgress:i}=e,s=n().createElement(y.T5,{rootClassName:X.modalHelperLink,onClick:r},n().createElement(P._H,{id:"AuthenticationPage.resendEmailLinkText"})),l=n().createElement(y.RC,{className:X.modalHelperLink,name:"ContactDetailsPage"},n().createElement(P._H,{id:"AuthenticationPage.fixEmailLinkText"}));return n().createElement("div",{className:X.content},n().createElement(y.RC,{className:X.verifyClose,name:"ProfileSettingsPage"},n().createElement("span",{className:X.closeText},n().createElement(P._H,{id:"AuthenticationPage.verifyEmailClose"})),n().createElement(y.bM,{rootClassName:X.closeIcon})),n().createElement(y.U1,{className:X.modalIcon}),n().createElement(y.X6,{as:"h1",rootClassName:X.modalTitle},n().createElement(P._H,{id:"AuthenticationPage.verifyEmailTitle",values:{name:t}})),n().createElement("p",{className:X.modalMessage},n().createElement(P._H,{id:"AuthenticationPage.verifyEmailText",values:{email:a}})),o,n().createElement("div",{className:X.bottomWrapper},n().createElement("p",{className:X.modalHelperText},i?n().createElement(P._H,{id:"AuthenticationPage.sendingEmail"}):n().createElement(P._H,{id:"AuthenticationPage.resendEmail",values:{resendEmailLink:s}})),n().createElement("p",{className:X.modalHelperText},n().createElement(P._H,{id:"AuthenticationPage.fixEmail",values:{fixEmailLink:l}}))))};var U=a(5472),z=a(1486),Z=a(7945);const G=n().createElement("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg"},n().createElement("path",{d:"M7.89.214C4.055 1.047 1.005 4.13.205 7.947c-.734 3.45.533 7.283 3.166 9.6.967.85 3.2 2.033 4.15 2.183l.617.1v-6.883H5.806v-3h2.283l.083-1.633c.134-2.417.717-3.534 2.3-4.25.617-.284 1.034-.35 2.3-.334.85.017 1.617.084 1.7.134.1.05.167.7.167 1.433v1.317h-.983c-1.484 0-1.75.283-1.817 1.983l-.067 1.35h1.45c1.284 0 1.434.033 1.35.283-.05.167-.133.667-.2 1.134-.216 1.55-.25 1.583-1.483 1.583h-1.083V19.914l.866-.234c1.684-.433 2.984-1.216 4.4-2.633 2.067-2.067 2.9-4.1 2.9-7.017 0-3.166-1.2-5.75-3.616-7.766C14.106.38 10.772-.42 7.889.214z",fill:"#1877F2",fillRule:"nonzero"})),J=n().createElement("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg"},n().createElement("g",{fill:"none",fillRule:"evenodd"},n().createElement("path",{d:"M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z",fill:"#4285F4"}),n().createElement("path",{d:"M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z",fill:"#34A853"}),n().createElement("path",{d:"M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z",fill:"#FBBC05"}),n().createElement("path",{d:"M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.192 5.736 7.396 3.977 10 3.977z",fill:"#EA4335"}),n().createElement("path",{d:"M0 0h20v20H0z"}))),K=e=>{const t=(0,h.a5)(),{isLogin:a,showFacebookLogin:r,showGoogleLogin:o,from:i}=e,s=()=>{const e=(0,_.ny)(),a=i?"from=".concat(i):"",r=(0,E.XA)("LandingPage",t),n=r?"&defaultReturn=".concat(r):"",o=(0,E.XA)("ConfirmPage",t);return{baseUrl:e,fromParam:a,defaultReturnParam:n,defaultConfirmParam:o?"&defaultConfirm=".concat(o):""}};return r||o?n().createElement("div",{className:X.idpButtons},n().createElement("div",{className:X.socialButtonsOr},n().createElement("span",{className:X.socialButtonsOrText},n().createElement(P._H,{id:"AuthenticationPage.or"}))),r?n().createElement("div",{className:X.socialButtonWrapper},n().createElement(y.GN,{onClick:()=>(()=>{const e=s(),{baseUrl:t,fromParam:a,defaultReturnParam:r,defaultConfirmParam:n}=e;window.location.href="".concat(t,"/api/auth/facebook?").concat(a).concat(r).concat(n)})()},n().createElement("span",{className:X.buttonIcon},G),a?n().createElement(P._H,{id:"AuthenticationPage.loginWithFacebook"}):n().createElement(P._H,{id:"AuthenticationPage.signupWithFacebook"}))):null,o?n().createElement("div",{className:X.socialButtonWrapper},n().createElement(y.GN,{onClick:()=>(()=>{const e=s(),{baseUrl:t,fromParam:a,defaultReturnParam:r,defaultConfirmParam:n}=e;window.location.href="".concat(t,"/api/auth/google?").concat(a).concat(r).concat(n)})()},n().createElement("span",{className:X.buttonIcon},J),a?n().createElement(P._H,{id:"AuthenticationPage.loginWithGoogle"}):n().createElement(P._H,{id:"AuthenticationPage.signupWithGoogle"}))):null):null},Q=e=>{const{isLogin:t,showFacebookLogin:a,showGoogleLogin:r,from:o,submitLogin:i,loginError:s,signupError:l,authInProgress:c,submitSignup:m,termsAndConditions:d}=e,u={state:o?{from:o}:null},p=[{text:n().createElement(y.X6,{as:t?"h2":"h1",rootClassName:X.tab},n().createElement(P._H,{id:"AuthenticationPage.signupLinkText"})),selected:!t,linkProps:{name:"SignupPage",to:u}},{text:n().createElement(y.X6,{as:t?"h1":"h2",rootClassName:X.tab},n().createElement(P._H,{id:"AuthenticationPage.loginLinkText"})),selected:t,linkProps:{name:"LoginPage",to:u}}],g=n().createElement("div",{className:X.error},n().createElement(P._H,{id:"AuthenticationPage.loginFailed"})),h=n().createElement("div",{className:X.error},(0,N.tF)(l)?n().createElement(P._H,{id:"AuthenticationPage.signupFailedEmailAlreadyTaken"}):n().createElement(P._H,{id:"AuthenticationPage.signupFailed"})),f=(e,t)=>e?t:null,E=t?f(s,g):f(l,h);return n().createElement("div",{className:X.content},n().createElement(y.kp,{className:X.tabs,tabs:p}),E,t?n().createElement(q.Z,{className:X.loginForm,onSubmit:i,inProgress:c}):n().createElement(V.Z,{className:X.signupForm,onSubmit:e=>{const{fname:t,lname:a,...r}=e,n={firstName:t.trim(),lastName:a.trim(),...r};m(n)},inProgress:c,termsAndConditions:d}),n().createElement(K,{isLogin:t,showFacebookLogin:a,showGoogleLogin:r,from:o}))},Y=e=>{const{authInfo:t,authInProgress:a,confirmError:r,submitSingupWithIdp:o,termsAndConditions:i}=e,s=t?t.idpId.replace(/^./,(e=>e.toUpperCase())):null,l=r?n().createElement("div",{className:X.error},(0,N.tF)(r)?n().createElement(P._H,{id:"AuthenticationPage.signupFailedEmailAlreadyTaken"}):n().createElement(P._H,{id:"AuthenticationPage.signupFailed"})):null;return n().createElement("div",{className:X.content},n().createElement(y.X6,{as:"h1",rootClassName:X.signupWithIdpTitle},n().createElement(P._H,{id:"AuthenticationPage.confirmSignupWithIdpTitle",values:{idp:s}})),n().createElement("p",{className:X.confirmInfoText},n().createElement(P._H,{id:"AuthenticationPage.confirmSignupInfoText"})),l,n().createElement(D,{className:X.form,onSubmit:e=>{const{idpToken:a,email:r,firstName:n,lastName:i,idpId:s}=t,{email:l,firstName:c,lastName:m,...d}=e,u={...l!==r&&{email:l},...c!==n&&{firstName:c},...m!==i&&{lastName:m}},g=p()(d)?null:{...d};o({idpToken:a,idpId:s,...u,...!!g&&{protectedData:g}})},inProgress:a,termsAndConditions:i,authInfo:t,idp:s}))},$=e=>{const{tab:t,authInfo:a,from:r,showFacebookLogin:o,showGoogleLogin:i,submitLogin:s,submitSignup:l,submitSingupWithIdp:c,authInProgress:m,loginError:d,signupError:u,confirmError:p,termsAndConditions:g}=e,h="login"===t;return"confirm"===t?n().createElement(Y,{authInfo:a,submitSingupWithIdp:c,authInProgress:m,confirmError:p,termsAndConditions:g}):n().createElement(Q,{isLogin:h,showFacebookLogin:o,showGoogleLogin:i,from:r,loginError:d,signupError:u,submitLogin:s,authInProgress:m,submitSignup:l,termsAndConditions:g})},ee=e=>{var t,a,o;const[i,l]=(0,r.useState)(!1),[m,u]=(0,r.useState)(!1),[p,h]=(0,r.useState)(c().get("st-authinfo")?JSON.parse(c().get("st-authinfo").replace("j:","")):null),[E,_]=(0,r.useState)(c().get("st-autherror")?JSON.parse(c().get("st-autherror").replace("j:","")):null),b=(0,g.mX)();(0,r.useEffect)((()=>{E&&c().remove("st-autherror")}),[]),(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[i,m]);const{authInProgress:A,currentUser:C,intl:M,isAuthenticated:T,location:L,loginError:I,scrollingDisabled:w,signupError:H,submitLogin:R,submitSignup:x,confirmError:W,submitSingupWithIdp:O,tab:B,sendVerificationEmailInProgress:D,sendVerificationEmailError:q,onResendVerificationEmail:V,onManageDisableScrolling:G,tosAssetsData:J,tosFetchInProgress:K,tosFetchError:Q}=e,Y=(null===(t=L.state)||void 0===t?void 0:t.from)||null,ee=(null===p||void 0===p?void 0:p.from)||null,te=Y||(ee||null),ae=(0,v.j0)(C),re=!!ae.id,ne="login"===B,oe=!ne&&re&&!ae.attributes.emailVerified;if(T&&te)return n().createElement(s.Redirect,{to:te});if(T&&re&&!oe)return n().createElement(y.d9,{name:"LandingPage"});const ie=(0,N.rn)(q)?"AuthenticationPage.resendFailedTooManyRequests":"AuthenticationPage.resendFailed",se=q?n().createElement("p",{className:X.error},n().createElement(P._H,{id:ie})):null,le=b.marketplaceName,ce=ne?M.formatMessage({id:"AuthenticationPage.schemaTitleLogin"},{marketplaceName:le}):M.formatMessage({id:"AuthenticationPage.schemaTitleSignup"},{marketplaceName:le}),me=ne?M.formatMessage({id:"AuthenticationPage.schemaDescriptionLogin"},{marketplaceName:le}):M.formatMessage({id:"AuthenticationPage.schemaDescriptionSignup"},{marketplaceName:le}),de=d()({[X.hideOnMobile]:oe});return n().createElement(y.T3,{title:ce,scrollingDisabled:w,schema:{"@context":"http://schema.org","@type":"WebPage",name:ce,description:me}},n().createElement(y.ip,{mainColumnClassName:X.layoutWrapperMain,topbar:n().createElement(S.Z,{className:de}),footer:n().createElement(k.Z,null)},n().createElement(y.I4,{className:X.root,childrenWrapperClassName:X.contentContainer,as:"section",image:b.branding.brandImage,sizes:"100%",useOverlay:!0},oe?n().createElement(j,{name:ae.attributes.profile.firstName,email:n().createElement("span",{className:X.email},ae.attributes.email),onResendVerificationEmail:V,resendErrorMessage:se,sendVerificationEmailInProgress:D}):n().createElement($,{tab:B,authInfo:p,from:te,showFacebookLogin:!1,showGoogleLogin:!0,submitLogin:R,submitSignup:x,submitSingupWithIdp:O,authInProgress:A,loginError:I,signupError:H,confirmError:W,termsAndConditions:n().createElement(F.Z,{onOpenTermsOfService:()=>l(!0),onOpenPrivacyPolicy:()=>u(!0),intl:M})}))),n().createElement(y.u_,{id:"AuthenticationPage.tos",isOpen:i,onClose:()=>l(!1),usePortal:!0,onManageDisableScrolling:G},n().createElement("div",{className:X.termsWrapper},n().createElement(U.TermsOfServiceContent,{inProgress:K,error:Q,data:null===J||void 0===J||null===(a=J[(0,f._)(Z.yn)])||void 0===a?void 0:a.data}))),n().createElement(y.u_,{id:"AuthenticationPage.privacyPolicy",isOpen:m,onClose:()=>u(!1),usePortal:!0,onManageDisableScrolling:G},n().createElement("div",{className:X.privacyWrapper},n().createElement(z.PrivacyPolicyContent,{inProgress:K,error:Q,data:null===J||void 0===J||null===(o=J[(0,f._)(Z.bB)])||void 0===o?void 0:o.data}))))};ee.defaultProps={currentUser:null,loginError:null,signupError:null,confirmError:null,tab:"signup",sendVerificationEmailError:null,showSocialLoginsForTests:!1,privacyAssetsData:null,privacyFetchInProgress:!1,privacyFetchError:null,tosAssetsData:null,tosFetchInProgress:!1,tosFetchError:null};const te=(0,o.compose)(s.withRouter,(0,i.connect)((e=>{const{isAuthenticated:t,loginError:a,signupError:r,confirmError:n}=e.auth,{currentUser:o,sendVerificationEmailInProgress:i,sendVerificationEmailError:s}=e.user,{pageAssetsData:l,inProgress:c,error:m}=e.hostedAssets||{},{pageAssetsData:d,inProgress:u,error:p}=e.hostedAssets||{};return{authInProgress:(0,b.fO)(e),currentUser:o,isAuthenticated:t,loginError:a,scrollingDisabled:(0,A.uS)(e),signupError:r,confirmError:n,sendVerificationEmailInProgress:i,sendVerificationEmailError:s,privacyAssetsData:l,privacyFetchInProgress:c,privacyFetchError:m,tosAssetsData:d,tosFetchInProgress:u,tosFetchError:p}}),(e=>({submitLogin:t=>{let{email:a,password:r}=t;return e((0,b.x4)(a,r))},submitSignup:t=>e((0,b.IU)(t)),submitSingupWithIdp:t=>e((0,b.JF)(t)),onResendVerificationEmail:()=>e((0,C.zk)()),onManageDisableScrolling:(t,a)=>e((0,A.R4)(t,a))}))),P.XN)(ee)},5090:(e,t,a)=>{a.d(t,{Z:()=>C});var r=a(6689),n=a.n(r),o=a(580),i=a.n(o),s=a(6695),l=a(2411),c=a(9003),m=a.n(c),d=a(1233),u=a(1341),p=a(9930);const g="LoginForm_root__sN8e2 marketplaceModalFormRootStyles",h="LoginForm_password__coA+s marketplaceModalPasswordMargins",f="LoginForm_bottomWrapper__PJIN3 marketplaceModalBottomWrapper",E="LoginForm_bottomWrapperText__2R5k3 marketplaceModalBottomWrapperText",_="LoginForm_recoveryLink__QqkgT marketplaceModalHelperLink",P="LoginForm_recoveryLinkInfo__b0HJl marketplaceModalHelperText",v=e=>n().createElement(l.Form,Object.assign({},e,{render:e=>{const{rootClassName:t,className:a,formId:r,handleSubmit:o,inProgress:i,intl:s,invalid:l}=e,c=s.formatMessage({id:"LoginForm.emailLabel"}),v=s.formatMessage({id:"LoginForm.emailPlaceholder"}),N=s.formatMessage({id:"LoginForm.emailRequired"}),b=u.C1(N),A=s.formatMessage({id:"LoginForm.emailInvalid"}),C=u.gX(A),y=s.formatMessage({id:"LoginForm.passwordLabel"}),S=s.formatMessage({id:"LoginForm.passwordPlaceholder"}),k=s.formatMessage({id:"LoginForm.passwordRequired"}),F=u.uL(k),M=m()(t||g,a),T=i,L=l||T,I=n().createElement(p.RC,{name:"PasswordRecoveryPage",className:_},n().createElement(d._H,{id:"LoginForm.forgotPassword"}));return n().createElement(p.l0,{className:M,onSubmit:o},n().createElement("div",null,n().createElement(p.gC,{type:"email",id:r?"".concat(r,".email"):"email",name:"email",autoComplete:"email",label:c,placeholder:v,validate:u.A3(b,C)}),n().createElement(p.gC,{className:h,type:"password",id:r?"".concat(r,".password"):"password",name:"password",autoComplete:"current-password",label:y,placeholder:S,validate:F})),n().createElement("div",{className:f},n().createElement("p",{className:E},n().createElement("span",{className:P},n().createElement(d._H,{id:"LoginForm.forgotPasswordInfo",values:{passwordRecoveryLink:I}}))),n().createElement(p.KM,{type:"submit",inProgress:T,disabled:L},n().createElement(d._H,{id:"LoginForm.logIn"}))))}}));v.defaultProps={rootClassName:null,className:null,form:null,inProgress:!1};const{string:N,bool:b}=i(),A=(0,s.compose)(d.XN)(v);A.displayName="LoginForm";const C=A},6025:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(6689),n=a.n(r),o=a(6695),i=a(2411),s=a(1839),l=a.n(s),c=a(9003),m=a.n(c),d=a(1233),u=a(1341),p=a(9930);const g="SignupForm_root__0Nnz- marketplaceModalFormRootStyles",h="SignupForm_name__rVHEY",f="SignupForm_firstNameRoot__10z0v",E="SignupForm_lastNameRoot__QqFaU",_="SignupForm_password__waec+ marketplaceModalPasswordMargins",P="SignupForm_bottomWrapper__lAvuX marketplaceModalBottomWrapper",v=e=>n().createElement(i.Form,Object.assign({},e,{mutators:{...l()},render:e=>{const{rootClassName:t,className:a,formId:r,handleSubmit:o,inProgress:i,invalid:s,intl:l,termsAndConditions:c}=e,v=u.C1(l.formatMessage({id:"SignupForm.emailRequired"})),N=u.gX(l.formatMessage({id:"SignupForm.emailInvalid"})),b=l.formatMessage({id:"SignupForm.passwordRequired"}),A=l.formatMessage({id:"SignupForm.passwordTooShort"},{minLength:u.Z9}),C=l.formatMessage({id:"SignupForm.passwordTooLong"},{maxLength:u.e2}),y=u.Ei(A,u.Z9),S=u.BS(C,u.e2),k=u.uL(b),F=u.A3(k,y,S),M=m()(t||g,a),T=i,L=s||T;return n().createElement(p.l0,{className:M,onSubmit:o},n().createElement("div",null,n().createElement(p.gC,{type:"email",id:r?"".concat(r,".email"):"email",name:"email",autoComplete:"email",label:l.formatMessage({id:"SignupForm.emailLabel"}),placeholder:l.formatMessage({id:"SignupForm.emailPlaceholder"}),validate:u.A3(v,N)}),n().createElement("div",{className:h},n().createElement(p.gC,{className:f,type:"text",id:r?"".concat(r,".fname"):"fname",name:"fname",autoComplete:"given-name",label:l.formatMessage({id:"SignupForm.firstNameLabel"}),placeholder:l.formatMessage({id:"SignupForm.firstNamePlaceholder"}),validate:u.C1(l.formatMessage({id:"SignupForm.firstNameRequired"}))}),n().createElement(p.gC,{className:E,type:"text",id:r?"".concat(r,".lname"):"lname",name:"lname",autoComplete:"family-name",label:l.formatMessage({id:"SignupForm.lastNameLabel"}),placeholder:l.formatMessage({id:"SignupForm.lastNamePlaceholder"}),validate:u.C1(l.formatMessage({id:"SignupForm.lastNameRequired"}))})),n().createElement(p.gC,{className:_,type:"password",id:r?"".concat(r,".password"):"password",name:"password",autoComplete:"new-password",label:l.formatMessage({id:"SignupForm.passwordLabel"}),placeholder:l.formatMessage({id:"SignupForm.passwordPlaceholder"}),validate:F})),n().createElement("div",{className:P},c,n().createElement(p.KM,{type:"submit",inProgress:T,disabled:L},n().createElement(d._H,{id:"SignupForm.signUp"}))))}}));v.defaultProps={inProgress:!1};const N=(0,o.compose)(d.XN)(v);N.displayName="SignupForm";const b=N},4395:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(6689),n=a.n(r),o=a(1341),i=a(9930),s=a(1233);const l="TermsAndConditions_root__XyXEQ marketplaceModalBottomWrapperText",c="TermsAndConditions_finePrint__pa4N2 marketplaceModalHelperLink",m="TermsAndConditions_privacyLink__wTDd7 marketplaceModalHelperLink",d="TermsAndConditions_termsLink__3upPN marketplaceModalHelperLink",u=e=>{const{onOpenTermsOfService:t,onOpenPrivacyPolicy:a,intl:r}=e,u=e=>t=>{t.preventDefault(),e(t)},p=e=>t=>{13===t.keyCode&&e()},g=n().createElement("span",{className:d,onClick:u(t),role:"button",tabIndex:"0",onKeyUp:p(t)},n().createElement(s._H,{id:"AuthenticationPage.termsAndConditionsTermsLinkText"})),h=n().createElement("span",{className:m,onClick:u(a),role:"button",tabIndex:"0",onKeyUp:p(a)},n().createElement(s._H,{id:"AuthenticationPage.termsAndConditionsPrivacyLinkText"}));return n().createElement("div",{className:l},n().createElement(i.Dl,{name:"terms",id:"terms-accepted",optionLabelClassName:c,options:[{key:"tos-and-privacy",label:r.formatMessage({id:"AuthenticationPage.termsAndConditionsAcceptText"},{termsLink:g,privacyLink:h})}],validate:(0,o.J3)(r.formatMessage({id:"AuthenticationPage.termsAndConditionsAcceptRequired"}))}))}},5721:(e,t,a)=>{a.d(t,{H1:()=>h,H2:()=>f,H3:()=>E,H4:()=>_,H5:()=>P,H6:()=>v});var r=a(6689),n=a.n(r),o=a(9003),i=a.n(o);const s="Heading_h1__XWifP",l="Heading_h2__rfrgQ",c="Heading_h3__0sbSd",m="Heading_h4__rX5+W",d="Heading_h5__+111h",u="Heading_h6__7ekBW",p=e=>{const{className:t,rootClassName:a,as:r,tagRef:o,...s}=e,l=r||"h2",c=i()(a,t);return n().createElement(l,Object.assign({className:c,ref:o},s))},g={rootClassName:null,className:null,as:null},h=n().forwardRef(((e,t)=>{const{rootClassName:a,as:r,...o}=e;return n().createElement(p,Object.assign({rootClassName:a||s,as:r||"h1",tagRef:t},o))}));h.displayName="H1",h.defaultProps=g;const f=n().forwardRef(((e,t)=>{const{rootClassName:a,as:r,...o}=e;return n().createElement(p,Object.assign({rootClassName:a||l,as:r||"h2",tagRef:t},o))}));f.displayName="H2",f.defaultProps=g;const E=n().forwardRef(((e,t)=>{const{rootClassName:a,as:r,...o}=e;return n().createElement(p,Object.assign({rootClassName:a||c,as:r||"h3",tagRef:t},o))}));E.displayName="H3",E.defaultProps=g;const _=n().forwardRef(((e,t)=>{const{rootClassName:a,as:r,...o}=e;return n().createElement(p,Object.assign({rootClassName:a||m,as:r||"h4",tagRef:t},o))}));_.displayName="H4",_.defaultProps=g;const P=n().forwardRef(((e,t)=>{const{rootClassName:a,as:r,...o}=e;return n().createElement(p,Object.assign({rootClassName:a||d,as:r||"h5",tagRef:t},o))}));P.displayName="H5",P.defaultProps=g;const v=n().forwardRef(((e,t)=>{const{rootClassName:a,as:r,...o}=e;return n().createElement(p,Object.assign({rootClassName:a||u,as:r||"h6",tagRef:t},o))}));v.displayName="H6",v.defaultProps=g},2875:(e,t,a)=>{a.d(t,{J:()=>c,Z:()=>d});var r=a(6689),n=a.n(r),o=a(4659),i=a.n(o);const s=i()({resolved:{},chunkName:()=>"PageBuilder",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!a.m[t]},importAsync:()=>a.e(470).then(a.bind(a,8698)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return a(t)},resolve(){return 8698}}),l="\n# An error occurred\nThe web app couldn't reach the backend to fetch the Privacy Policy page.\n\n## Possible actions\nPlease refresh the page and, if that doesn't help, contact the marketplace administrators.\n",c={sections:[{sectionType:"article",sectionId:"privacy",appearance:{fieldType:"customAppearance",backgroundColor:"#ffffff"},title:{fieldType:"heading1",content:"Privacy Policy"},blocks:[{blockType:"defaultBlock",blockId:"hero-content",text:{fieldType:"markdown",content:l}}]}],meta:{pageTitle:{fieldType:"metaTitle",content:"Privacy policy page"},pageDescription:{fieldType:"metaDescription",content:"Privacy policy fetch failed"}}},m=e=>n().createElement(s,Object.assign({pageAssetsData:c},e)),d=m},1486:(e,t,a)=>{a.r(t),a.d(t,{PRIVACY_POLICY_ASSET_NAME:()=>b,PrivacyPolicyContent:()=>_,PrivacyPolicyPageComponent:()=>P,default:()=>A});var r=a(6689),n=a.n(r),o=a(4659),i=a.n(o),s=a(6695),l=a.n(s),c=a(6022),m=a.n(c),d=a(3429),u=a(3665),p=a(5721),g=a(2875),h=a(6429);const f=i()({resolved:{},chunkName:()=>"PageBuilder",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!a.m[t]},importAsync:()=>a.e(470).then(a.bind(a,8698)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return a(t)},resolve(){return 8698}}),E=i()({resolved:{},chunkName:()=>"SectionBuilder",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!a.m[t]},importAsync:()=>a.e(470).then(a.bind(a,8698)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return a(t)},resolve(){return 8698}},{resolveComponent:e=>e.SectionBuilder}),_=e=>{const{inProgress:t,error:a,data:r}=e;if(t)return null;const o=null===a&&r?r:g.J;return n().createElement(E,Object.assign({},o,{options:{fieldComponents:{heading1:{component:e=>n().createElement(p.H1,Object.assign({as:"h2"},e)),pickValidProps:e=>(e=>"string"===typeof(null===e||void 0===e?void 0:e.content))(e)?{children:e.content}:{}}},isInsideContainer:!0}}))},P=e=>{var t;const{pageAssetsData:a,inProgress:r,error:o}=e;return n().createElement(f,{pageAssetsData:null===a||void 0===a||null===(t=a[(0,d._)(h.W)])||void 0===t?void 0:t.data,inProgress:r,error:o,fallbackPage:n().createElement(g.Z,null)})},v=e=>{const{pageAssetsData:t,inProgress:a,error:r}=e.hostedAssets||{};return{pageAssetsData:t,inProgress:a,error:r}},N=(0,s.compose)((0,c.connect)(v))(P),b=h.W,A=N},526:(e,t,a)=>{a.d(t,{J:()=>c,Z:()=>d});var r=a(6689),n=a.n(r),o=a(4659),i=a.n(o);const s=i()({resolved:{},chunkName:()=>"PageBuilder",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!a.m[t]},importAsync:()=>a.e(470).then(a.bind(a,8698)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return a(t)},resolve(){return 8698}}),l="\n# An error occurred\nThe web app couldn't reach the backend to fetch the Term of Service page.\n\n## Possible actions\nPlease refresh the page and, if that doesn't help, contact the marketplace administrators.\n",c={sections:[{sectionType:"article",sectionId:"terms",appearance:{fieldType:"customAppearance",backgroundColor:"#ffffff"},title:{fieldType:"heading1",content:"Terms of Service"},blocks:[{blockType:"defaultBlock",blockId:"hero-content",text:{fieldType:"markdown",content:l}}]}],meta:{pageTitle:{fieldType:"metaTitle",content:"Terms of service page"},pageDescription:{fieldType:"metaDescription",content:"Terms of service fetch failed"}}},m=e=>n().createElement(s,Object.assign({pageAssetsData:c},e)),d=m},5472:(e,t,a)=>{a.r(t),a.d(t,{TOS_ASSET_NAME:()=>b,TermsOfServiceContent:()=>_,TermsOfServicePageComponent:()=>P,default:()=>A});var r=a(6689),n=a.n(r),o=a(4659),i=a.n(o),s=a(6695),l=a.n(s),c=a(6022),m=a.n(c),d=a(3429),u=a(3665),p=a(5721),g=a(526),h=a(4292);const f=i()({resolved:{},chunkName:()=>"PageBuilder",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!a.m[t]},importAsync:()=>a.e(470).then(a.bind(a,8698)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return a(t)},resolve(){return 8698}}),E=i()({resolved:{},chunkName:()=>"SectionBuilder",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!a.m[t]},importAsync:()=>a.e(470).then(a.bind(a,8698)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return a(t)},resolve(){return 8698}},{resolveComponent:e=>e.SectionBuilder}),_=e=>{const{inProgress:t,error:a,data:r}=e;if(t)return null;const o=null===a&&r?r:g.J;return n().createElement(E,Object.assign({},o,{options:{fieldComponents:{heading1:{component:e=>n().createElement(p.H1,Object.assign({as:"h2"},e)),pickValidProps:e=>(e=>"string"===typeof(null===e||void 0===e?void 0:e.content))(e)?{children:e.content}:{}}},isInsideContainer:!0}}))},P=e=>{var t;const{pageAssetsData:a,inProgress:r,error:o}=e;return n().createElement(f,{pageAssetsData:null===a||void 0===a||null===(t=a[(0,d._)(h.W)])||void 0===t?void 0:t.data,inProgress:r,error:o,fallbackPage:n().createElement(g.Z,null)})},v=e=>{const{pageAssetsData:t,inProgress:a,error:r}=e.hostedAssets||{};return{pageAssetsData:t,inProgress:a,error:r}},N=(0,s.compose)((0,c.connect)(v))(P),b=h.W,A=N},3429:(e,t,a)=>{a.d(t,{_:()=>r});const r=e=>e.replace(/-(.)/g,(e=>e[1].toUpperCase()))}};
//# sourceMappingURL=AuthenticationPage.aac97f7a.chunk.js.map