/*
* Caleb Smith
* M574M846
* Midterm
*/

/*
The program takes no input.
The output must be formatted like that found in the sample run.
Assumptions we are making for the simulation:

    There is an equal chance of a birthday landing on any day of the year.
    We are only considering that a year has 365 days (no leap years).

The simulation will be run in the following manner:

    For a group of size 2, assign a random birthday to each member.
    If the birthdays are identical, keep a count.
    Do this 10,000 times.
    Print a statement with formatting identical to that of the Sample Run.
    Do the simulation for group sizes in the range [2, 50].
    NOTE: For groups larger than 2, you only need to find a single match in order for it to count.
*/

/*
    Output format:
    Group size:  2, matching birthdays found  0.24% of the time.
*/
#include <iostream>
#include <random>

int get_birthday() {
    static std::random_device random;
    static std::mt19937 prng(random());
    std::uniform_int_distribution<int> dist(1, 365);

    return dist(prng);
}

bool birthday_exists(std::vector<int> group) {
    for (size_t i = 0; i < group.size(); i++) {
        if (group[group.size()] == group[i]) {
            std::cout << group[i] << '\n';
        } else {
            std::cout << "No match: " << group[i] << '\n';
        }
    }

    return true;
}

// I use a vector here because we cannot return C-style arrays
// This is used as a helper function to assign the birthdays to that group
std::vector<int> assign_birthdays(const int groupSize) {
    std::vector<int> group;

    for (int i = 0; i < groupSize; i++) {
        group.push_back(get_birthday());
    }

    birthday_exists(group);

    return group;
}

void print_row(int groupSize, double matchingBirthday) {
    std::cout << "Group size: " << groupSize << ", matching birthdays found " << matchingBirthday << "% of the time.\n";
}

int main() {
    std::vector<int> group = assign_birthdays(10);

    for (size_t i = 0; i < group.size(); i++) {
	std::cout << group[i] << '\n';
    }
}
