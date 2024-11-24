import shutil

def create_file_copies(source_file, num_copies):
    """
    Tworzy n kopii pliku source_file z kolejnymi numerami w nazwie.

    :param source_file: Ścieżka do oryginalnego pliku.
    :param num_copies: Liczba kopii do stworzenia.
    """
    try:
        for i in range(2, num_copies + 2):  # Zaczynamy od 2 (test2.ts)
            destination_file = f"test{i}.ts"
            shutil.copy(source_file, destination_file)
            print(f"Utworzono kopię: {destination_file}")
        print("Wszystkie kopie zostały utworzone pomyślnie.")
    except FileNotFoundError:
        print(f"Plik źródłowy {source_file} nie został znaleziony.")
    except Exception as e:
        print(f"Wystąpił błąd: {e}")

if __name__ == "__main__":
    source_file = "test1.ts"  # Nazwa oryginalnego pliku
    num_copies = int(input("Podaj liczbę kopii do utworzenia: "))
    create_file_copies(source_file, num_copies)
