import re
from collections import Counter


class Text:
    def __init__(self, str_text: str):
        self.__str_text = str_text

    @property
    def str_text(self):
        return self.__str_text

    @classmethod
    def from_file(cls, path: str):
        lines = []
        with open(path) as f:
            for line in f:
                lines.append(line)
        return cls("".join(lines))

    def frequency_word(self, str_word: str) -> int:
        return len(re.findall(rf'\b{str_word}\b', self.str_text, re.IGNORECASE))

    # may be more than one word
    def get_most_common_word(self) -> Counter:
        #looking for 5 first ones
        return self.__get_count_each_words().most_common(10)

    def get_unique_words(self) -> list:
        return [word for word, count in self.__get_count_each_words().items() if count == 1]

    def __get_count_each_words(self) -> Counter:
        lower_text = self.str_text.lower()
        words = re.findall(r'\b\w+\b', lower_text)
        count_words = Counter(words)
        return count_words


text = Text('A good book would sometimes cost as much as a good house.')
print(text.frequency_word('good'))
print(text.get_most_common_word())
print(text.get_unique_words())

resources = "resources/"
path_file = "the_stranger.txt"
text_file = Text.from_file(resources + path_file)
print(text_file.frequency_word('good'))
print(text_file.get_most_common_word())
print(text_file.get_unique_words())
