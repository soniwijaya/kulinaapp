# KULINA APP ENDPOINT CRUD

### REST API SERVER

### Link API
 http://localhost/kulinaapp/public/api

 Route | HTTP | Description | Parameter
 ----- | ---- | ----------- | ---------
 [/api](/api) | GET | for view all user review | -
 [/api](/api) | POST | for create new user review | order_id: int, product_id: int, user_id: int, rating: float, review: string
 [/api/{id}](/api/{id}) | PUT | for update single user review | id: Int, order_id: int, product_id: int, user_id: int, rating: float, review: string
 [/api/{id}](/api/{id}) | DELETE | for delete single user review | id: Int