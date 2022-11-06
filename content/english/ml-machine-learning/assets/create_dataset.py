# Links: https://www.bls.gov/cex/tables.htm
# Cost of living Seattle: https://www.numbeo.com/cost-of-living/in/Seattle
# https://www.nerdwallet.com/cost-of-living-calculator/city-life/seattle-wa
import random
import matplotlib

max_income = 363270
min_income = 61856
expenses_no_rent = 4661.05
rent = 2284.32
total_expenses = expenses_no_rent + rent
error_coefficient = 0.2

for entry in range (1, 59999):
    income = random.randrange(min_income, max_income)
    expenses = error_coefficient * total_expenses