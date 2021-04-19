(self.webpackChunkabcjs=self.webpackChunkabcjs||[]).push([[864],{2368:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>s});const s={key:"v-34ad0f10",path:"/visual/render-abc-result.html",title:"return value of renderAbc",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"visualObjs",slug:"visualobjs",children:[]},{level:2,title:"Array of Tunes",slug:"array-of-tunes",children:[]},{level:2,title:"Data",slug:"data",children:[{level:3,title:"formatting",slug:"formatting",children:[]},{level:3,title:"lines",slug:"lines",children:[]},{level:3,title:"media",slug:"media",children:[]},{level:3,title:"metaText",slug:"metatext",children:[]},{level:3,title:"version",slug:"version",children:[]},{level:3,title:"visualTranspose",slug:"visualtranspose",children:[]}]},{level:2,title:"Methods",slug:"methods",children:[{level:3,title:"getBarLength()",slug:"getbarlength",children:[]},{level:3,title:"getBeatLength()",slug:"getbeatlength",children:[]},{level:3,title:"getBeatsPerMeasure()",slug:"getbeatspermeasure",children:[]},{level:3,title:"getBpm()",slug:"getbpm",children:[]},{level:3,title:"getMeter()",slug:"getmeter",children:[]},{level:3,title:"getMeterFraction()",slug:"getmeterfraction",children:[]},{level:3,title:"getPickupLength()",slug:"getpickuplength",children:[]},{level:3,title:"getKeySignature()",slug:"getkeysignature",children:[]},{level:3,title:"getElementFromChar(charIndex)",slug:"getelementfromchar-charindex",children:[]},{level:3,title:"getTotalBeats",slug:"gettotalbeats",children:[]},{level:3,title:"getTotalTime",slug:"gettotaltime",children:[]},{level:3,title:"millisecondsPerMeasure()",slug:"millisecondspermeasure",children:[]},{level:3,title:"setUpAudio()",slug:"setupaudio",children:[]}]}],filePathRelative:"visual/render-abc-result.md",git:{updatedTime:1618762657e3,contributors:[{name:"Paul Rosen",email:"paul@paulrosen.net",commits:4}]}}},4455:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const s=(0,a(6252).uE)('<h1 id="return-value-of-renderabc"><a class="header-anchor" href="#return-value-of-renderabc">#</a> return value of renderAbc</h1><h2 id="visualobjs"><a class="header-anchor" href="#visualobjs">#</a> visualObjs</h2><p>When you call <code>renderAbc</code> the return value is an array of objects. Those objects contain a lot of information about the tune that was rendered.</p><p>Each item in the array that was passed back is one tune. Even though it is not as common, you can render multiple tunes with one ABC string. For instance, the following ABC string will produce two tunes:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>X:1\nK:C\nCDEF|\n\nX:2\nK:G\nGABc|\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Here is an example of the <code>renderAbc</code> call:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> visualObjs <span class="token operator">=</span> abcjs<span class="token punctuation">.</span><span class="token function">renderAbc</span><span class="token punctuation">(</span>\n    <span class="token punctuation">[</span><span class="token string">&quot;id-for-tune-1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;id-for-tune-2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    abcString<span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> add_classes<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>This section will discuss the structure of <code>visualObjs</code>. You can, of course, name this anything you like, but this documentation will refer to it by this name.</p><h2 id="array-of-tunes"><a class="header-anchor" href="#array-of-tunes">#</a> Array of Tunes</h2><p>Since the return value is an array but in many cases you know you have only passed one tune in, the first thing you&#39;ll do is:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> visualObj <span class="token operator">=</span> visualObjs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="data"><a class="header-anchor" href="#data">#</a> Data</h2><div class="custom-container warning"><p class="custom-container-title">Volatile Format</p><p>The format of this object is NOT guaranteed to be backwards compatible, so if you do delve into this and write code that depends on it, you need to retest whenever you upgrade abcjs.</p></div><h3 id="formatting"><a class="header-anchor" href="#formatting">#</a> formatting</h3><p>This contains a list of the fonts used for the various types of elements and other formatting commands that have been either passed in on the <code>renderAbc</code> call or appear in <code>%%</code> lines.</p><h3 id="lines"><a class="header-anchor" href="#lines">#</a> lines</h3><p>This is an array of all the music. Each item in the array is a &quot;staff system&quot;. That is, it could be one staff for single instrument music, it could be two staves for piano music, or it could be more for ensemble music.</p><p>If you look at this object in the debugger, you can drill down and see all the notes and other symbols that you&#39;ve defined.</p><h3 id="media"><a class="header-anchor" href="#media">#</a> media</h3><p>Either &quot;screen&quot; or &quot;print&quot;. When printing, the margins and the header and footer are used.</p><h3 id="metatext"><a class="header-anchor" href="#metatext">#</a> metaText</h3><p>This is all of the items that aren&#39;t associated with the music. That includes the text that appears before the music starts and the text that appears after the music ends.</p><h3 id="version"><a class="header-anchor" href="#version">#</a> version</h3><p>The version of this format.</p><h3 id="visualtranspose"><a class="header-anchor" href="#visualtranspose">#</a> visualTranspose</h3><p>If the parameter <code>visualTranspose</code> was passed in on the <code>renderAbc</code> call, that value is reflected here.</p><h2 id="methods"><a class="header-anchor" href="#methods">#</a> Methods</h2><div class="custom-container warning"><p class="custom-container-title">Volatile Format</p><p>The format of this object is NOT guaranteed to be backwards compatible, so if you do delve into this and write code that depends on it, you need to retest whenever you upgrade abcjs.</p></div><h3 id="getbarlength"><a class="header-anchor" href="#getbarlength">#</a> getBarLength()</h3><p>Durations have units where a whole note is 1. This returns how long a measure is. For example, 4/4 time returns <code>1</code>, 3/4 time returns <code>0.75</code>, 6/8 time returns <code>0.75</code>.</p><h3 id="getbeatlength"><a class="header-anchor" href="#getbeatlength">#</a> getBeatLength()</h3><p>Durations have units where a whole note is 1. This returns how long a beat is. For example, 4/4 time returns <code>0.25</code>, 6/8 time returns <code>0.375</code> since a beat is three eighth notes.</p><h3 id="getbeatspermeasure"><a class="header-anchor" href="#getbeatspermeasure">#</a> getBeatsPerMeasure()</h3><p>This returns how many beats are in a measure. For example, 4/4 time returns <code>4</code>, 6/8 time returns <code>2</code> since a beat is three eighth notes.</p><h3 id="getbpm"><a class="header-anchor" href="#getbpm">#</a> getBpm()</h3><p>This is the starting beats per minute. Tempo changes could appear later in the tune, but this is the value that was set with the <code>Q:</code> statement, or if that statement doesn&#39;t exist, it is the default tempo of 180.</p><h3 id="getmeter"><a class="header-anchor" href="#getmeter">#</a> getMeter()</h3><p>This returns the internal representation of the meter as an object. More often you&#39;ll find <code>getMeterFraction</code> more useful if you are doing calculations.</p><h3 id="getmeterfraction"><a class="header-anchor" href="#getmeterfraction">#</a> getMeterFraction()</h3><p>This returns an object with the properties <code>num</code> and <code>den</code>. For instance, 3/4 time returns <code>{num: 3, den: 4}</code>. Common and Cut time are resolved to <code>{num: 4, den: 4}</code> and <code>{num: 2, den: 2}</code> respectively.</p><h3 id="getpickuplength"><a class="header-anchor" href="#getpickuplength">#</a> getPickupLength()</h3><p>Durations have units where a whole note is 1. If the first measure is not full, then this is the length of that first measure. It is then considered pickup notes.</p><h3 id="getkeysignature"><a class="header-anchor" href="#getkeysignature">#</a> getKeySignature()</h3><p>This returns the internal representation of the key signature with all of its pieces broken apart.</p><h3 id="getelementfromchar-charindex"><a class="header-anchor" href="#getelementfromchar-charindex">#</a> getElementFromChar(charIndex)</h3><p><code>charIndex</code> is a character position in the original ABC. This searches through the tune for the element that matches that character. If you pass in the index of a non-note element it returns null.</p><h3 id="gettotalbeats"><a class="header-anchor" href="#gettotalbeats">#</a> getTotalBeats</h3><p>Returns <code>undefined</code> until <code>setUpAudio</code> is called, then it returns the total number of beats that the tune has.</p><h3 id="gettotaltime"><a class="header-anchor" href="#gettotaltime">#</a> getTotalTime</h3><p>Returns <code>undefined</code> until <code>setUpAudio</code> is called, then it returns the total number of seconds that the tune will take at the tempo that was specified in <code>setUpAudio</code>.</p><h3 id="millisecondspermeasure"><a class="header-anchor" href="#millisecondspermeasure">#</a> millisecondsPerMeasure()</h3><p>This does the calculation using beats per minute and beats per measure.</p><h3 id="setupaudio"><a class="header-anchor" href="#setupaudio">#</a> setUpAudio()</h3><p>If you aren&#39;t using the built in synth, but you still want the information that the synth provides, call this. If you aren&#39;t overriding the BPM or anything else that can be set in the synth call, you can call this with no parameters. Otherwise specify the items you want to override.</p><p>This returns an array of all the sequence data. Normally you won&#39;t need this information, but there may be cases where it is useful for post-processing.</p>',55),n={render:function(e,t){return s}}}}]);