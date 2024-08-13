# import math
#
#
# class Pagination:
#     # by condition: items (default: None): It will contain a list of contents to paginate.
#     def __init__(self, items=None, page_size: int = 10):
#         self.items = self.__validate(items)
#         self.page_size = int(page_size)
#         self.current_page = 1
#         self.total_pages = self.__count_pages()
#
#     def get_visible_items(self) -> list:
#         return self.items[self.current_page * self.page_size - self.page_size:
#                           self.current_page * self.page_size]
#
#     def prev_page(self):
#         self.current_page -= 1
#
#     def next_page(self):
#         self.current_page += 1
#         return self
#
#     def last_page(self):
#         self.current_page = self.total_pages
#
#     def first_page(self):
#         self.current_page = 1
#
#     def go_to_page(self, page_num: int):
#         self.current_page = max(1, min(int(page_num), self.total_pages))
#
#     def __count_pages(self) -> int:
#         return math.ceil(max(1, len(self.items)) / self.page_size)
#
#     def __validate(self, items):
#         if items is None:
#             raise ValueError("404 Error, we lost this page.")
#         return items
#
#
# alphabetList = list("abcdefghijklmnopqrstuvwxyz")
# p = Pagination(alphabetList, 4.3)
# print(p.get_visible_items())
# print(p.total_pages)
# p.next_page()
# print(p.get_visible_items())
# p.next_page()
# print(p.get_visible_items())
# p.last_page()
# print(p.get_visible_items())
# p.prev_page()
# print(p.get_visible_items())
# p.first_page()
# print(p.get_visible_items())
# p.next_page()
# print(p.get_visible_items())
# p.go_to_page(20)
# print(p.get_visible_items())
# p.go_to_page(0)
# print(p.get_visible_items())
# p.go_to_page(2.2)
# print(p.get_visible_items())
# p = Pagination(alphabetList, 100)
# print(p.get_visible_items())
# p = Pagination([], 100)
# print(p.get_visible_items())
# p = Pagination()
# print(p.get_visible_items())
