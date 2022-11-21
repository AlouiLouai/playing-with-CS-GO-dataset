import sys
playrs = {"ZywOo":0,  "shox":0, "apEX":0, "b1t":0, "electronic":0, "Boombl4":0, "Perfecto":0, "Kyojin":0, "misutaaa":0, "Linaaa":0, "prius":0}

with open('python_scripts/file.txt', 'r') as f:
    
    for line in f:
        for key, value in playrs.items():
            if key in line and "killed" in line :
                playrs[key] = playrs[key] +1
    
    players = sorted(playrs.items(), key=lambda x:x[1], reverse=True)
    sortDict = dict(players)
  
    print(sortDict)


