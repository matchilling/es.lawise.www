(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),A=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),d=r(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},u=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=c(e),a=u(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function B(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var Q=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',A=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+l+A+s+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,A=e.ariaHidden,s=l.default.createElement(R,(0,o.default)({ref:t,src:a},n,{ariaHidden:A}));return r.length>1?l.default.createElement("picture",null,i(r),s):s})),R=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,A=e.onLoad,d=e.onError,c=e.loading,f=e.draggable,u=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":u,sizes:a,srcSet:r,src:i},g,{onLoad:A,onError:d,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,A.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=Q(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=u(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,A=e.imgStyle,s=void 0===A?{}:A,d=e.placeholderStyle,f=void 0===d?{}:d,u=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,y=e.itemProp,S=e.loading,w=e.draggable,Q=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,o.default)({opacity:Q?1:0,transition:N?"opacity "+E+"ms":"none"},s),C="boolean"==typeof m?"lightgray":m,O={transitionDelay:E+"ms"},Y=(0,o.default)({opacity:this.state.imgLoaded?0:1},N&&O,{},s,{},f),M={title:t,alt:this.state.isVisible?"":a,style:Y,className:u,itemProp:y};if(p){var z=p,D=g(p);return l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},l.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),C&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&O)}),D.base64&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:D.base64,spreadProps:M,imageVariants:z,generateSources:j}),D.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:D.tracedSVG,spreadProps:M,imageVariants:z,generateSources:B}),this.state.isVisible&&l.default.createElement("picture",null,v(z),l.default.createElement(R,{alt:a,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:w})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:S},D,{imageVariants:z}))}}))}if(h){var k=h,P=g(h),G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},C&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},N&&O)}),P.base64&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:M,imageVariants:k,generateSources:j}),P.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:M,imageVariants:k,generateSources:B}),this.state.isVisible&&l.default.createElement("picture",null,v(k),l.default.createElement(R,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:w})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:S},P,{imageVariants:k}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),C=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});N.propTypes={resolutions:L,sizes:C,fixed:d.default.oneOfType([L,d.default.arrayOf(L)]),fluid:d.default.oneOfType([C,d.default.arrayOf(C)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var O=N;t.default=O},SGlo:function(e,t,a){"use strict";var r=a("rj/q"),i=a("N+BI").getWeak,n=a("1a8y"),A=a("BjK0"),s=a("xa9o"),o=a("yde8"),l=a("Wadk"),d=a("qDzq"),c=a("O1i0"),f=l(5),u=l(6),g=0,p=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var a=m(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=u(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){s(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&o(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!A(e))return!1;var a=i(e);return!0===a?p(c(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!A(e))return!1;var a=i(e);return!0===a?p(c(this,t)).has(e):a&&d(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?p(e).set(t,a):r[e._i]=a,e},ufstore:p}},eMsz:function(e,t,a){"use strict";var r,i=a("emib"),n=a("Wadk")(0),A=a("IYdN"),s=a("N+BI"),o=a("k5Iv"),l=a("SGlo"),d=a("BjK0"),c=a("O1i0"),f=a("O1i0"),u=!i.ActiveXObject&&"ActiveXObject"in i,g=s.getWeak,p=Object.isExtensible,h=l.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},E={get:function(e){if(d(e)){var t=g(e);return!0===t?h(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},b=e.exports=a("94Pd")("WeakMap",m,E,l,!0,!0);f&&u&&(o((r=l.getConstructor(m,"WeakMap")).prototype,E),s.NEED=!0,n(["delete","has","get","set"],(function(e){var t=b.prototype,a=t[e];A(t,e,(function(t,i){if(d(t)&&!p(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},r1Su:function(e){e.exports=JSON.parse('{"data":{"carlota":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHWy6uyUIRxqFwBH//EABsQAAIDAAMAAAAAAAAAAAAAAAADAQIREBIh/9oACAEBAAEFAhDWtcL9OtCaUETvEuvv/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAEx/9oACAECAQE/ASYf/8QAHRAAAQQCAwAAAAAAAAAAAAAAAAEQEUEhMQISMv/aAAgBAQAGPwIyuLazR5OS3LR20f/EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQYFRYZH/2gAIAQEAAT8htprcrNAulSoxZfqPg9T2szUNHUeYVBBgT//aAAwDAQACAAMAAAAQjD9A/8QAGBEBAQADAAAAAAAAAAAAAAAAAAERIVH/2gAIAQMBAT8QlZcW7f/EABcRAAMBAAAAAAAAAAAAAAAAAAEgITH/2gAIAQIBAT8QNxL/xAAeEAEAAwACAgMAAAAAAAAAAAABABEhQVEQMWGBkf/aAAgBAQABPxAFjdGjtl53DIK4rvwE4KwvsFeTraRfsiEQlLG1z9nq8UplD0HxFq6Ime0h4tn/2Q==","width":50,"height":50,"src":"/static/d4421fbbd8e1a61df4441332914cff66/99438/profile-carlota.jpg","srcSet":"/static/d4421fbbd8e1a61df4441332914cff66/99438/profile-carlota.jpg 1x,\\n/static/d4421fbbd8e1a61df4441332914cff66/aba1d/profile-carlota.jpg 1.5x,\\n/static/d4421fbbd8e1a61df4441332914cff66/b315d/profile-carlota.jpg 2x"}}},"estefania":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAQCAQMG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAbeublL2kedyNeE//8QAHBAAAQQDAQAAAAAAAAAAAAAAAgABAxIEECET/9oACAEBAAEFAjKgxSejLNKsWIVtT9GDj2df/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAEDAQE/ASN//8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ASv/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIQMRESMlL/2gAIAQEABj8CLjQXOI19J0CLX//EABwQAQACAgMBAAAAAAAAAAAAAAEAESExUWGBkf/aAAgBAQABPyELZslhkwMPEqOFNpX80dQOSJQq0xtgzvfZ/9oADAMBAAIAAwAAABBz98H/xAAYEQACAwAAAAAAAAAAAAAAAAABEBFBYf/aAAgBAwEBPxABGpS//8QAFxEBAQEBAAAAAAAAAAAAAAAAARBBgf/aAAgBAgEBPxBXkbP/xAAgEAEAAgIBBAMAAAAAAAAAAAABABEhMUFRcYGxoeHx/9oACAEBAAE/EMGZXXOdeoV98CWKMIxV4NwBIaFehS/NSvKWCfgFJ4fZACqHtFRGC1dxyoRTDWz6J++n/9k=","width":50,"height":50,"src":"/static/19ee980d3efe5e9fba54ba6fe54c5340/99438/profile-estefania.jpg","srcSet":"/static/19ee980d3efe5e9fba54ba6fe54c5340/99438/profile-estefania.jpg 1x,\\n/static/19ee980d3efe5e9fba54ba6fe54c5340/aba1d/profile-estefania.jpg 1.5x,\\n/static/19ee980d3efe5e9fba54ba6fe54c5340/b315d/profile-estefania.jpg 2x"}}},"site":{"siteMetadata":{"authors":[{"name":"Carlota","summary":"Lawyer in Intellectual Property, Information Technologies and Data Protection.","twitter":null,"social":{"twitter":"estefaniavecc"}},{"name":"Estefania","summary":"Lawyer specialized in Intellectual Property and Digital Law. Focused in the protection and advocacy of my clients\' intangible rights by providing strategic, innovative and efficient solutions.","twitter":"estefaniavecc","social":{"twitter":"estefaniavecc"}}],"social":{"twitter":"estefaniavecc"}}}}}')},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),A=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(A,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));a("E5k/");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),A=(a("3nLz"),a("pJf4"),a("r1Su")),s=a("9eSz"),o=a.n(s),l=a("p3AD"),d=function(e){var t=A.data,a=t.site.siteMetadata.authors.filter((function(t){return t.name===e.author})).pop(),r=void 0;return"Carlota"===e.author&&(r=t.carlota),"Estefania"===e.author&&(r=t.estefania),i.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},i.a.createElement(o.a,{fixed:r.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Escrito por ",i.a.createElement("strong",null,a.name)," • ",a.summary," "))},c=a("Bl7J"),f=a("vrFN"),u=(t.default=function(e){var t=e.data,a=e.pageContext,r=e.location,A=t.markdownRemark,s=t.site.siteMetadata.title,o=a.previous,u=a.next;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{borderWidth:"16px 0 0",borderTopStyle:"solid",borderImage:"linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3"}}),i.a.createElement(c.a,{location:r,title:s},i.a.createElement(f.a,{title:A.frontmatter.title,description:A.frontmatter.description||A.excerpt}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:{marginTop:Object(l.a)(1),marginBottom:0}},A.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(l.b)(-.2),{display:"block",marginBottom:Object(l.a)(1)})},A.frontmatter.date)),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:A.html}}),i.a.createElement("hr",{style:{marginBottom:Object(l.a)(1)}}),i.a.createElement("footer",null,i.a.createElement(d,{author:A.frontmatter.author}))),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,o&&i.a.createElement(n.Link,{to:o.fields.slug,rel:"prev"},"← ",o.frontmatter.title)),i.a.createElement("li",null,u&&i.a.createElement(n.Link,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →"))))))},"1479262918")},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),i=a("Wadk")(6),n="findIndex",A=!0;n in[]&&Array(1)[n]((function(){A=!1})),r(r.P+r.F*A,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a898c9bd6315f2cef8d6.js.map