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

var tg = false;
var tapspam = false;

function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function showMenuBtn(){
ctx.runOnUiThread(new Runnable({ run: function(){
    try{
        var layout = new LinearLayout(ctx);
        layout.setOrientation(1);
        var menuBtn = new Button(ctx);
menuBtn.setTextSize(20);
        menuBtn.setText("Tylers mod");
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
showMenuBtn(); 
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

//i suggestion a textView here with mod name and version and developer




var exitb = new Button(ctx);
            exitb.setText("Exit");
exitb.setTextColor(Color.RED);
            exitb.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){

                    menu.dismiss(); 

showMenuBtn();
                }
            }));
            menuLayout.addView(exitb);

var tb = new android.widget.ToggleButton(ctx);
      tb.setText('Tap spammer');
      tb.setChecked(tg);
      tb.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!tg){
      tg = true;
      editSpam();
      }else{
      tg = false;
      tapspam = false;
      }
      tb.setChecked(tg);
      }
      }));
      menuLayout.addView(tb);

//Other buttons etc go below here




menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
           menu.setBackgroundDrawable(new ColorDrawable(Color.GREEN));
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

function useItem(x, y, z, itemId, blockId, side)
{
if(tapspam)net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(stext);

//continue useItem below


}
