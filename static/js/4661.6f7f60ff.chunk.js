"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4661],{54817:(t,e,n)=>{n.d(e,{Z:()=>U});var a=n(72791),i=n(41418),o=n.n(i),s=(n(80948),n(53176)),r=(n(73665),n(84480)),l=n(81301);const d="FieldDateAndTimeInput_root__bNnFA",m="FieldDateAndTimeInput_formRow__AgXHr",c="FieldDateAndTimeInput_field__mlwWG",u="FieldDateAndTimeInput_fieldDateInput__usera",h="FieldDateAndTimeInput_fieldSelect__D8+qm",g="FieldDateAndTimeInput_fieldSelectDisabled__DHtUU FieldDateAndTimeInput_fieldSelect__D8+qm",D="FieldDateAndTimeInput_select__EvNg-",b="FieldDateAndTimeInput_selectDisabled__SUW5u FieldDateAndTimeInput_select__EvNg-",p="FieldDateAndTimeInput_arrowIcon__E4EL3",T="FieldDateAndTimeInput_startDate__uj2N+",k="FieldDateAndTimeInput_lineBetween__98BmD",_="FieldDateAndTimeInput_lineBetweenDisabled__7ITbZ",E=new Date,y=(t,e)=>(0,s.RY)(t,"month",e,1,"months"),S=(t,e)=>(0,s.RY)(t,"month",e,-1,"months"),v=(t,e,n)=>(0,s.RY)(t,"day",n,e-1,"days"),f=(t,e,n,a)=>{if(0===a.length||!a[0]||!n)return[];const i=(0,s.RY)(n,"day",e);return a.reduce(((n,a)=>{const o=a.attributes.start,r=a.attributes.end,l=(0,s.RY)(i,"day",e,1,"days"),d=(0,s.U$)(i,o)?i:o,m=(0,s.U$)(r,l)?l:r,c=(0,s.Sj)(d,m,e,t);return n.concat(c)}),[])},M=(t,e,n,a,i)=>{if(!i||!i.attributes||!a||!n)return[];const o=i.attributes.end,r=(0,s.Ft)(n),l=(0,s.RY)(a,"day",e,1,"days"),d=(0,s.RY)(r,"day",e,1,"days"),m=(0,s.RY)(a,"day",e);let c,u;return(0,s.U$)(m,r)?(c=(0,s.U$)(r,m)?r:m,u=(0,s.Fo)((0,s.RY)(o,"day",e),m)?o:l):(c=r,u=(0,s.U$)(d,o)?o:d),(0,s.Ym)(c,u,e,t)},C=(t,e,n)=>t&&t[0]?t.filter((t=>(0,s.mh)(e,t.attributes.start,t.attributes.end,"day",n))):[],A=(t,e,n,a,i,o)=>{const r=i?[]:f(t,e,a,C(n,a,e)),l=i||(r.length>0&&r[0]&&r[0].timestamp?r[0].timestamp.toString():null),d=l?(0,s.Ft)(l):null,m=o||(d?new Date((0,s.Kn)(d,"hour",e).getTime()-1):null),c=n.find((t=>(0,s.mh)(d,t.attributes.start,t.attributes.end))),u=M(t,e,l,m,c);return{startTime:l,endDate:m,endTime:u.length>0&&u[0]&&u[0].timestamp?u[0].timestamp.toString():null,selectedTimeSlot:c}},N=(t,e,n)=>{const a=(0,s.XU)(e,n);return t&&0!==Object.keys(t).length&&t[a]&&t[a].timeSlots?t[a].timeSlots:[]},I=t=>a.createElement(l.JT,Object.assign({},t,{direction:"left",rootClassName:p})),F=t=>a.createElement(l.JT,Object.assign({},t,{direction:"right",rootClassName:p})),R=t=>{const{currentMonth:e,dayCountAvailableForBooking:n,timeZone:i}=t,o=y(e,i);return(0,s.U$)(o,v(E,n,i))?null:a.createElement(F,null)},B=t=>{const{currentMonth:e,timeZone:n}=t,i=S(e,n),o=(0,s.RY)(E,"month",n);return(0,s.U$)(i,o)?a.createElement(I,null):null};class Z extends a.Component{constructor(t){super(t),this.onBookingStartDateChange=t=>{const{monthlyTimeSlots:e,timeZone:n,intl:a,form:i}=this.props;if(!t||!t.date)return i.batch((()=>{i.change("bookingStartTime",null),i.change("bookingEndDate",{date:null}),i.change("bookingEndTime",null)})),void this.setState({currentMonth:(0,s.RY)(E,"month",n)});const o=(0,s.vc)(t.date,n),r=N(e,this.state.currentMonth,n),l=C(r,o,n),{startTime:d,endDate:m,endTime:c}=A(a,n,l,o);i.batch((()=>{i.change("bookingStartTime",d),i.change("bookingEndDate",{date:m}),i.change("bookingEndTime",c)}))},this.onBookingStartTimeChange=t=>{const{monthlyTimeSlots:e,timeZone:n,intl:a,form:i,values:o}=this.props,s=N(e,this.state.currentMonth,n),r=o.bookingStartDate.date,l=C(s,r,n),{endDate:d,endTime:m}=A(a,n,l,r,t);i.batch((()=>{i.change("bookingEndDate",{date:d}),i.change("bookingEndTime",m)}))},this.onBookingEndDateChange=t=>{const{monthlyTimeSlots:e,timeZone:n,intl:a,form:i,values:o}=this.props;if(!t||!t.date)return void i.change("bookingEndTime",null);const r=(0,s.vc)(t.date,n),{bookingStartDate:l,bookingStartTime:d}=o,m=l.date,c=N(e,this.state.currentMonth,n),u=C(c,m,n),{endTime:h}=A(a,n,u,m,d,r);i.change("bookingEndTime",h)},this.state={currentMonth:(0,s.RY)(E,"month",t.timeZone)},this.fetchMonthData=this.fetchMonthData.bind(this),this.onMonthClick=this.onMonthClick.bind(this),this.onBookingStartDateChange=this.onBookingStartDateChange.bind(this),this.onBookingStartTimeChange=this.onBookingStartTimeChange.bind(this),this.onBookingEndDateChange=this.onBookingEndDateChange.bind(this),this.isOutsideRange=this.isOutsideRange.bind(this)}fetchMonthData(t){const{listingId:e,timeZone:n,onFetchTimeSlots:a,dayCountAvailableForBooking:i}=this.props,o=v(E,i,n);if((0,s.mh)(t,E,o)){const i=(0,s.U$)(E,t)?E:t,r=y(t,n);a(e,i,(0,s.U$)(r,o)?(0,s.RY)(o,"day",n):r,n)}}onMonthClick(t){const{onMonthChanged:e,timeZone:n}=this.props;this.setState((e=>({currentMonth:t(e.currentMonth,n)})),(()=>{this.fetchMonthData(t(this.state.currentMonth,n));const a=(0,s.XU)(this.state.currentMonth,n),i=this.props.monthlyTimeSlots[a];i&&i.fetchTimeSlotsError&&this.fetchMonthData(this.state.currentMonth),e&&e(a)}))}isOutsideRange(t,e,n,a){if(!n)return!0;const i=(0,s.vc)(t,a),o=(0,s.RY)(e,"day",a),r=new Date(n.attributes.end.getTime()-1),l=(0,s.RY)(r,"day",a,1,"days");return!((0,s.U$)(i,o)&&(0,s.U$)(l,i))}render(){const{rootClassName:t,className:e,formId:n,startDateInputProps:i,values:p,monthlyTimeSlots:v,timeZone:I,intl:F,dayCountAvailableForBooking:Z}=this.props,U=o()(t||d,e),Y=p.bookingStartDate&&p.bookingStartDate.date?p.bookingStartDate.date:null,w=p.bookingStartTime?p.bookingStartTime:null,O=p.bookingEndDate&&p.bookingEndDate.date?p.bookingEndDate.date:null,P=N(v,this.state.currentMonth,I),$=C(P,Y,I),L=f(F,I,Y,$),j=L.length>0&&L[0]&&L[0].timestamp?L[0].timestamp:null,{startTime:x,endDate:H,selectedTimeSlot:J}=A(F,I,$,Y,w||j,O||Y),K=M(F,I,w||x,O||H,J),W=P?t=>!P.find((e=>(0,s.JV)(t,e.attributes.start,e.attributes.end,I))):()=>!1,X=(0,s.Kn)(E,"hour",I);let q="08:00";try{var V;q=null===(V=(0,s.DX)(X,F,{timeZone:I}))||void 0===V?void 0:V.time}catch(z){}const Q=(0,s.RY)(E,"day",I),G=Y&&(w||x);return a.createElement("div",{className:U},a.createElement("div",{className:m},a.createElement("div",{className:o()(c,T)},a.createElement(l.vl,{className:u,name:"bookingStartDate",id:n?"".concat(n,".bookingStartDate"):"bookingStartDate",label:i.label,placeholderText:i.placeholderText,format:t=>t&&t.date?{date:(0,s.dw)(t.date,I)}:t,parse:t=>t&&t.date?{date:(0,s.vc)(t.date,I)}:t,initialVisibleMonth:(0,s.$T)(Y||Q,I),isDayBlocked:W,onChange:this.onBookingStartDateChange,onPrevMonthClick:()=>this.onMonthClick(S),onNextMonthClick:()=>this.onMonthClick(y),navNext:a.createElement(R,{currentMonth:this.state.currentMonth,timeZone:I,dayCountAvailableForBooking:Z}),navPrev:a.createElement(B,{currentMonth:this.state.currentMonth,timeZone:I}),useMobileMargins:!0,validate:(0,r.BA)(F.formatMessage({id:"BookingTimeForm.requiredDate"})),onClose:t=>{var e;return this.setState({currentMonth:(0,s.RY)(null!==(e=null===t||void 0===t?void 0:t.date)&&void 0!==e?e:E,"month",this.props.timeZone)})}}))),a.createElement("div",{className:m},a.createElement("div",{className:c},a.createElement(l.Wy,{name:"bookingStartTime",id:n?"".concat(n,".bookingStartTime"):"bookingStartTime",className:Y?h:g,selectClassName:Y?D:b,label:F.formatMessage({id:"FieldDateAndTimeInput.startTime"}),disabled:!Y,onChange:this.onBookingStartTimeChange},Y?L.map((t=>a.createElement("option",{key:t.timeOfDay,value:t.timestamp},t.timeOfDay))):a.createElement("option",null,q))),a.createElement("div",{className:Y?k:_},"-"),a.createElement("div",{className:c},a.createElement(l.Wy,{name:"bookingEndTime",id:n?"".concat(n,".bookingEndTime"):"bookingEndTime",className:Y?h:g,selectClassName:Y?D:b,label:F.formatMessage({id:"FieldDateAndTimeInput.endTime"}),disabled:!G},G?K.map((t=>a.createElement("option",{key:"00:00"===t.timeOfDay?"24:00":t.timeOfDay,value:t.timestamp},"00:00"===t.timeOfDay?"24:00":t.timeOfDay))):a.createElement("option",null,q)))))}}Z.defaultProps={rootClassName:null,className:null,startDateInputProps:null,endDateInputProps:null,startTimeInputProps:null,endTimeInputProps:null,listingId:null,monthlyTimeSlots:null,timeZone:null};const U=Z},38975:(t,e,n)=>{n.d(e,{Z:()=>b});var a=n(72791),i=n(55950),o=n(66319),s=n(80948),r=n(73665),l=n(79908),d=n(7285),m=n(81301),c=n(60949);const{Money:u,UUID:h}=o.types,g=(t,e)=>{const n=t.reduce(((t,e)=>{const n=(0,l.ud)(e.lineTotal);return new i.Z(n).add(t)}),new i.Z(0)),a=t[0]&&t[0].unitPrice?t[0].unitPrice.currency:e;return new u((0,l.aV)(n.toNumber(),(0,l.p_)(a)),a)},D=function(t,e,n){const a={start:t,end:e};return{id:new h("estimated-booking"),type:"booking",attributes:{...a}}},b=t=>{const{breakdownData:e={},lineItems:n,timeZone:i,currency:o,marketplaceName:l,processName:u}=t,{startDate:b,endDate:p}=e;let T=null;try{T=(0,d.Yt)(u)}catch(M){return a.createElement("div",{className:c.Z.error},a.createElement(s._H,{id:"OrderPanel.unknownTransactionProcess"}))}const k=null===n||void 0===n?void 0:n.find((t=>r.Y8.includes(t.code)&&!t.reversal)),_=null===k||void 0===k?void 0:k.code,E=[r.E4,r.mi].includes(_),y=n&&n.length>0,S=!E||b&&p,v=_===r.PC?r.In:r.FJ,f=y&&S?((t,e,n,a,i,o,s,r)=>{const l=null===o||void 0===o?void 0:o.transitions,m=new Date,c=t.filter((t=>t.includeFor.includes("customer"))),u=t.filter((t=>t.includeFor.includes("provider"))),b=g(c,r),p=g(u,r),T=e&&n?{booking:D(e,n,a,i)}:{};return{id:new h("estimated-transaction"),type:"transaction",attributes:{createdAt:m,processName:s,lastTransitionedAt:m,lastTransition:l.REQUEST_PAYMENT,payinTotal:b,payoutTotal:p,lineItems:c,transitions:[{createdAt:m,by:d.AL,transition:l.REQUEST_PAYMENT}]},...T}})(n,b,p,_,i,T,u,o):null;return f?a.createElement(m.J0,{className:c.Z.receipt,userRole:"customer",transaction:f,booking:f.booking,dateType:v,timeZone:i,currency:o,marketplaceName:l}):null}}}]);
//# sourceMappingURL=4661.6f7f60ff.chunk.js.map