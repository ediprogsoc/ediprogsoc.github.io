# Integration Design
> The aim of this document is to explore how the website can fill in any gaps in functionality of the currently utilised services and fix the present lack of co-operation between them.
## Current Services
- #### EUSA Activities Portal
  - Contains **official** list of society members (**must be updated**)
  - Membership can be bought online here
  - List is behind paywall, i.e. must have payed to be on the membership list
  - People who pay in-person should be added manually
  - This list **has no association** with the *Mailing List*
  - List **is wiped** at the end of the year
  
- #### MailChimp
  - Contains mailing list of all signups
  - Not all signups are members
  - Signups from previous years are kept
  - *Can generate nice-looking signup form to embed in website*
  
- #### Facebook
  - Used in partnership with *MailChimp* (e-mail) to communicate with members/interested parties
  - Provides society awareness
  
## Website-Extended Services Outline (Proposed)
### What's Missing?
- Easy (any) access to mailing list signup - users can buy a membership through EUSA, but as mentioned above, membership list **has no association** with the *Mailing List*
- Any information on the society, its motives, aims, past projects etc. - a **very** brief summary is on the EUSA page but frankly this looks repellant and is somewhat hard to find
- A place to point potential sponsors and (less so) members - Facebook is a little unprofessional, and as aforementioned, contains no info about the society
- A welcoming internet search result when searching `edinburgh university programming society` or similar - currently the first result is the EUSA page (see above)
### What Could Be Better?
  - Management of membership list vs mailing list (EUSA vs MailChimp) - purchasing a membership should probably result in automatic addition to the mailing list (obviously not vice versa)
  - Would also want the MailChimp list to keep track of who is a paid member - communication between lists is important
  
### Potential List Design Options
> **Requirement:** All members are mail recipients but not all mail recipients are members
- Maintain 2 separate lists - mailing (MailChimp) and membership (EUSA). Include the signup form for the mailing list on the website and link at the end to the EUSA membership page to buy
  membership if wanted.
  
  | Pro | Con |
  ------|------
  | Allows people to be on the mailing list but not a member | Those who go straight to EUSA and buy membership will not be on the mailing list|
  | Allows people to sign up for the mailing list straight from the website |  |
  
- Keep all people in 1 'master' list, whose members are all on the mailing list, but some are not members. This list is either in MailChimp - website has signup form and EUSA list is manually
  updated, or is in EUSA - manually update the MailChimp list.

  | Pro | Con |
  ------|------
  | 1 list is potentially much simpler than 2 | MailChimp and EUSA both **need** a list so copying/ duplication required - can become complex|
  |  | Those who go straight to EUSA and buy membership will not be on the mailing list |
  |  | If master list is EUSA, **cannot have mail recipients who are not members** |
  
- Do not use EUSA at all and instead accept payment for memberships through the website directly.

  | Pro | Con |
  ------|------
  | Requires only 1 list (MailChimp) | Need to take payment through site securely - more complex |
  | Everything done through 1 place (website) | Forgoes EUSA's credibility and authentication |
  
- Do not use MailChimp at all and instead use EUSA's own emailing services.

  | Pro | Con |
  ------|------
  | Simplifies the 2 list problem (everything is done through EUSA) | Lose access to MailChimp's rich resources (both UI & functional) |
  | | Cannot account for people who want to be on the mailing list but not a member |
  
### Site Functionality (*Recommended*)

- Website should include [Mailchimp form](https://mailchimp.com/features/custom-forms/) which signs them up to the mailing list. It can then point
  them to the [EUSA page](https://www.eusa.ed.ac.uk/activities/societies/society/17825/) to buy membership if wanted. Use a [script](https://github.com/compsoc-edinburgh/eusa-members-api) (?!) to add those
  on the members list to the mailing list if not present at regular intervals.
