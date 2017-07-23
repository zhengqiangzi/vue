<template>
		
		<div>
			<div class="block">

		    <carousel :auto="3000" :watch-items="list">

		        <carousel-item tag="div" style="height:160px;border-bottom:1px solid #ccc;" v-for="(item, index) in list" :key="index">
		           <img src="image/1.jpg?rand=1" alt="" style="max-width:100%;height:auto">
		        </carousel-item>

    		</carousel>



			</div>

				
			<div class="row" >
				
				<div class="col-xs-4 col-sm-4 one-block-container" v-for="item in data">
						<one-block>
							<router-link :to="'/list/'+item.id">
								<span :class="'glyphicon icon ' + item.icon " ></span>
							</router-link>			
							<span slot="title">{{item.title}}</span>			
						</one-block>
				</div>


			</div>














		</div>

</template>

<script>
	import Vue from 'vue'
	import oneBlock from './ch-one-block.component.vue';
	Vue.component("one-block",oneBlock)
	import { Carousel, CarouselItem } from 'vue-l-carousel'
	import 'vue-l-carousel/dist/main.css'

	export default {

		data:function(){

			return {

			 	auto: 3000,
           	 	list: [
	                {
	                    url: 'url1'
	                },
	                {
	                    url: 'url2'
	                },
	                {
	                    url: 'url3'
	                },
	            ]
			}
		},
		computed:{

			data:function(){

				return this.$store.state.info
			}

		},

	 components: {
      		  'carousel': Carousel,
       		 'carousel-item': CarouselItem
   		 }

	}

</script>

<style scoped>

  .one-block-container{
  	display: flex;
  	align-items: center;
  	justify-content: center;
  }
	.row{
		margin:20px 0px 20px 0px;
	}
	.block{
		width: 100%;
		overflow: hidden;
		margin-bottom: 30px;
	}

</style>