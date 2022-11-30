from datetime import datetime
# two arrays about start and end date 
start = []  
ends = []
with open('python_scripts/file.txt', 'r') as f:
    #looping throw the file line by line search for (each time) : Round_Start and the next Round_End 
    for line in f:
        if 'Round_Start' in line:
            # not this in case all same date 
            start.append(line.replace(': World triggered "Round_Start"','').replace('11/28/2021 - ',''))
        if 'Round_End' in line:
            ends.append(line.replace(': World triggered "Round_End"','').replace('11/28/2021 - ',''))
    # following the given hint and seeing that there is 
    # 4 Match_Start & Round_Start associated so the start array will ommit the 3 first elements
    newStart = start[3:25]
    # get the sum of round length
    roundLen = 0
    startTimes = []
    endTimes = []
    # here we need to change the string representation of time to datetime.time
    # loop throw each date and convert it 
    # push to new array startTimes & endTimes
    for item in newStart:
        #endDate = datetime.strptime(item, "%H:%M:%S").time()
        startDate = datetime.strptime(item[0:7], "%H:%M:%S")
        startTimes.append(startDate)
    for item in ends:
        endDate = datetime.strptime(item[0:7], "%H:%M:%S")
        endTimes.append(endDate)
    # now convert the difference to minutes and add it to the big length of round
    # and since the ommited the first 4 rounds start , we have the same length of array for both
    for i in range(len(endTimes)):
        delta = endTimes[i] - startTimes[i]
        sec = delta.total_seconds()
        min = sec / 60
        roundLen += min
    # here we just need the length of all rounds divided by the length of rounds
    averg = (roundLen / len(ends))
    print(averg)
