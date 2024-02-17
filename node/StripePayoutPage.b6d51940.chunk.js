"use strict";exports.id=711,exports.ids=[711],exports.modules={4833:(e,t,r)=>{r.r(t),r.d(t,{StripePayoutPageComponent:()=>D,default:()=>U});var n=r(6689),o=r.n(n),c=r(6695),a=r(6022),i=r(6639),u=r(6134),s=r(1422),l=r(1233),p=r(4941),g=(r(3665),r(6902)),d=r(6378),P=r(9930),S=r(2745),m=r(7600),y=r(5196);const A="StripePayoutPage_content__kxziG",E="StripePayoutPage_desktopTopbar__Lzgqr",_="StripePayoutPage_mobileTopbar__0K4pK",L="StripePayoutPage_heading__yUpdg",h="StripePayoutPage_stripeConnectAccountForm__6Fvac",b="success",k="failure",v=(e,t,r)=>{const n=(0,s.EW)("StripePayoutOnboardingPage",r,{returnURLType:e},{}),o=t.replace(/\/$/,"");return"".concat(o).concat(n)},f=e=>e&&e.external_accounts.data.length>0?e.external_accounts.data[0].last4:null,C=(e,t)=>null!=e&&e.requirements&&Array.isArray(e.requirements[t])&&e.requirements[t].length>0,D=e=>{const t=(0,i.mX)(),r=(0,u.a5)(),{currentUser:n,scrollingDisabled:c,getAccountLinkInProgress:a,getAccountLinkError:s,createStripeAccountError:g,updateStripeAccountError:d,fetchStripeAccountError:y,stripeAccountFetched:D,stripeAccount:U,onPayoutDetailsChange:T,onPayoutDetailsSubmit:N,onGetStripeConnectAccountLink:x,payoutDetailsSaveInProgress:F,payoutDetailsSaved:I,params:R,intl:G}=e,{returnURLType:q}=R,H=(0,p.j0)(n),Z=!!H.id,B=Z&&!!U&&!!U.id,K=G.formatMessage({id:"StripePayoutPage.title"}),w=a,z=t.marketplaceRootURL,M=v(b,z,r),W=v(k,z,r),X=B?U.id:null,j=B?(e=>e.attributes.stripeAccountData||null)(U):null,O=U&&(C(j,"past_due")||C(j,"currently_due")),$=j?j.country:null,J=(Q=x,V={accountId:X,successURL:M,failureURL:W},e=>()=>{Q({type:e,...V}).then((e=>{window.location.href=e})).catch((e=>console.error(e)))});var Q,V;const Y=q===k,ee=B&&O;return q===b&&B&&!O?o().createElement(P.d9,{name:"StripePayoutPage"}):(Y&&!s&&J("custom_account_verification")(),o().createElement(P.T3,{title:K,scrollingDisabled:c},o().createElement(P.i_,{topbar:o().createElement(o().Fragment,null,o().createElement(S.Z,{currentPage:"StripePayoutPage",desktopClassName:E,mobileClassName:_}),o().createElement(P.Tb,{currentPage:"StripePayoutPage"})),sideNav:null,useAccountSettingsNav:!0,currentPage:"StripePayoutPage",footer:o().createElement(m.Z,null)},o().createElement("div",{className:A},o().createElement(P.H3,{as:"h1",className:L},o().createElement(l._H,{id:"StripePayoutPage.heading"})),Z?Y&&!s?o().createElement(l._H,{id:"StripePayoutPage.redirectingToStripe"}):o().createElement(P.qW,{rootClassName:h,disabled:w,inProgress:F,ready:I,currentUser:H,stripeBankAccountLastDigits:f(j),savedCountry:$,submitButtonText:G.formatMessage({id:"StripePayoutPage.submitButtonText"}),stripeAccountError:g||d||y,stripeAccountLinkError:s,stripeAccountFetched:D,onChange:T,onSubmit:N,onGetStripeConnectAccountLink:J,stripeConnected:B},B&&!Y&&ee?o().createElement(P.oy,{type:"verificationNeeded",inProgress:a,onGetStripeConnectAccountLink:J("custom_account_verification")}):B&&$&&!Y?o().createElement(P.oy,{type:"verificationSuccess",inProgress:a,disabled:F,onGetStripeConnectAccountLink:J("custom_account_update")}):null):o().createElement(l._H,{id:"StripePayoutPage.loadingData"})))))};D.defaultProps={currentUser:null,createStripeAccountError:null,updateStripeAccountError:null,fetchStripeAccountError:null,getAccountLinkError:null,stripeAccount:null,params:{returnURLType:null}};const U=(0,c.compose)((0,a.connect)((e=>{const{getAccountLinkInProgress:t,getAccountLinkError:r,createStripeAccountError:n,updateStripeAccountError:o,fetchStripeAccountError:c,stripeAccount:a,stripeAccountFetched:i}=e.stripeConnectAccount,{currentUser:u}=e.user,{payoutDetailsSaveInProgress:s,payoutDetailsSaved:l}=e.StripePayoutPage;return{currentUser:u,getAccountLinkInProgress:t,getAccountLinkError:r,createStripeAccountError:n,updateStripeAccountError:o,fetchStripeAccountError:c,stripeAccount:a,stripeAccountFetched:i,payoutDetailsSaveInProgress:s,payoutDetailsSaved:l,scrollingDisabled:(0,g.uS)(e)}}),(e=>({onPayoutDetailsChange:()=>e((0,d.FZ)()),onPayoutDetailsSubmit:(t,r)=>e((0,y.ZK)(t,r)),onGetStripeConnectAccountLink:t=>e((0,d.cU)(t))}))),l.XN)(D)}};
//# sourceMappingURL=StripePayoutPage.b6d51940.chunk.js.map