class EventBus {
    constructor() {
        this.events = new Map();
    }

    $on(eventName, fn) {
        if (!this.events.has(eventName))
            this.events.set(eventName, []);

        this.events.get(eventName).push(fn);
    }

    $off(eventName, fn) {
        if (!this.events.has(eventName))
            return;

        for (let i = 0; i < this.events[eventName].length; i++) {
            if (this.events[eventName][i] === fn) {
                this.events[eventName].splice(i, 1);
                break;
            }
        }
    }

    $emit(eventName, data) {
      if (this.events.has(eventName))
          this.events.get(eventName).forEach(fn => fn(data));
    }
}

export default new EventBus();