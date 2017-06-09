<template>
		
	<div>
	
		<form>
			
			<input type="text" v-model="user.name"><br>
			<input type="number" v-model="user.age"><br>
			<input type="radio" value="1" v-model="user.sex" name="sex">男
			<input type="radio" value="2" v-model="user.sex"  name="sex">女<br>

			<input type="checkbox" value="1" v-model="user.hob">跳舞
			<input type="checkbox" value="2" v-model="user.hob">唱哥
			<input type="checkbox" value="3" v-model="user.hob">跑步
			<input type="checkbox" value="4" v-model="user.hob">游泳
			<input type="checkbox" value="5" v-model="user.hob">游戏
			<input type="checkbox" value="6" v-model="user.hob">溜冰
			<input type="checkbox" value="7" v-model="user.hob">看书

			<br>
			<select v-model="user.provice" multiple>
				
				<option value="ah">anhui</option>
				<option value="sh">shanghai</option>
				<option value="sh1">shanghai1</option>
				<option value="sh2">shanghai2</option>
				<option value="sh3">shanghai3</option>

			</select>
		</form>
			

			<p>
				
				{{user}}
			</p>
	</div>
</template>

<script>
	
export default {



	data:function(){

		return {

				user:{

						name:"johnny",
						age:21,
						sex:1,
						hob:[1,2,3,4],
						provice:["ah"]
				}

		}
	}


}


</script>

<style scope>
		.g{
				width:100%;
				border:1px solid rgba(123,123,123,.5);
				overflow: hidden;
		}

</style>