

first_name = input('Enter your first name: ')
last_name = input('Enter your last name: ')

if not first_name.strip(): 
    print('Please enter valid first name')
elif not last_name.strip():
    print('Please enter valid last name')
else:
    print(f'Hi 👋, {first_name} {last_name}')