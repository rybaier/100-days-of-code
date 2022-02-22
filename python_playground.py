# code wars katas
import re

#camelcase this one took me way longer than it should have and i ended up not useing regex which is what I wanted to do in the first place 
def camelCase (text):
   if (text != '') : 
        word = re.sub('_', ' ', text) 
        word2= re.sub('-', ' ', word).split()
        word3 = word2[0]
        word2.remove(word2[0])
        print(word2)
        word4 =' '.join(word2).title()
        word5=re.sub(' ','', word4)
        print(word3+word5)
   else:
       print(text)
camelCase('')

active = True
while active == True:
    for i in range(len(states)):
        answer = (input('What is the Capital ' + states[i]['name'] + '?'))
        if answer == states[i]['capital']:
            correct_score += 1
            print ('You have guessed ', correct_score, ' capitals correctly' )
        else:
            incorrect_score += 1
            print ('You have guessed ', incorrect_score, ' capitals incorrectly. Do Better' )

    if correct_score < 45: 
        print ('DO BETTER CLOWN!')      

    if correct_score == 50:
        print ('Way to Go! You know your capitals!')

    again = input('Would you like to try again? (yes or no)' )
    
    if again == 'yes':
        print('Good Luck')       
    elif again == 'no':       
        active = False
        print('Goodbye')
    else: 
        print('invalid input...ending program')
        active = False
        
if correct_score < 45: 
    print ('DO BETTER CLOWN!')      

if correct_score == 50:
    print ('Way to Go! You know your capitals!')