import React from 'react';
import BlogInterface from './BlogInterface.js';


const HomePage = (props) =>{

	return(
		<div id="homePage">
		<h1 style={{justifyItems:'center',width:'100%'}}>Welcome to your homepage!!</h1>
	
		<BlogInterface id="blogInterface"/>


		<div id="blogArea">
		</div>


		</div>
	);


}



export default HomePage;
