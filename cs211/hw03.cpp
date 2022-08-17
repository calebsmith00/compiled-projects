#include <iostream>

void drawShape1(int rowCount, int columnCount) {
    int pattern; 

    for (int row = 0; row < rowCount; ++row) {
        // Determine the pattern for amount of hashes
        pattern = 2 * row;

        // Spaces
        for (int spaceCount = 0; spaceCount < row; ++spaceCount) {
            std::cout << ' ';
        }

        // Hashes
        for (int hashCount = 0; hashCount < columnCount - pattern; hashCount++) {
            std::cout << '#';
        }

        std::cout << '\n';
    }
}

void drawShape2(int rowCount, int columnCount) {
    int hashPattern;
	for (int row = -3; row < rowCount; ++row) {

        for (int column = 0; column < columnCount; ++column) {
            hashPattern = column == columnCount - 1 - abs(row) || column == abs(row);

            hashPattern ? std::cout << '#' : std::cout << ' ';
        }

        std::cout << "\n";
    }
}

int main() {
    drawShape1(4, 8);
    std::cout << "\n\n";

    drawShape2(4, 7);
    std::cout << "\n\n";

}
