(self.webpackChunkabcjs=self.webpackChunkabcjs||[]).push([[369],{5543:(e,a,n)=>{"use strict";n.r(a),n.d(a,{data:()=>s});const s={key:"v-a7d8cb6c",path:"/animation/timing-callbacks.html",title:"Timing Callbacks",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Creation",slug:"creation",children:[]},{level:2,title:"Parameters",slug:"parameters",children:[]},{level:2,title:"Callbacks",slug:"callbacks",children:[{level:3,title:"beatCallback",slug:"beatcallback",children:[]},{level:3,title:"eventCallback",slug:"eventcallback",children:[]},{level:3,title:"lineEndCallback",slug:"lineendcallback",children:[]}]},{level:2,title:"Functions",slug:"functions",children:[{level:3,title:"start(offsetPercent)",slug:"start-offsetpercent",children:[]},{level:3,title:"pause()",slug:"pause",children:[]},{level:3,title:"stop()",slug:"stop",children:[]},{level:3,title:"reset()",slug:"reset",children:[]},{level:3,title:"setProgress(percent, units)",slug:"setprogress-percent-units",children:[]},{level:3,title:"replaceTarget(visualObj)",slug:"replacetarget-visualobj",children:[]}]},{level:2,title:"Example",slug:"example",children:[]}],filePathRelative:"animation/timing-callbacks.md",git:{updatedTime:1618762633e3,contributors:[{name:"Paul Rosen",email:"paul@paulrosen.net",commits:11}]}}},6798:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>o});var s=n(6252);const t=(0,s.uE)('<h1 id="timing-callbacks"><a class="header-anchor" href="#timing-callbacks">#</a> Timing Callbacks</h1><p>This runs an animation timer and does callbacks at various intervals. This allows you to do various effects that are timed with beats or playing notes.</p><h2 id="creation"><a class="header-anchor" href="#creation">#</a> Creation</h2><p>To use this create an instance of it:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> timingCallbacks <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">abcjs<span class="token punctuation">.</span>TimingCallbacks</span><span class="token punctuation">(</span>visualObj<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table><thead><tr><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>visualObj</td><td>This is the output of the <code>renderAbc()</code> call. It is the music that will be timed.</td></tr><tr><td>params</td><td>This is a object. See below for the possible properties.</td></tr></tbody></table><h2 id="parameters"><a class="header-anchor" href="#parameters">#</a> Parameters</h2><table><thead><tr><th>Name</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>qpm</code></td><td>whatever is in the Q: field</td><td>Number of beats per minute.</td></tr><tr><td><code>extraMeasuresAtBeginning</code></td><td>0</td><td>Don&#39;t start the callbacks right away, but insert this number of measures first.</td></tr><tr><td><code>beatCallback</code></td><td>null</td><td>Called for each beat passing the beat number (starting at 0).</td></tr><tr><td><code>eventCallback</code></td><td>null</td><td>Called for each event (either a note, a rest, or a chord, and notes in separate voices are grouped together.)</td></tr><tr><td><code>lineEndCallback</code></td><td>null</td><td>Called at the end of each line. (This is useful if you want to be sure the music is scrolled into view at the right time.) See <code>lineEndAnticipation</code> for more details.</td></tr><tr><td><code>lineEndAnticipation</code></td><td>0</td><td>The number of milliseconds for the <code>lineEndCallback</code> to anticipate end of the line. That is, if you want to get the callback half a second before the end of the line, use 500.</td></tr><tr><td><code>beatSubdivisions</code></td><td>1</td><td>How many callbacks should happen for each beat. This allows finer control in the client, for instance, to handle a progress bar.</td></tr></tbody></table><h2 id="callbacks"><a class="header-anchor" href="#callbacks">#</a> Callbacks</h2><h3 id="beatcallback"><a class="header-anchor" href="#beatcallback">#</a> beatCallback</h3><p>This is called once for every beat in the tune. It is called one additional time when the tune is finished.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">beatCallback</span><span class="token punctuation">(</span><span class="token parameter">beatNumber<span class="token punctuation">,</span> totalBeats<span class="token punctuation">,</span> totalTime<span class="token punctuation">,</span> position<span class="token punctuation">,</span> debugInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>beatNumber</td><td>Zero-based beat number. Usually this will increment sequentially and regularly, but if javascript is paused long enough (for instance, if the browser tab is changed), then there may be a number of these calls at once when it catches up.</td></tr><tr><td>totalBeats</td><td>The total number of beats (including all repeats) that will be played.</td></tr><tr><td>totalTime</td><td>The total number of milliseconds of the tune.</td></tr><tr><td>position</td><td>The interpolated position of the cursor if the beat occurs between notes. This is an object with the attributes { left: , top: , height: } This can be used to smooth out the cursor by moving it on the beat callbacks. The higher the number of <code>beatSubdivisions</code> the smoother the cursor will be.</td></tr><tr><td>debugInfo</td><td>A hash of some extra info that might be useful in figuring out why the callback was triggered.</td></tr></tbody></table><h3 id="eventcallback"><a class="header-anchor" href="#eventcallback">#</a> eventCallback</h3><p>This is called once for every &quot;event&quot; in time - either a note or a rest. If there are multiple notes at the same time, then it is only called once for that group of notes.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">eventCallback</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The parameter <code>ev</code> is an object that looks like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ev <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span> <span class="token comment">// This is always &quot;event&quot;</span>\n\n    <span class="token string">&quot;milliseconds&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// The number of milliseconds from the beginning of the piece</span>\n    <span class="token string">&quot;millisecondsPerMeasure&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// The number of milliseconds per measure</span>\n\n    <span class="token string">&quot;line&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// The current &quot;line&quot;, that is, the staff system.</span>\n    <span class="token string">&quot;measureNumber&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// The measure number. Resets per line, so the first measure number on a line is zero.</span>\n\n    <span class="token string">&quot;top&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// The number of pixels from the top of the svg that the note appears.</span>\n    <span class="token string">&quot;height&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// The height of the note, in pixels. </span>\n    <span class="token string">&quot;left&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// The number of pixels from the left edge of the svg.</span>\n    <span class="token string">&quot;width&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// The width of the note</span>\n\n    <span class="token string">&quot;elements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>  <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Array of the actual elements on the page that are represented by the note or notes.</span>\n    <span class="token string">&quot;startCharArray&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> number <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// the character position in the original abc string</span>\n    <span class="token string">&quot;endCharArray&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> number <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// the character position in the original abc string</span>\n    <span class="token string">&quot;midiPitches&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// Array of the currently playing pitches</span>\n        <span class="token punctuation">{</span>\n            <span class="token string">&quot;pitch&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// The pitch number (based on the midi standard, i.e. middle C is 60)</span>\n            <span class="token string">&quot;durationInMeasures&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// the note value as a fraction. (that is, a quarter note is 0.025)</span>\n            <span class="token string">&quot;volume&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// The volume expressed as a number between 0 and 127</span>\n            <span class="token string">&quot;instrument&quot;</span><span class="token operator">:</span> number <span class="token comment">// The instrument number (based on the midi standard, i.e. acoustic_grand_piano is 0)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h4 id="notes"><a class="header-anchor" href="#notes">#</a> Notes:</h4><ul><li><p>The <code>startCharArray</code> and <code>endCharArray</code> are arrays because there is more than one location in the abc string if there is more than one voice.</p></li><li><p>The format of the <code>elements</code> array is subject to change in future versions.</p></li><li><p>This is called one last time with passing in <code>null</code> at the end of the tune. On that call <code>eventCallback</code> can return the string &quot;continue&quot; to keep the timer from stopping. This is useful if you want to play on repeat - in theory you would probably have another call to <code>seek()</code>.</p></li><li><p>This function can be a Promise or not.</p></li></ul><h3 id="lineendcallback"><a class="header-anchor" href="#lineendcallback">#</a> lineEndCallback</h3><p>This will be called as the cursor is approaching the end of a line of music. This is useful if there is more than a screen&#39;s worth of music; it can be used to scroll the page at the right time.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">lineEndCallback</span><span class="token punctuation">(</span><span class="token parameter">info<span class="token punctuation">,</span> event<span class="token punctuation">,</span> details</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The parameter <code>info</code> looks like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>info <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;milliseconds&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// current milliseconds from beginning of piece</span>\n    <span class="token string">&quot;top&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// The number of pixels from the top of the svg to the top of the cursor</span>\n    <span class="token string">&quot;bottom&quot;</span><span class="token operator">:</span> number <span class="token comment">// The number of pixels from the top of the svg to the bottom of the cursor</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The parameter <code>event</code> is the standard note event.</p><p>The parameter <code>details</code> looks like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>details <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;line&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// the current line number (zero-based)</span>\n    <span class="token string">&quot;endTimings&quot;</span><span class="token operator">:</span> array <span class="token comment">// the array of the timings for each line</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The <code>endTimings</code> array elements are of the same type as the <code>info</code> parameter.</p><h2 id="functions"><a class="header-anchor" href="#functions">#</a> Functions</h2><p>These are the entry points that can be called on the <code>timingCallbacks</code> object.</p><h3 id="start-offsetpercent"><a class="header-anchor" href="#start-offsetpercent">#</a> start(offsetPercent)</h3><p>This starts the timer that triggers the callbacks. This is called to both start and resume after calling pause.</p><table><thead><tr><th><code>offsetPercent</code> value</th><th>Description</th></tr></thead><tbody><tr><td>undefined</td><td>If the previous call was to <code>pause()</code>, then the animation continues from where it left off. If there was no pause, then the animation starts from the beginning.</td></tr><tr><td>From 0 to 1</td><td>The percentage into the animation to jump to. This is like doing a seek first.</td></tr></tbody></table><h3 id="pause"><a class="header-anchor" href="#pause">#</a> pause()</h3><p>Pauses the animation. Calling <code>start()</code> afterwards will resume from where it left off.</p><h3 id="stop"><a class="header-anchor" href="#stop">#</a> stop()</h3><p>Stop the animation. After calling this, the next call to <code>start()</code> will start at the beginning.</p><h3 id="reset"><a class="header-anchor" href="#reset">#</a> reset()</h3><p>Move the timer back to the beginning, so the animation starts over. This can be called either when the animation is currently running or when it is paused.</p><h3 id="setprogress-percent-units"><a class="header-anchor" href="#setprogress-percent-units">#</a> setProgress(percent, units)</h3><p>Change the position of the animation. This allows random access to any place in the tune.</p><p>If the second parameter is not present, then <code>units</code> equals &quot;percent&quot;. The possible values are:</p><ul><li><p><code>&quot;percent&quot;</code>: The percent passed in is a number between 0 and 1. This can be called either when the animation is currently running or when it is paused.</p></li><li><p><code>&quot;seconds&quot;</code>: The seconds from the beginning of the tune. If this is passed the end of the tune it is changed to the end.</p></li><li><p><code>&quot;beats&quot;</code>: The beats from the beginning of the tune. If this is passed the end of the tune it is changed to the end.</p></li></ul><h3 id="replacetarget-visualobj"><a class="header-anchor" href="#replacetarget-visualobj">#</a> replaceTarget(visualObj)</h3><p>If the underlying music changes on the fly, this replaces the current object without having to destroy the object and start over. <code>visualObj</code> is the return value from <code>renderAbc</code>.</p><h2 id="example"><a class="header-anchor" href="#example">#</a> Example</h2><p>Paste in any ABC you want here then click &quot;start&quot; to see what is returned by the timing callbacks:</p>',48),o={mounted(){setTimeout((()=>{this.callbacks=[this.$refs.timingCallbacks]}),500)},data:()=>({callbacks:[]}),render:function(e,a,n,o,l,r){const c=(0,s.up)("example-tune-book"),i=(0,s.up)("timing-callbacks",!0);return(0,s.wg)(),(0,s.j4)(s.HY,null,[t,(0,s.Wm)(c,{callbacks:l.callbacks,"tune-id":32},null,8,["callbacks"]),(0,s.Wm)(i,{ref:"timingCallbacks",target:"#abc"},null,512)],64)}}}}]);