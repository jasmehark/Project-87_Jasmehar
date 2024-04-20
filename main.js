
// Create canvas variable"
var canvas = new fabric.Canvas("myCanvas")
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image ,function(Img){
		block_image_object=Img;
		block_image_object.scaleToWidth(140);
		block_image_object.scaleToHeight(150);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		block_x = 100;
		block_y = 50;
		new_image('rr1.png');
		console.log("r");

	}
	if(keyPressed == '71')
	{
		block_x = 300;
		block_y = 250;
		new_image(gr.png);
		console.log("g")
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		block_y = 200;
		new_image(yr.png);
		console.log("y")
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		block_y = 450;
		new_image(pr.png);
		console.log("p")
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		block_y = 700;
		new_image(br.png);
		console.log("b")
	// upload blue ranger
	}
	
}

