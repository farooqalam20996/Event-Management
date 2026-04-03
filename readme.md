# EventReservation

EventReservation is a mobile application designed to streamline event creation, discovery, and participation for businesses and individuals. The platform enables organizers—such as companies, restaurants, and independent hosts—to create and manage events, while attendees can explore, register, and communicate directly with organizers.

The application combines event management, secure payments, real-time communication, and user account management into a cohesive and scalable mobile solution.

---

## Overview

EventReservation provides a flexible event ecosystem where:

* Organizers can create and publish events.
* Event creation may require a fee, depending on platform rules.
* Events can be free or paid for attendees, based on organizer preferences.
* Users can discover events and register or attend.
* Attendees and organizers can communicate via in-app messaging.

The platform is designed to support both commercial and community-driven events.

---

## Key Features

### Authentication

* User registration and login.
* Secure authentication flow.
* Account management for both organizers and attendees.

### Event Management

* Create, edit, and publish events.
* Support for both paid and free events.
* Flexible pricing controlled by event organizers.

### Payments

* Payment required for event creation (for organizers).
* Optional ticket/payment system for attendees.
* Integration with card-based payment workflows.

### Event Discovery & Sharing

* Browse available events.
* Share events with others.
* Join events based on availability and pricing.

### Messaging System

* Real-time chat between attendees and event organizers.
* Direct communication for inquiries and coordination.

### User Experience

* Light and dark theme support.
* Clean and intuitive mobile interface.

---

## Tech Stack

* **Frontend:** React Native
* **Backend:** Node.js / Firebase / REST APIs
* **Database:** MongoDB / Firestore
* **Authentication:** Firebase Auth / Custom Auth
* **Payments:** Card-based payment integration using stripe / paypal ( depends on country origin )

---

## Architecture & Approach

* Modular and component-based architecture.
* Clear separation between UI, business logic, and API layers.
* Scalable structure to support growing user and event data.
* Real-time communication handled efficiently for chat features.

---

## Challenges & Learnings

* Designing a flexible payment system for both organizers and attendees.
* Managing different event types (free vs paid) dynamically.
* Implementing real-time chat between users and organizers.
* Ensuring a smooth user experience across different themes.

---

## Future Improvements

* Push notifications for event updates and messages.
* Advanced search and filtering for events.
* Event analytics for organizers.
* Improved payment integrations and multi-currency support.

---

## Author

**Muhammad Farooq Alam Abbasi**
FullStack Engineer

Portfolio: [https://farooqalam.com/portfolio/](https://farooqalam.com/portfolio/)
LinkedIn: https://www.linkedin.com/in/muhammad-farooq-alam-abbasi-174616153/

---

## App Screenshots

| ![...](./src/appScreenshot/login.png) | ![...](./src/appScreenshot/home.png) | ![...](./src/appScreenshot/detail.png) |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| ![...](./src/appScreenshot/createEvent.png) | ![...](./src/appScreenshot/eventImage.png) | ![...](./src/appScreenshot/favourites.png) |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| ![...](./src/appScreenshot/chat.png) | ![...](./src/appScreenshot/chatScreen.png) | 
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| ![...](./src/appScreenshot/addCard.png) | ![...](./src/appScreenshot/payment.png) |

## Support

If you find this project useful, consider giving it a star on GitHub.
