# The Problem With Birthdays
Given a group of 'n' people, the odds that at least two people have the same birthday (with assumptions) are much higher than you would think.

https://en.wikipedia.org/wiki/Birthday_problem

An understanding of the mathematics is not required to complete this exam. You will instead run a Monte Carlo simulation to demonstrate the 
correctness of the theorem. **THERE ARE NO LATE SUBMISSIONS ALLOWED.**

## Requirements
- The program takes no input.
- The output *must* be formatted like that found in the sample run.
- Assumptions we are making for the simulation:
  - There is an equal chance of a birthday landing on any day of the year.
  - We are only considering that a year has 365 days (no leap years).
- The simulation will be run in the following manner:
  - For a group of size 2, assign a random birthday to each member.
  - If the birthdays are identical, keep a count.
  - Do this 10,000 times.
  - Print a statement with formatting identical to that of the Sample Run.
  - Do the simulation for group sizes in the range [2, 50].
  - NOTE: For groups larger than 2, you only need to find a single match in order for it to count.
- **REMINDER:** This is an exam and not a homework assignment. Please only direct questions to the GTA or myself.

## Sample Run
```
Group size:  2, matching birthdays found  0.24% of the time.  
Group size:  3, matching birthdays found  0.91% of the time.  
Group size:  4, matching birthdays found  1.64% of the time.  
Group size:  5, matching birthdays found  2.79% of the time.  
Group size:  6, matching birthdays found  4.27% of the time.  
Group size:  7, matching birthdays found  6.03% of the time.  
Group size:  8, matching birthdays found   7.3% of the time.  
Group size:  9, matching birthdays found  8.91% of the time.  
Group size: 10, matching birthdays found  11.9% of the time.  
Group size: 11, matching birthdays found 14.57% of the time.  
Group size: 12, matching birthdays found  17.9% of the time.  
Group size: 13, matching birthdays found 19.19% of the time.  
Group size: 14, matching birthdays found 22.11% of the time.  
Group size: 15, matching birthdays found  25.3% of the time.  
Group size: 16, matching birthdays found 29.15% of the time.  
Group size: 17, matching birthdays found 31.42% of the time.  
Group size: 18, matching birthdays found 35.06% of the time.  
Group size: 19, matching birthdays found 38.04% of the time.  
Group size: 20, matching birthdays found 41.31% of the time.  
Group size: 21, matching birthdays found 44.38% of the time.  
Group size: 22, matching birthdays found 47.91% of the time.  
Group size: 23, matching birthdays found 50.89% of the time.  
Group size: 24, matching birthdays found 54.95% of the time.  
Group size: 25, matching birthdays found 56.68% of the time.  
Group size: 26, matching birthdays found 59.88% of the time.  
Group size: 27, matching birthdays found 63.55% of the time.  
Group size: 28, matching birthdays found 65.84% of the time.  
Group size: 29, matching birthdays found 67.79% of the time.  
Group size: 30, matching birthdays found 71.19% of the time.  
Group size: 31, matching birthdays found 72.86% of the time.  
Group size: 32, matching birthdays found 76.56% of the time.  
Group size: 33, matching birthdays found 77.35% of the time.  
Group size: 34, matching birthdays found 79.48% of the time.  
Group size: 35, matching birthdays found 81.91% of the time.  
Group size: 36, matching birthdays found 83.36% of the time.  
Group size: 37, matching birthdays found 84.28% of the time.  
Group size: 38, matching birthdays found 86.64% of the time.  
Group size: 39, matching birthdays found 87.84% of the time.  
Group size: 40, matching birthdays found 89.32% of the time.  
Group size: 41, matching birthdays found 90.34% of the time.  
Group size: 42, matching birthdays found 91.71% of the time.  
Group size: 43, matching birthdays found 92.87% of the time.  
Group size: 44, matching birthdays found 92.94% of the time.  
Group size: 45, matching birthdays found 94.29% of the time.  
Group size: 46, matching birthdays found 94.97% of the time.  
Group size: 47, matching birthdays found 95.54% of the time.  
Group size: 48, matching birthdays found 96.27% of the time.  
Group size: 49, matching birthdays found 96.65% of the time.  
Group size: 50, matching birthdays found 97.11% of the time.
```

## Hints
- You do not need to understand the underlying statisical analysis in order to run the simulation.
- It may be simpler to consider the birthdays as ordinal numbers. E.g., Day 1 is January 1, Day 32 is Februrary 1, etc.
- The order that that the birthdays get assigned is a detail and not relevent to finding a match.
- For any given group, you only need to find **a** match.

## Reminders
- Name your file *wsuid*\_midterm.cpp
- You are required to place a comment block at the top of the file. Refer to the Coding Guidelines
handout.
