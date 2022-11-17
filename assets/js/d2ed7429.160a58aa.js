"use strict";(self.webpackChunkbulldog_computer_club_website=self.webpackChunkbulldog_computer_club_website||[]).push([[798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Algorithmic Analysis",sidebar_position:5},o=void 0,l={unversionedId:"ccc/algorithmic-analysis",id:"ccc/algorithmic-analysis",title:"Algorithmic Analysis",description:"If you already feel familiar with algorithmic analysis, skip to the exercises.",source:"@site/docs/ccc/algorithmic-analysis.md",sourceDirName:"ccc",slug:"/ccc/algorithmic-analysis",permalink:"/docs/ccc/algorithmic-analysis",draft:!1,editUrl:"https://github.com/bulldog-computer-club/bulldog-computer-club.github.io/edit/main/docs/ccc/algorithmic-analysis.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Algorithmic Analysis",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Fast I/O",permalink:"/docs/ccc/fast-io"},next:{title:"Lists, Stacks, and Queues",permalink:"/docs/ccc/lists-stacks-queues"}},s={},p=[{value:"Big O notation",id:"big-o-notation",level:2},{value:"Finding the Big O of a program",id:"finding-the-big-o-of-a-program",level:2},{value:"Combining Big-Os",id:"combining-big-os",level:3},{value:"Discarding constants",id:"discarding-constants",level:3},{value:"List of common Big Os",id:"list-of-common-big-os",level:2},{value:"What time complexities will pass for certain inputs",id:"what-time-complexities-will-pass-for-certain-inputs",level:2},{value:"Exercises",id:"exercises",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you already feel familiar with algorithmic analysis, skip to ",(0,i.kt)("a",{parentName:"p",href:"#exercises"},"the exercises"),".")),(0,i.kt)("p",null,"Rather than diving into algorithmic analysis immediately, let's instead start with why it's useful for competitive programming.\nAfter all, it's rather easy to get into the mindset of considering algorithmic analysis as an obscure technique only useful for\nCS classes."),(0,i.kt)("p",null,"Let's start with a simple example. You wrote a program for a CCC question, say J5. It runs nicely on the sample input, but when you\nsubmit it you notice that it TLEs; that is, it is too slow. What do you do? (In other words, how do you optimize your code in this scenario?)"),(0,i.kt)("p",null,"The answer lies in algorithmic analysis. Though it is not perfect, it gives you a good idea of which operations are relatively computationally\nexpensive in addition to an idea of how many operations your program will take in the worst case. This can help you pinpoint the issue - is\nsome part of your algorithm too slow, or is your general approach flawed?"),(0,i.kt)("p",null,"Now, you hopefully have an idea as to why algorithmic analysis is a useful tool. Let's actually get to what it is."),(0,i.kt)("h1",{id:"what-is-algorithmic-analysis"},"What is algorithmic analysis?"),(0,i.kt)("p",null,"Algorithmic analysis provides an estimate as to ",(0,i.kt)("strong",{parentName:"p"},"how many resources a program will use to solve a problem as the input size scales"),".\nThe primary resources that we are concerned about are ",(0,i.kt)("strong",{parentName:"p"},"time")," and ",(0,i.kt)("strong",{parentName:"p"},"space"),"."),(0,i.kt)("p",null,"As, generally, space will not be a concern on the CCC, unless you are doing something crazy, we will focus on ",(0,i.kt)("strong",{parentName:"p"},"time complexity")," for this article."),(0,i.kt)("h2",{id:"big-o-notation"},"Big O notation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Big O notation")," is a notation used to describe how an algorithm scales with the input size.\nAn informal definition of Big O notation is that it correlates the input size with the number of operations the program will take."),(0,i.kt)("p",null,"It's written as $O(f(n))$ where $f$ is a function that describes the number of operations that the program would take for an input of size $n$."),(0,i.kt)("p",null,"For example, $O(n^2)$ means that the program has quadratic time complexity. In other words, if the input size is $n$, the\nnumber of operations will be approximately $n^2$. For example, if the input size was $10$, then we would expect approximately $10^2 = 100$ operations."),(0,i.kt)("h2",{id:"finding-the-big-o-of-a-program"},"Finding the Big O of a program"),(0,i.kt)("p",null,"A way of finding the Big O of a program is to go through all the smaller parts of the program, find their Big O, and then add them up."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Most mathematical operations on numbers are $O(1)$ time (addition, subtraction, multiplication, etc.) For example, all of the following operations:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"1 + 1\n2 * 7\nn / 4\n")),(0,i.kt)("p",{parentName:"li"},"...are $O(1)$.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Built-in syntax and functions - you have to remember the big O of these.\nFor example, indexing into an array is $O(1)$, finding an element in a linked list is $O(n)$, and looking up a key in a hash table is expected $O(1)$.\nReading input is considered $O(1)$ as well.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Loops have a big O of ",(0,i.kt)("inlineCode",{parentName:"p"},"number of iterations * big O of each iteration"),". For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"for i in range(n):\n   1 + 1\n")),(0,i.kt)("p",{parentName:"li"},"...is $O(n)$, as there are $n$ iterations where $O(1)$ work is done each iteration yielding a total time complexity of $O(n * 1) = O(n)$."),(0,i.kt)("p",{parentName:"li"},"You can apply this rule multiple times in the case of nested loops. For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"for i in range(n):\n  for j in range(n):\n      1 + 1\n")),(0,i.kt)("p",{parentName:"li"},"The outer loop runs $n$ times. In each iteration, the inner loop runs $n$ times. In each iteration of the inner loop, $O(1)$ work is being done.\nThus the big O of the inner loop is $O(n)$. The big O of the whole program is then $O(n * n) = O(n^2)$ as there are $n$ iterations where $O(n)$ work is being\ndone each iteration."))),(0,i.kt)("p",null,"These three rules, when put together, cover a wide range of programs.\nThe primary exception is recursive functions -- none of the rules can be applied to calls of recursive functions (indirect or otherwise)."),(0,i.kt)("h3",{id:"combining-big-os"},"Combining Big-Os"),(0,i.kt)("p",null,"Originally, we stated that to obtain the big O of a program, you combine the big Os of its constituent parts.\nUnfortunately that is a bit of a simplification:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question:")," What is the Big-O of the following program?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"for i in range(n):\n    1 + 1\nfor i in range(n):\n    1 + 1\n1 + 1\nfor i in range(n * 2):\n    for j in range(n):\n        1 + 1\n")),(0,i.kt)("p",null,"Let's start with analyzing the time complexity of individual parts of this program. We will label it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# 1)\nfor i in range(n):\n    1 + 1\n# 2)\nfor i in range(n):\n    1 + 1\n# 3)\n1 + 1\n# 4)\nfor i in range(n * 2):\n    # 4a)\n    for j in range(n):\n        1 + 1\n")),(0,i.kt)("p",null,"1",")"," is clearly $O(n)$, as is 2). Similarly, 3) is $O(1)$."),(0,i.kt)("p",null,"As for 4), the outer loop runs $2n$ times. The inner loop, 4a), runs $n$ times and does $O(n)$ work.\nThus we have that 4) is $O(2n * n) = O(2n^2)$."),(0,i.kt)("p",null,"Summarizing, we have:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"$O(n)$"),(0,i.kt)("li",{parentName:"ol"},"$O(n)$"),(0,i.kt)("li",{parentName:"ol"},"$O(1)$"),(0,i.kt)("li",{parentName:"ol"},"$O(2n^2)$")),(0,i.kt)("p",null,"If we add that up, we get $O(n + n + 1 + 2n^2) = O(2n^2 + 2n + 1)$."),(0,i.kt)("p",null,"So is that the Big O of the program?\nThe answer is... technically yes, $O(2n^2 + 2n + 1)$ is accurate, but in practice generally it is considered just $O(n^2)$."),(0,i.kt)("p",null,"Why? The reason is that ",(0,i.kt)("strong",{parentName:"p"},"constants are discarded in Big-O notation.")),(0,i.kt)("h3",{id:"discarding-constants"},"Discarding constants"),(0,i.kt)("p",null,'Generally speaking, constants and lower factors are omitted in Big-O notation. In $O(2n^2 + 2n + 1)$, $2n^2$ is the "biggest" term\nand thus is the only one that is shown. Moreover, the constant factor $2$ is removed, leaving $n^2$.'),(0,i.kt)("p",null,"The primary reasons for this are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It simplifies the notation. $O(n^2)$ is much simpler to look at compared to $O(2n + 2n^2 + 1)$."),(0,i.kt)("li",{parentName:"ol"},"It still gets the main idea across -- e.g. the algorithm is linear / quadratic / so on."),(0,i.kt)("li",{parentName:"ol"},"As the input size grows, constants and lower factors become more and more irrelevant.\nFor example, in $n + 1$, if $n$ is very large (i.e. $10^6$), the difference between $10^6$ and $10^6 + 1$ is irrelevant.")),(0,i.kt)("h2",{id:"list-of-common-big-os"},"List of common Big Os"),(0,i.kt)("p",null,"Listed from fastest to slowest."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Constant time $O(1)$:")," Most mathematical operations are considered $O(1)$ (addition, subtraction, multiplication, etc.), in addition to a handful of common operations such as\nappending to lists, popping from the end of a list and indexing into a list.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Logarithmic time $O(\\log n)$:")," Among other operations, programs that halve the input size each iteration are logarithmic time, such as binary search."),(0,i.kt)("p",{parentName:"li"},"Logarithms grow fairly slowly: assuming that the base of the logarithm is $2$, here are some examples with various input sizes:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"$n = 10$ => $log_2 10 \\approx 3$ operations"),(0,i.kt)("li",{parentName:"ul"},"$n = 1000$ => $log_2 1000 \\approx 10$ operations"),(0,i.kt)("li",{parentName:"ul"},"$n = 1,000,000$ => $log_2 1,000,000 \\approx 20$ operations"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Linear time $O(n)$:")," Arguably the most common time complexity, showing up basically everywhere: for example, a loop over a list is $O(n)$.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Linearithmic time $O(n \\log n)$")," Primarily shows up when sorting is involved, as most efficient sorting algorithms are $O(n \\log n)$ (e.g. quicksort, mergesort, timsort).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Quadratic time $O(n^2)$:")," Two nested loops (e.g. looping over all pairs in an array).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Exponential time $O(2^n)$:")," Occurs when ealing with subsets -- the number of subsets of a set with cardinality $n$ is $2^n$.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Factorial time $O(n!)$:")," Occurs when dealing with permutations -- the number of permutations of a list of size $n$ is $n!$."))),(0,i.kt)("h2",{id:"what-time-complexities-will-pass-for-certain-inputs"},"What time complexities will pass for certain inputs"),(0,i.kt)("p",null,"While reading a problem, you can often predict what time complexity your program should have based off the problem constraints.\nFor example, if you needed to do some operations on a list of size $n$ where $n$ could be up to a million, you can rule out anything above quadratic time.\nSimilarly, if the input size is small (e.g. $n <= 10$), brute force (all subsets / permutations) should be the first thing that comes to mind."),(0,i.kt)("p",null,"Below is a short table with different input sizes and possible time complexities. Note that this is not extremely exact -- treat it as a heuristic."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"$n$"),(0,i.kt)("th",{parentName:"tr",align:null},"Upper bound on time complexities"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"$n <= 10$"),(0,i.kt)("td",{parentName:"tr",align:null},"$O(n!)$")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"$n <= 20$"),(0,i.kt)("td",{parentName:"tr",align:null},"$O(2^n)$")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"$n <= 400$"),(0,i.kt)("td",{parentName:"tr",align:null},"$O(n^3)$")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"$n <= 5000$"),(0,i.kt)("td",{parentName:"tr",align:null},"$O(n^2)$")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"$n <= 5 * 10^5$"),(0,i.kt)("td",{parentName:"tr",align:null},"$O(n \\log n)$")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"$n <= 5 * 10^6$"),(0,i.kt)("td",{parentName:"tr",align:null},"$O(n)$")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Other"),(0,i.kt)("td",{parentName:"tr",align:null},"$O(\\log n)$, $O(1)$")))),(0,i.kt)("h2",{id:"exercises"},"Exercises"),(0,i.kt)("p",null,'For each program, work out its time complexity.\nFeel free to look up time complexities of syntax/functions if needed (e.g. "what is the time complexity of taking a substring of a string?")'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Input: one integer N.\nn = int(input())\nprint(n + n)\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Solution"),(0,i.kt)("p",null,(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Answer:")," $O(1)$."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation:"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"input")," is constant time, so the first line is $O(1)$.\nAdding two integers is also constant time, so the second line is also $O(1)$.\n$O(1 + 1) = O(2) = O(1)$ -- remember to discard constant factors."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Input: two integers N and M.\nn = int(input())\nm = int(input())\ncounter = 0\nfor i in range(n):\n  for j in range(m):\n    counter += 1\nprint(counter)\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Solution"),(0,i.kt)("p",null,(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Answer:")," $O(nm)$."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation:"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"input")," is constant time, so the two lines are $O(1)$."),(0,i.kt)("p",null,"We now have a nested loop, where the outer loop goes from $0..n$ (which is $n$ iterations):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"for i in range(n):\n  for j in range(m):\n    counter += 1\n")),(0,i.kt)("p",null,"If we examine the inner loop, we see that it goes from $0..m$ (which is $m$ iterations):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"for j in range(m):\n  counter += 1\n")),(0,i.kt)("p",null,"Thus the overall time complexity of the loop is $O(n * m) = O(nm)$.\nAs lower factors are discarded, $O(nm)$ is also the time complexity of the program."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 3")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Input: an integer N.\nn = int(input())\nwhile n > 0:\n  for j in range(1000):\n    print(j)\n  n //= 2\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Solution"),(0,i.kt)("p",null,(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Answer:")," $O(\\log n)$."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation:"),"\nObserve that the loop halves $n$ every iteration until it reaches $0$, which means that the number of iterations is $\\approx \\log_2 n$."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"while n > 0:\n  for j in range(1000):\n    print(j)\n  n //= 2\n")),(0,i.kt)("p",null,"The inner loop over ",(0,i.kt)("inlineCode",{parentName:"p"},"j")," may look like it contributes to the time complexity, but since the number of iterations is constant (1000) it does not\nactually contribute to the time complexity."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 4")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Input: a string of length N.\ns = input()\nfor i in range(1, len(s) + 1):\n  print(s[:i]) # Note: s[:i] creates a new string from the first i characters of s\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Solution"),(0,i.kt)("p",null,(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Answer:")," $O(n^2)$."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation:"),"\nTaking a substring of a larger string ",(0,i.kt)("inlineCode",{parentName:"p"},"s[:i]")," takes $O(i)$ time. As ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," changes each iteration though, the time complexity of each iteration is not the same.\nHowever, if we consider the loop as a whole, we see that the time complexity of the first iteration is $O(1)$, the second iteration $O(2)$, the third $O(3)$ and the $n^{th}$ $O(n)$."),(0,i.kt)("p",null,"Then, the total time complexity across all iteration is:"),(0,i.kt)("p",null,"$$\nO(1 + 2 + 3 + ... + n)\n$$"),(0,i.kt)("p",null,"and by the formula for the sum of an arithmetic progression"),(0,i.kt)("p",null,"$$\na_1 + a_2 + a_3 + a_4 + a_n = \\frac{n(a_1 + a_n)}{2}\n$$"),(0,i.kt)("p",null,"we have that"),(0,i.kt)("p",null,"$$\nO(1 + 2 + 3 + ... + n) ","\\","\n= O(\\frac{n(n + 1)}{2}) ","\\","\n= O(\\frac{n^2 + n}{2}) ","\\","\n= O(\\frac{n^2}{2} + \\frac{n}{2}) ","\\","\n= O(\\frac{n^2}{2}) ","\\","\n= O(n^2)\n$$"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Input: a list of numbers of length N and a target number T.\nnums = []\nn = int(input())\nfor i in range(n):\n  num = int(input())\n  nums.append(num)\nt = int(input())\ncounter = 0\nfor i in range(n):\n  for j in range(0, i):\n    if nums[i] + nums[j] == t:\n      counter += 1\nprint(counter)\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Solution"),(0,i.kt)("p",null,(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Answer:")," $O(n^2)$."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation:"),"\nThe loop to read in ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," requires $n$ iterations and is thus $O(n)$."),(0,i.kt)("p",null,"The main loop is very similar to the previous problem, and can be analyzed in the exact same way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"for i in range(n):\n  for j in range(0, i):\n    # ...\n")),(0,i.kt)("p",null,"The outer loop features $n$ iterations.\nIn the first iteration, we see that the inner loop loops $0$ times; in the second, it loops $1$ time; in the third, $2$ times, and so on."),(0,i.kt)("p",null,"By the exact same method presented for Question 4, we obtain that the loop is $O(n^2)$ overall."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unrelated note:")," This is the brute-force solution for the famous Two-Sum problem."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 6")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Input: a list of numbers of length N.\nnums = []\nn = int(input())\nfor i in range(n):\n  num = int(input())\n  nums.append(num)\n\ni = 0\nwhile i < len(nums):\n  run_len = 1\n  cur = nums[i]\n  i += 1\n  while i < len(nums) and nums[i] == cur:\n    i += 1\n    run_len += 1\n  print(run_len)\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Solution"),(0,i.kt)("p",null,(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Answer:")," $O(n)$."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation:"),"\nThe loop to read in ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," requires $n$ iterations and is thus $O(n)$."),(0,i.kt)("p",null,"Though there are two nested loops, we observe that they share the same condition ",(0,i.kt)("inlineCode",{parentName:"p"},"i < len(nums) => i < n"),". This means that ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," can only be incremented ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," times before the loops break.\nMoreover, observe that in each iteration of the inner loop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"while ...:\n  i += 1\n  run_len += 1\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"i")," is incremented by ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". As noted previously, only ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," increments can occur before the loops break; thus, the overall time complexity is $O(n)$."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 7 (Bonus)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Input: an integer N.\ndef fac(n):\n  if n <= 1:\n    return n\n  return n * fac(n - 1)\nn = int(input())\nprint(fac(n))\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Solution"),(0,i.kt)("p",null,(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Answer:")," $O(n)$."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation:"),"\nEvery time the recursive procedure ",(0,i.kt)("inlineCode",{parentName:"p"},"fac")," executes, it calls itself with a decremented value of $n$. When $n$ reaches $1$ or less, the recursion stops.\nThus ",(0,i.kt)("inlineCode",{parentName:"p"},"fac(n)")," will result in $n$ recursive calls of itself, and as multiplication is constant time we obtain an overall time complexity of $O(n)$."))))}u.isMDXComponent=!0}}]);