# smart-expense-splitter-
Smart Expense Splitter is a group-based bill-splitting web app built for situations like trips, shared flats, and team lunches. Users create a group (for example, a Goa trip), add all participants, and log each expense with who paid and how it should be divided.

Key features

Group management: separate groups, each with its own members and expenses.
Equal split: divides an expense evenly among the selected members.
Custom split: lets you assign a specific amount to each person when sharing is uneven.
Settlement simulation: calculates each person’s net balance and shows exactly who pays how much to whom.
Smart settlement: instead of repaying every expense separately, it reduces everything to net balances and matches debtors with creditors. A group of n people never needs more than n − 1 payments.

Example: In a 4-person Goa trip with 5 expenses, settling each expense separately would need 14 payments. Smart Expense Splitter clears every debt in just 3.

Tech and design: client-server architecture (frontend, backend, database) with a dark theme and teal accent UI, clear error messages, and calculation logic kept separate from the interface for easier testing. The app only tracks and calculates. Actual payments happen outside it, through cash, UPI, or bank transfer.

Status: working prototype. Group creation is currently failing and is the main known issue to fix.
