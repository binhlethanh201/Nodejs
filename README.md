# Node.js Express Framework Learning Project

This repository contains a comprehensive Node.js Express framework learning project designed to help developers master server-side JavaScript development, Express.js framework, MongoDB integration, and full-stack web application architecture. The project features a complete course management system with CRUD operations, template engine integration, database modeling, and modern web development practices. It serves as a complete learning platform for understanding Node.js and Express.js development from basics to advanced concepts.

## Prerequisites

- Node.js (version 14 or higher) and npm installed on your system
- MongoDB installed and running locally (or MongoDB Atlas account)
- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- (Optional) A code editor like VS Code, Sublime Text, or Atom for easier code navigation
- Basic understanding of JavaScript, HTML, CSS, and web development concepts

## Installation

1. **Clone the repository** (if not already downloaded):
   ```sh
   git clone <repository-url>
   cd Nodejs-main
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Set up MongoDB**:
   - Install MongoDB locally or use MongoDB Atlas
   - Ensure MongoDB is running on `mongodb://localhost:27017/`
   - The application will automatically create the `education_dev` database

## How to Run

### Development Mode

1. **Start the application**:
   ```sh
   npm start
   ```
   This will start the server with nodemon for automatic reloading at [http://localhost:3000](http://localhost:3000).

2. **Watch SCSS files** (in a separate terminal):
   ```sh
   npm run watch
   ```
   This will automatically compile SCSS files to CSS when changes are detected.

### Production Mode

1. **Build the application**:
   ```sh
   npm run build
   ```

2. **Start production server**:
   ```sh
   node src/index.js
   ```

**Note**: The application uses nodemon for development, which automatically restarts the server when you make changes to the source code. The SCSS watcher will automatically compile your stylesheets.

## Project Structure

```
Nodejs-main/
├── src/
│   ├── app/
│   │   ├── controllers/
│   │   │   ├── CourseController.js
│   │   │   ├── MeController.js
│   │   │   ├── NewsController.js
│   │   │   └── SiteController.js
│   │   └── models/
│   │       └── Course.js
│   ├── config/
│   │   └── db/
│   │       └── index.js
│   ├── public/
│   │   ├── css/
│   │   │   ├── app.css
│   │   │   └── app.css.map
│   │   └── img/
│   │       └── logo.png
│   ├── resources/
│   │   ├── scss/
│   │   │   ├── _variables.scss
│   │   │   └── app.scss
│   │   └── views/
│   │       ├── courses/
│   │       │   ├── create.hbs
│   │       │   ├── edit.hbs
│   │       │   └── show.hbs
│   │       ├── home.hbs
│   │       ├── layouts/
│   │       │   └── main.hbs
│   │       ├── me/
│   │       │   └── stored-courses.hbs
│   │       ├── news.hbs
│   │       ├── partials/
│   │       │   ├── footer.hbs
│   │       │   └── header.hbs
│   │       └── search.hbs
│   ├── routes/
│   │   ├── course.js
│   │   ├── index.js
│   │   ├── me.js
│   │   ├── news.js
│   │   └── site.js
│   ├── util/
│   │   └── mongoose.js
│   └── index.js
├── nodemon.json
├── package-lock.json
├── package.json
└── README.md
```

- **src/app/controllers/**: MVC controllers handling business logic
  - `CourseController.js`: Course CRUD operations and management
  - `MeController.js`: User-specific course management
  - `NewsController.js`: News content handling
  - `SiteController.js`: Main site pages and search functionality
- **src/app/models/**: Database models using Mongoose ODM
  - `Course.js`: Course data model with slug generation and validation
- **src/config/db/**: Database configuration
  - `index.js`: MongoDB connection setup and management
- **src/public/**: Static assets served directly to the browser
  - `css/`: Compiled CSS files and source maps
  - `img/`: Image assets and logos
- **src/resources/**: Application resources and templates
  - `scss/`: SCSS source files for styling
  - `views/`: Handlebars template files organized by feature
- **src/routes/**: Express.js route definitions
  - `course.js`: Course-related routes (CRUD operations)
  - `me.js`: User-specific routes
  - `news.js`: News content routes
  - `site.js`: Main site routes (home, search)
  - `index.js`: Route initialization and organization
- **src/util/**: Utility functions and helpers
  - `mongoose.js`: Mongoose helper functions for data transformation
- **src/index.js**: Application entry point and server configuration

## Features

- **Express.js Framework**: Modern Node.js web application framework
- **MVC Architecture**: Model-View-Controller pattern implementation
- **MongoDB Integration**: NoSQL database with Mongoose ODM
- **Template Engine**: Handlebars for server-side rendering
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **RESTful API Design**: Proper HTTP method usage and route structure
- **Static File Serving**: CSS, images, and other static assets
- **Form Handling**: POST/PUT/DELETE request processing
- **URL Slug Generation**: SEO-friendly URLs for courses
- **SCSS Compilation**: Modern CSS preprocessing with automatic compilation
- **Development Tools**: Nodemon for automatic server restart
- **Method Override**: Support for PUT/DELETE requests in forms
- **Morgan Logging**: HTTP request logging (configurable)
- **Bootstrap Integration**: Modern responsive UI framework
- **YouTube Integration**: Automatic thumbnail generation from video IDs

## Learning Modules

### Express.js Framework (`src/index.js`)

This module covers the fundamentals of Express.js:
- **Server Setup**: Creating and configuring Express applications
- **Middleware Integration**: Body parsing, static files, method override
- **Template Engine Configuration**: Handlebars setup and customization
- **Route Organization**: Modular routing with Express Router
- **Database Connection**: MongoDB integration with Mongoose
- **Development Tools**: Nodemon configuration for hot reloading

### MVC Architecture

This module demonstrates Model-View-Controller pattern:

#### Models (`src/app/models/`)
- **Course Model**: Mongoose schema with validation and middleware
- **Slug Generation**: Automatic URL-friendly slug creation
- **Timestamps**: Automatic creation and update timestamps
- **Data Validation**: Required fields and data type validation

#### Views (`src/resources/views/`)
- **Layout System**: Master layout with partials (header, footer)
- **Template Organization**: Feature-based view organization
- **Bootstrap Integration**: Responsive UI components
- **Dynamic Content**: Server-side rendering with Handlebars
- **Form Templates**: Create, edit, and search forms

#### Controllers (`src/app/controllers/`)
- **CRUD Operations**: Complete course management functionality
- **Request Handling**: GET, POST, PUT, DELETE method processing
- **Data Transformation**: Mongoose object to plain object conversion
- **Error Handling**: Proper error catching and next() usage
- **Redirect Management**: Proper HTTP redirects after operations

### Routing System (`src/routes/`)

This module covers Express.js routing:
- **Modular Routes**: Separate route files for different features
- **Route Parameters**: Dynamic URL parameters and slug handling
- **HTTP Methods**: Proper usage of GET, POST, PUT, DELETE
- **Route Organization**: Clean separation of concerns
- **Middleware Integration**: Route-specific middleware usage

### Database Integration (`src/config/db/`)

This module covers MongoDB and Mongoose:
- **Connection Management**: MongoDB connection setup and error handling
- **Schema Design**: Mongoose schema definition and validation
- **Middleware**: Pre-save hooks for data transformation
- **Query Operations**: Find, create, update, delete operations
- **Data Relationships**: Model associations and references

### Frontend Development

This module covers client-side development:
- **SCSS Processing**: Modern CSS with variables and nesting
- **Bootstrap Framework**: Responsive design and UI components
- **Static Asset Management**: CSS, images, and other resources
- **Template Integration**: Server-side rendering with dynamic content
- **Form Handling**: Client-side form validation and submission

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development
- **Express.js 5.1.0**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose 7.8.7**: MongoDB object modeling tool
- **Express-Handlebars 8.0.1**: Template engine for server-side rendering
- **Method-Override 3.0.0**: HTTP method override middleware
- **Morgan 1.10.0**: HTTP request logger middleware
- **Nodemon 3.1.10**: Development server with auto-restart
- **Sass 1.89.0**: CSS preprocessor for advanced styling
- **Bootstrap 5.3.6**: Frontend CSS framework
- **Slugify 1.6.6**: URL-friendly string generation

## Development Workflow

### For Development

1. **Start Development Server**: Run `npm start` for hot reloading
2. **Watch SCSS Files**: Run `npm run watch` for automatic CSS compilation
3. **Database Setup**: Ensure MongoDB is running locally
4. **Code Changes**: Files automatically reload when modified

### For Production

1. **Build Assets**: Compile SCSS and optimize static files
2. **Environment Setup**: Configure production database and environment variables
3. **Server Deployment**: Deploy to production server or cloud platform
4. **Monitoring**: Set up logging and monitoring for production

## Learning Path

### Beginner Level
1. Start with `src/index.js` to understand Express.js setup
2. Explore `src/routes/` to learn routing concepts
3. Study `src/app/models/` for database modeling

### Intermediate Level
1. Implement CRUD operations in controllers
2. Create custom routes and middleware
3. Design and implement new features

### Advanced Level
1. Add authentication and authorization
2. Implement API endpoints
3. Add testing and deployment configurations
4. Optimize performance and security

## Best Practices Demonstrated

- **MVC Pattern**: Clear separation of concerns
- **Modular Architecture**: Feature-based file organization
- **Error Handling**: Proper error catching and logging
- **Security**: Input validation and sanitization
- **Performance**: Efficient database queries and caching
- **Code Organization**: Consistent naming conventions and structure
- **Documentation**: Clear code comments and README
- **Version Control**: Proper Git workflow and commit messages

## API Endpoints

### Course Management
- `GET /courses` - List all courses
- `GET /courses/create` - Show course creation form
- `POST /courses/store` - Create new course
- `GET /courses/:slug` - Show course details
- `GET /courses/:id/edit` - Show course edit form
- `PUT /courses/:id` - Update course
- `DELETE /courses/:id` - Delete course

### User Management
- `GET /me/stored/courses` - Show user's stored courses
- `GET /me/trash/courses` - Show deleted courses
- `PATCH /me/stored/courses/:id/restore` - Restore deleted course
- `DELETE /me/stored/courses/:id/force` - Permanently delete course

### Site Pages
- `GET /` - Home page
- `GET /search` - Search page
- `POST /search` - Search functionality
- `GET /news` - News page

## Troubleshooting

- **Database Connection**: Ensure MongoDB is running on localhost:27017
- **Port Conflicts**: Change port in `src/index.js` if 3000 is busy
- **Dependencies**: Run `npm install` if modules are missing
- **SCSS Compilation**: Ensure `npm run watch` is running for CSS updates
- **File Permissions**: Check file permissions for static assets
- **Console Errors**: Check terminal and browser console for error messages

## Contributing

This is a learning project designed for educational purposes. Feel free to:
- Modify examples to experiment with different approaches
- Add new features and functionality
- Improve documentation and comments
- Share your learning experiences
- Report bugs and suggest improvements

## Learn More

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Handlebars Documentation](https://handlebarsjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Sass Documentation](https://sass-lang.com/documentation)

For questions or contributions, please open an issue or pull request on the GitHub repository.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
