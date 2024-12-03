
const database2 = require('../config/mongoose');
const sampleListingsdata = [
  {
    Facillity_Title: "Community Garden A",
    Facillity_Category: "Gardening",
    Facillity_Description: "Shared gardening space for urban residents.",
    Facillity_Adderess: "123 Greenway Blvd, Springfield",
    Facillity_Latitude: 40.7128,
    Facillity_Longitude: -74.006,
    Facillity_Postcode: 10001,
    Facillity_Status: "Available",
    Facillity_Image: "https://example.com/images/garden_a.jpg"
  },
  {
    Facillity_Title: "Solar Charging Station B",
    Facillity_Category: "Energy",
    Facillity_Description: "Solar-powered charging station for electric vehicles.",
    Facillity_Adderess: "89 Solar Street, San Diego",
    Facillity_Latitude: 32.7157,
    Facillity_Longitude: -117.1611,
    Facillity_Postcode: 92101,
    Facillity_Status: "Available",
    Facillity_Image: "https://example.com/images/solar_station_b.jpg"
  },
  {
    Facillity_Title: "Biking Trail C",
    Facillity_Category: "Recreation",
    Facillity_Description: "Scenic biking trail surrounded by nature.",
    Facillity_Adderess: "456 Cycle Lane, Boulder",
    Facillity_Latitude: 40.015,
    Facillity_Longitude: -105.2705,
    Facillity_Postcode: 80302,
    Facillity_Status: "Available",
    Facillity_Image: "https://example.com/images/biking_trail_c.jpg"
  },
  {
    Facillity_Title: "Rainwater Harvesting Unit D",
    Facillity_Category: "Water Conservation",
    Facillity_Description: "Facility for rainwater collection and storage.",
    Facillity_Adderess: "67 Rain Alley, Austin",
    Facillity_Latitude: 30.2672,
    Facillity_Longitude: -97.7431,
    Facillity_Postcode: 73301,
    Facillity_Status: "Under Maintenance",
    Facillity_Image: "https://example.com/images/rainwater_harvesting_d.jpg"
  },
  {
    Facillity_Title: "Eco Park E",
    Facillity_Category: "Recreation",
    Facillity_Description: "Park with eco-friendly amenities and green spaces.",
    Facillity_Adderess: "234 Greenfield Ave, Portland",
    Facillity_Latitude: 45.5051,
    Facillity_Longitude: -122.675,
    Facillity_Postcode: 97201,
    Facillity_Status: "Available",
    Facillity_Image: "https://example.com/images/eco_park_e.jpg"
  },
  {
    Facillity_Title: "Recycling Center F",
    Facillity_Category: "Recycling",
    Facillity_Description: "Drop-off facility for recyclable materials.",
    Facillity_Adderess: "98 Waste-Free Drive, Seattle",
    Facillity_Latitude: 47.6062,
    Facillity_Longitude: -122.3321,
    Facillity_Postcode: 98101,
    Facillity_Status: "Available",
    Facillity_Image: "https://example.com/images/recycling_center_f.jpg"
  },
  {
    Facillity_Title: "Composting Hub G",
    Facillity_Category: "Waste Management",
    Facillity_Description: "Community composting facility for organic waste.",
    Facillity_Adderess: "876 Compost Ave, Chicago",
    Facillity_Latitude: 41.8781,
    Facillity_Longitude: -87.6298,
    Facillity_Postcode: 60605,
    Facillity_Status: "Available",
    Facillity_Image: "https://example.com/images/composting_hub_g.jpg"
  },
  {
    Facillity_Title: "Wildlife Sanctuary H",
    Facillity_Category: "Conservation",
    Facillity_Description: "Sanctuary for endangered wildlife species.",
    Facillity_Adderess: "12 Sanctuary Lane, Phoenix",
    Facillity_Latitude: 33.4484,
    Facillity_Longitude: -112.074,
    Facillity_Postcode: 85001,
    Facillity_Status: "Closed",
    Facillity_Image: "https://example.com/images/wildlife_sanctuary_h.jpg"
  },
  {
    Facillity_Title: "Urban Forest I",
    Facillity_Category: "Forestation",
    Facillity_Description: "Rehabilitated forest area in the heart of the city.",
    Facillity_Adderess: "45 Leafy Way, Los Angeles",
    Facillity_Latitude: 34.0522,
    Facillity_Longitude: -118.2437,
    Facillity_Postcode: 90012,
    Facillity_Status: "Available",
    Facillity_Image: "https://example.com/images/urban_forest_i.jpg"
  },
  {
    Facility_Title: "Eco-Friendly Workshop J",
    Facility_Category: "Education",
    Facility_Description: "Learn eco-friendly practices and sustainable living.",
    Facility_Address: "789 Knowledge Blvd, Boston, MA, 02110",
    Facility_Latitude: 42.3601,
    Facility_Longitude: -71.0589,
    Facility_Status: "Available",
    Facility_Image: "https://example.com/images/workshop_j.jpg"
  },
  {
    Facillity_Title: "Organic Farmers' Market K",
    Facillity_Category: "Organic Produce",
    Facillity_Description: "Market offering locally grown organic fruits and vegetables.",
    Facillity_Adderess: "123 Orchard Road, San Francisco",
    Facillity_Latitude: 37.7749,
    Facillity_Longitude: -122.4194,
    Facillity_Postcode: 94103,
    Facillity_Status: "Available",
    Facillity_Image: "https://example.com/images/market_k.jpg"
  }
]
module.exports = sampleListingsdata;