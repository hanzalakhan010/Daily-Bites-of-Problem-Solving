def strInsert(index,str1,str2):
    # original String = str1
    # string to be inserted at index "index"= str2

    # return f'{str1[:index+1]}{str2}{str1[index+1:]}'
    return f'{str1[:index]}{str2}{str1[index:]}'
def strPop(index,str):
    # index +=1
    return f'{str[:index]}{str[index+1:]}'

def receivedText(S):
    cursor = 0
    num_lock = True
    newStr = ''
    for char in S:
        # print(newStr)
        if char == '<':
            cursor = 0
        elif char == '>' :
            cursor = len(newStr)
        elif char == "*":
            if (cursor>1):
                newStr = strPop(cursor-1,newStr)
                # newStr.pop(cursor-1)
                cursor-=1
        elif char == '#':
            num_lock = not num_lock
        else:
            if char.isdigit():
                if num_lock:
                    # newStr.insert(cursor,char)
                    newStr = strInsert(cursor,newStr,char)
                    cursor+=1
                else:
                    continue
            else:
                newStr = strInsert(cursor,newStr,char)
                # newStr.insert(cursor,char)
                cursor+=1




    return ''.join(newStr)

# s1 = 'hanzala khan'
# s2 = ' k2 '

# print(s1[:6])
# print(strInsert(6,s1,s2))
# print(strPop(100,'012345678'))

# print(receivedText('hello'))
print(receivedText("Mad_<Super>#visor*12*#34"))
# print(receivedText('PHtJjIoDo<U4hukobC1>8xxM9ImTn*bu85PSBct#lf7xeH1yK<1XbOmsnKH#wP6Z9U1Y6<MJYiy1'))

print(receivedText('HE*<LL>O'))