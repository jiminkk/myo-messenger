#text = '... --- ...  ... --- ...  ... --- ... ... --- ...  ... --- ... '
#text = '.......... ------------- .---'
text = 'sos SOS sOsSOs Sos'
#text = 'adqwd ! $'
morse_dict = {'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ',': '--..--', '.': '.-.-.-', '?': '..--..', '/': '-..-.', '-': '-....-', ' ': ''}

def find_key(dic, val):
    return [k for k, v in dic.iteritems() if v == val][0]

text = text.lower()
tom = False

for char in text:
    if char not in ['.', '-', ' ']:
        tom = True

if tom == False:
    newstring = '\nMorse code detected! Translation from morse code:\n'
    morse_lines = text.split('  ')
    newlist = []
    for line in morse_lines:
        newlist += [line.split()]
    for word in newlist:
        for letter in word:
            if letter in morse_dict.values():
                newstring += find_key(morse_dict, letter)
            else:
                newstring = '\nError translating!!! Character not ir morse dictionary. '
                break
            newstring += ' '
else:
    newstring = '\nText detected! Translation to morse code:\n'
    for char in text:
        if morse_dict.has_key(char):
            newstring += morse_dict[char] + ' '
        else:
            newstring = '\nError translating!!! Character not in morse dictionary. '
            break
print newstring[:-1] + '\n'