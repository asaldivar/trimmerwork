<template>
	<div>
		<nav class="navbar navbar-default visible-xs trimmerwork-nav">
			<div class="container-fluid">
				<router-link to="/" class="pull-left trimmerwork-nav__leaf-link">
					<img src="../../../static/images/trimmerwork-leaf.svg" alt="TrimmerWork Leaf Logo" class="trimmerwork-nav__leaf-link__image">
				</router-link>
	      <ul class="nav navbar-nav">
	        <li class="post pull-right">
	        	<router-link to="/choose-form">
					  	<i class="fa fa-plus" aria-hidden="true"></i>
					  	JOB/RESUME
	        	</router-link>
	        </li>
	        <li class="pull-right">
	        	<router-link class="about-link" to="/about">
					  	ABOUT
	        	</router-link>
	        </li>
	      </ul>
			</div>
		</nav>
		<header class="trimmerwork-header hidden-xs">
			<router-link to="/">
				<img class="trimmerwork-header__leaf" src="../../../static/images/trimmerwork-leaf.svg" alt="TrimmerWork Leaf">
			</router-link>
			<h3 class="trimmerwork-header__mission">An Open Job Board for the Cannabis Community</h3>
		</header>
	</div>
</template>

<style lang="scss" src="./Head.scss" scoped></style>