import React, { useState }  from 'react';


const submitBlog = () =>{



}




const BlogInterface = () =>{

	const[blogText, setBlogText] = useState('');

	const handleTextChange = (event) =>{
		setBlogText(event.target.value);
	}
	
	const submitBlog = () =>{
		console.log(blogText)
	}

	return(<div id="blogInterface">

		<textarea 
		value={blogText}
		onChange={handleTextChange}
		style={{width:'60%', height:'30vh'}}
		placeholder="Hows your project going?">
		</textarea>
		
		<button onClick={submitBlog}
		style={{height:'40%', alignSelf:'center', marginLeft: '2vw'}}>
		Hey
		</button>

	</div>
	)
}

export default BlogInterface;
