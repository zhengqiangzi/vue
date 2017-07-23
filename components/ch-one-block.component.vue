<template>
	
	<div class="one-block">
		<div class="one-block-tag">
			
			<slot></slot>
		</div>

		<div class="one-block-title" >
			
			<slot name="title"></slot>
		</div>
	</div>

</template>

<script>
	

</script>

<style>
		.one-block{

			width: 100%;
			overflow: hidden;
		}

		.one-block-tag{

			width:100%;
			height:90px;
			background-color:rgba(0,0,0,.7);
			color:#ffffff;
			font-size: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 10px;
		}
		.one-block-tag a{
			color:#fff;
			display: block;
			width: 100%;
			height:90px;
			display: flex;
			align-items: center;
			justify-content: center;

		}
		.one-block-title{
			width: 100%;
			overflow: hidden;
			text-align: center;
			padding: 5px 0px 5px 0px;
		}

</style>