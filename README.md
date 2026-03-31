# Express API Documentation

This simple documentation explains how your Express API works, including all the main endpoints. Each endpoint section includes the HTTP method, the path, a description, required inputs, and example responses. You can copy this Markdown and use it for your project docs or README.

## API Overview

- **Base URL:** `http://localhost:3000/`
- **Content-Type:** `application/json`
- **Authentication:** `Bearer <TOKEN>`

## Endpoints

/auth
/dashboard
/my-sessions

### 1. Get All Items

- **Method:** `GET`
- **Path:** `/dashbaord`
- **Description:** Returns a list of dashbaord items.

#### Example Request

```http
GET /dashboard
```

#### Sample Response

```json
{
  "data": [
    {
      "id": "688e061a9acf9746890de0ef",
      "title": "Mindful Breathing Meditation",
      "description": "A guided session to center your thoughts and breathe deeply.",
      "instructor": "Rahul Sen",
      "duration": 20,
      "category": "Meditation",
      "rating": 4.9,
      "participants": "950",
      "imageUrl": "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?cs=srgb&dl=pexels-prasanthinturi-1051838.jpg&fm=jpg",
      "tags": ["meditation", "breathing", "calm"],
      "difficulty": "Beginner"
    },
    {
      "id": "688e061a9acf9746890de0ee",
      "title": "Morning Yoga Flow",
      "description": "Start your day with calm and energy.",
      "instructor": "Anjali Verma",
      "duration": 30,
      "category": "Yoga",
      "rating": 4.8,
      "participants": "1.2k",
      "imageUrl": "https://www.gwinnettobgyn.com/wp-content/uploads/2024/12/the-6-most-popular-yoga-workouts-1576787237.jpg",
      "tags": ["yoga", "morning", "calm"],
      "difficulty": "Beginner"
    }
  ],
  "count": 2,
  "user": {
    "email": "1@1.1"
  }
}
```

### 2. Get sessions

- **Method:** `GET`
- **Path:** `/sessions/`
- **Description:** Get all sessions(Published, draft and all).

#### Example in Request

```http
GET /sessions
```

#### Sample the Response

```json
{}
```

### 3. Create a New Session

- **Method:** `POST`
- **Path:** `/session`
- **Description:** Add a new Session.

#### Example in in Request

```http
POST /items
Content-Type: application/json
Authentication: Bearer Toekn

{
  //
  //
  //
}
```

#### Sample in Response

```json
{}
```

## Notes

- If the item is not found for any `GET`/`POST` the API should return a 404 error.

**Tip:** You can use tools like Postman to try these API endpoints easily. Just replace `/routes` with your actual route names if they are different.
