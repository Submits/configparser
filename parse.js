
function convert(){
    document.getElementById("configtext").innerHTML = "Info for: Text Input"
    let code = "\"" + document.getElementById("input").value.replace(/\"/g, "\\\"").replace(/\n/g, "") + "\""
    let x = JSON.parse(code)
    let config = JSON.parse(x)
    let html = ""
    let segment = ""
    for (var firstKey in config) {
        segment = ""
        if(firstKey == "ClickGui")
        {
        segment = "<div class=\"product-card\"><h2>" + firstKey + " [BROKEN]</h2>"
        }
        else{
        segment = "<div class=\"product-card\"><h2>" + firstKey + "</h2>"
        }
        for (var secondKey in config[firstKey]) {
            if(secondKey == "keybind")
            {

                let keycode = ""
                if(config[firstKey][secondKey] == 0)
                {
                    keycode = "NONE"
                }
                else{
                    keycode = String.fromCharCode(config[firstKey][secondKey])
                }
                segment = segment + secondKey + ": <label class=\"keyboard\"> " + keycode + "</label><br>"
            }
            else{
           segment = segment + secondKey + ": <b>" + config[firstKey][secondKey] + "</b><br>"
            }
            
        }
        html += segment + "</div>"
      }
    document.getElementById("configs").innerHTML = html
}


