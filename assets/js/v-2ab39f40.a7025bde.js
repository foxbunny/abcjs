(self.webpackChunkabcjs=self.webpackChunkabcjs||[]).push([[333],{7537:(e,t,i)=>{"use strict";i.r(t),i.d(t,{data:()=>o});const o={key:"v-2ab39f40",path:"/upgrading/midijs.html",title:"MIDI.JS Usage",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Midi.js removed",slug:"midi-js-removed",children:[]},{level:2,title:"Notes for Version 5.8.0",slug:"notes-for-version-5-8-0",children:[]},{level:2,title:"Notes for Version 3.0 Beta",slug:"notes-for-version-3-0-beta",children:[]},{level:2,title:"MIDI generation in ABCJS",slug:"midi-generation-in-abcjs",children:[]},{level:2,title:"Site Setup",slug:"site-setup",children:[]},{level:2,title:"Creating the MIDI",slug:"creating-the-midi",children:[]},{level:2,title:"Example",slug:"example",children:[]}],filePathRelative:"upgrading/midijs.md",git:{updatedTime:1616938639e3,contributors:[{name:"Paul Rosen",email:"paul@paulrosen.net",commits:2}]}}},7276:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>S});var o=i(6252);const n=(0,o.uE)('<h1 id="midi-js-usage"><a class="header-anchor" href="#midi-js-usage">#</a> MIDI.JS Usage</h1><h2 id="midi-js-removed"><a class="header-anchor" href="#midi-js-removed">#</a> Midi.js removed</h2><p>The last version supporting this interface is 6.0.0-beta.28.</p><h2 id="notes-for-version-5-8-0"><a class="header-anchor" href="#notes-for-version-5-8-0">#</a> Notes for Version 5.8.0</h2><p>This way of creating midi is being deprecated by a new method that is much smaller, less buggy and integrates with the TimingCallbacks object. This will continue to work for the forseeable future, but probably won&#39;t change much.</p>',5),r=(0,o.Uk)("See "),a=(0,o.Uk)("Synth Documentation"),s=(0,o.Uk)(" for details."),l=(0,o.uE)('<h2 id="notes-for-version-3-0-beta"><a class="header-anchor" href="#notes-for-version-3-0-beta">#</a> Notes for Version 3.0 Beta</h2><p>There are a number of features described below that are not yet activated. This release is primarily to get the main MIDI functionality working. Here is a list of features you can look forward to in upcoming versions:</p><ul><li><p>Changing the instrument and channel in the midi file: right now, one channel is used, and the instrument is Grand Piano.</p></li><li><p>Changing the tempo is not available.</p></li><li><p>The listener doesn&#39;t return much information: look for much more to come.</p></li><li><p>The &quot;play selection&quot; functionality is not implemented.</p></li><li><p>The &quot;bouncing ball&quot; functionality is not implemented.</p></li></ul><h2 id="midi-generation-in-abcjs"><a class="header-anchor" href="#midi-generation-in-abcjs">#</a> MIDI generation in ABCJS</h2>',4),h=(0,o.Uk)("There are two ways to generate MIDI: as a download link, and as an inline control. The download link method is built into ABCJS. The inline control, though, depends on the external library "),d={href:"https://github.com/mudcube/MIDI.js",target:"_blank",rel:"noopener noreferrer"},u=(0,o.Uk)("MIDI.js"),c=(0,o.Uk)("That, in turn, is dependent on a set of sound fonts. A good place to get them is "),m={href:"https://github.com/paulrosen/midi-js-soundfonts",target:"_blank",rel:"noopener noreferrer"},p=(0,o.Uk)("MIDI.js Soundfonts"),f=(0,o.uE)('<h2 id="site-setup"><a class="header-anchor" href="#site-setup">#</a> Site Setup</h2><ul><li><p>Use the version of the library that contains midi.js.</p></li><li><p>The soundfonts, by default, are served from github. If you would like host them yourself, put them on your server in a publicly accessible place and call:</p></li></ul><p><code>window.ABCJS.midi.setSoundFont(&quot;/url/to/soundfont/&quot;);</code></p><p>The trailing slash is required.</p><p>There is also some CSS required to make the MIDI control look right. You can use the example CSS in this repository and modify it to match your site. The example CSS uses Font Awesome. Include these two lines:</p><p><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css&quot;&gt;</code><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;abcjs-midi.css&quot; media=&quot;all&quot; type=&quot;text/css&quot; /&gt;</code></p><h2 id="creating-the-midi"><a class="header-anchor" href="#creating-the-midi">#</a> Creating the MIDI</h2><p>After doing the above steps to load the CSS and the sound fonts, the simplest way to produce the MIDI is:</p><p><code>window.ABCJS.renderMidi(&quot;id-of-div-to-place-midi-controls&quot;, abcString, {}, { generateInline: true }, {});</code></p><h2 id="example"><a class="header-anchor" href="#example">#</a> Example</h2>',10),g=(0,o.Uk)("See the examples in this repository. They contain the prerequisite files. "),b={href:"/examples/editor-midi.html",target:"_blank",rel:"noopener noreferrer"},k=(0,o.Uk)("Editor"),y=(0,o.Uk)(", "),v={href:"/examples/printable.html",target:"_blank",rel:"noopener noreferrer"},I=(0,o.Uk)("Printable"),w=(0,o.Uk)("."),S={render:function(e,t){const i=(0,o.up)("RouterLink"),S=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.j4)(o.HY,null,[n,(0,o.Wm)("p",null,[r,(0,o.Wm)(i,{to:"/synth.html"},{default:(0,o.w5)((()=>[a])),_:1}),s]),l,(0,o.Wm)("p",null,[h,(0,o.Wm)("a",d,[u,(0,o.Wm)(S)])]),(0,o.Wm)("p",null,[c,(0,o.Wm)("a",m,[p,(0,o.Wm)(S)])]),f,(0,o.Wm)("p",null,[g,(0,o.Wm)("a",b,[k,(0,o.Wm)(S)]),y,(0,o.Wm)("a",v,[I,(0,o.Wm)(S)]),w])],64)}}}}]);