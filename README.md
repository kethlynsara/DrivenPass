<div align="center">
	<img src="https://user-images.githubusercontent.com/98347928/179590271-23754243-b353-43dc-a8fc-3a52aa79bd49.png" />
  <p>DrivenPass</p>
</div>

# About
- Backend Development Project
- Password manager

## Usage

```bash
$ git clone https://github.com/kethlynsara/DrivenPass.git

$ cd DrivenPass

$ npm install

$ npm run dev
```
## Technologies

<div align="center">
	<img src="https://img.shields.io/badge/Node.js-316192?style=for-the-badge&logo=nodedotjs&logoColor=white" >
  <img src="https://img.shields.io/badge/git-000000.svg?style=for-the-badge&logo=git&logoColor=white" >
	<img src="https://img.shields.io/badge/TypeScript-316192?style=for-the-badge&logo=typescript&logoColor=323330" >
	<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" >
	<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" >
	<img src="https://img.shields.io/badge/Heroku-000000?style=for-the-badge&logo=heroku&logoColor=white" >
  <img src="https://img.shields.io/badge/Prisma-316192?style=for-the-badge&logo=prisma&logoColor=white" >
</div>


### API:
```
- POST /sign-up
    - Authentication route
    - headers: {}
    - body: {
        "email": "jane@gmail.com",
        "password": "janeDoe123"
    }
- POST /sign-in
    - Authentication route
    - headers: {}
    - body: {
        "email": "jane@gmail.com",
        "password": "janeDoe123"
    }
- POST /credentials
    - Route to create a credential register
    - headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY1ODE3MjM4OCwiZXhwIjoxNjYwNzY0Mzg4fQ.dLAjdiWDQx9zpHyKPlhlK6qUJ-WsPke2Cde4d1c_k98"
    }
    - body: {
        "url": "https://www.amazon.com.br/",
        "username": "jane",
        "password": "buymore",
        "title": "dream"
    }
- GET /credentials
    - Route to view a credential
    - headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY1ODE3MjM4OCwiZXhwIjoxNjYwNzY0Mzg4fQ.dLAjdiWDQx9zpHyKPlhlK6qUJ-WsPke2Cde4d1c_k98"
    }
    - body: {}
- GET /credentials/:id 
    - Route to view a specific credential
    - headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY1ODE3MjM4OCwiZXhwIjoxNjYwNzY0Mzg4fQ.dLAjdiWDQx9zpHyKPlhlK6qUJ-WsPke2Cde4d1c_k98"
    }
    - body: {}
- DELETE /credentials/:id/delete
    - Route to delete a credential register
    -   headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY1ODE3MjM4OCwiZXhwIjoxNjYwNzY0Mzg4fQ.dLAjdiWDQx9zpHyKPlhlK6qUJ-WsPke2Cde4d1c_k98"
    }
    - body: {}
- POST /notes
    - Route to create a secure note register
    - headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY1ODE3MjM4OCwiZXhwIjoxNjYwNzY0Mzg4fQ.dLAjdiWDQx9zpHyKPlhlK6qUJ-WsPke2Cde4d1c_k98"
    }
    - body: {
        "title": "jane's note",
        "note": "I'm Jane Doe"
    }
- GET /notes
    - Route to view a secure note
    - headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY1ODE3MjM4OCwiZXhwIjoxNjYwNzY0Mzg4fQ.dLAjdiWDQx9zpHyKPlhlK6qUJ-WsPke2Cde4d1c_k98"
    }
    - body: {}
- GET /notes/:id 
    - Route to view a specific secure note
    - headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY1ODE3MjM4OCwiZXhwIjoxNjYwNzY0Mzg4fQ.dLAjdiWDQx9zpHyKPlhlK6qUJ-WsPke2Cde4d1c_k98"
    }
    - body: {}
- DELETE /notes/:id/delete
    - Route to delete a secure note register
    -   headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY1ODE3MjM4OCwiZXhwIjoxNjYwNzY0Mzg4fQ.dLAjdiWDQx9zpHyKPlhlK6qUJ-WsPke2Cde4d1c_k98"
    }
    - body: {}

```

