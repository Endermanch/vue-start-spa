class DataBus {
    pagesKey = 'pages';
    pagesJSON = {};
    pagesStore = [];

    constructor() {
        try {
            this.pagesJSON = localStorage.getItem(this.pagesKey);
        } catch (e) {
            console.log(e);
            localStorage.setItem(this.pagesKey, JSON.stringify([]));
        }
        finally {
            this.pagesStore = JSON.parse(this.pagesJSON);
        }
    }

    getPages() {
        return this.pagesStore || [];
    }

    getPage(index) {
        return this.pagesStore[index];
    }

    addPage(page) {
        this.pagesStore.push(page);
        localStorage.setItem(this.pagesKey, JSON.stringify(this.pagesStore));
    }

    editPage(index, page) {
        this.pagesStore[index] = page;
        localStorage.setItem(this.pagesKey, JSON.stringify(this.pagesStore));
    }

    deletePage(index) {
        this.pagesStore.splice(index, 1);
        localStorage.setItem(this.pagesKey, JSON.stringify(this.pagesStore));
    }
}

export default new DataBus();