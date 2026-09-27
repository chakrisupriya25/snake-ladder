// Project Bookmark Manager

class BookmarkManager {
    constructor() {
        this.bookmarks = this.loadFromLocalStorage();
        this.currentFilter = 'all';
        this.currentSearch = '';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        // Form submission
        document.getElementById('bookmarkForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addBookmark();
        });

        // Search input
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.currentSearch = e.target.value.toLowerCase();
            this.render();
        });

        // Category filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });
    }

    addBookmark() {
        const name = document.getElementById('projectName').value.trim();
        const url = document.getElementById('projectUrl').value.trim();
        const description = document.getElementById('projectDescription').value.trim();
        const category = document.getElementById('projectCategory').value || 'Other';

        if (!name || !url) {
            alert('Please fill in project name and URL');
            return;
        }

        const bookmark = {
            id: Date.now(),
            name,
            url,
            description,
            category,
            createdAt: new Date().toLocaleString()
        };

        this.bookmarks.push(bookmark);
        this.saveToLocalStorage();
        this.clearForm();
        this.render();
        this.showNotification('Bookmark added successfully!');
    }

    deleteBookmark(id) {
        if (confirm('Are you sure you want to delete this bookmark?')) {
            this.bookmarks = this.bookmarks.filter(b => b.id !== id);
            this.saveToLocalStorage();
            this.render();
            this.showNotification('Bookmark deleted!');
        }
    }

    editBookmark(id) {
        const bookmark = this.bookmarks.find(b => b.id === id);
        if (bookmark) {
            document.getElementById('projectName').value = bookmark.name;
            document.getElementById('projectUrl').value = bookmark.url;
            document.getElementById('projectDescription').value = bookmark.description;
            document.getElementById('projectCategory').value = bookmark.category;
            
            this.deleteBookmark(id);
            document.querySelector('input[type="text"]').focus();
        }
    }

    getFilteredBookmarks() {
        return this.bookmarks.filter(bookmark => {
            const matchesCategory = this.currentFilter === 'all' || bookmark.category === this.currentFilter;
            const matchesSearch = 
                bookmark.name.toLowerCase().includes(this.currentSearch) ||
                bookmark.description.toLowerCase().includes(this.currentSearch) ||
                bookmark.url.toLowerCase().includes(this.currentSearch);
            return matchesCategory && matchesSearch;
        });
    }

    render() {
        const bookmarksList = document.getElementById('bookmarksList');
        const filtered = this.getFilteredBookmarks();
        const count = document.getElementById('bookmarkCount');

        count.textContent = filtered.length;

        if (filtered.length === 0) {
            bookmarksList.innerHTML = '<div class="empty-state"><p>No bookmarks yet. Add your first bookmark to get started! 🚀</p></div>';
            return;
        }

        bookmarksList.innerHTML = filtered.map(bookmark => `
            <div class="bookmark-card">
                <span class="bookmark-category">${bookmark.category}</span>
                <div class="bookmark-title">${this.escapeHtml(bookmark.name)}</div>
                ${bookmark.description ? `<div class="bookmark-description">${this.escapeHtml(bookmark.description)}</div>` : ''}
                <a href="${bookmark.url}" target="_blank" class="bookmark-url">${this.escapeHtml(bookmark.url)}</a>
                <div class="bookmark-actions">
                    <button class="btn-small btn-visit" onclick="bookmarkManager.openBookmark('${bookmark.url}')">Visit</button>
                    <button class="btn-small btn-edit" onclick="bookmarkManager.editBookmark(${bookmark.id})">Edit</button>
                    <button class="btn-small btn-delete" onclick="bookmarkManager.deleteBookmark(${bookmark.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }

    openBookmark(url) {
        window.open(url, '_blank');
    }

    clearForm() {
        document.getElementById('bookmarkForm').reset();
    }

    saveToLocalStorage() {
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
    }

    loadFromLocalStorage() {
        const saved = localStorage.getItem('bookmarks');
        return saved ? JSON.parse(saved) : [];
    }

    showNotification(message) {
        // Simple notification (can be enhanced)
        console.log(message);
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Initialize the app when DOM is ready
let bookmarkManager;
document.addEventListener('DOMContentLoaded', () => {
    bookmarkManager = new BookmarkManager();
});