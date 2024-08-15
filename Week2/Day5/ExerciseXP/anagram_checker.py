resource_path = "resources/"
file_name = "sowpods.txt"

class AnagramChecker:
    def __init__(self, path: str):
        self.__words_list = self.__from_file(path)

    # should load the word list file (text file) into a variable, so that it can be searched later on in the code.
    def __from_file(self, path) -> list:
        lines = []
        with open(path) as f:
            for line in f:
                lines.append(line.strip().lower())
        return lines

    @property
    def words_list(self):
        return self.__words_list

    # should check if the given word (ie. the word of the user) is a valid word.
    def __is_valid_word(self, word: str) -> bool:
        if not word.isalpha() and " " not in word and word in self.words_list:
            raise ValueError(f'{word} not valid')
        else:
            True

    # should find all anagrams for the given word.
    # (eg. if word of the user is ‘meat’,
    # the function should return a list containing [“mate”, “tame”, “team”].)
    def get_anagrams(self, word: str) -> list:
        word = word.lower().strip()
        self.__is_valid_word(word)
        word_sorted = sorted(word)
        anagrams_list = []
        for value in self.words_list:
            if word_sorted == sorted(value) and word != value:
                anagrams_list.append(value)
        return anagrams_list


