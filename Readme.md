## Questions

- missingInvoice.js: questions 1
- largestSum.js: questions 2
- subarrays.js: questions 4

## express API

Apis to perform CRUD operations on tasks
APIS paths:

- Add tasks

```
  path: /api/tasks
  method: POST
  body: {
  title: string;
  description: string
  }
```

- Get tasks

```
  path: /api/tasks
  method: GET
```

- Edit tasks

```
  path: /:id
  method: PUT
  params: {
  id: task ID
  }
  body: {
  title: string;
  description: string
  }
```

- Delete Tasks

```
  path: /:id
  method: DELETE
  params: {
  id: task ID
  }
```

## Flutter App

flutterApp/weather_app

### To tun the app follow the steps

install the project dependencies:

```
flutter pub get
```

Run app using

```
flutter run
```
