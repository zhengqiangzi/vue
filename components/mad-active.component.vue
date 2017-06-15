<!-- <template>
	<div>

		<slot :test="test"></slot>
	</div>
</template>
 -->
<script>
	import Vue  from "vue";

	//console.log((Vue.compile("<div><h1>3333</h1></div>").staticRenderFns)[0]())
	export default {

		render(createElement){

				/*return createElement("div",{

					'class': {
					    foo: true,
					    bar: true
					  },

					  attrs:{

					  	guines:"das"
					  },
					  props:{

					  		gear:1
					  },
					  domProps:{

					  	innerHTML:this.test.h1
					  },
					  on:{
					  		click:()=>{

					  			//console.log(this)
					  			this.test.h1=Math.random()*1000000
					  			//this.test.h1="aaaa"
					  		}

					  }

				})*/

				return (<div>
						<input type="text" v-model="m" on-input={ (e)=>{ this.clickHandler(e) } }/>

							<div ref='table'></div>
							<button type="button" onClick={ this.clickHandler } >button</button>

					</div>)

		},

		props:[
				"gear"
		],
		data:function(){


			return {
				test:{

						h1:"i am from child h1",
						h2:"i am from child h2",
						h3:"i am from child h3"
				},
				m:1
			}
		},
		computed:{

				mygear:function(){

						return this.gear;
				}

		},
		mounted:function(){	
			

			//console.log(this.$refs.table)
		},
		methods:{

				clickHandler:function(e){

					console.log(e)
				}
		}


	}

</script>

<style scoped>
	

</style>