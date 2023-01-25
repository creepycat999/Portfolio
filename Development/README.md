# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal was to create an easy online shoe shopping experience for people looking for a specific type of shoe (price, style, or color) so that they can quickly sort through their preferences. The value of of this to the user is that now, they can quickly find the type of shoe they want without having to search through the list manually.

### Usability Principles Considered
I made sure that the words used to sort were clearly describing the action that they do. For example, sort "alphabetically" tells the user that they can sort from A - Z. The user also has control and freedom to apply any filters and add anything to their own cart, but more importantly the freedom to clear all filters and take things out of their cart. The design is clear and simple. 

A usability principle I wish I had been able to add is having the shoes actually show up with a photo, this is clearly not usable right now since even though the shoes are being sorted, the user won't know which is which. 

### Organization of Components
My sort by and filter (shoe type and color) funtions are a component which takes in filter requirements and returns a state including only the shoes that match that filter, not any shoes that do not. This is a state because it can be easily changed as the user changes their filter preferences, and can handle any combination. The shopping cart is also a component which dynamically changes depending on what shoes are added and removed from it.

### How Data is Passed Down Through Components
The components folder holds my ShoeItem componet which organizes the shoes that are listed in the shoe-data.json file. it takes in a prop which is one type of shoe and returns that shoe and all of its properties listed out (name, description, price, etc.)

### How the User Triggers State Changes
The user triggers state changes by selecting a dropdown or a combination of dropdowns from either the sort by, shoe type, or color option, this triggers a change in which shoes are being shown, thus the state of the shoe list on the website. 
The user also does this by adding and removing things from the cart by changing the state of the carts items (number of shoes and types of shoes).

