var canvas= new fabric.Canvas("myCanvas");
var player_x = 12;
var player_y = 200;
var block_width = 30;
var block_height = 30;
var player_object = "";
var block_object = "";

function update_player(){
    fabric.Image.fromURL("Thor.png", function (kaan){
        player_object=kaan;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    }); 
}

function update_block(new_image){
    fabric.Image.fromURL(new_image, function (kaan){
        block_object=kaan;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_object);
    }); 
}