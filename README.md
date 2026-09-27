# 📚 Project Bookmark Manager

A simple browser-based project bookmark manager built with HTML, CSS, and JavaScript. Organize and manage your project links efficiently with categories, search, and local storage persistence.

## Features

✨ **Add & Manage Bookmarks**
- Add new project bookmarks with name, URL, and description
- Organize bookmarks into categories (Work, Learning, Personal, Open Source, Reference, Other)
- Edit and delete bookmarks with ease

🔍 **Search & Filter**
- Search bookmarks by name, description, or URL
- Filter bookmarks by category
- View total bookmark count

💾 **Persistent Storage**
- All bookmarks are saved to browser's local storage
- Your bookmarks persist between sessions

📱 **Responsive Design**
- Works seamlessly on desktop, tablet, and mobile devices
- Beautiful gradient UI with smooth animations
- Card-based layout for easy browsing

## How to Use

1. **Open the App**: Open `index.html` in your web browser
2. **Add a Bookmark**: 
   - Enter the project name
   - Paste the project URL
   - Add an optional description
   - Select a category
   - Click "Add Bookmark"
3. **Search**: Use the search bar to find bookmarks by name, description, or URL
4. **Filter**: Click category buttons to view bookmarks from specific categories
5. **Manage**: 
   - Click "Visit" to open the bookmark in a new tab
   - Click "Edit" to modify a bookmark
   - Click "Delete" to remove a bookmark

## File Structure

```
project-bookmark-manager/
├── index.html      # HTML structure
├── styles.css      # Styling and layout
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Technologies Used

- **HTML5**: Page structure
- **CSS3**: Styling, gradients, flexbox, grid, and animations
- **JavaScript (ES6+)**: Functionality and local storage management

## Local Storage

Bookmarks are stored in the browser's localStorage under the key `bookmarks`. To export your bookmarks:

```javascript
const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
console.log(bookmarks);
```

## Future Enhancements

- Export bookmarks as JSON
- Import bookmarks from JSON
- Cloud sync functionality
- Tags and advanced filtering
- Dark mode theme
- Bookmark preview/preview cards
- Sorting options (by date, name, category)

## License

MIT License - Feel free to use and modify this project for your needs.

## Author

Created with ❤️ by Chakri Supriya
