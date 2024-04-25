# Vue 3 (TYPESCRIPT) + Vite + NestJS

The entire application was done using the designs in https://www.figma.com/file/HzHDAngD6aOHxUmxxeNQzF/coding-test?node-id=0%3A1 while using tailwindcss (for the majority), they were followed closely however it may not be 100% accurate.

The backend app was made with NESTJS and can be checked here: https://github.com/Guayabass/birds-shockbyte-back

To register/create a birdhouse you can use the endpoint http://localhost:3000/house through a @POST request using the following body:

```
{
    "name": "Test House",
    "latitude": 1.8564564,
    "longitude": 8.3848
}
```

Since the app allows multiple registries at once, you can also send an array of objects, like this:

```
[
    {
        "name": "Test House 1",
        "latitude": 7.8564564,
        "longitude": 1.3848
    },
    {
        "name": "Test House 2",
        "latitude": 4.8564564,
        "longitude": -1.3848
    }
]
```
To update an existing birdhouse you can use the endpoint http://localhost:3000/house/:id through a @PATCH request using the following body:

```
{
    "name": "Test House Updated",
    "latitude": 2.8564564,
    "longitude": 9.3848
}
```

":id" needs to be replaced by the UBID or UUID of a birdhouse, this can be obtained through the response object when a birdhouse is created, you can also use the @GET request to show all available birdhouses using http://localhost:3000/house?page=1

For authentication in this endpoint a header named X-BID would need to be sent containing the UUID/UBID of the birdhouse as well (it compares both and also verifies). 

Birdhouses are paginated per 5, so if there's more than 5 birdhouses the next page would need to be accessed (this is also for pagination in the frontend)

To add residence data to a birdhouse you can use the endpoint http://localhost:3000/house/:id/residency through a @POST request using the following body:

```
{
    "birds": 6,
    "eggs": 68
}
```

When the request is sent, it will also automatically create a history record for the birdhouse with each of the changes for eggs and birds. This is done using triggers in the database.

To access the database an .env file can be created in the backend with the following public database:

```
DATABASE_HOST=na02-db.cus.mc-panel.net
DATABASE_PORT=3306
DATABASE_USER=db_327362
DATABASE_PASS=399c9c17ee
DATABASE_NAME=db_327362
```

Additionally, since by default there's no residence history, if a birdhouse is selected in the frontend it won't be able to load any nor the graph, so it is recommended to add residence data to a birdhouse upon creation (or use the data already in the database)

To get information of an specific birdhouse you can use the endpoint http://localhost:3000/house/:id through a @GET request, you will need to also provide a header named X-BID containing the UBID/UUID of a birdhouse along with passing the UBID/UUID in the endpoint itself.

Through the frontend most of the methods that get information from the birdhouses are also secured by using the header as well.

Birdhouses' names must be between 4 and 16 characters long.

There's a cronjob that runs every 10 minutes (can be changed to any amount of time) that checks for birdhouses that haven't been modified in 1 year or more and automatically deletes them.

Here's a small video that shows the whole project: https://screenrec.com/share/HPyfNVvumR
