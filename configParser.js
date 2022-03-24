let combatModules = ["Aimbot" ,"AntiCrystal" ,"AutoClicker" ,"BowAimbot" ,"BowSpam" ,"Criticals" ,"CrystalAura" ,"Hitbox" ,"InfiniteAura" ,"Killaura" ,"Reach", "Teams", "TriggerBot"]
let visualModules = ["Breadcrumbs", "BlockOutline", "CustomSky", "ChestVisuals", "DVDLogo", "EntityDespawner", "ESP", "FluxSwing", "Freelook", "Fullbright", "NameTags", "NoRender", "NoHurtcam", "TimeChanger", "Tracer", "ViewModel", "Waypoints", "Zoom"]
let movementModules = ["AirJump", "AntiVoid", "AutoSneak", "AutoSprint", "Bhop", "ElytraFly", "FastLadder", "FastStop", "Fly", "FollowPath", "Glide", "HiveFly", "HighJump", "InventoryMove", "JavaSneak", "Jesus", "Jetpack", "NoClip", "NoFall", "NoSlowDown", "Phase", "Speed", "Spider", "Step", "ToggleSneak", "Velocity"]
let playerModules = ["AntiBot", "AntiImmobile", "AutoArmor", "AutoTotem", "Blink", "BlockReach", "ClickTP", "DeathCoords", "FastEat", "HealthCheck", "InvCleaner", "MidClick", "Nbt", "NoFriends", "NoSwing", "StackableItem"]
let worldModules = ["AutoFish", "ChestStealer", "ChestAura", "EntityFly", "EntityJesus", "EntitySpeed", "Fucker", "InstaBreak", "Nuker", "Scaffold", "Tower", "Xray"]
let miscModules = ["Crasher", "Chat", "Derp", "Disabler", "EditionFaker", "Freecam", "NoPacket", "NoPaintingCrash", "ShulkerNesting", "Spammer", "Timer"]
let guiModules = ["ArmorHud", "Arraylist", "ClickGui", "Compass", "HUD", "Keystrokes", "Radar", "TabGui", "Watermark"]


let text = ""

function convert(input, bound){
    let code = "\"" + input.replace(/\"/g, "\\\"").replace(/\n/g, "") + "\""
    let x = JSON.parse(code)
    let config = JSON.parse(x)
    let html = ""
    let segment = ""
    let image = ""
    let hasKeybind;
    for (var firstKey in config) {
        segment = ""
        image = ""
        if(combatModules.includes(firstKey) != false)
        {
            image = "combat.png"
        }
        else if(visualModules.includes(firstKey) != false)
        {
            image = "visual.png"
        }
        else if(movementModules.includes(firstKey) != false)
        {
            image = "movement.gif"
        }
        else if(playerModules.includes(firstKey) != false)
        {
            image = "player.png"
        }
        else if(worldModules.includes(firstKey) != false)
        {
            image = "world.png"
        }
        else if(miscModules.includes(firstKey) != false)
        {
            image = "misc.gif"
        }
        else if(guiModules.includes(firstKey) != false)
        {
            image = "gui.png"
        }
        else{
            image = "unavailable.png"
        }
        segment = "<div class=\"item\"><label class=\"title\">" + firstKey + "</label> <img src=\"" + image + "\"><p class=\"info\">"
        for (var secondKey in config[firstKey]) {
            
            if(secondKey == "keybind")
            {

                let keycode = ""
                
                if(config[firstKey][secondKey] == 0 || config[firstKey][secondKey] == 9)
                {
                    keycode = "NONE"
                    hasKeybind = false
                }
                else{
                    hasKeybind = true
                    keycode = String.fromCharCode(config[firstKey][secondKey])
                }

                segment = segment + secondKey + ": <label class=\"keyboard\"> " + keycode + "</label><br>"
            
            }
            else{
                if(firstKey == "ClickGui"){
                    if(secondKey == "Combat" || secondKey == "Gui" || secondKey == "Misc" || secondKey == "Movement" || secondKey == "Player" || secondKey == "Visual" || secondKey == "World"){
                    segment = segment + secondKey + ": <b>isExtended - " + config[firstKey][secondKey].isExtended + ", Pos - " +  Math.round(config[firstKey][secondKey].pos.x) + ", " + Math.round(config[firstKey][secondKey].pos.y) + " </b><br>"
                    }
                    else{
                        segment = segment + secondKey + ": <b>" + config[firstKey][secondKey] + "</b><br>"
                    }
                }
                else if(firstKey != "from" && firstKey != "prefix"){
                 segment = segment + secondKey + ": <b>" + config[firstKey][secondKey] + "</b><br>"
                }
            }
            
        }
        if(firstKey == "from")
        {
            
            segment = segment + "<b>" + config[firstKey] + "</b><br>"
        }
        if(firstKey == "prefix")
        {
            
            segment = segment + "<b>" + config[firstKey] + "</b><br>"
        }
        if(bound == true)
        {
            if(hasKeybind == true){
        html += segment + "</p></div>"
            }
        }
        else{
            html += segment + "</p></div>"
        }
      }
    document.getElementById("configs").innerHTML = html
}

function parseClicked(){

    if(document.getElementById("displayOption").value == "onlyBound")
    {
        convert(document.getElementById("configText").value, true)
    }
    else{
        convert(document.getElementById("configText").value, false)
    }
}

function parseFileClicked(){

    if(document.getElementById("displayOption").value == "onlyBound")
    {
        convert(text, true)
    }
    else{
        convert(text, false)
    }
}


window.onload = function () {
document.getElementById('files')
.addEventListener('change', function() {
var fr=new FileReader();
fr.onload=function(){
    
    text = fr.result;

}
  
fr.readAsText(this.files[0]);
})
}