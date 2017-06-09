<template>

	<div class="g">
			{{a}}+1={{a2}}
			<button @click="addHandler">+</button>
		
	
		{{t}}
		<template v-if="t">
			
				<p>you were saw me</p>
				<p>time-up</p>

		</template>


		<p v-if="!t">see me your will be</p>
		<p v-else>hahah</p>


		<ul>
			<li v-for="(item,index) in users" @click="selectUserHandler(item)">
				
					{{index+1}}==========>{{item.name}}

			</li>
		</ul>
		

		<p>user themes</p>

		<span v-for="items in currentUser">
				
				{{items}}

		</span>
		
		<p>
			
		<button @click="addUserHandler">add new user</button>
		</p>
	

	</div>

</template>

<script>

module.export {

	props:["t"],

	data:()=>{

		return {
				a:1,
				users:[
						{name:"lily1",age:23,sex:"女",address:"shanghai hupu"},
				

				],
				currentUser:null
		}

	},
	computed:{

		a2:function(){

			return this.a+1

		}

	},
	methods:{

		addHandler:function(){

			this.a++
		},
		addUserHandler:function(){

			this.users.push({name:'lily'+Math.ceil(Math.random()*10),age:(10+Math.ceil(Math.random()*15)),sex:"女",address:"shanghai hupu"})

			this.$emit("dc",this.users)
		},
		selectUserHandler:function(data){

			this.currentUser=data
		}
	},
	watch:{

		a:function(newvalue,oldvalue){

		}


	}

}
</script>

<style scoped>
		.g{
				width:100%;
				border:1px solid #ff00ff;
				overflow:hidden;
		}

</style>