# apiProject

This was created during my time as a student at Code Chrysalis.

## What is this for?

Perform CRUD operations on Postgres database with dummy "Users" data.


## How to use

* POST

 ``` 
Signature: name: string!, password: string!
=> Object(name: string, session: string)
  ```
  
* GET

 ``` 
Signature: id: integer, name: string, password: string, session: string
=> Object(id: integer, name: string, session: string)
  ```
  
* PATCH

 ``` 
Signature: selector: Object(id: integer, name: string, password: string, session: string), data: Object(id: integer, name: string, password: string, session: string)
=> Object(id: integer, name: string, session: string)
  ```
  
* DELETE

 ``` 
Signature: name: string, password: string
=> affectedRows: integer
  ```
