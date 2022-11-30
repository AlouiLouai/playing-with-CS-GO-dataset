match_start = 0
dict = {}
with open('python_scripts/file.txt', 'r') as f:
    for line in f:
        # between 2 rounds match_start  and match_start 2 count kills
        if "MatchStatus: Score:" in line:
            #print the line
            newString = line.replace('11/28/2021 - ','').replace('MatchStatus: Score: ','').replace('on map "de_nuke" ','')
            time = newString[0:8]
            score = newString[10:14]
            dict[time] = score
    print(dict)

