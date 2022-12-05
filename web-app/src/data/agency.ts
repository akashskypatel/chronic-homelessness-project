import { Agency } from "./models"

export const AgencyList: Array<Agency> = [
  {
    "id": "5f843d36-b507-4406-9969-5e47f4b6f4f6",
    "name": "Salvation Army",
    "address": "624 Lexington Ave. Orlando, FL 32801",
    "geocode": { "lat": 28.551981382971864, "lng": -81.38431924083704 },
    "contactPhone": "407.423.8581",
    "website": "https://salvationarmyflorida.org/orlando#assistance",
    "publicContactEmail": "robin.smith@uss.salvationarmy.org",
    "cityContactEmail": "robin.smith@uss.salvationarmy.org",
    "services": ["Food (Meals)", "Shelter (Men)"],
    "dateCreated": new Date("2021-09-03T00:00:00.000+00:00"),
    "dateUpdated": new Date("2021-12-05T00:00:00.000+00:00"),
    "dateLastEmailed": new Date("2022-06-01T00:00:00.000+00:00"),
    "active": true,
    "hours": {
      "sunday": "Closed",
      "monday": "8:00AM - 5:00PM",
      "tuesday": "8:00AM - 5:00PM",
      "wednesday": "8:00AM - 5:00PM",
      "thursday": "8:00AM - 5:00PM",
      "friday": "8:00AM - 5:00PM",
      "saturday": "8:00AM - 5:00PM"
    },
    "servicesInfo": [
      {
        "enabled": true,
        "service": "Food (Meals)",
        "serviceId": "4",
        "differentHours": true,
        "hours": {
          "sunday": "3:30PM - 4:30PM",
          "monday": "3:30PM - 4:30PM",
          "tuesday": "3:30PM - 4:30PM",
          "wednesday": "3:30PM - 4:30PM",
          "thursday": "3:30PM - 4:30PM",
          "friday": "3:30PM - 4:30PM",
          "saturday": "3:30PM - 4:30PM"
        },
        "description": "This service is available to anyone in need of a hot meal and conversation. Unfortunately due to COVID-19, we have switched from traditional dinners to bagged dinners. The daily service is at our Men's Shelter located at 624 Lexington Ave. Orlando, FL 32801 from 3:30 p.m. to 4:30 p.m."
      },
      {
        "enabled": true,
        "service": "Shelter (Men)",
        "serviceId": "10",
        "differentHours": true,
        "hours": {
          "sunday": "4:00PM - 6:00PM",
          "monday": "4:00PM - 6:00PM",
          "tuesday": "4:00PM - 6:00PM",
          "wednesday": "4:00PM - 6:00PM",
          "thursday": "4:00PM - 6:00PM",
          "friday": "4:00PM - 6:00PM",
          "saturday": "4:00PM - 6:00PM"
        },
        "description": "The Men's Shelter serves the Orlando Metropolitan Area as a 116 bed facility for men experiencing homelessness. This facility supports the mission of The Salvation Army by providing warmth and shelter to homeless men. Residents are offered both emergency shelter services and transitional programming in conjunction with both Housing and Urban Development and The Veteran's Administration."
      }
    ]
  },
  {
    "id": "01e49ecf-32ec-4b18-a623-e500a3330d82",
    "name": "Orange County Health Department",
    "address": "832 W. Central Blvd., Orlando, FL 32805",
    "geocode": {
        "lat": 28.541372,
        "lng": -81.39131
    },
    "contactPhone": "407.858.1430",
    "website": "https://orange.floridahealth.gov/",
    "publicContactEmail": "DLCHD48WebFeedback@flhealth.gov",
    "cityContactEmail": "DLCHD48WebFeedback@flhealth.gov",
    "hours": {
        "sunday": "Closed",
        "monday": "8:00AM - 5:00PM",
        "tuesday": "8:00AM - 5:00PM",
        "wednesday": "8:00AM - 5:00PM",
        "thursday": "8:00AM - 5:00PM",
        "friday": "8:00AM - 5:00PM",
        "saturday": "Closed"
    },
    "services": [
        "Health/Medical/Dental"
    ],
    "dateCreated": new Date("2010-08-14T00:00:00.000+00:00"),
    "dateUpdated": new Date("2021-07-14T00:00:00.000+00:00"),
    "dateLastEmailed": new Date("2022-03-14T00:00:00.000+00:00"),
    "active": true,
    "servicesInfo": [
        {
            "enabled": true,
            "service": "Health/Medical/Dental",
            "serviceId": "6",
            "differentHours": false,
            "hours": {
                "sunday": "",
                "monday": "",
                "tuesday": "",
                "wednesday": "",
                "thursday": "",
                "friday": "",
                "saturday": ""
            },
            "description": "Due to COVID-19, appointments must be made to be seen. Offers HIV/STD testing, immunization, vital statistics, and WIC services, and more. Services at this location and other branch locations might include: clinical and nutrition services; infant, child and adolescent health, community health, emergency preparedness and response, men's health, minority health and health equity, non-opiod pain management, people with disabilities services, and women's health."
        }
    ]
},
{
  "id": "fb383ef0-c5c1-49cc-9430-f7c0ec848e5e",
  "name": "Coalition for the Homeless",
  "address": "18 North Terry Avenue, Orlando, FL 32801",
  "geocode": {
      "lat": 28.543367,
      "lng": -81.38737
  },
  "contactPhone": "407-652-5310",
  "website": "https://www.centralfloridahomeless.org/drop-in-services",
  "publicContactEmail": "coalition@cflhomeless.org",
  "cityContactEmail": "coalition@cflhomeless.org",
  "hours": {
      "sunday": "Closed",
      "monday": "7:00AM - 3:00PM",
      "tuesday": "7:00AM - 3:00PM",
      "wednesday": "7:00AM - 3:00PM",
      "thursday": "7:00AM - 3:00PM",
      "friday": "7:00AM - 3:00PM",
      "saturday": "Closed"
  },
  "services": [
      "Drop-in Center",
      "Food (Meals)",
      "Showers/Hygiene"
  ],
  "dateCreated": new Date("2022-01-19T00:00:00.000+00:00"),
  "dateUpdated": new Date("2022-06-18T00:00:00.000+00:00"),
  "dateLastEmailed": new Date("2022-09-13T00:00:00.000+00:00"),
  "active": true,
  "servicesInfo": [
      {
          "enabled": true,
          "service": "Drop-in Center",
          "serviceId": "0",
          "differentHours": true,
          "hours": {
              "sunday": "Closed",
              "monday": "8:00AM - 3:00PM",
              "tuesday": "8:00AM - 3:00PM",
              "wednesday": "8:00AM - 3:00PM",
              "thursday": "8:00AM - 3:00PM",
              "friday": "8:00AM - 3:00PM",
              "saturday": "Closed"
          },
          "description": "In order to ensure that shelter beds are utilized by those most in need, our Diversion Services help homeless individuals and families find housing options outside the homeless services system.\nHousing Counselors can assist with conflict resolution and negotiations between clients and their family members, significant others, friends, or previous landlords in an effort to secure or restore immediate housing.\nThis program is provided in partnership with Orange County Government.\nPedestrians: Please enter the campus through the gate located on Parramore Avenue, between Central Boulevard and Ossie Street.\nVehicles: Please enter through the gate at 18 North Terry Avenue."
      },
      {
          "enabled": true,
          "service": "Food (Meals)",
          "serviceId": "4",
          "differentHours": false,
          "hours": {
              "sunday": "6:30PM - 7:00PM",
              "monday": "6:30PM - 7:00PM",
              "tuesday": "6:30PM - 7:00PM",
              "wednesday": "6:30PM - 7:00PM",
              "thursday": "6:30PM - 7:00PM",
              "friday": "6:30PM - 7:00PM",
              "saturday": "6:30PM - 7:00PM"
          },
          "description": "Anyone in need of a nutritious meal is welcome to join us for dinner each night of the week.\nPedestrians: Please enter the campus through the gate located on Terry Avenue, between Central Boulevard and Ossie Street."
      },
      {
          "enabled": true,
          "service": "Showers/Hygiene",
          "serviceId": "12",
          "differentHours": false,
          "hours": {
              "sunday": "Closed",
              "monday": "9:00AM - 11:30AM",
              "tuesday": "9:00AM - 11:30AM",
              "wednesday": "9:00AM - 11:30AM",
              "thursday": "9:00AM - 11:30AM",
              "friday": "Closed",
              "saturday": "Closed"
          },
          "description": "The Community Health Initiative offers shower and laundry facilities as well as mail service to unsheltered homeless men, women, and families. \nThis program is provided in partnership with the City of Orlando. \nPedestrians: Please enter the campus through the gate located at 18 N Terry Avenue."
      }
  ]
}
]
