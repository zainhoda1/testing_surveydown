# Load libraries
library(cbcTools)
library(fastDummies)
library(tidyverse)
library(here)
library(dplyr)
library(tidyverse)

survey <- read_csv(here('test1','data', 'survey.csv'))

respondentID  <-sample(survey$respID, 1)


df<- survey %>% filter(respID == respondentID)

df_json <- jsonlite::serializeJSON(df)


alts <- jsonlite::unserializeJSON(df_json) %>% 
  filter(qID == 1)
alt1 <- alts %>% filter(altID == 1)
alt2 <- alts %>% filter(altID == 2)
alt3 <- alts %>% filter(altID == 3)

type<- alt1$powertrain
price <- alt1$price
acceltime <- alt1$accelTime



# "**Option 1**


# **Type**: `r alt1$Cooktop_Type`
# **Price**: $ `r alt1$final_cost_price`
# **Usage Cost**: $ `r alt1$Average_annual_usage_Cost`
# **# of burners**:  `r alt1$number_of_burners`"




# Define the option vector
html_buttons_option <- c("option_1", "option_2", "option_3")

# Change the names of each element to display markdown-formatted text 
# and an embedded image using html
names(html_buttons_option)[1] <- "**Option 1**<br>
    <img src='https://raw.githubusercontent.com/jhelvy/formr4conjoint/master/survey/images/fuji.jpg' width=100><br>
    **Type**: Fuji<br>
    **Price**: $ 2 / lb<br>
    **Freshness**: Average"
names(html_buttons_option)[2] <- "**Option 2**<br>
    <img src='https://raw.githubusercontent.com/jhelvy/formr4conjoint/master/survey/images/pinkLady.jpg' width=100><br>
    **Type**: Pink Lady<br>
    **Price**: $ 1.5 / lb<br>
    **Freshness**: Excellent"
names(html_buttons_option)[3] <- "**Option 3**<br>
    <img src='https://raw.githubusercontent.com/jhelvy/formr4conjoint/master/survey/images/honeycrisp.jpg' width=100><br>
    **Type**: Honeycrisp<br>
    **Price**: $ 2 / lb<br>
    **Freshness**: Poor"

sd_question(
  type   = 'mc_buttons',
  id     = 'html_buttons',
  label  = "A sample survey question using `mc_buttons`",
  option = html_buttons_option
)
   