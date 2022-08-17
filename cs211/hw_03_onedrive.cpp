/*
 * Caleb Smith
 * M574M846
 * HW03
*/

#include <iostream>

void drawShape1() {
    // I use constant variables here to make the code a bit cleaner
    const int rows = 4;
    const int columns = 8;
    int pattern;

    for (int i = 0; i < rows; i++) {
        pattern = 2 * i;
        for (int j = 0; j < i; j++) {
            std::cout << ' ';
        }

        for (int j = 0; j < columns - pattern; j++) {
            std::cout << '#';
        }

        std::cout << '\n';
    }
}

void drawShape2() {
    const int rows = 7;
    const int columns = 7;

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < columns; j++) {
            
        }

        std::cout << '\n';
    }
}

int main() {
    drawShape1();
    std::cout << "\n\n";
    drawShape2();
}
