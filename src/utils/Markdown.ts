import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';

export const marked = new Marked(
    markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang, info) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        }
    })
);


marked.parse(`
\`\`\`javascript
const highlight = "code";
\`\`\`
`);
// <pre><code class="hljs language-javascript">
//   <span class="hljs-keyword">const</span> highlight = <span class="hljs-string">&quot;code&quot;</span>;
// </code></pre>