/**
 * HideSeek jQuery plugin
 *
 * @copyright Copyright 2015, Dimitris Krestos
 * @license   Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link      http://vdw.staytuned.gr
 * @version   v0.6.2
 *
 * Dependencies are include in minified versions at the bottom:
 * 1. Highlight v4 by Johann Burkard
 *
 */

/* Sample html structure

  <input name="search" placeholder="Start typing here" type="text" data-list=".list">
  <ul class="list">
    <li>item 1</li>
    <li>...</li>
    <li><a href="#">item 2</a></li>
  </ul>

  or

  <input name="search" placeholder="Start typing here" type="text" data-list=".list">
  <div class="list">
    <span>item 1</span>
    <span>...</span>
    <span>item 2</span>
  </div>

  or any similar structure...

  */

;(function($, window, undefined) {
    "use strict";

    $.fn.hideseek = function(options) {

        var defaults = {
            list:           '.hideseek-data',
            nodata:         '',
            attribute:      'text',
            highlight:      false,
            ignore:         '',
            navigation:     false,
            ignore_accents: false,
            hidden_mode:    false
        };

        var options = $.extend(defaults, options);

        return this.each(function() {

            var $this = $(this);

            $this.opts = [];

            $.map( ['list', 'nodata', 'attribute', 'highlight', 'ignore', 'navigation', 'ignore_accents', 'hidden_mode'], function( val, i ) {
                $this.opts[val] = $this.data(val) || options[val];
            } );

            var $list = $($this.opts.list);

            if ($this.opts.navigation)  $this.attr('autocomplete', 'off');

            if ($this.opts.hidden_mode) $list.children().hide();

            $this.keyup(function(e) {

                if (e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 13) {

                    var q = $this.val().toLowerCase();

                    $list.children($this.opts.ignore.trim() ? ":not(" + $this.opts.ignore + ")" : '').removeClass('selected').each(function() {

                        var data = ($this.opts.attribute != 'text') ? $(this).attr($this.opts.attribute).toLowerCase() : $(this).text().toLowerCase();

                        if($(this).data('filter')){
                            data = data + $(this).data('filter').toLowerCase();
                        }

                        var filterType = true;
                        var filterCategory = true;

                        var liItem = $(this);


                        if($(".filter-type:checked").val()){
                            filterType = false;
                            $(".filter-type:checked").each(function(){
                                if(liItem.data($(this).val()) == 1){
                                    //console.log('Data-fulter-type: '+liItem.data($(this).val()));
                                    filterType = true;
                                }
                            });
                        }

                        if($(".filter-value:checked").val()){
                            filterCategory = false;
                            $(".filter-value:checked").each(function(){
                                if(liItem.data($(this).data('filter-value'))){
                                    var str = liItem.data($(this).data('filter-value'));
                                    //console.log(str);
                                    if(str.indexOf($(this).val()+'|') != -1){
                                        filterCategory = true;
                                    }
                                }
                            });
                        }


                        var treaty = data.removeAccents($this.opts.ignore_accents).indexOf(q) == -1 || q === ($this.opts.hidden_mode ? '' : false)



                        if(!treaty && filterType && filterCategory){
                            var mostra = true;
                        }else{
                            var mostra = false;
                        }


                        //console.log('mostra: ' + mostra);

                        if (!mostra) {

                            $(this).hide();

                            $this.trigger('_after_each');

                        } else {

                            $this.opts.highlight ? $(this).removeHighlight().highlight(q).show() : $(this).show();

                            $this.trigger('_after_each');

                        }

                    });

                    // No results message
                    if ($this.opts.nodata) {

                        if (!$list.children('li:not([style*="display: none"])').length) {
                            $('.no-results').show();
                        }else{
                            $('.no-results').hide();
                        }

                    }

                    $this.trigger('_after');

                };

                // Navigation
                function current(element) {
                    return element.children('.selected:visible');
                };

                function prev(element) {
                    return current(element).prevAll(":visible:first");
                };

                function next(element) {
                    return current(element).nextAll(":visible:first");
                };

                if ($this.opts.navigation) {

                    if (e.keyCode == 38) {

                        if (current($list).length) {

                            prev($list).addClass('selected');

                            current($list).last().removeClass('selected');

                        } else {

                            $list.children(':visible').last().addClass('selected');

                        };

                    } else if (e.keyCode == 40) {

                        if (current($list).length) {

                            next($list).addClass('selected');

                            current($list).first().removeClass('selected');

                        } else {

                            $list.children(':visible').first().addClass('selected');

                        };

                    } else if (e.keyCode == 13) {

                        if (current($list).find('a').length) {

                            document.location = current($list).find('a').attr('href');

                        } else {

                            $this.val(current($list).text());

                        };

                    };

                };

            });

        });

    };

    $(document).ready(function () { $('[data-toggle="hideseek"]').hideseek(); });

})(jQuery);

/*

highlight v4

Highlights arbitrary terms.

<http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html>

MIT license.

Johann Burkard
<http://johannburkard.de>
<mailto:jb@eaio.com>

*/
jQuery.fn.highlight=function(t){function e(t,i){var n=0;if(3==t.nodeType){var a=t.data.removeAccents(true).toUpperCase().indexOf(i);if(a>=0){var s=document.createElement("mark");s.className="highlight";var r=t.splitText(a);r.splitText(i.length);var o=r.cloneNode(!0);s.appendChild(o),r.parentNode.replaceChild(s,r),n=1}}else if(1==t.nodeType&&t.childNodes&&!/(script|style)/i.test(t.tagName))for(var h=0;h<t.childNodes.length;++h)h+=e(t.childNodes[h],i);return n}return this.length&&t&&t.length?this.each(function(){e(this,t.toUpperCase())}):this},jQuery.fn.removeHighlight=function(){return this.find("mark.highlight").each(function(){with(this.parentNode.firstChild.nodeName,this.parentNode)replaceChild(this.firstChild,this),normalize()}).end()};

// Ignore accents
String.prototype.removeAccents = function(enabled) {
    if (enabled) return this
        .replace(/[Ã¡Ã Ã£Ã¢Ã¤]/gi,"a")
        .replace(/[Ã©Ã¨Â¨Ãª]/gi,"e")
        .replace(/[Ã­Ã¬Ã¯Ã®]/gi,"i")
        .replace(/[Ã³Ã²Ã¶Ã´Ãµ]/gi,"o")
        .replace(/[ÃºÃ¹Ã¼Ã»]/gi, "u")
        .replace(/[Ã§]/gi, "c")
        .replace(/[Ã±]/gi, "n");
    return this;
};