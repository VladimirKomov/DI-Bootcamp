from Week2.Day5.ExerciseXP.anagram_checker import AnagramChecker, resource_path, file_name

# Show a menu, offering the user to input a word or exit.
# Keep showing the menu until the user chooses to exit.
while True:
    word_input = input('Input a word (or ''q'' for exit) : ')
    if word_input == 'q':
        break

    cheker = AnagramChecker(resource_path + file_name)
    anagrams = cheker.get_anagrams(word_input)

    if anagrams:
        print(f'YOUR WORD :{word_input.upper()} \n'
            f'this is a valid English word. \n'
            f'Anagrams for your {", ".join(anagrams)}')
    else:
        print(f'YOUR WORD :{word_input.upper()} \n'
              f'dictionary does not contain an anagram for your word')