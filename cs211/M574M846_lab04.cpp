#include <iostream>

bool is_even(int& num) {
	return num % 2 == 0;
}

int main() {
	int num;

	std::cout << "Enter a number:\n";
	std::cin >> num;

	is_even(num) ?
		std::cout << "You entered an even number!\n"
		: std::cout << "You entered an odd number!\n";
}
