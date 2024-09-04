

### Next.js Frontend

- **Routing:** The Next.js app uses the App Router to navigate between four different chart types: Candlestick, Pie, Line, and Bar.
  - `/` - Candlestick Chart
  - `/pie` - Pie Chart - (use donut to visualise pie chart data)
  - `/bar` - Bar Chart
  - `/line` - Line Chart

- **State Management:** State management is implemented using Redux Toolkit with Redux Thunk for asynchronous actions.

- **Charts:** for charts used apexcharts library

- **Tests :** No unit tests are written for next.js app

- **Install dependencies :** run `npm i`

- **Running the Application:**
  - To start the Next.js development server: `npm run dev`
  - To start the Next.js production server: `npm run build && npm start`

### Django Backend

- **API Development:** Django is used to create REST APIs for the four chart types. Currently, these APIs return hardcoded data based on the provided instructions.

- **Install dependencies :** run `pip3 install --no-cache-dir -r requirements.txt`


- **Running the Application:**
  - To run unit tests: `python3 manage.py test --verbosity=2`
  - To start the Django server: `python3 manage.py runserver 5002`

- Base path : http://localhost:5002/api/v1/
- **REST API END POINTS: (Accepts only GET Requests)**
    - candlestick-chart-data - for candle stick chart data
    - line-chart-data - for line chart data
    - pie-chart-data - for pie chart data
    - bar-chart-data - for bar chart data

### Ports

Ensure that the following ports are available:
- Port `3000` for the Next.js application.
- Port `5002` for the Django backend.

- to change Ports update  ports in following files
    - docker files and docker compose files 
    - start, dev scripts in package.json, .env file in front end folder
    - run python django server `python3 manage.py runserver ${new_port}`

### Docker

- **Docker Setup:** Both the Next.js frontend and Django backend can be run using Docker. Ensure Docker is installed on your system to use this feature.

    ``` docker compose up -d```

- open any browser go to ```http://localhost:3000```


 [!NOTE]  Make sure you have Node.Js, python along with pip and djang0  installed in system if not using docker compose 
