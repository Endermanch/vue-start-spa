const pagesKey = 'pages';

class DataBus {
    getPages() {
        return JSON.parse(localStorage.getItem(pagesKey)) || [];
    }

    getPage(index) {
        return this.getPages()[index];
    }
}

export default new DataBus();