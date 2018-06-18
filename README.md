This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

**Running the project:**

1.  Run `yarn install` , to install the project dependencies
2.  Run `yarn start` , to start the project

The project is now running at [http://localhost:3000](http://localhost:3000)

In the given server, I added the following to be able to make request on my local network

```javascript
.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
```

I liked the original design in the trial task image, so I decided to go with that design. To display more info, I used the hover over the profile image.

I generally tried to make the design as responsive as possible.

Finally, I used moment.js to display the "x time ago" message, it might be overkill, but it was the easiest way to me.
