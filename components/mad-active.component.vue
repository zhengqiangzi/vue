 <template>
	<div class="javi">
				

				<div>
					{{$store.state.pageA.num}}  
					
				</div>
				
				<hr>

				<button class='btn btn-success' @click="clickHandler">+(delay 1s)</button>
				<button class='btn btn-success' @click="addNow">+</button>

				<hr>

				<button class='btn btn-success' @click="subHandler">-(delay 1s)</button>
				<button class='btn btn-success' @click="subNow">-</button>



				<hr>

				<vue-form :state="formstate" @submit.prevent="onSubmit">
					<validate tag="div">
					      <span>Name *</span>
					      <input v-model="model.name"  type="text" required name="name"  :my-custom-validator="model"/>

					      <field-messages name="name">
					        <div slot="required">Name is a required field</div>
					        <div slot="my-custom-validator">not same </div>
					      </field-messages>
					</validate>

					<validate tag="div">
					      <span>repeat Name *</span>
					      <input v-model="model.rname"  type="text" required name="rname"  :my-custom-validator="model"/>
					      <field-messages name="rname">
					        <div slot="required">Name is a required field</div>
					        <div slot="my-custom-validator">not same </div>
					      </field-messages>
					</validate>


					<validate tag="div">
						
							<div v-model="model.rawtext" name="rawtext" @click="changeHandler" bigger-than="0.5" >CHANGE  --  {{ model.rawtext }}</div>
					
					      <field-messages name="rawtext">
					        <div slot="bigger-than">too small </div>
					      </field-messages>
					</validate>




					</validate>


		   		 	<button type="submit">Submit</button>

		   		 	{{model}}
					<hr>
					{{formstate}}
				</vue-form>

	</div>
</template>

<script>
	import Vue  from "vue";

	export default {


		data:function(){

			return {
					formstate: {},
					model:{

						name:"",
						rname:"",
						rawtext:"2222"
					}
			}
		},
		methods:{

				clickHandler:function(){

					this.$store.dispatch("pageA/addDelay");
					this.$emit("addevent")
				},
				addNow:function(){

						this.$store.commit("pageA/add")
				},
				subHandler:function(){
					this.$store.dispatch("pageA/subscDelay");


				},
				subNow:function(){

						this.$store.commit("pageA/subsc")
				},
				onSubmit:function(){

					console.log(this.formstate)
				},
				changeHandler:function(){

					this.model.rawtext=Math.random()


				}
		}
	


	}

</script>

<style scoped>

	.javi{

			background-color:rgba(123,123,123,.5);
			padding:10px;
			border-radius: 5px;
			margin-top: 30px;


	}

	.javi *{
			margin:10px;
	}
	.javi *:first-child{
			color:green;
			font-size:30px;
			line-height: 23px;

	}

</style>