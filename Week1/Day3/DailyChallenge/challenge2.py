# Create a program that prints a list of the items you can afford in the store
# with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers.
# Create a program that deletes the $ sign, and the comma (for thousands)

def clean_str(str_dirty):
    lis_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    list_dirty = list(str_dirty)
    list_clean = []
    for char in list_dirty:
        if char in lis_numbers:
            list_clean.append(char)
    return int("".join(list_clean))


def calculate_items(wallet, items_purchase):
    max_money = clean_str(wallet)
    list_items = []
    for key, value in items_purchase.items():
        price = clean_str(value)
        if max_money >= price:
            list_items.append(key)
            max_money -= price
    list_items.sort()
    if len(list_items) > 0:
        return list_items
    else:
        return None


items_purchase1 = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}
wallet1 = "$300"
# output ➞ ["Bread", "Fertilizer", "Water"]

items_purchase2 = {
    "Apple": "$4",
    "Honey": "$3",
    "Fan": "$14",
    "Bananas": "$4",
    "Pan": "$100",
    "Spoon": "$2"
}
wallet2 = "$100"
# output ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

items_purchase3 = {
    "Phone": "$999",
    "Speakers": "$300",
    "Laptop": "$5,000",
    "PC": "$1200"
}
wallet3 = "$1"
# output ➞ "Nothing"

print(calculate_items(wallet1, items_purchase1))
print(calculate_items(wallet2, items_purchase2))
print(calculate_items(wallet3, items_purchase3))
