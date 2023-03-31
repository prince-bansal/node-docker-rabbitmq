HI, THIS IS A DOCKER COMPOSE PROJECT WITH 2 NODEJS SERVICES 
WHERE
ONE ACTING AS CONSUMER AND ONE ACTING AS PRODUCER FOR RABBITMQ

IT IS WORKING PERFECTLY FINE

RUN THESE COMMANDS:
-- docker run --name rabb -p 5672:5672 rabbitmq         -- to run the rabbitmq image locally
-- docker-compose up        -- to up the containers
-- docker network connect em rabb




second version

added rabbitmq in compose only now just run docker-compose

ADDED HEALTH CHECKUPS so that producer and consumer only run after the rabbit mq is up and running