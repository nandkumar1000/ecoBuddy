const database = require('../config/mongoose');

const sampleListings = [
  {
    Facillity_Title: "Community Hall A",
    Facillity_Category: "Community",
    Facillity_Description: "A spacious hall for community events.",
    Facillity_Adderess: "123 Main Street, Springfield",
    Facillity_Latitude: 37.7749,
    Facillity_Longitude: -122.4194,
    facillity_Postcode: 94103,
    Facillity_Status: "Available",
    Facillity_Image: "https://example.com/images/community_hall_a.jpg"
  },
  {
    Facillity_Title: "Sports Complex B",
    Facillity_Category: "Sports",
    Facillity_Description: "State-of-the-art sports facilities.",
    Facillity_Adderess: "456 Elm Street, Riverdale",
    Facillity_Latitude: 40.7128,
    Facillity_Longitude: -74.0060,
    facillity_Postcode: 10001,
    Facillity_Status: "Under Maintenance",
    Facillity_Image: "https://example.com/images/sports_complex_b.jpg"
  },
  {
    Facillity_Title: "Library C",
    Facillity_Category: "Education",
    Facillity_Description: "Public library with extensive resources.",
    Facillity_Adderess: "789 Maple Avenue, Greenville",
    Facillity_Latitude: 34.0522,
    Facillity_Longitude: -118.2437,
    facillity_Postcode: 90012,
    Facillity_Status: "Available",
    Facillity_Image: "https://example.com/images/library_c.jpg"
  },
  {
    Facillity_Title: "Health Center D",
    Facillity_Category: "Health",
    Facillity_Description: "A fully equipped health center.",
    Facillity_Adderess: "321 Oak Street, Metropolis",
    Facillity_Latitude: 41.8781,
    Facillity_Longitude: -87.6298,
    facillity_Postcode: 60616,
    Facillity_Status: "Closed",
    Facillity_Image: "https://example.com/images/health_center_d.jpg"
  },
  {
    Facillity_Title: "Stadium E",
    Facillity_Category: "Sports",
    Facillity_Description: "Large stadium for various sports events.",
    Facillity_Adderess: "654 Pine Road, Bayside",
    Facillity_Latitude: 36.7783,
    Facillity_Longitude: -119.4179,
    facillity_Postcode: 93722,
    Facillity_Status: "Available",
    Facillity_Image: "https://example.com/images/stadium_e.jpg"
  }
];


module.exports = sampleListings;
