<script>
	


export default {

	functional:true,

	render(createElement,context){

		//console.log(context)

			return (

				<div>
						<a href='javascript:void(0)' onClick={()=>{  context.data.attrs.data =3  }}>click</a> 
						<div>{ context.data.attrs.data }</div>

				</div>

				)

	}


}

</script>