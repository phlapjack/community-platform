import{a as p}from"./jsx-runtime-913be41c.js";import{B as u}from"./Button-82517beb.js";const l=r=>{const{creatorName:o,isShowReplies:s,replies:e,setIsShowReplies:i}=r,t=e&&e.length?e.length:0,n=s?"arrow-full-up":"arrow-full-down",a=t?`${t} ${t===1?"reply":"replies"}`:"Reply";return p(u,{icon:n,onClick:i,sx:{alignSelf:"flex-start"},variant:"outline",small:!0,children:`${a} to ${o}`})};try{l.displayName="ButtonShowReplies",l.__docgenInfo={description:"",displayName:"ButtonShowReplies",props:{creatorName:{defaultValue:null,description:"",name:"creatorName",required:!0,type:{name:"string"}},isShowReplies:{defaultValue:null,description:"",name:"isShowReplies",required:!0,type:{name:"boolean"}},replies:{defaultValue:null,description:"",name:"replies",required:!0,type:{name:"IComment[]"}},setIsShowReplies:{defaultValue:null,description:"",name:"setIsShowReplies",required:!0,type:{name:"() => void"}}}}}catch{}export{l as B};
//# sourceMappingURL=ButtonShowReplies-783defd9.js.map
