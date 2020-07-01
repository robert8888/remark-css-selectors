### about
This is extension plugin for remark markdown library whitch based on [unified](https://github.com/unifiedjs/unified) framework. It's allows you add id and css attributes to markdown language. Extension works with rehype by using hProperties. 
### installation
``` npm install remark-css-selectors ```
### examples
1.
```markdown
{.big-head}# h3 Heading   
{.heading}#### h4 Heading {.line}~~Strikethrough~~  
##### h5 Heading {.w-800 text-red}**This is bold text**  {.lite}_This is italic text_
```
will output
```html
<h1 class="big-head">h3 Heading</h1>
<h4 class="heading">h4 Heading  
    <del class="line">Strikethrough</del>  
</h4>  
<h5>h5 Heading <strong class="w-800 text-red">This is bold text</strong> <em class="lite">This is italic text</em></h5>
```

2.
```markdown
{.h2}{#hJs}## New rules
  
{#specilaLine}---

{.line-through}***  
  
{.quotes-title}## Blockquotes  
  
{.block}> Blockquotes can also be nested...  
>> ...by using additional greater-than signs right next to each other...  
> > > ...or with spaces between arrows.
```

``` html
<h2 class="h2" id="hJs">New rules</h2>
<hr id="specilaLine">  
<hr class="line-through">  
<h2 class="quotes-title">Blockquotes</h2>  
<blockquote class="block"><p>Blockquotes can also be nested...</p>  
 <blockquote><p>...by using additional greater-than signs right next to each other...</p>  
	 <blockquote>
		 <p>...or with spaces between arrows.</p>
	 </blockquote>  
 </blockquote>
</blockquote>
```

3.
```markdown
Inline {.code}`code`  
  
{.sample sample--red}```  
Sample text here...  
.```  
  
Syntax highlighting  
  
{#code}{.code-js}``` js  
var foo = function (bar) {  
 return bar++;};  
  
console.log(foo(5));  
.```
```

```html
<p>Inline <code class="code">code</code></p>  
<pre>
	<code class="sample sample--red">Sample text here... </code>
</pre>  
<p>Syntax highlighting</p>  
<pre>
	<code class="code-js" id="code">
	var foo = function (bar) { return bar++; }; console.log(foo(5)); 
	</code>
</pre>
```

4. with custom blocks
```markdown 
{.sm-col-6}[[block]]  
|{.pargraph-class} {#img-id}![Minion](https://....)  
|{.img-class}![Stormtroopocat](https://.... "The Stormtroopocat")  
  
you need one space in front to assign id to image not to paragraph  
 {#image}![Alt text][id]
```

```html
<div class="custom-block custom-block sm-col-6">  
 <div class="custom-block-body">  
	 <p class="pargraph-class">
		 <img id="img-id" src="https://..." alt="Minion" >  
		 <img class="img-class" src="https://..." >  
	 </p> 
  </div>
 </div>
<p> you need one space in front to assign id to image not to paragraph 
	<img id="image" src="https://..." >
</p>
```

### usage
``` javascript
import unified from 'unified'  
import parse from 'remark-parse';  
import selectors from 'ramark-css-selectors';
//import remarkCustomBlocks from 'remark-custom-blocks'  
import remark2rehype from "remark-rehype";  
import doc from'rehype-document';  
import format from'rehype-format';  
import html from 'rehype-stringify';

 let document = unified()  
    .use(parse)  
    .use(selectors)  
//  .use(remarkCustomBlocks, {  
//      block: {  
//          classes: 'custom-block'  
//      },  
//  })  
    .use(remark2rehype)
    .use(doc)  
    .use(format)  
    .use(html)  
    .processSync(md);
    
console.log(document.contents)
```

```javascript
const processed = unified()
    .use(parse)
    .use(remarkAttr)
    .use(remark2rehype)
    .use(rehypeReact, {createElement: React.createElement})
    .processSync(md);
// will return react elemt
return processed.result;
```