var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var Intent = android.content.Intent;
var Uri = android.net.Uri;
var Switch = android.widget.Switch;
var GUI;
var menu;

var version = "0.1";
var name = "BetaHack";
var authers = "TylerGamesTV";

var tapspam = false;
var tapbreak = false;
var gamemode = false;
var info = false;

var getMode = Level.getGameMode();
if(getMode="0")gamemode = false;
if(getMode="1")gamemode = true;

function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function showButton(){
ctx.runOnUiThread(new Runnable({ run: function(){
    try{
        var layout = new LinearLayout(ctx);
        layout.setOrientation(1);
        var menuBtn = new Button(ctx);
menuBtn.setTextSize(20);
        menuBtn.setText(name);
        menuBtn.setOnClickListener(new View.OnClickListener({
            onClick: function(viewarg){

mainMenu();

GUI.dismiss();

            }
        }));
        layout.addView(menuBtn);
 
        GUI = new PopupWindow(layout, dip2px(100), dip2px(100)); 

        GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
        }catch(err){
            Toast.makeText(ctx, "An error occured: " + err, 1).show();
        }
    }}));
}
showButton(); 
function mainMenu(){
    ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var menuLayout = new LinearLayout(ctx);
            var menuScroll = new ScrollView(ctx);
            var menuLayout1 = new LinearLayout(ctx);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);
            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);

        var title = new android.widget.TextView(ctx);
        title.setGravity(android.view.Gravity.CENTER);
		title.setText(name + version + "\nBy " + authers + " " + "ArceusMatt");
       title.setTextColor(Color.WHITE);
		title.setTextSize(20);
		menuLayout.addView(title);

var exit = new Button(ctx);
            exit.setText("Exit");
            exit.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){

                    menu.dismiss(); 

showButton();
                }
            }));
            menuLayout.addView(exit);

//This fixes the old spammer crashing
var button1 = new Button(ctx);
button1.setText("Tap spam is "+(tapspam?"activated":"deactivated"));
button1.setTextColor(Color.RED);
            button1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapspam?tapspam=false:tapspam=true;
button1.setText("Tap spam is "+(tapspam?"activated":"deactivated"));
if(tapspam == true){
button1.setTextColor(Color.GREEN);
editSpam();
}
if(tapspam == false){
button1.setTextColor(Color.RED);
tapspam = false;
}
                }
            }));
            menuLayout.addView(button1);
            
            //i may have messed up but this changes gamemode
            var button2 = new Button(ctx);
button2.setText(""+(gamemode?"Creative":"Survival"));
            button2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             gamemode?gamemode=false:gamemode=true;
button2.setText(""+(gamemode?"Creative":"Survival"));
if(gamemode == true){
Level.setGameMode(1);
}
if(gamemode == false){
Level.setGameMode(0);
}
                }
            }));
            menuLayout.addView(button2);
            
            var button3 = new Button(ctx);
button3.setText("Tap break is "+(tapbreak?"activated":"deactivated"));
button3.setTextColor(Color.RED);
            button3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             tapbreak?tapbreak=false:tapbreak=true;
button3.setText("Tap break is "+(tapbreak?"activated":"deactivated"));
if(tapbreak == true){
button3.setTextColor(Color.GREEN);
}
if(tapbreak == false){
button3.setTextColor(Color.RED);
}
                }
            }));
            menuLayout.addView(button3);
            
            
           var button4 = new Button(ctx);
button4.setText("Item & xyz "+(info?"activated":"deactivated"));
button4.setTextColor(Color.RED);
            button4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
             info?info=false:info=true;
button4.setText("Item & xyz "+(info?"activated":"deactivated"));
if(info == true){
button4.setTextColor(Color.GREEN);
}
if(info == false){
button4.setTextColor(Color.RED);
}
                }
            }));
            menuLayout.addView(button4);

menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
           menu.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
            menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function editSpam() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
ts = new android.widget.PopupWindow();
var Lay = new android.widget.LinearLayout(ctx);
var txx = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter text for spam");
Dialog.setContentView(Lay);

Lay.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Lay.addView(txx);
Lay.addView(Exit);

txx.setText("Tap Spam");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
stext =txx.getText();
tapspam = true;
clientMessage("§eTap ground to spam!");
Dialog.dismiss();
}
});

ts.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
ts.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
ts.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Spam Dialog Error:"+e);
}
}});
}

function modTick() {
	if(info)ModPE.showTipMessage("x" + Math.round(getPlayerX()) + ", y" + Math.round(getPlayerY()) + ", z" + Math.round(getPlayerZ()) + "\n	Item ID " + Player.getCarriedItem() + ":" + Player.getCarriedItemData() + ", Amount: " + Player.getCarriedItemData());
}

function useItem(x, y, z, itemId, blockId, side) {
if(tapspam)net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(stext);
if(tapbreak){
	Level.destroyBlock(x +1, y, z +1, false);
	Level.destroyBlock(x +2, y, z +2, false);
	Level.destroyBlock(x +3, y, z +3, false);
	Level.destroyBlock(x +4, y, z +4, false);
	
    Level.destroyBlock(x, y, z, false);

	Level.destroyBlock(x -1, y, z -1, false);
	Level.destroyBlock(x -2, y, z -2, false);
	Level.destroyBlock(x -3, y, z -3, false);
	Level.destroyBlock(x -4, y, z -4, false);
}
}
