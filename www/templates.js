angular.module('yogiApp').run(['$templateCache', function($templateCache) {$templateCache.put('app/views/viewCategory.html','<section id="categoryContent_area" ng-swipe-right="actionSwipeRight($event)">\n<!-- \t<div class="row categoryInfo_bar1" fsm-sticky-header scroll-body="\'#categoryContent_area\'" scroll-stop="80"  ng-style="{\'background-color\': categoryColor}">\n\t\t<div class="col-xs-4 navTxtTopPadding"><a  id="back_main" href="#home" ng-style="{\'color\': white}" >Back</a></div>\n\t\t<div class="col-xs-4 navTxtTopPadding txtCenter"><span id="category_title" >{{categoryTitle}}</span></div>\n\t\t<div class="col-xs-4 txtCenter">\n\t\t\t<div class="btn-group btn-toggle pull-right imgbtn1">\n\t\t\t\t<button class="btn btn-primary btn-xs active" id="show_images_cat" ng-click="showImages(\'show_images_cat\', \'hide_images_cat\')">Images</button>\n\t\t\t\t<button class="btn btn-default btn-xs" id="hide_images_cat" ng-click="hideImages(\'hide_images_cat\',\'show_images_cat\')">Text</button>\n\t\t\t</div>\n\t\t</div>\n\t</div> -->\n\t<div class="categoryInfo_bar1"   ng-style="{\'background-color\': categoryColor}">\n\t \t<div class="imageTextBtn1 textcenter"> <span id="category_title" >{{categoryTitle}}</span> </div>\n\t\t<div class="imageTextBtn1 ">\n\t\t\t<div class="btn-group btn-toggle pull-right">\n\t\t\t\t<button class="btn btn-xs" ng-class="{\'btn-primary active\': !isTextOnly}" id="show_images_home" ng-click="toggleTextMode(false)">Images</button>\n\t\t\t\t<button class="btn btn-xs" ng-class="{\'btn-primary active\': isTextOnly}" id="hide_images_home" ng-click="toggleTextMode(true)" >Text</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="imageTextBtn1 backbtn">\n\t\t\t\t<a  id="back_main" href="" ng-click="backBtn()" ng-style="{\'color\': white}" >\n\t\t\t\tBack</a>\n\t\t\t</div>\n\t</div>\n\t<div class="clearFix"></div>\n\t\n\t\n\t<!-- <div class="row categoryInfo_bar"  ng-style="{\'background-color\': categoryColor}">\n\t\t<div class="col-sm-4 " >\n\t\t\t<div class="col-sm-12" >\n\t\t\t\t<span id="category_title" >{{categoryTitle}}</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t -->\n\t<div class="row" id="showImages"  style="margin:0px;">\n\t\t<div class="form-group">\n\t\t\t<div class="col-xs-12 col-md-6 col-sm-6 col-lg-6 categoryDataandTime" style="padding: 5px;">\n\t\t\t\t<p ng-show="lastUpdatedTime != null" id="updateDateandTime">Last Updated on {{lastUpdatedTime}}</p>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n\t<div class="container-fluid1">\n\t\t<div class="row" id="newsContent_area" > \n\t\t\t<div ng-if="noData == true" class="nodata">No Data Available. Please check the internet connect and try again.</div>\n\t\t\t<div ng-repeat="data in categoryData" ng-swipe-left="actionSwipeLeft($event, data, $index)" class="col-xs-6 col-sm-4 col-md-4 col-lg-3 thumb" >\n\t\t\t\t<div class="panel panel-default flex-col" ng-style="{\'border-color\': categoryColor}" ng-click="selectNews(data,$index)">\n\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t<div class="image_categories">\n\t\t\t\t\t\t\t<h4 ng-if="isTextOnly" class="news-title text-left cat-para">{{data.description}}\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<img ng-if="!isTextOnly" class="news_images img-responsive" ng-src="{{data.image.sort}}" />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="panel-body flex-grow newscontent" dotdotdot >\n\t\t\t\t\t\t<!--<div class="news_caption ">-->\n\t\t\t\t\t\t\t<!--<span class="news_categories_title" data-ellipsis data-ellipsis-symbol="&#45;&#45;">-->\n\t\t\t\t\t\t\t<p class="title-news-item">{{data.title}}</p>\n\t\t\t\t\t\t\t<!--</span>-->\n\t\t\t\t\t\t<!--</div>-->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<!-- <div ng-if="!noData" id="btnViewMore"><button class="btn btn-primary width100" ng-click="viewMore()">View More</button></div> -->\n\t\t</div>\n\t</div>\n</section>\n<script>\n/*  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');*/\n\n  \n</script>');
$templateCache.put('app/views/viewDetail.html','<section ng-cloak id="detailContent_area" ng-class="{\'noPreventDefault\': viewMode == \'full\' || devicePlatform == \'Android\' }"  \n\tng-swipe-right="actionSwipeRight($event)" \n\tng-swipe-left="actionSwipeLeft($event)" \n\tng-swipe-up="actionSwipeUp()" \n\tng-swipe-down="actionSwipeDown()"\n\tng-click="showShare(false, $event)"> <!--  -->\n\t<div class="categoryInfo_bar1" ng-style="{\'background-color\': detailsData.colorCode}" >\n\t\t<div class="imageTextBtn1 textcenter "> <span id="category_title" >{{categoryTitle}}</span> </div>\n\t\t<div class="imageTextBtn1" >\n\t\t\t<div class="btn-group btn-toggle pull-right">\n\t\t\t\t<button class="btn btn-xs" ng-class="{\'btn-primary active\': !isTextOnly}" id="show_images_home" ng-click="toggleTextMode(false)">Images</button>\n\t\t\t\t<button class="btn btn-xs" ng-class="{\'btn-primary active\': isTextOnly}" id="hide_images_home" ng-click="toggleTextMode(true)" >Text</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="imageTextBtn1 backbtn">\n\t\t\t\t<a  id="back_main"  ng-click="actionSwipeRight()" ng-style="{color:white}" >\n\t\t\t\tBack</a>\n\t\t\t</div>\n\t</div>\n\t\t<div class="panel panel-default flex-col" ng-class="{\'mode-minimize\': viewMode == \'minimize\', \'mode-full\': viewMode == \'full\'}" ng-style="{\'border-color\': detailsData.colorCode}">\n\n\t\t\t<div ng-if="noData == true" class="nodata">No Data Available. Please try again.</div>\n\t\t\t<div class="panel-heading" id="detail_heading"  >\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="col-xs-12 col-sm-12  col-md-12 col-lg-12 " style="color: #000;">\n\t\t\t\t\t\t<h4 ng-cloak class="detailPageTitle">{{title}}</h4>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="panel-body content-details" id="detail_content" >\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="col-sm-11 col-md-11 col-lg-12"  id="category_image"  >\n\t\t\t\t\t\t<div ng-if="!slides" class="container-image">\n\t\t\t\t\t\t\t<img ng-if="!isTextOnly" class=" img-responsive detail-images" ng-src="{{imageLink || \'//:0\' }}" rel="prettyPhoto" />\n\t\t\t\t\t\t\t<div  ng-show="videoLink" class="overlay-videolink" ng-click="showModal()">\n\t\t\t\t\t\t\t\t<i class="fa fa-play-circle-o" aria-hidden="true"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<slick  settings="slickConfig" ng-if="slickConfigLoaded && slides && !isTextOnly">\n\t\t\t\t\t\t\t<div class="slide-main" ng-repeat="slide in slides.url ">\n\t\t\t\t\t\t\t\t<div class=" response-img">\n\t\t\t\t\t\t\t\t\t<div class="container-img-slide">\n\t\t\t\t\t\t\t\t\t\t<img ng-src="{{slide}}" width="100%">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</slick>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\t\n\t\t\t\t\t<div class="col-sm-11 col-md-11 col-lg-12" style="padding-top:10px;" >\n\t\t\t\t\t\t<p ng-cloak>{{newsContent}} </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class=" panel-date ">\n\t\t\t\t\t\t<div class="col-xs-9 col-md-9 col-lg-9">\n\t\t\t\t\t\t\t<a href="{{sourceLink}}" target="_blank"> {{ source }} </a>\n\t\t\t\t\t\t\t<span ng-show="newsDate != null">Last Updated on {{newsDate}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-2 pull-right share-btn-container">\n\t\t\t\t\t\t\t<div class="share-toggle" ng-click="showShare(true, $event)"><i class="fa fa-share-square-o" aria-hidden="true"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="view-more-block">\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="col-xs-offset-4 col-xs-4 text-center">\n\t\t\t\t\t\t\t<i class="fa fa-arrow-circle-o-right more-icon" aria-hidden="true" ng-click="changeViewMode(\'full\')"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-4 pull-right share-btn-container text-right">\n\t\t\t\t\t\t\t<div class="share-toggle" ng-click="showShare(true, $event)"><i class="fa fa-share-square-o" aria-hidden="true"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<div class="share-group" ng-class="{\'active\': shareToggle}">\n\t\t<div class="row share-btn">\n\t\t\t<div class="col-sm-11 col-md-11 col-lg-12">\n\t\t\t\t<div class="list-btn-share">\n\t\t\t\t\t<div class="social social-fb" ng-click="share(\'facebook\',title, detailsData.link , detailsData.share)">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="social social-whatsapp" ng-click="share(\'whatsapp\', title, detailsData.link, detailsData.share)">\n\t\t\t\t\t</div>\n<!-- \t\t\t\t\t<div>\n\t\t\t\t\t\t<a href="whatsapp://send?text=http://www.newsyogi.com/images/testshare.png">Hello, world!</a>\t\t\t\t\t\t\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n<!-- \t<div class="navigation-news" >\n\t\t<div class="nav-next nav-button"\n\t\t\t ng-show="navbarShow.next"\n\t\t\t ng-click="changeNews(\'next\')"\n\t\t\t ></div>\n\t\t<div class="nav-prev nav-button"\n\t\t\t ng-click="changeNews(\'prev\')"\n\t\t\t ng-show="navbarShow.prev"\n\t\t\t ></div>\n\t</div> -->\n\t<div class="video-modal" ng-if="videoLink" ng-show="videomodal">\n\t\t<div class="center-container">\n\t\t\t<div class="close-modal" ng-click="hideModal()">\n\t\t\t\t<i class="fa fa-times" aria-hidden="true"></i>\n\t\t\t</div>\n\t\t\t<iframe ng-if="videomodal" id="ytplayer" type="text/html" width="100%" height="222"\n\t\t\t\t\tng-src="{{videoLink}}"\n\t\t\t\t\tframeborder="0"/>\n\t\t</div>\n\t</div>\n<script>\n  /*(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n*/\n</script>\n');
$templateCache.put('app/views/viewFooter.html','<footer id="footer" class="foot">\n\t<div class="container">\n\t\t<div class="row">\n\t\t\t<div class="col-sm-6">\n\t\t\t\t&copy; 2015. All Rights Reserved.\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n');
$templateCache.put('app/views/viewHeader.html','<header class="navheader " role="banner" ng-swipe-right="actionSwipeRight($event)">\n\t<nav class="navbar navbar-main navbar-inverse navbar-fixed-top">\n\t\t<div class="container-fluid">\n\t\t\t<div class="navbar-header">\n\t\t\t\t<button type="button" class="navbar-toggle collapsed menu-button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n\t\t\t\t\t<span class="sr-only">Toggle navigation</span>\n\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t</button>\n\t\t\t\t<!-- <button class="refresh-button" ng-click="refresh()">Refresh</button> -->\n\t\t\t\t<img class="refresh-button" ng-click="refresh()" ng-src="images/reload.png" alt="refresh"></img>\n\t\t\t\t<a class="navbar-brand" href="#/home" data-target="#home" id="logo" alt="logo"></a>\n\t\t\t</div> \n\t\t\t\n\t\t\t\n\t\t \t<div id="navbar" class="navbar-collapse collapse navbar-right">\n\t\t\t\t<ul class="nav navbar-nav">\n\t\t\t\t\t<li ng-repeat="data in headerData" ng-style="{\'background-color\': data.colorCode}" >\n\t\t\t\t\t\t<a href="" ng-click="selectCategory(data)">{{data.displayName}}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!--<li ng-repeat="data in headerData" class="divider"></li> // Commented this line creating empty lines-->\n\t\t\t\t\t<li class="dropdown" id="menu_categories" ng-show="showMoreCategories">\n\t\t\t\t\t\t<a href="#/" data-target="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">More Categories <span class="caret"></span></a>\n\t\t\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t\t\t<li ng-repeat="data in moreCategories" class="{{data.idName}}">\n\t\t\t\t\t\t\t\t<a href="" ng-click="selectCategory(data)">{{data.displayName}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n\n\t<!-- <nav>\n        <ul class="list-unstyled main-menu">\n          <li><a href="#">Menu One <span class="icon"></span></a></li>\n          <li><a href="#">Menu Two <span class="icon"></span></a></li>\n          <li><a href="#">Menu Three <span class="icon"></span></a></li>\n          <li><a href="#">Dropdown</a>\n            <ul class="list-unstyled">\n                <li class="sub-nav"><a href="#">Sub Menu One <span class="icon"></span></a></li>\n                <li class="sub-nav"><a href="#">Sub Menu Two <span class="icon"></span></a></li>\n                <li class="sub-nav"><a href="#">Sub Menu Three <span class="icon"></span></a></li>\n                <li class="sub-nav"><a href="#">Sub Menu Four <span class="icon"></span></a></li>\n                <li class="sub-nav"><a href="#">Sub Menu Five <span class="icon"></span></a></li>\n            </ul>\n          </li>\n          <li><a href="#">Menu Four <span class="icon"></span></a></li>\n          <li><a href="#">Menu Five <span class="icon"></span></a></li>\n        </ul>\n      </nav>\n          \n    <div class="navbar navbar-inverse navbar-fixed-top">      \n        \n        \n        <a class="navbar-brand" href="#home" id="logo" alt="logo"></a>\n        <div class="navbar-header pull-right">\n          <a id="nav-expander" class="nav-expander fixed">\n            <i class="fa fa-bars fa-lg white"></i>\n          </a>\n        </div>\n    </div> -->\n\n</header>');
$templateCache.put('app/views/viewHome.html','<div class="container-fluid main-home-class" ng-show="isMainScreen" style="background-color: rgb(216,237,248)">\n\t<div ng-if="noData == false"  class="row categoryInfo_bar">\n\t\t<!-- <div class="col-xs-6 navTxtTopPadding" id="index_breakingNews"><h4 style="font-weight: bold;">Breaking News</h4></div> -->\n\t\t<div class="navTxtTopPadding" id="index_breakingNews"><h4 style="font-weight: bold;">HIGHLIGHTS</h4></div>\n\t\t<div class="txtCenter floatR"  >\n\t\t\t\t<div class="btn-group btn-toggle pull-right marginT8">\n\t\t\t\t\t<button class="btn btn-xs" ng-class="{\'btn-primary active\': !isTextOnly}" id="show_images_home" ng-click="toggleTextMode(false)">Images</button>\n\t\t\t\t\t<button class="btn btn-xs" ng-class="{\'btn-primary active\': isTextOnly}" id="hide_images_home" ng-click="toggleTextMode(true)" >Text</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="clearFix"></div>\n\t<section id="main-slider" ng-show="isMainScreen" class="row no-margin main-home-class" >\n\t\t<div class="container-fluid">\n\t\t\t<div class="row" id="carousel-row" >\n\t\t\t\t<div class="col-lg-12 col-md-12" style="padding: 0px;margin: 0px;">\n                    <div class="resp-slick-slide" ng-class="{\'text-mode\': isTextOnly}">\n                        <slick class="slick-main home-page" settings="slickConfig" ng-if="slickConfigLoaded">\n                            <div class="slide-main" ng-repeat="data in breakingNews track by $index">\n                                <div class=" response-img">\n                                \t<div class="bgImageContainer" ng-style="{\'background-image\': \'url({{data.image.sort}})\'}">\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class="container-img-slide">\n                    \t\t\t\t\t<div ng-if="isTextOnly" class="news-title">\n\t\t\t\t\t\t\t\t\t\t\t<p class="text-left news-para">{{data.description}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n                                        <img ng-if="!isTextOnly" ng-src="{{data.image.sort}}" width="100%">\n                                    </div>\n                                </div>\n                                <h4 class="pos-abs" ng-bind-html="deliberatelyTrustDangerousSnippet(data.title)" ng-click="selectNewsItem(data,$index)"></h4>\n                            </div>\n                        </slick>\n                    </div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n<section id="categorynews_area" class="row mainContent" >\n\t<div ng-if="noData == true" class="nodata">No Data Available. Please check the internet connect and try again.</div>\n\t<div ng-repeat="data in homePagedata" class="col-xs-6 col-sm-4 col-md-4 col-lg-3 thumb news_click column" ng-click="selectNews(data, $index)" >\n\t\t<div class="category_container" ng-style="{\'background-color\': data.colorCode}">\n\t\t\t<!-- <span class="col-xs-5 col-sm-5 col-md-5 col-lg-8"></span> -->\n\t\t\t<span class="news_categoryType" >\n\t\t\t  <a >{{data.displayName}}</a>\n\t\t\t</span>\n\t\t\t<div class="news_image_categoryType">\n\t\t\t\t<div ng-if="isTextOnly" class="news-title">\n\t\t\t\t\t<p class="text-left news-para">{{data.description}}</p>\n\t\t\t\t</div>\n\t\t\t\t<img ng-if="!isTextOnly" class="news_images_home img-responsive" ng-src="{{data.image.sort}}" />\n\t\t\t\t<div class="col-xs-10 col-sm-10  col-md-10 text-left index_news_caption"  dotdotdot>\n\t\t\t\t\t<span>{{data.title}}</span>\n\t\t\t\t\t<!-- <p style="height:30px; word-wrap: break-word;" class="ellipsisTxt" >Hokey Pokey ice cream review: It\u2019s all about funky wordplay and an immersive experience</p> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>');}]);