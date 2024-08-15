import re
import string
from collections import Counter
import nltk
from nltk.corpus import stopwords
nltk.download('stopwords')


class Text:

   # Here I got a little confused. It looks like it's about removing punctuation marks and
   # splitting the text into words, but the result will be different,
   # so they just use a different method.
    @staticmethod
    def get_without_punctuation(str_text: str) -> str:
        return Text.__translate_text(str_text, string.punctuation)

    @staticmethod
    def get_without_stopwords(str_text: str) -> str:
       stop_words = set(stopwords.words('english'))
       words_text = Text.get_words_text(str_text)
       str_text_with_out = [word for word in words_text if word not in stop_words]
       return ' '.join(str_text_with_out)

    @staticmethod
    def get_without_special_characters(str_text: str) -> str:
        chars = string.punctuation + string.whitespace
        return Text.__translate_text(str_text, chars)


    @staticmethod
    def __translate_text(str_text: str, chars) -> str:
       table_translate = str.maketrans('', '', chars)
       return str_text.translate(table_translate)


    @staticmethod
    def get_words_text(str_text) -> list:
        lower_text = str_text.lower()
        return re.findall(r'\b\w+\b', lower_text)


    def __init__(self, str_text: str):
        self.__str_text = str_text

    @property
    def str_text(self):
        return self.__str_text

    @classmethod
    def from_file(cls, path: str) -> 'Text':
        lines = []
        with open(path) as f:
            for line in f:
                lines.append(line)
        return cls("".join(lines))

    def frequency_word(self, str_word: str) -> int:
        return len(re.findall(rf'\b{str_word}\b', self.str_text, re.IGNORECASE))

    # may be more than one word
    def get_most_common_word(self) -> Counter:
        #looking for 10 first ones
        return self.__get_count_each_words().most_common(10)

    def get_unique_words(self) -> list:
        return [word for word, count in self.__get_count_each_words().items() if count == 1]

    def __get_count_each_words(self) -> Counter:
        count_words = Counter(Text.get_words_text(self.str_text))
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

text_without_punctuation = Text.get_without_punctuation(text_file.str_text)
print(text_without_punctuation)
text_whith_out = Text.get_without_stopwords(text_file.str_text)

text_with_out = Text(text_whith_out)
print(text_with_out.get_most_common_word())

