# Movie Show Booking System

This project is a **Movie Show Booking System** where users can select a movie, choose the date and time for the show, pick available seats, and proceed to book them. The UI features modern, responsive design, including animations, and all the data is stored using **Local Storage** for persistence across page refreshes.

## Features
- **Movie Selection**: Browse through available movies with poster images.
- **Date & Time Selection**: Choose a show date and time. The system ensures that no past dates or invalid times can be selected.
- **Seat Map**: View a grid of available seats, select your preferred seats, and confirm the booking.
- **User-friendly Interface**: Clean, modern design with smooth animations and transitions.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [UI Design](#ui-design)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites
Make sure you have the following installed:
- **Web Browser** (Google Chrome, Mozilla Firefox, etc.)

### Steps
1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/aarshx05/WDT_Movie_Booking.git
    ```
2. Open the project folder in your code editor (e.g., VS Code).
3. Open `index.html` in your browser to see the app in action.

No backend server or database is required as all the data is handled via **Local Storage**.

## Usage

1. **Home Page**: Displays available movies. Click on any movie card to proceed.
2. **Select Date & Time**: Pick a valid showtime (can't select past times or showtimes less than 15 minutes away).
3. **Seat Selection**: View available seats. Click to select your desired seats, then click 'Book Seats' to confirm your reservation.
4. **Booking Confirmation**: Once seats are booked, the seats will be marked as 'Booked'.

### Notes:
- Data such as the movie, date, time, and booked seats are saved in **Local Storage** so the page remembers the selections even after a browser refresh.
  
## UI Design

The design of the booking system is modern and responsive. It adapts to both desktop and mobile screen sizes using flexbox and CSS grid. The layout includes:

- **Movie Cards**: Display movie poster images and titles. Hover effects provide interactivity.
- **Date & Time Picker**: Custom form inputs with focus effects.
- **Seat Map**: A grid of selectable seats with hover effects, selection feedback, and booked seats marked.
- **Animations**: Smooth transitions and animations are applied when navigating between pages, selecting seats, and confirming bookings.

## File Structure

```
movie-show-booking/
│
├── index.html               # Home page displaying movies
├── select-time.html         # Page for selecting the date and time
├── select-seats.html        # Page for selecting seats
├──  style.css
│                            # Main CSS file for styling the pages
├── script.js   
│                            # JavaScript for functionality (movie selection, time validation, seat selection)
└── README.md                # This file
```

## Technologies Used

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling the webpage with responsive design and smooth animations.
- **JavaScript (Vanilla)**: For dynamic functionality like movie selection, date and time validation, and seat booking. 
- **Local Storage**: For saving the user's selected movie, time, date, and booked seats.

## Contributing

We welcome contributions to this project! Here’s how you can help:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your forked repository.
5. Open a Pull Request.

We’re happy to review and merge your changes!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
