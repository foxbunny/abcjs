(self.webpackChunkabcjs=self.webpackChunkabcjs||[]).push([[831],{8986:(e,n,t)=>{"use strict";t.r(n),t.d(n,{data:()=>s});const s={key:"v-1ffa2e1a",path:"/developers/basic-architecture.html",title:"Basic Architecture",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Docker",slug:"docker",children:[]},{level:2,title:"Building locally",slug:"building-locally",children:[]},{level:2,title:"Greasemonkey",slug:"greasemonkey",children:[]},{level:2,title:"Testing",slug:"testing",children:[]},{level:2,title:"Font Info",slug:"font-info",children:[]}],filePathRelative:"developers/basic-architecture.md",git:{updatedTime:1609691602e3,contributors:[{name:"Paul Rosen",email:"paul@paulrosen.net",commits:4}]}}},6329:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var s=t(6252);const a=(0,s.uE)('<h1 id="basic-architecture"><a class="header-anchor" href="#basic-architecture">#</a> Basic Architecture</h1><p>There are two forms of this library: the npm form and a minimized form for non-npm users.</p><p>When testing abcjs changes locally, there is no build step required. A handy way to test is to run:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm link\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>On this folder, and</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm link abcjs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>In a test application. Then any changes made to the abcjs code will automatically be picked up by that test application&#39;s webpack.</p><h2 id="docker"><a class="header-anchor" href="#docker">#</a> Docker</h2><p>There are docker files included so that npm can be run without installing it. This only applies to someone who wants to keep all their development tools separate on their computer. If you have nodejs installed then you can ignore this.</p><p>If you do want to build without development tools installed, but you do have Docker installed, put this in your profile:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function-name function">npm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token assign-left variable">CMD</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">${1<span class="token operator">:</span> }</span> <span class="token variable">${2<span class="token operator">:</span> }</span> <span class="token variable">${3<span class="token operator">:</span> }</span>&quot;</span> docker-compose up\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Then from the root folder you can use <code>npm</code> like normal. Note that this won&#39;t work if you are from any other folder.</p><h2 id="building-locally"><a class="header-anchor" href="#building-locally">#</a> Building locally</h2><p>To build the library so that it can be included with a <code>&lt;script&gt;</code> tag, there are some options:</p><p>To build everything:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This takes a little while and is probably building more things than you want.</p><p>If you want to build a version that is convenient to debug:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build:basic\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Then include the file <code>dist/abcjs-basic.js</code>.</p><p>To build the same code as minimized for distribution:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build:basic-min\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>And include the file <code>disst/abcjs-basic-min.js</code>.</p><p>If you want to keep the version numbering on the files (so that different versions are easy to keep straight), after building either <code>build:basic</code> or <code>build:basic-min</code> run the script:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build:copy-output\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="greasemonkey"><a class="header-anchor" href="#greasemonkey">#</a> Greasemonkey</h2><p>There used to be a version of the library for Greasemonkey but that has been discontinued. If you want a Greasemonkey version, do this:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> src/plugin/greasemonkey.js bin/abcjs_plugin_5.12.0-min.js <span class="token operator">&gt;</span> bin/abcjs_plugin_5.12.0.user.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="testing"><a class="header-anchor" href="#testing">#</a> Testing</h2>',29),o=(0,s.Uk)("There are hundreds of test files that are stored outside of this repository. If you wish to run the unit tests, please contact "),i={href:"https://paulrosen.net/contact-me/",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Uk)("Paul Rosen"),r=(0,s.Uk)(" for more information."),c=(0,s.uE)('<p>The files in the folder <code>test</code> contain a number of functions that receive an ABC formatted string and output an easy to read dump of the resulting objects.</p><p>These objects are at various stages though the process of handling the ABC. The stages are:</p><ol><li>After parsing the ABC string into an internal object.</li><li>After laying out the placement of all elements.</li><li>After putting all elements in the time that they should sound.</li><li>After creating a set of MIDI instructions.</li></ol><p>The method of unit testing is to run all of the test files through the various linters and save the output. Then, after making changes to the code, run the test files through again and compare the output to the original output to understand the effect of the changes.</p><p>Here&#39;s an example of how to call the linting functions:</p><pre><code>import abcjs from &#39;abcjs/test&#39;;\ndoTest(abcString) {\n\tconst tuneBook = new abcjs.TuneBook(abcString);\n\tconst abcParser = new abcjs.parse.Parse();\n\tconst parserLint = new abcjs.test.ParserLint();\n\tconst div = document.getElementById(&quot;comparison-engraving&quot;);\n\tconst engraverController = new abcjs.write.EngraverController(div,\n\t     {add_classes: true, staffwidth: 800, staffheight: 400});\n\n\ttuneBook.tunes.forEach((item) =&gt; {\n\t\tabcParser.parse(item.abc);\n\t\tconst tune = abcParser.getTune();\n\t\tconst warnings = abcParser.getWarnings();\n\t\tconst lint1 = parserLint.lint(tune, warnings);\n\n\t\tengraverController.engraveABC(tune);\n\t\tconst output = abcjs.test.verticalLint([tune]);\n\t\tconst lint2 = output.join(&quot;\\n&quot;);\n\n\t\tconst sequence = abcjs.midi.sequence(tune);\n\t\tconst lint3 = abcjs.test.midiSequencerLint(sequence);\n\n\t\tconst midi = abcjs.midi.flatten(sequence);\n\t\tconst lint4 = abcjs.test.midiLint(midi);\n\n\t\tconsole.log(&quot;PARSER OUTPUT&quot;);\n\t\tconsole.log(lint1);\n\t\tconsole.log(&quot;ENGRAVER OUTPUT&quot;);\n\t\tconsole.log(lint2);\n\t\tconsole.log(&quot;MIDI SEQUENCE OUTPUT&quot;);\n\t\tconsole.log(lint3);\n\t\tconsole.log(&quot;MIDI OUTPUT&quot;);\n\t\tconsole.log(lint4);\n\t});\n}\n</code></pre><h2 id="font-info"><a class="header-anchor" href="#font-info">#</a> Font Info</h2><p>The glyphs in <code>src/write/abc_glyphs.js</code> are generated using the files in the <code>font_generator</code> folder.</p><p>You can see all the glyphs by loading this file in the browser: <code>abcjs/font_generator/font_gen.html</code>.</p><p>You can play with the glyphs to help you modify them in this file: <code>abcjs/font_generator/font_editor.html</code></p>',10),u={render:function(e,n){const t=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[a,(0,s.Wm)("p",null,[o,(0,s.Wm)("a",i,[l,(0,s.Wm)(t)]),r]),c],64)}}}}]);