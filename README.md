# GARDNR APP

##  The idea
A lot of families have plants inside the house or in their own garden. But we always forget to give them water or to 
move them inside when the harsh weather is coming. 
The first idea was to build a big app connecting to different api (weather, shops, etc.) in order to offer a complete
experience to the user.

Sadly we moved away from the initial idea due to high complexity, wrong choices and a near deadline.
In the current version the user can add, update or remove plants to/from the personal garden. In the personal garden
the user can find some general information about the plants (name, the recommended watering interval and a section with
a countdown to remind you the next watering session).

## The planning
The plan was to use an external API to obtain the data about the plants and then store some information in the 
user's garden (the information needed for taking care of the plant). 
When the user log in the app shows the those information . 
If the user wants more information then a new card with the detailed information is presented to the user. 
The user can check for the local shop where to find the desired plants. 
The user receive a reminder when the plant needed to be watered and if must be moved inside due to bad weather forecast.


[//]: # (But we didn't find any API with the information we needed so we decided to simulate an API with MongoDB, but after)
[//]: # (evaluating pros and cons we switched to a full postgreSQL DB platform.)
[//]: # ()
[//]: # (For the FE we started with Next.js@13 but we faced many difficulties &#40;lack of general knowledge, lack of documentation&#41; )
[//]: # (so we switched to Next.js@12 but we still had to face the lack of general knowledge. Since the team knew React better, )
[//]: # (we decided to switch again in order to avoid being stuck for to long. )


## The development
During the development we faced many difficulties and obstacle. 
The first one was the search for an API: even if there was some good API none of them provided enough information for 
our application. This made us change the initial design and reconsider our initial plan.
The first option was to use MongoDB to simulate an external API and then store the desired information in the user's
garden. After evaluating pros and cons (and tried different solutions) we decided to adopt a full postgreSQL platform.

Moving to a relational DB made us change how the information must be saved.

For the FE we decided for a nice looking interface but we focused on the functional aspect: we wanted the user to 
interact the less as possible while enjoying the experience. We switched between different frameworks before adopting 
the final one.

ALl those drawbacks made us waste precious time and we were forced to drop some features.

The app allows the user to search for a specific plant to add in the user's garden, to check the status of the plants,
to change the name (in case of more plants located in different area of the house) and to remove a plant when it dies.

## Tech stack used
### Before starting
As mentioned before, we faced a lot of 
### DB: PostgreSQL

### BE: Java Spring Boot Framework

### FE: React

