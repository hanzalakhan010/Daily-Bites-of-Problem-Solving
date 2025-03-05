def receivedText(S):
    left = []
    right = []
    num_lock = True
    for char in S:
        if char == '#':
            num_lock = not num_lock
        elif char == '>':
            left = left + right
            right = []
        elif char == '<':
            right = left+right
            left = []
        elif char == '*':
            if left:
                left.pop()
        else:
            if  not num_lock and char.isdigit():
                continue
            left.append(char)
    return ''.join(left+right)

print(receivedText('HE*<LL>O'))