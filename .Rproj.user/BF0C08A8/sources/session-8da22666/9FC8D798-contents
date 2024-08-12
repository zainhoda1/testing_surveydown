# Make conjoint surveys using the cbcTools package

# Load libraries
library(cbcTools)
library(fastDummies)
library(tidyverse)
library(here)

# Define profiles with attributes and levels
profiles <- cbc_profiles(
  price       = c(5,7.5,10,12.5,15,17.5,20),   # Price ($1,000)
  mileage = c(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ),   # mileage in 1000 miles interval
  accelTime   = c(6, 7, 8,9),      # 0-60 mph acceleration time (s)
  powertrain  = c("Gasoline", "Electric", "Plug-in Hybrid"), 
  range       = c(100, 150, 200, 250, 300, 350), # EV driving range
  operating_cost = c(6,9,12,15,18,21),  # cents per mile
  gas_efficiency = c(20,25,30,35,40,45,50,55,60) # equivalent gasoline efficiency (mpg equivalent)
)

head(profiles) # preview

# The "range" attribute only applies to the case when powertrain == "Electric"
# To account for this, we have to do two things: 
# 1) we need the range to be 0 when powertrain != "Electric"
# 2) we need to subtract away the minimum range level such that the value of 
#    "0" reflects a reference level of 100 miles. Then the value for "range" 
#    would mean the *additional* range beyond 100 miles. 
profiles <- profiles %>% 
  mutate(
    range = range - min(range),
    range = ifelse(powertrain != "Electric", 0, range)) %>% 
  # Now remove any duplicate rows and re-label the profileIDs
  distinct() %>% 
  mutate(profileID = seq(n()))

head(profiles) # preview

# Make a full-factorial design of experiment 
design <- cbc_design(
  profiles = profiles,
  n_resp   = 1000, # Number of respondents
  n_alts   = 3,    # Number of alternatives per question
  n_q      = 8     # Number of questions per respondent
)

head(design) # preview

# Check that range is always 0 when powertrain == "Gasoline"
design %>% 
  count(range, powertrain)


# Save data
write_csv(design, here('test1','data', 'survey.csv'))
