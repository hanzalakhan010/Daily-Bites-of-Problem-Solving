# Doesnt work by the way


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
    for i in range(len(S)):
        print(S,cursor)
        if S[cursor] == '<':
            S = strPop(cursor,S)
            cursor = 0

        elif S[cursor] == '>':
            S = strPop(cursor,S)
            cursor = len(S)
        elif S[cursor] == '*':
           S = strPop(cursor,S)
           cursor-=1
           S = strPop(cursor,S)
        else:
            cursor+=1
            if cursor==0:
                S = strInsert(cursor,S,S[i])


    return S


print(receivedText('HE*<LL>O'))


# print(receivedText("Mad_<Super>#visor*12*#34"))

# s2 = ' k2 '
# s1 = 'hanzala khan'

# print(s1[:6])
# print(strInsert(6,s1,s2))
# print(strPop(100,'012345678'))

# print(receivedText('hello'))
# print(receivedText('PHtJjIoDo<U4hukobC1>8xxM9ImTn*bu85PSBct#lf7xeH1yK<1XbOmsnKH#wP6Z9U1Y6<MJYiy1'))