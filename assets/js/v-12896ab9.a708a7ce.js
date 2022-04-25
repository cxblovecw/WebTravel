"use strict";(self.webpackChunkweb_travel=self.webpackChunkweb_travel||[]).push([[1085],{8338:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-12896ab9",path:"/typescript/type-assertion.html",title:"类型断言",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"<type>value",slug:"type-value",children:[]},{level:2,title:"value as type",slug:"value-as-type",children:[]},{level:2,title:"非空断言",slug:"非空断言",children:[]},{level:2,title:"断言限制",slug:"断言限制",children:[]},{level:2,title:"双重断言",slug:"双重断言",children:[]}],filePathRelative:"typescript/type-assertion.md",git:{updatedTime:1644906655e3,contributors:[{name:"cxb",email:"chenxiaobin_cxb@youzan.com",commits:3}]}}},8143:(n,s,a)=>{a.r(s),a.d(s,{default:()=>m});var p=a(6252);const t=(0,p.uE)('<h1 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h1><p>类型断言(Type Assertion): 指定某个变量的类型,使其能够通过类型检测,类型断言的作用范围是断言的表达式并且不会影响变量原本的类型。</p><h2 id="type-value" tabindex="-1"><a class="header-anchor" href="#type-value" aria-hidden="true">#</a> &lt;type&gt;value</h2><p>通过&lt;type&gt;value的形式(尖括号语法),将value断言成type类型,断言时可以访问type的属性和方法,但是在JSX语法中容易冲突和误解,因此更推荐as写法。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">// 默认情况下只能访问共有属性/方法</span>\n  value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 想要访问其中类型的特定方法,需要将其断言成该类型</span>\n  <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// OK</span>\n  <span class="token comment">// value.length; // 报错: 类型“string | number”上不存在属性“length”</span>\n\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',5),e={id:"value-as-type",tabindex:"-1"},l=(0,p._)("a",{class:"header-anchor",href:"#value-as-type","aria-hidden":"true"},"#",-1),o=(0,p.Uk)(" value as type "),c=(0,p.uE)('<p>通过value as type形式,将value断言成type类型,断言时可以访问type的属性和方法。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLen</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">// value的类型为string|number,正常只能访问共有属性/方法</span>\n  value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK, toString为共有方法</span>\n\n  <span class="token comment">// 通过类型断言,指定value为string类型,因此可以访问length属性,不过断言仅在当前表达式有效</span>\n  <span class="token punctuation">(</span>value <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// OK</span>\n  <span class="token comment">// value.length; // 报错, 之前的断言仅在该表达式有效,其他位置的value类型不受影响,还是string | number,因此不能访问length</span>\n\n  <span class="token keyword">const</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> value <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>  <span class="token comment">// 将value断言成string赋值给str, str就会被推论成string类型</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 没有length的话,只能是number类型了,转换成字符串返回length</span>\n  <span class="token keyword">return</span> <span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="非空断言" tabindex="-1"><a class="header-anchor" href="#非空断言" aria-hidden="true">#</a> 非空断言</h2><p>通过添加!后缀, 可以从变量的类型中去除null和undefined。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 需要设置package.json文件的compilerOptions的strictNullChecks:true,开启对null和undefined的严格检查</span>\n<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">// 原本name是无法赋值给alias, 因为string | null类型无法赋值给string类型</span>\n  <span class="token comment">// 通过添加!后缀,去除了null类型,因此可以赋值成功</span>\n  <span class="token keyword">let</span> alias<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> name<span class="token operator">!</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="断言限制" tabindex="-1"><a class="header-anchor" href="#断言限制" aria-hidden="true">#</a> 断言限制</h2>',6),u=(0,p.Uk)("并不是所有类型都能够直接断言成功的,断言需要满足"),r=(0,p.Uk)("兼容性原则"),i=(0,p.Uk)(",即类型A和类型B之间存在兼容关系,无论是A兼容B还是B兼容A,满足其一即可断言。"),k=(0,p.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// string和number是完全没有兼容性的,因此是不能直接断言成功的</span>\n<span class="token keyword">let</span> s1<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token number">1024</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 报错: 类型 &quot;number&quot; 到类型 &quot;string&quot; 的转换可能是错误的，因为两种类型不能充分重叠。如果这是有意的，请先将表达式转换为 &quot;unknown&quot;</span>\n\n<span class="token comment">// 而any和string是存在兼容性关系的,可以断言</span>\n<span class="token keyword">let</span> s2<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token number">1024</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="双重断言" tabindex="-1"><a class="header-anchor" href="#双重断言" aria-hidden="true">#</a> 双重断言</h2><p>主要利用的是any和unknown可以兼容任何类型的原理,既然它们可以兼容任何类型,那我们就可以将某个变量先断言成any或者unknown,然后再断言成我们需要的类型。</p><p>注意,双重断言无视了断言的兼容规则,除非迫不得已并且你能保证自己断言的类型是正确的,否则不要使用双重断言。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 双重断言无视规则,将number断言成了string</span>\n<span class="token keyword">let</span> s<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token number">1024</span> <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n\n<span class="token comment">// 学生信息接口以及打印信息的函数可以看成是某个三方库里面的接口和函数, 你无法进行修改</span>\n<span class="token comment">// 学生信息接口</span>\n<span class="token keyword">interface</span> <span class="token class-name">StudentInfo</span> <span class="token punctuation">{</span>\n  no<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>  <span class="token comment">// 学号</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 姓名</span>\n  gender<span class="token operator">:</span> <span class="token string">&#39;Man&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Women&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 性别</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 打印信息</span>\n<span class="token keyword">function</span> <span class="token function">logInfo</span><span class="token punctuation">(</span>student<span class="token operator">:</span> StudentInfo<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">NO</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>student<span class="token punctuation">.</span>no<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>student<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 某学生,可以看出,它的类型和StudentInfo是不兼容的</span>\n<span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token punctuation">{</span>\n  no<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span>\n  source<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 现在,你想打印stu的信息,如果直接断言,会因为stu的类型和StudentInfo的类型不兼容而失败</span>\n<span class="token comment">// 但是你能发现,logInfo中用到的属性,stu都有,此时可以使用双重断言</span>\n<span class="token function">logInfo</span><span class="token punctuation">(</span>stu <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> StudentInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>',5),b={},m=(0,a(3744).Z)(b,[["render",function(n,s){const a=(0,p.up)("Badge"),b=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("h2",e,[l,o,(0,p.Wm)(a,{text:"推荐"})]),c,(0,p._)("p",null,[u,(0,p.Wm)(b,{to:"/typescript/type-compatibility.html"},{default:(0,p.w5)((()=>[r])),_:1}),i]),k],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);