"use strict";(self.webpackChunktruss_docs_2=self.webpackChunktruss_docs_2||[]).push([[73],{2544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(4848),a=t(8453),s=t(1470),o=t(9365);const i={sidebar_position:4,title:"Keys and Accounts"},u="Keys and Accounts",c={id:"data/account",title:"Keys and Accounts",description:"1. Sign up to Truss",source:"@site/docs/data/account.md",sourceDirName:"data",slug:"/data/account",permalink:"/truss-docs/data/account",draft:!1,unlisted:!1,editUrl:"https://github.com/truss-security/truss-docs/blob/main/docs/data/account.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Keys and Accounts"},sidebar:"dataSidebar",previous:{title:"Plans and Pricing",permalink:"/truss-docs/data/plans"}},l={},d=[{value:"1. Sign up to Truss",id:"1-sign-up-to-truss",level:2},{value:"2. Configure your API key",id:"2-configure-your-api-key",level:2},{value:"3. Send requests",id:"3-send-requests",level:2},{value:"3.1 Search products",id:"31-search-products",level:3},{value:"4. View your project stats",id:"4-view-your-project-stats",level:2},{value:"5. Manage your account",id:"5-manage-your-account",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"keys-and-accounts",children:"Keys and Accounts"}),"\n",(0,r.jsx)(n.h2,{id:"1-sign-up-to-truss",children:"1. Sign up to Truss"}),"\n",(0,r.jsx)(n.p,{children:"Sign up for an account on the Truss website, enter your details, and select CREATE A FREE ACCOUNT."}),"\n",(0,r.jsx)(n.p,{children:"To activate your account, verify your email address by clicking the link sent to your inbox."}),"\n",(0,r.jsx)(n.h2,{id:"2-configure-your-api-key",children:"2. Configure your API key"}),"\n",(0,r.jsx)(n.p,{children:"Once verified, you\u2019ll be taken to the Truss dashboard where you can configure your auto-generated API key."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Truss will automatically generate the My First Key API key for you."})}),"\n",(0,r.jsx)(n.h2,{id:"3-send-requests",children:"3. Send requests"}),"\n",(0,r.jsx)(n.p,{children:"Use the API key when sending requests. The following examples interact with the Truss network by sending requests using HTTP."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with your own unique API key."]}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["Use a tool such as the ",(0,r.jsx)(n.a,{href:"https://curl.se/",children:"Client Uniform Resource Locator (curl)"})," or ",(0,r.jsx)(n.a,{href:"https://www.postman.com/downloads/",children:"Postman"})," to make requests. We recommend using Postman if you're a Windows user."]}),"\n",(0,r.jsx)(n.h3,{id:"31-search-products",children:"3.1 Search products"}),"\n",(0,r.jsx)(n.p,{children:"Retrieve the 2 most recently added security products:"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"curl",label:"curl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'  curl https://api.trus-security.com/v1/products/search \\\n      -X POST \\\n      -H "Content-Type: application/json" \\\n      -H "Authentication: YOUR-API-KEY" \\\n      --data \'{\n        "category": "Malware",\n        "startDate": 1716773365530,\n        "limit": 2\n      }\'\n'})})}),(0,r.jsx)(o.A,{value:"javascript",label:"javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"  const searchParams = {\n    category: 'Malware',\n    startdate: 1716773365530,\n    limit: 2\n  }\n  const { response } = await searchProducts(searchParams);\n  console.log(response)\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"You'll receive a response similar to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "response": {\n      "$metadata": {\n          "httpStatusCode": 200,\n          "requestId": "VCQ9ORC1S4DUT6001VG5TF91VBVV4KQNSO5AEMVJF66Q9ASUAAJG",\n          "attempts": 1,\n          "totalRetryDelay": 0\n      },\n      "Count": 2,\n      "Items": [\n          {\n              "id": "01HQ8XD8S0V8QVXE8AY2ZY78DZ",\n              "version": 0,\n              "latestVersion": 0,\n              "timestamp": 1716773365036,\n              "title": "opendir_AbuseCH-URLhaus_02/21/2024",\n              "author": [\n                  "abuse_ch"\n              ],\n              "type": "Indicator",\n              "category": "Malware",\n              "source": "",\n              "reference": [\n                  "https://urlhaus.abuse.ch/url/2766339/",\n                  "https://urlhaus.abuse.ch/url/2766759/"\n              ],\n              "tags": [\n                  "DarkGate",\n                  "opendir",\n                  "vbs",\n                  "ascii",\n                  "Encoded",\n                  "GuLoader",\n                  "encrypted"\n              ],\n              "industry": [],\n              "region": [],\n              "indicators": {\n                  "URL": [\n                      "https://computersupportexperts.com/css/cab/1%20(31).vbs",\n                      "http://rowtechequipments.com/iz/Colmanh.pfb",\n                      "http://rowtechequipments.com/iz/GmXqgExpUzCakBKX138.bin"\n                  ]\n              },\n              "indicatorsHash": "5234d9c9a0ec1c8b26cdafc8f912e32aa4c97456ab830ee9b3af8d1640ef680c",\n              "validators": [],\n              "downloads": -1,\n              "rating": -1\n          },\n          {\n              "id": "01HQ8XD8WS10ZD6MJ2691JEJJZ",\n              "version": 0,\n              "latestVersion": 0,\n              "timestamp": 1716773365092,\n              "title": "Rhadamanthys_AbuseCH-URLhaus_02/21/2024",\n              "author": [\n                  "abuse_ch"\n              ],\n              "type": "Indicator",\n              "category": "Malware",\n              "source": "",\n              "reference": [\n                  "https://urlhaus.abuse.ch/url/2766459/",\n                  "https://urlhaus.abuse.ch/url/2766460/"\n              ],\n              "tags": [\n                  "Rhadamanthys",\n                  "exe"\n              ],\n              "industry": [],\n              "region": [],\n              "indicators": {\n                  "URL": [\n                      "http://whitemansearch.shop/setup",\n                      "http://whitemansearch.shop/ClassroomEc.exe"\n                  ]\n              },\n              "indicatorsHash": "9924d29ac83e2657b3f7d52b53f630199f3f9de17ba6fcc59df4e3b983169436",\n              "validators": [],\n              "downloads": -1,\n              "rating": -1\n          }\n      ],\n      "LastEvaluatedKey": {\n          "GSI2PK": "Malware",\n          "SK": "VER#0",\n          "PK": "PROD#01HQ8XD8WS10ZD6MJ2691JEJJZ",\n          "GSI2SK": 1716773365092\n      },\n      "ScannedCount": 2\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"4-view-your-project-stats",children:"4. View your project stats"}),"\n",(0,r.jsx)(n.p,{children:"From the Stats page of the Truss dashboard, you can view real-time statistics about your API usage. Optimize your app and better understand your users by reviewing your API request stats regularly."}),"\n",(0,r.jsx)(n.h2,{id:"5-manage-your-account",children:"5. Manage your account"}),"\n",(0,r.jsx)(n.p,{children:"Find additional settings in Settings to manage your account. You can:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Set notifications for daily limits from the Account option."}),"\n",(0,r.jsx)(n.li,{children:"Manage your billing information in the Billing option."}),"\n",(0,r.jsx)(n.li,{children:"Manage shared API keys in the Key Sharing option."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),a=t(4164),s=t(3104),o=t(6347),i=t(205),u=t(7485),c=t(1682),l=t(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,l.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),y=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{y&&u(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),l=e=>{const n=e.currentTarget,t=u.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:l,...s,className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);