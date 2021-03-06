{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div id="layout" class="myaccount-layout">
	<header id="site-header" class="myaccount-layout-header {{#if fixedHeader}}fixed-header{{/if}}" data-view="Header"></header>

    <div class="myaccount-layout-breadcrumb" data-view="Global.Breadcrumb" data-type="breadcrumb"></div>

    <div id="main-container" class="myaccount-layout-container  {{#if fixedHeader}}theme-has-fixed-header{{else}}theme-has-static-header{{/if}}">

		<div class="myaccount-layout-error-placeholder"></div>

		<h2 class="myaccount-layout-title">{{translate 'My Account'}}</h2>
		<div class="myaccount-layout-row">
			<nav id="side-nav" class="myaccount-layout-side-nav" data-view="MenuTree"></nav>

			<div id="content" class="myaccount-layout-main"></div>
		</div>

	</div>

	<footer id="site-footer" class="myaccount-layout-footer" data-view="Footer"></footer>

</div>
