"use strict";(self.webpackChunkbulldog_computer_club_website=self.webpackChunkbulldog_computer_club_website||[]).push([[52],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),o=n(7294),i=n(6010),r=n(2389),l=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:n,block:r,defaultValue:d,values:c,groupId:h,className:k}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[v,C]=(0,o.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=w[h];null!=e&&e!==v&&b.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==v&&(x(t),C(a),null!=h&&N(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},k)},b.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>T.push(e),onKeyDown:O,onClick:j},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function c(e){const t=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(7462),o=(n(7294),n(3905)),i=n(5488),r=n(5162);const l={title:"I/O and implementation problems",sidebar_position:3},s=void 0,p={unversionedId:"ccc/io-and-implementation-problems",id:"ccc/io-and-implementation-problems",title:"I/O and implementation problems",description:"Though there are many different types of problems on the CCC, all of them have one thing in common - you read some input from standard input, solve the question based on the input, and output an answer to standard output.",source:"@site/docs/ccc/io-and-implementation-problems.mdx",sourceDirName:"ccc",slug:"/ccc/io-and-implementation-problems",permalink:"/docs/ccc/io-and-implementation-problems",draft:!1,editUrl:"https://github.com/bulldog-computer-club/bulldog-computer-club.github.io/edit/main/docs/ccc/io-and-implementation-problems.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"I/O and implementation problems",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What is the CCC?",permalink:"/docs/ccc/what-is-ccc"},next:{title:"Fast I/O",permalink:"/docs/ccc/fast-io"}},u={},m=[{value:"What are implementation problems?",id:"what-are-implementation-problems",level:2},{value:"Understanding the problem",id:"understanding-the-problem",level:2},{value:"Finding key phrases",id:"finding-key-phrases",level:3},{value:"Example: Joe&#39;s Doubling Points",id:"example-joes-doubling-points",level:4},{value:"Understand the input/output",id:"understand-the-inputoutput",level:3},{value:"Converting your idea into a working program",id:"converting-your-idea-into-a-working-program",level:2},{value:"Sample Implementation Questions",id:"sample-implementation-questions",level:2}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Though there are many different types of problems on the CCC, all of them have one thing in common - you read some input from standard input, solve the question based on the input, and output an answer to standard output."),(0,o.kt)("h1",{id:"reading-input"},"Reading input"),(0,o.kt)("p",null,"How one reads from standard input differs between programming languages. Below, we outline the most common method to do so in the three most popular languages on the CCC."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following methods are not meant to be the fastest ways of reading input.\nRather, they are meant to be the most commonly used, simplest ways available."),(0,o.kt)("p",{parentName:"admonition"},'Thus, they might be insufficient for solving certain problems with very large input.\nWe will discuss this problem in more detail in later articles (commonly referred to as "fast i/o").')),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"py",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"In Python 3, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"input()")," function to read from standard input."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"line = input()\n")),(0,o.kt)("p",null,"As it returns a string, if you need an integer / float / etc. value, you will need to convert it manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"x = int(input())\n# Or:\nx = float(input())\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"input()")," function will read text until it sees a newline, so if the input contains several items on a single line, you will need to process it.\nA common way of doing this is using the ",(0,o.kt)("inlineCode",{parentName:"p"},"str.split()")," method, which will split the text based on a delimiter."),(0,o.kt)("p",null,"For example, if we wanted to read some numbers inputted on a single line and delimited by whitespace, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"1 2 3 4 5"),", we could use the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'parts = input().split(" ")\n# parts = ["1", "2", "3", "4", "5"]\n')),(0,o.kt)("p",null,"...or simply:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'parts = input().split() # If no argument is provided to str.split(), whitespace is used as the delimiter\n# parts = ["1", "2", "3", "4", "5"]\n')),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"split()")," will result in a list of strings. In this case, we might wish to work with a list of integers instead.\nWe can do that by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"ints = map(int, input().split())\n# parts = [1, 2, 3, 4, 5]\n"))),(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("p",null,"In Java, use ",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.Scanner")," to read from standard input."),(0,o.kt)("p",null,"Start by instantiating a ",(0,o.kt)("inlineCode",{parentName:"p"},"Scanner"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Scanner scanner = new Scanner(System.in);\n")),(0,o.kt)("p",null,"Then, you can use one of the ",(0,o.kt)("inlineCode",{parentName:"p"},"next*")," methods to read values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"int i = sc.nextInt();\nfloat f = sc.nextFloat();\ndouble d = sc.nextDouble();\nString line = sc.nextLine();\n// ...\n"))),(0,o.kt)(r.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)("p",null,"In C++, use ",(0,o.kt)("inlineCode",{parentName:"p"},"std::cin")," to read from standard input."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"int a;\nlong double ld;\nlong long ll;\ncin >> a >> ld >> ll;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},">>")," operator for ",(0,o.kt)("inlineCode",{parentName:"p"},"std::cin")," is overloaded to support most types you can think of, so it will just work in most cases."),(0,o.kt)("p",null,"Note that using ",(0,o.kt)("inlineCode",{parentName:"p"},">>")," with a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"string s;\ncin >> s;\n")),(0,o.kt)("p",null,"...will only read up to the first whitespace character, which may be undesirable.\nThat is, if the input was ",(0,o.kt)("inlineCode",{parentName:"p"},"hello world"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," would be ",(0,o.kt)("inlineCode",{parentName:"p"},'"hello"'),", not ",(0,o.kt)("inlineCode",{parentName:"p"},'"hello world"'),"."),(0,o.kt)("p",null,"If you want to read a whole line of input, use ",(0,o.kt)("inlineCode",{parentName:"p"},"getline"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'string s;\ngetline(cin, s); // s is now "hello world"\n')))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"When solving problems, ",(0,o.kt)("strong",{parentName:"p"},"do not")," send a prompt for input unless it is explicitly stated that you should do so in the problem statement.\nThis is because the CCC grader will ",(0,o.kt)("strong",{parentName:"p"},"treat your prompt as output and therefore mark it as incorrect"),"."),(0,o.kt)("p",{parentName:"admonition"},"For example, say we are solving a problem which takes a single input, the age."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Correct")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-py"},"age = int(input())\n# ...\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Incorrect")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-py"},'age = int(input("What is your age?"))\n\n# Also wrong:\nprint("What is your age?")\nage = int(input())\n'))),(0,o.kt)("h1",{id:"writing-output"},"Writing output"),(0,o.kt)("p",null,"Similarly, the way to output values differs between programming languages."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"py",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"In Python, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"print")," function to write to standard output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'print("Hello world") # Hello world\n\nname = "Joe"\nprint("Hello", name) # Hello Joe\n\nprint(1, 2, 3) # 1 2 3\n')),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"print")," will add a newline to the end by default. To change this, provide a different value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"print(\"Hello world\", end='') # No newline\n")),(0,o.kt)("p",null,"To print a sequence of items, map it into a sequence of strings and then use ",(0,o.kt)("inlineCode",{parentName:"p"},"str.join"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'names = ["Vincent", "Andrei", "Joe"]\nprint(" ".join(names)) # Vincent Andrei Joe\n\nxs = [1, 2, 3]\nprint(" ".join(map(str, xs))) # 1 2 3\n'))),(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("p",null,"In Java, use ",(0,o.kt)("inlineCode",{parentName:"p"},"System.out")," to write to standard output."),(0,o.kt)("p",null,"In particular, to write to standard output with a trailing newline, use ",(0,o.kt)("inlineCode",{parentName:"p"},"System.out.println"),".\nOtherwise, use ",(0,o.kt)("inlineCode",{parentName:"p"},"System.out.print"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'System.out.println("hello world!"); // hello world!\nSystem.out.print(1); // 1, without a trailing newline\n')),(0,o.kt)("p",null,"To print a sequence of items, map it into a sequence of strings and then use ",(0,o.kt)("inlineCode",{parentName:"p"},"String.join"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String[] names = {"Vincent", "Andrei", "Joe"};\nSystem.out.println(String.join(", ", names)); // Vincent, Andrei, Joe\n'))),(0,o.kt)(r.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)("p",null,"In C++, use ",(0,o.kt)("inlineCode",{parentName:"p"},"std::cout")," to write to standard output."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"cout << \"Hello world\" << '\\n';\n")),(0,o.kt)("p",null,"C++ will not add a trailing newline automatically; you will need to output it yourself if needed."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"std::endl")),(0,o.kt)("p",{parentName:"admonition"},"As a general rule, prefer to use ",(0,o.kt)("inlineCode",{parentName:"p"},"'\\n'")," instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"std::endl")," I/O manipulator.\nThis has to do with performance: ",(0,o.kt)("inlineCode",{parentName:"p"},"endl")," flushes the stream which can slow down your program significantly if the output is large.\nOther than that, there is no difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"'\\n'")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"std::endl"),".")),(0,o.kt)("p",null,"There are several ways to print out a list of items, but unless you can remember the various somewhat convoluted methods in a competition, the best way is likely to output it out yourself using a loop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<int> xs{1, 2, 3, 4};\nfor (int i = 0; i < xs.size(); i++) {\n    if (i > 0) cout << ' ';\n    cout << xs[i];\n}\ncout << '\\n';\n")),(0,o.kt)("admonition",{title:"Outputting floating point values",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"When outputting floating point values, C++ might use scientific notation:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"double d = 1'000'000'000;\ncout << d << '\\n'; // 1e+09\n")),(0,o.kt)("p",{parentName:"admonition"},"This is undesirable for the CCC, as most problems expect floating point values to be outputted using fixed point notation.\nThat is, the above value should be outputted as ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000000"),".\nThus, your otherwise correct solution might receive a WA!"),(0,o.kt)("p",{parentName:"admonition"},"To force I/O streams to use fixed point notation, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"fixed")," I/O manipulator:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"double d = 1'000'000'000;\ncout << fixed << d << '\\n'; // 1000000000\n"))))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Can you spot the difference between these two texts?"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"1 2 3 \n")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"1 2 3\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to reveal"),(0,o.kt)("p",null,(0,o.kt)("p",{parentName:"admonition"},"The first text has a trailing space after the ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),"."))),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Unless otherwise specified, output must be exact!")),(0,o.kt)("p",{parentName:"admonition"},"That is, outputting the first text instead of the second in the example given above would be marked incorrect.\nNo matter how miniscule, unless otherwise noted, any difference between your output and the expected output results in a WA.\nThus, make sure your output matches the requirements exactly. Some things to check for:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Are you outputting periods where you're not supposed to (or vice versa)?"),(0,o.kt)("li",{parentName:"ul"},"Are you outputting strings in the wrong case (",(0,o.kt)("inlineCode",{parentName:"li"},"Yes")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"yes"),")?"),(0,o.kt)("li",{parentName:"ul"},"Are you outputting an extra newline somewhere?"))),(0,o.kt)("h1",{id:"implementation-problems"},"Implementation Problems"),(0,o.kt)("p",null,"If you know how to take input and write output, you're well on your way to solving ",(0,o.kt)("strong",{parentName:"p"},"implementation problems"),", which are typically the easiest type of question on the CCC.\nGenerally speaking, J1-J4 and S1-S2 are implementation problems. That's 60/75 points for Junior and 30/75 for Senior!\nDue to this, though they might appear easy, it's important to still spend some time preparing for time."),(0,o.kt)("h2",{id:"what-are-implementation-problems"},"What are implementation problems?"),(0,o.kt)("p",null,"Implementation problems are problems where there are two main challenges:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Understanding the problem"),(0,o.kt)("li",{parentName:"ul"},"Converting your ideas into a working program")),(0,o.kt)("p",null,"Perhaps that sounds like programming in general, but note that what is ",(0,o.kt)("em",{parentName:"p"},"not")," mentioned is actually thinking of an idea as to how to solve the problem.\nIn other words, once you understand the problem, you should have an idea as to how to solve it. This is not always the case for, e.g., J5s, where it can take considerable time\nto think of an approach."),(0,o.kt)("h2",{id:"understanding-the-problem"},"Understanding the problem"),(0,o.kt)("p",null,"Understanding the problem can seem to be the easy part, but in reality it's harder than you might think.\nFor example, though the problems presented last week were fairly easy code-wise, comprehending the problem was a road-block for many members."),(0,o.kt)("h3",{id:"finding-key-phrases"},"Finding key phrases"),(0,o.kt)("p",null,"An important technique for understanding problem statements is ",(0,o.kt)("strong",{parentName:"p"},"finding key phrases"),". Often, problems have a bit of backstory, as was the case in our question.\nAs interesting as the backstory is, most of it is rarely useful to solving the problem itself. As such, instead of reading the whole problem, what you should be doing\nis skimming and looking for key phrases."),(0,o.kt)("h4",{id:"example-joes-doubling-points"},"Example: Joe's Doubling Points"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../archive/weekly-questions/joes-doubling-points"},"Link to problem"),"."),(0,o.kt)("p",null,"There were two key phrases in this problem:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Each member of the Cooldog Programming Group starts out in the year with $K$ points.")),(0,o.kt)("p",null,"This phrase tells us that each member starts out with $K$ points. As Joe is one of the members, he must start with $K$ points as well."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"More specifically, in a competition, the member(s) that receive the highest score have their points doubled and everyone else gets $3$ participation points.")),(0,o.kt)("p",null,"This phrase tells us how many points members get in a competition."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Based on these two phrases alone, we almost have enough information to solve the problem. There's one more thing we need to do, though."),(0,o.kt)("h3",{id:"understand-the-inputoutput"},"Understand the input/output"),(0,o.kt)("p",null,"Understanding the input/output is another extremely important thing to do. Read through the input/output section of the problem statement carefully, as it is unlikely\nthat there will be any filler content in this section."),(0,o.kt)("p",null,"After that, look at the sample test cases and their explanations and ensure that your understanding of the problem matches the test cases.\nConsider going through some test cases on paper to make sure that this is the case."),(0,o.kt)("h2",{id:"converting-your-idea-into-a-working-program"},"Converting your idea into a working program"),(0,o.kt)("p",null,"Generally speaking after understanding the problem statement of an implementation problem you should have an idea in your head as to how to solve it.\nTo convert your idea into code, you ",(0,o.kt)("strong",{parentName:"p"},"absolutely need a good grasp on the programming language you are using.")),(0,o.kt)("p",null,"For example, to solve Joe's Doubling Points, you needed to know how to use lists and the ",(0,o.kt)("inlineCode",{parentName:"p"},"max")," function."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This requires self-study and practice. There is nothing more to it.")),(0,o.kt)("h2",{id:"sample-implementation-questions"},"Sample Implementation Questions"),(0,o.kt)("p",null,"Below are some sample implementation questions for you to go through. It is recommended that you follow the technique outlined above when trying to solve them."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../archive/weekly-questions/joes-water-corporation"},"Joe's Water Corporation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc21j1"},"CCC '21 J1 - Boiling Water")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc21j2"},"CCC '21 J2 - Silent Auction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc19j1"},"CCC '19 J1 - Winning Score")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc19j3"},"CCC '19 J3 - Cold Compress"))),(0,o.kt)("p",null,"For more advanced members, we have also selected some harder implementation questions to go through."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc00j1"},"CCC '00 J1 - Calendar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc00s1"},"CCC '00 S1 - Slot Machines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dmoj.ca/problem/ccc01s1"},"CCC '01 S1 - Keeping Score"))))}c.isMDXComponent=!0}}]);