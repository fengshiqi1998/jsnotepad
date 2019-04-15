/* exported $dlgSearch */
var $dlgSearch = (function(){
  var init = function() {
    // DOM 绘制
    var DOM = ''
+ '<div class="notepad-search-dlg">'
+ '<div class="dialogbox">'
+ '<div class="titlebar">'
+ '<p class="title">查找</p>'
+ '<span class="btn-close">x</span>'
+ '</div>'
+ '<div class="main">'
+ '<label>查找内容(N):</label>'
+ '<input type="text" class="line-num" autofocus>'
+ '<div class="dob-btn">'
+ '<input type="button" value="查找下一个(F)" class="btn-search" disabled>'
+ '<input type="button" value="取消" class="btn-cancel">'
+ '</div>'
+ '<fieldset>'
+ '<legend>方向</legend>'
+ '<input type="radio" name="direction">向上(U)'
+ '<input type="radio" name="direction" checked="checked">向下(D)'
+ '</fieldset>'
+ '<div class="check-box">'
+ '<input type="checkbox">区分大小写(C)'
+ '<br>'
+ '<input type="checkbox">循环(R)'
+ '</div>'
+ '</div>'
+ '</div>'
+ '</div>';
    var $dlg = $(DOM),
        $lineNum = $dlg.find('.line-num'),
        $btnClose = $dlg.find('.btn-close'),
        $btnCancel = $dlg.find('.btn-cancel');
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});
    // 事件绑定
    $lineNum.keyup(function() {
      if($lineNum.val() === '') {
        $dlg.find('.btn-search').attr('disabled', true);
      } else {
        $dlg.find('.btn-search').removeAttr('disabled');
      }
    })
    $btnClose.click(function() { $dlg.remove(); });
    $btnCancel.click(function(){ $dlg.remove(); });
  };

  return {init: init};
})();
