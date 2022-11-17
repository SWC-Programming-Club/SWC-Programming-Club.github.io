"use strict";(self.webpackChunkbulldog_computer_club_website=self.webpackChunkbulldog_computer_club_website||[]).push([[945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Repeated String Transformation",sidebar_position:4},i="Repeated String Transformation",l={unversionedId:"archive/weekly-questions/repeated-string-transformation",id:"archive/weekly-questions/repeated-string-transformation",title:"Repeated String Transformation",description:"A character-to-character mapping defines a transformation from a character $c1$ to a character $c2$.",source:"@site/docs/archive/weekly-questions/repeated-string-transformation.md",sourceDirName:"archive/weekly-questions",slug:"/archive/weekly-questions/repeated-string-transformation",permalink:"/docs/archive/weekly-questions/repeated-string-transformation",draft:!1,editUrl:"https://github.com/bulldog-computer-club/bulldog-computer-club.github.io/edit/main/docs/archive/weekly-questions/repeated-string-transformation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Repeated String Transformation",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Andrei's Excessive Distrohopping",permalink:"/docs/archive/weekly-questions/andreis-excessive-distrohopping"},next:{title:"Parent-Teacher Conference Scheduling",permalink:"/docs/archive/weekly-questions/parent-teacher-conference-scheduling"}},p={},s=[{value:"Input Specification",id:"input-specification",level:2},{value:"Output Specification",id:"output-specification",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3},{value:"Explanation",id:"explanation",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Input",id:"input-1",level:3},{value:"Output",id:"output-1",level:3},{value:"Explanation",id:"explanation-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Input",id:"input-2",level:3},{value:"Output",id:"output-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Input",id:"input-3",level:3},{value:"Output",id:"output-3",level:3},{value:"Intuition",id:"intuition",level:2},{value:"Code",id:"code",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Example",id:"example",level:2},{value:"Time Complexity",id:"time-complexity",level:2},{value:"Intuition",id:"intuition-1",level:2},{value:"Code",id:"code-1",level:2},{value:"Time Complexity",id:"time-complexity-1",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"repeated-string-transformation"},"Repeated String Transformation"),(0,r.kt)("p",null,"A character-to-character mapping defines a transformation from a character $c_1$ to a character $c_2$.\nFor example, $a \\to b$ denotes that the character $a$ should be transformed to the character $b$.\nNote that transformations are directed: $a \\to b$ is different from $b \\to a$."),(0,r.kt)("p",null,"A transformation $c_1 \\to c_2$ can be applied to a string, which results in a new string where all $c_1$s are replaced\nwith $c_2$s. For example, applying the transformation $h \\to c$ to ",(0,r.kt)("inlineCode",{parentName:"p"},"hello world")," results in ",(0,r.kt)("inlineCode",{parentName:"p"},"cello world"),"."),(0,r.kt)("p",null,"Given a set of transformations, repeatedly apply them to a string $S$ until it is no longer possible to apply any more transformations."),(0,r.kt)("p",null,"For example, if we have two transformations $","{","h \\to c, c \\to b","}","$, the output for ",(0,r.kt)("inlineCode",{parentName:"p"},"hello world")," should be ",(0,r.kt)("inlineCode",{parentName:"p"},"bello world"),":\nthe first ",(0,r.kt)("inlineCode",{parentName:"p"},"h")," becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," which then turns into a ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,r.kt)("p",null,"It is guaranteed that the set of transformations will not contain a cycle, direct or indirect (i.e. $","{","a \\to b, b \\to a","}","$)."),(0,r.kt)("h2",{id:"input-specification"},"Input Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first line will contain an integer $T$, denoting the number of transformations."),(0,r.kt)("li",{parentName:"ul"},"The next $T$ lines will each contain two lowercase characters $c_1$ and $c_2$, denoting a character-to-character mapping from $c_1$ to $c_2$."),(0,r.kt)("li",{parentName:"ul"},"The final line will contain a string $S$, which is guaranteed to only contain lowercase characters.")),(0,r.kt)("h2",{id:"output-specification"},"Output Specification"),(0,r.kt)("p",null,"Output the result of repeatedly applying the set of transformations to $S$."),(0,r.kt)("h1",{id:"examples"},"Examples"),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("h3",{id:"input"},"Input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"5\na b\nb c\nc d\nd e\ne f\nabcdefg\n")),(0,r.kt)("h3",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ffffffg\n")),(0,r.kt)("h3",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"The set of transformations looks like a chain, as follows:"),(0,r.kt)("p",null,"$$\na \\to b \\to c \\to d \\to e \\to f\n$$"),(0,r.kt)("p",null,"It is clear that all of the characters along the chain will be transformed to ",(0,r.kt)("inlineCode",{parentName:"p"},"f"),".\nThus, ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"d"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"e"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," all become ",(0,r.kt)("inlineCode",{parentName:"p"},"f"),". The final ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," is left as is."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("h3",{id:"input-1"},"Input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2\nh f\nf k\nhiss\n")),(0,r.kt)("h3",{id:"output-1"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kiss\n")),(0,r.kt)("h3",{id:"explanation-1"},"Explanation"),(0,r.kt)("p",null,"The $h$ turns into a $f$ which then turns into a $k$."),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("h3",{id:"input-2"},"Input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2\nc a\nb c\nb\n")),(0,r.kt)("h3",{id:"output-2"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a\n")),(0,r.kt)("h2",{id:"example-4"},"Example 4"),(0,r.kt)("h3",{id:"input-3"},"Input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2\na c\nb a\nbbbb\n")),(0,r.kt)("h3",{id:"output-3"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cccc\n")),(0,r.kt)("h1",{id:"model-solutions"},"Model Solutions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Weak test data caused several unintended solutions (which should not have passed) to get through. (Those who solved the problem at our meeting will get points regardless of the correctness of their solution this week.) We apologize for the confusion!"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution 1: Brute Force"),(0,r.kt)("p",null,(0,r.kt)("h2",{id:"intuition"},"Intuition"),(0,r.kt)("p",null,"Just do as the problem states: apply each transformation repeatedly in a loop, until none of the transformations have any effect."),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"t = int(input())\ntransformations = []\nfor _ in range(t):\n    a, b = input().split()\n    transformations.append((a, b))\n\ns = input()\nwhile True:\n    changed = False\n    for a, b in transformations:\n        replaced = s.replace(a, b)\n        if s != replaced:\n            changed = True\n        s = replaced\n    if not changed:\n        break\nprint(s)\n")),(0,r.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"changed")," keeps track of whether any transformation has resulted in the string changing in the current iteration. To replace the characters, we use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/stdtypes.html#str.replace"},(0,r.kt)("inlineCode",{parentName:"a"},"str.replace")),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2\nh f\nf k\nhiss\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First iteration.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Apply the first transformation, $h \\to f$, resulting in ",(0,r.kt)("inlineCode",{parentName:"li"},"fiss"),"."),(0,r.kt)("li",{parentName:"ol"},"Apply the second transformation, $f \\to k$, resulting in ",(0,r.kt)("inlineCode",{parentName:"li"},"kiss"),"."),(0,r.kt)("li",{parentName:"ol"},"As the string changed, the loop continues."))),(0,r.kt)("li",{parentName:"ol"},"Second iteration.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Apply the first transformation, $h \\to f$. No effect."),(0,r.kt)("li",{parentName:"ol"},"Apply the second transformation, $f \\to k$. No effect."),(0,r.kt)("li",{parentName:"ol"},"As the string did not change, break the loop."))),(0,r.kt)("li",{parentName:"ol"},"Output ",(0,r.kt)("inlineCode",{parentName:"li"},"kiss"),".")),(0,r.kt)("h2",{id:"time-complexity"},"Time Complexity"),(0,r.kt)("p",null,"About $O(|Z|tn)$ where $Z$ is the alphabet. Each iteration of the ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop attempts to apply all $t$ transformations on the string of length $n$. Thus the time complexity of each iteration is $O(tn)$."),(0,r.kt)("p",null,"Moreover, the number of iterations is bounded by the size of the alphabet $|Z|$, given that there are no cycles (indirect or direct) in the set of transformations."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution 2: Hash Tables"),(0,r.kt)("h2",{id:"intuition-1"},"Intuition"),(0,r.kt)("p",null,"The key insight here is to apply transformations character-by-character rather than on complete strings. That is, to obtain the transformed string for $S$, go through each character of $S$ and find the character that it resolves to rather than transforming all of $S$ at once."),(0,r.kt)("p",null,"We can do this with a dictionary that maps a character $c$ to what character it resolves to. For example, given the following input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"5\na b\nb c\nc d\nd e\ne f\nabcdefg\n")),(0,r.kt)("p",null,"We would have the following dictionary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'{\n    "a": "b",\n    "b": "c",\n    "c": "d",\n    "d": "e",\n    "e": "f",\n}\n')),(0,r.kt)("p",null,"To look up what a character resolves to, it suffices to look it up in the dictionary repeatedly as long as there is an entry for it. For example, to resolve the character $a$, we perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check if there is an entry for $a$.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Yes; so set the current character to $b$ and continue."))),(0,r.kt)("li",{parentName:"ol"},"Check if there is an entry for $b$.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Yes; so set the current character to $c$ and continue."))),(0,r.kt)("li",{parentName:"ol"},"Check if there is an entry for $c$.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Yes; so set the current character to $d$ and continue."))),(0,r.kt)("li",{parentName:"ol"},"Check if there is an entry for $d$.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Yes; so set the current character to $e$ and continue."))),(0,r.kt)("li",{parentName:"ol"},"Check if there is an entry for $e$.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Yes; so set the current character to $f$ and continue."))),(0,r.kt)("li",{parentName:"ol"},"Check if there is an entry for $f$.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"No; so stop here.")))),(0,r.kt)("p",null,"This eventually resolves to $f$, which indicates that $a$ should become $f$ which is correct."),(0,r.kt)("h2",{id:"code-1"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'resolves_to = {}\nt = int(input())\nfor _ in range(t):\n    a, b = input().split()\n    resolves_to[a] = b\n\ns = input()\noutput = []\nfor c in s:\n    while c in resolves_to:\n        c = resolves_to[c]\n    output.append(c)\nprint("".join(output))\n')),(0,r.kt)("h2",{id:"time-complexity-1"},"Time Complexity"),(0,r.kt)("p",null,"$O(|Z|n)$. Consider the following loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"while c in resolves_to:\n    c = resolves_to[c]\n")),(0,r.kt)("p",null,"First, observe that as there are no loops, $c$ changes each iteration.\n$Z$ is the alphabet, there are $|Z|$ possible characters, so ",(0,r.kt)("inlineCode",{parentName:"p"},"resolves_to")," can have at max $|Z|$ keys.\nIn other words, there are only $|Z|$ possible values for $c$, and as $c$'s value changes each iteration,\nthe number of iterations is bounded by $|Z|$."),(0,r.kt)("p",null,"As there are $n$ iterations where $O(|Z|)$ work is being done in each, the overall time complexity is $O(|Z|n)$.")))}u.isMDXComponent=!0}}]);