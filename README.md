

```markdown
# 🌍 EcoBuddy

![EcoBuddy GIF](https://media.giphy.com/media/26BGD4XaoPO3zTz9K/giphy.gif)

*EcoBuddy* is your all-in-one platform to discover and access environment-friendly resources and facilities like charging stations, community gardens, wildlife parks, sports complexes, and much more. It’s a hub for everything sustainable and green! 🌱

---

## 📖 Overview
EcoBuddy is designed to connect users with eco-friendly resources, helping them embrace a greener lifestyle. Whether you're looking for a charging station for your electric vehicle, a peaceful walk in a wildlife park, or joining a community gardening initiative, EcoBuddy makes it accessible and convenient.

The platform uses cutting-edge technologies like **Google OAuth 2.0**, **RESTful APIs**, and **MongoDB** to deliver a secure and scalable experience.

---

## ✨ Abstract

The demand for eco-conscious solutions is growing rapidly. EcoBuddy bridges the gap between users and resources aimed at promoting sustainability. By offering a centralized platform, EcoBuddy empowers users to make environmentally conscious choices in their daily lives, providing seamless access to valuable eco-friendly resources.

---

## 🚀 Key Features

- **🔋 Charging Stations**: Locate and access EV charging points near you with real-time availability.
- **🌼 Community Gardens**: Participate in local gardening projects and events.
- **🏀 Sports Complex**: Explore eco-friendly sports facilities for physical fitness.
- **🐾 Wildlife**: Discover nearby wildlife sanctuaries, national parks, and green zones.
- **🏛 Halls**: Reserve eco-friendly venues for your events.
- **🔒 Secure Authentication**: Integrated with Google OAuth 2.0 for user authentication.
- **🛠 File Uploads**: Upload images or documents with Multer for managing user-generated content.
- **📍 Location-Based Search**: Use Google Maps API to find resources based on your current location.
- **📱 Cross-Platform**: Responsive design for mobile and web.
- **📊 Analytics Dashboard**: Admins can monitor user activity and resource usage.
- **✨ User Feedback**: Collect reviews and ratings to improve listed services.
- **🎯 Event Scheduling**: Join or create sustainable events through the platform.

---

## 🛠 Technology Stack

- **Frontend**: HTML, CSS, EJS, Bootstrap, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose for schema-based data modeling
- **Authentication**: Google OAuth 2.0, Passport.js
- **APIs**:
  - RESTful APIs for seamless communication
  - Google Maps API for location-based services
- **File Uploads**: Multer for handling file uploads (e.g., images, documents)
- **Session Management**: Cookies and Flash Tokens for secure user sessions
- **Content Delivery**: CDN for serving static assets quickly
- **Version Control**: GitHub for collaboration and code management

---

## 🗂 File Structure

EcoBuddy/
├── public/
│   ├── index.html
│   └── assets/
│       ├── images/
│       └── styles/
│           └── main.css
├── src/
│   ├── components/
│   │   ├── Header.ejs
│   │   ├── Footer.ejs
│   │   └── Map.ejs
│   ├── controllers/
│   │   ├── listingsController.js
│   │   ├── reviewController.js
│   │   └── navigationController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Listing.js
│   │   └── Review.js
│   ├── routes/
│   │   ├── listingsRouter.js
│   │   ├── reviewRouter.js
│   │   └── navigateRouter.js
│   ├── utils/
│   │   ├── geoLocationHelper.js
│   │   └── fileUploader.js
│   ├── app.js
│   └── config/
│       ├── database.js
│       └── passport.js
├── .env
├── package.json
├── README.md
└── views/
    ├── layout.ejs
    ├── index.ejs
    └── dashboard.ejs

---

## 🌟 Core Features in Depth

### 🔒 Secure Authentication
EcoBuddy uses **Google OAuth 2.0** to provide secure and seamless user login. This integration ensures user data is protected while offering convenience.

### 📍 Location-Based Search
With the **Google Maps API**, users can search for nearby eco-friendly resources using their current location, making navigation hassle-free.

### 🛠 File Uploads
Using **Multer**, users can upload images, such as photos of community gardens or EV charging stations, to contribute to the platform.

### 🌐 RESTful APIs
The platform adheres to REST principles, making the API endpoints simple and intuitive. Examples include:
- `/api/listings` for managing resource data.
- `/api/reviews` for user feedback and ratings.

### 🍪 Session Management
Cookies and flash tokens ensure secure sessions and display contextual alerts (e.g., success messages after an action).

---

## 🛠 How to Use

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/NandKumarSahu/EcoBuddy.git
   ```

2. **Navigate to the Project Directory**  
   ```bash
   cd EcoBuddy
   ```

3. **Install Dependencies**  
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**  
   - Create a `.env` file in the root directory.
   - Add the following variables:  
     ```env
     DATABASE_URL=your_mongodb_connection_string
     SESSION_SECRET=your_session_secret
     GOOGLE_CLIENT_ID=your_google_oauth_client_id
     GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
     API_KEY=your_google_maps_api_key
     ```

5. **Start the Application**  
   ```bash
   npx nodemon index.js
   ```

6. **Access the Application**  
   Open your browser and go to `http://localhost:8080`.

7. **Explore**  
   - Use the navigation menu to locate charging stations, gardens, halls, and more!

---

## 💡 Use Cases

- **Electric Vehicle Owners**: Locate EV charging stations with real-time availability.
- **Nature Enthusiasts**: Discover wildlife parks, eco-friendly spaces, and gardens.
- **Event Organizers**: Reserve environmentally conscious venues for gatherings.
- **Fitness Lovers**: Access eco-friendly sports complexes.
- **Community Builders**: Organize or participate in local sustainability events.

---

## 🎯 Conclusion

EcoBuddy is more than just a platform; it’s a step toward a sustainable future. By connecting users with eco-friendly resources and promoting environmental well-being, EcoBuddy encourages a greener and healthier lifestyle.

---

## 👨‍💻 Developer

Contributions, suggestions, and feedback are welcome! Let's make EcoBuddy better, together! 🌟
```

### Enhancements Added:
1. **Detailed file structure**:
   - Added new folders like `middlewares`, `utils`, and `config`.
   - Expanded on specific controllers, routers, and models.
2. **Features in-depth**:
   - Highlighted core features like OAuth integration, RESTful APIs, file uploads, and location-based search.
3. **Session Management**:
   - Included details about cookies and flash tokens for better user experience.
4. **Use Cases**:
   - Broadened the examples to connect with more audiences.
5. **Tech Stack**:
   - Clearly detailed each component and its role in the architectures.