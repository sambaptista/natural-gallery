(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b(require('PhotoSwipe'),require('PhotoSwipeUI_Default')):'function'==typeof define&&define.amd?define('NaturalGallery',['PhotoSwipe','PhotoSwipeUI_Default'],b):'object'==typeof exports?exports.NaturalGallery=b(require('PhotoSwipe'),require('PhotoSwipeUI_Default')):a.NaturalGallery=b(a.PhotoSwipe,a.PhotoSwipeUI_Default)})(this,function(a,b){var c=Math.floor;return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=2)}([function(a,b,c){'use strict';c.d(b,'a',function(){return d});var d;(function(a){a.getIcon=function(a){const b=document.createElementNS('http://www.w3.org/2000/svg','svg');return b.setAttribute('viewBox','0 0 100 100'),b.innerHTML='<use xlink:href="#'+a+'"></use>',b},a.toggleClass=function(a,b){a&&b&&(this.hasClass(a,b)?this.removeClass(a,b):this.addClass(a,b))},a.removeClass=function(a,b){const c=new RegExp('(\\s|^)'+b+'(\\s|$)');a.className=a.className.replace(c,' ').replace(/^\s\s*/,'').replace(/\s\s*$/,'')},a.addClass=function(a,b){this.hasClass(b)||(a.className+=(a.className?' ':'')+b)},a.hasClass=function(a,b){return a.className&&new RegExp('(^|\\s)'+b+'(\\s|$)').test(a.className)},a.uniqBy=function(a,b){const c=[];return a.forEach(function(a){const d=c.some(function(c){return a[b]===c[b]});d||c.push(a)}),c},a.differenceBy=function(a,b,c){const d=[];return a.forEach(function(a){const e=b.some(function(b){return a[c]===b[c]});e||d.push(a)}),d},a.intersectionBy=function(a,b,c){const d=[];return a.forEach(function(a){const e=b.some(function(b){return a[c]===b[c]});e&&d.push(a)}),d};const b=[{base:'A',letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:'AA',letters:/[\uA732]/g},{base:'AE',letters:/[\u00C6\u01FC\u01E2]/g},{base:'AO',letters:/[\uA734]/g},{base:'AU',letters:/[\uA736]/g},{base:'AV',letters:/[\uA738\uA73A]/g},{base:'AY',letters:/[\uA73C]/g},{base:'B',letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:'C',letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:'D',letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:'DZ',letters:/[\u01F1\u01C4]/g},{base:'Dz',letters:/[\u01F2\u01C5]/g},{base:'E',letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:'F',letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:'G',letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:'H',letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:'I',letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:'J',letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:'K',letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:'L',letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:'LJ',letters:/[\u01C7]/g},{base:'Lj',letters:/[\u01C8]/g},{base:'M',letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:'N',letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:'NJ',letters:/[\u01CA]/g},{base:'Nj',letters:/[\u01CB]/g},{base:'O',letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:'OI',letters:/[\u01A2]/g},{base:'OO',letters:/[\uA74E]/g},{base:'OU',letters:/[\u0222]/g},{base:'P',letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:'Q',letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:'R',letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:'S',letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:'T',letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:'TZ',letters:/[\uA728]/g},{base:'U',letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:'V',letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:'VY',letters:/[\uA760]/g},{base:'W',letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:'X',letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:'Y',letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:'Z',letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:'a',letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:'aa',letters:/[\uA733]/g},{base:'ae',letters:/[\u00E6\u01FD\u01E3]/g},{base:'ao',letters:/[\uA735]/g},{base:'au',letters:/[\uA737]/g},{base:'av',letters:/[\uA739\uA73B]/g},{base:'ay',letters:/[\uA73D]/g},{base:'b',letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:'c',letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:'d',letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:'dz',letters:/[\u01F3\u01C6]/g},{base:'e',letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:'f',letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:'g',letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:'h',letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:'hv',letters:/[\u0195]/g},{base:'i',letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:'j',letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:'k',letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:'l',letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:'lj',letters:/[\u01C9]/g},{base:'m',letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:'n',letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:'nj',letters:/[\u01CC]/g},{base:'o',letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:'oi',letters:/[\u01A3]/g},{base:'ou',letters:/[\u0223]/g},{base:'oo',letters:/[\uA74F]/g},{base:'p',letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:'q',letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:'r',letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:'s',letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:'t',letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:'tz',letters:/[\uA729]/g},{base:'u',letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:'v',letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:'vy',letters:/[\uA761]/g},{base:'w',letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:'x',letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:'y',letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:'z',letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}];a.removeDiacritics=function(a){for(var c=0;c<b.length;c++)a=a.replace(b[c].letters,b[c].base);return a}})(d||(d={}))},function(a,b){'use strict';class c{constructor(a){this.header=a,this._collection=null}isActive(){return null!==this.collection}get collection(){return this._collection}set collection(a){this._collection=a}}b.a=c},function(a,b,c){a.exports=c(3)},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.add=function(a){return d.a.getInstance().addGallery(a)},b.getById=function(a){d.a.getInstance().getById(a)};var d=c(4),e=c(14),f=c.n(e),g=c(15),h=c.n(g);'undefined'!=typeof naturalGalleries&&naturalGalleries.constructor===Array&&d.a.getInstance().addGalleries(naturalGalleries)},function(a,b,c){'use strict';var d=c(5);class e{constructor(){this.old_scroll_top=0,this.galleries=[],this.bindEvents(),this.pswp=document.getElementsByClassName('pswp')[0]}static getInstance(){return e.instance?e.instance:new e}addGalleries(a=null){a.forEach(function(b,c){a[c]=this.addGallery(b)},this)}addGallery(a){if(a)return a=new d.a(a,this.pswp),this.galleries.push(a),a}getById(a){let b=null;return this.galleries.forEach(function(c){c.id===a&&(b=c)}),b}resize(){this.galleries.forEach(function(a){a.resize()})}bindEvents(){let a=this;document.addEventListener('scroll',function(){if(1===a.galleries.length&&0===a.galleries[0].options.limit){let b=a.galleries[0],c=b.rootElement.offsetTop+b.rootElement.offsetHeight+60,d=(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0),e=window.innerHeight,f=d-a.old_scroll_top;a.old_scroll_top=d,0<f&&d+e>c&&a.galleries[0].addElements(1)}})}}b.a=e,e.instance=null},function(a,b,d){'use strict';var e=d(6),f=d(9),g=d(10),h=d(11),i=d(0),j=d(13);class k{constructor(a,b){for(var d in this._options={rowHeight:350,format:'natural',round:3,imagesPerRow:4,margin:3,limit:0,showLabels:'hover',lightbox:!0,minRowsAtStart:2,showCount:!1,searchFilter:!1,categoriesFilter:!1,showNone:!1,showOthers:!1},this._pswpContainer=[],this._collection=[],this._categories=[],this.pswpElement=b,this.options)'undefined'==typeof a.options[d]&&(a.options[d]=this.options[d]);this.options=a.options,this.categories=a.categories?a.categories:[],this.rootElement=document.getElementById(a.id),i.a.addClass(this.rootElement,'natural-gallery'),(this.options.searchFilter||this.options.categoriesFilter||this.options.showCount)&&(this.header=new f.a(this),this.options.searchFilter&&this.header.addFilter(new g.a(this.header)),this.options.categoriesFilter&&this.header.addFilter(new h.a(this.header))),this.render(),this.bodyWidth=c(this.bodyElement.getBoundingClientRect().width),a.images&&(this.collection=a.images)}render(){const a=this;let b=document.createElement('div');i.a.addClass(b,'natural-gallery-noresults'),b.appendChild(i.a.getIcon('icon-noresults'));let c=document.createElement('div');i.a.addClass(c,'natural-gallery-next'),c.appendChild(i.a.getIcon('icon-next')),c.addEventListener('click',function(b){b.preventDefault(),a.addElements()});let d=document.createElement('iframe');d.addEventListener('load',function(){let b=null;this.contentWindow.addEventListener('resize',function(){clearTimeout(b),b=setTimeout(function(){a.resize()},100)})}),this.bodyElement=document.createElement('div'),i.a.addClass(this.bodyElement,'natural-gallery-body'),this.bodyElement.appendChild(b),this.header&&this.rootElement.appendChild(this.header.render()),this.rootElement.appendChild(this.bodyElement),this.rootElement.appendChild(c),this.rootElement.appendChild(d)}appendItems(a){let b=!1;0===this.collection.length&&(b=!0),a.forEach(function(a){a.id=this._collection.length,this._collection.push(new e.a(a,this))},this),j.a.organize(this),this.header&&this.header.refresh(),b&&this.addElements()}style(){this.collection.forEach(function(a){a.style()})}addElements(a=null){let b=this.collection,c=this.rootElement.getElementsByClassName('natural-gallery-next')[0];if(c&&(c.style.display='block'),this.pswpContainer.length===b.length)return c.style.display='none',void(0===b.length&&(this.rootElement.getElementsByClassName('natural-gallery-noresults')[0].style.display='block',this.rootElement.getElementsByClassName('natural-gallery-images')[0].style.display='none'));a||(a=this.getRowsPerPage(this));let d=this.pswpContainer.length,e=this.pswpContainer.length?b[d].row+a:a;for(let f,g=d;g<b.length;g++)f=b[g],f.row<e&&(this.pswpContainer.push(f.getPswpItem()),this.bodyElement.appendChild(f.loadElement()),f.bindClick(),f.flash()),this.pswpContainer.length===b.length&&(c.style.display='none');let f=this.rootElement.getElementsByClassName('natural-gallery-noresults')[0];f&&(f.style.display='none');let g=this.rootElement.getElementsByClassName('natural-gallery-images')[0];g&&(g.style.display='block');let h=this.rootElement.getElementsByClassName('natural-gallery-visible')[0];h&&(h.textContent=this.pswpContainer.length+'');let i=this.rootElement.getElementsByClassName('natural-gallery-total')[0];i&&(i.textContent=b.length+'')}getRowsPerPage(a){if(this.options.limit)return this.options.limit;let b=window.outerHeight,d=b-a.bodyElement.offsetTop,e=c(d/(0.7*this.options.rowHeight));return e<this.options.minRowsAtStart?this.options.minRowsAtStart:e}resize(){let a=c(this.bodyElement.getBoundingClientRect().width);if(a!==this.bodyWidth){this.bodyWidth=a,j.a.organize(this);let b=this.collection[this.pswpContainer.length-1].row+1;this.reset(),this.addElements(b)}}refresh(){this.reset(),j.a.organize(this),this.addElements()}reset(){this.pswpContainer=[],this._collection.forEach(function(a){a.remove()});let a=this.rootElement.getElementsByClassName('natural-gallery-noresults')[0];a&&(a.style.display='none')}set images(a){this.collection=a}get id(){return this._id}set id(a){this._id=a}get pswpContainer(){return this._pswpContainer}set pswpContainer(a){this._pswpContainer=a}get collection(){return this.header&&this.header.isFiltered()?this.header.collection:this._collection}getOriginalCollection(){return this._collection}set collection(a){this._collection=[],this.appendItems(a)}get bodyWidth(){return this._bodyWidth}set bodyWidth(a){this._bodyWidth=a}get bodyElement(){return this._bodyElement}set bodyElement(a){this._bodyElement=a}get rootElement(){return this._rootElement}set rootElement(a){this._rootElement=a}get pswpApi(){return this._pswpApi}set pswpApi(a){this._pswpApi=a}get pswpElement(){return this._pswpElement}set pswpElement(a){this._pswpElement=a}get options(){return this._options}set options(a){this._options=a}get header(){return this._header}set header(a){this._header=a}get categories(){return this._categories}set categories(a){this._categories=a}}b.a=k},function(a,b,c){'use strict';var d=c(0),f=c(7),e=c.n(f),g=c(8),h=c.n(g);class i{constructor(a,b){this.fields=a,this.gallery=b,this._binded=!1,this.id=a.id,this.thumbnail=a.thumbnail,this.enlarged=a.enlarged,this.title=this.getTitle(a),this.link=this.getLink(a),this.linkTarget=this.getLinkTarget(a),this.tWidth=a.tWidth,this.tHeight=a.tHeight,this.eWidth=a.eWidth,this.eHeight=a.eHeight,this.categories=a.categories,this.last=a.last,this.createElement()}getTitle(a){return a.title?this.getTitleDetails(a.title).title:null}getLink(a){return a.link?a.link:this.getTitleDetails(a.title).link}getLinkTarget(a){return a.linkTarget?a.linkTarget:this.getTitleDetails(a.title).linkTarget}getTitleDetails(a){let b=document.createElement('div');b.innerHTML=a;let c=b.getElementsByTagName('a'),d={title:b.textContent,link:null,linkTarget:null};return c[0]&&(d.link=c[0].getAttribute('href'),d.linkTarget=c[0].getAttribute('target')),d}createElement(){let a=this.gallery.options,b=null;this.title&&-1<['true','hover'].indexOf(a.showLabels)&&(b=!0);let c=document.createElement('div'),e=document.createElement('div'),f=this.getLinkElement();if(a.lightbox&&b&&f?(b=f,d.a.addClass(b,'button'),d.a.addClass(e,'zoomable')):a.lightbox&&b&&!f?(b=document.createElement('div'),d.a.addClass(c,'zoomable')):a.lightbox&&!b?d.a.addClass(c,'zoomable'):!a.lightbox&&b&&f?(c=f,b=document.createElement('div')):a.lightbox||!b||f?!a.lightbox&&!b&&f&&(c=f):b=document.createElement('div'),d.a.addClass(e,'image'),d.a.addClass(c,'figure loading visible'),e.style.backgroundImage='url('+this.thumbnail+')',c.appendChild(e),a.round){let b=a.round+'px';c.style.borderRadius=b,e.style.borderRadius=b}this.element=c,this.image=e,b&&(b.textContent=this.title,d.a.addClass(b,'title'),'hover'===a.showLabels&&d.a.addClass(b,'hover'),c.appendChild(b))}getLinkElement(){let a=null;return this.link&&(a=document.createElement('a'),a.setAttribute('href',this.link),d.a.addClass(a,'link'),this.linkTarget&&a.setAttribute('target',this.linkTarget)),a}style(){d.a.removeClass(this.element,'visible'),this.element.style.width=this.width+'px',this.element.style.height=this.height+'px',this.element.style.marginRight=this.gallery.options.margin+'px',this.element.style.marginBottom=this.gallery.options.margin+'px',this.last&&(this.element.style.marginRight='0'),this.image.style.width=this.width+'px',this.image.style.height=this.height+'px';const a=this;window.setTimeout(function(){d.a.addClass(a.element,'visible')},0)}flash(){const a=this;d.a.removeClass(this.element,'visible'),window.setTimeout(function(){d.a.addClass(a.element,'visible')},0)}bindClick(){if(!this.gallery.options.lightbox)return;const a=this;if(this.binded)return;this.binded=!0;let b=null;b=this.link?this.image:this.element,b.addEventListener('click',function(b){a.openPhotoSwipe.call(a,b,a.element)})}openPhotoSwipe(a,b){if(a.preventDefault(),!this.gallery.options.lightbox)return;let c=Array.prototype.slice.call(b.parentNode.children),d=c.indexOf(b)-1,e=new f(this.gallery.pswpElement,g,this.gallery.pswpContainer,{index:d,bgOpacity:0.85,showHideOpacity:!0,loop:!1});this.gallery.pswpApi=e,e.init();let h=null;e.listen('beforeChange',function(a){0<a&&e.getCurrentIndex()===e.items.length-1?this.gallery.addElements():a===-1*(e.items.length-1)&&(h=e.items.length,this.gallery.addElements())}),e.listen('afterChange',function(){h&&(e.goTo(h),h=null)})}getPswpItem(){return{src:this._enlarged,w:this._eWidth,h:this._eHeight,title:this._title}}getElement(){return this.element}loadElement(){const a=this;let b=document.createElement('img');return b.setAttribute('src',this.thumbnail),b.addEventListener('load',function(){d.a.removeClass(a.element,'loading'),d.a.addClass(a.element,'loaded')}),b.addEventListener('error',function(){d.a.addClass(a.element,'errored')}),this.element}remove(){this.getElement().parentNode&&this.getElement().parentNode.removeChild(this.getElement())}get id(){return this._id}set id(a){this._id=a}get thumbnail(){return this._thumbnail}set thumbnail(a){this._thumbnail=a}get enlarged(){return this._enlarged}set enlarged(a){this._enlarged=a}get title(){return this._title}set title(a){this._title=a}get tWidth(){return this._tWidth}set tWidth(a){this._tWidth=a}get tHeight(){return this._tHeight}set tHeight(a){this._tHeight=a}get eWidth(){return this._eWidth}set eWidth(a){this._eWidth=a}get eHeight(){return this._eHeight}set eHeight(a){this._eHeight=a}get last(){return this._last}set last(a){this._last=a}get categories(){return this._categories}set categories(a){this._categories=a}get row(){return this._row}set row(a){this._row=a}get height(){return this._height}set height(a){this._height=a}get width(){return this._width}set width(a){this._width=a}get description(){return this._description}set description(a){this._description=a}get binded(){return this._binded}set binded(a){this._binded=a}get link(){return this._link}set link(a){this._link=a}get linkTarget(){return this._linkTarget}set linkTarget(a){this._linkTarget=a}}b.a=i},function(b){b.exports=a},function(a){a.exports=b},function(a,b,c){'use strict';var d=c(0);class e{constructor(a){this._collection=null,this._filters=[],this.gallery=a}addFilter(a){this.filters.push(a)}refresh(){this.filters.forEach(function(a){a.render()})}render(){let a=document.createElement('div');d.a.addClass(a,'natural-gallery-images sectionContainer'),a.appendChild(d.a.getIcon('icon-pict'));let b=document.createElement('div');d.a.addClass(b,'sectionName'),b.textContent='Images',a.appendChild(b);let c=document.createElement('span');a.appendChild(c),d.a.addClass(c,'natural-gallery-visible');let e=document.createElement('span');e.textContent='/',a.appendChild(e);let f=document.createElement('span');return d.a.addClass(f,'natural-gallery-total'),a.appendChild(f),this.element=document.createElement('div'),this.filters.forEach(function(a){this.element.appendChild(a.render())},this),d.a.addClass(this.element,'natural-gallery-header'),this.element.appendChild(a),this.element}isFiltered(){return null!==this.collection}filter(){let a=null;this.filters.forEach(function(b){b.isActive()&&(null==a?a=b.collection:a=d.a.intersectionBy(a,b.collection,'id'))}),this.collection=a,this.gallery.refresh()}get collection(){return this._collection}set collection(a){this._collection=a}get element(){return this._element}set element(a){this._element=a}get gallery(){return this._gallery}set gallery(a){this._gallery=a}get filters(){return this._filters}set filters(a){this._filters=a}}b.a=e},function(a,b,c){'use strict';var d=c(0),e=c(1);class f extends e.a{render(){let a=document.createElement('div');d.a.addClass(a,'natural-gallery-searchTerm sectionContainer'),a.appendChild(d.a.getIcon('icon-search')),a.appendChild(this.getInput());let b=document.createElement('label');d.a.addClass(b,'sectionName'),b.textContent='Search',a.appendChild(b);let c=document.createElement('span');return d.a.addClass(c,'bar'),a.appendChild(c),a}getInput(){const a=this;let b=document.createElement('input');return b.setAttribute('required',''),b.addEventListener('keyup',function(b){let c=this;27===b.keyCode&&(c.value=''),a.filter(c.value)}),b}filter(a){this.collection=null;let b=d.a.removeDiacritics(a).toLowerCase();0<b.length&&(this.collection=[],this.header.gallery.getOriginalCollection().forEach(function(a){let c=d.a.removeDiacritics(a.title+' '+(a.description?a.description:'')).toLowerCase();-1!==c.search(b)&&this.collection.push(a)},this)),this.header.filter()}}b.a=f},function(a,b,c){'use strict';var d=c(1),e=c(12),f=c(0);class g extends d.a{constructor(a){super(a),this.header=a,this._categories=[]}set element(a){this._element=a}render(){if(this.prepare(),!this.element){this.element=document.createElement('div'),f.a.addClass(this.element,'natural-gallery-categories sectionContainer');let a=document.createElement('div');f.a.addClass(a,'sectionName'),a.textContent='Categories',this.element.appendChild(a)}let a=this.element.getElementsByTagName('label')[0];return a&&a.parentNode.removeChild(a),this.categories.forEach(function(a){this.element.appendChild(a.render())},this),this.element}prepare(){let a=[];this.header.gallery.categories.forEach(function(b){a.push(new e.a(b.id,b.title,this))},this),this.none=new e.a(-1,'None',this),this.others=new e.a(-2,'Others',this),this.header.gallery.options.showNone&&a.length&&a.push(this.none),this.header.gallery.options.showOthers&&a.length&&a.push(this.others);let b=[];this.header.gallery.getOriginalCollection().forEach(function(c){(!c.categories||c.categories&&0===c.categories.length&&this.header.gallery.options.showNone)&&(c.categories=[this.none]),a.length&&f.a.differenceBy(c.categories,a,'id').length===c.categories.length&&this.header.gallery.options.showOthers&&(c.categories=[this.others]),c.categories.forEach(function(a){b.push(new e.a(a.id,a.title,this))},this)},this),a=f.a.uniqBy(a,'id'),b=f.a.uniqBy(b,'id'),this.categories=a.length?f.a.intersectionBy(a,b,'id'):b}filter(){let a=this.categories.filter(function(a){return a.isActive});if(a.length===this.categories.length)this.collection=null;else if(0===a.length)this.collection=[];else{let b=[];this.header.gallery.getOriginalCollection().forEach(function(c){!c.categories||c.categories&&0===c.categories.length?this.none&&b.push(c):c.categories.some(function(d){let e=a.some(function(a){return d.id===a.id});if(e)return b.push(c),!0})},this),this.collection=b}this.header.filter()}get categories(){return this._categories}set categories(a){this._categories=a}get others(){return this._others}set others(a){this._others=a}get none(){return this._none}set none(a){this._none=a}get element(){return this._element}}b.a=g},function(a,b,c){'use strict';var d=c(0);class e{constructor(a,b,c){this.filter=c,this._isActive=!0,this.id=a,this.title=b}render(){const a=this;this.element=document.createElement('label');let b=document.createElement('input');b.setAttribute('type','checkbox'),b.setAttribute('checked','checked'),b.addEventListener('change',function(){a.isActive=!a.isActive,a.filter.filter()}),this.element.appendChild(b);let c=document.createElement('span');c.textContent=this.title;let e=document.createElement('span');d.a.addClass(e,'label'),e.appendChild(d.a.getIcon('icon-category')),e.appendChild(c),this.element.appendChild(e);let f=document.createElement('span');return d.a.addClass(f,'bar'),this.element.appendChild(f),this.element}get id(){return this._id}set id(a){this._id=a}get title(){return this._title}set title(a){this._title=a}get isActive(){return this._isActive}set isActive(a){this._isActive=a}get element(){return this._element}set element(a){this._element=a}}b.a=e},function(a,b,d){'use strict';d.d(b,'a',function(){return e});var e;(function(a){a.organize=function(a){'natural'===a.options.format?this.organizeNatural(a.collection,a.bodyWidth,a.options.rowHeight,a.options.margin):'square'===a.options.format&&this.organizeSquare(a.collection,a.bodyWidth,a.options.imagesPerRow,a.options.margin),a.style()},a.organizeSquare=function(a,b,d,e){e||(e=0),d||(d=4);let f=(b-(d-1)*e)/d;for(let g,h=0;h<a.length;h++)g=a[h],g.width=c(f),g.height=c(f),g.last=h%d==d-1,g.row=c(h/d)},a.organizeNatural=function(a,b,c,d,e=null){e||(e=0),d||(d=0),c||(c=300);for(let f=1;f<=a.length;f++){let g=a.slice(0,f),h=this.getRowWidth(c,d,g);if(h>=b){this.computeSizes(g,b,d,e),this.organizeNatural(a.slice(f),b,c,d,e+1);break}else if(f===a.length){this.computeSizes(g,null,d,e,c);break}}},a.computeSizes=function(a,b,d,e,f=null){let g=b?this.getRowHeight(b,d,a):f,h=this.getRowWidth(g,d,a),j=b?this.apportionExcess(a,b,h):0,k=0;for(let h=0;h<a.length;h++){let b=a[h],d=this.getImageRatio(b)*g-j;k+=d-c(d),d=c(d),(1<=k||h===a.length-1&&1===Math.round(k))&&(d++,k--),b.width=d,b.height=c(g),b.row=e,b.last=h===a.length-1}},a.getRowWidth=function(a,b,c){return b*(c.length-1)+this.getRatios(c)*a},a.getRowHeight=function(a,b,c){return a/this.getRatios(c)+b*(c.length-1)},a.getRatios=function(a){const b=this;let c=0;for(let d=0;d<a.length;d++)c+=b.getImageRatio(a[d]);return c},a.getImageRatio=function(a){return+a.tWidth/+a.tHeight},a.apportionExcess=function(a,b,c){let d=(c-b)/a.length;return d}})(e||(e={}))},function(){},function(){}])});