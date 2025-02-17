"use strict";(self.webpackChunktruss_docs_2=self.webpackChunktruss_docs_2||[]).push([[55],{82380:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var l=i(74848),a=i(28453);const r={sidebar_position:4,title:"Query Bar Explorer",toc_min_heading_level:2,toc_max_heading_level:3},t=void 0,n={id:"dashboard/querybar",title:"Query Bar Explorer",description:"Query Bar Explorer",source:"@site/docs/dashboard/querybar.md",sourceDirName:"dashboard",slug:"/dashboard/querybar",permalink:"/truss-docs/dashboard/querybar",draft:!1,unlisted:!1,editUrl:"https://github.com/truss-security/truss-docs/blob/main/docs/dashboard/querybar.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Query Bar Explorer",toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"dashboardSidebar",previous:{title:"Attributes Panel",permalink:"/truss-docs/dashboard/attributepanel"},next:{title:"Products Explorer",permalink:"/truss-docs/dashboard/products"}},d={},c=[{value:"Understanding Query Language",id:"understanding-query-language",level:2},{value:"Basic Query Structure",id:"basic-query-structure",level:3},{value:"Switch the filter view",id:"switch-the-filter-view",level:3},{value:"Complex Query Combinations",id:"complex-query-combinations",level:3},{value:"Save and Load Filters",id:"save-and-load-filters",level:2},{value:"Save Filter",id:"save-filter",level:3},{value:"Load Filter",id:"load-filter",level:3},{value:"Pro Query Tips",id:"pro-query-tips",level:2}];function o(e){const s={h2:"h2",h3:"h3",p:"p",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"text-center",children:(0,l.jsx)("h1",{className:"text-4xl font-bold mb-4",children:"Query Bar Explorer"})}),"\n",(0,l.jsxs)("div",{className:"text-center mb-12",children:[(0,l.jsx)("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto mb-4",children:(0,l.jsx)(s.p,{children:"Welcome to the Query Bar Explorer, where you can craft precise search queries using the Truss Query Language (TQL). This powerful tool allows you to create complex filters and combine multiple search criteria."})}),(0,l.jsx)("p",{className:"text-xl italic text-gray-600 max-w-3xl mx-auto",children:(0,l.jsx)(s.p,{children:"The Query Bar provides advanced filtering capabilities through a flexible query language syntax."})})]}),"\n",(0,l.jsxs)("div",{className:"relative my-12",children:[(0,l.jsx)("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:(0,l.jsx)("div",{className:"w-full border-t border-gray-300"})}),(0,l.jsx)("div",{className:"relative flex justify-center",children:(0,l.jsx)("span",{className:"bg-white px-3 text-base text-gray-500",children:"\u2022"})})]}),"\n",(0,l.jsx)(s.h2,{id:"understanding-query-language",children:"Understanding Query Language"}),"\n",(0,l.jsx)("p",{className:"text-lg mb-6",children:"Let's explore how to effectively use the Query Language for advanced filtering."}),"\n",(0,l.jsx)(s.h3,{id:"basic-query-structure",children:"Basic Query Structure"}),"\n",(0,l.jsxs)("div",{className:"mb-8 text-lg",children:[(0,l.jsx)(s.p,{children:"First, the filter page will display the current filter within the visual Truss Query Language (TQL) format."}),(0,l.jsx)(s.p,{children:"The TQL will be displayed in the breadcrumb filter display and can be manipulated with the following options:"}),(0,l.jsxs)("ul",{className:"list-disc pl-6 my-4",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Field Names:"})," category, region, tags, etc."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Attribute Panel:"})," Clicking on the attribute panel items will add them to the filter"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Charts Page:"})," Clicking on the charts page panels will add them to the filter"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Filter Tags:"})," Clicking on the filter tags will remove them from the filter"]})]})]}),"\n",(0,l.jsx)("div",{className:"my-6 flex justify-center",children:(0,l.jsx)("img",{src:"/truss-docs/img/15 - Query Language Bar - Changing Filters1.png",alt:"Basic Query View",className:"rounded-lg shadow-lg max-h-[500px] object-contain"})}),"\n",(0,l.jsx)(s.h3,{id:"switch-the-filter-view",children:"Switch the filter view"}),"\n",(0,l.jsx)("div",{className:"mb-8 text-lg",children:(0,l.jsx)(s.p,{children:"You can switch between the Breadcrumb TQL Filter and the Textual TQL Filter display.\nThe same filter addition options will be available in both views (attribute panel or charts page additions).\nBut within the QL view, you will be able to see the TQL syntax and can manipulate the filter with the following options:"})}),"\n",(0,l.jsx)("div",{className:"my-6 flex justify-center",children:(0,l.jsx)("img",{src:"/truss-docs/img/16 - Query Language Bar - Changing Filters2.png",alt:"Query Results View",className:"rounded-lg shadow-lg max-h-[500px] object-contain"})}),"\n",(0,l.jsx)("div",{className:"mb-8 text-lg",children:(0,l.jsxs)("ul",{className:"list-disc pl-6 my-4",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Operators:"})," AND, OR for combining conditions"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Values:"})," Enclosed in quotes for exact matching"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Customizable:"})," Here you can add new filter names that are not currently available in the attribute panel or charts page."]})]})}),"\n",(0,l.jsxs)("div",{className:"relative my-12",children:[(0,l.jsx)("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:(0,l.jsx)("div",{className:"w-full border-t border-gray-300"})}),(0,l.jsx)("div",{className:"relative flex justify-center",children:(0,l.jsx)("span",{className:"bg-white px-3 text-base text-gray-500",children:"\u2022"})})]}),"\n",(0,l.jsx)(s.h3,{id:"complex-query-combinations",children:"Complex Query Combinations"}),"\n",(0,l.jsx)("div",{className:"my-6 flex justify-center",children:(0,l.jsx)("img",{src:"/truss-docs/img/17 - Query Language Bar - Complex Filter1.png",alt:"Complex Query View",className:"rounded-lg shadow-lg max-h-[500px] object-contain"})}),"\n",(0,l.jsxs)("div",{className:"mb-8 text-lg",children:[(0,l.jsx)(s.p,{children:"More sophisticated queries can be created using parentheses and multiple operators:"}),(0,l.jsxs)("ul",{className:"list-disc pl-6 my-4",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Grouping:"})," Use parentheses to group conditions"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Multiple Values:"})," Combine related criteria with OR"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Field Combinations:"})," Mix different fields for precise filtering"]})]}),(0,l.jsxs)(s.p,{children:["Example: ",(0,l.jsx)("code",{children:'(region="Russia") AND (tags="APT27" OR tags="APT28")'})]})]}),"\n",(0,l.jsxs)("div",{className:"relative my-12",children:[(0,l.jsx)("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:(0,l.jsx)("div",{className:"w-full border-t border-gray-300"})}),(0,l.jsx)("div",{className:"relative flex justify-center",children:(0,l.jsx)("span",{className:"bg-white px-3 text-base text-gray-500",children:"\u2022"})})]}),"\n",(0,l.jsx)(s.h2,{id:"save-and-load-filters",children:"Save and Load Filters"}),"\n",(0,l.jsx)(s.h3,{id:"save-filter",children:"Save Filter"}),"\n",(0,l.jsx)("div",{className:"mb-8 text-lg",children:(0,l.jsx)(s.p,{children:"Once you have a filter set you want to save, you can do so by clicking the 'Save Filter' button."})}),"\n",(0,l.jsx)("div",{className:"my-6 flex justify-center",children:(0,l.jsx)("img",{src:"/truss-docs/img/18 - Query Language Bar - Save Filter1.png",alt:"Complex Query View",className:"rounded-lg shadow-lg max-h-[500px] object-contain"})}),"\n",(0,l.jsxs)("div",{className:"mb-8 text-lg",children:[(0,l.jsx)(s.p,{children:"A modal will appear where you can give your filter a name and description."}),(0,l.jsxs)("ul",{className:"list-disc pl-6 my-4",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Filter Name:"})," A name for your filter"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Filter Description:"})," A description for your filter"]})]})]}),"\n",(0,l.jsx)("div",{className:"my-6 flex justify-center",children:(0,l.jsx)("img",{src:"/truss-docs/img/19 - Query Language Bar - Save Filter2.png",alt:"Complex Query View",className:"rounded-lg shadow-lg max-h-[500px] object-contain"})}),"\n",(0,l.jsxs)("div",{className:"relative my-12",children:[(0,l.jsx)("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:(0,l.jsx)("div",{className:"w-full border-t border-gray-300"})}),(0,l.jsx)("div",{className:"relative flex justify-center",children:(0,l.jsx)("span",{className:"bg-white px-3 text-base text-gray-500",children:"\u2022"})})]}),"\n",(0,l.jsx)(s.h3,{id:"load-filter",children:"Load Filter"}),"\n",(0,l.jsxs)("div",{className:"mb-8 text-lg",children:[(0,l.jsx)(s.p,{children:"You can also load a saved filter by clicking the 'Load Filter' button."}),(0,l.jsxs)("ul",{className:"list-disc pl-6 my-4",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Load Filter:"})," Click the 'Load Filter' button"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Select Filter:"})," Select the filter you want to load"]})]})]}),"\n",(0,l.jsx)("div",{className:"my-6 flex justify-center",children:(0,l.jsx)("img",{src:"/truss-docs/img/20 - Query Language Bar - Load Filter1.png",alt:"Complex Query View",className:"rounded-lg shadow-lg max-h-[500px] object-contain"})}),"\n",(0,l.jsx)("div",{className:"mb-8 text-lg",children:(0,l.jsx)(s.p,{children:"After selecting the filter you want to load, the filter will be applied and the products associated with the filter will be displayed."})}),"\n",(0,l.jsx)("div",{className:"my-6 flex justify-center",children:(0,l.jsx)("img",{src:"/truss-docs/img/21 - Query Language Bar - Load Filter2.png",alt:"Complex Query View",className:"rounded-lg shadow-lg max-h-[500px] object-contain"})}),"\n",(0,l.jsxs)("div",{className:"relative my-12",children:[(0,l.jsx)("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:(0,l.jsx)("div",{className:"w-full border-t border-gray-300"})}),(0,l.jsx)("div",{className:"relative flex justify-center",children:(0,l.jsx)("span",{className:"bg-white px-3 text-base text-gray-500",children:"\u2022"})})]}),"\n",(0,l.jsx)(s.h2,{id:"pro-query-tips",children:"Pro Query Tips"}),"\n",(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 my-8",children:[(0,l.jsxs)("div",{className:"bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6",children:[(0,l.jsx)("h3",{className:"text-xl font-bold mb-4 text-blue-800",children:"Query Strategies"}),(0,l.jsxs)("ul",{className:"list-disc pl-6 space-y-2",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Field Names:"})," Use exact field names from the UI"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Grouping:"})," Organize conditions logically"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Operators:"})," Combine AND/OR effectively"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"font-semibold",children:"Validation:"})," Check syntax before updating"]})]})]}),(0,l.jsxs)("div",{className:"bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6",children:[(0,l.jsx)("h3",{className:"text-xl font-bold mb-4 text-blue-800",children:"Best Practices"}),(0,l.jsxs)("ul",{className:"list-disc pl-6 space-y-2",children:[(0,l.jsx)("li",{children:"Start with simple queries and build up"}),(0,l.jsx)("li",{children:"Use parentheses for clear grouping"}),(0,l.jsx)("li",{children:"Test queries incrementally"}),(0,l.jsx)("li",{children:"Save complex queries for future use"})]})]})]}),"\n",(0,l.jsx)("div",{className:"mt-12 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-100 text-center",children:(0,l.jsx)("p",{className:"text-lg font-medium text-blue-800",children:(0,l.jsx)(s.p,{children:"The Query Bar is your advanced tool for precise data filtering.\nMaster the Query Language to create sophisticated searches and unlock deeper insights into your security intelligence."})})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>n});var l=i(96540);const a={},r=l.createContext(a);function t(e){const s=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),l.createElement(r.Provider,{value:s},e.children)}}}]);