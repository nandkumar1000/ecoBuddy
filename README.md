# 🌍 EcoBuddy

![EcoBuddy GIF](https://media.giphy.com/media/26BGD4XaoPO3zTz9K/giphy.gif)

**EcoBuddy** is your all-in-one platform to discover and access environment-friendly resources and facilities like charging stations, community gardens, wildlife parks, sports complexes, and much more. It’s a hub for everything sustainable and green! 🌱

---

## 📖 Overview
EcoBuddy is designed to connect users with eco-friendly resources, helping them embrace a greener lifestyle. Whether you're looking for a charging station for your electric vehicle, a peaceful walk in a wildlife park, or joining a community gardening initiative, EcoBuddy makes it accessible and convenient.

---

## ✨ Abstract

The demand for eco-conscious solutions is growing rapidly. EcoBuddy bridges the gap between users and resources aimed at promoting sustainability. By offering a centralized platform, EcoBuddy empowers users to make environmentally conscious choices in their daily lives.

---

## 🚀 Key Features

- **🔋 Charging Stations**: Locate and access EV charging points near you.
- **🌼 Community Gardens**: Participate in local gardening projects and events.
- **🏀 Sports Complex**: Explore eco-friendly sports facilities.
- **🐾 Wildlife**: Discover nearby wildlife sanctuaries and parks.
- **🏛️ Halls**: Reserve eco-friendly venues for your events.
- **💡 User-Friendly**: Intuitive design for seamless navigation.
- **📍 Location-Based Search**: Find resources based on your current location.
- **📱 Cross-Platform**: Accessible via mobile and web.

---

## 🛠️ Technology Stack

- **Frontend**: HTML, CSS, EJS, Bootstrap, JavaScript
- **Backend**: Node.js, Express.js
- **Authentication**: Passport.js
- **Database**: MongoDB
- **APIs**: Google Maps API for location services
- **Content Delivery**: CDN for assets
- **Version Control**: GitHub

---

## 💡 Use Cases

- **Electric Vehicle Owners**: Locate charging stations quickly.
- **Nature Enthusiasts**: Discover nearby wildlife parks and eco-friendly spaces.
- **Community Members**: Join local sustainability events and projects.
- **Event Organizers**: Reserve environmentally conscious venues for gatherings.
- **Fitness Lovers**: Access eco-friendly sports complexes.

---

## 🗂️ File Structure

```
EcoBuddy/
├── public/
│   ├── index.html
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── Header.ejs
│   │   ├── Footer.ejs
│   │   └── Map.ejs
│   ├── styles/
│   │   └── main.css
│   ├── app.js
│   └── routes/
│       └── api.js
├── .env
├── package.json
├── README.md
└── views/
    ├── layout.ejs
    ├── index.ejs
    └── dashboard.ejs
```

---

## 🛠️ How to Use

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
     API_KEY=your_google_maps_api_key
     ```

5. **Start the Application**
   ```bash
   npX nodemon index.js
   ```

6. **Access the Application**
   Open your browser and go to `http://localhost:8080`

7. **Explore**
   - Use the navigation menu to locate charging stations, gardens, halls, and more!

---

## 🎯 Conclusion

EcoBuddy is more than just a platform; it’s a step towards a sustainable future. By connecting users with resources that promote environmental well-being, EcoBuddy encourages a greener and healthier way of life.

---

## 👨‍💻 Developer
**Nand Kumar Sahu**

---

Contributions, suggestions, and feedback are welcome! Let's make EcoBuddy better, together! 🌟

