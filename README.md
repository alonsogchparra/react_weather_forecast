# React Weather Forecast

This web app will show the weather from Region Metropolitana, Chile. (You can use any city that openweathermap has, so feel free to use this project with any city you want).

For this project I'm using the openweahtermap. If you want to sign up yo can check [here](https://openweathermap.org/)

For the Weather icons you I used owfont. You can check [here](https://websygen.github.io/owfont/)

For the Linear graph I used VX dependency. You can check [here](https://vx-demo.now.sh/)

To show dates I used moment. You can check [here](https://momentjs.com/)

And for the style I used bootstrap. You can check [here](https://create-react-app.dev/docs/adding-bootstrap/)

First you have to install the dependencies for this project. Use this command
```
yarn install
```

After install all the dependencies. In this project I'm not uploading the API Keys from **openweathermap**. So you have to create the keys folder and create the index.js folder. Check the example
```
src/
  keys/index.js
```
In the index file you will add the openweathermap key and also the city id code (All these info you can have it on the openweathermap site). Here the example

```js
export const API_ID = {YOUR OPENWEATHERMAP API};
export const COUNTRY_ID = {CITY ID - FROM OPENWEATHERMAP}
export const url = `http://api.openweathermap.org/data/2.5/forecast?id=${COUNTRY_ID}&appid=${API_ID}`
```

Once you do all the previous step the final one is run the project
```
yarn start
```
