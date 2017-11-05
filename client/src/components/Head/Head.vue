<template>
	<div>
		<nav class="navbar navbar-default visible-xs trimmerwork-nav">
			<div class="container-fluid">
				<router-link to="/" class="pull-left trimmerwork-nav__leaf-link">
					<img src="../../../static/images/trimmerwork-leaf.svg" alt="TrimmerWork Leaf Logo" class="trimmerwork-nav__leaf-link__image">
				</router-link>
	      <ul class="nav navbar-nav">
	        <li class="post pull-right trimmerwork-nav__post">
	        	<router-link to="/choose-form" class="trimmerwork-nav__post__link">
					  	<i class="fa fa-plus" aria-hidden="true"></i>
					  	JOB/RESUME
	        	</router-link>
	        </li>
	        <li class="pull-right">
	        	<router-link class="trimmerwork-nav__about" to="/about">
					  	ABOUT
	        	</router-link>
	        </li>
	      </ul>
			</div>
		</nav>
		<h3 class="trimmerwork-mobile-mission visible-xs">An Open Job Board for the Cannabis Community</h3>
		<header class="trimmerwork-header hidden-xs">
			<router-link to="/">
				<img class="trimmerwork-header__leaf" src="../../../static/images/trimmerwork-leaf.svg" alt="TrimmerWork Leaf">
			</router-link>
			<h3 class="trimmerwork-header__mission">An Open Job Board for the Cannabis Community</h3>
		</header>
	</div>
</template>

<style lang="scss" src="./Head.scss" scoped></style>