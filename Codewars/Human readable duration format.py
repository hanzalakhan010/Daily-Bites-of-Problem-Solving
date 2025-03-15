def format_duration(seconds):
    returnStat = []
    years,yearsRem = divmod(seconds,60*60*24*365)
    days,daysRem = divmod(yearsRem,60*60*24)
    hours,hoursRem = divmod(daysRem,60*60)    
    minutes,minutesRem = divmod(hoursRem,60)
    secondsRem = minutesRem%60
    print(years,days,hours,minutes,secondsRem)
    if years:
        returnStat.append(str(years) +' year' +f'{"s" if years>1 else ""}')
    if days:
        returnStat.append(str(days) +' day' +f'{"s" if days>1 else ""}')
        
    if hours:
        returnStat.append(str(hours) +' hour' +f'{"s" if hours>1 else ""}')
        
    if minutes:
        returnStat.append(str(minutes) +' minute' +f'{"s" if minutes>1 else ""}')
        
    if secondsRem:
        returnStat.append(str(secondsRem) +' second' +f'{"s" if secondsRem>1 else ""}')
    print(returnStat)
    if len(returnStat) ==0:
        return 'now'
    elif len(returnStat) ==1:
        return ''.join(returnStat)
    else:
        return ', '.join(returnStat[:-1]) + ' and ' +returnStat[-1]
    return returnStat
         
    
# print(format_duration(0))
# print(format_duration(120))
# print(format_duration(3662))
# print(format_duration(15731080))

print(format_duration(62))