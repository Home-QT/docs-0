/*
Copyright 2009 Thaya Kareeson (thaya.kareeson@gmail.com)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// Cycling Fun With Sidebar Tabs
jQuery(document).ready(function($){
  // cycle delay in milliseconds
  var delay = 7500;

  $(".tabbed_sidebar").each(function(){
    var tab_box = this;
    var tab_count = $(tab_box).children(".tab").size();
    var old_tab = 0;
    var max_height = 0;
    var tab_interval = setInterval(function(){
      ret = tab_rotate(tab_box, tab_count, max_height, old_tab, tab_interval);
      old_tab = ret.tab_pos;
      max_height = ret.max_height;
    }, delay);
    $(tab_box).parent().parent().parent().hover(function() {
      if(old_tab > -1){
        clearInterval(tab_interval);
      }
    }, function() {
      if(old_tab > -1){
        tab_interval = setInterval(function(){
          ret = tab_rotate(tab_box, tab_count, max_height, old_tab, tab_interval);
          old_tab = ret.tab_pos;
          max_height = ret.max_height;
        }, delay);
      }
    });
  });

  function tab_rotate(tab_box, tab_count, max_height, old_tab, tab_interval){
    tab_pos = 0;
    $(tab_box).children(".tab").each(function(){
      if($(this).children(".fwTabTitle").hasClass("selected")){
        return false;
      }
      else{
        tab_pos++;
      }
    });
    if(old_tab == tab_pos){
      current_tab = (tab_pos + 1) % tab_count;
      $(tab_box).find(".tab .fwTabTitle:eq(" + current_tab + ")").click();
      tab_height = $(tab_box).next("div").children(".tab-content").height();
      if(tab_height > max_height){
        max_height = tab_height;
      }
      // START: change height to max height
      $(tab_box).find(".tab .tab-content").each(function(){
        $(this).css("height", max_height);
      });
      // END: change height to max height
      return {tab_pos : current_tab, max_height : max_height};
    }
    else{
      clearInterval(tab_interval);
      return {tab_pos : -1, max_height : -1};
    }
  }
});
