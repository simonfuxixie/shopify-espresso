function SubMenu(){this.ToggleDropdownWindow=function(o,n){var e="#prods_"+o;$(e).is(":visible")?$(".dropDownBoxContainer").removeClass("visible"):($(".dropDownBoxContainer").addClass("visible"),$(".dropDownBoxContainer .dropDownBox:not(#prods_"+o+")").hide()),$(e).fadeToggle(),$(".dropDownBoxContainer").hasClass("visible")&&null==n&&$("html,body").animate({scrollTop:$(".dropDownBoxContainer").offset().top-5},500),null!=n&&$("html,body").animate({scrollTop:$(n).parent().parent().parent().find(".addonBrowser").offset().top-130},100)}}var SubMenu=new SubMenu;