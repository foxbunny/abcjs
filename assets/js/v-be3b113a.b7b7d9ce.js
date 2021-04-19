(self.webpackChunkabcjs=self.webpackChunkabcjs||[]).push([[246],{5975:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>s});const s={key:"v-be3b113a",path:"/plugin/plugin.html",title:"Plugin",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"abcjs greasemonkey script",slug:"abcjs-greasemonkey-script",children:[]}],filePathRelative:"plugin/plugin.md",git:{updatedTime:1575169859e3,contributors:[{name:"Paul Rosen",email:"paul@paulrosen.net",commits:2}]}}},8199:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const s=(0,a(6252).uE)('<h1 id="plugin"><a class="header-anchor" href="#plugin">#</a> Plugin</h1><p>The abcjs plugin renders all the abc in a page (determined as a new line beginning with X:).</p><div class="custom-container tip"><p class="custom-container-title">TODO</p><p>This page is currently being enhanced. Check back soon!</p></div><p>To use, simply include the plugin version in the page:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;abcjs_plugin_5.10.3-min.js&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Certain options for the plugin can be changed like this, if executed on page load, just after including the plugin file:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token constant">ABCJS</span><span class="token punctuation">.</span>plugin<span class="token punctuation">.</span>hide_abc <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The options available in abc_plugin are:</p><table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><code>show_midi</code></td><td>NO LONGER SUPPORTED: This option has been removed.</td></tr><tr><td><code>hide_abc</code></td><td>Whether the abc text should be hidden or not. (false by default) since 1.0.2</td></tr><tr><td><code>render_before</code></td><td>Whether the rendered score should appear before the abc text. (false by default) since 1.0.2</td></tr><tr><td><code>midi_options</code></td><td>NO LONGER SUPPORTED: This option has been removed.</td></tr><tr><td><code>auto_render_threshold</code></td><td>Number of tunes beyond which auto rendering is disabled; instead, each tune is accompanied by a &quot;show&quot; button. (default value is 20) since 1.0.2</td></tr><tr><td><code>show_text</code></td><td>Text to be included on the &quot;show&quot; button before the tune title. (default value is &quot;show score for: &quot;) since 1.0.2</td></tr><tr><td><code>render_options</code></td><td>The options to be used for the <code>engraverParams</code></td></tr><tr><td><code>render_classname</code></td><td>The class name to use for the resulting SVG (default value is &quot;abcrendered&quot;)</td></tr><tr><td><code>text_classname</code></td><td>The class name to use for wrapping the found ABC text (default value is &quot;abctext&quot;)</td></tr></tbody></table><p>When abcjs plugin finds an abc tune, it wraps a <code>div.abctext</code> around it and renders it into a <code>div.abcrendered</code>. The show button is an <code>a.abcshow</code>. These hooks can be used for styling. since 1.0.2</p><h2 id="abcjs-greasemonkey-script"><a class="header-anchor" href="#abcjs-greasemonkey-script">#</a> abcjs greasemonkey script</h2><p>Just include the greasemonkey script in either FireFox or Chrome. You will then get a button that will begin the scan of the website.</p>',12),n={render:function(e,t){return s}}}}]);