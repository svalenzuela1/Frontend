# Project Overview

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Complete

## Project Description

For this project, I will be making an e-commerce website for videogames. I will begin my backend api that will be responsible for bringing in the images or gifs to the front-end. I will then utilize jQuery to make on click buttons to have totals add up. 

## Wireframes

- [Mobile](https://res.cloudinary.com/stephaniev/image/upload/v1596156379/p2-mobile_responsive_framework_llfqke.png)
- [Tablet](https://res.cloudinary.com/stephaniev/image/upload/v1596156364/p2-_tablet_responsive_framework_gbavjt.png)
- [Desktop](https://res.cloudinary.com/stephaniev/image/upload/v1596211336/Screen_Shot_2020-07-31_at_12.01.05_PM_w5ijb2.png)

Wireframing Resources:

- [Wireframe.cc](https://wireframe.cc/)


## Time/Priority Matrix 

 [prioritized](https://res.cloudinary.com/stephaniev/image/upload/v1596220903/FRONTEND_-_TIME_PRIORITY_MATRIX_rdsema.png) 

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger | H | 1hr | 1hr | 1hr|
| grid-area | H | 3hrs | 0hr | 0hr|
| flexbox | H | 3hrs | 1hr | 1hr|
| buttons | H | 2hrs| 1hr | 1hr |
| Total | H | 15.5hrs| 3hrs | 3hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Logos | L | 1hr | 1hr | 1hr|
| Design | M | 5hrs | 5hrs | 5hrs|
| Total | H | 5hrs| 6hrs | 6hrs |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
const body = {
        productToAdd: event.target.id
}
const response = await fetch(URL + '/carts/' +  $('button.cart').attr('id'), {
    method: "put", 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)

}).then(res => res.json())


showCart(response.product)
}
```


#### SAMPLE.....
**ERROR**: API is not showing onto main page
**RESOLUTION**: use of 'product' and 'cart' instead of 'productModel' and 'cartModel'

