# Function or Not a Function? — Clear Your Confusion

কোনো relation (সম্পর্ক) function কি না বুঝতে সবচেয়ে common confusion হলো—**পুরো Domain** এবং **Domain-এর একটি নির্দিষ্ট input**-কে একই মনে করা।

## Function হওয়ার মূল নিয়ম

একটি relation (f:A\rightarrow B) তখনই function হবে, যখন Domain (A)-এর:

1. প্রত্যেক input-এর একটি output থাকবে।
2. প্রত্যেক input-এর output হবে ঠিক একটি।

অর্থাৎ, পুরো Domain থেকে অনেকগুলো output পাওয়া যেতে পারে। কিন্তু একই input থেকে দুইটি বা তার বেশি different output পাওয়া যাবে না।

## Function-এর Valid Mapping

### অনেক Input থেকে অনেক Output

[
a\rightarrow x,\qquad b\rightarrow y,\qquad c\rightarrow z
]

এটি function, কারণ প্রত্যেক input-এর output ঠিক একটি।

### অনেক Input থেকে একই Output

[
a\rightarrow x,\qquad b\rightarrow x,\qquad c\rightarrow y
]

এটিও function। একটি output-এর সঙ্গে একাধিক input যুক্ত থাকতে পারে। Function-এর নিয়ম এতে ভাঙে না।

## Example: (f(x)=x^2)

ধরি,

[
f(x)=x^2
]

এবং Domain:

[
A={-2,-1,0,1,2}
]

তাহলে,

[
\begin{aligned}
f(-2)&=4\
f(-1)&=1\
f(0)&=0\
f(1)&=1\
f(2)&=4
\end{aligned}
]

এখানে পুরো Domain থেকে (0,1,4)—একাধিক output পাওয়া গেছে। তবুও এটি function, কারণ প্রত্যেক individual input-এর output ঠিক একটি।

আবার,

[
f(-2)=4,\qquad f(2)=4
]

অর্থাৎ দুইটি input একই output দিয়েছে। এতেও কোনো সমস্যা নেই।

## কখন Function হবে না?

### একই Input থেকে একাধিক Output

যদি এমন হয়:

[
c\rightarrow x
\qquad\text{এবং}\qquad
c\rightarrow z
]

তাহলে relation-টি function নয়। কারণ একই input (c)-এর দুইটি different output রয়েছে।

একইভাবে,

[
f(2)=4
\quad\text{এবং একই সঙ্গে}\quad
f(2)=5
]

হলে এটি function হবে না।

### কোনো Input-এর Output না থাকলে

ধরি, Domain:

[
A={a,b,c}
]

কিন্তু mapping দেওয়া হয়েছে শুধু:

[
a\rightarrow x,\qquad b\rightarrow y
]

এখানে (c)-এর কোনো output নেই। তাই এটিও function নয়। Function-এ Domain-এর কোনো element বাদ দেওয়া যাবে না।

## Function Check করার সহজ পদ্ধতি

Mapping diagram দেখলে Domain-এর প্রতিটি element আলাদাভাবে check করতে হবে:

* প্রত্যেক input থেকে একটি arrow বের হয়েছে কি?
* কোনো input থেকে একাধিক arrow বের হয়েছে কি?

যদি প্রত্যেক input থেকে ঠিক একটি arrow বের হয়, তাহলে এটি function।

## সংক্ষেপে

| Mapping Situation            |           Function? |
| ---------------------------- | ------------------: |
| একটি input → ঠিক একটি output |          ✅ Function |
| অনেক input → অনেক output     | ✅ Function হতে পারে |
| অনেক input → একই output      |          ✅ Function |
| একই input → একাধিক output    |    ❌ Not a function |
| কোনো input-এর output নেই     |    ❌ Not a function |

## মনে রাখার সহজ নিয়ম

> **পুরো Domain থেকে অনেক output পাওয়া যেতে পারে, কিন্তু Domain-এর একটি নির্দিষ্ট input থেকে অবশ্যই ঠিক একটি output পাওয়া যাবে।**

আরও সংক্ষেপে:

[
\boxed{\text{Every input must have exactly one output.}}
]
